// Backend/socket.js
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import * as messageModel from "./models/messageModel.js";
import * as reactionModel from "./models/reactionModel.js";
import * as chatModel from "./models/chatModel.js";

/**
 * initSocket(server, httpServer) -> returns io instance
 * expects client to send token on connection: socket.handshake.auth.token
 */
export function initSocket(httpServer, { corsOrigin = "*" } = {}) {
  const io = new Server(httpServer, {
    cors: { origin: corsOrigin, methods: ["GET","POST"] }
  });

  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error("auth error"));
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = { id: payload.id, email: payload.email, name: payload.name };
      return next();
    } catch (err) {
      return next(new Error("auth error"));
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.user.id;

    socket.on("join_chat", ({ chatId }) => {
      socket.join(`chat:${chatId}`);
      // optionally emit presence
    });

    socket.on("leave_chat", ({ chatId }) => {
      socket.leave(`chat:${chatId}`);
    });

    socket.on("send_message", async (payload, ack) => {
      try {
        const { chatId, body = "", attachments = [] } = payload;
        const message = await messageModel.createMessage({ chat_id: chatId, user_id: userId, body, attachments });
        // enrich message with sender info (optional)
        const send = { ...message, sender: socket.user };
        io.to(`chat:${chatId}`).emit("message_new", send);
        if (ack) ack({ success: true, data: send });
      } catch (err) {
        if (ack) ack({ success:false, message: err.message });
      }
    });

    socket.on("typing", ({ chatId }) => {
      socket.to(`chat:${chatId}`).emit("typing", { chatId, userId });
    });

    socket.on("stop_typing", ({ chatId }) => {
      socket.to(`chat:${chatId}`).emit("stop_typing", { chatId, userId });
    });

    socket.on("edit_message", async ({ chatId, messageId, body }, ack) => {
      try {
        const updated = await messageModel.updateMessage(messageId, { body, edited: true });
        io.to(`chat:${chatId}`).emit("message_edited", updated);
        if (ack) ack({ success:true, data: updated });
      } catch (e) { if (ack) ack({ success:false, message: e.message }); }
    });

    socket.on("delete_message", async ({ chatId, messageId }, ack) => {
      try {
        const deleted = await messageModel.deleteMessage(messageId);
        io.to(`chat:${chatId}`).emit("message_deleted", { id: messageId });
        if (ack) ack({ success:true });
      } catch (e) { if (ack) ack({ success:false, message: e.message }); }
    });

    socket.on("react_message", async ({ chatId, messageId, type }, ack) => {
      try {
        await reactionModel.addReaction(messageId, userId, type);
        const stats = await reactionModel.getReactionsForMessage(messageId);
        io.to(`chat:${chatId}`).emit("reaction_updated", { messageId, stats });
        if (ack) ack({ success:true, data: stats });
      } catch (e) { if (ack) ack({ success:false, message: e.message }); }
    });

    socket.on("message_seen", async ({ chatId, messageId }) => {
      // optional: implement message seen persistence if you want
      socket.to(`chat:${chatId}`).emit("message_seen", { chatId, messageId, userId });
    });

    socket.on("disconnect", () => {
      // handle user offline presence
    });
  });

  return io;
}

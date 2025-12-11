// Backend/controllers/messageController.js
import * as messageModel from "../models/messageModel.js";
import * as reactionModel from "../models/reactionModel.js";

/* create message via REST (used when client wants REST fallback) */
export async function sendMessageHandler(req, res, next) {
  try {
    const { chatId } = req.params;
    const { body = '', attachments = [] } = req.body;
    const message = await messageModel.createMessage({ chat_id: chatId, user_id: req.user.id, body, attachments });
    res.status(201).json({ success:true, data: message });
  } catch (err) { next(err); }
}

export async function getMessagesHandler(req, res, next) {
  try {
    const { chatId } = req.params;
    const { limit = 50, offset = 0 } = req.query;
    const rows = await messageModel.getMessages(chatId, Number(limit), Number(offset));
    res.json({ success:true, data: rows });
  } catch (err) { next(err); }
}

export async function editMessageHandler(req, res, next) {
  try {
    const { messageId } = req.params;
    const { body } = req.body;
    const updated = await messageModel.updateMessage(messageId, { body, edited: true });
    res.json({ success:true, data: updated });
  } catch (err) { next(err); }
}

export async function deleteMessageHandler(req, res, next) {
  try {
    const { messageId } = req.params;
    const deleted = await messageModel.deleteMessage(messageId);
    res.json({ success:true, data: deleted });
  } catch (err) { next(err); }
}

export async function addReactionHandler(req, res, next) {
  try {
    const { messageId } = req.params;
    const { type } = req.body;
    const added = await reactionModel.addReaction(messageId, req.user.id, type || 'like');
    const stats = await reactionModel.getReactionsForMessage(messageId);
    res.json({ success:true, data: stats });
  } catch (err) { next(err); }
}

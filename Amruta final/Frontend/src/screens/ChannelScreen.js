// ChatScreen.jsx
// ----------------- CONFIGURE THESE -----------------
const BASE_URL = "http://192.168.1.5:3000"; // <-- बदल
// Socket URL should point to the same host as your backend (no trailing /api)
const SOCKET_URL = BASE_URL;   // default to backend host; override if needed
// AsyncStorage keys used: "token" for JWT, "user" for user JSON (optional)
// ----------------------------------------------------

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { io } from "socket.io-client";

const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];
const EMOJI_LIST = [
  "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","🙂","🤗",
  "🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜",
  "😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟","😤","😢","😭","😦","😧",
  "😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮",
  "🤧","😇","🤠","🤡","🤥","🤫","🤭","🧐","🤓","💀","☠️","👻","👽","🤖","💩",
];

// ---------------- Minimal api helper ----------------
async function apiRequest(path, method = "GET", body = null, isForm = false) {
  const token = await AsyncStorage.getItem("token");
  const headers = {};
  if (!isForm) headers["Content-Type"] = "application/json";
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: isForm ? body : body ? JSON.stringify(body) : undefined,
  });

  let json = null;
  try { json = await res.json(); } catch (e) {}
  if (!res.ok) {
    const message = json?.message || `HTTP ${res.status}`;
    throw new Error(message);
  }
  return json?.data ?? json;
}
// ----------------------------------------------------

export default function ChatScreen({ route, navigation }) {
  const params = route.params || {};
  const initialChatId = params.chatId;
  const contact = params.contact; // optional: when navigating from chat list
  const [chatId, setChatId] = useState(initialChatId || null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyTo, setReplyTo] = useState(null);
  const [showActionsSheet, setShowActionsSheet] = useState(false);
  const [showAttachmentSheet, setShowAttachmentSheet] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [otherTyping, setOtherTyping] = useState(false);
  const [sending, setSending] = useState(false);

  const socketRef = useRef(null);
  const listRef = useRef(null);
  const myIdRef = useRef(null);

  // load user id (optional)
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem("user");
        if (raw) {
          const u = JSON.parse(raw);
          myIdRef.current = u?.id ?? null;
        }
      } catch (e) { /* ignore */ }
    })();
  }, []);

  // fetch or create chat (if contact provided) then fetch messages
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);

        // if we don't have a chatId but have a contact, create a direct chat first
        let effectiveChatId = chatId;
        if (!effectiveChatId && contact) {
          try {
            const created = await apiRequest(`/api/chat`, "POST", { type: "direct", members: [contact.userId ?? contact.id] });
            if (!mounted) return;
            effectiveChatId = created?.id ?? created?.data?.id ?? created?.data;
            if (effectiveChatId) setChatId(effectiveChatId);
          } catch (e) {
            console.warn("create direct chat failed:", e.message || e);
            return;
          }
        }

        if (!effectiveChatId) return;

        const data = await apiRequest(`/messages/${effectiveChatId}`, "GET");
        if (!mounted) return;

        // normalize to our UI shape
        const mapped = (data || []).map((m) => ({
          id: m.id?.toString() ?? `${Date.now()}`,
          text: m.body ?? "",
          type: m.type ?? "text",
          uri: (m.attachments && m.attachments.length) ? m.attachments[0].uri : null,
          fileName: (m.attachments && m.attachments.length) ? m.attachments[0].name : null,
          sender_id: m.user_id ?? m.sender_id,
          sender_name: m.sender_name ?? "Unknown",
          isMe: myIdRef.current ? (m.user_id ?? m.sender_id) === myIdRef.current : false,
          reaction: m.reaction ?? null,
          replyToId: m.reply_to_id ?? null,
        }));
        setMessages(mapped);
        setTimeout(() => listRef.current?.scrollToEnd?.({ animated: false }), 60);
      } catch (e) {
        console.warn("loadMessages:", e.message || e);
      } finally {
        setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, [chatId, contact]);

  // socket connect & handlers
  useEffect(() => {
    if (!chatId) return;
    let mounted = true;
    (async () => {
      const token = await AsyncStorage.getItem("token");
      const socket = io(SOCKET_URL, { auth: { token }, transports: ["websocket"] });
      socketRef.current = socket;

      socket.on("connect", () => {
        socket.emit("join_chat", { chatId });
      });

      socket.on("message_new", (msg) => {
        if (!mounted) return;
        const normalized = {
          id: msg.id?.toString() || `s-${Date.now()}`,
          text: msg.body ?? "",
          type: msg.type ?? "text",
          uri: (msg.attachments && msg.attachments.length) ? msg.attachments[0].uri : null,
          fileName: (msg.attachments && msg.attachments.length) ? msg.attachments[0].name : null,
          sender_id: msg.user_id ?? msg.sender_id,
          sender_name: msg.sender_name ?? "Unknown",
          isMe: myIdRef.current ? (msg.user_id ?? msg.sender_id) === myIdRef.current : false,
        };
        setMessages((prev) => [...prev, normalized]);
        setTimeout(() => listRef.current?.scrollToEnd?.({ animated: true }), 60);
      });

      socket.on("typing", () => {
        if (!mounted) return;
        setOtherTyping(true);
        setTimeout(() => setOtherTyping(false), 1400);
      });

      socket.on("connect_error", (err) => {
        console.warn("socket connect_error", err.message || err);
      });
    })();

    return () => {
      mounted = false;
      if (socketRef.current) {
        socketRef.current.emit("leave_chat", { chatId });
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [chatId]);

  // optimistic send
  const handleSend = async () => {
    if (!input.trim() || !chatId) return;
    const text = input.trim();
    setInput("");
    setReplyTo(null);

    const tempId = `tmp-${Date.now()}`;
    const optimistic = {
      id: tempId,
      text,
      type: "text",
      isMe: true,
      sender_name: "You",
    };
    setMessages((prev) => [...prev, optimistic]);
    listRef.current?.scrollToEnd?.({ animated: true });

    try {
      setSending(true);
      if (socketRef.current && socketRef.current.connected) {
        // send via socket with acknowledgement callback — align with backend event name
        socketRef.current.emit("send_message", { chatId, body: text, attachments: [] }, (ack) => {
          if (ack && ack.success && ack.data && ack.data.id) {
            setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, id: ack.data.id.toString() } : m)));
          }
        });
      } else {
        // fallback to REST
        const data = await apiRequest(`/messages/${chatId}`, "POST", { text, type: "text" });
        if (data && data.id) {
          setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, id: data.id.toString() } : m)));
        }
      }
    } catch (e) {
      console.warn("send failed:", e.message || e);
      // remove optimistic message on failure (or mark failed)
      setMessages((prev) => prev.filter((m) => m.id !== tempId));
    } finally {
      setSending(false);
    }
  };

  // pick image and emit upload intent (backend should handle multipart or socket upload)
  const pickImageFromLibrary = async () => {
    setShowAttachmentSheet(false);
    try {
      const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
      if (res.canceled || !res.assets?.length) return;
      const asset = res.assets[0];
      // optimistic
      const tempId = `tmpimg-${Date.now()}`;
      setMessages((p) => [...p, { id: tempId, type: "image", uri: asset.uri, isMe: true }]);
      listRef.current?.scrollToEnd?.({ animated: true });

      // emit to socket; backend must accept fileUri or implement upload endpoint
      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.emit("send_message", { chatId, body: "", attachments: [{ uri: asset.uri, type: "image", name: asset.fileName || `image-${Date.now()}.jpg` }] }, (ack) => {
          if (ack && ack.success && ack.data && ack.data.id) {
            setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, id: ack.data.id.toString(), uri: ack.data.attachments?.[0]?.uri ?? m.uri } : m)));
          }
        });
      } else {
        // Optionally call REST upload endpoint if implemented
        // const uploaded = await uploadFile(`/messages/${chatId}/attachments`, asset.uri, "file", { type: "image" });
      }
    } catch (e) {
      console.warn("pickImage error:", e.message || e);
    }
  };

  // pick document
  const pickDocumentGeneric = async (forAudio = false) => {
    setShowAttachmentSheet(false);
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: forAudio ? "audio/*" : "*/*", copyToCacheDirectory: true });
      if (result.type !== "success") return;
      const tempId = `tmpdoc-${Date.now()}`;
      setMessages((p) => [...p, { id: tempId, type: forAudio ? "audio" : "document", fileName: result.name, uri: result.uri, isMe: true }]);
      listRef.current?.scrollToEnd?.({ animated: true });

      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.emit("send_message", { chatId, body: "", attachments: [{ uri: result.uri, type: forAudio ? "audio" : "file", name: result.name }] }, (ack) => {
          if (ack && ack.success && ack.data && ack.data.id) setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, id: ack.data.id.toString() } : m)));
        });
      }
    } catch (e) {
      console.warn("pick document error", e.message || e);
    }
  };

  const onLongPressMessage = (msg) => {
    setSelectedMessage(msg);
    setShowActionsSheet(true);
  };

  const setReactionForSelected = (emoji) => {
    if (!selectedMessage || emoji === "➕") return;
    // optimistic local update
    setMessages((prev) => prev.map((m) => (m.id === selectedMessage.id ? { ...m, reaction: emoji } : m)));
    setShowActionsSheet(false);
    // backend reaction API can be called here, e.g. apiRequest(`/messages/${selectedMessage.id}/reaction`,"POST",{ reaction: emoji })
  };

  const handleDelete = () => {
    if (!selectedMessage) return;
    setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
    setShowActionsSheet(false);
    // optionally call backend delete
  };

  const handleCopy = () => {
    setShowActionsSheet(false);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 1400);
    // optionally Clipboard.setStringAsync(selectedMessage?.text)
  };

  const handleReply = () => {
    setReplyTo(selectedMessage);
    setShowActionsSheet(false);
  };

  const handleForward = () => {
    setShowActionsSheet(false);
    navigation.navigate("Forward", { message: selectedMessage });
  };

  const handleReport = () => {
    setShowActionsSheet(false);
    navigation.navigate("Report", { message: selectedMessage });
  };

  const renderMessage = ({ item }) => {
    const isMe = item.isMe;
    const container = [styles.messageRow, isMe ? styles.messageRowRight : styles.messageRowLeft];
    const bubble = [styles.bubble, isMe ? styles.bubbleMe : styles.bubbleOther];

    const replyMsg = item.replyToId ? messages.find((m) => m.id === item.replyToId) : null;

    return (
      <TouchableOpacity style={container} activeOpacity={0.8} onLongPress={() => onLongPressMessage(item)}>
        <View style={bubble}>
          {replyMsg && (
            <View style={styles.replyPreview}>
              <Text style={styles.replyPreviewName}>Replying to {replyMsg.sender_name ?? replyMsg.author}</Text>
              <Text numberOfLines={1} style={styles.replyPreviewText}>{replyMsg.text}</Text>
            </View>
          )}

          {item.type === "image" ? (
            <Image source={{ uri: item.uri }} style={styles.imageMessage} />
          ) : item.type === "document" ? (
            <View style={styles.fileRow}>
              <Ionicons name="document-text-outline" size={20} color="#E5E7EB" />
              <Text style={styles.fileText} numberOfLines={1}>{item.fileName || item.text || "Document"}</Text>
            </View>
          ) : item.type === "audio" ? (
            <View style={styles.fileRow}>
              <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
              <Text style={styles.fileText} numberOfLines={1}>{item.fileName || "Audio message"}</Text>
            </View>
          ) : (
            <Text style={styles.bubbleText}>{item.text}</Text>
          )}

          {item.reaction && (
            <View style={styles.reactionBadge}>
              <Text style={styles.reactionText}>{item.reaction}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chat</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => navigation.navigate("VoiceCall", { contact: {} })}>
              <Ionicons name="call-outline" size={22} color="#E5E7EB" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 14 }} onPress={() => navigation.navigate("VideoCall", { contact: {} })}>
              <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
            </TouchableOpacity>
          </View>
        </View>

        {showCopyToast && (
          <View style={styles.copyToast}>
            <Ionicons name="copy-outline" size={16} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.copyToastText}>Copied</Text>
          </View>
        )}

        {loading ? (
          <ActivityIndicator style={{ marginTop: 30 }} color="#fff" />
        ) : (
          <FlatList
            ref={listRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={styles.listContent}
          />
        )}

        {otherTyping && (
          <View style={styles.typingRow}>
            <View style={styles.typingBubble}>
              <View style={styles.typingDot} />
              <View style={styles.typingDot} />
              <View style={styles.typingDot} />
            </View>
            <Text style={styles.typingText}>Typing…</Text>
          </View>
        )}

        {replyTo && (
          <View style={styles.replyBarWrapper}>
            <View style={styles.replyBar}>
              <View style={{ flex: 1 }}>
                <Text style={styles.replyBarTitle}>Replying to {replyTo.sender_name ?? replyTo.author}</Text>
                <Text numberOfLines={1} style={styles.replyBarText}>{replyTo.text}</Text>
              </View>
              <TouchableOpacity onPress={() => setReplyTo(null)}>
                <Ionicons name="close" size={18} color="#E5E7EB" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {showEmojiPicker && (
          <View style={styles.emojiPicker}>
            <FlatList
              data={EMOJI_LIST}
              keyExtractor={(_, idx) => idx.toString()}
              numColumns={8}
              contentContainerStyle={{ paddingBottom: 4 }}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.emojiItem} onPress={() => setInput((p) => p + item)}>
                  <Text style={{ fontSize: 24 }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <View style={styles.inputRow}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => { setShowEmojiPicker(false); setShowAttachmentSheet(true); }}>
              <Ionicons name="add" size={24} color="#E5E7EB" />
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="Okay."
              placeholderTextColor="#9CA3AF"
              value={input}
              onChangeText={(t) => {
                setInput(t);
                if (socketRef.current?.connected) socketRef.current.emit("typing", { chatId });
              }}
              onFocus={() => setShowEmojiPicker(false)}
            />

            <TouchableOpacity style={styles.iconBtn} onPress={() => setShowEmojiPicker((v) => !v)}>
              <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={handleSend} disabled={sending}>
              <Ionicons name="send" size={22} color="#E5E7EB" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>

      {/* Actions sheet */}
      <Modal visible={showActionsSheet} transparent animationType="fade" onRequestClose={() => setShowActionsSheet(false)}>
        <Pressable style={styles.backdrop} onPress={() => setShowActionsSheet(false)} />
        <View style={styles.sheet}>
          <View style={styles.sheetHandle} />
          {selectedMessage && (
            <View style={styles.previewBubble}>
              <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
            </View>
          )}
          <View style={styles.reactionRow}>
            {REACTION_EMOJIS.map((e) => (
              <TouchableOpacity key={e} style={styles.reactionCircle} onPress={() => setReactionForSelected(e)}>
                <Text style={styles.reactionEmoji}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop: 6 }}>
            <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
            <SheetAction label="Forward" icon="arrow-redo-outline" onPress={handleForward} />
            <SheetAction label="Pin" icon="pin-outline" />
            <SheetAction label="Edit" icon="pencil-outline" />
            <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
            <SheetAction label="Report" icon="flag-outline" danger onPress={handleReport} />
            <SheetAction label="Delete" icon="trash-outline" danger onPress={handleDelete} />
          </View>
        </View>
      </Modal>

      {/* Attachment sheet */}
      <Modal visible={showAttachmentSheet} transparent animationType="fade" onRequestClose={() => setShowAttachmentSheet(false)}>
        <Pressable style={styles.backdrop} onPress={() => setShowAttachmentSheet(false)} />
        <View style={styles.attachSheet}>
          <View style={styles.sheetHandle} />
          <AttachRow icon="image-outline" label="Photo / Image" onPress={pickImageFromLibrary} />
          <AttachRow icon="musical-notes-outline" label="Audio file" onPress={() => pickDocumentGeneric(true)} />
          <AttachRow icon="document-text-outline" label="Document" onPress={() => pickDocumentGeneric(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const SheetAction = ({ label, icon, onPress, danger }) => (
  <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
    <View style={styles.sheetRowLeft}>
      <Ionicons name={icon} size={20} color={danger ? "#F97373" : "#E5E7EB"} style={{ marginRight: 14 }} />
      <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const AttachRow = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.attachRow} onPress={onPress}>
    <View style={styles.sheetRowLeft}>
      <Ionicons name={icon} size={22} color="#E5E7EB" style={{ marginRight: 14 }} />
      <Text style={styles.sheetText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#020617" },
  container: { flex: 1, backgroundColor: "#0B1220" },

  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 10, justifyContent: "space-between" },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  headerTitle: { color: "#E5E7EB", fontSize: 18, fontWeight: "600", marginLeft: 6 },
  headerRight: { flexDirection: "row", alignItems: "center" },

  listContent: { paddingHorizontal: 12, paddingVertical: 8 },
  messageRow: { marginVertical: 4, flexDirection: "row" },
  messageRowLeft: { justifyContent: "flex-start" },
  messageRowRight: { justifyContent: "flex-end" },
  bubble: { maxWidth: "75%", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 18 },
  bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
  bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
  bubbleText: { color: "#E5E7EB", fontSize: 14 },

  imageMessage: { width: 180, height: 200, borderRadius: 14, resizeMode: "cover" },
  fileRow: { flexDirection: "row", alignItems: "center" },
  fileText: { marginLeft: 6, color: "#E5E7EB", fontSize: 13, flexShrink: 1 },

  reactionBadge: { alignSelf: "flex-end", marginTop: 4, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 12, backgroundColor: "rgba(15,23,42,0.9)" },
  reactionText: { fontSize: 12, color: "#F9FAFB" },

  replyPreview: { marginBottom: 4, padding: 6, borderLeftWidth: 2, borderLeftColor: "rgba(15,23,42,0.6)", backgroundColor: "rgba(15,23,42,0.3)", borderRadius: 10 },
  replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
  replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

  typingRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, marginBottom: 4 },
  typingBubble: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 16, backgroundColor: "rgba(15,23,42,0.8)", marginRight: 8 },
  typingDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: "#E5E7EB", marginHorizontal: 2 },
  typingText: { fontSize: 12, color: "#9CA3AF" },

  copyToast: { position: "absolute", top: 100, alignSelf: "center", flexDirection: "row", alignItems: "center", paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, backgroundColor: "rgba(15,15,15,0.9)", zIndex: 20, shadowColor: "#000", shadowOpacity: 0.35, shadowRadius: 6, shadowOffset: { width: 0, height: 4 }, elevation: 8 },
  copyToastText: { color: "#FFFFFF", fontSize: 13 },

  replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
  replyBar: { backgroundColor: "#020617", borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, flexDirection: "row", alignItems: "center" },
  replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
  replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

  emojiPicker: { maxHeight: 230, backgroundColor: "#020617", borderTopLeftRadius: 18, borderTopRightRadius: 18, borderTopWidth: 1, borderColor: "#1F2937", paddingTop: 6 },
  emojiItem: { width: "12.5%", paddingVertical: 6, alignItems: "center", justifyContent: "center" },

  inputRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingTop: 6, paddingBottom: 8, backgroundColor: "#020617" },
  textInput: { flex: 1, borderRadius: 999, backgroundColor: "#020617", borderWidth: 1, borderColor: "#1F2937", paddingHorizontal: 12, paddingVertical: 8, color: "#F9FAFB", marginHorizontal: 6, fontSize: 14 },
  iconBtn: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },

  backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },

  sheet: { position: "absolute", left: 0, right: 0, bottom: 0, backgroundColor: "#020617", borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24 },
  attachSheet: { position: "absolute", left: 0, right: 0, bottom: 0, backgroundColor: "#020617", borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 16, paddingTop: 8, paddingBottom: 24 },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: "#4B5563", alignSelf: "center", marginBottom: 10 },
  previewBubble: { backgroundColor: "#1E293B", borderRadius: 16, paddingVertical: 10, paddingHorizontal: 12, marginBottom: 14 },

  reactionRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 12 },
  reactionCircle: { width: 40, height: 40, borderRadius: 20, marginHorizontal: 4, alignItems: "center", justifyContent: "center", backgroundColor: "#020617", borderWidth: 1, borderColor: "#1E293B" },
  reactionEmoji: { fontSize: 22 },

  sheetRow: { paddingVertical: 9 },
  attachRow: { paddingVertical: 12 },
  sheetRowLeft: { flexDirection: "row", alignItems: "center" },
  sheetText: { color: "#E5E7EB", fontSize: 15 },
});
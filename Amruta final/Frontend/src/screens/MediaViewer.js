
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const scale = (size) => (SCREEN_W / guidelineBaseWidth) * size;

/* ---------- Sample messages (replace with real data) ---------- */
const MESSAGES = [
  {
    id: "p1",
    type: "post",
    author: "NicholasChan",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    time: "2h ago",
    text:
      "Hi @everyone Please Check It Out My Nexus Member List sushii @sushiiIive corrected my mistake there from last week.",
    media:
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1200",
    likes: 15800,
    replies: [
      {
        id: "r1",
        author: "NicholasChan",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
        text: "Cheers! 🎵 much appreciated",
        time: "12mins ago",
      },
      {
        id: "r2",
        author: "NicholasChan",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
        text: "Cheers! 🎵 much appreciated",
        time: "12mins ago",
      },
    ],
  },
  {
    id: "p2",
    type: "message",
    author: "Chala",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    time: "1 mins ago",
    text: "Hi @everyone",
  },
];

export default function ChatScreen({ route, navigation }) {
  const channel = route?.params?.channelName ?? "# < media, >";

  // modal / menu state
  const [menuVisible, setMenuVisible] = useState(false);
  const [activePost, setActivePost] = useState(null);

  // store layouts of posts: { [postId]: { y, height } }
  const positionsRef = useRef({});
  // track scroll y of ScrollView
  const [scrollY, setScrollY] = useState(0);

  // toast (floating confirmation) state
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastTop, setToastTop] = useState(0);
  const [toastIcon, setToastIcon] = useState("copy");
  const [toastIconColor, setToastIconColor] = useState("#dbeafe");
  const toastOpacity = useRef(new Animated.Value(0)).current;

  // Input state + ref for mention behavior
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [replyTarget, setReplyTarget] = useState(null); // optional: which post we're replying/mentioning

  const openPostMenu = (post) => {
    setActivePost(post);
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setActivePost(null);
  };

  const showToast = (text, postId, icon = "copy", iconColor = "#dbeafe") => {
    const layout = positionsRef.current[postId];
    // default top if layout not known
    let top = SCREEN_H * 0.2;
    if (layout) {
      // layout.y is relative to content; subtract scrollY to get screen coords
      top = layout.y - scrollY - scale(56); // show above the post header
      // clamp so it's visible
      if (top < scale(36)) top = scale(36);
      if (top > SCREEN_H - scale(200)) top = SCREEN_H - scale(200);
    }

    setToastTop(top);
    setToastText(text);
    setToastIcon(icon);
    setToastIconColor(iconColor);
    setToastVisible(true);

    // fade in
    Animated.timing(toastOpacity, {
      toValue: 1,
      duration: 160,
      useNativeDriver: true,
    }).start();

    // auto hide after 1.5s
    setTimeout(() => {
      Animated.timing(toastOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setToastVisible(false);
      });
    }, 1500);
  };

  const handleMenuAction = (action) => {
    console.log("Action:", action, "on", activePost?.id);

    if (action === "copy") {
      // Clipboard.setString(activePost?.text || ""); // optional
      showToast("Copy Message", activePost?.id, "copy", "#dbeafe");
      closeMenu();
      return;
    }

    if (action === "mark") {
      showToast("Marked Unread", activePost?.id, "moon", "#a3e635");
      closeMenu();
      return;
    }

    if (action === "report") {
      showToast("Reported", activePost?.id, "flag", "#ff7b7b");
      closeMenu();
      return;
    }

    if (action === "copylink") {
      // Optionally copy a generated link to clipboard here:
      // Clipboard.setString(generateLinkForPost(activePost));
      showToast("Link Copied", activePost?.id, "link", "#d6bcfa");
      closeMenu();
      return;
    }

    if (action === "mention") {
      // 1) Prefill the input with @AuthorName
      const name = activePost?.author ? `@${activePost.author}` : "@";
      setInputValue(name + " ");
      setReplyTarget(activePost?.id ?? null);

      // 2) Close menu and focus the TextInput so keyboard opens
      closeMenu();

      // small timeout helps ensure modal closed before focus on some devices
      setTimeout(() => {
        if (inputRef?.current?.focus) {
          inputRef.current.focus();
          try {
            inputRef.current.setNativeProps({
              selection: { start: (name + " ").length, end: (name + " ").length },
            });
          } catch (e) {
            // ignore if not supported
          }
        }
      }, 80);

      return;
    }

    // other actions (forward, etc.)
    showToast(action === "forward" ? "Forwarded" : "Done", activePost?.id, "check", "#9fb4ff");
    closeMenu();
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#BFD6FF" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.channelLabel}>{channel}</Text>
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation?.goBack()}>
    <Ionicons name="chevron-back" size={24} color="#BFD6FF" />
  </TouchableOpacity>

  {/* CLICKABLE MEDIA -> v66 */}
  <TouchableOpacity
    style={styles.headerCenter}
    activeOpacity={0.7}
    onPress={() => navigation.navigate("Header_media", { channelName: channel })}
  >
    <Text style={styles.channelLabel}>{channel}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.searchBtn}>
    <Feather name="search" size={18} color="#ffffff" />
  </TouchableOpacity>
</View>


      {/* Messages */}
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.content}
        // track scroll position to position toast correctly
        onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
      >
        {MESSAGES.map((m) => {
          if (m.type === "post") {
            return (
              <View
                key={m.id}
                style={styles.postCard}
                // capture layout of the post container
                onLayout={(e) => {
                  positionsRef.current[m.id] = {
                    y: e.nativeEvent.layout.y,
                    height: e.nativeEvent.layout.height,
                  };
                }}
              >
                {/* Author row */}
                <View style={styles.postHeader}>
                  <Image source={{ uri: m.avatar }} style={styles.postAvatar} />
                  <View style={styles.postMeta}>
                    <View style={styles.postMetaRow}>
                      <Text style={styles.postAuthor}>{m.author}</Text>
                      <Text style={styles.postTime}> · {m.time}</Text>

                      {/* three-dots button opens modal */}
                      <TouchableOpacity
                        style={styles.postMore}
                        onPress={() => openPostMenu(m)}
                      >
                        <Feather name="more-vertical" size={16} color="#9fb4ff" />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.postText}>{m.text}</Text>
                  </View>
                </View>

                {/* Media thumbnail (tappable) */}
                {m.media ? (
                  <TouchableOpacity
                    activeOpacity={0.95}
                    onPress={() =>
                      navigation.navigate("MediaViewer", {
                        uri: m.media,
                        author: m.author,
                        time: m.time,
                      })
                    }
                    style={styles.mediaWrapper}
                  >
                    <Image source={{ uri: m.media }} style={styles.mediaImage} />
                  </TouchableOpacity>
                ) : null}

                {/* Reaction + replies summary */}
                <View style={styles.reactionRow}>
                  <TouchableOpacity style={styles.reactionBtn}>
                    <Feather name="heart" size={18} color="#ff6b81" />
                    <Text style={styles.reactionCount}>
                      {formatCount(m.likes)}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.replyBtn}>
                    <Feather name="corner-down-left" size={16} color="#9fb4ff" />
                    <Text style={styles.replyText}>
                      {m.replies?.length ?? 0} replies
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Threaded replies with connector */}
                <View style={styles.threadWrapper}>
                  {m.replies?.map((r, idx) => (
                    <View key={r.id} style={styles.replyRow}>
                      <View style={styles.connectorColumn}>
                        <View style={styles.dot} />
                        <View style={styles.vertLine} />
                      </View>

                      <View style={styles.replyContent}>
                        <View style={styles.replyHeader}>
                          <Image
                            source={{ uri: r.avatar }}
                            style={styles.smallAvatar}
                          />
                          <View style={{ marginLeft: 8 }}>
                            <Text style={styles.replyAuthor}>{r.author}</Text>
                            <Text style={styles.replyTime}>{r.time}</Text>
                          </View>
                        </View>

                        <Text style={styles.replyTextBody}>{r.text}</Text>

                        <View style={styles.replyActions}>
                          <TouchableOpacity style={styles.replyActionBtn}>
                            <Feather name="heart" size={14} color="#9fb4ff" />
                            <Text style={styles.replyActionText}>15.8k</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={[styles.replyActionBtn, { marginLeft: 12 }]}
                          >
                            <Feather name="corner-up-left" size={14} color="#9fb4ff" />
                            <Text style={styles.replyActionText}>Reply</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            );
          }

          if (m.type === "message") {
            return (
              <View key={m.id} style={styles.simpleMessage}>
                <Image source={{ uri: m.avatar }} style={styles.smallAvatar} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.msgAuthor}>
                    {m.author} · <Text style={styles.msgTime}>{m.time}</Text>
                  </Text>
                  <Text style={styles.msgText}>{m.text}</Text>
                </View>
              </View>
            );
          }

          return null;
        })}

        {/* day divider */}
        <View style={styles.dayDivider}>
          <Text style={styles.dayDividerText}>Today</Text>
        </View>

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Input bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="image" size={20} color="#9fb4ff" />
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <TextInput
            ref={inputRef}
            value={inputValue}
            onChangeText={(t) => setInputValue(t)}
            placeholder="Message #general_espc..."
            placeholderTextColor="#9aa4c8"
            style={styles.input}
            multiline={false}
            returnKeyType="send"
            onSubmitEditing={() => {
              // handle send; clear input after send for demo
              if (inputValue.trim()) {
                console.log("Send:", inputValue, "replyTarget:", replyTarget);
                setInputValue("");
                setReplyTarget(null);
              }
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => {
            // quick-send button behaviour
            if (inputValue.trim()) {
              console.log("Send pressed:", inputValue, "replyTarget:", replyTarget);
              setInputValue("");
              setReplyTarget(null);
            }
          }}
        >
          <Feather name="send" size={18} color="#9fb4ff" />
        </TouchableOpacity>
      </View>

      {/* ---------- Modal Menu (shown when three-dots clicked) ---------- */}
      <Modal
        visible={menuVisible}
        animationType="fade"
        transparent
        onRequestClose={closeMenu}
      >
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.sheetWrapper}>
                <View style={styles.sheetHandle} />

                {/* Menu items */}
                <ScrollView
                  style={styles.menuList}
                  contentContainerStyle={{ paddingBottom: 24 }}
                >
                  {[
                    { key: "reply", label: "Reply", icon: "corner-down-left" },
                    { key: "forward", label: "Forward", icon: "corner-up-right" },
                    { key: "copy", label: "Copy message", icon: "copy" },
                    { key: "mark", label: "Mark Unread", icon: "moon" },
                    { key: "mention", label: "Mention", icon: "at-sign" },
                    { key: "copylink", label: "Copy Messages Link", icon: "link" },
                    { key: "addorbits", label: "Add Orbits", icon: "users" },
                  ].map((it) => (
                    <TouchableOpacity
                      key={it.key}
                      style={styles.menuItem}
                      onPress={() => handleMenuAction(it.key)}
                      activeOpacity={0.7}
                    >
                      <View style={styles.menuIcon}>
                        <Feather name={it.icon} size={18} color="#9fb4ff" />
                      </View>
                      <Text style={styles.menuLabel}>{it.label}</Text>
                    </TouchableOpacity>
                  ))}

                  {/* spacer */}
                  <View style={{ height: 8 }} />

                  {/* Report button */}
                  <TouchableOpacity
                    style={styles.reportBtn}
                    onPress={() => handleMenuAction("report")}
                    activeOpacity={0.7}
                  >
                    <View style={styles.reportIcon}>
                      <Feather name="flag" size={18} color="#ff6b6b" />
                    </View>
                    <Text style={styles.reportLabel}>Report</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Floating toast bubble (appears near the post) */}
      {toastVisible ? (
        <Animated.View
          style={[
            styles.floatingToast,
            { top: toastTop, opacity: toastOpacity, left: scale(70) },
          ]}
        >
          <Feather name={toastIcon} size={16} color={toastIconColor} />
          <Text style={styles.floatingToastText}>{toastText}</Text>
        </Animated.View>
      ) : null}
    </View>
  );
}

/* helper */
function formatCount(n) {
  if (!n && n !== 0) return "";
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#020617" },
  header: {
    height: scale(60),
    paddingHorizontal: scale(12),
    flexDirection: "row",
    alignItems: "center",
    marginTop:50,
  },
  headerCenter: { flex: 1, alignItems: "center" },
  channelLabel: { color: "#9fb4ff", fontWeight: "700", fontSize: scale(16) },
  searchBtn: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
  },

  content: { paddingHorizontal: scale(12), paddingBottom: scale(160) },

  postCard: { marginTop: scale(12) },
  postHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: scale(8),
  },
  postAvatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    marginRight: scale(10),
    borderWidth: 2,
    borderColor: "#22c55e",
  },
  postMeta: { flex: 1 },
  postMetaRow: { flexDirection: "row", alignItems: "center" },
  postAuthor: { color: "#E5ECFF", fontWeight: "700", fontSize: scale(14) },
  postTime: { color: "#9fb4ff", marginLeft: scale(6), fontSize: scale(12) },
  postMore: { marginLeft: "auto" },
  postText: { color: "#cbd5f5", marginTop: scale(6), fontSize: scale(13) },

  mediaWrapper: {
    marginTop: scale(10),
    borderRadius: scale(12),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  mediaImage: { width: "100%", height: scale(180), resizeMode: "cover" },

  reactionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(8),
    marginBottom: scale(8),
  },
  reactionBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(12),
  },
  reactionCount: { color: "#cbd5f5", marginLeft: 6 },

  replyBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  replyText: { color: "#9fb4ff", marginLeft: 6 },

  threadWrapper: { marginTop: scale(6), paddingLeft: scale(12) },
  replyRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: scale(12),
  },
  connectorColumn: { width: scale(28), alignItems: "center" },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: "#1d4ed8",
    marginTop: scale(6),
  },
  vertLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#111827",
    marginTop: scale(4),
    borderRadius: 1,
  },
  replyContent: { flex: 1, paddingLeft: scale(8) },
  replyHeader: { flexDirection: "row", alignItems: "center" },
  smallAvatar: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    borderWidth: 2,
    borderColor: "#22c55e",
  },
  replyAuthor: { color: "#E5ECFF", fontWeight: "700", fontSize: scale(13) },
  replyTime: { color: "#9fb4ff", fontSize: scale(11) },
  replyTextBody: { color: "#cbd5f5", marginTop: scale(6), fontSize: scale(13) },
  replyActions: { flexDirection: "row", marginTop: scale(6) },
  replyActionBtn: { flexDirection: "row", alignItems: "center" },
  replyActionText: { color: "#9fb4ff", marginLeft: 6, fontSize: scale(12) },

  simpleMessage: {
    flexDirection: "row",
    marginTop: scale(14),
    alignItems: "center",
  },
  msgAuthor: { color: "#E5ECFF", fontWeight: "700" },
  msgTime: { color: "#9fb4ff", fontWeight: "600" },
  msgText: { color: "#cbd5f5", marginTop: scale(4) },

  dayDivider: {
    alignItems: "center",
    marginTop: scale(6),
    marginBottom: scale(6),
  },
  dayDividerText: {
    color: "#ef4444",
    fontSize: scale(12),
    fontWeight: "700",
  },

  inputBar: {
    position: "absolute",
    left: scale(12),
    right: scale(12),
    bottom: Platform.OS === "ios" ? scale(22) : scale(12),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#071022",
    borderRadius: scale(28),
    paddingHorizontal: scale(12),
    paddingVertical: scale(8),
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  iconBtn: {
    width: scale(36),
    height: scale(36),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(8),
  },
  inputWrapper: { flex: 1, marginRight: scale(8) },
  input: { color: "#E5ECFF", fontSize: scale(14), paddingVertical: 0 },

  /* -------- Modal / sheet styles -------- */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "flex-end",
  },
  sheetWrapper: {
    backgroundColor: "#071022",
    borderTopLeftRadius: scale(18),
    borderTopRightRadius: scale(18),
    paddingTop: scale(12),
    paddingHorizontal: scale(14),
    maxHeight: SCREEN_H * 0.75,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  sheetHandle: {
    width: scale(60),
    height: scale(4),
    borderRadius: 2,
    backgroundColor: "#0f1724",
    alignSelf: "center",
    marginBottom: scale(12),
  },
  menuList: {},
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: scale(14),
    paddingHorizontal: scale(8),
    borderRadius: scale(12),
    marginBottom: scale(8),
    borderWidth: 1,
    borderColor: "#172033",
  },
  menuIcon: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: "#0b1220",
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(12),
    borderWidth: 1,
    borderColor: "#1f2b44",
  },
  menuLabel: {
    color: "#cbd5f5",
    fontSize: scale(15),
    fontWeight: "600",
  },

  reportBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale(14),
    paddingHorizontal: scale(8),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: "#7f1d1d",
    backgroundColor: "#3f1420",
  },
  reportIcon: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: "#2b1113",
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(12),
    borderWidth: 1,
    borderColor: "#5f1f22",
  },
  reportLabel: {
    color: "#ff6b6b",
    fontSize: scale(15),
    fontWeight: "700",
  },

  /* floating toast */
  floatingToast: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    borderRadius: scale(20),
    backgroundColor: "rgba(10,20,40,0.95)",
    borderWidth: 1,
    borderColor: "#213a6b",
    // shadow (iOS) / elevation (Android)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  floatingToastText: {
    color: "#dbeafe",
    marginLeft: scale(8),
    fontWeight: "600",
  },
});

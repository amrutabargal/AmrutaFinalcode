

// // // // // // // import React, { useState, useRef, useEffect } from "react";
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   StyleSheet,
// // // // // // //   SafeAreaView,
// // // // // // //   StatusBar,
// // // // // // //   TouchableOpacity,
// // // // // // //   FlatList,
// // // // // // //   TextInput,
// // // // // // //   KeyboardAvoidingView,
// // // // // // //   Platform,
// // // // // // //   Modal,
// // // // // // //   Pressable,
// // // // // // //   Image,
// // // // // // //   Keyboard,
// // // // // // // } from "react-native";
// // // // // // // import Svg, { Path, Circle } from "react-native-svg";
// // // // // // // import { LinearGradient } from "expo-linear-gradient";
// // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // import * as DocumentPicker from "expo-document-picker";
// // // // // // // import * as Clipboard from "expo-clipboard";
// // // // // // // import { Audio } from "expo-av";
// // // // // // // import EmojiSelector, { Categories } from "react-native-emoji-selector";

// // // // // // // // ----------- STATIC CHAT DATA -----------
// // // // // // // const INITIAL_CONVERSATION = [
// // // // // // //   { id: "label-today", type: "label", label: "Today" },
// // // // // // //   {
// // // // // // //     id: "1",
// // // // // // //     type: "msg",
// // // // // // //     author: "other",
// // // // // // //     name: "Perfecto",
// // // // // // //     time: "9:12 AM",
// // // // // // //     text: "How are you shusshi?",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "2",
// // // // // // //     type: "msg",
// // // // // // //     author: "other",
// // // // // // //     name: "Perfecto",
// // // // // // //     time: "9:13 AM",
// // // // // // //     text: "Where are you from ?",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "3",
// // // // // // //     type: "msg",
// // // // // // //     author: "me",
// // // // // // //     name: "Suushi clan",
// // // // // // //     time: "9:13 AM",
// // // // // // //     text: "I am Fine Bro",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "4",
// // // // // // //     type: "msg",
// // // // // // //     author: "me",
// // // // // // //     name: "Suushi clan",
// // // // // // //     time: "9:14 AM",
// // // // // // //     text: "I belong to India.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // // ------------- SVG ICONS -------------
// // // // // // // const BackIcon = () => (
// // // // // // //   <Svg width={22} height={22} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M15.5 19 9 12l6.5-7"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={2}
// // // // // // //       strokeLinecap="round"
// // // // // // //       strokeLinejoin="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const PhoneIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M6.6 4.2 9 3l2 4-1.6 1c.5 1 1.2 1.9 2 2.7.8.8 1.7 1.5 2.7 2L15 11l4 2-1.2 2.4c-.3.6-.9 1-1.6 1-2.2 0-4.4-.9-6.1-2.6C8.4 12.1 7.5 9.9 7.5 7.7c0-.7.4-1.3 1.1-1.5z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const VideoIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M5 6h9a1 1 0 0 1 1 1v3.5l3-2V17l-3-2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const InfoIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.8} />
// // // // // // //     <Path
// // // // // // //       d="M12 8.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM11 10.5h2V17h-2z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const ImageIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M5 5h14a1 1 0 0 1 1 1v12H4V6a1 1 0 0 1 1-1zm0 11 3.5-4.5 3 3.5 2.5-3L19 16H5z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //       opacity={0.7}
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const EmojiIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.5} />
// // // // // // //     <Circle cx="9" cy="10" r="1" fill="#FFFFFF" />
// // // // // // //     <Circle cx="15" cy="10" r="1" fill="#FFFFFF" />
// // // // // // //     <Path
// // // // // // //       d="M9 14s1 1.5 3 1.5S15 14 15 14"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.5}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const PlusIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M12 5v14M5 12h14"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={2}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const MicIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M12 5a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //     <Path
// // // // // // //       d="M7 11a5 5 0 0 0 10 0M12 16v3M9 19h6"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.6}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const CloseIcon = () => (
// // // // // // //   <Svg width={18} height={18} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M7 7l10 10M17 7L7 17"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.8}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // // --------- AVATAR ----------
// // // // // // // const Avatar = ({ bg = "#2563EB", letter = "P" }) => (
// // // // // // //   <View style={[styles.avatar, { backgroundColor: bg }]}>
// // // // // // //     <Text style={styles.avatarLetter}>{letter}</Text>
// // // // // // //   </View>
// // // // // // // );

// // // // // // // // --------- MESSAGE BUBBLE ----------
// // // // // // // const MessageBubble = ({ item, onLongPress, replyTo }) => {
// // // // // // //   const isMe = item.author === "me";

// // // // // // //   const bubbleContent = (
// // // // // // //     <>
// // // // // // //       {replyTo && (
// // // // // // //         <View style={styles.replyPreviewInBubble}>
// // // // // // //           <Text style={styles.replyPreviewName}>{replyTo.name}</Text>
// // // // // // //           <Text numberOfLines={1} style={styles.replyPreviewText}>
// // // // // // //             {replyTo.text || "[Attachment]"}
// // // // // // //           </Text>
// // // // // // //         </View>
// // // // // // //       )}

// // // // // // //       {item.text ? <Text style={styles.bubbleText}>{item.text}</Text> : null}

// // // // // // //       {item.attachment?.type === "image" && (
// // // // // // //         <Image
// // // // // // //           source={{ uri: item.attachment.uri }}
// // // // // // //           style={styles.imageThumb}
// // // // // // //           resizeMode="cover"
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       {item.attachment?.type === "file" && (
// // // // // // //         <Text style={styles.attachmentText}>📎 {item.attachment.name}</Text>
// // // // // // //       )}

// // // // // // //       {item.attachment?.type === "audio" && (
// // // // // // //         <Text style={styles.attachmentText}>
// // // // // // //           🎤 Voice message {item.isTranscribing ? "(transcribing...)" : ""}
// // // // // // //         </Text>
// // // // // // //       )}

// // // // // // //       {item.reaction && (
// // // // // // //         <View style={styles.reactionBadge}>
// // // // // // //           <Text style={styles.reactionText}>{item.reaction}</Text>
// // // // // // //         </View>
// // // // // // //       )}
// // // // // // //     </>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <View style={styles.msgBlock}>
// // // // // // //       <Text style={styles.msgMeta}>
// // // // // // //         {isMe ? `${item.time}  ${item.name}` : `${item.name}  ${item.time}`}
// // // // // // //       </Text>
// // // // // // //       <View
// // // // // // //         style={[
// // // // // // //           styles.msgRow,
// // // // // // //           { justifyContent: isMe ? "flex-end" : "flex-start" },
// // // // // // //         ]}
// // // // // // //       >
// // // // // // //         {!isMe && <Avatar bg="#2563EB" letter="P" />}
// // // // // // //         <TouchableOpacity
// // // // // // //           activeOpacity={0.8}
// // // // // // //           onLongPress={() => onLongPress(item)}
// // // // // // //           delayLongPress={200}
// // // // // // //         >
// // // // // // //           <View
// // // // // // //             style={[
// // // // // // //               styles.bubble,
// // // // // // //               isMe ? styles.bubbleMe : styles.bubbleOther,
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             {bubbleContent}
// // // // // // //           </View>
// // // // // // //         </TouchableOpacity>
// // // // // // //         {isMe && <Avatar bg="#22C1C3" letter="S" />}
// // // // // // //       </View>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // // --------- SHEET ITEM ----------
// // // // // // // const SheetItem = ({ label, onPress, danger }) => (
// // // // // // //   <TouchableOpacity
// // // // // // //     style={styles.sheetItem}
// // // // // // //     onPress={onPress}
// // // // // // //     activeOpacity={0.8}
// // // // // // //   >
// // // // // // //     <Text
// // // // // // //       style={[
// // // // // // //         styles.sheetItemText,
// // // // // // //         danger ? { color: "#F97373" } : null,
// // // // // // //       ]}
// // // // // // //     >
// // // // // // //       {label}
// // // // // // //     </Text>
// // // // // // //   </TouchableOpacity>
// // // // // // // );

// // // // // // // // ------------- MAIN SCREEN -------------
// // // // // // // export default function ChannelScreen({ navigation, route }) {
// // // // // // //   const contact = route?.params?.contact;
// // // // // // //   const displayName = contact?.name || "Perfecto";
// // // // // // //   const avatarColor = contact?.avatarColor || "#2563EB";
// // // // // // //   const avatarLetter = displayName?.charAt(0)?.toUpperCase() || "P";

// // // // // // //   const [messages, setMessages] = useState(INITIAL_CONVERSATION);
// // // // // // //   const [inputValue, setInputValue] = useState("");
// // // // // // //   const [replyTo, setReplyTo] = useState(null);
// // // // // // //   const [actionSheetVisible, setActionSheetVisible] = useState(false);
// // // // // // //   const [selectedMessage, setSelectedMessage] = useState(null);
// // // // // // //   const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

// // // // // // //   const [recording, setRecording] = useState(null);
// // // // // // //   const [isRecording, setIsRecording] = useState(false);
// // // // // // //   const [isTranscribing, setIsTranscribing] = useState(false);

// // // // // // //   const listRef = useRef(null);

// // // // // // //   // Audio permission
// // // // // // //   useEffect(() => {
// // // // // // //     (async () => {
// // // // // // //       try {
// // // // // // //         await Audio.requestPermissionsAsync();
// // // // // // //       } catch (e) {
// // // // // // //         console.log("Audio permission error", e);
// // // // // // //       }
// // // // // // //     })();
// // // // // // //   }, []);

// // // // // // //   const scrollToEnd = () => {
// // // // // // //     if (listRef.current) {
// // // // // // //       listRef.current.scrollToEnd({ animated: true });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getTimeString = () => {
// // // // // // //     const now = new Date();
// // // // // // //     return now.toLocaleTimeString([], {
// // // // // // //       hour: "2-digit",
// // // // // // //       minute: "2-digit",
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const addMessage = (partial) => {
// // // // // // //     const newMsg = {
// // // // // // //       id: Date.now().toString(),
// // // // // // //       type: "msg",
// // // // // // //       author: "me",
// // // // // // //       name: "Suushi clan",
// // // // // // //       time: getTimeString(),
// // // // // // //       text: partial.text || "",
// // // // // // //       attachment: partial.attachment || null,
// // // // // // //       replyToId: replyTo?.id || null,
// // // // // // //       reaction: null,
// // // // // // //       isTranscribing: partial.isTranscribing || false,
// // // // // // //     };

// // // // // // //     setMessages((prev) => [...prev, newMsg]);
// // // // // // //     setReplyTo(null);
// // // // // // //     setTimeout(scrollToEnd, 80);
// // // // // // //   };

// // // // // // //   const handleSend = () => {
// // // // // // //     if (!inputValue.trim()) return;
// // // // // // //     addMessage({ text: inputValue.trim() });
// // // // // // //     setInputValue("");
// // // // // // //   };

// // // // // // //   const handleLongPressMessage = (msg) => {
// // // // // // //     setSelectedMessage(msg);
// // // // // // //     setActionSheetVisible(true);
// // // // // // //   };

// // // // // // //   const handleSelectReaction = (emoji) => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setMessages((prev) =>
// // // // // // //       prev.map((m) =>
// // // // // // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // // // // // //       )
// // // // // // //     );
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleReply = () => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setReplyTo(selectedMessage);
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleDelete = () => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleCopy = async () => {
// // // // // // //     if (!selectedMessage?.text) return;
// // // // // // //     await Clipboard.setStringAsync(selectedMessage.text);
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const pickImageOrVideo = async () => {
// // // // // // //     try {
// // // // // // //       const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // //         mediaTypes: ImagePicker.MediaTypeOptions.All,
// // // // // // //         quality: 0.8,
// // // // // // //       });
// // // // // // //       if (result.canceled) return;
// // // // // // //       const asset = result.assets[0];
// // // // // // //       addMessage({
// // // // // // //         attachment: {
// // // // // // //           type: "image",
// // // // // // //           uri: asset.uri,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Image picker error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const pickFile = async () => {
// // // // // // //     try {
// // // // // // //       const result = await DocumentPicker.getDocumentAsync({
// // // // // // //         copyToCacheDirectory: true,
// // // // // // //       });
// // // // // // //       if (result.type === "cancel") return;
// // // // // // //       addMessage({
// // // // // // //         attachment: {
// // // // // // //           type: "file",
// // // // // // //           uri: result.uri,
// // // // // // //           name: result.name,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("File picker error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // ---------- VOICE → TEXT HELPER ----------
// // // // // // //   const transcribeAudio = async (uri) => {
// // // // // // //     // NOTE:
// // // // // // //     // इथे tumcha backend / 3rd-party STT API call kara.
// // // // // // //     // खाली dummy example दिला आहे.
// // // // // // //     try {
// // // // // // //       setIsTranscribing(true);
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append("file", {
// // // // // // //         uri,
// // // // // // //         name: "voice.m4a",
// // // // // // //         type: "audio/m4a",
// // // // // // //       });

// // // // // // //       const response = await fetch(
// // // // // // //         "https://YOUR_API_URL/voice-to-text", // <-- CHANGE THIS
// // // // // // //         {
// // // // // // //           method: "POST",
// // // // // // //           headers: {
// // // // // // //             "Content-Type": "multipart/form-data",
// // // // // // //           },
// // // // // // //           body: formData,
// // // // // // //         }
// // // // // // //       );

// // // // // // //       const json = await response.json();
// // // // // // //       setIsTranscribing(false);
// // // // // // //       return json.transcript || "";
// // // // // // //     } catch (e) {
// // // // // // //       console.log("STT error", e);
// // // // // // //       setIsTranscribing(false);
// // // // // // //       return "";
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const startRecording = async () => {
// // // // // // //     try {
// // // // // // //       const permission = await Audio.getPermissionsAsync();
// // // // // // //       if (!permission.granted) {
// // // // // // //         const req = await Audio.requestPermissionsAsync();
// // // // // // //         if (!req.granted) return;
// // // // // // //       }

// // // // // // //       await Audio.setAudioModeAsync({
// // // // // // //         allowsRecordingIOS: true,
// // // // // // //         playsInSilentModeIOS: true,
// // // // // // //       });

// // // // // // //       const { recording } = await Audio.Recording.createAsync(
// // // // // // //         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
// // // // // // //       );
// // // // // // //       setRecording(recording);
// // // // // // //       setIsRecording(true);
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Recording start error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const stopRecording = async () => {
// // // // // // //     try {
// // // // // // //       setIsRecording(false);
// // // // // // //       if (!recording) return;

// // // // // // //       await recording.stopAndUnloadAsync();
// // // // // // //       const uri = recording.getURI();
// // // // // // //       setRecording(null);

// // // // // // //       // 1) आधी message add kara (voice message + "transcribing..." state)
// // // // // // //       const tempId = Date.now().toString();
// // // // // // //       const baseVoiceMsg = {
// // // // // // //         id: tempId,
// // // // // // //         type: "msg",
// // // // // // //         author: "me",
// // // // // // //         name: "Suushi clan",
// // // // // // //         time: getTimeString(),
// // // // // // //         text: "Transcribing voice...", // temporarily
// // // // // // //         attachment: {
// // // // // // //           type: "audio",
// // // // // // //           uri,
// // // // // // //         },
// // // // // // //         replyToId: replyTo?.id || null,
// // // // // // //         reaction: null,
// // // // // // //         isTranscribing: true,
// // // // // // //       };

// // // // // // //       setMessages((prev) => [...prev, baseVoiceMsg]);
// // // // // // //       setReplyTo(null);
// // // // // // //       setTimeout(scrollToEnd, 80);

// // // // // // //       // 2) STT API call, text get karun update kara
// // // // // // //       const transcript = await transcribeAudio(uri);

// // // // // // //       setMessages((prev) =>
// // // // // // //         prev.map((m) =>
// // // // // // //           m.id === tempId
// // // // // // //             ? {
// // // // // // //                 ...m,
// // // // // // //                 text: transcript || "Voice message",
// // // // // // //                 isTranscribing: false,
// // // // // // //               }
// // // // // // //             : m
// // // // // // //         )
// // // // // // //       );
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Recording stop error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleRecording = () => {
// // // // // // //     if (isRecording) {
// // // // // // //       stopRecording();
// // // // // // //     } else {
// // // // // // //       startRecording();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleEmojiPicker = () => {
// // // // // // //     if (emojiPickerVisible) {
// // // // // // //       setEmojiPickerVisible(false);
// // // // // // //     } else {
// // // // // // //       Keyboard.dismiss(); // keyboard close
// // // // // // //       setEmojiPickerVisible(true);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const renderItem = ({ item }) => {
// // // // // // //     if (item.type === "label") {
// // // // // // //       return (
// // // // // // //         <View style={styles.labelWrapper}>
// // // // // // //           <View style={styles.labelChip}>
// // // // // // //             <Text style={styles.labelText}>{item.label}</Text>
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       );
// // // // // // //     }
// // // // // // //     const replyToMsg = item.replyToId
// // // // // // //       ? messages.find((m) => m.id === item.replyToId)
// // // // // // //       : null;

// // // // // // //     return (
// // // // // // //       <MessageBubble
// // // // // // //         item={item}
// // // // // // //         replyTo={replyToMsg}
// // // // // // //         onLongPress={handleLongPressMessage}
// // // // // // //       />
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.safe}>
// // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#02192F" />
// // // // // // //       <KeyboardAvoidingView
// // // // // // //         style={{ flex: 1 }}
// // // // // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
// // // // // // //       >
// // // // // // //         <View style={styles.container}>
// // // // // // //           {/* RIGHT BG */}
// // // // // // //           <View style={styles.rightBg} />

// // // // // // //           {/* HEADER */}
// // // // // // //           <View style={styles.header}>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={styles.backButton}
// // // // // // //               onPress={() => navigation.goBack()}
// // // // // // //             >
// // // // // // //               <BackIcon />
// // // // // // //             </TouchableOpacity>

// // // // // // //             <View style={styles.headerCenter}>
// // // // // // //               <Avatar bg={avatarColor} letter={avatarLetter} />
// // // // // // //               <View style={{ marginLeft: 10 }}>
// // // // // // //                 <Text style={styles.headerName}>{displayName}</Text>
// // // // // // //                 <Text style={styles.headerSub}>Chat</Text>
// // // // // // //               </View>
// // // // // // //             </View>

// // // // // // //             <View style={styles.headerRight}>
// // // // // // //               {/* VOICE CALL */}
// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.headerCircleBtn}
// // // // // // //                 onPress={() =>
// // // // // // //                   navigation.navigate("VoiceCallScreen", {
// // // // // // //                     contact: { name: displayName, avatarColor, avatarLetter },
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <PhoneIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               {/* VIDEO CALL */}
// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.headerCircleBtn}
// // // // // // //                 onPress={() =>
// // // // // // //                   navigation.navigate("VideoCallScreen", {
// // // // // // //                     contact: { name: displayName, avatarColor, avatarLetter },
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <VideoIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               <TouchableOpacity style={styles.headerCircleBtn}>
// // // // // // //                 <InfoIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           {/* CHAT LIST */}
// // // // // // //           <FlatList
// // // // // // //             ref={listRef}
// // // // // // //             data={messages}
// // // // // // //             keyExtractor={(item) => item.id}
// // // // // // //             renderItem={renderItem}
// // // // // // //             contentContainerStyle={{
// // // // // // //               paddingHorizontal: 20,
// // // // // // //               paddingTop: 8,
// // // // // // //               paddingBottom: 8,
// // // // // // //             }}
// // // // // // //             onContentSizeChange={scrollToEnd}
// // // // // // //             showsVerticalScrollIndicator={false}
// // // // // // //           />

// // // // // // //           {/* REPLY BANNER (above input) */}
// // // // // // //           {replyTo && (
// // // // // // //             <View style={styles.replyBanner}>
// // // // // // //               <View style={{ flex: 1 }}>
// // // // // // //                 <Text style={styles.replyBannerTitle}>
// // // // // // //                   Replying to {replyTo.name}
// // // // // // //                 </Text>
// // // // // // //                 <Text numberOfLines={1} style={styles.replyBannerText}>
// // // // // // //                   {replyTo.text || "[Attachment]"}
// // // // // // //                 </Text>
// // // // // // //               </View>
// // // // // // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // // // // // //                 <CloseIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           )}

// // // // // // //           {/* INPUT BAR */}
// // // // // // //           <View style={styles.inputBarWrapper}>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={styles.circleButton}
// // // // // // //               onPress={pickImageOrVideo}
// // // // // // //             >
// // // // // // //               <ImageIcon />
// // // // // // //             </TouchableOpacity>

// // // // // // //             <View style={styles.inputBar}>
// // // // // // //               <TextInput
// // // // // // //                 placeholder="Message"
// // // // // // //                 placeholderTextColor="#64748B"
// // // // // // //                 style={styles.textInput}
// // // // // // //                 value={inputValue}
// // // // // // //                 onChangeText={setInputValue}
// // // // // // //                 onSubmitEditing={handleSend}
// // // // // // //                 returnKeyType="send"
// // // // // // //               />

// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.smallRoundBtn}
// // // // // // //                 onPress={toggleEmojiPicker}
// // // // // // //               >
// // // // // // //                 <EmojiIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.smallRoundBtn}
// // // // // // //                 onPress={pickFile}
// // // // // // //               >
// // // // // // //                 <PlusIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>

// // // // // // //             <View style={styles.sendWrapper}>
// // // // // // //               <LinearGradient
// // // // // // //                 colors={["#2563EB", "#22C1C3"]}
// // // // // // //                 start={{ x: 0, y: 0 }}
// // // // // // //                 end={{ x: 1, y: 1 }}
// // // // // // //                 style={styles.micGradient}
// // // // // // //               >
// // // // // // //                 <TouchableOpacity onPress={toggleRecording}>
// // // // // // //                   <MicIcon />
// // // // // // //                 </TouchableOpacity>
// // // // // // //               </LinearGradient>
// // // // // // //               {isRecording && <Text style={styles.recordingDot}>●</Text>}
// // // // // // //               {isTranscribing && (
// // // // // // //                 <Text style={styles.transcribingText}>STT...</Text>
// // // // // // //               )}
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           {/* EMOJI PICKER (bottom) */}
// // // // // // //           {emojiPickerVisible && (
// // // // // // //             <View style={styles.emojiPickerContainer}>
// // // // // // //               <EmojiSelector
// // // // // // //                 onEmojiSelected={(emoji) => {
// // // // // // //                   setInputValue((prev) => prev + emoji);
// // // // // // //                 }}
// // // // // // //                 showSearchBar={false}
// // // // // // //                 showTabs={true}
// // // // // // //                 showHistory={true}
// // // // // // //                 category={Categories.emotion}
// // // // // // //               />
// // // // // // //             </View>
// // // // // // //           )}

// // // // // // //           {/* ACTION SHEET */}
// // // // // // //           <Modal
// // // // // // //             visible={actionSheetVisible}
// // // // // // //             animationType="fade"
// // // // // // //             transparent
// // // // // // //             onRequestClose={() => setActionSheetVisible(false)}
// // // // // // //           >
// // // // // // //             <Pressable
// // // // // // //               style={styles.sheetBackdrop}
// // // // // // //               onPress={() => setActionSheetVisible(false)}
// // // // // // //             >
// // // // // // //               <View />
// // // // // // //             </Pressable>

// // // // // // //             <View style={styles.sheetWrapper}>
// // // // // // //               <View style={styles.sheetHandle} />

// // // // // // //               {selectedMessage && (
// // // // // // //                 <View style={styles.sheetSelectedBubble}>
// // // // // // //                   <Text style={styles.sheetSelectedText}>
// // // // // // //                     {selectedMessage.text || "[Attachment]"}
// // // // // // //                   </Text>
// // // // // // //                 </View>
// // // // // // //               )}

// // // // // // //               <Text style={styles.sheetSectionTitle}>React</Text>
// // // // // // //               <View style={styles.reactionRow}>
// // // // // // //                 {["😀", "😆", "🤣", "😂", "🙂", "🌙"].map((e) => (
// // // // // // //                   <TouchableOpacity
// // // // // // //                     key={e}
// // // // // // //                     style={styles.reactionIcon}
// // // // // // //                     onPress={() => handleSelectReaction(e)}
// // // // // // //                   >
// // // // // // //                     <Text style={{ fontSize: 28 }}>{e}</Text>
// // // // // // //                   </TouchableOpacity>
// // // // // // //                 ))}
// // // // // // //                 <View style={[styles.reactionIcon, styles.reactionCirclePlus]}>
// // // // // // //                   <Text style={{ fontSize: 20, color: "#FFFFFF" }}>+</Text>
// // // // // // //                 </View>
// // // // // // //               </View>

// // // // // // //               <View style={styles.sheetList}>
// // // // // // //                 <SheetItem label="Reply" onPress={handleReply} />
// // // // // // //                 <SheetItem label="Copy" onPress={handleCopy} />
// // // // // // //                 <SheetItem label="Delete" danger onPress={handleDelete} />
// // // // // // //               </View>
// // // // // // //             </View>
// // // // // // //           </Modal>
// // // // // // //         </View>
// // // // // // //       </KeyboardAvoidingView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ------------- STYLES -------------
// // // // // // // const styles = StyleSheet.create({
// // // // // // //   safe: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: "#02192F",
// // // // // // //   },
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //   },

// // // // // // //   rightBg: {
// // // // // // //     position: "absolute",
// // // // // // //     right: 0,
// // // // // // //     top: 120,
// // // // // // //     bottom: 0,
// // // // // // //     width: "42%",
// // // // // // //     backgroundColor: "#05204A",
// // // // // // //     opacity: 0.9,
// // // // // // //     borderTopLeftRadius: 80,
// // // // // // //   },

// // // // // // //   // HEADER
// // // // // // //   header: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 10,
// // // // // // //   },
// // // // // // //   backButton: {
// // // // // // //     padding: 6,
// // // // // // //     marginRight: 4,
// // // // // // //   },
// // // // // // //   headerCenter: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   headerName: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   headerSub: {
// // // // // // //     color: "#94A3B8",
// // // // // // //     fontSize: 12,
// // // // // // //   },
// // // // // // //   headerRight: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   headerCircleBtn: {
// // // // // // //     width: 32,
// // // // // // //     height: 32,
// // // // // // //     borderRadius: 16,
// // // // // // //     marginLeft: 10,
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },

// // // // // // //   avatar: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 16,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },
// // // // // // //   avatarLetter: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: "700",
// // // // // // //   },

// // // // // // //   // messages
// // // // // // //   msgBlock: {
// // // // // // //     marginBottom: 10,
// // // // // // //   },
// // // // // // //   msgMeta: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 11,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   msgRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "flex-end",
// // // // // // //   },
// // // // // // //   bubble: {
// // // // // // //     maxWidth: "68%",
// // // // // // //     borderRadius: 18,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 8,
// // // // // // //   },
// // // // // // //   bubbleOther: {
// // // // // // //     backgroundColor: "#0058D4",
// // // // // // //     marginLeft: 8,
// // // // // // //   },
// // // // // // //   bubbleMe: {
// // // // // // //     backgroundColor: "#00A8FF",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   bubbleText: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 13,
// // // // // // //   },

// // // // // // //   imageThumb: {
// // // // // // //     marginTop: 6,
// // // // // // //     width: 160,
// // // // // // //     height: 120,
// // // // // // //     borderRadius: 12,
// // // // // // //   },
// // // // // // //   attachmentText: {
// // // // // // //     marginTop: 6,
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //   },

// // // // // // //   reactionBadge: {
// // // // // // //     alignSelf: "flex-end",
// // // // // // //     marginTop: 4,
// // // // // // //     paddingHorizontal: 6,
// // // // // // //     paddingVertical: 2,
// // // // // // //     borderRadius: 999,
// // // // // // //     backgroundColor: "rgba(15,23,42,0.6)",
// // // // // // //   },
// // // // // // //   reactionText: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: "#FFFFFF",
// // // // // // //   },

// // // // // // //   labelWrapper: {
// // // // // // //     alignItems: "center",
// // // // // // //     marginTop: 4,
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   labelChip: {
// // // // // // //     backgroundColor: "#0F172A",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 4,
// // // // // // //     borderRadius: 999,
// // // // // // //   },
// // // // // // //   labelText: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 11,
// // // // // // //   },

// // // // // // //   // REPLY BANNER
// // // // // // //   replyBanner: {
// // // // // // //     backgroundColor: "#001934",
// // // // // // //     borderRadius: 18,
// // // // // // //     marginHorizontal: 12,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 8,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     marginBottom: 6,
// // // // // // //   },
// // // // // // //   replyBannerTitle: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   replyBannerText: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 12,
// // // // // // //     marginTop: 2,
// // // // // // //   },

// // // // // // //   replyPreviewInBubble: {
// // // // // // //     borderLeftWidth: 2,
// // // // // // //     borderLeftColor: "rgba(148,163,184,0.7)",
// // // // // // //     paddingLeft: 8,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   replyPreviewName: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 11,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   replyPreviewText: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 11,
// // // // // // //   },

// // // // // // //   // INPUT BAR
// // // // // // //   inputBarWrapper: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 8,
// // // // // // //     backgroundColor: "#021225",
// // // // // // //   },
// // // // // // //   circleButton: {
// // // // // // //     width: 36,
// // // // // // //     height: 36,
// // // // // // //     borderRadius: 18,
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   inputBar: {
// // // // // // //     flex: 1,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     backgroundColor: "#071F3C",
// // // // // // //     borderRadius: 20,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 6,
// // // // // // //   },
// // // // // // //   textInput: {
// // // // // // //     flex: 1,
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 14,
// // // // // // //     paddingVertical: 4,
// // // // // // //   },
// // // // // // //   smallRoundBtn: {
// // // // // // //     width: 28,
// // // // // // //     height: 28,
// // // // // // //     borderRadius: 14,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginLeft: 6,
// // // // // // //   },
// // // // // // //   sendWrapper: {
// // // // // // //     marginLeft: 8,
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   micGradient: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 20,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },
// // // // // // //   recordingDot: {
// // // // // // //     marginTop: 4,
// // // // // // //     fontSize: 10,
// // // // // // //     color: "#F97373",
// // // // // // //   },
// // // // // // //   transcribingText: {
// // // // // // //     marginTop: 2,
// // // // // // //     fontSize: 9,
// // // // // // //     color: "#CBD5F5",
// // // // // // //   },

// // // // // // //   // EMOJI PICKER
// // // // // // //   emojiPickerContainer: {
// // // // // // //     height: 230,
// // // // // // //     backgroundColor: "#020617",
// // // // // // //   },

// // // // // // //   // SHEET
// // // // // // //   sheetBackdrop: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // // // //   },
// // // // // // //   sheetWrapper: {
// // // // // // //     position: "absolute",
// // // // // // //     left: 0,
// // // // // // //     right: 0,
// // // // // // //     bottom: 0,
// // // // // // //     paddingTop: 12,
// // // // // // //     paddingBottom: 24,
// // // // // // //     paddingHorizontal: 16,
// // // // // // //     backgroundColor: "#02061A",
// // // // // // //     borderTopLeftRadius: 26,
// // // // // // //     borderTopRightRadius: 26,
// // // // // // //   },
// // // // // // //   sheetHandle: {
// // // // // // //     alignSelf: "center",
// // // // // // //     width: 40,
// // // // // // //     height: 4,
// // // // // // //     borderRadius: 999,
// // // // // // //     backgroundColor: "#1F2933",
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   sheetSelectedBubble: {
// // // // // // //     backgroundColor: "#0058D4",
// // // // // // //     borderRadius: 16,
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 8,
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   sheetSelectedText: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 13,
// // // // // // //   },
// // // // // // //   sheetSectionTitle: {
// // // // // // //     color: "#9CA3AF",
// // // // // // //     fontSize: 12,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   reactionRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   reactionIcon: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 20,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 6,
// // // // // // //   },
// // // // // // //   reactionCirclePlus: {
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //   },
// // // // // // //   sheetList: {
// // // // // // //     marginTop: 4,
// // // // // // //   },
// // // // // // //   sheetItem: {
// // // // // // //     paddingVertical: 8,
// // // // // // //   },
// // // // // // //   sheetItemText: {
// // // // // // //     color: "#E5E7EB",
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // // });


// // // // // // // ChannelScreen.js
// // // // // // // import React, { useState, useRef, useEffect } from "react";
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   StyleSheet,
// // // // // // //   StatusBar,
// // // // // // //   TouchableOpacity,
// // // // // // //   FlatList,
// // // // // // //   TextInput,
// // // // // // //   KeyboardAvoidingView,
// // // // // // //   Platform,
// // // // // // //   Modal,
// // // // // // //   Pressable,
// // // // // // //   Image,
// // // // // // //   Keyboard,
// // // // // // // } from "react-native";
// // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // import Svg, { Path, Circle } from "react-native-svg";
// // // // // // // import { LinearGradient } from "expo-linear-gradient";
// // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // import * as DocumentPicker from "expo-document-picker";
// // // // // // // import * as Clipboard from "expo-clipboard";
// // // // // // // import { Audio } from "expo-av";
// // // // // // // import EmojiSelector, { Categories } from "react-native-emoji-selector";

// // // // // // // // ----------- STATIC CHAT DATA -----------
// // // // // // // const INITIAL_CONVERSATION = [
// // // // // // //   { id: "label-today", type: "label", label: "Today" },
// // // // // // //   {
// // // // // // //     id: "1",
// // // // // // //     type: "msg",
// // // // // // //     author: "other",
// // // // // // //     name: "Perfecto",
// // // // // // //     time: "9:12 AM",
// // // // // // //     text: "How are you shusshi?",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "2",
// // // // // // //     type: "msg",
// // // // // // //     author: "other",
// // // // // // //     name: "Perfecto",
// // // // // // //     time: "9:13 AM",
// // // // // // //     text: "Where are you from ?",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "3",
// // // // // // //     type: "msg",
// // // // // // //     author: "me",
// // // // // // //     name: "Suushi clan",
// // // // // // //     time: "9:13 AM",
// // // // // // //     text: "I am Fine Bro",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "4",
// // // // // // //     type: "msg",
// // // // // // //     author: "me",
// // // // // // //     name: "Suushi clan",
// // // // // // //     time: "9:14 AM",
// // // // // // //     text: "I belong to India.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // // ------------- SVG ICONS -------------
// // // // // // // const BackIcon = () => (
// // // // // // //   <Svg width={22} height={22} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M15.5 19 9 12l6.5-7"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={2}
// // // // // // //       strokeLinecap="round"
// // // // // // //       strokeLinejoin="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const PhoneIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M6.6 4.2 9 3l2 4-1.6 1c.5 1 1.2 1.9 2 2.7.8.8 1.7 1.5 2.7 2L15 11l4 2-1.2 2.4c-.3.6-.9 1-1.6 1-2.2 0-4.4-.9-6.1-2.6C8.4 12.1 7.5 9.9 7.5 7.7c0-.7.4-1.3 1.1-1.5z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const VideoIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M5 6h9a1 1 0 0 1 1 1v3.5l3-2V17l-3-2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const InfoIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.8} />
// // // // // // //     <Path
// // // // // // //       d="M12 8.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM11 10.5h2V17h-2z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const ImageIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M5 5h14a1 1 0 0 1 1 1v12H4V6a1 1 0 0 1 1-1zm0 11 3.5-4.5 3 3.5 2.5-3L19 16H5z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //       opacity={0.7}
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const EmojiIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.5} />
// // // // // // //     <Circle cx="9" cy="10" r="1" fill="#FFFFFF" />
// // // // // // //     <Circle cx="15" cy="10" r="1" fill="#FFFFFF" />
// // // // // // //     <Path
// // // // // // //       d="M9 14s1 1.5 3 1.5S15 14 15 14"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.5}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const PlusIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M12 5v14M5 12h14"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={2}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const MicIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M12 5a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //     <Path
// // // // // // //       d="M7 11a5 5 0 0 0 10 0M12 16v3M9 19h6"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.6}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const CloseIcon = () => (
// // // // // // //   <Svg width={18} height={18} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M7 7l10 10M17 7L7 17"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.8}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // // --------- AVATAR ----------
// // // // // // // const Avatar = ({ bg = "#2563EB", letter = "P" }) => (
// // // // // // //   <View style={[styles.avatar, { backgroundColor: bg }]}>
// // // // // // //     <Text style={styles.avatarLetter}>{letter}</Text>
// // // // // // //   </View>
// // // // // // // );

// // // // // // // // --------- MESSAGE BUBBLE ----------
// // // // // // // const MessageBubble = ({ item, onLongPress, replyTo }) => {
// // // // // // //   const isMe = item.author === "me";

// // // // // // //   const bubbleContent = (
// // // // // // //     <>
// // // // // // //       {replyTo && (
// // // // // // //         <View style={styles.replyPreviewInBubble}>
// // // // // // //           <Text style={styles.replyPreviewName}>{replyTo.name}</Text>
// // // // // // //           <Text numberOfLines={1} style={styles.replyPreviewText}>
// // // // // // //             {replyTo.text || "[Attachment]"}
// // // // // // //           </Text>
// // // // // // //         </View>
// // // // // // //       )}

// // // // // // //       {item.text ? <Text style={styles.bubbleText}>{item.text}</Text> : null}

// // // // // // //       {item.attachment?.type === "image" && (
// // // // // // //         <Image
// // // // // // //           source={{ uri: item.attachment.uri }}
// // // // // // //           style={styles.imageThumb}
// // // // // // //           resizeMode="cover"
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       {item.attachment?.type === "file" && (
// // // // // // //         <Text style={styles.attachmentText}>📎 {item.attachment.name}</Text>
// // // // // // //       )}

// // // // // // //       {item.attachment?.type === "audio" && (
// // // // // // //         <View style={styles.voiceRow}>
// // // // // // //           <View style={styles.voiceIconCircle}>
// // // // // // //             <Text style={{ color: "#FFFFFF", fontSize: 12 }}>🎤</Text>
// // // // // // //           </View>
// // // // // // //           <Text style={styles.voiceLabel}>Voice message</Text>
// // // // // // //         </View>
// // // // // // //       )}

// // // // // // //       {item.reaction && (
// // // // // // //         <View style={styles.reactionBadge}>
// // // // // // //           <Text style={styles.reactionText}>{item.reaction}</Text>
// // // // // // //         </View>
// // // // // // //       )}
// // // // // // //     </>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <View style={styles.msgBlock}>
// // // // // // //       <Text style={styles.msgMeta}>
// // // // // // //         {isMe ? `${item.time}  ${item.name}` : `${item.name}  ${item.time}`}
// // // // // // //       </Text>
// // // // // // //       <View
// // // // // // //         style={[
// // // // // // //           styles.msgRow,
// // // // // // //           { justifyContent: isMe ? "flex-end" : "flex-start" },
// // // // // // //         ]}
// // // // // // //       >
// // // // // // //         {!isMe && <Avatar bg="#2563EB" letter="P" />}
// // // // // // //         <TouchableOpacity
// // // // // // //           activeOpacity={0.8}
// // // // // // //           onLongPress={() => onLongPress(item)}
// // // // // // //           delayLongPress={200}
// // // // // // //         >
// // // // // // //           <View
// // // // // // //             style={[
// // // // // // //               styles.bubble,
// // // // // // //               isMe ? styles.bubbleMe : styles.bubbleOther,
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             {bubbleContent}
// // // // // // //           </View>
// // // // // // //         </TouchableOpacity>
// // // // // // //         {isMe && <Avatar bg="#22C1C3" letter="S" />}
// // // // // // //       </View>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // // --------- SHEET ITEM ----------
// // // // // // // const SheetItem = ({ label, onPress, danger }) => (
// // // // // // //   <TouchableOpacity
// // // // // // //     style={styles.sheetItem}
// // // // // // //     onPress={onPress}
// // // // // // //     activeOpacity={0.8}
// // // // // // //   >
// // // // // // //     <Text
// // // // // // //       style={[
// // // // // // //         styles.sheetItemText,
// // // // // // //         danger ? { color: "#F97373" } : null,
// // // // // // //       ]}
// // // // // // //     >
// // // // // // //       {label}
// // // // // // //     </Text>
// // // // // // //   </TouchableOpacity>
// // // // // // // );

// // // // // // // // ------------- MAIN SCREEN -------------
// // // // // // // export default function ChannelScreen({ navigation, route }) {
// // // // // // //   const contact = route?.params?.contact;
// // // // // // //   const displayName = contact?.name || "Perfecto";
// // // // // // //   const avatarColor = contact?.avatarColor || "#2563EB";
// // // // // // //   const avatarLetter = displayName?.charAt(0)?.toUpperCase() || "P";

// // // // // // //   const [messages, setMessages] = useState(INITIAL_CONVERSATION);
// // // // // // //   const [inputValue, setInputValue] = useState("");
// // // // // // //   const [replyTo, setReplyTo] = useState(null);
// // // // // // //   const [actionSheetVisible, setActionSheetVisible] = useState(false);
// // // // // // //   const [selectedMessage, setSelectedMessage] = useState(null);
// // // // // // //   const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

// // // // // // //   const [recording, setRecording] = useState(null);
// // // // // // //   const [isRecording, setIsRecording] = useState(false);

// // // // // // //   const listRef = useRef(null);

// // // // // // //   // Audio permission
// // // // // // //   useEffect(() => {
// // // // // // //     (async () => {
// // // // // // //       try {
// // // // // // //         await Audio.requestPermissionsAsync();
// // // // // // //       } catch (e) {
// // // // // // //         console.log("Audio permission error", e);
// // // // // // //       }
// // // // // // //     })();
// // // // // // //   }, []);

// // // // // // //   const scrollToEnd = () => {
// // // // // // //     if (listRef.current) {
// // // // // // //       listRef.current.scrollToEnd({ animated: true });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getTimeString = () => {
// // // // // // //     const now = new Date();
// // // // // // //     return now.toLocaleTimeString([], {
// // // // // // //       hour: "2-digit",
// // // // // // //       minute: "2-digit",
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const addMessage = (partial) => {
// // // // // // //     const newMsg = {
// // // // // // //       id: Date.now().toString(),
// // // // // // //       type: "msg",
// // // // // // //       author: "me",
// // // // // // //       name: "Suushi clan",
// // // // // // //       time: getTimeString(),
// // // // // // //       text: partial.text || "",
// // // // // // //       attachment: partial.attachment || null,
// // // // // // //       replyToId: replyTo?.id || null,
// // // // // // //       reaction: null,
// // // // // // //     };

// // // // // // //     setMessages((prev) => [...prev, newMsg]);
// // // // // // //     setReplyTo(null);
// // // // // // //     setTimeout(scrollToEnd, 80);
// // // // // // //   };

// // // // // // //   const handleSend = () => {
// // // // // // //     if (!inputValue.trim()) return;
// // // // // // //     addMessage({ text: inputValue.trim() });
// // // // // // //     setInputValue("");
// // // // // // //   };

// // // // // // //   const handleLongPressMessage = (msg) => {
// // // // // // //     setSelectedMessage(msg);
// // // // // // //     setActionSheetVisible(true);
// // // // // // //   };

// // // // // // //   const handleSelectReaction = (emoji) => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setMessages((prev) =>
// // // // // // //       prev.map((m) =>
// // // // // // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // // // // // //       )
// // // // // // //     );
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleReply = () => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setReplyTo(selectedMessage);
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleDelete = () => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleCopy = async () => {
// // // // // // //     if (!selectedMessage?.text) return;
// // // // // // //     await Clipboard.setStringAsync(selectedMessage.text);
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const pickImageOrVideo = async () => {
// // // // // // //     try {
// // // // // // //       const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // //         mediaTypes: ImagePicker.MediaTypeOptions.All,
// // // // // // //         quality: 0.8,
// // // // // // //       });
// // // // // // //       if (result.canceled) return;
// // // // // // //       const asset = result.assets[0];
// // // // // // //       addMessage({
// // // // // // //         attachment: {
// // // // // // //           type: "image",
// // // // // // //           uri: asset.uri,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Image picker error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const pickFile = async () => {
// // // // // // //     try {
// // // // // // //       const result = await DocumentPicker.getDocumentAsync({
// // // // // // //         copyToCacheDirectory: true,
// // // // // // //       });
// // // // // // //       if (result.type === "cancel") return;
// // // // // // //       addMessage({
// // // // // // //         attachment: {
// // // // // // //           type: "file",
// // // // // // //           uri: result.uri,
// // // // // // //           name: result.name,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("File picker error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // ---------- VOICE RECORD: फक्त voice bubble दाखवतो ----------
// // // // // // //   const startRecording = async () => {
// // // // // // //     try {
// // // // // // //       const permission = await Audio.getPermissionsAsync();
// // // // // // //       if (!permission.granted) {
// // // // // // //         const req = await Audio.requestPermissionsAsync();
// // // // // // //         if (!req.granted) return;
// // // // // // //       }

// // // // // // //       await Audio.setAudioModeAsync({
// // // // // // //         allowsRecordingIOS: true,
// // // // // // //         playsInSilentModeIOS: true,
// // // // // // //       });

// // // // // // //       const { recording } = await Audio.Recording.createAsync(
// // // // // // //         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
// // // // // // //       );
// // // // // // //       setRecording(recording);
// // // // // // //       setIsRecording(true);
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Recording start error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const stopRecording = async () => {
// // // // // // //     try {
// // // // // // //       setIsRecording(false);
// // // // // // //       if (!recording) return;

// // // // // // //       await recording.stopAndUnloadAsync();
// // // // // // //       const uri = recording.getURI();
// // // // // // //       setRecording(null);

// // // // // // //       // Voice message bubble
// // // // // // //       addMessage({
// // // // // // //         text: "Voice message",
// // // // // // //         attachment: {
// // // // // // //           type: "audio",
// // // // // // //           uri,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Recording stop error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleRecording = () => {
// // // // // // //     if (isRecording) {
// // // // // // //       stopRecording();
// // // // // // //     } else {
// // // // // // //       startRecording();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleEmojiPicker = () => {
// // // // // // //     if (emojiPickerVisible) {
// // // // // // //       setEmojiPickerVisible(false);
// // // // // // //     } else {
// // // // // // //       Keyboard.dismiss();
// // // // // // //       setEmojiPickerVisible(true);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const renderItem = ({ item }) => {
// // // // // // //     if (item.type === "label") {
// // // // // // //       return (
// // // // // // //         <View style={styles.labelWrapper}>
// // // // // // //           <View style={styles.labelChip}>
// // // // // // //             <Text style={styles.labelText}>{item.label}</Text>
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       );
// // // // // // //     }
// // // // // // //     const replyToMsg = item.replyToId
// // // // // // //       ? messages.find((m) => m.id === item.replyToId)
// // // // // // //       : null;

// // // // // // //     return (
// // // // // // //       <MessageBubble
// // // // // // //         item={item}
// // // // // // //         replyTo={replyToMsg}
// // // // // // //         onLongPress={handleLongPressMessage}
// // // // // // //       />
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
// // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#02192F" />
// // // // // // //       <KeyboardAvoidingView
// // // // // // //         style={{ flex: 1 }}
// // // // // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
// // // // // // //       >
// // // // // // //         <View style={styles.container}>
// // // // // // //           {/* RIGHT BG */}
// // // // // // //           <View style={styles.rightBg} />

// // // // // // //           {/* HEADER */}
// // // // // // //           <View style={styles.header}>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={styles.backButton}
// // // // // // //               onPress={() => navigation.goBack()}
// // // // // // //             >
// // // // // // //               <BackIcon />
// // // // // // //             </TouchableOpacity>

// // // // // // //             <View style={styles.headerCenter}>
// // // // // // //               <Avatar bg={avatarColor} letter={avatarLetter} />
// // // // // // //               <View style={{ marginLeft: 10 }}>
// // // // // // //                 <Text style={styles.headerName}>{displayName}</Text>
// // // // // // //                 <Text style={styles.headerSub}>Chat</Text>
// // // // // // //               </View>
// // // // // // //             </View>

// // // // // // //             <View style={styles.headerRight}>
// // // // // // //               {/* VOICE CALL */}
// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.headerCircleBtn}
// // // // // // //                 onPress={() =>
// // // // // // //                   navigation.navigate("VoiceCallScreen", {
// // // // // // //                     contact: { name: displayName, avatarColor, avatarLetter },
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <PhoneIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               {/* VIDEO CALL */}
// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.headerCircleBtn}
// // // // // // //                 onPress={() =>
// // // // // // //                   navigation.navigate("VideoCallScreen", {
// // // // // // //                     contact: { name: displayName, avatarColor, avatarLetter },
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <VideoIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               <TouchableOpacity style={styles.headerCircleBtn}>
// // // // // // //                 <InfoIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           {/* CHAT LIST */}
// // // // // // //           <FlatList
// // // // // // //             ref={listRef}
// // // // // // //             data={messages}
// // // // // // //             keyExtractor={(item) => item.id}
// // // // // // //             renderItem={renderItem}
// // // // // // //             contentContainerStyle={{
// // // // // // //               paddingHorizontal: 20,
// // // // // // //               paddingTop: 8,
// // // // // // //               paddingBottom: 8,
// // // // // // //             }}
// // // // // // //             onContentSizeChange={scrollToEnd}
// // // // // // //             showsVerticalScrollIndicator={false}
// // // // // // //           />

// // // // // // //           {/* REPLY BANNER */}
// // // // // // //           {replyTo && (
// // // // // // //             <View style={styles.replyBanner}>
// // // // // // //               <View style={{ flex: 1 }}>
// // // // // // //                 <Text style={styles.replyBannerTitle}>
// // // // // // //                   Replying to {replyTo.name}
// // // // // // //                 </Text>
// // // // // // //                 <Text numberOfLines={1} style={styles.replyBannerText}>
// // // // // // //                   {replyTo.text || "[Attachment]"}
// // // // // // //                 </Text>
// // // // // // //               </View>
// // // // // // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // // // // // //                 <CloseIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           )}

// // // // // // //           {/* INPUT BAR */}
// // // // // // //           <View style={styles.inputBarWrapper}>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={styles.circleButton}
// // // // // // //               onPress={pickImageOrVideo}
// // // // // // //             >
// // // // // // //               <ImageIcon />
// // // // // // //             </TouchableOpacity>

// // // // // // //             <View style={styles.inputBar}>
// // // // // // //               <TextInput
// // // // // // //                 placeholder="Message"
// // // // // // //                 placeholderTextColor="#64748B"
// // // // // // //                 style={styles.textInput}
// // // // // // //                 value={inputValue}
// // // // // // //                 onChangeText={setInputValue}
// // // // // // //                 onSubmitEditing={handleSend}
// // // // // // //                 returnKeyType="send"
// // // // // // //               />

// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.smallRoundBtn}
// // // // // // //                 onPress={toggleEmojiPicker}
// // // // // // //               >
// // // // // // //                 <EmojiIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.smallRoundBtn}
// // // // // // //                 onPress={pickFile}
// // // // // // //               >
// // // // // // //                 <PlusIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>

// // // // // // //             <View style={styles.sendWrapper}>
// // // // // // //               <LinearGradient
// // // // // // //                 colors={["#2563EB", "#22C1C3"]}
// // // // // // //                 start={{ x: 0, y: 0 }}
// // // // // // //                 end={{ x: 1, y: 1 }}
// // // // // // //                 style={styles.micGradient}
// // // // // // //               >
// // // // // // //                 <TouchableOpacity onPress={toggleRecording}>
// // // // // // //                   <MicIcon />
// // // // // // //                 </TouchableOpacity>
// // // // // // //               </LinearGradient>
// // // // // // //               {isRecording && <Text style={styles.recordingDot}>● REC</Text>}
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           {/* EMOJI PICKER */}
// // // // // // //           {emojiPickerVisible && (
// // // // // // //             <View style={styles.emojiPickerContainer}>
// // // // // // //               <EmojiSelector
// // // // // // //                 onEmojiSelected={(emoji) => {
// // // // // // //                   setInputValue((prev) => prev + emoji);
// // // // // // //                 }}
// // // // // // //                 showSearchBar={false}
// // // // // // //                 showTabs={true}
// // // // // // //                 showHistory={true}
// // // // // // //                 category={Categories.emotion}
// // // // // // //               />
// // // // // // //             </View>
// // // // // // //           )}

// // // // // // //           {/* ACTION SHEET */}
// // // // // // //           <Modal
// // // // // // //             visible={actionSheetVisible}
// // // // // // //             animationType="fade"
// // // // // // //             transparent
// // // // // // //             onRequestClose={() => setActionSheetVisible(false)}
// // // // // // //           >
// // // // // // //             <Pressable
// // // // // // //               style={styles.sheetBackdrop}
// // // // // // //               onPress={() => setActionSheetVisible(false)}
// // // // // // //             >
// // // // // // //               <View />
// // // // // // //             </Pressable>

// // // // // // //             <View style={styles.sheetWrapper}>
// // // // // // //               <View style={styles.sheetHandle} />

// // // // // // //               {selectedMessage && (
// // // // // // //                 <View style={styles.sheetSelectedBubble}>
// // // // // // //                   <Text style={styles.sheetSelectedText}>
// // // // // // //                     {selectedMessage.text || "[Attachment]"}
// // // // // // //                   </Text>
// // // // // // //                 </View>
// // // // // // //               )}

// // // // // // //               <Text style={styles.sheetSectionTitle}>React</Text>
// // // // // // //               <View style={styles.reactionRow}>
// // // // // // //                 {["😀", "😆", "🤣", "😂", "🙂", "🌙"].map((e) => (
// // // // // // //                   <TouchableOpacity
// // // // // // //                     key={e}
// // // // // // //                     style={styles.reactionIcon}
// // // // // // //                     onPress={() => handleSelectReaction(e)}
// // // // // // //                   >
// // // // // // //                     <Text style={{ fontSize: 28 }}>{e}</Text>
// // // // // // //                   </TouchableOpacity>
// // // // // // //                 ))}
// // // // // // //                 <View
// // // // // // //                   style={[styles.reactionIcon, styles.reactionCirclePlus]}
// // // // // // //                 >
// // // // // // //                   <Text style={{ fontSize: 20, color: "#FFFFFF" }}>+</Text>
// // // // // // //                 </View>
// // // // // // //               </View>

// // // // // // //               <View style={styles.sheetList}>
// // // // // // //                 <SheetItem label="Reply" onPress={handleReply} />
// // // // // // //                 <SheetItem label="Copy" onPress={handleCopy} />
// // // // // // //                 <SheetItem label="Delete" danger onPress={handleDelete} />
// // // // // // //               </View>
// // // // // // //             </View>
// // // // // // //           </Modal>
// // // // // // //         </View>
// // // // // // //       </KeyboardAvoidingView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ------------- STYLES -------------
// // // // // // // const styles = StyleSheet.create({
// // // // // // //   safe: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: "#02192F",
// // // // // // //   },
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //   },

// // // // // // //   rightBg: {
// // // // // // //     position: "absolute",
// // // // // // //     right: 0,
// // // // // // //     top: 120,
// // // // // // //     bottom: 0,
// // // // // // //     width: "42%",
// // // // // // //     backgroundColor: "#05204A",
// // // // // // //     opacity: 0.9,
// // // // // // //     borderTopLeftRadius: 80,
// // // // // // //   },

// // // // // // //   // HEADER
// // // // // // //   header: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 10,
// // // // // // //   },
// // // // // // //   backButton: {
// // // // // // //     padding: 6,
// // // // // // //     marginRight: 4,
// // // // // // //   },
// // // // // // //   headerCenter: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   headerName: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   headerSub: {
// // // // // // //     color: "#94A3B8",
// // // // // // //     fontSize: 12,
// // // // // // //   },
// // // // // // //   headerRight: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   headerCircleBtn: {
// // // // // // //     width: 32,
// // // // // // //     height: 32,
// // // // // // //     borderRadius: 16,
// // // // // // //     marginLeft: 10,
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },

// // // // // // //   avatar: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 16,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },
// // // // // // //   avatarLetter: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: "700",
// // // // // // //   },

// // // // // // //   // messages
// // // // // // //   msgBlock: {
// // // // // // //     marginBottom: 10,
// // // // // // //   },
// // // // // // //   msgMeta: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 11,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   msgRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "flex-end",
// // // // // // //   },
// // // // // // //   bubble: {
// // // // // // //     maxWidth: "68%",
// // // // // // //     borderRadius: 18,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 8,
// // // // // // //   },
// // // // // // //   bubbleOther: {
// // // // // // //     backgroundColor: "#0058D4",
// // // // // // //     marginLeft: 8,
// // // // // // //   },
// // // // // // //   bubbleMe: {
// // // // // // //     backgroundColor: "#00A8FF",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   bubbleText: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 13,
// // // // // // //   },

// // // // // // //   imageThumb: {
// // // // // // //     marginTop: 6,
// // // // // // //     width: 160,
// // // // // // //     height: 120,
// // // // // // //     borderRadius: 12,
// // // // // // //   },
// // // // // // //   attachmentText: {
// // // // // // //     marginTop: 6,
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //   },

// // // // // // //   voiceRow: {
// // // // // // //     marginTop: 6,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   voiceIconCircle: {
// // // // // // //     width: 26,
// // // // // // //     height: 26,
// // // // // // //     borderRadius: 13,
// // // // // // //     borderWidth: 1,
// // // // // // //     borderColor: "rgba(255,255,255,0.4)",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   voiceLabel: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //   },

// // // // // // //   reactionBadge: {
// // // // // // //     alignSelf: "flex-end",
// // // // // // //     marginTop: 4,
// // // // // // //     paddingHorizontal: 6,
// // // // // // //     paddingVertical: 2,
// // // // // // //     borderRadius: 999,
// // // // // // //     backgroundColor: "rgba(15,23,42,0.6)",
// // // // // // //   },
// // // // // // //   reactionText: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: "#FFFFFF",
// // // // // // //   },

// // // // // // //   labelWrapper: {
// // // // // // //     alignItems: "center",
// // // // // // //     marginTop: 4,
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   labelChip: {
// // // // // // //     backgroundColor: "#0F172A",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 4,
// // // // // // //     borderRadius: 999,
// // // // // // //   },
// // // // // // //   labelText: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 11,
// // // // // // //   },

// // // // // // //   // REPLY BANNER
// // // // // // //   replyBanner: {
// // // // // // //     backgroundColor: "#001934",
// // // // // // //     borderRadius: 18,
// // // // // // //     marginHorizontal: 12,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 8,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     marginBottom: 6,
// // // // // // //   },
// // // // // // //   replyBannerTitle: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   replyBannerText: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 12,
// // // // // // //     marginTop: 2,
// // // // // // //   },

// // // // // // //   replyPreviewInBubble: {
// // // // // // //     borderLeftWidth: 2,
// // // // // // //     borderLeftColor: "rgba(148,163,184,0.7)",
// // // // // // //     paddingLeft: 8,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   replyPreviewName: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 11,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   replyPreviewText: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 11,
// // // // // // //   },

// // // // // // //   // INPUT BAR
// // // // // // //   inputBarWrapper: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 8,
// // // // // // //     backgroundColor: "#021225",
// // // // // // //   },
// // // // // // //   circleButton: {
// // // // // // //     width: 36,
// // // // // // //     height: 36,
// // // // // // //     borderRadius: 18,
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   inputBar: {
// // // // // // //     flex: 1,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     backgroundColor: "#071F3C",
// // // // // // //     borderRadius: 20,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 6,
// // // // // // //   },
// // // // // // //   textInput: {
// // // // // // //     flex: 1,
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 14,
// // // // // // //     paddingVertical: 4,
// // // // // // //   },
// // // // // // //   smallRoundBtn: {
// // // // // // //     width: 28,
// // // // // // //     height: 28,
// // // // // // //     borderRadius: 14,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginLeft: 6,
// // // // // // //   },
// // // // // // //   sendWrapper: {
// // // // // // //     marginLeft: 8,
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   micGradient: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 20,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },
// // // // // // //   recordingDot: {
// // // // // // //     marginTop: 4,
// // // // // // //     fontSize: 10,
// // // // // // //     color: "#F97373",
// // // // // // //   },

// // // // // // //   // EMOJI PICKER
// // // // // // //   emojiPickerContainer: {
// // // // // // //     height: 230,
// // // // // // //     backgroundColor: "#020617",
// // // // // // //   },

// // // // // // //   // SHEET
// // // // // // //   sheetBackdrop: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // // // //   },
// // // // // // //   sheetWrapper: {
// // // // // // //     position: "absolute",
// // // // // // //     left: 0,
// // // // // // //     right: 0,
// // // // // // //     bottom: 0,
// // // // // // //     paddingTop: 12,
// // // // // // //     paddingBottom: 24,
// // // // // // //     paddingHorizontal: 16,
// // // // // // //     backgroundColor: "#02061A",
// // // // // // //     borderTopLeftRadius: 26,
// // // // // // //     borderTopRightRadius: 26,
// // // // // // //   },
// // // // // // //   sheetHandle: {
// // // // // // //     alignSelf: "center",
// // // // // // //     width: 40,
// // // // // // //     height: 4,
// // // // // // //     borderRadius: 999,
// // // // // // //     backgroundColor: "#1F2933",
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   sheetSelectedBubble: {
// // // // // // //     backgroundColor: "#0058D4",
// // // // // // //     borderRadius: 16,
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 8,
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   sheetSelectedText: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 13,
// // // // // // //   },
// // // // // // //   sheetSectionTitle: {
// // // // // // //     color: "#9CA3AF",
// // // // // // //     fontSize: 12,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   reactionRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   reactionIcon: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 20,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 6,
// // // // // // //   },
// // // // // // //   reactionCirclePlus: {
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //   },
// // // // // // //   sheetList: {
// // // // // // //     marginTop: 4,
// // // // // // //   },
// // // // // // //   sheetItem: {
// // // // // // //     paddingVertical: 8,
// // // // // // //   },
// // // // // // //   sheetItemText: {
// // // // // // //     color: "#E5E7EB",
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // // });
// // // // // // // import React, { useState, useRef, useEffect } from "react";
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   StyleSheet,
// // // // // // //   StatusBar,
// // // // // // //   TouchableOpacity,
// // // // // // //   FlatList,
// // // // // // //   TextInput,
// // // // // // //   KeyboardAvoidingView,
// // // // // // //   Platform,
// // // // // // //   Modal,
// // // // // // //   Pressable,
// // // // // // //   Image,
// // // // // // //   Keyboard,
// // // // // // // } from "react-native";
// // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // import Svg, { Path, Circle } from "react-native-svg";
// // // // // // // import { LinearGradient } from "expo-linear-gradient";
// // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // import * as DocumentPicker from "expo-document-picker";
// // // // // // // import * as Clipboard from "expo-clipboard";
// // // // // // // import { Audio } from "expo-av";
// // // // // // // import EmojiSelector, { Categories } from "react-native-emoji-selector";

// // // // // // // // ----------- STATIC CHAT DATA -----------
// // // // // // // const INITIAL_CONVERSATION = [
// // // // // // //   { id: "label-today", type: "label", label: "Today" },
// // // // // // //   {
// // // // // // //     id: "1",
// // // // // // //     type: "msg",
// // // // // // //     author: "other",
// // // // // // //     name: "Perfecto",
// // // // // // //     time: "9:12 AM",
// // // // // // //     text: "How are you shusshi?",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "2",
// // // // // // //     type: "msg",
// // // // // // //     author: "other",
// // // // // // //     name: "Perfecto",
// // // // // // //     time: "9:13 AM",
// // // // // // //     text: "Where are you from ?",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "3",
// // // // // // //     type: "msg",
// // // // // // //     author: "me",
// // // // // // //     name: "Suushi clan",
// // // // // // //     time: "9:13 AM",
// // // // // // //     text: "I am Fine Bro",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "4",
// // // // // // //     type: "msg",
// // // // // // //     author: "me",
// // // // // // //     name: "Suushi clan",
// // // // // // //     time: "9:14 AM",
// // // // // // //     text: "I belong to India.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // // ------------- SVG ICONS -------------
// // // // // // // const BackIcon = () => (
// // // // // // //   <Svg width={22} height={22} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M15.5 19 9 12l6.5-7"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={2}
// // // // // // //       strokeLinecap="round"
// // // // // // //       strokeLinejoin="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const PhoneIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M6.6 4.2 9 3l2 4-1.6 1c.5 1 1.2 1.9 2 2.7.8.8 1.7 1.5 2.7 2L15 11l4 2-1.2 2.4c-.3.6-.9 1-1.6 1-2.2 0-4.4-.9-6.1-2.6C8.4 12.1 7.5 9.9 7.5 7.7c0-.7.4-1.3 1.1-1.5z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const VideoIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M5 6h9a1 1 0 0 1 1 1v3.5l3-2V17l-3-2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const InfoIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.8} />
// // // // // // //     <Path
// // // // // // //       d="M12 8.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM11 10.5h2V17h-2z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const ImageIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M5 5h14a1 1 0 0 1 1 1v12H4V6a1 1 0 0 1 1-1zm0 11 3.5-4.5 3 3.5 2.5-3L19 16H5z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //       opacity={0.7}
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const EmojiIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth={1.5} />
// // // // // // //     <Circle cx="9" cy="10" r="1" fill="#FFFFFF" />
// // // // // // //     <Circle cx="15" cy="10" r="1" fill="#FFFFFF" />
// // // // // // //     <Path
// // // // // // //       d="M9 14s1 1.5 3 1.5S15 14 15 14"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.5}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const PlusIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M12 5v14M5 12h14"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={2}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const MicIcon = () => (
// // // // // // //   <Svg width={20} height={20} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M12 5a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2z"
// // // // // // //       fill="#FFFFFF"
// // // // // // //     />
// // // // // // //     <Path
// // // // // // //       d="M7 11a5 5 0 0 0 10 0M12 16v3M9 19h6"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.6}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // const CloseIcon = () => (
// // // // // // //   <Svg width={18} height={18} viewBox="0 0 24 24">
// // // // // // //     <Path
// // // // // // //       d="M7 7l10 10M17 7L7 17"
// // // // // // //       stroke="#FFFFFF"
// // // // // // //       strokeWidth={1.8}
// // // // // // //       strokeLinecap="round"
// // // // // // //     />
// // // // // // //   </Svg>
// // // // // // // );

// // // // // // // // --------- AVATAR ----------
// // // // // // // const Avatar = ({ bg = "#2563EB", letter = "P" }) => (
// // // // // // //   <View style={[styles.avatar, { backgroundColor: bg }]}>
// // // // // // //     <Text style={styles.avatarLetter}>{letter}</Text>
// // // // // // //   </View>
// // // // // // // );

// // // // // // // // --------- MESSAGE BUBBLE ----------
// // // // // // // const MessageBubble = ({ item, onLongPress, replyTo }) => {
// // // // // // //   const isMe = item.author === "me";

// // // // // // //   const bubbleContent = (
// // // // // // //     <>
// // // // // // //       {replyTo && (
// // // // // // //         <View style={styles.replyPreviewInBubble}>
// // // // // // //           <Text style={styles.replyPreviewName}>{replyTo.name}</Text>
// // // // // // //           <Text numberOfLines={1} style={styles.replyPreviewText}>
// // // // // // //             {replyTo.text || "[Attachment]"}
// // // // // // //           </Text>
// // // // // // //         </View>
// // // // // // //       )}

// // // // // // //       {item.text ? <Text style={styles.bubbleText}>{item.text}</Text> : null}

// // // // // // //       {item.attachment?.type === "image" && (
// // // // // // //         <Image
// // // // // // //           source={{ uri: item.attachment.uri }}
// // // // // // //           style={styles.imageThumb}
// // // // // // //           resizeMode="cover"
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       {item.attachment?.type === "file" && (
// // // // // // //         <Text style={styles.attachmentText}>📎 {item.attachment.name}</Text>
// // // // // // //       )}

// // // // // // //       {item.attachment?.type === "audio" && (
// // // // // // //         <View style={styles.voiceRow}>
// // // // // // //           <View style={styles.voiceIconCircle}>
// // // // // // //             <Text style={{ color: "#FFFFFF", fontSize: 12 }}>🎤</Text>
// // // // // // //           </View>
// // // // // // //           <Text style={styles.voiceLabel}>Voice message</Text>
// // // // // // //         </View>
// // // // // // //       )}

// // // // // // //       {item.reaction && (
// // // // // // //         <View style={styles.reactionBadge}>
// // // // // // //           <Text style={styles.reactionText}>{item.reaction}</Text>
// // // // // // //         </View>
// // // // // // //       )}
// // // // // // //     </>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <View style={styles.msgBlock}>
// // // // // // //       <Text style={styles.msgMeta}>
// // // // // // //         {isMe ? `${item.time}  ${item.name}` : `${item.name}  ${item.time}`}
// // // // // // //       </Text>
// // // // // // //       <View
// // // // // // //         style={[
// // // // // // //           styles.msgRow,
// // // // // // //           { justifyContent: isMe ? "flex-end" : "flex-start" },
// // // // // // //         ]}
// // // // // // //       >
// // // // // // //         {!isMe && <Avatar bg="#2563EB" letter="P" />}
// // // // // // //         <TouchableOpacity
// // // // // // //           activeOpacity={0.8}
// // // // // // //           onLongPress={() => onLongPress(item)}
// // // // // // //           delayLongPress={200}
// // // // // // //         >
// // // // // // //           <View
// // // // // // //             style={[
// // // // // // //               styles.bubble,
// // // // // // //               isMe ? styles.bubbleMe : styles.bubbleOther,
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             {bubbleContent}
// // // // // // //           </View>
// // // // // // //         </TouchableOpacity>
// // // // // // //         {isMe && <Avatar bg="#22C1C3" letter="S" />}
// // // // // // //       </View>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // // --------- SHEET ITEM ----------
// // // // // // // const SheetItem = ({ label, onPress, danger }) => (
// // // // // // //   <TouchableOpacity
// // // // // // //     style={styles.sheetItem}
// // // // // // //     onPress={onPress}
// // // // // // //     activeOpacity={0.8}
// // // // // // //   >
// // // // // // //     <Text
// // // // // // //       style={[
// // // // // // //         styles.sheetItemText,
// // // // // // //         danger ? { color: "#F97373" } : null,
// // // // // // //       ]}
// // // // // // //     >
// // // // // // //       {label}
// // // // // // //     </Text>
// // // // // // //   </TouchableOpacity>
// // // // // // // );

// // // // // // // // ------------- MAIN SCREEN -------------
// // // // // // // export default function ChannelScreen({ navigation, route }) {
// // // // // // //   const contact = route?.params?.contact;
// // // // // // //   const displayName = contact?.name || "Perfecto";
// // // // // // //   const avatarColor = contact?.avatarColor || "#2563EB";
// // // // // // //   const avatarLetter = displayName?.charAt(0)?.toUpperCase() || "P";

// // // // // // //   const [messages, setMessages] = useState(INITIAL_CONVERSATION);
// // // // // // //   const [inputValue, setInputValue] = useState("");
// // // // // // //   const [replyTo, setReplyTo] = useState(null);
// // // // // // //   const [actionSheetVisible, setActionSheetVisible] = useState(false);
// // // // // // //   const [selectedMessage, setSelectedMessage] = useState(null);
// // // // // // //   const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

// // // // // // //   const [recording, setRecording] = useState(null);
// // // // // // //   const [isRecording, setIsRecording] = useState(false);

// // // // // // //   const listRef = useRef(null);

// // // // // // //   // Audio permission
// // // // // // //   useEffect(() => {
// // // // // // //     (async () => {
// // // // // // //       try {
// // // // // // //         await Audio.requestPermissionsAsync();
// // // // // // //       } catch (e) {
// // // // // // //         console.log("Audio permission error", e);
// // // // // // //       }
// // // // // // //     })();
// // // // // // //   }, []);

// // // // // // //   const scrollToEnd = () => {
// // // // // // //     if (listRef.current) {
// // // // // // //       listRef.current.scrollToEnd({ animated: true });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getTimeString = () => {
// // // // // // //     const now = new Date();
// // // // // // //     return now.toLocaleTimeString([], {
// // // // // // //       hour: "2-digit",
// // // // // // //       minute: "2-digit",
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const addMessage = (partial) => {
// // // // // // //     const newMsg = {
// // // // // // //       id: Date.now().toString(),
// // // // // // //       type: "msg",
// // // // // // //       author: "me",
// // // // // // //       name: "Suushi clan",
// // // // // // //       time: getTimeString(),
// // // // // // //       text: partial.text || "",
// // // // // // //       attachment: partial.attachment || null,
// // // // // // //       replyToId: replyTo?.id || null,
// // // // // // //       reaction: null,
// // // // // // //     };

// // // // // // //     setMessages((prev) => [...prev, newMsg]);
// // // // // // //     setReplyTo(null);
// // // // // // //     setTimeout(scrollToEnd, 80);
// // // // // // //   };

// // // // // // //   const handleSend = () => {
// // // // // // //     if (!inputValue.trim()) return;
// // // // // // //     addMessage({ text: inputValue.trim() });
// // // // // // //     setInputValue("");
// // // // // // //   };

// // // // // // //   const handleLongPressMessage = (msg) => {
// // // // // // //     setSelectedMessage(msg);
// // // // // // //     setActionSheetVisible(true);
// // // // // // //   };

// // // // // // //   const handleSelectReaction = (emoji) => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setMessages((prev) =>
// // // // // // //       prev.map((m) =>
// // // // // // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // // // // // //       )
// // // // // // //     );
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleReply = () => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setReplyTo(selectedMessage);
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleDelete = () => {
// // // // // // //     if (!selectedMessage) return;
// // // // // // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const handleCopy = async () => {
// // // // // // //     if (!selectedMessage?.text) return;
// // // // // // //     await Clipboard.setStringAsync(selectedMessage.text);
// // // // // // //     setActionSheetVisible(false);
// // // // // // //   };

// // // // // // //   const pickImageOrVideo = async () => {
// // // // // // //     try {
// // // // // // //       const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // //         mediaTypes: ImagePicker.MediaTypeOptions.All,
// // // // // // //         quality: 0.8,
// // // // // // //       });
// // // // // // //       if (result.canceled) return;
// // // // // // //       const asset = result.assets[0];
// // // // // // //       addMessage({
// // // // // // //         attachment: {
// // // // // // //           type: "image",
// // // // // // //           uri: asset.uri,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Image picker error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const pickFile = async () => {
// // // // // // //     try {
// // // // // // //       const result = await DocumentPicker.getDocumentAsync({
// // // // // // //         copyToCacheDirectory: true,
// // // // // // //       });
// // // // // // //       if (result.type === "cancel") return;
// // // // // // //       addMessage({
// // // // // // //         attachment: {
// // // // // // //           type: "file",
// // // // // // //           uri: result.uri,
// // // // // // //           name: result.name,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("File picker error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // ---------- VOICE RECORD ----------
// // // // // // //   const startRecording = async () => {
// // // // // // //     try {
// // // // // // //       const permission = await Audio.getPermissionsAsync();
// // // // // // //       if (!permission.granted) {
// // // // // // //         const req = await Audio.requestPermissionsAsync();
// // // // // // //         if (!req.granted) return;
// // // // // // //       }

// // // // // // //       await Audio.setAudioModeAsync({
// // // // // // //         allowsRecordingIOS: true,
// // // // // // //         playsInSilentModeIOS: true,
// // // // // // //       });

// // // // // // //       const { recording } = await Audio.Recording.createAsync(
// // // // // // //         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
// // // // // // //       );
// // // // // // //       setRecording(recording);
// // // // // // //       setIsRecording(true);
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Recording start error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const stopRecording = async () => {
// // // // // // //     try {
// // // // // // //       setIsRecording(false);
// // // // // // //       if (!recording) return;

// // // // // // //       await recording.stopAndUnloadAsync();
// // // // // // //       const uri = recording.getURI();
// // // // // // //       setRecording(null);

// // // // // // //       // Voice message bubble
// // // // // // //       addMessage({
// // // // // // //         text: "Voice message",
// // // // // // //         attachment: {
// // // // // // //           type: "audio",
// // // // // // //           uri,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       console.log("Recording stop error", e);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleRecording = () => {
// // // // // // //     if (isRecording) {
// // // // // // //       stopRecording();
// // // // // // //     } else {
// // // // // // //       startRecording();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleEmojiPicker = () => {
// // // // // // //     if (emojiPickerVisible) {
// // // // // // //       setEmojiPickerVisible(false);
// // // // // // //     } else {
// // // // // // //       Keyboard.dismiss();
// // // // // // //       setEmojiPickerVisible(true);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const renderItem = ({ item }) => {
// // // // // // //     if (item.type === "label") {
// // // // // // //       return (
// // // // // // //         <View style={styles.labelWrapper}>
// // // // // // //           <View style={styles.labelChip}>
// // // // // // //             <Text style={styles.labelText}>{item.label}</Text>
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       );
// // // // // // //     }
// // // // // // //     const replyToMsg = item.replyToId
// // // // // // //       ? messages.find((m) => m.id === item.replyToId)
// // // // // // //       : null;

// // // // // // //     return (
// // // // // // //       <MessageBubble
// // // // // // //         item={item}
// // // // // // //         replyTo={replyToMsg}
// // // // // // //         onLongPress={handleLongPressMessage}
// // // // // // //       />
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
// // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#02192F" />
// // // // // // //       <KeyboardAvoidingView
// // // // // // //         style={{ flex: 1 }}
// // // // // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
// // // // // // //       >
// // // // // // //         <View style={styles.container}>
// // // // // // //           {/* RIGHT BG */}
// // // // // // //           <View style={styles.rightBg} />

// // // // // // //           {/* HEADER */}
// // // // // // //           <View style={styles.header}>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={styles.backButton}
// // // // // // //               onPress={() => navigation.goBack()}
// // // // // // //             >
// // // // // // //               <BackIcon />
// // // // // // //             </TouchableOpacity>

// // // // // // //             <View style={styles.headerCenter}>
// // // // // // //               <Avatar bg={avatarColor} letter={avatarLetter} />
// // // // // // //               <View style={{ marginLeft: 10 }}>
// // // // // // //                 <Text style={styles.headerName}>{displayName}</Text>
// // // // // // //                 <Text style={styles.headerSub}>Chat</Text>
// // // // // // //               </View>
// // // // // // //             </View>

// // // // // // //             <View style={styles.headerRight}>
// // // // // // //               {/* VOICE CALL */}
// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.headerCircleBtn}
// // // // // // //                 onPress={() =>
// // // // // // //                   navigation.navigate("VoiceCall", {
// // // // // // //                     contact: { name: displayName, avatarColor, avatarLetter },
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <PhoneIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               {/* VIDEO CALL */}
// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.headerCircleBtn}
// // // // // // //                 onPress={() =>
// // // // // // //                   navigation.navigate("VideoCall", {
// // // // // // //                     contact: { name: displayName, avatarColor, avatarLetter },
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <VideoIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               <TouchableOpacity style={styles.headerCircleBtn}>
// // // // // // //                 <InfoIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           {/* CHAT LIST */}
// // // // // // //           <FlatList
// // // // // // //             ref={listRef}
// // // // // // //             data={messages}
// // // // // // //             keyExtractor={(item) => item.id}
// // // // // // //             renderItem={renderItem}
// // // // // // //             contentContainerStyle={{
// // // // // // //               paddingHorizontal: 20,
// // // // // // //               paddingTop: 8,
// // // // // // //               paddingBottom: 8,
// // // // // // //             }}
// // // // // // //             onContentSizeChange={scrollToEnd}
// // // // // // //             showsVerticalScrollIndicator={false}
// // // // // // //           />

// // // // // // //           {/* REPLY BANNER */}
// // // // // // //           {replyTo && (
// // // // // // //             <View style={styles.replyBanner}>
// // // // // // //               <View style={{ flex: 1 }}>
// // // // // // //                 <Text style={styles.replyBannerTitle}>
// // // // // // //                   Replying to {replyTo.name}
// // // // // // //                 </Text>
// // // // // // //                 <Text numberOfLines={1} style={styles.replyBannerText}>
// // // // // // //                   {replyTo.text || "[Attachment]"}
// // // // // // //                 </Text>
// // // // // // //               </View>
// // // // // // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // // // // // //                 <CloseIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           )}

// // // // // // //           {/* INPUT BAR */}
// // // // // // //           <View style={styles.inputBarWrapper}>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={styles.circleButton}
// // // // // // //               onPress={pickImageOrVideo}
// // // // // // //             >
// // // // // // //               <ImageIcon />
// // // // // // //             </TouchableOpacity>

// // // // // // //             <View style={styles.inputBar}>
// // // // // // //               <TextInput
// // // // // // //                 placeholder="Message"
// // // // // // //                 placeholderTextColor="#64748B"
// // // // // // //                 style={styles.textInput}
// // // // // // //                 value={inputValue}
// // // // // // //                 onChangeText={setInputValue}
// // // // // // //                 onSubmitEditing={handleSend}
// // // // // // //                 returnKeyType="send"
// // // // // // //               />

// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.smallRoundBtn}
// // // // // // //                 onPress={toggleEmojiPicker}
// // // // // // //               >
// // // // // // //                 <EmojiIcon />
// // // // // // //               </TouchableOpacity>

// // // // // // //               <TouchableOpacity
// // // // // // //                 style={styles.smallRoundBtn}
// // // // // // //                 onPress={pickFile}
// // // // // // //               >
// // // // // // //                 <PlusIcon />
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>

// // // // // // //             <View style={styles.sendWrapper}>
// // // // // // //               <LinearGradient
// // // // // // //                 colors={["#2563EB", "#22C1C3"]}
// // // // // // //                 start={{ x: 0, y: 0 }}
// // // // // // //                 end={{ x: 1, y: 1 }}
// // // // // // //                 style={styles.micGradient}
// // // // // // //               >
// // // // // // //                 <TouchableOpacity onPress={toggleRecording}>
// // // // // // //                   <MicIcon />
// // // // // // //                 </TouchableOpacity>
// // // // // // //               </LinearGradient>
// // // // // // //               {isRecording && <Text style={styles.recordingDot}>● REC</Text>}
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           {/* EMOJI PICKER */}
// // // // // // //           {emojiPickerVisible && (
// // // // // // //             <View style={styles.emojiPickerContainer}>
// // // // // // //               <EmojiSelector
// // // // // // //                 onEmojiSelected={(emoji) => {
// // // // // // //                   setInputValue((prev) => prev + emoji);
// // // // // // //                 }}
// // // // // // //                 showSearchBar={false}
// // // // // // //                 showTabs={true}
// // // // // // //                 showHistory={true}
// // // // // // //                 category={Categories.emotion}
// // // // // // //               />
// // // // // // //             </View>
// // // // // // //           )}

// // // // // // //           {/* ACTION SHEET */}
// // // // // // //           <Modal
// // // // // // //             visible={actionSheetVisible}
// // // // // // //             animationType="fade"
// // // // // // //             transparent
// // // // // // //             onRequestClose={() => setActionSheetVisible(false)}
// // // // // // //           >
// // // // // // //             <Pressable
// // // // // // //               style={styles.sheetBackdrop}
// // // // // // //               onPress={() => setActionSheetVisible(false)}
// // // // // // //             >
// // // // // // //               <View />
// // // // // // //             </Pressable>

// // // // // // //             <View style={styles.sheetWrapper}>
// // // // // // //               <View style={styles.sheetHandle} />

// // // // // // //               {selectedMessage && (
// // // // // // //                 <View style={styles.sheetSelectedBubble}>
// // // // // // //                   <Text style={styles.sheetSelectedText}>
// // // // // // //                     {selectedMessage.text || "[Attachment]"}
// // // // // // //                   </Text>
// // // // // // //                 </View>
// // // // // // //               )}

// // // // // // //               <Text style={styles.sheetSectionTitle}>React</Text>
// // // // // // //               <View style={styles.reactionRow}>
// // // // // // //                 {["😀", "😆", "🤣", "😂", "🙂", "🌙"].map((e) => (
// // // // // // //                   <TouchableOpacity
// // // // // // //                     key={e}
// // // // // // //                     style={styles.reactionIcon}
// // // // // // //                     onPress={() => handleSelectReaction(e)}
// // // // // // //                   >
// // // // // // //                     <Text style={{ fontSize: 28 }}>{e}</Text>
// // // // // // //                   </TouchableOpacity>
// // // // // // //                 ))}
// // // // // // //                 <View
// // // // // // //                   style={[styles.reactionIcon, styles.reactionCirclePlus]}
// // // // // // //                 >
// // // // // // //                   <Text style={{ fontSize: 20, color: "#FFFFFF" }}>+</Text>
// // // // // // //                 </View>
// // // // // // //               </View>

// // // // // // //               <View style={styles.sheetList}>
// // // // // // //                 <SheetItem label="Reply" onPress={handleReply} />
// // // // // // //                 <SheetItem label="Copy" onPress={handleCopy} />
// // // // // // //                 <SheetItem label="Delete" danger onPress={handleDelete} />
// // // // // // //               </View>
// // // // // // //             </View>
// // // // // // //           </Modal>
// // // // // // //         </View>
// // // // // // //       </KeyboardAvoidingView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ------------- STYLES -------------
// // // // // // // const styles = StyleSheet.create({
// // // // // // //   safe: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: "#02192F",
// // // // // // //   },
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //   },

// // // // // // //   rightBg: {
// // // // // // //     position: "absolute",
// // // // // // //     right: 0,
// // // // // // //     top: 120,
// // // // // // //     bottom: 0,
// // // // // // //     width: "42%",
// // // // // // //     backgroundColor: "#05204A",
// // // // // // //     opacity: 0.9,
// // // // // // //     borderTopLeftRadius: 80,
// // // // // // //   },

// // // // // // //   // HEADER
// // // // // // //   header: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 10,
// // // // // // //   },
// // // // // // //   backButton: {
// // // // // // //     padding: 6,
// // // // // // //     marginRight: 4,
// // // // // // //   },
// // // // // // //   headerCenter: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   headerName: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   headerSub: {
// // // // // // //     color: "#94A3B8",
// // // // // // //     fontSize: 12,
// // // // // // //   },
// // // // // // //   headerRight: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   headerCircleBtn: {
// // // // // // //     width: 32,
// // // // // // //     height: 32,
// // // // // // //     borderRadius: 16,
// // // // // // //     marginLeft: 10,
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },

// // // // // // //   avatar: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 16,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },
// // // // // // //   avatarLetter: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: "700",
// // // // // // //   },

// // // // // // //   // messages
// // // // // // //   msgBlock: {
// // // // // // //     marginBottom: 10,
// // // // // // //   },
// // // // // // //   msgMeta: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 11,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   msgRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "flex-end",
// // // // // // //   },
// // // // // // //   bubble: {
// // // // // // //     maxWidth: "68%",
// // // // // // //     borderRadius: 18,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 8,
// // // // // // //   },
// // // // // // //   bubbleOther: {
// // // // // // //     backgroundColor: "#0058D4",
// // // // // // //     marginLeft: 8,
// // // // // // //   },
// // // // // // //   bubbleMe: {
// // // // // // //     backgroundColor: "#00A8FF",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   bubbleText: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 13,
// // // // // // //   },

// // // // // // //   imageThumb: {
// // // // // // //     marginTop: 6,
// // // // // // //     width: 160,
// // // // // // //     height: 120,
// // // // // // //     borderRadius: 12,
// // // // // // //   },
// // // // // // //   attachmentText: {
// // // // // // //     marginTop: 6,
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //   },

// // // // // // //   voiceRow: {
// // // // // // //     marginTop: 6,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   voiceIconCircle: {
// // // // // // //     width: 26,
// // // // // // //     height: 26,
// // // // // // //     borderRadius: 13,
// // // // // // //     borderWidth: 1,
// // // // // // //     borderColor: "rgba(255,255,255,0.4)",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   voiceLabel: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //   },

// // // // // // //   reactionBadge: {
// // // // // // //     alignSelf: "flex-end",
// // // // // // //     marginTop: 4,
// // // // // // //     paddingHorizontal: 6,
// // // // // // //     paddingVertical: 2,
// // // // // // //     borderRadius: 999,
// // // // // // //     backgroundColor: "rgba(15,23,42,0.6)",
// // // // // // //   },
// // // // // // //   reactionText: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: "#FFFFFF",
// // // // // // //   },

// // // // // // //   labelWrapper: {
// // // // // // //     alignItems: "center",
// // // // // // //     marginTop: 4,
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   labelChip: {
// // // // // // //     backgroundColor: "#0F172A",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 4,
// // // // // // //     borderRadius: 999,
// // // // // // //   },
// // // // // // //   labelText: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 11,
// // // // // // //   },

// // // // // // //   // REPLY BANNER
// // // // // // //   replyBanner: {
// // // // // // //     backgroundColor: "#001934",
// // // // // // //     borderRadius: 18,
// // // // // // //     marginHorizontal: 12,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 8,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     marginBottom: 6,
// // // // // // //   },
// // // // // // //   replyBannerTitle: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 12,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   replyBannerText: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 12,
// // // // // // //     marginTop: 2,
// // // // // // //   },

// // // // // // //   replyPreviewInBubble: {
// // // // // // //     borderLeftWidth: 2,
// // // // // // //     borderLeftColor: "rgba(148,163,184,0.7)",
// // // // // // //     paddingLeft: 8,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   replyPreviewName: {
// // // // // // //     color: "#E2E8F0",
// // // // // // //     fontSize: 11,
// // // // // // //     fontWeight: "600",
// // // // // // //   },
// // // // // // //   replyPreviewText: {
// // // // // // //     color: "#CBD5F5",
// // // // // // //     fontSize: 11,
// // // // // // //   },

// // // // // // //   // INPUT BAR
// // // // // // //   inputBarWrapper: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 8,
// // // // // // //     backgroundColor: "#021225",
// // // // // // //   },
// // // // // // //   circleButton: {
// // // // // // //     width: 36,
// // // // // // //     height: 36,
// // // // // // //     borderRadius: 18,
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 8,
// // // // // // //   },
// // // // // // //   inputBar: {
// // // // // // //     flex: 1,
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     backgroundColor: "#071F3C",
// // // // // // //     borderRadius: 20,
// // // // // // //     paddingHorizontal: 14,
// // // // // // //     paddingVertical: 6,
// // // // // // //   },
// // // // // // //   textInput: {
// // // // // // //     flex: 1,
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 14,
// // // // // // //     paddingVertical: 4,
// // // // // // //   },
// // // // // // //   smallRoundBtn: {
// // // // // // //     width: 28,
// // // // // // //     height: 28,
// // // // // // //     borderRadius: 14,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginLeft: 6,
// // // // // // //   },
// // // // // // //   sendWrapper: {
// // // // // // //     marginLeft: 8,
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   micGradient: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 20,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //   },
// // // // // // //   recordingDot: {
// // // // // // //     marginTop: 4,
// // // // // // //     fontSize: 10,
// // // // // // //     color: "#F97373",
// // // // // // //   },

// // // // // // //   // EMOJI PICKER
// // // // // // //   emojiPickerContainer: {
// // // // // // //     height: 230,
// // // // // // //     backgroundColor: "#020617",
// // // // // // //   },

// // // // // // //   // SHEET
// // // // // // //   sheetBackdrop: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // // // //   },
// // // // // // //   sheetWrapper: {
// // // // // // //     position: "absolute",
// // // // // // //     left: 0,
// // // // // // //     right: 0,
// // // // // // //     bottom: 0,
// // // // // // //     paddingTop: 12,
// // // // // // //     paddingBottom: 24,
// // // // // // //     paddingHorizontal: 16,
// // // // // // //     backgroundColor: "#02061A",
// // // // // // //     borderTopLeftRadius: 26,
// // // // // // //     borderTopRightRadius: 26,
// // // // // // //   },
// // // // // // //   sheetHandle: {
// // // // // // //     alignSelf: "center",
// // // // // // //     width: 40,
// // // // // // //     height: 4,
// // // // // // //     borderRadius: 999,
// // // // // // //     backgroundColor: "#1F2933",
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   sheetSelectedBubble: {
// // // // // // //     backgroundColor: "#0058D4",
// // // // // // //     borderRadius: 16,
// // // // // // //     paddingHorizontal: 12,
// // // // // // //     paddingVertical: 8,
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   sheetSelectedText: {
// // // // // // //     color: "#FFFFFF",
// // // // // // //     fontSize: 13,
// // // // // // //   },
// // // // // // //   sheetSectionTitle: {
// // // // // // //     color: "#9CA3AF",
// // // // // // //     fontSize: 12,
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   reactionRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     alignItems: "center",
// // // // // // //     marginBottom: 12,
// // // // // // //   },
// // // // // // //   reactionIcon: {
// // // // // // //     width: 40,
// // // // // // //     height: 40,
// // // // // // //     borderRadius: 20,
// // // // // // //     alignItems: "center",
// // // // // // //     justifyContent: "center",
// // // // // // //     marginRight: 6,
// // // // // // //   },
// // // // // // //   reactionCirclePlus: {
// // // // // // //     backgroundColor: "#0B2443",
// // // // // // //   },
// // // // // // //   sheetList: {
// // // // // // //     marginTop: 4,
// // // // // // //   },
// // // // // // //   sheetItem: {
// // // // // // //     paddingVertical: 8,
// // // // // // //   },
// // // // // // //   sheetItemText: {
// // // // // // //     color: "#E5E7EB",
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // // });
// // // // // // // ChatScreenV24.js
// // // // // // import React, { useState } from "react";
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   StyleSheet,
// // // // // //   SafeAreaView,
// // // // // //   StatusBar,
// // // // // //   FlatList,
// // // // // //   TouchableOpacity,
// // // // // //   TextInput,
// // // // // //   Modal,
// // // // // //   Pressable,
// // // // // //   KeyboardAvoidingView,
// // // // // //   Platform,
// // // // // // } from "react-native";
// // // // // // import { LinearGradient } from "expo-linear-gradient";
// // // // // // import { Ionicons } from "@expo/vector-icons";

// // // // // // const DUMMY_MESSAGES = [
// // // // // //   { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
// // // // // //   { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
// // // // // //   { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
// // // // // //   { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
// // // // // //   { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
// // // // // // ];

// // // // // // const DUMMY_CONTACTS = [
// // // // // //   { id: "c1", name: "! 7 SUII _Notashish15" },
// // // // // //   { id: "c2", name: "Lofi#8098" },
// // // // // //   { id: "c3", name: "Max gamer58856, Faysal_gaming143" },
// // // // // //   { id: "c4", name: "Gaming Piro Yug" },
// // // // // //   { id: "c5", name: "SHERNI" },
// // // // // //   { id: "c6", name: "! 7 SUII _Notashish15" },
// // // // // //   { id: "c7", name: "Devil Gaming" },
// // // // // // ];

// // // // // // const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

// // // // // // export default function ChatScreenV24() {
// // // // // //   const [messages, setMessages] = useState(
// // // // // //     DUMMY_MESSAGES.map((m) => ({ ...m, reaction: null }))
// // // // // //   );

// // // // // //   const [input, setInput] = useState("");
// // // // // //   const [selectedMessage, setSelectedMessage] = useState(null);

// // // // // //   const [replyTo, setReplyTo] = useState(null);
// // // // // //   const [showActionsSheet, setShowActionsSheet] = useState(false);
// // // // // //   const [showForwardModal, setShowForwardModal] = useState(false);
// // // // // //   const [showReportModal, setShowReportModal] = useState(false);

// // // // // //   const [selectedContacts, setSelectedContacts] = useState([]);
// // // // // //   const [searchText, setSearchText] = useState("");
// // // // // //   const [reportReason, setReportReason] = useState("Nudity or pornography");

// // // // // //   // ---- Message handlers ----
// // // // // //   const handleLongPressMessage = (msg) => {
// // // // // //     setSelectedMessage(msg);
// // // // // //     setShowActionsSheet(true);
// // // // // //   };

// // // // // //   const handleSendMessage = () => {
// // // // // //     if (!input.trim()) return;
// // // // // //     const newMsg = {
// // // // // //       id: Date.now().toString(),
// // // // // //       author: "Me",
// // // // // //       text: input.trim(),
// // // // // //       isMe: true,
// // // // // //       reaction: null,
// // // // // //       replyToId: replyTo?.id || null,
// // // // // //     };
// // // // // //     setMessages((prev) => [...prev, newMsg]);
// // // // // //     setInput("");
// // // // // //     setReplyTo(null);
// // // // // //   };

// // // // // //   const setReactionForSelected = (emoji) => {
// // // // // //     if (!selectedMessage) return;
// // // // // //     setMessages((prev) =>
// // // // // //       prev.map((m) =>
// // // // // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // // // // //       )
// // // // // //     );
// // // // // //     setShowActionsSheet(false);
// // // // // //   };

// // // // // //   const handleDeleteSelected = () => {
// // // // // //     if (!selectedMessage) return;
// // // // // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // // // // //     setShowActionsSheet(false);
// // // // // //     setSelectedMessage(null);
// // // // // //   };

// // // // // //   const handleCopySelected = () => {
// // // // // //     // फक्त demo साठी – इथे Clipboard वापरू शकतो
// // // // // //     console.log("Copy:", selectedMessage?.text);
// // // // // //     setShowActionsSheet(false);
// // // // // //   };

// // // // // //   const handleReply = () => {
// // // // // //     setReplyTo(selectedMessage);
// // // // // //     setShowActionsSheet(false);
// // // // // //   };

// // // // // //   const handleForward = () => {
// // // // // //     setShowForwardModal(true);
// // // // // //     setShowActionsSheet(false);
// // // // // //   };

// // // // // //   const handleReport = () => {
// // // // // //     setShowReportModal(true);
// // // // // //     setShowActionsSheet(false);
// // // // // //   };

// // // // // //   // ---- Forward helpers ----
// // // // // //   const toggleContact = (id) => {
// // // // // //     setSelectedContacts((prev) =>
// // // // // //       prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
// // // // // //     );
// // // // // //   };

// // // // // //   const handleForwardSend = () => {
// // // // // //     console.log(
// // // // // //       "Forward message:",
// // // // // //       selectedMessage?.text,
// // // // // //       "to contacts:",
// // // // // //       selectedContacts
// // // // // //     );
// // // // // //     setSelectedContacts([]);
// // // // // //     setShowForwardModal(false);
// // // // // //   };

// // // // // //   // ---- Report helpers ----
// // // // // //   const handleSubmitReport = () => {
// // // // // //     console.log("Report:", selectedMessage?.id, "Reason:", reportReason);
// // // // // //     setShowReportModal(false);
// // // // // //     setReportReason("Nudity or pornography");
// // // // // //   };

// // // // // //   const filteredContacts = DUMMY_CONTACTS.filter((c) =>
// // // // // //     c.name.toLowerCase().includes(searchText.toLowerCase())
// // // // // //   );

// // // // // //   const renderMessage = ({ item }) => {
// // // // // //     const isMe = item.isMe;
// // // // // //     const bubbleStyle = [
// // // // // //       styles.bubble,
// // // // // //       isMe ? styles.bubbleMe : styles.bubbleOther,
// // // // // //     ];
// // // // // //     const containerStyle = [
// // // // // //       styles.messageRow,
// // // // // //       isMe ? styles.messageRowRight : styles.messageRowLeft,
// // // // // //     ];

// // // // // //     const replyPreview =
// // // // // //       item.replyToId && messages.find((m) => m.id === item.replyToId);

// // // // // //     return (
// // // // // //       <TouchableOpacity
// // // // // //         activeOpacity={0.8}
// // // // // //         onLongPress={() => handleLongPressMessage(item)}
// // // // // //         style={containerStyle}
// // // // // //       >
// // // // // //         <View style={bubbleStyle}>
// // // // // //           {replyPreview && (
// // // // // //             <View style={styles.replyPreview}>
// // // // // //               <Text style={styles.replyPreviewName}>
// // // // // //                 Replying to {replyPreview.author}
// // // // // //               </Text>
// // // // // //               <Text numberOfLines={1} style={styles.replyPreviewText}>
// // // // // //                 {replyPreview.text}
// // // // // //               </Text>
// // // // // //             </View>
// // // // // //           )}
// // // // // //           <Text style={styles.bubbleText}>{item.text}</Text>

// // // // // //           {item.reaction && (
// // // // // //             <View style={styles.reactionBadge}>
// // // // // //               <Text style={styles.reactionText}>{item.reaction}</Text>
// // // // // //             </View>
// // // // // //           )}
// // // // // //         </View>
// // // // // //       </TouchableOpacity>
// // // // // //     );
// // // // // //   };

// // // // // //   // ------------ UI ------------
// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.safe}>
// // // // // //       <StatusBar barStyle="light-content" />
// // // // // //       <View style={styles.container}>
// // // // // //         {/* Simple header */}
// // // // // //         <View style={styles.header}>
// // // // // //           <View style={styles.headerLeft}>
// // // // // //             <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
// // // // // //             <Text style={styles.headerTitle}>Perfecto</Text>
// // // // // //           </View>
// // // // // //           <View style={styles.headerRight}>
// // // // // //             <Ionicons name="call-outline" size={22} color="#E5E7EB" />
// // // // // //             <Ionicons
// // // // // //               name="videocam-outline"
// // // // // //               size={22}
// // // // // //               color="#E5E7EB"
// // // // // //               style={{ marginLeft: 16 }}
// // // // // //             />
// // // // // //           </View>
// // // // // //         </View>

// // // // // //         {/* Messages */}
// // // // // //         <FlatList
// // // // // //           data={messages}
// // // // // //           keyExtractor={(item) => item.id}
// // // // // //           renderItem={renderMessage}
// // // // // //           contentContainerStyle={styles.listContent}
// // // // // //         />

// // // // // //         {/* Reply bar like screenshot */}
// // // // // //         {replyTo && (
// // // // // //           <View style={styles.replyBarWrapper}>
// // // // // //             <View style={styles.replyBar}>
// // // // // //               <View style={{ flex: 1 }}>
// // // // // //                 <Text style={styles.replyBarTitle}>
// // // // // //                   Replying to {replyTo.author}
// // // // // //                 </Text>
// // // // // //                 <Text numberOfLines={1} style={styles.replyBarText}>
// // // // // //                   {replyTo.text}
// // // // // //                 </Text>
// // // // // //               </View>
// // // // // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // // // // //                 <Ionicons name="close" size={20} color="#E5E7EB" />
// // // // // //               </TouchableOpacity>
// // // // // //             </View>
// // // // // //           </View>
// // // // // //         )}

// // // // // //         {/* Input */}
// // // // // //         <KeyboardAvoidingView
// // // // // //           behavior={Platform.OS === "ios" ? "padding" : undefined}
// // // // // //         >
// // // // // //           <View style={styles.inputRow}>
// // // // // //             <TouchableOpacity style={styles.inputIconBtn}>
// // // // // //               <Ionicons name="add" size={24} color="#E5E7EB" />
// // // // // //             </TouchableOpacity>
// // // // // //             <TextInput
// // // // // //               style={styles.textInput}
// // // // // //               placeholder="Okay."
// // // // // //               placeholderTextColor="#9CA3AF"
// // // // // //               value={input}
// // // // // //               onChangeText={setInput}
// // // // // //             />
// // // // // //             <TouchableOpacity style={styles.inputIconBtn}>
// // // // // //               <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
// // // // // //             </TouchableOpacity>
// // // // // //             <TouchableOpacity style={styles.inputIconBtn}>
// // // // // //               <Ionicons name="mic-outline" size={22} color="#E5E7EB" />
// // // // // //             </TouchableOpacity>
// // // // // //           </View>
// // // // // //           <View style={{ height: 8 }} />
// // // // // //         </KeyboardAvoidingView>
// // // // // //       </View>

// // // // // //       {/* ------------- Actions / Reactions bottom sheet ------------- */}
// // // // // //       <Modal
// // // // // //         visible={showActionsSheet}
// // // // // //         transparent
// // // // // //         animationType="fade"
// // // // // //         onRequestClose={() => setShowActionsSheet(false)}
// // // // // //       >
// // // // // //         <Pressable
// // // // // //           style={styles.modalBackdrop}
// // // // // //           onPress={() => setShowActionsSheet(false)}
// // // // // //         >
// // // // // //           <View />
// // // // // //         </Pressable>

// // // // // //         <View style={styles.sheetContainer}>
// // // // // //           {/* Small handle */}
// // // // // //           <View style={styles.sheetHandle} />

// // // // // //           {/* Selected message bubble */}
// // // // // //           {selectedMessage && (
// // // // // //             <View style={[styles.bubblePreview]}>
// // // // // //               <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
// // // // // //             </View>
// // // // // //           )}

// // // // // //           {/* Reactions row */}
// // // // // //           <View style={styles.reactionRow}>
// // // // // //             {REACTION_EMOJIS.map((emoji) => (
// // // // // //               <TouchableOpacity
// // // // // //                 key={emoji}
// // // // // //                 onPress={() => emoji === "➕" ? null : setReactionForSelected(emoji)}
// // // // // //                 style={styles.reactionCircle}
// // // // // //               >
// // // // // //                 <Text style={styles.reactionEmoji}>{emoji}</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             ))}
// // // // // //           </View>

// // // // // //           {/* Actions list */}
// // // // // //           <View style={styles.sheetActions}>
// // // // // //             <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
// // // // // //             <SheetAction label="Forward" icon="arrow-redo-outline" onPress={handleForward} />
// // // // // //             <SheetAction label="Pin" icon="pin-outline" />
// // // // // //             <SheetAction label="Edit" icon="pencil-outline" />
// // // // // //             <SheetAction label="Copy" icon="copy-outline" onPress={handleCopySelected} />
// // // // // //             <SheetAction
// // // // // //               label="Report"
// // // // // //               icon="flag-outline"
// // // // // //               danger
// // // // // //               onPress={handleReport}
// // // // // //             />
// // // // // //             <SheetAction
// // // // // //               label="Delete"
// // // // // //               icon="trash-outline"
// // // // // //               danger
// // // // // //               onPress={handleDeleteSelected}
// // // // // //             />
// // // // // //           </View>
// // // // // //         </View>
// // // // // //       </Modal>

// // // // // //       {/* ------------- Forward modal ------------- */}
// // // // // //       <Modal
// // // // // //         visible={showForwardModal}
// // // // // //         transparent
// // // // // //         animationType="slide"
// // // // // //         onRequestClose={() => setShowForwardModal(false)}
// // // // // //       >
// // // // // //         <View style={styles.modalBackdrop} />
// // // // // //         <View style={styles.forwardContainer}>
// // // // // //           <View style={styles.sheetHandle} />
// // // // // //           <View style={styles.forwardHeader}>
// // // // // //             <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
// // // // // //             <Text style={styles.forwardTitle}>Forward</Text>
// // // // // //             <TouchableOpacity onPress={() => setShowForwardModal(false)}>
// // // // // //               <Ionicons name="close" size={22} color="#E5E7EB" />
// // // // // //             </TouchableOpacity>
// // // // // //           </View>

// // // // // //           {/* Search bar */}
// // // // // //           <View style={styles.searchBox}>
// // // // // //             <Ionicons name="search-outline" size={18} color="#9CA3AF" />
// // // // // //             <TextInput
// // // // // //               style={styles.searchInput}
// // // // // //               placeholder="Search Orbit"
// // // // // //               placeholderTextColor="#6B7280"
// // // // // //               value={searchText}
// // // // // //               onChangeText={setSearchText}
// // // // // //             />
// // // // // //           </View>

// // // // // //           <FlatList
// // // // // //             data={filteredContacts}
// // // // // //             keyExtractor={(item) => item.id}
// // // // // //             contentContainerStyle={{ paddingBottom: 80 }}
// // // // // //             renderItem={({ item }) => {
// // // // // //               const selected = selectedContacts.includes(item.id);
// // // // // //               return (
// // // // // //                 <View style={styles.contactRow}>
// // // // // //                   {/* avatar circle */}
// // // // // //                   <View style={styles.avatarCircle}>
// // // // // //                     <Text style={styles.avatarInitial}>
// // // // // //                       {item.name[0].toUpperCase()}
// // // // // //                     </Text>
// // // // // //                   </View>
// // // // // //                   <Text style={styles.contactName} numberOfLines={1}>
// // // // // //                     {item.name}
// // // // // //                   </Text>
// // // // // //                   <TouchableOpacity
// // // // // //                     style={styles.checkboxOuter}
// // // // // //                     onPress={() => toggleContact(item.id)}
// // // // // //                   >
// // // // // //                     {selected && <View style={styles.checkboxInner} />}
// // // // // //                   </TouchableOpacity>
// // // // // //                 </View>
// // // // // //               );
// // // // // //             }}
// // // // // //           />

// // // // // //           {/* Send button */}
// // // // // //           <TouchableOpacity
// // // // // //             style={styles.sendBtn}
// // // // // //             onPress={handleForwardSend}
// // // // // //           >
// // // // // //             <Ionicons name="send" size={20} color="#FFFFFF" />
// // // // // //             <Text style={styles.sendBtnText}>Send</Text>
// // // // // //           </TouchableOpacity>
// // // // // //         </View>
// // // // // //       </Modal>

// // // // // //       {/* ------------- Report modal ------------- */}
// // // // // //       <Modal
// // // // // //         visible={showReportModal}
// // // // // //         transparent
// // // // // //         animationType="slide"
// // // // // //         onRequestClose={() => setShowReportModal(false)}
// // // // // //       >
// // // // // //         <View style={styles.modalBackdrop} />
// // // // // //         <View style={styles.reportContainer}>
// // // // // //           <View style={styles.sheetHandle} />
// // // // // //           <Text style={styles.reportTitle}>Which best describes this problem?</Text>
// // // // // //           <Text style={styles.reportSubtitle}>
// // // // // //             Send recent messages from this conversation for review. If someone is in
// // // // // //             immediate danger, call the local emergency services.
// // // // // //           </Text>

// // // // // //           {[
// // // // // //             "Nudity or pornography",
// // // // // //             "Sexual exploitation or solicitation",
// // // // // //             "Threatening to share private images",
// // // // // //             "Child nudity",
// // // // // //           ].map((reason) => {
// // // // // //             const selected = reportReason === reason;
// // // // // //             return (
// // // // // //               <Pressable
// // // // // //                 key={reason}
// // // // // //                 style={styles.reportRow}
// // // // // //                 onPress={() => setReportReason(reason)}
// // // // // //               >
// // // // // //                 <Text style={styles.reportReasonText}>{reason}</Text>
// // // // // //                 <View style={styles.radioOuter}>
// // // // // //                   {selected && <View style={styles.radioInner} />}
// // // // // //                 </View>
// // // // // //               </Pressable>
// // // // // //             );
// // // // // //           })}

// // // // // //           <TouchableOpacity
// // // // // //             style={styles.submitReportBtn}
// // // // // //             onPress={handleSubmitReport}
// // // // // //           >
// // // // // //             <Text style={styles.submitReportText}>Submit report</Text>
// // // // // //           </TouchableOpacity>
// // // // // //         </View>
// // // // // //       </Modal>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // }

// // // // // // // small component for actions list
// // // // // // const SheetAction = ({ label, icon, onPress, danger }) => (
// // // // // //   <TouchableOpacity style={styles.sheetActionRow} onPress={onPress}>
// // // // // //     <View style={styles.sheetActionLeft}>
// // // // // //       <Ionicons
// // // // // //         name={icon}
// // // // // //         size={20}
// // // // // //         color={danger ? "#F97373" : "#E5E7EB"}
// // // // // //         style={{ marginRight: 16 }}
// // // // // //       />
// // // // // //       <Text style={[styles.sheetActionText, danger && { color: "#F97373" }]}>
// // // // // //         {label}
// // // // // //       </Text>
// // // // // //     </View>
// // // // // //   </TouchableOpacity>
// // // // // // );

// // // // // // // --------------- Styles ---------------
// // // // // // const styles = StyleSheet.create({
// // // // // //   safe: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: "#020617",
// // // // // //   },
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: "#0B1220",
// // // // // //   },
// // // // // //   header: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     paddingHorizontal: 16,
// // // // // //     paddingVertical: 10,
// // // // // //     justifyContent: "space-between",
// // // // // //   },
// // // // // //   headerLeft: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // //   headerTitle: {
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 18,
// // // // // //     fontWeight: "600",
// // // // // //     marginLeft: 4,
// // // // // //   },
// // // // // //   headerRight: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // //   listContent: {
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingVertical: 8,
// // // // // //   },
// // // // // //   messageRow: {
// // // // // //     marginVertical: 4,
// // // // // //     flexDirection: "row",
// // // // // //   },
// // // // // //   messageRowLeft: {
// // // // // //     justifyContent: "flex-start",
// // // // // //   },
// // // // // //   messageRowRight: {
// // // // // //     justifyContent: "flex-end",
// // // // // //   },
// // // // // //   bubble: {
// // // // // //     maxWidth: "75%",
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingVertical: 8,
// // // // // //     borderRadius: 18,
// // // // // //   },
// // // // // //   bubbleMe: {
// // // // // //     backgroundColor: "#0EA5E9",
// // // // // //     borderBottomRightRadius: 4,
// // // // // //   },
// // // // // //   bubbleOther: {
// // // // // //     backgroundColor: "#1D4ED8",
// // // // // //     borderBottomLeftRadius: 4,
// // // // // //   },
// // // // // //   bubbleText: {
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 14,
// // // // // //   },
// // // // // //   reactionBadge: {
// // // // // //     alignSelf: "flex-end",
// // // // // //     marginTop: 4,
// // // // // //     paddingHorizontal: 6,
// // // // // //     paddingVertical: 2,
// // // // // //     borderRadius: 12,
// // // // // //     backgroundColor: "rgba(15,23,42,0.9)",
// // // // // //   },
// // // // // //   reactionText: {
// // // // // //     fontSize: 12,
// // // // // //     color: "#F9FAFB",
// // // // // //   },
// // // // // //   replyPreview: {
// // // // // //     marginBottom: 4,
// // // // // //     padding: 6,
// // // // // //     borderLeftWidth: 2,
// // // // // //     borderLeftColor: "rgba(15,23,42,0.6)",
// // // // // //     backgroundColor: "rgba(15,23,42,0.3)",
// // // // // //     borderRadius: 10,
// // // // // //   },
// // // // // //   replyPreviewName: {
// // // // // //     fontSize: 11,
// // // // // //     color: "#CBD5F5",
// // // // // //     marginBottom: 2,
// // // // // //   },
// // // // // //   replyPreviewText: {
// // // // // //     fontSize: 11,
// // // // // //     color: "#E5E7EB",
// // // // // //   },

// // // // // //   // reply bar
// // // // // //   replyBarWrapper: {
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingBottom: 4,
// // // // // //   },
// // // // // //   replyBar: {
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderRadius: 16,
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingVertical: 8,
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // //   replyBarTitle: {
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 13,
// // // // // //     fontWeight: "500",
// // // // // //   },
// // // // // //   replyBarText: {
// // // // // //     color: "#9CA3AF",
// // // // // //     fontSize: 12,
// // // // // //     marginTop: 2,
// // // // // //   },

// // // // // //   // input
// // // // // //   inputRow: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingTop: 6,
// // // // // //     paddingBottom: 2,
// // // // // //     backgroundColor: "#020617",
// // // // // //   },
// // // // // //   textInput: {
// // // // // //     flex: 1,
// // // // // //     borderRadius: 999,
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: "#1F2937",
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingVertical: 8,
// // // // // //     color: "#F9FAFB",
// // // // // //     marginHorizontal: 6,
// // // // // //     fontSize: 14,
// // // // // //   },
// // // // // //   inputIconBtn: {
// // // // // //     width: 32,
// // // // // //     height: 32,
// // // // // //     borderRadius: 16,
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //   },

// // // // // //   // modal backdrop
// // // // // //   modalBackdrop: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: "rgba(15,23,42,0.6)",
// // // // // //   },

// // // // // //   // actions sheet
// // // // // //   sheetContainer: {
// // // // // //     position: "absolute",
// // // // // //     left: 0,
// // // // // //     right: 0,
// // // // // //     bottom: 0,
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderTopLeftRadius: 24,
// // // // // //     borderTopRightRadius: 24,
// // // // // //     paddingBottom: 24,
// // // // // //     paddingTop: 8,
// // // // // //     paddingHorizontal: 16,
// // // // // //   },
// // // // // //   sheetHandle: {
// // // // // //     width: 40,
// // // // // //     height: 4,
// // // // // //     borderRadius: 2,
// // // // // //     backgroundColor: "#4B5563",
// // // // // //     alignSelf: "center",
// // // // // //     marginBottom: 10,
// // // // // //   },
// // // // // //   bubblePreview: {
// // // // // //     backgroundColor: "#1E293B",
// // // // // //     borderRadius: 16,
// // // // // //     paddingVertical: 10,
// // // // // //     paddingHorizontal: 12,
// // // // // //     marginBottom: 14,
// // // // // //   },
// // // // // //   reactionRow: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //     marginBottom: 12,
// // // // // //   },
// // // // // //   reactionCircle: {
// // // // // //     width: 40,
// // // // // //     height: 40,
// // // // // //     borderRadius: 20,
// // // // // //     marginHorizontal: 4,
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: "#1E293B",
// // // // // //   },
// // // // // //   reactionEmoji: {
// // // // // //     fontSize: 22,
// // // // // //   },
// // // // // //   sheetActions: {
// // // // // //     marginTop: 4,
// // // // // //   },
// // // // // //   sheetActionRow: {
// // // // // //     paddingVertical: 10,
// // // // // //   },
// // // // // //   sheetActionLeft: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // //   sheetActionText: {
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 15,
// // // // // //   },

// // // // // //   // forward modal
// // // // // //   forwardContainer: {
// // // // // //     position: "absolute",
// // // // // //     left: 0,
// // // // // //     right: 0,
// // // // // //     bottom: 0,
// // // // // //     top: "18%",
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderTopLeftRadius: 24,
// // // // // //     borderTopRightRadius: 24,
// // // // // //     paddingHorizontal: 16,
// // // // // //     paddingTop: 8,
// // // // // //   },
// // // // // //   forwardHeader: {
// // // // // //     marginTop: 4,
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "space-between",
// // // // // //   },
// // // // // //   forwardTitle: {
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 18,
// // // // // //     fontWeight: "600",
// // // // // //   },
// // // // // //   searchBox: {
// // // // // //     marginTop: 16,
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderRadius: 999,
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: "#1F2937",
// // // // // //     paddingHorizontal: 12,
// // // // // //     paddingVertical: 8,
// // // // // //   },
// // // // // //   searchInput: {
// // // // // //     marginLeft: 8,
// // // // // //     color: "#E5E7EB",
// // // // // //     flex: 1,
// // // // // //     fontSize: 14,
// // // // // //   },
// // // // // //   contactRow: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     paddingVertical: 10,
// // // // // //   },
// // // // // //   avatarCircle: {
// // // // // //     width: 40,
// // // // // //     height: 40,
// // // // // //     borderRadius: 20,
// // // // // //     backgroundColor: "#0EA5E9",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //     marginRight: 10,
// // // // // //   },
// // // // // //   avatarInitial: {
// // // // // //     color: "#F9FAFB",
// // // // // //     fontWeight: "700",
// // // // // //   },
// // // // // //   contactName: {
// // // // // //     flex: 1,
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 14,
// // // // // //   },
// // // // // //   checkboxOuter: {
// // // // // //     width: 22,
// // // // // //     height: 22,
// // // // // //     borderRadius: 6,
// // // // // //     borderWidth: 1.5,
// // // // // //     borderColor: "#6366F1",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //   },
// // // // // //   checkboxInner: {
// // // // // //     width: 13,
// // // // // //     height: 13,
// // // // // //     borderRadius: 4,
// // // // // //     backgroundColor: "#6366F1",
// // // // // //   },
// // // // // //   sendBtn: {
// // // // // //     position: "absolute",
// // // // // //     bottom: 24,
// // // // // //     alignSelf: "center",
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     paddingHorizontal: 32,
// // // // // //     paddingVertical: 12,
// // // // // //     borderRadius: 999,
// // // // // //     backgroundColor: "#2563EB",
// // // // // //   },
// // // // // //   sendBtnText: {
// // // // // //     color: "#F9FAFB",
// // // // // //     fontSize: 15,
// // // // // //     fontWeight: "600",
// // // // // //     marginLeft: 6,
// // // // // //   },

// // // // // //   // report modal
// // // // // //   reportContainer: {
// // // // // //     position: "absolute",
// // // // // //     left: 0,
// // // // // //     right: 0,
// // // // // //     bottom: 0,
// // // // // //     top: "22%",
// // // // // //     backgroundColor: "#020617",
// // // // // //     borderTopLeftRadius: 24,
// // // // // //     borderTopRightRadius: 24,
// // // // // //     paddingHorizontal: 20,
// // // // // //     paddingTop: 12,
// // // // // //     paddingBottom: 24,
// // // // // //   },
// // // // // //   reportTitle: {
// // // // // //     color: "#F9FAFB",
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: "600",
// // // // // //     marginTop: 8,
// // // // // //   },
// // // // // //   reportSubtitle: {
// // // // // //     color: "#9CA3AF",
// // // // // //     fontSize: 12,
// // // // // //     marginTop: 8,
// // // // // //     marginBottom: 12,
// // // // // //   },
// // // // // //   reportRow: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     paddingVertical: 10,
// // // // // //     justifyContent: "space-between",
// // // // // //   },
// // // // // //   reportReasonText: {
// // // // // //     color: "#E5E7EB",
// // // // // //     fontSize: 14,
// // // // // //     flex: 1,
// // // // // //   },
// // // // // //   radioOuter: {
// // // // // //     width: 22,
// // // // // //     height: 22,
// // // // // //     borderRadius: 11,
// // // // // //     borderWidth: 1.5,
// // // // // //     borderColor: "#6366F1",
// // // // // //     alignItems: "center",
// // // // // //     justifyContent: "center",
// // // // // //     marginLeft: 16,
// // // // // //   },
// // // // // //   radioInner: {
// // // // // //     width: 12,
// // // // // //     height: 12,
// // // // // //     borderRadius: 6,
// // // // // //     backgroundColor: "#6366F1",
// // // // // //   },
// // // // // //   submitReportBtn: {
// // // // // //     marginTop: 18,
// // // // // //     backgroundColor: "#2563EB",
// // // // // //     borderRadius: 999,
// // // // // //     alignItems: "center",
// // // // // //     paddingVertical: 12,
// // // // // //   },
// // // // // //   submitReportText: {
// // // // // //     color: "#F9FAFB",
// // // // // //     fontWeight: "600",
// // // // // //     fontSize: 15,
// // // // // //   },
// // // // // // });




// // // // // // src/screens/ChatScreen.js
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   StyleSheet,
// // // // //   SafeAreaView,
// // // // //   StatusBar,
// // // // //   FlatList,
// // // // //   TouchableOpacity,
// // // // //   TextInput,
// // // // //   Modal,
// // // // //   Pressable,
// // // // //   KeyboardAvoidingView,
// // // // //   Platform,
// // // // // } from "react-native";
// // // // // import { Ionicons } from "@expo/vector-icons";

// // // // // const INITIAL_MESSAGES = [
// // // // //   { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
// // // // //   { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
// // // // //   { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
// // // // //   { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
// // // // //   { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
// // // // // ];

// // // // // const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

// // // // // export default function ChatScreen({ navigation }) {
// // // // //   const [messages, setMessages] = useState(
// // // // //     INITIAL_MESSAGES.map((m) => ({ ...m, reaction: null, replyToId: null }))
// // // // //   );
// // // // //   const [input, setInput] = useState("");
// // // // //   const [selectedMessage, setSelectedMessage] = useState(null);
// // // // //   const [replyTo, setReplyTo] = useState(null);
// // // // //   const [showActionsSheet, setShowActionsSheet] = useState(false);

// // // // //   const onLongPressMessage = (msg) => {
// // // // //     setSelectedMessage(msg);
// // // // //     setShowActionsSheet(true);
// // // // //   };

// // // // //   const handleSend = () => {
// // // // //     if (!input.trim()) return;
// // // // //     const msg = {
// // // // //       id: Date.now().toString(),
// // // // //       author: "You",
// // // // //       text: input.trim(),
// // // // //       isMe: true,
// // // // //       reaction: null,
// // // // //       replyToId: replyTo?.id || null,
// // // // //     };
// // // // //     setMessages((prev) => [...prev, msg]);
// // // // //     setInput("");
// // // // //     setReplyTo(null);
// // // // //   };

// // // // //   const setReactionForSelected = (emoji) => {
// // // // //     if (!selectedMessage || emoji === "➕") return;
// // // // //     setMessages((prev) =>
// // // // //       prev.map((m) =>
// // // // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // // // //       )
// // // // //     );
// // // // //     setShowActionsSheet(false);
// // // // //   };

// // // // //   const handleDelete = () => {
// // // // //     if (!selectedMessage) return;
// // // // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // // // //     setShowActionsSheet(false);
// // // // //   };

// // // // //   const handleCopy = () => {
// // // // //     // येथे हवे तर Clipboard वापर
// // // // //     console.log("COPY:", selectedMessage?.text);
// // // // //     setShowActionsSheet(false);
// // // // //   };

// // // // //   const handleReply = () => {
// // // // //     setReplyTo(selectedMessage);
// // // // //     setShowActionsSheet(false);
// // // // //   };

// // // // //   const handleForward = () => {
// // // // //     if (!selectedMessage) return;
// // // // //     setShowActionsSheet(false);
// // // // //     navigation.navigate("Forward", { message: selectedMessage });
// // // // //   };

// // // // //   const handleReport = () => {
// // // // //     if (!selectedMessage) return;
// // // // //     setShowActionsSheet(false);
// // // // //     navigation.navigate("Report", { message: selectedMessage });
// // // // //   };

// // // // //   const renderMessage = ({ item }) => {
// // // // //     const isMe = item.isMe;
// // // // //     const container = [
// // // // //       styles.messageRow,
// // // // //       isMe ? styles.messageRowRight : styles.messageRowLeft,
// // // // //     ];
// // // // //     const bubble = [
// // // // //       styles.bubble,
// // // // //       isMe ? styles.bubbleMe : styles.bubbleOther,
// // // // //     ];

// // // // //     const replyMsg = item.replyToId
// // // // //       ? messages.find((m) => m.id === item.replyToId)
// // // // //       : null;

// // // // //     return (
// // // // //       <TouchableOpacity
// // // // //         style={container}
// // // // //         activeOpacity={0.8}
// // // // //         onLongPress={() => onLongPressMessage(item)}
// // // // //       >
// // // // //         <View style={bubble}>
// // // // //           {replyMsg && (
// // // // //             <View style={styles.replyPreview}>
// // // // //               <Text style={styles.replyPreviewName}>
// // // // //                 Replying to {replyMsg.author}
// // // // //               </Text>
// // // // //               <Text numberOfLines={1} style={styles.replyPreviewText}>
// // // // //                 {replyMsg.text}
// // // // //               </Text>
// // // // //             </View>
// // // // //           )}

// // // // //           <Text style={styles.bubbleText}>{item.text}</Text>

// // // // //           {item.reaction && (
// // // // //             <View style={styles.reactionBadge}>
// // // // //               <Text style={styles.reactionText}>{item.reaction}</Text>
// // // // //             </View>
// // // // //           )}
// // // // //         </View>
// // // // //       </TouchableOpacity>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <SafeAreaView style={styles.safe}>
// // // // //       <StatusBar barStyle="light-content" />
// // // // //       <View style={styles.container}>
// // // // //         {/* Header with call buttons */}
// // // // //         <View style={styles.header}>
// // // // //           <View style={styles.headerLeft}>
// // // // //             <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
// // // // //             <Text style={styles.headerTitle}>Perfecto</Text>
// // // // //           </View>
// // // // //           <View style={styles.headerRight}>
// // // // //             <TouchableOpacity
// // // // //               onPress={() =>
// // // // //                 navigation.navigate("VoiceCall", {
// // // // //                   contact: { name: "Perfecto" },
// // // // //                 })
// // // // //               }
// // // // //             >
// // // // //               <Ionicons name="call-outline" size={22} color="#E5E7EB" />
// // // // //             </TouchableOpacity>
// // // // //             <TouchableOpacity
// // // // //               style={{ marginLeft: 14 }}
// // // // //               onPress={() =>
// // // // //                 navigation.navigate("VideoCall", {
// // // // //                   contact: { name: "Perfecto" },
// // // // //                 })
// // // // //               }
// // // // //             >
// // // // //               <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
// // // // //             </TouchableOpacity>
// // // // //           </View>
// // // // //         </View>

// // // // //         {/* Messages list */}
// // // // //         <FlatList
// // // // //           data={messages}
// // // // //           keyExtractor={(item) => item.id}
// // // // //           renderItem={renderMessage}
// // // // //           contentContainerStyle={styles.listContent}
// // // // //         />

// // // // //         {/* Reply bar */}
// // // // //         {replyTo && (
// // // // //           <View style={styles.replyBarWrapper}>
// // // // //             <View style={styles.replyBar}>
// // // // //               <View style={{ flex: 1 }}>
// // // // //                 <Text style={styles.replyBarTitle}>
// // // // //                   Replying to {replyTo.author}
// // // // //                 </Text>
// // // // //                 <Text numberOfLines={1} style={styles.replyBarText}>
// // // // //                   {replyTo.text}
// // // // //                 </Text>
// // // // //               </View>
// // // // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // // // //                 <Ionicons name="close" size={18} color="#E5E7EB" />
// // // // //               </TouchableOpacity>
// // // // //             </View>
// // // // //           </View>
// // // // //         )}

// // // // //         {/* Input row */}
// // // // //         <KeyboardAvoidingView
// // // // //           behavior={Platform.OS === "ios" ? "padding" : undefined}
// // // // //         >
// // // // //           <View style={styles.inputRow}>
// // // // //             <TouchableOpacity style={styles.iconBtn}>
// // // // //               <Ionicons name="add" size={24} color="#E5E7EB" />
// // // // //             </TouchableOpacity>
// // // // //             <TextInput
// // // // //               style={styles.textInput}
// // // // //               placeholder="Okay."
// // // // //               placeholderTextColor="#9CA3AF"
// // // // //               value={input}
// // // // //               onChangeText={setInput}
// // // // //             />
// // // // //             <TouchableOpacity style={styles.iconBtn}>
// // // // //               <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
// // // // //             </TouchableOpacity>
// // // // //             <TouchableOpacity style={styles.iconBtn} onPress={handleSend}>
// // // // //               <Ionicons name="send" size={22} color="#E5E7EB" />
// // // // //             </TouchableOpacity>
// // // // //           </View>
// // // // //         </KeyboardAvoidingView>
// // // // //       </View>

// // // // //       {/* Reactions / actions bottom sheet */}
// // // // //       <Modal
// // // // //         visible={showActionsSheet}
// // // // //         transparent
// // // // //         animationType="fade"
// // // // //         onRequestClose={() => setShowActionsSheet(false)}
// // // // //       >
// // // // //         <Pressable
// // // // //           style={styles.backdrop}
// // // // //           onPress={() => setShowActionsSheet(false)}
// // // // //         >
// // // // //           <View />
// // // // //         </Pressable>

// // // // //         <View style={styles.sheet}>
// // // // //           <View style={styles.sheetHandle} />
// // // // //           {selectedMessage && (
// // // // //             <View style={styles.previewBubble}>
// // // // //               <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
// // // // //             </View>
// // // // //           )}

// // // // //           {/* emoji row */}
// // // // //           <View style={styles.reactionRow}>
// // // // //             {REACTION_EMOJIS.map((e) => (
// // // // //               <TouchableOpacity
// // // // //                 key={e}
// // // // //                 style={styles.reactionCircle}
// // // // //                 onPress={() => setReactionForSelected(e)}
// // // // //               >
// // // // //                 <Text style={styles.reactionEmoji}>{e}</Text>
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>

// // // // //           {/* actions */}
// // // // //           <View style={{ marginTop: 4 }}>
// // // // //             <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
// // // // //             <SheetAction
// // // // //               label="Forward"
// // // // //               icon="arrow-redo-outline"
// // // // //               onPress={handleForward}
// // // // //             />
// // // // //             <SheetAction label="Pin" icon="pin-outline" />
// // // // //             <SheetAction label="Edit" icon="pencil-outline" />
// // // // //             <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
// // // // //             <SheetAction
// // // // //               label="Report"
// // // // //               icon="flag-outline"
// // // // //               danger
// // // // //               onPress={handleReport}
// // // // //             />
// // // // //             <SheetAction
// // // // //               label="Delete"
// // // // //               icon="trash-outline"
// // // // //               danger
// // // // //               onPress={handleDelete}
// // // // //             />
// // // // //           </View>
// // // // //         </View>
// // // // //       </Modal>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // const SheetAction = ({ label, icon, onPress, danger }) => (
// // // // //   <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
// // // // //     <View style={styles.sheetRowLeft}>
// // // // //       <Ionicons
// // // // //         name={icon}
// // // // //         size={20}
// // // // //         color={danger ? "#F97373" : "#E5E7EB"}
// // // // //         style={{ marginRight: 14 }}
// // // // //       />
// // // // //       <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>
// // // // //         {label}
// // // // //       </Text>
// // // // //     </View>
// // // // //   </TouchableOpacity>
// // // // // );

// // // // // const styles = StyleSheet.create({
// // // // //   safe: { flex: 1, backgroundColor: "#020617" },
// // // // //   container: { flex: 1, backgroundColor: "#0B1220" },
// // // // //   header: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     paddingHorizontal: 16,
// // // // //     paddingVertical: 10,
// // // // //     justifyContent: "space-between",
// // // // //   },
// // // // //   headerLeft: { flexDirection: "row", alignItems: "center" },
// // // // //   headerTitle: {
// // // // //     color: "#E5E7EB",
// // // // //     fontSize: 18,
// // // // //     fontWeight: "600",
// // // // //     marginLeft: 4,
// // // // //   },
// // // // //   headerRight: { flexDirection: "row", alignItems: "center" },

// // // // //   listContent: { paddingHorizontal: 12, paddingVertical: 8 },
// // // // //   messageRow: { marginVertical: 4, flexDirection: "row" },
// // // // //   messageRowLeft: { justifyContent: "flex-start" },
// // // // //   messageRowRight: { justifyContent: "flex-end" },
// // // // //   bubble: {
// // // // //     maxWidth: "75%",
// // // // //     paddingHorizontal: 12,
// // // // //     paddingVertical: 8,
// // // // //     borderRadius: 18,
// // // // //   },
// // // // //   bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
// // // // //   bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
// // // // //   bubbleText: { color: "#E5E7EB", fontSize: 14 },
// // // // //   reactionBadge: {
// // // // //     alignSelf: "flex-end",
// // // // //     marginTop: 4,
// // // // //     paddingHorizontal: 6,
// // // // //     paddingVertical: 2,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: "rgba(15,23,42,0.9)",
// // // // //   },
// // // // //   reactionText: { fontSize: 12, color: "#F9FAFB" },

// // // // //   replyPreview: {
// // // // //     marginBottom: 4,
// // // // //     padding: 6,
// // // // //     borderLeftWidth: 2,
// // // // //     borderLeftColor: "rgba(15,23,42,0.6)",
// // // // //     backgroundColor: "rgba(15,23,42,0.3)",
// // // // //     borderRadius: 10,
// // // // //   },
// // // // //   replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
// // // // //   replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

// // // // //   replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
// // // // //   replyBar: {
// // // // //     backgroundColor: "#020617",
// // // // //     borderRadius: 16,
// // // // //     paddingHorizontal: 12,
// // // // //     paddingVertical: 8,
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //   },
// // // // //   replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
// // // // //   replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

// // // // //   inputRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     paddingHorizontal: 12,
// // // // //     paddingTop: 6,
// // // // //     paddingBottom: 8,
// // // // //     backgroundColor: "#020617",
// // // // //   },
// // // // //   textInput: {
// // // // //     flex: 1,
// // // // //     borderRadius: 999,
// // // // //     backgroundColor: "#020617",
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#1F2937",
// // // // //     paddingHorizontal: 12,
// // // // //     paddingVertical: 8,
// // // // //     color: "#F9FAFB",
// // // // //     marginHorizontal: 6,
// // // // //     fontSize: 14,
// // // // //   },
// // // // //   iconBtn: {
// // // // //     width: 32,
// // // // //     height: 32,
// // // // //     borderRadius: 16,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },

// // // // //   backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },
// // // // //   sheet: {
// // // // //     position: "absolute",
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     bottom: 0,
// // // // //     backgroundColor: "#020617",
// // // // //     borderTopLeftRadius: 24,
// // // // //     borderTopRightRadius: 24,
// // // // //     paddingHorizontal: 16,
// // // // //     paddingTop: 8,
// // // // //     paddingBottom: 24,
// // // // //   },
// // // // //   sheetHandle: {
// // // // //     width: 40,
// // // // //     height: 4,
// // // // //     borderRadius: 2,
// // // // //     backgroundColor: "#4B5563",
// // // // //     alignSelf: "center",
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   previewBubble: {
// // // // //     backgroundColor: "#1E293B",
// // // // //     borderRadius: 16,
// // // // //     paddingVertical: 10,
// // // // //     paddingHorizontal: 12,
// // // // //     marginBottom: 14,
// // // // //   },
// // // // //   reactionRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     marginBottom: 12,
// // // // //   },
// // // // //   reactionCircle: {
// // // // //     width: 40,
// // // // //     height: 40,
// // // // //     borderRadius: 20,
// // // // //     marginHorizontal: 4,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     backgroundColor: "#020617",
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#1E293B",
// // // // //   },
// // // // //   reactionEmoji: { fontSize: 22 },
// // // // //   sheetRow: { paddingVertical: 9 },
// // // // //   sheetRowLeft: { flexDirection: "row", alignItems: "center" },
// // // // //   sheetText: { color: "#E5E7EB", fontSize: 15 },
// // // // // });
// // // // // ChatScreen.js
// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   SafeAreaView,
// // // //   StatusBar,
// // // //   FlatList,
// // // //   TouchableOpacity,
// // // //   TextInput,
// // // //   Modal,
// // // //   Pressable,
// // // //   KeyboardAvoidingView,
// // // //   Platform,
// // // //   Image,
// // // //   Alert,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";
// // // // import * as ImagePicker from "expo-image-picker";
// // // // import * as DocumentPicker from "expo-document-picker";

// // // // const INITIAL_MESSAGES = [
// // // //   { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
// // // //   { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
// // // //   { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
// // // //   { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
// // // //   { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
// // // // ];

// // // // const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

// // // // // साधा emoji picker साठी list
// // // // const EMOJI_LIST = [
// // // //   "😀",
// // // //   "😁",
// // // //   "😂",
// // // //   "🤣",
// // // //   "😃",
// // // //   "😄",
// // // //   "😅",
// // // //   "😆",
// // // //   "😉",
// // // //   "😊",
// // // //   "🙂",
// // // //   "🙃",
// // // //   "😍",
// // // //   "😘",
// // // //   "😜",
// // // //   "😝",
// // // //   "🤗",
// // // //   "🤔",
// // // //   "😎",
// // // //   "😏",
// // // //   "😢",
// // // //   "😭",
// // // //   "😡",
// // // //   "😱",
// // // //   "🤯",
// // // //   "👍",
// // // //   "👎",
// // // //   "🙏",
// // // //   "👏",
// // // //   "💯",
// // // //   "🔥",
// // // //   "❤️",
// // // //   "💙",
// // // //   "💚",
// // // //   "💛",
// // // //   "🧡",
// // // //   "💜",
// // // //   "🤍",
// // // //   "🤎",
// // // //   "💔",
// // // // ];

// // // // export default function ChatScreen({ navigation }) {
// // // //   const [messages, setMessages] = useState(
// // // //     INITIAL_MESSAGES.map((m) => ({
// // // //       ...m,
// // // //       type: "text",
// // // //       reaction: null,
// // // //       replyToId: null,
// // // //     }))
// // // //   );
// // // //   const [input, setInput] = useState("");
// // // //   const [selectedMessage, setSelectedMessage] = useState(null);
// // // //   const [replyTo, setReplyTo] = useState(null);
// // // //   const [showActionsSheet, setShowActionsSheet] = useState(false);

// // // //   const [showAttachmentSheet, setShowAttachmentSheet] = useState(false);
// // // //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

// // // //   // ---------------- MESSAGE ACTIONS ----------------
// // // //   const onLongPressMessage = (msg) => {
// // // //     setSelectedMessage(msg);
// // // //     setShowActionsSheet(true);
// // // //   };

// // // //   const handleSend = () => {
// // // //     if (!input.trim()) return;
// // // //     const msg = {
// // // //       id: Date.now().toString(),
// // // //       author: "You",
// // // //       text: input.trim(),
// // // //       isMe: true,
// // // //       type: "text",
// // // //       reaction: null,
// // // //       replyToId: replyTo?.id || null,
// // // //     };
// // // //     setMessages((prev) => [...prev, msg]);
// // // //     setInput("");
// // // //     setReplyTo(null);
// // // //   };

// // // //   const setReactionForSelected = (emoji) => {
// // // //     if (!selectedMessage || emoji === "➕") return;
// // // //     setMessages((prev) =>
// // // //       prev.map((m) =>
// // // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // // //       )
// // // //     );
// // // //     setShowActionsSheet(false);
// // // //   };

// // // //   const handleDelete = () => {
// // // //     if (!selectedMessage) return;
// // // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // // //     setShowActionsSheet(false);
// // // //   };

// // // //   const handleCopy = () => {
// // // //     console.log("COPY:", selectedMessage?.text);
// // // //     setShowActionsSheet(false);
// // // //   };

// // // //   const handleReply = () => {
// // // //     setReplyTo(selectedMessage);
// // // //     setShowActionsSheet(false);
// // // //   };

// // // //   const handleForward = () => {
// // // //     if (!selectedMessage) return;
// // // //     setShowActionsSheet(false);
// // // //     navigation.navigate("Forward", { message: selectedMessage });
// // // //   };

// // // //   const handleReport = () => {
// // // //     if (!selectedMessage) return;
// // // //     setShowActionsSheet(false);
// // // //     navigation.navigate("Report", { message: selectedMessage });
// // // //   };

// // // //   // ---------------- ATTACHMENT HELPERS ----------------
// // // //   const addAttachmentMessage = ({ type, uri, name }) => {
// // // //     const msg = {
// // // //       id: Date.now().toString(),
// // // //       author: "You",
// // // //       text:
// // // //         type === "document"
// // // //           ? name || "Document"
// // // //           : type === "audio"
// // // //           ? name || "Audio"
// // // //           : "",
// // // //       isMe: true,
// // // //       type, // "image" | "document" | "audio"
// // // //       uri,
// // // //       fileName: name || null,
// // // //       reaction: null,
// // // //       replyToId: replyTo?.id || null,
// // // //     };
// // // //     setMessages((prev) => [...prev, msg]);
// // // //     setReplyTo(null);
// // // //   };

// // // //   const pickImageFromLibrary = async () => {
// // // //     setShowAttachmentSheet(false);
// // // //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // //     if (status !== "granted") {
// // // //       Alert.alert("Permission", "Gallery permission required.");
// // // //       return;
// // // //     }

// // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // //       quality: 0.7,
// // // //     });

// // // //     if (!result.canceled && result.assets && result.assets.length > 0) {
// // // //       const asset = result.assets[0];
// // // //       addAttachmentMessage({ type: "image", uri: asset.uri });
// // // //     }
// // // //   };

// // // //   const pickDocumentGeneric = async (forAudio = false) => {
// // // //     setShowAttachmentSheet(false);

// // // //     try {
// // // //       const result = await DocumentPicker.getDocumentAsync({
// // // //         type: forAudio ? "audio/*" : "*/*",
// // // //         multiple: false,
// // // //         copyToCacheDirectory: true,
// // // //       });

// // // //       // new API
// // // //       let asset = null;
// // // //       if (result.canceled) return;

// // // //       if ("assets" in result && result.assets?.length) {
// // // //         asset = result.assets[0];
// // // //       } else if (result.type === "success") {
// // // //         // older API
// // // //         asset = result;
// // // //       }

// // // //       if (!asset) return;

// // // //       const payload = {
// // // //         type: forAudio ? "audio" : "document",
// // // //         uri: asset.uri,
// // // //         name: asset.name || (forAudio ? "Audio file" : "Document"),
// // // //       };
// // // //       addAttachmentMessage(payload);
// // // //     } catch (e) {
// // // //       console.log("Document pick error", e);
// // // //     }
// // // //   };

// // // //   // ---------------- RENDER MESSAGE ----------------
// // // //   const renderMessage = ({ item }) => {
// // // //     const isMe = item.isMe;
// // // //     const container = [
// // // //       styles.messageRow,
// // // //       isMe ? styles.messageRowRight : styles.messageRowLeft,
// // // //     ];
// // // //     const bubble = [
// // // //       styles.bubble,
// // // //       isMe ? styles.bubbleMe : styles.bubbleOther,
// // // //     ];

// // // //     const replyMsg = item.replyToId
// // // //       ? messages.find((m) => m.id === item.replyToId)
// // // //       : null;

// // // //     const renderContent = () => {
// // // //       if (item.type === "image") {
// // // //         return (
// // // //           <Image source={{ uri: item.uri }} style={styles.imageMessage} />
// // // //         );
// // // //       }
// // // //       if (item.type === "document") {
// // // //         return (
// // // //           <View style={styles.fileRow}>
// // // //             <Ionicons name="document-text-outline" size={20} color="#E5E7EB" />
// // // //             <Text style={styles.fileText} numberOfLines={1}>
// // // //               {item.fileName || item.text || "Document"}
// // // //             </Text>
// // // //           </View>
// // // //         );
// // // //       }
// // // //       if (item.type === "audio") {
// // // //         return (
// // // //           <View style={styles.fileRow}>
// // // //             <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
// // // //             <Text style={styles.fileText} numberOfLines={1}>
// // // //               {item.fileName || "Audio message"}
// // // //             </Text>
// // // //           </View>
// // // //         );
// // // //       }
// // // //       // text
// // // //       return <Text style={styles.bubbleText}>{item.text}</Text>;
// // // //     };

// // // //     return (
// // // //       <TouchableOpacity
// // // //         style={container}
// // // //         activeOpacity={0.8}
// // // //         onLongPress={() => onLongPressMessage(item)}
// // // //       >
// // // //         <View style={bubble}>
// // // //           {replyMsg && (
// // // //             <View style={styles.replyPreview}>
// // // //               <Text style={styles.replyPreviewName}>
// // // //                 Replying to {replyMsg.author}
// // // //               </Text>
// // // //               <Text numberOfLines={1} style={styles.replyPreviewText}>
// // // //                 {replyMsg.text}
// // // //               </Text>
// // // //             </View>
// // // //           )}

// // // //           {renderContent()}

// // // //           {item.reaction && (
// // // //             <View style={styles.reactionBadge}>
// // // //               <Text style={styles.reactionText}>{item.reaction}</Text>
// // // //             </View>
// // // //           )}
// // // //         </View>
// // // //       </TouchableOpacity>
// // // //     );
// // // //   };

// // // //   // ---------------- UI ----------------
// // // //   return (
// // // //     <SafeAreaView style={styles.safe}>
// // // //       <StatusBar barStyle="light-content" />
// // // //       <View style={styles.container}>
// // // //         {/* Header with call buttons */}
// // // //         <View style={styles.header}>
// // // //           <View style={styles.headerLeft}>
// // // //             <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
// // // //             <Text style={styles.headerTitle}>Perfecto</Text>
// // // //           </View>
// // // //           <View style={styles.headerRight}>
// // // //             <TouchableOpacity
// // // //               onPress={() =>
// // // //                 navigation.navigate("VoiceCall", {
// // // //                   contact: { name: "Perfecto" },
// // // //                 })
// // // //               }
// // // //             >
// // // //               <Ionicons name="call-outline" size={22} color="#E5E7EB" />
// // // //             </TouchableOpacity>
// // // //             <TouchableOpacity
// // // //               style={{ marginLeft: 14 }}
// // // //               onPress={() =>
// // // //                 navigation.navigate("VideoCall", {
// // // //                   contact: { name: "Perfecto" },
// // // //                 })
// // // //               }
// // // //             >
// // // //               <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </View>

// // // //         {/* Messages list */}
// // // //         <FlatList
// // // //           data={messages}
// // // //           keyExtractor={(item) => item.id}
// // // //           renderItem={renderMessage}
// // // //           contentContainerStyle={styles.listContent}
// // // //         />

// // // //         {/* Reply bar */}
// // // //         {replyTo && (
// // // //           <View style={styles.replyBarWrapper}>
// // // //             <View style={styles.replyBar}>
// // // //               <View style={{ flex: 1 }}>
// // // //                 <Text style={styles.replyBarTitle}>
// // // //                   Replying to {replyTo.author}
// // // //                 </Text>
// // // //                 <Text numberOfLines={1} style={styles.replyBarText}>
// // // //                   {replyTo.text}
// // // //                 </Text>
// // // //               </View>
// // // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // // //                 <Ionicons name="close" size={18} color="#E5E7EB" />
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //           </View>
// // // //         )}

// // // //         {/* Emoji picker panel */}
// // // //         {showEmojiPicker && (
// // // //           <View style={styles.emojiPicker}>
// // // //             <FlatList
// // // //               data={EMOJI_LIST}
// // // //               keyExtractor={(_, index) => index.toString()}
// // // //               numColumns={8}
// // // //               renderItem={({ item }) => (
// // // //                 <TouchableOpacity
// // // //                   style={styles.emojiItem}
// // // //                   onPress={() => setInput((prev) => prev + item)}
// // // //                 >
// // // //                   <Text style={{ fontSize: 24 }}>{item}</Text>
// // // //                 </TouchableOpacity>
// // // //               )}
// // // //             />
// // // //           </View>
// // // //         )}

// // // //         {/* Input row */}
// // // //         <KeyboardAvoidingView
// // // //           behavior={Platform.OS === "ios" ? "padding" : undefined}
// // // //         >
// // // //           <View style={styles.inputRow}>
// // // //             <TouchableOpacity
// // // //               style={styles.iconBtn}
// // // //               onPress={() => {
// // // //                 setShowEmojiPicker(false);
// // // //                 setShowAttachmentSheet(true);
// // // //               }}
// // // //             >
// // // //               <Ionicons name="add" size={24} color="#E5E7EB" />
// // // //             </TouchableOpacity>
// // // //             <TextInput
// // // //               style={styles.textInput}
// // // //               placeholder="Okay."
// // // //               placeholderTextColor="#9CA3AF"
// // // //               value={input}
// // // //               onChangeText={setInput}
// // // //               onFocus={() => setShowEmojiPicker(false)}
// // // //             />
// // // //             <TouchableOpacity
// // // //               style={styles.iconBtn}
// // // //               onPress={() => setShowEmojiPicker((v) => !v)}
// // // //             >
// // // //               <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
// // // //             </TouchableOpacity>
// // // //             <TouchableOpacity style={styles.iconBtn} onPress={handleSend}>
// // // //               <Ionicons name="send" size={22} color="#E5E7EB" />
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </KeyboardAvoidingView>
// // // //       </View>

// // // //       {/* Reactions / actions bottom sheet */}
// // // //       <Modal
// // // //         visible={showActionsSheet}
// // // //         transparent
// // // //         animationType="fade"
// // // //         onRequestClose={() => setShowActionsSheet(false)}
// // // //       >
// // // //         <Pressable
// // // //           style={styles.backdrop}
// // // //           onPress={() => setShowActionsSheet(false)}
// // // //         >
// // // //           <View />
// // // //         </Pressable>

// // // //         <View style={styles.sheet}>
// // // //           <View style={styles.sheetHandle} />
// // // //           {selectedMessage && (
// // // //             <View style={styles.previewBubble}>
// // // //               <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
// // // //             </View>
// // // //           )}

// // // //           {/* emoji row */}
// // // //           <View style={styles.reactionRow}>
// // // //             {REACTION_EMOJIS.map((e) => (
// // // //               <TouchableOpacity
// // // //                 key={e}
// // // //                 style={styles.reactionCircle}
// // // //                 onPress={() => setReactionForSelected(e)}
// // // //               >
// // // //                 <Text style={styles.reactionEmoji}>{e}</Text>
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </View>

// // // //           {/* actions */}
// // // //           <View style={{ marginTop: 4 }}>
// // // //             <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
// // // //             <SheetAction
// // // //               label="Forward"
// // // //               icon="arrow-redo-outline"
// // // //               onPress={handleForward}
// // // //             />
// // // //             <SheetAction label="Pin" icon="pin-outline" />
// // // //             <SheetAction label="Edit" icon="pencil-outline" />
// // // //             <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
// // // //             <SheetAction
// // // //               label="Report"
// // // //               icon="flag-outline"
// // // //               danger
// // // //               onPress={handleReport}
// // // //             />
// // // //             <SheetAction
// // // //               label="Delete"
// // // //               icon="trash-outline"
// // // //               danger
// // // //               onPress={handleDelete}
// // // //             />
// // // //           </View>
// // // //         </View>
// // // //       </Modal>

// // // //       {/* Attachment sheet (+ button) */}
// // // //       <Modal
// // // //         visible={showAttachmentSheet}
// // // //         transparent
// // // //         animationType="fade"
// // // //         onRequestClose={() => setShowAttachmentSheet(false)}
// // // //       >
// // // //         <Pressable
// // // //           style={styles.backdrop}
// // // //           onPress={() => setShowAttachmentSheet(false)}
// // // //         >
// // // //           <View />
// // // //         </Pressable>

// // // //         <View style={styles.attachSheet}>
// // // //           <View style={styles.sheetHandle} />
// // // //           <AttachRow
// // // //             icon="image-outline"
// // // //             label="Photo / Image"
// // // //             onPress={pickImageFromLibrary}
// // // //           />
// // // //           <AttachRow
// // // //             icon="musical-notes-outline"
// // // //             label="Audio file"
// // // //             onPress={() => pickDocumentGeneric(true)}
// // // //           />
// // // //           <AttachRow
// // // //             icon="document-text-outline"
// // // //             label="Document"
// // // //             onPress={() => pickDocumentGeneric(false)}
// // // //           />
// // // //         </View>
// // // //       </Modal>
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // const SheetAction = ({ label, icon, onPress, danger }) => (
// // // //   <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
// // // //     <View style={styles.sheetRowLeft}>
// // // //       <Ionicons
// // // //         name={icon}
// // // //         size={20}
// // // //         color={danger ? "#F97373" : "#E5E7EB"}
// // // //         style={{ marginRight: 14 }}
// // // //       />
// // // //       <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>
// // // //         {label}
// // // //       </Text>
// // // //     </View>
// // // //   </TouchableOpacity>
// // // // );

// // // // const AttachRow = ({ icon, label, onPress }) => (
// // // //   <TouchableOpacity style={styles.attachRow} onPress={onPress}>
// // // //     <View style={styles.sheetRowLeft}>
// // // //       <Ionicons
// // // //         name={icon}
// // // //         size={22}
// // // //         color="#E5E7EB"
// // // //         style={{ marginRight: 14 }}
// // // //       />
// // // //       <Text style={styles.sheetText}>{label}</Text>
// // // //     </View>
// // // //   </TouchableOpacity>
// // // // );

// // // // const styles = StyleSheet.create({
// // // //   safe: { flex: 1, backgroundColor: "#020617" },
// // // //   container: { flex: 1, backgroundColor: "#0B1220" },

// // // //   header: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 10,
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   headerLeft: { flexDirection: "row", alignItems: "center" },
// // // //   headerTitle: {
// // // //     color: "#E5E7EB",
// // // //     fontSize: 18,
// // // //     fontWeight: "600",
// // // //     marginLeft: 4,
// // // //   },
// // // //   headerRight: { flexDirection: "row", alignItems: "center" },

// // // //   listContent: { paddingHorizontal: 12, paddingVertical: 8 },
// // // //   messageRow: { marginVertical: 4, flexDirection: "row" },
// // // //   messageRowLeft: { justifyContent: "flex-start" },
// // // //   messageRowRight: { justifyContent: "flex-end" },
// // // //   bubble: {
// // // //     maxWidth: "75%",
// // // //     paddingHorizontal: 12,
// // // //     paddingVertical: 8,
// // // //     borderRadius: 18,
// // // //   },
// // // //   bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
// // // //   bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
// // // //   bubbleText: { color: "#E5E7EB", fontSize: 14 },

// // // //   imageMessage: {
// // // //     width: 180,
// // // //     height: 200,
// // // //     borderRadius: 14,
// // // //     resizeMode: "cover",
// // // //   },

// // // //   fileRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   fileText: {
// // // //     marginLeft: 6,
// // // //     color: "#E5E7EB",
// // // //     fontSize: 13,
// // // //     flexShrink: 1,
// // // //   },

// // // //   reactionBadge: {
// // // //     alignSelf: "flex-end",
// // // //     marginTop: 4,
// // // //     paddingHorizontal: 6,
// // // //     paddingVertical: 2,
// // // //     borderRadius: 12,
// // // //     backgroundColor: "rgba(15,23,42,0.9)",
// // // //   },
// // // //   reactionText: { fontSize: 12, color: "#F9FAFB" },

// // // //   replyPreview: {
// // // //     marginBottom: 4,
// // // //     padding: 6,
// // // //     borderLeftWidth: 2,
// // // //     borderLeftColor: "rgba(15,23,42,0.6)",
// // // //     backgroundColor: "rgba(15,23,42,0.3)",
// // // //     borderRadius: 10,
// // // //   },
// // // //   replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
// // // //   replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

// // // //   replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
// // // //   replyBar: {
// // // //     backgroundColor: "#020617",
// // // //     borderRadius: 16,
// // // //     paddingHorizontal: 12,
// // // //     paddingVertical: 8,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
// // // //   replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

// // // //   emojiPicker: {
// // // //     maxHeight: 220,
// // // //     backgroundColor: "#020617",
// // // //     borderTopLeftRadius: 18,
// // // //     borderTopRightRadius: 18,
// // // //     borderTopWidth: 1,
// // // //     borderColor: "#1F2937",
// // // //     paddingTop: 6,
// // // //   },
// // // //   emojiItem: {
// // // //     width: "12.5%",
// // // //     paddingVertical: 8,
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },

// // // //   inputRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 12,
// // // //     paddingTop: 6,
// // // //     paddingBottom: 8,
// // // //     backgroundColor: "#020617",
// // // //   },
// // // //   textInput: {
// // // //     flex: 1,
// // // //     borderRadius: 999,
// // // //     backgroundColor: "#020617",
// // // //     borderWidth: 1,
// // // //     borderColor: "#1F2937",
// // // //     paddingHorizontal: 12,
// // // //     paddingVertical: 8,
// // // //     color: "#F9FAFB",
// // // //     marginHorizontal: 6,
// // // //     fontSize: 14,
// // // //   },
// // // //   iconBtn: {
// // // //     width: 32,
// // // //     height: 32,
// // // //     borderRadius: 16,
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },

// // // //   backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },

// // // //   sheet: {
// // // //     position: "absolute",
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     backgroundColor: "#020617",
// // // //     borderTopLeftRadius: 24,
// // // //     borderTopRightRadius: 24,
// // // //     paddingHorizontal: 16,
// // // //     paddingTop: 8,
// // // //     paddingBottom: 24,
// // // //   },
// // // //   attachSheet: {
// // // //     position: "absolute",
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     backgroundColor: "#020617",
// // // //     borderTopLeftRadius: 24,
// // // //     borderTopRightRadius: 24,
// // // //     paddingHorizontal: 16,
// // // //     paddingTop: 8,
// // // //     paddingBottom: 24,
// // // //   },
// // // //   sheetHandle: {
// // // //     width: 40,
// // // //     height: 4,
// // // //     borderRadius: 2,
// // // //     backgroundColor: "#4B5563",
// // // //     alignSelf: "center",
// // // //     marginBottom: 10,
// // // //   },
// // // //   previewBubble: {
// // // //     backgroundColor: "#1E293B",
// // // //     borderRadius: 16,
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 12,
// // // //     marginBottom: 14,
// // // //   },
// // // //   reactionRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     marginBottom: 12,
// // // //   },
// // // //   reactionCircle: {
// // // //     width: 40,
// // // //     height: 40,
// // // //     borderRadius: 20,
// // // //     marginHorizontal: 4,
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     backgroundColor: "#020617",
// // // //     borderWidth: 1,
// // // //     borderColor: "#1E293B",
// // // //   },
// // // //   reactionEmoji: { fontSize: 22 },

// // // //   sheetRow: { paddingVertical: 9 },
// // // //   attachRow: { paddingVertical: 12 },
// // // //   sheetRowLeft: { flexDirection: "row", alignItems: "center" },
// // // //   sheetText: { color: "#E5E7EB", fontSize: 15 },
// // // // });
// // // // ChatScreen.js
// // // import React, { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   FlatList,
// // //   TouchableOpacity,
// // //   TextInput,
// // //   Modal,
// // //   Pressable,
// // //   KeyboardAvoidingView,
// // //   Platform,
// // //   Image,
// // // } from "react-native";
// // // import { Ionicons } from "@expo/vector-icons";
// // // import * as ImagePicker from "expo-image-picker";
// // // import * as DocumentPicker from "expo-document-picker";

// // // const INITIAL_MESSAGES = [
// // //   { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
// // //   { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
// // //   { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
// // //   { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
// // //   { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
// // // ];

// // // const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

// // // // मोठा emoji list (scrollable)
// // // const EMOJI_LIST = [
// // //   "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","🙂","🤗",
// // //   "🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜",
// // //   "😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟","😤","😢","😭","😦","😧",
// // //   "😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮",
// // //   "🤧","😇","🤠","🤡","🤥","🤫","🤭","🧐","🤓","💀","☠️","👻","👽","🤖","💩",
// // //   "👍","👎","👌","✌️","🤞","🤟","🤘","🤙","👏","🙌","👐","🤲","🙏","💪","👋","🤚","✋","🖐️","🖖",
// // //   "👊","🤛","🤜","🤝","💅","👂","👃","👀","👁️","👅","👄",
// // //   "💋","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝",
// // //   "🔥","💯","⚡","⭐","🌟","✨","⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱",
// // //   "🎧","🎤","🎵","🎶","🎼","🎹","🥁","🎸","🎻",
// // //   "🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍒","🍑","🍍","🥭","🥥","🥝",
// // //   "🍔","🍟","🍕","🌭","🍿","🧂","🥓","🥚","🍳","🥞","🧇","🥯","🥨","🥐",
// // //   "☕","🍵","🧃","🥤","🧋","🍺","🍻","🥂","🍷",
// // //   "🚗","🚕","🚙","🚌","🚎","🏎️","🚓","✈️","🚀","🛸",
// // //   "⌚","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","💿","📷","🎥","📹","📺",
// // // ];

// // // export default function ChatScreen({ navigation }) {
// // //   const [messages, setMessages] = useState(
// // //     INITIAL_MESSAGES.map((m) => ({
// // //       ...m,
// // //       type: "text",
// // //       reaction: null,
// // //       replyToId: null,
// // //     }))
// // //   );
// // //   const [input, setInput] = useState("");
// // //   const [selectedMessage, setSelectedMessage] = useState(null);
// // //   const [replyTo, setReplyTo] = useState(null);
// // //   const [showActionsSheet, setShowActionsSheet] = useState(false);

// // //   const [showAttachmentSheet, setShowAttachmentSheet] = useState(false);
// // //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

// // //   // ---------- message actions ----------
// // //   const onLongPressMessage = (msg) => {
// // //     setSelectedMessage(msg);
// // //     setShowActionsSheet(true);
// // //   };

// // //   const handleSend = () => {
// // //     if (!input.trim()) return;
// // //     const msg = {
// // //       id: Date.now().toString(),
// // //       author: "You",
// // //       text: input.trim(),
// // //       isMe: true,
// // //       type: "text",
// // //       reaction: null,
// // //       replyToId: replyTo?.id || null,
// // //     };
// // //     setMessages((prev) => [...prev, msg]);
// // //     setInput("");
// // //     setReplyTo(null);
// // //   };

// // //   const setReactionForSelected = (emoji) => {
// // //     if (!selectedMessage || emoji === "➕") return;
// // //     setMessages((prev) =>
// // //       prev.map((m) =>
// // //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// // //       )
// // //     );
// // //     setShowActionsSheet(false);
// // //   };

// // //   const handleDelete = () => {
// // //     if (!selectedMessage) return;
// // //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// // //     setShowActionsSheet(false);
// // //   };

// // //   const handleCopy = () => {
// // //     console.log("COPY:", selectedMessage?.text);
// // //     setShowActionsSheet(false);
// // //   };

// // //   const handleReply = () => {
// // //     setReplyTo(selectedMessage);
// // //     setShowActionsSheet(false);
// // //   };

// // //   const handleForward = () => {
// // //     if (!selectedMessage) return;
// // //     setShowActionsSheet(false);
// // //     navigation.navigate("Forward", { message: selectedMessage });
// // //   };

// // //   const handleReport = () => {
// // //     if (!selectedMessage) return;
// // //     setShowActionsSheet(false);
// // //     navigation.navigate("Report", { message: selectedMessage });
// // //   };

// // //   // ---------- attachments (no manual permission) ----------
// // //   const addAttachmentMessage = ({ type, uri, name }) => {
// // //     const msg = {
// // //       id: Date.now().toString(),
// // //       author: "You",
// // //       text:
// // //         type === "document"
// // //           ? name || "Document"
// // //           : type === "audio"
// // //           ? name || "Audio"
// // //           : "",
// // //       isMe: true,
// // //       type, // "image" | "document" | "audio"
// // //       uri,
// // //       fileName: name || null,
// // //       reaction: null,
// // //       replyToId: replyTo?.id || null,
// // //     };
// // //     setMessages((prev) => [...prev, msg]);
// // //     setReplyTo(null);
// // //   };

// // //   const pickImageFromLibrary = async () => {
// // //     setShowAttachmentSheet(false);

// // //     // थेट gallery उघडतो; system automatically permission विचारेल (first time)
// // //     const result = await ImagePicker.launchImageLibraryAsync({
// // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // //       quality: 0.7,
// // //     });

// // //     if (!result.canceled && result.assets && result.assets.length > 0) {
// // //       const asset = result.assets[0];
// // //       addAttachmentMessage({ type: "image", uri: asset.uri });
// // //     }
// // //   };

// // //   const pickDocumentGeneric = async (forAudio = false) => {
// // //     setShowAttachmentSheet(false);

// // //     try {
// // //       const result = await DocumentPicker.getDocumentAsync({
// // //         type: forAudio ? "audio/*" : "*/*",
// // //         multiple: false,
// // //         copyToCacheDirectory: true,
// // //       });

// // //       if (result.canceled) return;

// // //       let asset = null;
// // //       if ("assets" in result && result.assets?.length) {
// // //         asset = result.assets[0];
// // //       } else if (result.type === "success") {
// // //         asset = result;
// // //       }

// // //       if (!asset) return;

// // //       addAttachmentMessage({
// // //         type: forAudio ? "audio" : "document",
// // //         uri: asset.uri,
// // //         name: asset.name || (forAudio ? "Audio file" : "Document"),
// // //       });
// // //     } catch (e) {
// // //       console.log("Document pick error", e);
// // //     }
// // //   };

// // //   // ---------- render message ----------
// // //   const renderMessage = ({ item }) => {
// // //     const isMe = item.isMe;
// // //     const container = [
// // //       styles.messageRow,
// // //       isMe ? styles.messageRowRight : styles.messageRowLeft,
// // //     ];
// // //     const bubble = [
// // //       styles.bubble,
// // //       isMe ? styles.bubbleMe : styles.bubbleOther,
// // //     ];

// // //     const replyMsg = item.replyToId
// // //       ? messages.find((m) => m.id === item.replyToId)
// // //       : null;

// // //     const renderContent = () => {
// // //       if (item.type === "image") {
// // //         return (
// // //           <Image source={{ uri: item.uri }} style={styles.imageMessage} />
// // //         );
// // //       }
// // //       if (item.type === "document") {
// // //         return (
// // //           <View style={styles.fileRow}>
// // //             <Ionicons name="document-text-outline" size={20} color="#E5E7EB" />
// // //             <Text style={styles.fileText} numberOfLines={1}>
// // //               {item.fileName || item.text || "Document"}
// // //             </Text>
// // //           </View>
// // //         );
// // //       }
// // //       if (item.type === "audio") {
// // //         return (
// // //           <View style={styles.fileRow}>
// // //             <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
// // //             <Text style={styles.fileText} numberOfLines={1}>
// // //               {item.fileName || "Audio message"}
// // //             </Text>
// // //           </View>
// // //         );
// // //       }
// // //       return <Text style={styles.bubbleText}>{item.text}</Text>;
// // //     };

// // //     return (
// // //       <TouchableOpacity
// // //         style={container}
// // //         activeOpacity={0.8}
// // //         onLongPress={() => onLongPressMessage(item)}
// // //       >
// // //         <View style={bubble}>
// // //           {replyMsg && (
// // //             <View style={styles.replyPreview}>
// // //               <Text style={styles.replyPreviewName}>
// // //                 Replying to {replyMsg.author}
// // //               </Text>
// // //               <Text numberOfLines={1} style={styles.replyPreviewText}>
// // //                 {replyMsg.text}
// // //               </Text>
// // //             </View>
// // //           )}

// // //           {renderContent()}

// // //           {item.reaction && (
// // //             <View style={styles.reactionBadge}>
// // //               <Text style={styles.reactionText}>{item.reaction}</Text>
// // //             </View>
// // //           )}
// // //         </View>
// // //       </TouchableOpacity>
// // //     );
// // //   };

// // //   // ---------- UI ----------
// // //   return (
// // //     <SafeAreaView style={styles.safe}>
// // //       <StatusBar barStyle="light-content" />
// // //       <View style={styles.container}>
// // //         {/* Header with calls */}
// // //         <View style={styles.header}>
// // //           <View style={styles.headerLeft}>
// // //             <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
// // //             <Text style={styles.headerTitle}>Perfecto</Text>
// // //           </View>
// // //           <View style={styles.headerRight}>
// // //             <TouchableOpacity
// // //               onPress={() =>
// // //                 navigation.navigate("VoiceCall", { contact: { name: "Perfecto" } })
// // //               }
// // //             >
// // //               <Ionicons name="call-outline" size={22} color="#E5E7EB" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity
// // //               style={{ marginLeft: 14 }}
// // //               onPress={() =>
// // //                 navigation.navigate("VideoCall", { contact: { name: "Perfecto" } })
// // //               }
// // //             >
// // //               <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Messages */}
// // //         <FlatList
// // //           data={messages}
// // //           keyExtractor={(item) => item.id}
// // //           renderItem={renderMessage}
// // //           contentContainerStyle={styles.listContent}
// // //         />

// // //         {/* Reply bar */}
// // //         {replyTo && (
// // //           <View style={styles.replyBarWrapper}>
// // //             <View style={styles.replyBar}>
// // //               <View style={{ flex: 1 }}>
// // //                 <Text style={styles.replyBarTitle}>
// // //                   Replying to {replyTo.author}
// // //                 </Text>
// // //                 <Text numberOfLines={1} style={styles.replyBarText}>
// // //                   {replyTo.text}
// // //                 </Text>
// // //               </View>
// // //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// // //                 <Ionicons name="close" size={18} color="#E5E7EB" />
// // //               </TouchableOpacity>
// // //             </View>
// // //           </View>
// // //         )}

// // //         {/* Emoji picker */}
// // //         {showEmojiPicker && (
// // //           <View style={styles.emojiPicker}>
// // //             <FlatList
// // //               data={EMOJI_LIST}
// // //               keyExtractor={(_, index) => index.toString()}
// // //               numColumns={8}
// // //               contentContainerStyle={{ paddingBottom: 4 }}
// // //               renderItem={({ item }) => (
// // //                 <TouchableOpacity
// // //                   style={styles.emojiItem}
// // //                   onPress={() => setInput((prev) => prev + item)}
// // //                 >
// // //                   <Text style={{ fontSize: 24 }}>{item}</Text>
// // //                 </TouchableOpacity>
// // //               )}
// // //             />
// // //           </View>
// // //         )}

// // //         {/* Input */}
// // //         <KeyboardAvoidingView
// // //           behavior={Platform.OS === "ios" ? "padding" : undefined}
// // //         >
// // //           <View style={styles.inputRow}>
// // //             <TouchableOpacity
// // //               style={styles.iconBtn}
// // //               onPress={() => {
// // //                 setShowEmojiPicker(false);
// // //                 setShowAttachmentSheet(true);
// // //               }}
// // //             >
// // //               <Ionicons name="add" size={24} color="#E5E7EB" />
// // //             </TouchableOpacity>
// // //             <TextInput
// // //               style={styles.textInput}
// // //               placeholder="Okay."
// // //               placeholderTextColor="#9CA3AF"
// // //               value={input}
// // //               onChangeText={setInput}
// // //               onFocus={() => setShowEmojiPicker(false)}
// // //             />
// // //             <TouchableOpacity
// // //               style={styles.iconBtn}
// // //               onPress={() => setShowEmojiPicker((v) => !v)}
// // //             >
// // //               <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity style={styles.iconBtn} onPress={handleSend}>
// // //               <Ionicons name="send" size={22} color="#E5E7EB" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         </KeyboardAvoidingView>
// // //       </View>

// // //       {/* Reactions / actions sheet */}
// // //       <Modal
// // //         visible={showActionsSheet}
// // //         transparent
// // //         animationType="fade"
// // //         onRequestClose={() => setShowActionsSheet(false)}
// // //       >
// // //         <Pressable
// // //           style={styles.backdrop}
// // //           onPress={() => setShowActionsSheet(false)}
// // //         >
// // //           <View />
// // //         </Pressable>

// // //         <View style={styles.sheet}>
// // //           <View style={styles.sheetHandle} />
// // //           {selectedMessage && (
// // //             <View style={styles.previewBubble}>
// // //               <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
// // //             </View>
// // //           )}

// // //           <View style={styles.reactionRow}>
// // //             {REACTION_EMOJIS.map((e) => (
// // //               <TouchableOpacity
// // //                 key={e}
// // //                 style={styles.reactionCircle}
// // //                 onPress={() => setReactionForSelected(e)}
// // //               >
// // //                 <Text style={styles.reactionEmoji}>{e}</Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>

// // //           <View style={{ marginTop: 4 }}>
// // //             <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
// // //             <SheetAction
// // //               label="Forward"
// // //               icon="arrow-redo-outline"
// // //               onPress={handleForward}
// // //             />
// // //             <SheetAction label="Pin" icon="pin-outline" />
// // //             <SheetAction label="Edit" icon="pencil-outline" />
// // //             <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
// // //             <SheetAction
// // //               label="Report"
// // //               icon="flag-outline"
// // //               danger
// // //               onPress={handleReport}
// // //             />
// // //             <SheetAction
// // //               label="Delete"
// // //               icon="trash-outline"
// // //               danger
// // //               onPress={handleDelete}
// // //             />
// // //           </View>
// // //         </View>
// // //       </Modal>

// // //       {/* Attachment sheet (+) */}
// // //       <Modal
// // //         visible={showAttachmentSheet}
// // //         transparent
// // //         animationType="fade"
// // //         onRequestClose={() => setShowAttachmentSheet(false)}
// // //       >
// // //         <Pressable
// // //           style={styles.backdrop}
// // //           onPress={() => setShowAttachmentSheet(false)}
// // //         >
// // //           <View />
// // //         </Pressable>

// // //         <View style={styles.attachSheet}>
// // //           <View style={styles.sheetHandle} />
// // //           <AttachRow
// // //             icon="image-outline"
// // //             label="Photo / Image"
// // //             onPress={pickImageFromLibrary}
// // //           />
// // //           <AttachRow
// // //             icon="musical-notes-outline"
// // //             label="Audio file"
// // //             onPress={() => pickDocumentGeneric(true)}
// // //           />
// // //           <AttachRow
// // //             icon="document-text-outline"
// // //             label="Document"
// // //             onPress={() => pickDocumentGeneric(false)}
// // //           />
// // //         </View>
// // //       </Modal>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const SheetAction = ({ label, icon, onPress, danger }) => (
// // //   <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
// // //     <View style={styles.sheetRowLeft}>
// // //       <Ionicons
// // //         name={icon}
// // //         size={20}
// // //         color={danger ? "#F97373" : "#E5E7EB"}
// // //         style={{ marginRight: 14 }}
// // //       />
// // //       <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>
// // //         {label}
// // //       </Text>
// // //     </View>
// // //   </TouchableOpacity>
// // // );

// // // const AttachRow = ({ icon, label, onPress }) => (
// // //   <TouchableOpacity style={styles.attachRow} onPress={onPress}>
// // //     <View style={styles.sheetRowLeft}>
// // //       <Ionicons
// // //         name={icon}
// // //         size={22}
// // //         color="#E5E7EB"
// // //         style={{ marginRight: 14 }}
// // //       />
// // //       <Text style={styles.sheetText}>{label}</Text>
// // //     </View>
// // //   </TouchableOpacity>
// // // );

// // // const styles = StyleSheet.create({
// // //   safe: { flex: 1, backgroundColor: "#020617" },
// // //   container: { flex: 1, backgroundColor: "#0B1220" },

// // //   header: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 10,
// // //     justifyContent: "space-between",
// // //   },
// // //   headerLeft: { flexDirection: "row", alignItems: "center" },
// // //   headerTitle: {
// // //     color: "#E5E7EB",
// // //     fontSize: 18,
// // //     fontWeight: "600",
// // //     marginLeft: 4,
// // //   },
// // //   headerRight: { flexDirection: "row", alignItems: "center" },

// // //   listContent: { paddingHorizontal: 12, paddingVertical: 8 },
// // //   messageRow: { marginVertical: 4, flexDirection: "row" },
// // //   messageRowLeft: { justifyContent: "flex-start" },
// // //   messageRowRight: { justifyContent: "flex-end" },
// // //   bubble: {
// // //     maxWidth: "75%",
// // //     paddingHorizontal: 12,
// // //     paddingVertical: 8,
// // //     borderRadius: 18,
// // //   },
// // //   bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
// // //   bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
// // //   bubbleText: { color: "#E5E7EB", fontSize: 14 },

// // //   imageMessage: {
// // //     width: 180,
// // //     height: 200,
// // //     borderRadius: 14,
// // //     resizeMode: "cover",
// // //   },
// // //   fileRow: { flexDirection: "row", alignItems: "center" },
// // //   fileText: {
// // //     marginLeft: 6,
// // //     color: "#E5E7EB",
// // //     fontSize: 13,
// // //     flexShrink: 1,
// // //   },

// // //   reactionBadge: {
// // //     alignSelf: "flex-end",
// // //     marginTop: 4,
// // //     paddingHorizontal: 6,
// // //     paddingVertical: 2,
// // //     borderRadius: 12,
// // //     backgroundColor: "rgba(15,23,42,0.9)",
// // //   },
// // //   reactionText: { fontSize: 12, color: "#F9FAFB" },

// // //   replyPreview: {
// // //     marginBottom: 4,
// // //     padding: 6,
// // //     borderLeftWidth: 2,
// // //     borderLeftColor: "rgba(15,23,42,0.6)",
// // //     backgroundColor: "rgba(15,23,42,0.3)",
// // //     borderRadius: 10,
// // //   },
// // //   replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
// // //   replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

// // //   replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
// // //   replyBar: {
// // //     backgroundColor: "#020617",
// // //     borderRadius: 16,
// // //     paddingHorizontal: 12,
// // //     paddingVertical: 8,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
// // //   replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

// // //   emojiPicker: {
// // //     maxHeight: 230,
// // //     backgroundColor: "#020617",
// // //     borderTopLeftRadius: 18,
// // //     borderTopRightRadius: 18,
// // //     borderTopWidth: 1,
// // //     borderColor: "#1F2937",
// // //     paddingTop: 6,
// // //   },
// // //   emojiItem: {
// // //     width: "12.5%",
// // //     paddingVertical: 6,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },

// // //   inputRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingHorizontal: 12,
// // //     paddingTop: 6,
// // //     paddingBottom: 8,
// // //     backgroundColor: "#020617",
// // //   },
// // //   textInput: {
// // //     flex: 1,
// // //     borderRadius: 999,
// // //     backgroundColor: "#020617",
// // //     borderWidth: 1,
// // //     borderColor: "#1F2937",
// // //     paddingHorizontal: 12,
// // //     paddingVertical: 8,
// // //     color: "#F9FAFB",
// // //     marginHorizontal: 6,
// // //     fontSize: 14,
// // //   },
// // //   iconBtn: {
// // //     width: 32,
// // //     height: 32,
// // //     borderRadius: 16,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },

// // //   backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },

// // //   sheet: {
// // //     position: "absolute",
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     backgroundColor: "#020617",
// // //     borderTopLeftRadius: 24,
// // //     borderTopRightRadius: 24,
// // //     paddingHorizontal: 16,
// // //     paddingTop: 8,
// // //     paddingBottom: 24,
// // //   },
// // //   attachSheet: {
// // //     position: "absolute",
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     backgroundColor: "#020617",
// // //     borderTopLeftRadius: 24,
// // //     borderTopRightRadius: 24,
// // //     paddingHorizontal: 16,
// // //     paddingTop: 8,
// // //     paddingBottom: 24,
// // //   },
// // //   sheetHandle: {
// // //     width: 40,
// // //     height: 4,
// // //     borderRadius: 2,
// // //     backgroundColor: "#4B5563",
// // //     alignSelf: "center",
// // //     marginBottom: 10,
// // //   },
// // //   previewBubble: {
// // //     backgroundColor: "#1E293B",
// // //     borderRadius: 16,
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 12,
// // //     marginBottom: 14,
// // //   },
// // //   reactionRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     marginBottom: 12,
// // //   },
// // //   reactionCircle: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     marginHorizontal: 4,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     backgroundColor: "#020617",
// // //     borderWidth: 1,
// // //     borderColor: "#1E293B",
// // //   },
// // //   reactionEmoji: { fontSize: 22 },

// // //   sheetRow: { paddingVertical: 9 },
// // //   attachRow: { paddingVertical: 12 },
// // //   sheetRowLeft: { flexDirection: "row", alignItems: "center" },
// // //   sheetText: { color: "#E5E7EB", fontSize: 15 },
// // // });
// // // src/screens/ChatScreen.js
// // import React, { useState, useEffect } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   FlatList,
// //   TouchableOpacity,
// //   TextInput,
// //   Modal,
// //   Pressable,
// //   KeyboardAvoidingView,
// //   Platform,
// //   Image,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import * as ImagePicker from "expo-image-picker";
// // import * as DocumentPicker from "expo-document-picker";

// // const INITIAL_MESSAGES = [
// //   { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
// //   { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
// //   { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
// //   { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
// //   { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
// // ];

// // const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

// // const EMOJI_LIST = [
// //   "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","🙂","🤗",
// //   "🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜",
// //   "😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟","😤","😢","😭","😦","😧",
// //   "😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮",
// //   "🤧","😇","🤠","🤡","🤥","🤫","🤭","🧐","🤓","💀","☠️","👻","👽","🤖","💩",
// //   "👍","👎","👌","✌️","🤞","🤟","🤘","🤙","👏","🙌","👐","🤲","🙏","💪","👋","🤚","✋","🖐️","🖖",
// //   "👊","🤛","🤜","🤝","💅","👂","👃","👀","👁️","👅","👄",
// //   "💋","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝",
// //   "🔥","💯","⚡","⭐","🌟","✨","⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱",
// //   "🎧","🎤","🎵","🎶","🎼","🎹","🥁","🎸","🎻",
// //   "🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍒","🍑","🍍","🥭","🥥","🥝",
// //   "🍔","🍟","🍕","🌭","🍿","🧂","🥓","🥚","🍳","🥞","🧇","🥯","🥨","🥐",
// //   "☕","🍵","🧃","🥤","🧋","🍺","🍻","🥂","🍷",
// //   "🚗","🚕","🚙","🚌","🚎","🏎️","🚓","✈️","🚀","🛸",
// //   "⌚","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","💿","📷","🎥","📹","📺",
// // ];

// // export default function ChatScreen({ navigation }) {
// //   const [messages, setMessages] = useState(
// //     INITIAL_MESSAGES.map((m) => ({
// //       ...m,
// //       type: "text",
// //       reaction: null,
// //       replyToId: null,
// //     }))
// //   );
// //   const [input, setInput] = useState("");
// //   const [selectedMessage, setSelectedMessage] = useState(null);
// //   const [replyTo, setReplyTo] = useState(null);
// //   const [showActionsSheet, setShowActionsSheet] = useState(false);
// //   const [showAttachmentSheet, setShowAttachmentSheet] = useState(false);
// //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

// //   // 👉 typing indicator state (dusra user typing)
// //   const [isTyping, setIsTyping] = useState(false);

// //   // user input बदलला की थोडा वेळ "typing…" दाखव
// //   useEffect(() => {
// //     if (!input) {
// //       setIsTyping(false);
// //       return;
// //     }
// //     setIsTyping(true);
// //     const t = setTimeout(() => {
// //       setIsTyping(false);
// //     }, 2000);
// //     return () => clearTimeout(t);
// //   }, [input]);

// //   // ---------- message actions ----------
// //   const onLongPressMessage = (msg) => {
// //     setSelectedMessage(msg);
// //     setShowActionsSheet(true);
// //   };

// //   const handleSend = () => {
// //     if (!input.trim()) return;
// //     const msg = {
// //       id: Date.now().toString(),
// //       author: "You",
// //       text: input.trim(),
// //       isMe: true,
// //       type: "text",
// //       reaction: null,
// //       replyToId: replyTo?.id || null,
// //     };
// //     setMessages((prev) => [...prev, msg]);
// //     setInput("");
// //     setReplyTo(null);
// //   };

// //   const setReactionForSelected = (emoji) => {
// //     if (!selectedMessage || emoji === "➕") return;
// //     setMessages((prev) =>
// //       prev.map((m) =>
// //         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
// //       )
// //     );
// //     setShowActionsSheet(false);
// //   };

// //   const handleDelete = () => {
// //     if (!selectedMessage) return;
// //     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
// //     setShowActionsSheet(false);
// //   };

// //   const handleCopy = () => {
// //     console.log("COPY:", selectedMessage?.text);
// //     setShowActionsSheet(false);
// //   };

// //   const handleReply = () => {
// //     setReplyTo(selectedMessage);
// //     setShowActionsSheet(false);
// //   };

// //   const handleForward = () => {
// //     if (!selectedMessage) return;
// //     setShowActionsSheet(false);
// //     navigation.navigate("Forward", { message: selectedMessage });
// //   };

// //   const handleReport = () => {
// //     if (!selectedMessage) return;
// //     setShowActionsSheet(false);
// //     navigation.navigate("Report", { message: selectedMessage });
// //   };

// //   // ---------- attachments ----------
// //   const addAttachmentMessage = ({ type, uri, name }) => {
// //     const msg = {
// //       id: Date.now().toString(),
// //       author: "You",
// //       text:
// //         type === "document"
// //           ? name || "Document"
// //           : type === "audio"
// //           ? name || "Audio"
// //           : "",
// //       isMe: true,
// //       type,
// //       uri,
// //       fileName: name || null,
// //       reaction: null,
// //       replyToId: replyTo?.id || null,
// //     };
// //     setMessages((prev) => [...prev, msg]);
// //     setReplyTo(null);
// //   };

// //   const pickImageFromLibrary = async () => {
// //     setShowAttachmentSheet(false);
// //     const result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       quality: 0.7,
// //     });
// //     if (!result.canceled && result.assets && result.assets.length > 0) {
// //       const asset = result.assets[0];
// //       addAttachmentMessage({ type: "image", uri: asset.uri });
// //     }
// //   };

// //   const pickDocumentGeneric = async (forAudio = false) => {
// //     setShowAttachmentSheet(false);
// //     try {
// //       const result = await DocumentPicker.getDocumentAsync({
// //         type: forAudio ? "audio/*" : "*/*",
// //         multiple: false,
// //         copyToCacheDirectory: true,
// //       });
// //       if (result.canceled) return;

// //       let asset = null;
// //       if ("assets" in result && result.assets?.length) {
// //         asset = result.assets[0];
// //       } else if (result.type === "success") {
// //         asset = result;
// //       }
// //       if (!asset) return;

// //       addAttachmentMessage({
// //         type: forAudio ? "audio" : "document",
// //         uri: asset.uri,
// //         name: asset.name || (forAudio ? "Audio file" : "Document"),
// //       });
// //     } catch (e) {
// //       console.log("Document pick error", e);
// //     }
// //   };

// //   // ---------- render message ----------
// //   const renderMessage = ({ item }) => {
// //     const isMe = item.isMe;
// //     const container = [
// //       styles.messageRow,
// //       isMe ? styles.messageRowRight : styles.messageRowLeft,
// //     ];
// //     const bubble = [
// //       styles.bubble,
// //       isMe ? styles.bubbleMe : styles.bubbleOther,
// //     ];

// //     const replyMsg = item.replyToId
// //       ? messages.find((m) => m.id === item.replyToId)
// //       : null;

// //     const renderContent = () => {
// //       if (item.type === "image") {
// //         return (
// //           <Image source={{ uri: item.uri }} style={styles.imageMessage} />
// //         );
// //       }
// //       if (item.type === "document") {
// //         return (
// //           <View style={styles.fileRow}>
// //             <Ionicons name="document-text-outline" size={20} color="#E5E7EB" />
// //             <Text style={styles.fileText} numberOfLines={1}>
// //               {item.fileName || item.text || "Document"}
// //             </Text>
// //           </View>
// //         );
// //       }
// //       if (item.type === "audio") {
// //         return (
// //           <View style={styles.fileRow}>
// //             <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
// //             <Text style={styles.fileText} numberOfLines={1}>
// //               {item.fileName || "Audio message"}
// //             </Text>
// //           </View>
// //         );
// //       }
// //       return <Text style={styles.bubbleText}>{item.text}</Text>;
// //     };

// //     return (
// //       <TouchableOpacity
// //         style={container}
// //         activeOpacity={0.8}
// //         onLongPress={() => onLongPressMessage(item)}
// //       >
// //         <View style={bubble}>
// //           {replyMsg && (
// //             <View style={styles.replyPreview}>
// //               <Text style={styles.replyPreviewName}>
// //                 Replying to {replyMsg.author}
// //               </Text>
// //               <Text numberOfLines={1} style={styles.replyPreviewText}>
// //                 {replyMsg.text}
// //               </Text>
// //             </View>
// //           )}

// //           {renderContent()}

// //           {item.reaction && (
// //             <View style={styles.reactionBadge}>
// //               <Text style={styles.reactionText}>{item.reaction}</Text>
// //             </View>
// //           )}
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   // ---------- UI ----------
// //   return (
// //     <SafeAreaView style={styles.safe}>
// //       <StatusBar barStyle="light-content" />
// //       <View style={styles.container}>
// //         {/* Header with call buttons + typing indicator */}
// //         <View style={styles.header}>
// //           <View style={styles.headerLeft}>
// //             <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
// //             <View>
// //               <Text style={styles.headerTitle}>Perfecto</Text>
// //               <Text style={styles.headerSubtitle}>
// //                 {isTyping ? "typing…" : "Online"}
// //               </Text>
// //             </View>
// //           </View>
// //           <View style={styles.headerRight}>
// //             <TouchableOpacity
// //               onPress={() =>
// //                 navigation.navigate("VoiceCall", {
// //                   contact: { name: "Perfecto" },
// //                 })
// //               }
// //             >
// //               <Ionicons name="call-outline" size={22} color="#E5E7EB" />
// //             </TouchableOpacity>
// //             <TouchableOpacity
// //               style={{ marginLeft: 14 }}
// //               onPress={() =>
// //                 navigation.navigate("VideoCall", {
// //                   contact: { name: "Perfecto" },
// //                 })
// //               }
// //             >
// //               <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Messages */}
// //         <FlatList
// //           data={messages}
// //           keyExtractor={(item) => item.id}
// //           renderItem={renderMessage}
// //           contentContainerStyle={styles.listContent}
// //         />

// //         {/* Reply bar */}
// //         {replyTo && (
// //           <View style={styles.replyBarWrapper}>
// //             <View style={styles.replyBar}>
// //               <View style={{ flex: 1 }}>
// //                 <Text style={styles.replyBarTitle}>
// //                   Replying to {replyTo.author}
// //                 </Text>
// //                 <Text numberOfLines={1} style={styles.replyBarText}>
// //                   {replyTo.text}
// //                 </Text>
// //               </View>
// //               <TouchableOpacity onPress={() => setReplyTo(null)}>
// //                 <Ionicons name="close" size={18} color="#E5E7EB" />
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         )}

// //         {/* Emoji picker */}
// //         {showEmojiPicker && (
// //           <View style={styles.emojiPicker}>
// //             <FlatList
// //               data={EMOJI_LIST}
// //               keyExtractor={(_, index) => index.toString()}
// //               numColumns={8}
// //               contentContainerStyle={{ paddingBottom: 4 }}
// //               renderItem={({ item }) => (
// //                 <TouchableOpacity
// //                   style={styles.emojiItem}
// //                   onPress={() => setInput((prev) => prev + item)}
// //                 >
// //                   <Text style={{ fontSize: 24 }}>{item}</Text>
// //                 </TouchableOpacity>
// //               )}
// //             />
// //           </View>
// //         )}

// //         {/* Input */}
// //         <KeyboardAvoidingView
// //           behavior={Platform.OS === "ios" ? "padding" : undefined}
// //         >
// //           <View style={styles.inputRow}>
// //             <TouchableOpacity
// //               style={styles.iconBtn}
// //               onPress={() => {
// //                 setShowEmojiPicker(false);
// //                 setShowAttachmentSheet(true);
// //               }}
// //             >
// //               <Ionicons name="add" size={24} color="#E5E7EB" />
// //             </TouchableOpacity>
// //             <TextInput
// //               style={styles.textInput}
// //               placeholder="Okay."
// //               placeholderTextColor="#9CA3AF"
// //               value={input}
// //               onChangeText={setInput}
// //               onFocus={() => setShowEmojiPicker(false)}
// //             />
// //             <TouchableOpacity
// //               style={styles.iconBtn}
// //               onPress={() => setShowEmojiPicker((v) => !v)}
// //             >
// //               <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.iconBtn} onPress={handleSend}>
// //               <Ionicons name="send" size={22} color="#E5E7EB" />
// //             </TouchableOpacity>
// //           </View>
// //         </KeyboardAvoidingView>
// //       </View>

// //       {/* Reactions / actions sheet */}
// //       <Modal
// //         visible={showActionsSheet}
// //         transparent
// //         animationType="fade"
// //         onRequestClose={() => setShowActionsSheet(false)}
// //       >
// //         <Pressable
// //           style={styles.backdrop}
// //           onPress={() => setShowActionsSheet(false)}
// //         >
// //           <View />
// //         </Pressable>

// //         <View style={styles.sheet}>
// //           <View style={styles.sheetHandle} />
// //           {selectedMessage && (
// //             <View style={styles.previewBubble}>
// //               <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
// //             </View>
// //           )}

// //           <View style={styles.reactionRow}>
// //             {REACTION_EMOJIS.map((e) => (
// //               <TouchableOpacity
// //                 key={e}
// //                 style={styles.reactionCircle}
// //                 onPress={() => setReactionForSelected(e)}
// //               >
// //                 <Text style={styles.reactionEmoji}>{e}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>

// //           <View style={{ marginTop: 4 }}>
// //             <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
// //             <SheetAction
// //               label="Forward"
// //               icon="arrow-redo-outline"
// //               onPress={handleForward}
// //             />
// //             <SheetAction label="Pin" icon="pin-outline" />
// //             <SheetAction label="Edit" icon="pencil-outline" />
// //             <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
// //             <SheetAction
// //               label="Report"
// //               icon="flag-outline"
// //               danger
// //               onPress={handleReport}
// //             />
// //             <SheetAction
// //               label="Delete"
// //               icon="trash-outline"
// //               danger
// //               onPress={handleDelete}
// //             />
// //           </View>
// //         </View>
// //       </Modal>

// //       {/* Attachment sheet (+) */}
// //       <Modal
// //         visible={showAttachmentSheet}
// //         transparent
// //         animationType="fade"
// //         onRequestClose={() => setShowAttachmentSheet(false)}
// //       >
// //         <Pressable
// //           style={styles.backdrop}
// //           onPress={() => setShowAttachmentSheet(false)}
// //         >
// //           <View />
// //         </Pressable>

// //         <View style={styles.attachSheet}>
// //           <View style={styles.sheetHandle} />
// //           <AttachRow
// //             icon="image-outline"
// //             label="Photo / Image"
// //             onPress={pickImageFromLibrary}
// //           />
// //           <AttachRow
// //             icon="musical-notes-outline"
// //             label="Audio file"
// //             onPress={() => pickDocumentGeneric(true)}
// //           />
// //           <AttachRow
// //             icon="document-text-outline"
// //             label="Document"
// //             onPress={() => pickDocumentGeneric(false)}
// //           />
// //         </View>
// //       </Modal>
// //     </SafeAreaView>
// //   );
// // }

// // const SheetAction = ({ label, icon, onPress, danger }) => (
// //   <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
// //     <View style={styles.sheetRowLeft}>
// //       <Ionicons
// //         name={icon}
// //         size={20}
// //         color={danger ? "#F97373" : "#E5E7EB"}
// //         style={{ marginRight: 14 }}
// //       />
// //       <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>
// //         {label}
// //       </Text>
// //     </View>
// //   </TouchableOpacity>
// // );

// // const AttachRow = ({ icon, label, onPress }) => (
// //   <TouchableOpacity style={styles.attachRow} onPress={onPress}>
// //     <View style={styles.sheetRowLeft}>
// //       <Ionicons
// //         name={icon}
// //         size={22}
// //         color="#E5E7EB"
// //         style={{ marginRight: 14 }}
// //       />
// //       <Text style={styles.sheetText}>{label}</Text>
// //     </View>
// //   </TouchableOpacity>
// // );

// // const styles = StyleSheet.create({
// //   safe: { flex: 1, backgroundColor: "#020617" },
// //   container: { flex: 1, backgroundColor: "#0B1220" },

// //   header: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     justifyContent: "space-between",
// //   },
// //   headerLeft: { flexDirection: "row", alignItems: "center" },
// //   headerTitle: {
// //     color: "#E5E7EB",
// //     fontSize: 18,
// //     fontWeight: "600",
// //     marginLeft: 6,
// //   },
// //   headerSubtitle: {
// //     marginLeft: 6,
// //     fontSize: 11,
// //     color: "#9CA3AF",
// //   },
// //   headerRight: { flexDirection: "row", alignItems: "center" },

// //   listContent: { paddingHorizontal: 12, paddingVertical: 8 },
// //   messageRow: { marginVertical: 4, flexDirection: "row" },
// //   messageRowLeft: { justifyContent: "flex-start" },
// //   messageRowRight: { justifyContent: "flex-end" },
// //   bubble: {
// //     maxWidth: "75%",
// //     paddingHorizontal: 12,
// //     paddingVertical: 8,
// //     borderRadius: 18,
// //   },
// //   bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
// //   bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
// //   bubbleText: { color: "#E5E7EB", fontSize: 14 },

// //   imageMessage: {
// //     width: 180,
// //     height: 200,
// //     borderRadius: 14,
// //     resizeMode: "cover",
// //   },
// //   fileRow: { flexDirection: "row", alignItems: "center" },
// //   fileText: {
// //     marginLeft: 6,
// //     color: "#E5E7EB",
// //     fontSize: 13,
// //     flexShrink: 1,
// //   },

// //   reactionBadge: {
// //     alignSelf: "flex-end",
// //     marginTop: 4,
// //     paddingHorizontal: 6,
// //     paddingVertical: 2,
// //     borderRadius: 12,
// //     backgroundColor: "rgba(15,23,42,0.9)",
// //   },
// //   reactionText: { fontSize: 12, color: "#F9FAFB" },

// //   replyPreview: {
// //     marginBottom: 4,
// //     padding: 6,
// //     borderLeftWidth: 2,
// //     borderLeftColor: "rgba(15,23,42,0.6)",
// //     backgroundColor: "rgba(15,23,42,0.3)",
// //     borderRadius: 10,
// //   },
// //   replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
// //   replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

// //   replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
// //   replyBar: {
// //     backgroundColor: "#020617",
// //     borderRadius: 16,
// //     paddingHorizontal: 12,
// //     paddingVertical: 8,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
// //   replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

// //   emojiPicker: {
// //     maxHeight: 230,
// //     backgroundColor: "#020617",
// //     borderTopLeftRadius: 18,
// //     borderTopRightRadius: 18,
// //     borderTopWidth: 1,
// //     borderColor: "#1F2937",
// //     paddingTop: 6,
// //   },
// //   emojiItem: {
// //     width: "12.5%",
// //     paddingVertical: 6,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },

// //   inputRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 12,
// //     paddingTop: 6,
// //     paddingBottom: 8,
// //     backgroundColor: "#020617",
// //   },
// //   textInput: {
// //     flex: 1,
// //     borderRadius: 999,
// //     backgroundColor: "#020617",
// //     borderWidth: 1,
// //     borderColor: "#1F2937",
// //     paddingHorizontal: 12,
// //     paddingVertical: 8,
// //     color: "#F9FAFB",
// //     marginHorizontal: 6,
// //     fontSize: 14,
// //   },
// //   iconBtn: {
// //     width: 32,
// //     height: 32,
// //     borderRadius: 16,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },

// //   backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },

// //   sheet: {
// //     position: "absolute",
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: "#020617",
// //     borderTopLeftRadius: 24,
// //     borderTopRightRadius: 24,
// //     paddingHorizontal: 16,
// //     paddingTop: 8,
// //     paddingBottom: 24,
// //   },
// //   attachSheet: {
// //     position: "absolute",
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: "#020617",
// //     borderTopLeftRadius: 24,
// //     borderTopRightRadius: 24,
// //     paddingHorizontal: 16,
// //     paddingTop: 8,
// //     paddingBottom: 24,
// //   },
// //   sheetHandle: {
// //     width: 40,
// //     height: 4,
// //     borderRadius: 2,
// //     backgroundColor: "#4B5563",
// //     alignSelf: "center",
// //     marginBottom: 10,
// //   },
// //   previewBubble: {
// //     backgroundColor: "#1E293B",
// //     borderRadius: 16,
// //     paddingVertical: 10,
// //     paddingHorizontal: 12,
// //     marginBottom: 14,
// //   },
// //   reactionRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 12,
// //   },
// //   reactionCircle: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginHorizontal: 4,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "#020617",
// //     borderWidth: 1,
// //     borderColor: "#1E293B",
// //   },
// //   reactionEmoji: { fontSize: 22 },

// //   sheetRow: { paddingVertical: 9 },
// //   attachRow: { paddingVertical: 12 },
// //   sheetRowLeft: { flexDirection: "row", alignItems: "center" },
// //   sheetText: { color: "#E5E7EB", fontSize: 15 },
// // });
// // src/screens/ChatScreen.js
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
//   Modal,
//   Pressable,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
// import * as DocumentPicker from "expo-document-picker";

// const INITIAL_MESSAGES = [
//   { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
//   { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
//   { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
//   { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
//   { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
// ];

// const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

// const EMOJI_LIST = [
//   "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","🙂","🤗",
//   "🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜",
//   "😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟","😤","😢","😭","😦","😧",
//   "😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮",
//   "🤧","😇","🤠","🤡","🤥","🤫","🤭","🧐","🤓","💀","☠️","👻","👽","🤖","💩",
//   "👍","👎","👌","✌️","🤞","🤟","🤘","🤙","👏","🙌","👐","🤲","🙏","💪","👋","🤚","✋","🖐️","🖖",
//   "👊","🤛","🤜","🤝","💅","👂","👃","👀","👁️","👅","👄",
//   "💋","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝",
//   "🔥","💯","⚡","⭐","🌟","✨","⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱",
//   "🎧","🎤","🎵","🎶","🎼","🎹","🥁","🎸","🎻",
//   "🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍒","🍑","🍍","🥭","🥥","🥝",
//   "🍔","🍟","🍕","🌭","🍿","🧂","🥓","🥚","🍳","🥞","🧇","🥯","🥨","🥐",
//   "☕","🍵","🧃","🥤","🧋","🍺","🍻","🥂","🍷",
//   "🚗","🚕","🚙","🚌","🚎","🏎️","🚓","✈️","🚀","🛸",
//   "⌚","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","💿","📷","🎥","📹","📺",
// ];

// export default function ChatScreen({ navigation }) {
//   const [messages, setMessages] = useState(
//     INITIAL_MESSAGES.map((m) => ({
//       ...m,
//       type: "text",
//       reaction: null,
//       replyToId: null,
//     }))
//   );
//   const [input, setInput] = useState("");
//   const [selectedMessage, setSelectedMessage] = useState(null);
//   const [replyTo, setReplyTo] = useState(null);
//   const [showActionsSheet, setShowActionsSheet] = useState(false);
//   const [showAttachmentSheet, setShowAttachmentSheet] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   // 👇 दुसरा user typing आहे का
//   const [otherTyping, setOtherTyping] = useState(false);

//   const onLongPressMessage = (msg) => {
//     setSelectedMessage(msg);
//     setShowActionsSheet(true);
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;
//     const msg = {
//       id: Date.now().toString(),
//       author: "You",
//       text: input.trim(),
//       isMe: true,
//       type: "text",
//       reaction: null,
//       replyToId: replyTo?.id || null,
//     };
//     setMessages((prev) => [...prev, msg]);
//     setInput("");
//     setReplyTo(null);

//     // demo: तू message पाठवल्यावर Perfecto typing दाखवू
//     setOtherTyping(true);
//     setTimeout(() => setOtherTyping(false), 2000);
//   };

//   const setReactionForSelected = (emoji) => {
//     if (!selectedMessage || emoji === "➕") return;
//     setMessages((prev) =>
//       prev.map((m) =>
//         m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
//       )
//     );
//     setShowActionsSheet(false);
//   };

//   const handleDelete = () => {
//     if (!selectedMessage) return;
//     setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
//     setShowActionsSheet(false);
//   };

//   const handleCopy = () => {
//     console.log("COPY:", selectedMessage?.text);
//     setShowActionsSheet(false);
//   };

//   const handleReply = () => {
//     setReplyTo(selectedMessage);
//     setShowActionsSheet(false);
//   };

//   const handleForward = () => {
//     if (!selectedMessage) return;
//     setShowActionsSheet(false);
//     navigation.navigate("Forward", { message: selectedMessage });
//   };

//   const handleReport = () => {
//     if (!selectedMessage) return;
//     setShowActionsSheet(false);
//     navigation.navigate("Report", { message: selectedMessage });
//   };

//   // -------- attachments --------
//   const addAttachmentMessage = ({ type, uri, name }) => {
//     const msg = {
//       id: Date.now().toString(),
//       author: "You",
//       text:
//         type === "document"
//           ? name || "Document"
//           : type === "audio"
//           ? name || "Audio"
//           : "",
//       isMe: true,
//       type,
//       uri,
//       fileName: name || null,
//       reaction: null,
//       replyToId: replyTo?.id || null,
//     };
//     setMessages((prev) => [...prev, msg]);
//     setReplyTo(null);

//     setOtherTyping(true);
//     setTimeout(() => setOtherTyping(false), 2000);
//   };

//   const pickImageFromLibrary = async () => {
//     setShowAttachmentSheet(false);
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 0.7,
//     });
//     if (!result.canceled && result.assets && result.assets.length > 0) {
//       const asset = result.assets[0];
//       addAttachmentMessage({ type: "image", uri: asset.uri });
//     }
//   };

//   const pickDocumentGeneric = async (forAudio = false) => {
//     setShowAttachmentSheet(false);
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: forAudio ? "audio/*" : "*/*",
//         multiple: false,
//         copyToCacheDirectory: true,
//       });
//       if (result.canceled) return;

//       let asset = null;
//       if ("assets" in result && result.assets?.length) {
//         asset = result.assets[0];
//       } else if (result.type === "success") {
//         asset = result;
//       }
//       if (!asset) return;

//       addAttachmentMessage({
//         type: forAudio ? "audio" : "document",
//         uri: asset.uri,
//         name: asset.name || (forAudio ? "Audio file" : "Document"),
//       });
//     } catch (e) {
//       console.log("Document pick error", e);
//     }
//   };

//   // -------- render message --------
//   const renderMessage = ({ item }) => {
//     const isMe = item.isMe;
//     const container = [
//       styles.messageRow,
//       isMe ? styles.messageRowRight : styles.messageRowLeft,
//     ];
//     const bubble = [
//       styles.bubble,
//       isMe ? styles.bubbleMe : styles.bubbleOther,
//     ];

//     const replyMsg = item.replyToId
//       ? messages.find((m) => m.id === item.replyToId)
//       : null;

//     const renderContent = () => {
//       if (item.type === "image") {
//         return (
//           <Image source={{ uri: item.uri }} style={styles.imageMessage} />
//         );
//       }
//       if (item.type === "document") {
//         return (
//           <View style={styles.fileRow}>
//             <Ionicons name="document-text-outline" size={20} color="#E5E7EB" />
//             <Text style={styles.fileText} numberOfLines={1}>
//               {item.fileName || item.text || "Document"}
//             </Text>
//           </View>
//         );
//       }
//       if (item.type === "audio") {
//         return (
//           <View style={styles.fileRow}>
//             <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
//             <Text style={styles.fileText} numberOfLines={1}>
//               {item.fileName || "Audio message"}
//             </Text>
//           </View>
//         );
//       }
//       return <Text style={styles.bubbleText}>{item.text}</Text>;
//     };

//     return (
//       <TouchableOpacity
//         style={container}
//         activeOpacity={0.8}
//         onLongPress={() => onLongPressMessage(item)}
//       >
//         <View style={bubble}>
//           {replyMsg && (
//             <View style={styles.replyPreview}>
//               <Text style={styles.replyPreviewName}>
//                 Replying to {replyMsg.author}
//               </Text>
//               <Text numberOfLines={1} style={styles.replyPreviewText}>
//                 {replyMsg.text}
//               </Text>
//             </View>
//           )}

//           {renderContent()}

//           {item.reaction && (
//             <View style={styles.reactionBadge}>
//               <Text style={styles.reactionText}>{item.reaction}</Text>
//             </View>
//           )}
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   // -------- UI --------
//   return (
//     <SafeAreaView style={styles.safe}>
//       <StatusBar barStyle="light-content" />
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
//             <Text style={styles.headerTitle}>Perfecto</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate("VoiceCall", {
//                   contact: { name: "Perfecto" },
//                 })
//               }
//             >
//               <Ionicons name="call-outline" size={22} color="#E5E7EB" />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ marginLeft: 14 }}
//               onPress={() =>
//                 navigation.navigate("VideoCall", {
//                   contact: { name: "Perfecto" },
//                 })
//               }
//             >
//               <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages */}
//         <FlatList
//           data={messages}
//           keyExtractor={(item) => item.id}
//           renderItem={renderMessage}
//           contentContainerStyle={styles.listContent}
//         />

//         {/* 👉 typing indicator (Instagram सारखा) */}
//         {otherTyping && (
//           <View style={styles.typingRow}>
//             <View style={styles.typingBubble}>
//               <View style={styles.typingDot} />
//               <View style={styles.typingDot} />
//               <View style={styles.typingDot} />
//             </View>
//             <Text style={styles.typingText}>Perfecto is typing…</Text>
//           </View>
//         )}

//         {/* Reply bar */}
//         {replyTo && (
//           <View style={styles.replyBarWrapper}>
//             <View style={styles.replyBar}>
//               <View style={{ flex: 1 }}>
//                 <Text style={styles.replyBarTitle}>
//                   Replying to {replyTo.author}
//                 </Text>
//                 <Text numberOfLines={1} style={styles.replyBarText}>
//                   {replyTo.text}
//                 </Text>
//               </View>
//               <TouchableOpacity onPress={() => setReplyTo(null)}>
//                 <Ionicons name="close" size={18} color="#E5E7EB" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}

//         {/* Emoji picker */}
//         {showEmojiPicker && (
//           <View style={styles.emojiPicker}>
//             <FlatList
//               data={EMOJI_LIST}
//               keyExtractor={(_, index) => index.toString()}
//               numColumns={8}
//               contentContainerStyle={{ paddingBottom: 4 }}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.emojiItem}
//                   onPress={() => setInput((prev) => prev + item)}
//                 >
//                   <Text style={{ fontSize: 24 }}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         )}

//         {/* Input */}
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : undefined}
//         >
//           <View style={styles.inputRow}>
//             <TouchableOpacity
//               style={styles.iconBtn}
//               onPress={() => {
//                 setShowEmojiPicker(false);
//                 setShowAttachmentSheet(true);
//               }}
//             >
//               <Ionicons name="add" size={24} color="#E5E7EB" />
//             </TouchableOpacity>
//             <TextInput
//               style={styles.textInput}
//               placeholder="Okay."
//               placeholderTextColor="#9CA3AF"
//               value={input}
//               onChangeText={setInput}
//               onFocus={() => setShowEmojiPicker(false)}
//             />
//             <TouchableOpacity
//               style={styles.iconBtn}
//               onPress={() => setShowEmojiPicker((v) => !v)}
//             >
//               <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconBtn} onPress={handleSend}>
//               <Ionicons name="send" size={22} color="#E5E7EB" />
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>
//       </View>

//       {/* Reactions / actions sheet */}
//       <Modal
//         visible={showActionsSheet}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setShowActionsSheet(false)}
//       >
//         <Pressable
//           style={styles.backdrop}
//           onPress={() => setShowActionsSheet(false)}
//         >
//           <View />
//         </Pressable>

//         <View style={styles.sheet}>
//           <View style={styles.sheetHandle} />
//           {selectedMessage && (
//             <View style={styles.previewBubble}>
//               <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
//             </View>
//           )}

//           <View style={styles.reactionRow}>
//             {REACTION_EMOJIS.map((e) => (
//               <TouchableOpacity
//                 key={e}
//                 style={styles.reactionCircle}
//                 onPress={() => setReactionForSelected(e)}
//               >
//                 <Text style={styles.reactionEmoji}>{e}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <View style={{ marginTop: 4 }}>
//             <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
//             <SheetAction
//               label="Forward"
//               icon="arrow-redo-outline"
//               onPress={handleForward}
//             />
//             <SheetAction label="Pin" icon="pin-outline" />
//             <SheetAction label="Edit" icon="pencil-outline" />
//             <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
//             <SheetAction
//               label="Report"
//               icon="flag-outline"
//               danger
//               onPress={handleReport}
//             />
//             <SheetAction
//               label="Delete"
//               icon="trash-outline"
//               danger
//               onPress={handleDelete}
//             />
//           </View>
//         </View>
//       </Modal>

//       {/* Attachment sheet (+) */}
//       <Modal
//         visible={showAttachmentSheet}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setShowAttachmentSheet(false)}
//       >
//         <Pressable
//           style={styles.backdrop}
//           onPress={() => setShowAttachmentSheet(false)}
//         >
//           <View />
//         </Pressable>

//         <View style={styles.attachSheet}>
//           <View style={styles.sheetHandle} />
//           <AttachRow
//             icon="image-outline"
//             label="Photo / Image"
//             onPress={pickImageFromLibrary}
//           />
//           <AttachRow
//             icon="musical-notes-outline"
//             label="Audio file"
//             onPress={() => pickDocumentGeneric(true)}
//           />
//           <AttachRow
//             icon="document-text-outline"
//             label="Document"
//             onPress={() => pickDocumentGeneric(false)}
//           />
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// }

// const SheetAction = ({ label, icon, onPress, danger }) => (
//   <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
//     <View style={styles.sheetRowLeft}>
//       <Ionicons
//         name={icon}
//         size={20}
//         color={danger ? "#F97373" : "#E5E7EB"}
//         style={{ marginRight: 14 }}
//       />
//       <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>
//         {label}
//       </Text>
//     </View>
//   </TouchableOpacity>
// );

// const AttachRow = ({ icon, label, onPress }) => (
//   <TouchableOpacity style={styles.attachRow} onPress={onPress}>
//     <View style={styles.sheetRowLeft}>
//       <Ionicons
//         name={icon}
//         size={22}
//         color="#E5E7EB"
//         style={{ marginRight: 14 }}
//       />
//       <Text style={styles.sheetText}>{label}</Text>
//     </View>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: "#020617" },
//   container: { flex: 1, backgroundColor: "#0B1220" },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     justifyContent: "space-between",
//   },
//   headerLeft: { flexDirection: "row", alignItems: "center" },
//   headerTitle: {
//     color: "#E5E7EB",
//     fontSize: 18,
//     fontWeight: "600",
//     marginLeft: 6,
//   },
//   headerRight: { flexDirection: "row", alignItems: "center" },

//   listContent: { paddingHorizontal: 12, paddingVertical: 8 },
//   messageRow: { marginVertical: 4, flexDirection: "row" },
//   messageRowLeft: { justifyContent: "flex-start" },
//   messageRowRight: { justifyContent: "flex-end" },
//   bubble: {
//     maxWidth: "75%",
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 18,
//   },
//   bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
//   bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
//   bubbleText: { color: "#E5E7EB", fontSize: 14 },

//   imageMessage: {
//     width: 180,
//     height: 200,
//     borderRadius: 14,
//     resizeMode: "cover",
//   },
//   fileRow: { flexDirection: "row", alignItems: "center" },
//   fileText: {
//     marginLeft: 6,
//     color: "#E5E7EB",
//     fontSize: 13,
//     flexShrink: 1,
//   },

//   reactionBadge: {
//     alignSelf: "flex-end",
//     marginTop: 4,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 12,
//     backgroundColor: "rgba(15,23,42,0.9)",
//   },
//   reactionText: { fontSize: 12, color: "#F9FAFB" },

//   replyPreview: {
//     marginBottom: 4,
//     padding: 6,
//     borderLeftWidth: 2,
//     borderLeftColor: "rgba(15,23,42,0.6)",
//     backgroundColor: "rgba(15,23,42,0.3)",
//     borderRadius: 10,
//   },
//   replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
//   replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

//   // 👉 typing indicator styles
//   typingRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     marginBottom: 4,
//   },
//   typingBubble: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 16,
//     backgroundColor: "rgba(15,23,42,0.8)",
//     marginRight: 8,
//   },
//   typingDot: {
//     width: 5,
//     height: 5,
//     borderRadius: 2.5,
//     backgroundColor: "#E5E7EB",
//     marginHorizontal: 2,
//   },
//   typingText: {
//     fontSize: 12,
//     color: "#9CA3AF",
//   },

//   replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
//   replyBar: {
//     backgroundColor: "#020617",
//     borderRadius: 16,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
//   replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

//   emojiPicker: {
//     maxHeight: 230,
//     backgroundColor: "#020617",
//     borderTopLeftRadius: 18,
//     borderTopRightRadius: 18,
//     borderTopWidth: 1,
//     borderColor: "#1F2937",
//     paddingTop: 6,
//   },
//   emojiItem: {
//     width: "12.5%",
//     paddingVertical: 6,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     paddingTop: 6,
//     paddingBottom: 8,
//     backgroundColor: "#020617",
//   },
//   textInput: {
//     flex: 1,
//     borderRadius: 999,
//     backgroundColor: "#020617",
//     borderWidth: 1,
//     borderColor: "#1F2937",
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     color: "#F9FAFB",
//     marginHorizontal: 6,
//     fontSize: 14,
//   },
//   iconBtn: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },

//   sheet: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "#020617",
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     paddingHorizontal: 16,
//     paddingTop: 8,
//     paddingBottom: 24,
//   },
//   attachSheet: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "#020617",
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     paddingHorizontal: 16,
//     paddingTop: 8,
//     paddingBottom: 24,
//   },
//   sheetHandle: {
//     width: 40,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: "#4B5563",
//     alignSelf: "center",
//     marginBottom: 10,
//   },
//   previewBubble: {
//     backgroundColor: "#1E293B",
//     borderRadius: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     marginBottom: 14,
//   },
//   reactionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 12,
//   },
//   reactionCircle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginHorizontal: 4,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#020617",
//     borderWidth: 1,
//     borderColor: "#1E293B",
//   },
//   reactionEmoji: { fontSize: 22 },

//   sheetRow: { paddingVertical: 9 },
//   attachRow: { paddingVertical: 12 },
//   sheetRowLeft: { flexDirection: "row", alignItems: "center" },
//   sheetText: { color: "#E5E7EB", fontSize: 15 },
// });
// 

// src/screens/ChatScreen.js
import React, { useState } from "react";
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

const INITIAL_MESSAGES = [
  { id: "1", author: "Perfecto", text: "How are you shushi?", isMe: false },
  { id: "2", author: "Susshi clan", text: "I am Fine Bro", isMe: true },
  { id: "3", author: "Perfecto", text: "Where are you from ?", isMe: false },
  { id: "4", author: "Susshi clan", text: "I belong to India.", isMe: true },
  { id: "5", author: "Perfecto", text: "Okay, I belong to Nepal", isMe: false },
];

const REACTION_EMOJIS = ["😀", "🤣", "😂", "😅", "🙂", "🌑", "➕"];

const EMOJI_LIST = [
  "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","🙂","🤗",
  "🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜",
  "😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟","😤","😢","😭","😦","😧",
  "😨","😩","🤯","😬","😰","😱","🥵","🥶","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮",
  "🤧","😇","🤠","🤡","🤥","🤫","🤭","🧐","🤓","💀","☠️","👻","👽","🤖","💩",
  "👍","👎","👌","✌️","🤞","🤟","🤘","🤙","👏","🙌","👐","🤲","🙏","💪","👋","🤚","✋","🖐️","🖖",
  "👊","🤛","🤜","🤝","💅","👂","👃","👀","👁️","👅","👄",
  "💋","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝",
  "🔥","💯","⚡","⭐","🌟","✨","⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱",
  "🎧","🎤","🎵","🎶","🎼","🎹","🥁","🎸","🎻",
  "🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍒","🍑","🍍","🥭","🥥","🥝",
  "🍔","🍟","🍕","🌭","🍿","🧂","🥓","🥚","🍳","🥞","🧇","🥯","🥨","🥐",
  "☕","🍵","🧃","🥤","🧋","🍺","🍻","🥂","🍷",
  "🚗","🚕","🚙","🚌","🚎","🏎️","🚓","✈️","🚀","🛸",
  "⌚","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","💿","📷","🎥","📹","📺",
];

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState(
    INITIAL_MESSAGES.map((m) => ({
      ...m,
      type: "text",
      reaction: null,
      replyToId: null,
    }))
  );
  const [input, setInput] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyTo, setReplyTo] = useState(null);
  const [showActionsSheet, setShowActionsSheet] = useState(false);
  const [showAttachmentSheet, setShowAttachmentSheet] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // दुसरा user typing आहे का (demo logic)
  const [otherTyping, setOtherTyping] = useState(false);

  // Copy toast दिसण्यासाठी
  const [showCopyToast, setShowCopyToast] = useState(false);

  const onLongPressMessage = (msg) => {
    setSelectedMessage(msg);
    setShowActionsSheet(true);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const msg = {
      id: Date.now().toString(),
      author: "You",
      text: input.trim(),
      isMe: true,
      type: "text",
      reaction: null,
      replyToId: replyTo?.id || null,
    };
    setMessages((prev) => [...prev, msg]);
    setInput("");
    setReplyTo(null);

    // demo: तू msg पाठवला की Perfecto typing दाखवतो
    setOtherTyping(true);
    setTimeout(() => setOtherTyping(false), 2000);
  };

  const setReactionForSelected = (emoji) => {
    if (!selectedMessage || emoji === "➕") return;
    setMessages((prev) =>
      prev.map((m) =>
        m.id === selectedMessage.id ? { ...m, reaction: emoji } : m
      )
    );
    setShowActionsSheet(false);
  };

  const handleDelete = () => {
    if (!selectedMessage) return;
    setMessages((prev) => prev.filter((m) => m.id !== selectedMessage.id));
    setShowActionsSheet(false);
  };

  const handleCopy = () => {
    console.log("COPY:", selectedMessage?.text);
    setShowActionsSheet(false);

    // toast दाखव
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 1400);
  };

  const handleReply = () => {
    setReplyTo(selectedMessage);
    setShowActionsSheet(false);
  };

  const handleForward = () => {
    if (!selectedMessage) return;
    setShowActionsSheet(false);
    navigation.navigate("Forward", { message: selectedMessage });
  };

  const handleReport = () => {
    if (!selectedMessage) return;
    setShowActionsSheet(false);
    navigation.navigate("Report", { message: selectedMessage });
  };

  // -------- attachments --------
  const addAttachmentMessage = ({ type, uri, name }) => {
    const msg = {
      id: Date.now().toString(),
      author: "You",
      text:
        type === "document"
          ? name || "Document"
          : type === "audio"
          ? name || "Audio"
          : "",
      isMe: true,
      type,
      uri,
      fileName: name || null,
      reaction: null,
      replyToId: replyTo?.id || null,
    };
    setMessages((prev) => [...prev, msg]);
    setReplyTo(null);

    setOtherTyping(true);
    setTimeout(() => setOtherTyping(false), 2000);
  };

  const pickImageFromLibrary = async () => {
    setShowAttachmentSheet(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      addAttachmentMessage({ type: "image", uri: asset.uri });
    }
  };

  const pickDocumentGeneric = async (forAudio = false) => {
    setShowAttachmentSheet(false);
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: forAudio ? "audio/*" : "*/*",
        multiple: false,
        copyToCacheDirectory: true,
      });
      if (result.canceled) return;

      let asset = null;
      if ("assets" in result && result.assets?.length) {
        asset = result.assets[0];
      } else if (result.type === "success") {
        asset = result;
      }
      if (!asset) return;

      addAttachmentMessage({
        type: forAudio ? "audio" : "document",
        uri: asset.uri,
        name: asset.name || (forAudio ? "Audio file" : "Document"),
      });
    } catch (e) {
      console.log("Document pick error", e);
    }
  };

  // -------- render message --------
  const renderMessage = ({ item }) => {
    const isMe = item.isMe;
    const container = [
      styles.messageRow,
      isMe ? styles.messageRowRight : styles.messageRowLeft,
    ];
    const bubble = [
      styles.bubble,
      isMe ? styles.bubbleMe : styles.bubbleOther,
    ];

    const replyMsg = item.replyToId
      ? messages.find((m) => m.id === item.replyToId)
      : null;

    const renderContent = () => {
      if (item.type === "image") {
        return (
          <Image source={{ uri: item.uri }} style={styles.imageMessage} />
        );
      }
      if (item.type === "document") {
        return (
          <View style={styles.fileRow}>
            <Ionicons name="document-text-outline" size={20} color="#E5E7EB" />
            <Text style={styles.fileText} numberOfLines={1}>
              {item.fileName || item.text || "Document"}
            </Text>
          </View>
        );
      }
      if (item.type === "audio") {
        return (
          <View style={styles.fileRow}>
            <Ionicons name="musical-notes-outline" size={20} color="#E5E7EB" />
            <Text style={styles.fileText} numberOfLines={1}>
              {item.fileName || "Audio message"}
            </Text>
          </View>
        );
      }
      return <Text style={styles.bubbleText}>{item.text}</Text>;
    };

    return (
      <TouchableOpacity
        style={container}
        activeOpacity={0.8}
        onLongPress={() => onLongPressMessage(item)}
      >
        <View style={bubble}>
          {replyMsg && (
            <View style={styles.replyPreview}>
              <Text style={styles.replyPreviewName}>
                Replying to {replyMsg.author}
              </Text>
              <Text numberOfLines={1} style={styles.replyPreviewText}>
                {replyMsg.text}
              </Text>
            </View>
          )}

          {renderContent()}

          {item.reaction && (
            <View style={styles.reactionBadge}>
              <Text style={styles.reactionText}>{item.reaction}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // -------- UI --------
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="chevron-back" size={24} color="#E5E7EB" />
            <Text style={styles.headerTitle}>Perfecto</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("VoiceCall", { contact: { name: "Perfecto" } })
              }
            >
              <Ionicons name="call-outline" size={22} color="#E5E7EB" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 14 }}
              onPress={() =>
                navigation.navigate("VideoCall", { contact: { name: "Perfecto" } })
              }
            >
              <Ionicons name="videocam-outline" size={22} color="#E5E7EB" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Copy toast pill */}
        {showCopyToast && (
          <View style={styles.copyToast}>
            <Ionicons
              name="copy-outline"
              size={16}
              color="#FFFFFF"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.copyToastText}>Copy Message</Text>
          </View>
        )}

        {/* Messages */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.listContent}
        />

        {/* typing indicator (Instagram style) */}
        {otherTyping && (
          <View style={styles.typingRow}>
            <View style={styles.typingBubble}>
              <View style={styles.typingDot} />
              <View style={styles.typingDot} />
              <View style={styles.typingDot} />
            </View>
            <Text style={styles.typingText}>Perfecto is typing…</Text>
          </View>
        )}

        {/* Reply bar */}
        {replyTo && (
          <View style={styles.replyBarWrapper}>
            <View style={styles.replyBar}>
              <View style={{ flex: 1 }}>
                <Text style={styles.replyBarTitle}>
                  Replying to {replyTo.author}
                </Text>
                <Text numberOfLines={1} style={styles.replyBarText}>
                  {replyTo.text}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setReplyTo(null)}>
                <Ionicons name="close" size={18} color="#E5E7EB" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Emoji picker */}
        {showEmojiPicker && (
          <View style={styles.emojiPicker}>
            <FlatList
              data={EMOJI_LIST}
              keyExtractor={(_, index) => index.toString()}
              numColumns={8}
              contentContainerStyle={{ paddingBottom: 4 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.emojiItem}
                  onPress={() => setInput((prev) => prev + item)}
                >
                  <Text style={{ fontSize: 24 }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {/* Input */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.inputRow}>
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => {
                setShowEmojiPicker(false);
                setShowAttachmentSheet(true);
              }}
            >
              <Ionicons name="add" size={24} color="#E5E7EB" />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="Okay."
              placeholderTextColor="#9CA3AF"
              value={input}
              onChangeText={setInput}
              onFocus={() => setShowEmojiPicker(false)}
            />
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => setShowEmojiPicker((v) => !v)}
            >
              <Ionicons name="happy-outline" size={22} color="#E5E7EB" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={handleSend}>
              <Ionicons name="send" size={22} color="#E5E7EB" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>

      {/* Reactions / actions sheet */}
      <Modal
        visible={showActionsSheet}
        transparent
        animationType="fade"
        onRequestClose={() => setShowActionsSheet(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => setShowActionsSheet(false)}
        >
          <View />
        </Pressable>

        <View style={styles.sheet}>
          <View style={styles.sheetHandle} />
          {selectedMessage && (
            <View style={styles.previewBubble}>
              <Text style={styles.bubbleText}>{selectedMessage.text}</Text>
            </View>
          )}

          <View style={styles.reactionRow}>
            {REACTION_EMOJIS.map((e) => (
              <TouchableOpacity
                key={e}
                style={styles.reactionCircle}
                onPress={() => setReactionForSelected(e)}
              >
                <Text style={styles.reactionEmoji}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 4 }}>
            <SheetAction label="Reply" icon="return-up-back" onPress={handleReply} />
            <SheetAction
              label="Forward"
              icon="arrow-redo-outline"
              onPress={handleForward}
            />
            <SheetAction label="Pin" icon="pin-outline" />
            <SheetAction label="Edit" icon="pencil-outline" />
            <SheetAction label="Copy" icon="copy-outline" onPress={handleCopy} />
            <SheetAction
              label="Report"
              icon="flag-outline"
              danger
              onPress={handleReport}
            />
            <SheetAction
              label="Delete"
              icon="trash-outline"
              danger
              onPress={handleDelete}
            />
          </View>
        </View>
      </Modal>

      {/* Attachment sheet (+) */}
      <Modal
        visible={showAttachmentSheet}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAttachmentSheet(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => setShowAttachmentSheet(false)}
        >
          <View />
        </Pressable>

        <View style={styles.attachSheet}>
          <View style={styles.sheetHandle} />
          <AttachRow
            icon="image-outline"
            label="Photo / Image"
            onPress={pickImageFromLibrary}
          />
          <AttachRow
            icon="musical-notes-outline"
            label="Audio file"
            onPress={() => pickDocumentGeneric(true)}
          />
          <AttachRow
            icon="document-text-outline"
            label="Document"
            onPress={() => pickDocumentGeneric(false)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const SheetAction = ({ label, icon, onPress, danger }) => (
  <TouchableOpacity style={styles.sheetRow} onPress={onPress}>
    <View style={styles.sheetRowLeft}>
      <Ionicons
        name={icon}
        size={20}
        color={danger ? "#F97373" : "#E5E7EB"}
        style={{ marginRight: 14 }}
      />
      <Text style={[styles.sheetText, danger && { color: "#F97373" }]}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

const AttachRow = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.attachRow} onPress={onPress}>
    <View style={styles.sheetRowLeft}>
      <Ionicons
        name={icon}
        size={22}
        color="#E5E7EB"
        style={{ marginRight: 14 }}
      />
      <Text style={styles.sheetText}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#020617" },
  container: { flex: 1, backgroundColor: "#0B1220" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  headerTitle: {
    color: "#E5E7EB",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 6,
  },
  headerRight: { flexDirection: "row", alignItems: "center" },

  listContent: { paddingHorizontal: 12, paddingVertical: 8 },
  messageRow: { marginVertical: 4, flexDirection: "row" },
  messageRowLeft: { justifyContent: "flex-start" },
  messageRowRight: { justifyContent: "flex-end" },
  bubble: {
    maxWidth: "75%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
  },
  bubbleMe: { backgroundColor: "#0EA5E9", borderBottomRightRadius: 4 },
  bubbleOther: { backgroundColor: "#1D4ED8", borderBottomLeftRadius: 4 },
  bubbleText: { color: "#E5E7EB", fontSize: 14 },

  imageMessage: {
    width: 180,
    height: 200,
    borderRadius: 14,
    resizeMode: "cover",
  },
  fileRow: { flexDirection: "row", alignItems: "center" },
  fileText: {
    marginLeft: 6,
    color: "#E5E7EB",
    fontSize: 13,
    flexShrink: 1,
  },

  reactionBadge: {
    alignSelf: "flex-end",
    marginTop: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: "rgba(15,23,42,0.9)",
  },
  reactionText: { fontSize: 12, color: "#F9FAFB" },

  replyPreview: {
    marginBottom: 4,
    padding: 6,
    borderLeftWidth: 2,
    borderLeftColor: "rgba(15,23,42,0.6)",
    backgroundColor: "rgba(15,23,42,0.3)",
    borderRadius: 10,
  },
  replyPreviewName: { fontSize: 11, color: "#CBD5F5", marginBottom: 2 },
  replyPreviewText: { fontSize: 11, color: "#E5E7EB" },

  // typing indicator
  typingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  typingBubble: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: "rgba(15,23,42,0.8)",
    marginRight: 8,
  },
  typingDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 2,
  },
  typingText: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  // copy toast
  copyToast: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "rgba(15,15,15,0.9)",
    zIndex: 20,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  copyToastText: {
    color: "#FFFFFF",
    fontSize: 13,
  },

  replyBarWrapper: { paddingHorizontal: 12, paddingBottom: 4 },
  replyBar: {
    backgroundColor: "#020617",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  replyBarTitle: { color: "#E5E7EB", fontSize: 13, fontWeight: "500" },
  replyBarText: { color: "#9CA3AF", fontSize: 12, marginTop: 2 },

  emojiPicker: {
    maxHeight: 230,
    backgroundColor: "#020617",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderTopWidth: 1,
    borderColor: "#1F2937",
    paddingTop: 6,
  },
  emojiItem: {
    width: "12.5%",
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 8,
    backgroundColor: "#020617",
  },
  textInput: {
    flex: 1,
    borderRadius: 999,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1F2937",
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#F9FAFB",
    marginHorizontal: 6,
    fontSize: 14,
  },
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  backdrop: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)" },

  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#020617",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  attachSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#020617",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#4B5563",
    alignSelf: "center",
    marginBottom: 10,
  },
  previewBubble: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  reactionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  reactionCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  reactionEmoji: { fontSize: 22 },

  sheetRow: { paddingVertical: 9 },
  attachRow: { paddingVertical: 12 },
  sheetRowLeft: { flexDirection: "row", alignItems: "center" },
  sheetText: { color: "#E5E7EB", fontSize: 15 },
});

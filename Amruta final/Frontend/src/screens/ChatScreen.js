
// // // import React from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   TouchableOpacity,
// // //   TextInput,
// // //   FlatList,
// // //   Platform,
// // // } from "react-native";
// // // import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// // // import { LinearGradient } from "expo-linear-gradient";
// // // import Svg, { Path, Circle } from "react-native-svg";

// // // // --- Dummy data ---
// // // const MESSAGES = [
// // //   {
// // //     id: "1",
// // //     name: "Perfecto",
// // //     you: true,
// // //     message: "You: https://discord.gg/KH3gsJKCD",
// // //     time: "2d",
// // //     isHighlighted: true,
// // //     avatarColor: "#326BFF",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Perfecto",
// // //     message: "perfecto: https://discord.gg/KH3gsJKCD",
// // //     time: "2d",
// // //     avatarColor: "#37C8FF",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Perfecto",
// // //     message: "perfecto: https://discord.gg/KH3gsJKCD",
// // //     time: "2d",
// // //     avatarColor: "#00E37D",
// // //   },
// // //   {
// // //     id: "4",
// // //     name: "Perfecto",
// // //     message: "perfecto: https://discord.gg/KH3gsJKCD",
// // //     time: "4d",
// // //     avatarColor: "#FF37EC",
// // //   },
// // //   {
// // //     id: "5",
// // //     name: "Perfecto",
// // //     message: "perfecto: https://discord.gg/KH3gsJKCD",
// // //     time: "12d",
// // //     avatarColor: "#37F0FF",
// // //   },
// // //   {
// // //     id: "6",
// // //     name: "Perfecto",
// // //     message: "perfecto: https://discord.gg/KH3gsJKCD",
// // //     time: "12d",
// // //     avatarColor: "#FF7F37",
// // //   },
// // //   {
// // //     id: "7",
// // //     name: "Perfecto",
// // //     message: "perfecto: https://discord.gg/KH3gsJKCD",
// // //     time: "12d",
// // //     avatarColor: "#2F2F2F",
// // //   },
// // // ];

// // // // -------- SMALL SVG ICONS (header) --------
// // // const PeopleIcon = ({ size = 18 }) => (
// // //   <Svg width={size} height={size} viewBox="0 0 24 24">
// // //     <Path
// // //       d="M12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0 1.5c-2.33 0-7 1.17-7 3.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.99c0-2.33-4.67-3.51-7-3.51z"
// // //       fill="#FFFFFF"
// // //     />
// // //   </Svg>
// // // );

// // // const MoreIcon = ({ size = 18 }) => (
// // //   <Svg width={size} height={size} viewBox="0 0 24 24">
// // //     <Circle cx="5" cy="12" r="1.5" fill="#FFFFFF" />
// // //     <Circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
// // //     <Circle cx="19" cy="12" r="1.5" fill="#FFFFFF" />
// // //   </Svg>
// // // );

// // // const SearchIcon = ({ size = 16 }) => (
// // //   <Svg width={size} height={size} viewBox="0 0 24 24">
// // //     <Path
// // //       d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L18.5 20 20 18.5 15.5 14zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
// // //       fill="#64748B"
// // //     />
// // //   </Svg>
// // // );

// // // // -------- CELL COMPONENT --------
// // // const MessageItem = ({ item, onPress }) => {
// // //   if (item.isHighlighted) {
// // //     return (
// // //       <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
// // //         <LinearGradient
// // //           colors={["#3B82F6", "#22C1C3", "#8B5CF6"]}
// // //           start={{ x: 0, y: 0 }}
// // //           end={{ x: 1, y: 0 }}
// // //           style={styles.highlightWrapper}
// // //         >
// // //           <View style={styles.highlightInner}>
// // //             <View
// // //               style={[styles.avatar, { backgroundColor: item.avatarColor }]}
// // //             >
// // //               <Text style={styles.avatarText}>P</Text>
// // //             </View>
// // //             <View style={styles.messageTextContainer}>
// // //               <Text style={styles.nameText}>{item.name}</Text>
// // //               <Text numberOfLines={1} style={styles.messageText}>
// // //                 {item.message}
// // //               </Text>
// // //             </View>
// // //             <Text style={styles.timeText}>{item.time}</Text>
// // //           </View>
// // //         </LinearGradient>
// // //       </TouchableOpacity>
// // //     );
// // //   }

// // //   return (
// // //     <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
// // //       <View style={styles.messageRow}>
// // //         <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
// // //           <Text style={styles.avatarText}>P</Text>
// // //         </View>
// // //         <View style={styles.messageTextContainer}>
// // //           <Text style={styles.nameText}>{item.name}</Text>
// // //           <Text numberOfLines={1} style={styles.messageSubText}>
// // //             {item.message}
// // //           </Text>
// // //         </View>
// // //         <Text style={styles.timeText}>{item.time}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );
// // // };

// // // // ---------- MAIN SCREEN ----------
// // // function ChatChannelInner({ navigation }) {
// // //   const handleOpenChat = (item) => {
// // //     navigation.navigate("Channel", {
// // //       contact: item,
// // //     });
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       {/* HEADER */}
// // //       <View style={styles.headerRow}>
// // //         <View style={styles.titleRow}>
// // //           <Text style={styles.title}>Messages</Text>
// // //           <View style={styles.badge}>
// // //             <Text style={styles.badgeText}>15</Text>
// // //           </View>
// // //         </View>

// // //         <View style={styles.headerButtons}>
// // //           <TouchableOpacity style={styles.headerIconButton}>
// // //             <PeopleIcon />
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.headerIconButton}>
// // //             <MoreIcon />
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>

// // //       {/* SEARCH */}
// // //       <View style={styles.searchRow}>
// // //         <View style={styles.searchBox}>
// // //           <SearchIcon />
// // //           <TextInput
// // //             placeholder="Search nexus, friends, messages..."
// // //             placeholderTextColor="#64748B"
// // //             style={styles.searchInput}
// // //           />
// // //         </View>
// // //         <TouchableOpacity>
// // //           <Text style={styles.filterText}>Filter</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* LIST */}
// // //       <FlatList
// // //         data={MESSAGES}
// // //         keyExtractor={(item) => item.id}
// // //         renderItem={({ item }) => (
// // //           <MessageItem item={item} onPress={() => handleOpenChat(item)} />
// // //         )}
// // //         contentContainerStyle={styles.listContent}
// // //         showsVerticalScrollIndicator={false}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // export default function ChatChannelScreen({ navigation }) {
// // //   const insets = useSafeAreaInsets();

// // //   // Android साठी fallback – जर insets.top = 0 असेल तर StatusBar height वापर
// // //   const androidTopPad =
// // //     Platform.OS === "android" && insets.top === 0
// // //       ? (StatusBar.currentHeight || 0) + 4
// // //       : 0;

// // //   return (
// // //     <View style={[styles.root, { paddingTop: androidTopPad }]}>
// // //       <StatusBar
// // //         barStyle="light-content"
// // //         translucent
// // //         backgroundColor="transparent"
// // //       />

// // //       <SafeAreaView
// // //         style={styles.safe}
// // //         edges={["top", "left", "right", "bottom"]}
// // //       >
// // //         <ChatChannelInner navigation={navigation} />
// // //       </SafeAreaView>
// // //     </View>
// // //   );
// // // }

// // // // ------------- STYLES -------------
// // // const styles = StyleSheet.create({
// // //   root: {
// // //     flex: 1,
// // //     backgroundColor: "#020617",
// // //   },
// // //   safe: {
// // //     flex: 1,
// // //     backgroundColor: "#020617",
// // //   },
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#020617",
// // //     paddingHorizontal: 20,
// // //     paddingTop: 8,
// // //   },

// // //   // HEADER
// // //   headerRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //     marginBottom: 16,
// // //   },
// // //   titleRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   title: {
// // //     fontSize: 22,
// // //     color: "#FFFFFF",
// // //     fontWeight: "600",
// // //   },
// // //   badge: {
// // //     marginLeft: 8,
// // //     minWidth: 20,
// // //     paddingHorizontal: 6,
// // //     paddingVertical: 3,
// // //     borderRadius: 999,
// // //     backgroundColor: "#EF4444",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   badgeText: {
// // //     fontSize: 11,
// // //     color: "#FFFFFF",
// // //     fontWeight: "600",
// // //   },
// // //   headerButtons: {
// // //     flexDirection: "row",
// // //   },
// // //   headerIconButton: {
// // //     width: 34,
// // //     height: 34,
// // //     borderRadius: 17,
// // //     borderWidth: 1,
// // //     borderColor: "#1E293B",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     backgroundColor: "#020617",
// // //     marginLeft: 10,
// // //   },

// // //   // SEARCH
// // //   searchRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 18,
// // //   },
// // //   searchBox: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     flex: 1,
// // //     backgroundColor: "#3154BA4D",
// // //     borderRadius: 999,
// // //     borderWidth: 1,
// // //     borderColor: "#3154BA",
// // //     paddingHorizontal: 14,
// // //     height: 40,
// // //    paddingHorizontal: 10,
// // //   paddingVertical: 8,

// // //   // Shadow for iOS
// // //   shadowColor: "#000",
// // //   shadowOffset: { width: 0, height: 2 },
// // //   shadowOpacity: 0.25,
// // //   shadowRadius: 3.84,

// // //   // Shadow for Android
// // //   elevation: 5,
// // //   },
 

// // //   searchInput: {
// // //     flex: 1,
// // //     marginLeft: 8,
// // //     color: "#E2E8F0",
// // //     paddingVertical: 0,
// // //     fontSize: 14,
// // //   },
// // //   filterText: {
// // //     marginLeft: 12,
// // //     color: "#3154BA",
// // //     fontSize: 1,
// // //   },

// // //   // LIST
// // //   listContent: {
// // //     paddingBottom: Platform.OS === "ios" ? 32 : 20,
// // //   },
// // //   highlightWrapper: {
// // //     borderRadius: 18,
// // //     padding: 1.5,
// // //     marginBottom: 10,
// // //   },
// // //   highlightInner: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     backgroundColor: "#020617",
// // //     borderRadius: 16,
// // //     paddingHorizontal: 12,
// // //     paddingVertical: 10,
// // //   },
// // //   messageRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingVertical: 10,
// // //   },
// // //   avatar: {
// // //     width: 46,
// // //     height: 46,
// // //     borderRadius: 16,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   avatarText: {
// // //     color: "#FFFFFF",
// // //     fontWeight: "700",
// // //     fontSize: 18,
// // //   },
// // //   messageTextContainer: {
// // //     flex: 1,
// // //     marginHorizontal: 10,
// // //   },
// // //   nameText: {
// // //     color: "#FFFFFF",
// // //     fontSize: 15,
// // //     fontWeight: "600",
// // //   },
// // //   messageText: {
// // //     color: "#E2E8F0",
// // //     fontSize: 12,
// // //     marginTop: 2,
// // //   },
// // //   messageSubText: {
// // //     color: "#64748B",
// // //     fontSize: 12,
// // //     marginTop: 2,
// // //   },
// // //   timeText: {
// // //     color: "#64748B",
// // //     fontSize: 12,
// // //   },
// // // });
// // // ChatChannelScreen.js
// // // import React, { useEffect, useState, useCallback } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   TouchableOpacity,
// // //   TextInput,
// // //   FlatList,
// // //   Platform,
// // //   Alert,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// // // import { LinearGradient } from "expo-linear-gradient";
// // // import Svg, { Path, Circle } from "react-native-svg";

// // // /* --------- CONFIG --------- */
// // // // Change this to your backend base URL. For Android emulator use 10.0.2.2
// // // const API_BASE = "http://10.0.2.2:4000/api"; // <-- update to your server

// // // /* --------- Dummy Messages --------- (replace with real data later) */
// // // const MESSAGES = [
// // //   { id: "1", name: "Perfecto", you: true, message: "You: https://discord.gg/KH3g", time: "2d", isHighlighted: true, avatarColor: "#326BFF", userId: "u1" },
// // //   { id: "2", name: "Asha", message: "hey — check this out", time: "2d", avatarColor: "#37C8FF", userId: "u2" },
// // //   { id: "3", name: "Ravi", message: "new guide uploaded", time: "2d", avatarColor: "#00E37D", userId: "u3" },
// // //   { id: "4", name: "Maya", message: "Let's collab", time: "4d", avatarColor: "#FF37EC", userId: "u4" },
// // //   { id: "5", name: "Leo", message: "party tonight", time: "12d", avatarColor: "#37F0FF", userId: "u5" },
// // // ];

// // // /* --------- Small SVG icons --------- */
// // // const PeopleIcon = ({ size = 18 }) => (
// // //   <Svg width={size} height={size} viewBox="0 0 24 24">
// // //     <Path d="M12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0 1.5c-2.33 0-7 1.17-7 3.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.99c0-2.33-4.67-3.51-7-3.51z" fill="#FFFFFF" />
// // //   </Svg>
// // // );
// // // const MoreIcon = ({ size = 18 }) => (
// // //   <Svg width={size} height={size} viewBox="0 0 24 24">
// // //     <Circle cx="5" cy="12" r="1.5" fill="#FFFFFF" />
// // //     <Circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
// // //     <Circle cx="19" cy="12" r="1.5" fill="#FFFFFF" />
// // //   </Svg>
// // // );
// // // const SearchIcon = ({ size = 16 }) => (
// // //   <Svg width={size} height={size} viewBox="0 0 24 24">
// // //     <Path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L18.5 20 20 18.5 15.5 14zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" fill="#64748B" />
// // //   </Svg>
// // // );

// // // /* --------- Message item component --------- */
// // // const MessageItem = ({ item, onPress, followingMap, onToggleFollow }) => {
// // //   const isFollowing = !!followingMap[item.userId];
// // //   const followLabel = isFollowing ? "Following" : "Follow";

// // //   if (item.isHighlighted) {
// // //     return (
// // //       <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={{ marginBottom: 10 }}>
// // //         <LinearGradient colors={["#3B82F6", "#22C1C3", "#8B5CF6"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.highlightWrapper}>
// // //           <View style={styles.highlightInner}>
// // //             <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}><Text style={styles.avatarText}>P</Text></View>
// // //             <View style={styles.messageTextContainer}>
// // //               <Text style={styles.nameText}>{item.name}</Text>
// // //               <Text numberOfLines={1} style={styles.messageText}>{item.message}</Text>
// // //             </View>

// // //             <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
// // //               <Text style={styles.timeText}>{item.time}</Text>
// // //               <TouchableOpacity style={[styles.followBtn, isFollowing && styles.followBtnActive]} activeOpacity={0.9} onPress={() => onToggleFollow(item.userId)}>
// // //                 <Text style={[styles.followBtnText, isFollowing && styles.followBtnTextActive]}>{followLabel}</Text>
// // //               </TouchableOpacity>
// // //             </View>
// // //           </View>
// // //         </LinearGradient>
// // //       </TouchableOpacity>
// // //     );
// // //   }

// // //   return (
// // //     <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
// // //       <View style={styles.messageRow}>
// // //         <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}><Text style={styles.avatarText}>P</Text></View>
// // //         <View style={styles.messageTextContainer}>
// // //           <Text style={styles.nameText}>{item.name}</Text>
// // //           <Text numberOfLines={1} style={styles.messageSubText}>{item.message}</Text>
// // //         </View>

// // //         <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
// // //           <Text style={styles.timeText}>{item.time}</Text>
// // //           <TouchableOpacity style={[styles.followBtn, isFollowing && styles.followBtnActive]} activeOpacity={0.9} onPress={() => onToggleFollow(item.userId)}>
// // //             <Text style={[styles.followBtnText, isFollowing && styles.followBtnTextActive]}>{followLabel}</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );
// // // };

// // // /* --------- Main screen --------- */
// // // export default function ChatChannelScreen({ navigation }) {
// // //   const insets = useSafeAreaInsets();
// // //   const androidTopPad = Platform.OS === "android" && insets.top === 0 ? (StatusBar.currentHeight || 0) + 4 : 0;

// // //   // followingMap: { userId: true } means you follow that user
// // //   const [followingMap, setFollowingMap] = useState({});
// // //   const [loadingFollowing, setLoadingFollowing] = useState(false);
// // //   const [loadingActionMap, setLoadingActionMap] = useState({}); // userId -> boolean

// // //   // fetch "obitors" (people I follow) and set followingMap
// // //   const fetchObitors = useCallback(async () => {
// // //     setLoadingFollowing(true);
// // //     try {
// // //       // if you need auth token add headers: { Authorization: `Bearer ${token}` }
// // //       const res = await fetch(`${API_BASE}/orbit/obitors`);
// // //       const json = await res.json();
// // //       if (json?.success && Array.isArray(json.data)) {
// // //         const map = {};
// // //         json.data.forEach((u) => {
// // //           // assuming each item has userId or id
// // //           const id = u.userId ?? u.id ?? u.targetId ?? null;
// // //           if (id) map[id] = true;
// // //         });
// // //         setFollowingMap(map);
// // //       } else {
// // //         // fallback: empty map
// // //         setFollowingMap({});
// // //       }
// // //     } catch (err) {
// // //       console.warn("fetchObitors err", err);
// // //       setFollowingMap({});
// // //     } finally {
// // //       setLoadingFollowing(false);
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     // initial load
// // //     fetchObitors();
// // //   }, [fetchObitors]);

// // //   // Optimistic follow/unfollow
// // //   const toggleFollow = async (targetId) => {
// // //     if (!targetId) return;
// // //     // avoid double action
// // //     if (loadingActionMap[targetId]) return;

// // //     const currentlyFollowing = !!followingMap[targetId];

// // //     // optimistic update
// // //     setFollowingMap((prev) => {
// // //       const copy = { ...prev };
// // //       if (currentlyFollowing) delete copy[targetId];
// // //       else copy[targetId] = true;
// // //       return copy;
// // //     });

// // //     setLoadingActionMap((s) => ({ ...s, [targetId]: true }));

// // //     try {
// // //       const endpoint = currentlyFollowing ? "unfollow" : "follow";
// // //       const res = await fetch(`${API_BASE}/orbit/${endpoint}`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" /* add Authorization if needed */ },
// // //         body: JSON.stringify({ targetId }),
// // //       });
// // //       const json = await res.json();
// // //       if (!json?.success) {
// // //         // rollback on failure
// // //         setFollowingMap((prev) => {
// // //           const copy = { ...prev };
// // //           if (currentlyFollowing) copy[targetId] = true; else delete copy[targetId];
// // //           return copy;
// // //         });
// // //         Alert.alert("Action failed", json?.message || "Could not update follow state");
// // //       } else {
// // //         // success — optionally update local with returned data
// // //       }
// // //     } catch (err) {
// // //       // rollback on network error
// // //       setFollowingMap((prev) => {
// // //         const copy = { ...prev };
// // //         if (currentlyFollowing) copy[targetId] = true; else delete copy[targetId];
// // //         return copy;
// // //       });
// // //       Alert.alert("Network error", "Could not reach server");
// // //     } finally {
// // //       setLoadingActionMap((s) => {
// // //         const copy = { ...s };
// // //         delete copy[targetId];
// // //         return copy;
// // //       });
// // //     }
// // //   };

// // //   const handleOpenChat = (item) => {
// // //     navigation.navigate("Channel", { contact: item });
// // //   };

// // //   return (
// // //     <View style={[styles.root, { paddingTop: androidTopPad }]}>
// // //       <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
// // //       <SafeAreaView style={styles.safe} edges={["top", "left", "right", "bottom"]}>
// // //         <View style={styles.container}>
// // //           {/* HEADER */}
// // //           <View style={styles.headerRow}>
// // //             <View style={styles.titleRow}>
// // //               <Text style={styles.title}>Messages</Text>
// // //               <View style={styles.badge}><Text style={styles.badgeText}>15</Text></View>
// // //             </View>

// // //             <View style={styles.headerButtons}>
// // //               <TouchableOpacity style={styles.headerIconButton}><PeopleIcon /></TouchableOpacity>
// // //               <TouchableOpacity style={styles.headerIconButton}><MoreIcon /></TouchableOpacity>
// // //             </View>
// // //           </View>

// // //           {/* SEARCH */}
// // //           <View style={styles.searchRow}>
// // //             <View style={styles.searchBox}>
// // //               <SearchIcon />
// // //               <TextInput placeholder="Search nexus, friends, messages..." placeholderTextColor="#64748B" style={styles.searchInput} />
// // //             </View>
// // //             <TouchableOpacity><Text style={styles.filterText}>Filter</Text></TouchableOpacity>
// // //           </View>

// // //           {/* indicator while fetching who you follow */}
// // //           {loadingFollowing && (
// // //             <View style={{ padding: 10, alignItems: "center" }}>
// // //               <ActivityIndicator size="small" color="#2E5BFF" />
// // //               <Text style={{ color: "#9CA3AF", marginTop: 6 }}>Loading follows...</Text>
// // //             </View>
// // //           )}

// // //           {/* LIST */}
// // //           <FlatList
// // //             data={MESSAGES}
// // //             keyExtractor={(item) => item.id}
// // //             renderItem={({ item }) => (
// // //               <MessageItem
// // //                 item={item}
// // //                 onPress={() => handleOpenChat(item)}
// // //                 followingMap={followingMap}
// // //                 onToggleFollow={toggleFollow}
// // //                 loadingAction={!!loadingActionMap[item.userId]}
// // //               />
// // //             )}
// // //             contentContainerStyle={styles.listContent}
// // //             showsVerticalScrollIndicator={false}
// // //             ListEmptyComponent={<View style={{ padding: 24 }}><Text style={{ color: '#9CA3AF' }}>No messages</Text></View>}
// // //           />
// // //         </View>
// // //       </SafeAreaView>
// // //     </View>
// // //   );
// // // }

// // // /* --------- Styles (based on your previous styles) --------- */
// // // const styles = StyleSheet.create({
// // //   root: { flex: 1, backgroundColor: "#020617" },
// // //   safe: { flex: 1, backgroundColor: "#020617" },
// // //   container: { flex: 1, backgroundColor: "#020617", paddingHorizontal: 20, paddingTop: 8 },

// // //   headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
// // //   titleRow: { flexDirection: "row", alignItems: "center" },
// // //   title: { fontSize: 22, color: "#FFFFFF", fontWeight: "600" },
// // //   badge: { marginLeft: 8, minWidth: 20, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 999, backgroundColor: "#EF4444", alignItems: "center", justifyContent: "center" },
// // //   badgeText: { fontSize: 11, color: "#FFFFFF", fontWeight: "600" },
// // //   headerButtons: { flexDirection: "row" },
// // //   headerIconButton: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: "#1E293B", alignItems: "center", justifyContent: "center", backgroundColor: "#020617", marginLeft: 10 },

// // //   searchRow: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
// // //   searchBox: { flexDirection: "row", alignItems: "center", flex: 1, backgroundColor: "#3154BA4D", borderRadius: 999, borderWidth: 1, borderColor: "#3154BA", height: 40, paddingHorizontal: 10, paddingVertical: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
// // //   searchInput: { flex: 1, marginLeft: 8, color: "#E2E8F0", paddingVertical: 0, fontSize: 14 },
// // //   filterText: { marginLeft: 12, color: "#3154BA", fontSize: 12 },

// // //   listContent: { paddingBottom: Platform.OS === "ios" ? 32 : 20 },

// // //   highlightWrapper: { borderRadius: 18, padding: 1.5, marginBottom: 10 },
// // //   highlightInner: { flexDirection: "row", alignItems: "center", backgroundColor: "#020617", borderRadius: 16, paddingHorizontal: 12, paddingVertical: 10 },
// // //   messageRow: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },

// // //   avatar: { width: 46, height: 46, borderRadius: 16, alignItems: "center", justifyContent: "center" },
// // //   avatarText: { color: "#FFFFFF", fontWeight: "700", fontSize: 18 },
// // //   messageTextContainer: { flex: 1, marginHorizontal: 10 },
// // //   nameText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
// // //   messageText: { color: "#E2E8F0", fontSize: 12, marginTop: 2 },
// // //   messageSubText: { color: "#64748B", fontSize: 12, marginTop: 2 },
// // //   timeText: { color: "#64748B", fontSize: 12 },

// // //   followBtn: { marginTop: 8, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: "#2E5BFF", backgroundColor: "transparent", alignItems: "center", justifyContent: "center" },
// // //   followBtnActive: { backgroundColor: "#2E5BFF", borderColor: "transparent" },
// // //   followBtnText: { color: "#2E5BFF", fontWeight: "700", fontSize: 12 },
// // //   followBtnTextActive: { color: "#fff" },
// // // });
// // // ChatChannelScreen.js
// // import React, { useEffect, useState, useCallback } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   StatusBar,
// //   TouchableOpacity,
// //   TextInput,
// //   FlatList,
// //   Platform,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";
// // import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// // import { LinearGradient } from "expo-linear-gradient";
// // import Svg, { Path, Circle } from "react-native-svg";

// // /* --------- CONFIG --------- */
// // // Change this to your backend base URL. For Android emulator use 10.0.2.2
// // const API_BASE = "http://10.0.2.2:4000/api"; // <-- update to your server

// // /* --------- Dummy Messages (replace with real data later) --------- */
// // const MESSAGES = [
// //   { id: "1", name: "Perfecto", you: true, message: "You: https://discord.gg/KH3g", time: "2d", isHighlighted: true, avatarColor: "#326BFF", userId: "u1" },
// //   { id: "2", name: "Asha", message: "hey — check this out", time: "2d", avatarColor: "#37C8FF", userId: "u2" },
// //   { id: "3", name: "Ravi", message: "new guide uploaded", time: "2d", avatarColor: "#00E37D", userId: "u3" },
// //   { id: "4", name: "Maya", message: "Let's collab", time: "4d", avatarColor: "#FF37EC", userId: "u4" },
// //   { id: "5", name: "Leo", message: "party tonight", time: "12d", avatarColor: "#37F0FF", userId: "u5" },
// // ];

// // /* --------- Small SVG icons --------- */
// // const PeopleIcon = ({ size = 18 }) => (
// //   <Svg width={size} height={size} viewBox="0 0 24 24">
// //     <Path d="M12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0 1.5c-2.33 0-7 1.17-7 3.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.99c0-2.33-4.67-3.51-7-3.51z" fill="#FFFFFF" />
// //   </Svg>
// // );
// // const MoreIcon = ({ size = 18 }) => (
// //   <Svg width={size} height={size} viewBox="0 0 24 24">
// //     <Circle cx="5" cy="12" r="1.5" fill="#FFFFFF" />
// //     <Circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
// //     <Circle cx="19" cy="12" r="1.5" fill="#FFFFFF" />
// //   </Svg>
// // );
// // const SearchIcon = ({ size = 16 }) => (
// //   <Svg width={size} height={size} viewBox="0 0 24 24">
// //     <Path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L18.5 20 20 18.5 15.5 14zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" fill="#64748B" />
// //   </Svg>
// // );

// // /* --------- Message item component (polished) --------- */
// // const MessageItem = ({ item, onPress, followingMap, onToggleFollow, loadingAction }) => {
// //   const isFollowing = !!followingMap[item.userId];
// //   const followLabel = isFollowing ? "Following" : "Follow";

// //   // Highlighted/top item style (gradient frame + inner dark card)
// //   if (item.isHighlighted) {
// //     return (
// //       <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.itemOuterWrap}>
// //         <LinearGradient
// //           colors={["#3B82F6", "#22C1C3", "#8B5CF6"]}
// //           start={{ x: 0, y: 0 }}
// //           end={{ x: 1, y: 0 }}
// //           style={styles.highlightBorder}
// //         >
// //           <View style={styles.highlightInner}>
// //             <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
// //               <Text style={styles.avatarText}>{item.name?.[0] || "U"}</Text>
// //             </View>

// //             <View style={styles.messageTextContainer}>
// //               <Text style={styles.nameText}>{item.name}</Text>
// //               <Text numberOfLines={1} style={styles.messageText}>{item.message}</Text>
// //             </View>

// //             <View style={styles.rightCol}>
// //               <Text style={styles.timeText}>{item.time}</Text>

// //               <TouchableOpacity
// //                 activeOpacity={0.85}
// //                 onPress={() => onToggleFollow(item.userId)}
// //                 style={[styles.followBtn, isFollowing && styles.followBtnActive]}
// //                 disabled={loadingAction}
// //               >
// //                 {loadingAction ? (
// //                   <ActivityIndicator size="small" color={isFollowing ? "#fff" : "#2E5BFF"} />
// //                 ) : (
// //                   <Text style={[styles.followBtnText, isFollowing && styles.followBtnTextActive]}>{followLabel}</Text>
// //                 )}
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </LinearGradient>
// //       </TouchableOpacity>
// //     );
// //   }

// //   // Regular item
// //   return (
// //     <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.itemOuterWrap}>
// //       <View style={styles.messageRow}>
// //         <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
// //           <Text style={styles.avatarText}>{item.name?.[0] || "U"}</Text>
// //         </View>

// //         <View style={styles.messageTextContainer}>
// //           <Text style={styles.nameText}>{item.name}</Text>
// //           <Text numberOfLines={1} style={styles.messageSubText}>{item.message}</Text>
// //         </View>

// //         <View style={styles.rightCol}>
// //           <Text style={styles.timeText}>{item.time}</Text>
// //           <TouchableOpacity
// //             activeOpacity={0.85}
// //             onPress={() => onToggleFollow(item.userId)}
// //             style={[styles.followBtn, isFollowing && styles.followBtnActive]}
// //             disabled={loadingAction}
// //           >
// //             {loadingAction ? (
// //               <ActivityIndicator size="small" color={isFollowing ? "#fff" : "#2E5BFF"} />
// //             ) : (
// //               <Text style={[styles.followBtnText, isFollowing && styles.followBtnTextActive]}>{followLabel}</Text>
// //             )}
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </TouchableOpacity>
// //   );
// // };

// // /* --------- Main screen (polished) --------- */
// // export default function ChatChannelScreen({ navigation }) {
// //   const insets = useSafeAreaInsets();
// //   const androidTopPad = Platform.OS === "android" && insets.top === 0 ? (StatusBar.currentHeight || 0) + 4 : 0;

// //   // followingMap: { userId: true } means you follow that user
// //   const [followingMap, setFollowingMap] = useState({});
// //   const [loadingFollowing, setLoadingFollowing] = useState(false);
// //   const [loadingActionMap, setLoadingActionMap] = useState({}); // userId -> boolean
// //   const [query, setQuery] = useState("");

// //   // fetch "obitors" (people I follow) and set followingMap
// //   const fetchObitors = useCallback(async () => {
// //     setLoadingFollowing(true);
// //     try {
// //       const res = await fetch(`${API_BASE}/orbit/obitors`);
// //       const json = await res.json();
// //       if (json?.success && Array.isArray(json.data)) {
// //         const map = {};
// //         json.data.forEach((u) => {
// //           const id = u.userId ?? u.id ?? u.targetId ?? null;
// //           if (id) map[id] = true;
// //         });
// //         setFollowingMap(map);
// //       } else {
// //         setFollowingMap({});
// //       }
// //     } catch (err) {
// //       console.warn("fetchObitors err", err);
// //       setFollowingMap({});
// //     } finally {
// //       setLoadingFollowing(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     // initial load
// //     fetchObitors();
// //   }, [fetchObitors]);

// //   // Optimistic follow/unfollow
// //   const toggleFollow = async (targetId) => {
// //     if (!targetId) return;
// //     if (loadingActionMap[targetId]) return;

// //     const currentlyFollowing = !!followingMap[targetId];

// //     // optimistic update
// //     setFollowingMap((prev) => {
// //       const copy = { ...prev };
// //       if (currentlyFollowing) delete copy[targetId];
// //       else copy[targetId] = true;
// //       return copy;
// //     });

// //     setLoadingActionMap((s) => ({ ...s, [targetId]: true }));

// //     try {
// //       const endpoint = currentlyFollowing ? "unfollow" : "follow";
// //       const res = await fetch(`${API_BASE}/orbit/${endpoint}`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ targetId }),
// //       });
// //       const json = await res.json();
// //       if (!json?.success) {
// //         // rollback on failure
// //         setFollowingMap((prev) => {
// //           const copy = { ...prev };
// //           if (currentlyFollowing) copy[targetId] = true; else delete copy[targetId];
// //           return copy;
// //         });
// //         Alert.alert("Action failed", json?.message || "Could not update follow state");
// //       }
// //     } catch (err) {
// //       // rollback on network error
// //       setFollowingMap((prev) => {
// //         const copy = { ...prev };
// //         if (currentlyFollowing) copy[targetId] = true; else delete copy[targetId];
// //         return copy;
// //       });
// //       Alert.alert("Network error", "Could not reach server");
// //     } finally {
// //       setLoadingActionMap((s) => {
// //         const copy = { ...s };
// //         delete copy[targetId];
// //         return copy;
// //       });
// //     }
// //   };

// //   const handleOpenChat = (item) => {
// //     navigation.navigate("Channel", { contact: item });
// //   };

// //   // filter messages on query (simple local filter for demo)
// //   const data = MESSAGES.filter((m) => {
// //     if (!query) return true;
// //     const q = query.trim().toLowerCase();
// //     return (m.name + " " + m.message).toLowerCase().includes(q);
// //   });

// //   return (
// //     <View style={[styles.root, { paddingTop: androidTopPad }]}>
// //       <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
// //       <SafeAreaView style={styles.safe} edges={["top", "left", "right", "bottom"]}>
// //         <View style={styles.container}>
// //           {/* HEADER */}
// //           <View style={styles.headerRow}>
// //             <View style={styles.titleRow}>
// //               <Text style={styles.title}>Messages</Text>
// //               <View style={styles.badge}><Text style={styles.badgeText}>15</Text></View>
// //             </View>

// //             <View style={styles.headerButtons}>
// //               <TouchableOpacity style={styles.headerIconButton}><PeopleIcon /></TouchableOpacity>
// //               <TouchableOpacity style={styles.headerIconButton}><MoreIcon /></TouchableOpacity>
// //             </View>
// //           </View>

// //           {/* SEARCH */}
// //           <View style={styles.searchRow}>
// //             <View style={styles.searchBox}>
// //               <View style={styles.searchIconWrap}><SearchIcon /></View>
// //               <TextInput
// //                 placeholder="Search nexus, friends, messages..."
// //                 placeholderTextColor="#9BA6B6"
// //                 style={styles.searchInput}
// //                 value={query}
// //                 onChangeText={setQuery}
// //                 returnKeyType="search"
// //               />
// //             </View>

// //             <TouchableOpacity style={styles.filterBtn}>
// //               <Text style={styles.filterText}>Filter</Text>
// //             </TouchableOpacity>
// //           </View>

// //           {/* indicator while fetching who you follow */}
// //           {loadingFollowing && (
// //             <View style={styles.loadingFollowing}>
// //               <ActivityIndicator size="small" color="#2E5BFF" />
// //               <Text style={styles.loadingFollowingText}>Loading follows...</Text>
// //             </View>
// //           )}

// //           {/* LIST */}
// //           <FlatList
// //             data={data}
// //             keyExtractor={(item) => item.id}
// //             renderItem={({ item }) => (
// //               <MessageItem
// //                 item={item}
// //                 onPress={() => handleOpenChat(item)}
// //                 followingMap={followingMap}
// //                 onToggleFollow={toggleFollow}
// //                 loadingAction={!!loadingActionMap[item.userId]}
// //               />
// //             )}
// //             contentContainerStyle={styles.listContent}
// //             showsVerticalScrollIndicator={false}
// //             ListEmptyComponent={<View style={{ padding: 24 }}><Text style={{ color: '#9CA3AF' }}>No messages</Text></View>}
// //           />
// //         </View>
// //       </SafeAreaView>
// //     </View>
// //   );
// // }

// // /* --------- Styles (polished) --------- */
// // const styles = StyleSheet.create({
// //   root: { flex: 1, backgroundColor: "#020617" },
// //   safe: { flex: 1, backgroundColor: "#020617" },
// //   container: { flex: 1, backgroundColor: "#020617", paddingHorizontal: 20, paddingTop: 8 },

// //   /* header */
// //   headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
// //   titleRow: { flexDirection: "row", alignItems: "center" },
// //   title: { fontSize: 22, color: "#FFFFFF", fontWeight: "700" },
// //   badge: { marginLeft: 10, minWidth: 24, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 999, backgroundColor: "#EF4444", alignItems: "center", justifyContent: "center" },
// //   badgeText: { fontSize: 12, color: "#FFFFFF", fontWeight: "700" },
// //   headerButtons: { flexDirection: "row", alignItems: "center" },
// //   headerIconButton: {
// //     width: 38,
// //     height: 38,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: "rgba(255,255,255,0.04)",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "rgba(255,255,255,0.02)",
// //     marginLeft: 10
// //   },

// //   /* search */
// //   searchRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
// //   searchBox: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     flex: 1,
// //     backgroundColor: "rgba(255,255,255,0.02)",
// //     borderRadius: 999,
// //     borderWidth: 1,
// //     borderColor: "rgba(69,92,255,0.14)",
// //     height: 44,
// //     paddingHorizontal: 12,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 6 },
// //     shadowOpacity: 0.12,
// //     shadowRadius: 12,
// //     elevation: 4
// //   },
// //   searchIconWrap: { marginRight: 8 },
// //   searchInput: { flex: 1, color: "#E2E8F0", fontSize: 14, paddingVertical: 0 },
// //   filterBtn: { marginLeft: 12 },
// //   filterText: { color: "#7EA0FF", fontSize: 13, fontWeight: "600" },

// //   loadingFollowing: { padding: 10, alignItems: "center", flexDirection: "row", gap: 8 },
// //   loadingFollowingText: { color: "#9CA3AF", marginLeft: 8 },

// //   /* list */
// //   listContent: { paddingBottom: Platform.OS === "ios" ? 40 : 24 },

// //   itemOuterWrap: { marginBottom: 12 },

// //   /* highlighted card (gradient border + inner dark card) */
// //   highlightBorder: {
// //     borderRadius: 16,
// //     padding: 1.5,
// //   },
// //   highlightInner: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "#071022",
// //     borderRadius: 14,
// //     paddingHorizontal: 12,
// //     paddingVertical: 10,
// //   },

// //   /* message row */
// //   messageRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "transparent",
// //     paddingHorizontal: 6,
// //     paddingVertical: 6,
// //     borderRadius: 12
// //   },

// //   avatar: {
// //     width: 52,
//     height: 52,
//     borderRadius: 14,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.12,
//     shadowRadius: 10,
//     elevation: 3
//   },
//   avatarText: { color: "#FFFFFF", fontWeight: "700", fontSize: 18 },

//   messageTextContainer: { flex: 1, marginRight: 8 },
//   nameText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
//   messageText: { color: "#DDE9FF", fontSize: 13, marginTop: 4 },
//   messageSubText: { color: "#8D9BB0", fontSize: 13, marginTop: 4 },

//   rightCol: { alignItems: "flex-end", justifyContent: "center" },
//   timeText: { color: "#8D9BB0", fontSize: 12, marginBottom: 8 },

//   followBtn: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 999,
//     borderWidth: 1,
//     borderColor: "#2E5BFF",
//     backgroundColor: "transparent",
//     alignItems: "center",
//     justifyContent: "center",
//     minWidth: 82,
//   },
//   followBtnActive: {
//     backgroundColor: "#2E5BFF",
//     borderColor: "transparent",
//   },
//   followBtnText: { color: "#2E5BFF", fontWeight: "700", fontSize: 13 },
//   followBtnTextActive: { color: "#fff" },
// });
// import React, { useEffect, useState, useCallback } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   Platform,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import Svg, { Path, Circle } from "react-native-svg";

// /* --- Dummy Data --- */
// const MESSAGES = [
//   { id: "1", name: "Perfecto", message: "You: https://discord.gg/KH3g", time: "2d", avatarColor: "#326BFF", userId: "u1" },
//   { id: "2", name: "Asha", message: "hey — check this out", time: "2d", avatarColor: "#37C8FF", userId: "u2" },
//   { id: "3", name: "Ravi", message: "new guide uploaded", time: "2d", avatarColor: "#00E37D", userId: "u3" },
//   { id: "4", name: "Maya", message: "Let's collab", time: "4d", avatarColor: "#FF37EC", userId: "u4" },
//   { id: "5", name: "Leo", message: "party tonight", time: "12d", avatarColor: "#37F0FF", userId: "u5" },
// ];

// /* Icons */
// const SearchIcon = ({ size = 16 }) => (
//   <Svg width={size} height={size} viewBox="0 0 24 24">
//     <Path
//       d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L18.5 20 20 18.5 15.5 14zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
//       fill="#64748B"
//     />
//   </Svg>
// );

// /* Message Item Component */
// const MessageItem = ({ item, onPress, isActive }) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       onPress={onPress}
//       style={[styles.itemContainer, isActive && styles.itemActive]}
//     >
//       <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
//         <Text style={styles.avatarText}>{item.name[0]}</Text>
//       </View>

//       <View style={styles.textCol}>
//         <Text style={styles.nameText}>{item.name}</Text>
//         <Text style={styles.messageText} numberOfLines={1}>
//           {item.message}
//         </Text>
//       </View>

//       <Text style={styles.timeText}>{item.time}</Text>
//     </TouchableOpacity>
//   );
// };

// /* Main Screen */
// export default function ChatChannelScreen({ navigation }) {
//   const insets = useSafeAreaInsets();

//   const [query, setQuery] = useState("");
//   const [activeId, setActiveId] = useState(null); // <-- highlight state

//   const filtered = MESSAGES.filter((m) => {
//     if (!query) return true;
//     return (m.name + " " + m.message).toLowerCase().includes(query.toLowerCase());
//   });

//   const onSelect = (item) => {
//     setActiveId(item.id); // highlight selected
//     navigation.navigate("Channel", { contact: item });
//   };

//   return (
//     <View style={styles.root}>
//       <SafeAreaView style={styles.safe}>
//         <View style={styles.container}>
//           {/* Header */}
//           <Text style={styles.title}>Messages</Text>

//           {/* Search */}
//           <View style={styles.searchRow}>
//             <View style={styles.searchBox}>
//               <SearchIcon />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search messages..."
//                 placeholderTextColor="#9BA6B6"
//                 value={query}
//                 onChangeText={setQuery}
//               />
//             </View>
//           </View>

//           {/* List */}
//           <FlatList
//             data={filtered}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <MessageItem
//                 item={item}
//                 onPress={() => onSelect(item)}
//                 isActive={activeId === item.id}
//               />
//             )}
//             contentContainerStyle={{ paddingBottom: 40 }}
//           />
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// }

// /* Styles */
// const styles = StyleSheet.create({
//   root: { flex: 1, backgroundColor: "#020617" },
//   safe: { flex: 1 },
//   container: { flex: 1, padding: 20 },

//   title: { fontSize: 22, color: "#fff", fontWeight: "700", marginBottom: 20 },

//   /* Search */
//   searchRow: { marginBottom: 20 },
//   searchBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "rgba(255,255,255,0.08)",
//     borderRadius: 50,
//     paddingHorizontal: 12,
//     height: 44,
//   },
//   searchInput: { flex: 1, marginLeft: 8, color: "#E2E8F0" },

//   /* List Item */
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12,
//     marginBottom: 12,
//     backgroundColor: "rgba(255,255,255,0.02)",
//     borderRadius: 14,
//   },
//   itemActive: {
//     backgroundColor: "#1E3A8A", // highlight blue
//     borderWidth: 1,
//     borderColor: "#3B82F6",
//   },

//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 14,
//     marginRight: 12,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   avatarText: { color: "#fff", fontSize: 18, fontWeight: "700" },

//   textCol: { flex: 1 },
//   nameText: { color: "#fff", fontSize: 15, fontWeight: "600" },
//   messageText: { color: "#9CA3AF", fontSize: 13, marginTop: 4 },

//   timeText: { color: "#9CA3AF", fontSize: 12 },
// });
import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path, Circle } from "react-native-svg";

/* --- Dummy Data --- */
const MESSAGES = [
  { id: "1", name: "Perfecto", message: "You: https://discord.gg/KH3g", time: "2d", avatarColor: "#326BFF", userId: "u1" },
  { id: "2", name: "Asha", message: "hey — check this out", time: "2d", avatarColor: "#37C8FF", userId: "u2" },
  { id: "3", name: "Ravi", message: "new guide uploaded", time: "2d", avatarColor: "#00E37D", userId: "u3" },
  { id: "4", name: "Maya", message: "Let's collab", time: "4d", avatarColor: "#FF37EC", userId: "u4" },
  { id: "5", name: "Leo", message: "party tonight", time: "12d", avatarColor: "#37F0FF", userId: "u5" },
];

/* Icons */
const SearchIcon = ({ size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L18.5 20 20 18.5 15.5 14zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
      fill="#64748B"
    />
  </Svg>
);

const PeopleIcon = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path
      d="M16 11C18.2091 11 20 9.20914 20 7C20 4.79086 18.2091 3 16 3C13.7909 3 12 4.79086 12 7C12 9.20914 13.7909 11 16 11Z"
      fill="#fff"
    />
    <Path
      d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z"
      fill="#fff"
    />
    <Path
      d="M8 13C4.68629 13 2 15.6863 2 19V20H14V19C14 15.6863 11.3137 13 8 13Z"
      fill="#fff"
    />
    <Path
      d="M16 13C15.3677 13 14.7574 13.1029 14.1844 13.2914C15.9076 14.7667 17 16.7553 17 19V20H22V19C22 15.6863 19.3137 13 16 13Z"
      fill="#fff"
    />
  </Svg>
);

const MenuDots = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="#fff">
    <Circle cx="5" cy="12" r="2" />
    <Circle cx="12" cy="12" r="2" />
    <Circle cx="19" cy="12" r="2" />
  </Svg>
);

/* Message Item Component */
const MessageItem = ({ item, onPress, isActive }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.itemContainer, isActive && styles.itemActive]}
    >
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>

      <View style={styles.textCol}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.message}
        </Text>
      </View>

      <Text style={styles.timeText}>{item.time}</Text>
    </TouchableOpacity>
  );
};

/* Main Screen */
export default function ChatChannelScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);

  const filtered = MESSAGES.filter((m) => {
    if (!query) return true;
    return (m.name + " " + m.message).toLowerCase().includes(query.toLowerCase());
  });

  const onSelect = (item) => {
    setActiveId(item.id);
    navigation.navigate("Channel", { contact: item });
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>

          {/* HEADER WITH ICONS */}
          <View style={styles.headerRow}>
            <Text style={styles.title}>Messages</Text>

            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconBtn}>
                <PeopleIcon />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconBtn}>
                <MenuDots />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search + Filter */}
          <View style={styles.searchRow}>
            <View style={styles.searchBoxBlue}>
              <SearchIcon />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#94A3B8"
                value={query}
                onChangeText={setQuery}
              />
            </View>

            <Text style={styles.filterText}>Filter</Text>
          </View>

          {/* List */}
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MessageItem
                item={item}
                onPress={() => onSelect(item)}
                isActive={activeId === item.id}
              />
            )}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#020617" },
  safe: { flex: 1 },
  container: { flex: 1, padding: 20 },

  /* Header */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: { fontSize: 22, color: "#fff", fontWeight: "700" },

  headerIcons: { flexDirection: "row", gap: 12 },

  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2952CC",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Search */
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  searchBoxBlue: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E3A8A",
    borderRadius: 50,
    paddingHorizontal: 12,
    height: 44,
    flex: 1,
  },

  filterText: {
    marginLeft: 10,
    color: "#94A3B8",
    fontSize: 14,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#E2E8F0",
  },

  /* List Item */
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: 14,
  },
  itemActive: {
    backgroundColor: "#1E3A8A",
    borderWidth: 1,
    borderColor: "#3B82F6",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 14,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#fff", fontSize: 18, fontWeight: "700" },

  textCol: { flex: 1 },
  nameText: { color: "#fff", fontSize: 15, fontWeight: "600" },
  messageText: { color: "#9CA3AF", fontSize: 13, marginTop: 4 },

  timeText: { color: "#9CA3AF", fontSize: 12 },
});

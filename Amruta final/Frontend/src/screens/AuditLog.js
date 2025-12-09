// // // AuditLogScreen.js
// // import React, { useState, useRef } from "react";
// // import {
// //   SafeAreaView,
// //   View,
// //   Text,
// //   StyleSheet,
// //   Dimensions,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   Animated,
// //   Easing,
// //   Platform,
// //   StatusBar,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";

// // const { width, height } = Dimensions.get("window");

// // // Sample data — replace with your real data
// // const SAMPLE = Array.from({ length: 10 }).map((_, i) => ({
// //   id: String(i + 1),
// //   username: "!7SUII_Notashish15",
// //   nickname: "Sussichlan",
// //   time: "Last Wednesday at 3:50 AM",
// //   avatarColor: i % 2 === 0 ? "#FFB6C7" : "#8EEBD8",
// //   actions: [
// //     "Removed their nickname of Sussichlan",
// //     "Removed their nickname of Sussichlan",
// //     "Removed their nickname of Sussichlan",
// //   ],
// // }));

// // export default function AuditLogScreen({ navigation }) {
// //   const [query, setQuery] = useState("");
// //   const [expandedId, setExpandedId] = useState(null);

// //   // For animated chevron rotation per item we store refs in a map
// //   const rotateMap = useRef({}).current;

// //   const toggleExpand = (id) => {
// //     // animate rotation
// //     if (!rotateMap[id]) rotateMap[id] = new Animated.Value(0);
// //     const val = expandedId === id ? 0 : 1;
// //     Animated.timing(rotateMap[id], {
// //       toValue: val,
// //       duration: 200,
// //       easing: Easing.inOut(Easing.ease),
// //       useNativeDriver: true,
// //     }).start();

// //     setExpandedId((prev) => (prev === id ? null : id));
// //   };

// //   const filtered = SAMPLE.filter((item) =>
// //     `${item.username} ${item.nickname}`.toLowerCase().includes(query.toLowerCase())
// //   );

// //   const renderItem = ({ item }) => {
// //     const isExpanded = expandedId === item.id;
// //     if (!rotateMap[item.id]) rotateMap[item.id] = new Animated.Value(isExpanded ? 1 : 0);

// //     const rotate = rotateMap[item.id].interpolate({
// //       inputRange: [0, 1],
// //       outputRange: ["0deg", "180deg"],
// //     });

// //     return (
// //       <View style={styles.cardWrap}>
// //         <TouchableOpacity
// //           activeOpacity={0.9}
// //           onPress={() => toggleExpand(item.id)}
// //           style={styles.card}
// //         >
// //           <View style={styles.left}>
// //             <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
// //               <Text style={styles.avatarInitial}>{item.nickname?.[0] || "U"}</Text>
// //             </View>
// //             <View style={styles.titleCol}>
// //               <View style={{ flexDirection: "row", alignItems: "center" }}>
// //                 <Text style={styles.usernameText}>{item.username}</Text>
// //                 <View style={styles.dot} />
// //                 <Text style={styles.nickText}>{item.nickname}</Text>
// //               </View>
// //               <Text style={styles.timeText}>{item.time}</Text>
// //             </View>
// //           </View>

// //           <Animated.View style={{ transform: [{ rotate }] }}>
// //             <Ionicons name="chevron-down" size={18} color="#CFE0FF" />
// //           </Animated.View>
// //         </TouchableOpacity>

// //         {isExpanded && (
// //           <View style={styles.expandArea}>
// //             {/* left vertical connector and bullet list */}
// //             <View style={styles.connectorArea}>
// //               <View style={styles.connectorLine} />
// //               <View style={styles.connectorBubbleTop} />
// //             </View>

// //             <View style={styles.expandList}>
// //               {item.actions.map((a, idx) => (
// //                 <View key={idx} style={styles.expandRow}>
// //                   <View style={styles.stepNumWrap}>
// //                     <Text style={styles.stepNum}>{idx + 1}.</Text>
// //                   </View>
// //                   <View style={styles.expandTextWrap}>
// //                     <Text style={styles.expandText}>{a}</Text>
// //                   </View>
// //                 </View>
// //               ))}
// //             </View>
// //           </View>
// //         )}
// //       </View>
// //     );
// //   };

// //   return (
// //     <SafeAreaView style={styles.safe}>
// //       <StatusBar barStyle="light-content" />
// //       <View style={styles.container}>
// //         {/* Header */}
// //         <View style={styles.header}>
// //           <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.headerIcon}>
// //             <Ionicons name="arrow-back" size={20} color="#CFE0FF" />
// //           </TouchableOpacity>
// //           <Text style={styles.headerTitle}>Audit Log</Text>
// //           <TouchableOpacity style={styles.headerIcon} onPress={() => { /* filter action */ }}>
// //             <Text style={styles.filterText}>Filter</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Search bar */}
// //         <View style={styles.searchRow}>
// //           <View style={styles.searchBox}>
// //             <Ionicons name="search" size={18} color="rgba(207,224,255,0.5)" style={{ marginRight: 8 }} />
// //             <TextInput
// //               style={styles.searchInput}
// //               placeholder="Search Members"
// //               placeholderTextColor="rgba(207,224,255,0.32)"
// //               value={query}
// //               onChangeText={setQuery}
// //             />
// //           </View>
// //           <TouchableOpacity style={styles.filterBtn}>
// //             <Ionicons name="options" size={18} color="#CFE0FF" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* List */}
// //         <FlatList
// //           data={filtered}
// //           keyExtractor={(i) => i.id}
// //           renderItem={renderItem}
// //           contentContainerStyle={{ paddingVertical: 18, paddingBottom: 120 }}
// //           showsVerticalScrollIndicator={false}
// //         />
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // /* ---------- styles ---------- */
// // const styles = StyleSheet.create({
// //   safe: {
// //     flex: 1,
// //     backgroundColor: "#050B18",
// //   },
// //   container: {
// //     flex: 1,
// //     paddingHorizontal: 16,
// //     paddingTop: Platform.OS === "android" ? 12 : 8,
// //   },

// //   header: {
// //     height: 56,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   headerIcon: {
// //     width: 44,
// //     height: 44,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   headerTitle: {
// //     color: "#E6EEFF",
// //     fontSize: 16,
// //     fontWeight: "700",
// //   },
// //   filterText: {
// //     color: "rgba(207,224,255,0.72)",
// //     fontSize: 14,
// //   },

// //   searchRow: {
// //     marginTop: 6,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   searchBox: {
// //     flex: 1,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     borderRadius: 14,
// //     paddingHorizontal: 12,
// //     paddingVertical: 10,
// //     backgroundColor: "rgba(7,18,36,0.6)",
// //     borderWidth: 1,
// //     borderColor: "rgba(58,88,160,0.16)",
// //   },
// //   searchInput: {
// //     flex: 1,
// //     color: "#CFE0FF",
// //     fontSize: 14,
// //   },
// //   filterBtn: {
// //     marginLeft: 10,
// //     width: 44,
// //     height: 44,
// //     borderRadius: 10,
// //     backgroundColor: "rgba(11,24,45,0.6)",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     borderWidth: 1,
// //     borderColor: "rgba(58,88,160,0.12)",
// //   },

// //   /* Card */
// //   cardWrap: {
// //     marginTop: 12,
// //   },
// //   card: {
// //     borderRadius: 14,
// //     padding: 12,
// //     backgroundColor: "#3457B1", // base blue for header card (tweak to match image)
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     borderWidth: 1,
// //     borderColor: "rgba(255,255,255,0.06)",
// //     shadowColor: "#001428",
// //     shadowOffset: { width: 0, height: 8 },
// //     shadowOpacity: 0.12,
// //     shadowRadius: 12,
// //     elevation: 5,
// //   },
// //   left: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   avatar: {
// //     width: 44,
// //     height: 44,
// //     borderRadius: 10,
// //     marginRight: 12,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   avatarInitial: {
// //     fontWeight: "700",
// //     color: "#071025",
// //     fontSize: 18,
// //   },
// //   titleCol: {
// //     justifyContent: "center",
// //   },
// //   usernameText: {
// //     color: "#E6EEFF",
// //     fontWeight: "700",
// //     fontSize: 13,
// //   },
// //   dot: {
// //     width: 6,
// //     height: 6,
// //     borderRadius: 3,
// //     backgroundColor: "rgba(255,255,255,0.24)",
// //     marginHorizontal: 8,
// //   },
// //   nickText: {
// //     color: "rgba(255,255,255,0.9)",
// //     fontSize: 13,
// //   },
// //   timeText: {
// //     color: "rgba(255,255,255,0.46)",
// //     fontSize: 11,
// //     marginTop: 2,
// //   },

// //   /* Expand area (list of actions) */
// //   expandArea: {
// //     marginTop: 10,
// //     marginLeft: 10,
// //     marginRight: 6,
// //     flexDirection: "row",
// //     alignItems: "flex-start",
// //   },
// //   connectorArea: {
// //     width: 28,
// //     alignItems: "center",
// //   },
// //   connectorLine: {
// //     width: 2,
// //     flex: 1,
// //     backgroundColor: "rgba(255,255,255,0.08)",
// //     marginTop: 4,
// //     marginBottom: 4,
// //     borderRadius: 1,
// //   },
// //   connectorBubbleTop: {
// //     width: 6,
// //     height: 6,
// //     borderRadius: 3,
// //     backgroundColor: "rgba(255,255,255,0.16)",
// //     marginBottom: 8,
// //   },
// //   expandList: {
// //     flex: 1,
// //     borderRadius: 12,
// //     padding: 10,
// //     backgroundColor: "rgba(7,18,36,0.5)",
// //     borderWidth: 1,
// //     borderColor: "rgba(58,88,160,0.12)",
// //   },
// //   expandRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 8,
// //   },
// //   stepNumWrap: {
// //     width: 28,
// //     alignItems: "flex-start",
// //     marginRight: 6,
// //   },
// //   stepNum: {
// //     color: "rgba(207,224,255,0.7)",
// //     fontWeight: "700",
// //   },
// //   expandTextWrap: {
// //     flex: 1,
// //   },
// //   expandText: {
// //     color: "rgba(207,224,255,0.9)",
// //     fontSize: 13,
// //   },
// // });
// // AuditLogScreen.js
// import React, { useState, useRef, useEffect } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Animated,
//   Easing,
//   Platform,
//   StatusBar,
//   Modal,
// } from "react-native";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// // sample data
// const SAMPLE = Array.from({ length: 10 }).map((_, i) => ({
//   id: String(i + 1),
//   username: "!7SUII_Notashish15",
//   nickname: "Sussichlan",
//   time: "Last Wednesday at 3:50 AM",
//   avatarColor: i % 2 === 0 ? "#FFB6C7" : "#8EEBD8",
//   actions: [
//     "Removed their nickname of Sussichlan",
//     "Removed their nickname of Sussichlan",
//     "Removed their nickname of Sussichlan",
//   ],
// }));

// export default function AuditLogScreen({ navigation }) {
//   const [query, setQuery] = useState("");
//   const [expandedId, setExpandedId] = useState(null);
//   const rotateMap = useRef({}).current;

//   // filter modal
//   const [filterVisible, setFilterVisible] = useState(false);
//   const modalAnim = useRef(new Animated.Value(0)).current; // 0 hidden, 1 shown

//   useEffect(() => {
//     Animated.timing(modalAnim, {
//       toValue: filterVisible ? 1 : 0,
//       duration: 220,
//       easing: Easing.out(Easing.cubic),
//       useNativeDriver: true,
//     }).start();
//   }, [filterVisible]);

//   const toggleExpand = (id) => {
//     if (!rotateMap[id]) rotateMap[id] = new Animated.Value(0);
//     const val = expandedId === id ? 0 : 1;
//     Animated.timing(rotateMap[id], {
//       toValue: val,
//       duration: 200,
//       easing: Easing.inOut(Easing.ease),
//       useNativeDriver: true,
//     }).start();
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   const filtered = SAMPLE.filter((item) =>
//     `${item.username} ${item.nickname}`.toLowerCase().includes(query.toLowerCase())
//   );

//   const renderItem = ({ item }) => {
//     const isExpanded = expandedId === item.id;
//     if (!rotateMap[item.id]) rotateMap[item.id] = new Animated.Value(isExpanded ? 1 : 0);
//     const rotate = rotateMap[item.id].interpolate({ inputRange: [0, 1], outputRange: ["0deg", "180deg"] });

//     return (
//       <View style={styles.cardWrap}>
//         <TouchableOpacity activeOpacity={0.9} onPress={() => toggleExpand(item.id)} style={styles.card}>
//           <View style={styles.left}>
//             <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
//               <Text style={styles.avatarInitial}>{item.nickname?.[0] || "U"}</Text>
//             </View>
//             <View style={styles.titleCol}>
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Text style={styles.usernameText}>{item.username}</Text>
//                 <View style={styles.dot} />
//                 <Text style={styles.nickText}>{item.nickname}</Text>
//               </View>
//               <Text style={styles.timeText}>{item.time}</Text>
//             </View>
//           </View>

//           <Animated.View style={{ transform: [{ rotate }] }}>
//             <Ionicons name="chevron-down" size={18} color="#CFE0FF" />
//           </Animated.View>
//         </TouchableOpacity>

//         {isExpanded && (
//           <View style={styles.expandArea}>
//             <View style={styles.connectorArea}>
//               <View style={styles.connectorLine} />
//               <View style={styles.connectorBubbleTop} />
//             </View>

//             <View style={styles.expandList}>
//               {item.actions.map((a, idx) => (
//                 <View key={idx} style={styles.expandRow}>
//                   <View style={styles.stepNumWrap}>
//                     <Text style={styles.stepNum}>{idx + 1}.</Text>
//                   </View>
//                   <View style={styles.expandTextWrap}>
//                     <Text style={styles.expandText}>{a}</Text>
//                   </View>
//                 </View>
//               ))}
//             </View>
//           </View>
//         )}
//       </View>
//     );
//   };

//   // modal transforms
//   const translateY = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] });
//   const backdropOpacity = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.6] });

//   return (
//     <SafeAreaView style={styles.safe}>
//       <StatusBar barStyle="light-content" />
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.headerIcon}>
//             <Ionicons name="arrow-back" size={20} color="#CFE0FF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Audit Log</Text>
//           <TouchableOpacity style={styles.headerIcon} onPress={() => setFilterVisible(true)}>
//             <Text style={styles.filterText}>Filter</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Search */}
//         <View style={styles.searchRow}>
//           <View style={styles.searchBox}>
//             <Ionicons name="search" size={18} color="rgba(207,224,255,0.5)" style={{ marginRight: 8 }} />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search Members"
//               placeholderTextColor="rgba(207,224,255,0.32)"
//               value={query}
//               onChangeText={setQuery}
//             />
//           </View>

//           <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
//             <Ionicons name="options" size={18} color="#CFE0FF" />
//           </TouchableOpacity>
//         </View>

//         {/* List */}
//         <FlatList
//           data={filtered}
//           keyExtractor={(i) => i.id}
//           renderItem={renderItem}
//           contentContainerStyle={{ paddingVertical: 18, paddingBottom: 160 }}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Filter Modal (slide-up card) */}
//       <Modal visible={filterVisible} transparent animationType="none" onRequestClose={() => setFilterVisible(false)}>
//         <Animated.View style={[modalStyles.backdrop, { opacity: backdropOpacity }]} />
//         <Animated.View
//           style={[
//             modalStyles.card,
//             {
//               transform: [{ translateY }],
//             },
//           ]}
//         >
//           <View style={modalStyles.handle} />

//           <TouchableOpacity style={modalStyles.row} activeOpacity={0.9} onPress={() => { /* open Filter User screen/modal */ }}>
//             <View style={modalStyles.leftRow}>
//               <View style={modalStyles.iconWrap}>
//                 <MaterialCommunityIcons name="account-search-outline" size={18} color="#CFE0FF" />
//               </View>
//               <Text style={modalStyles.rowText}>Filter User</Text>
//             </View>
//             <Ionicons name="chevron-forward" size={18} color="#CFE0FF" />
//           </TouchableOpacity>

//           <TouchableOpacity style={modalStyles.row} activeOpacity={0.9} onPress={() => { /* open Filter Action */ }}>
//             <View style={modalStyles.leftRow}>
//               <View style={modalStyles.iconWrap}>
//                 <Ionicons name="list" size={18} color="#CFE0FF" />
//               </View>
//               <Text style={modalStyles.rowText}>Filter Action</Text>
//             </View>
//             <Ionicons name="chevron-forward" size={18} color="#CFE0FF" />
//           </TouchableOpacity>

//           {/* optional: a cancel/close button */}
//           <TouchableOpacity style={modalStyles.closeBtn} activeOpacity={0.9} onPress={() => setFilterVisible(false)}>
//             <Text style={modalStyles.closeText}>Close</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       </Modal>
//     </SafeAreaView>
//   );
// }

// /* ---------- main styles ---------- */
// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: "#050B18" },
//   container: { flex: 1, paddingHorizontal: 16, paddingTop: Platform.OS === "android" ? 12 : 8 },

//   header: { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   headerIcon: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
//   headerTitle: { color: "#E6EEFF", fontSize: 16, fontWeight: "700" },
//   filterText: { color: "rgba(207,224,255,0.72)", fontSize: 14 },

//   searchRow: { marginTop: 6, flexDirection: "row", alignItems: "center" },
//   searchBox: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 14,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     backgroundColor: "rgba(7,18,36,0.6)",
//     borderWidth: 1,
//     borderColor: "rgba(58,88,160,0.16)",
//   },
//   searchInput: { flex: 1, color: "#CFE0FF", fontSize: 14 },
//   filterBtn: {
//     marginLeft: 10,
//     width: 44,
//     height: 44,
//     borderRadius: 10,
//     backgroundColor: "rgba(11,24,45,0.6)",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: "rgba(58,88,160,0.12)",
//   },

//   /* card list */
//   cardWrap: { marginTop: 12 },
//   card: {
//     borderRadius: 14,
//     padding: 12,
//     backgroundColor: "#3457B1",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.06)",
//     shadowColor: "#001428",
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.12,
//     shadowRadius: 12,
//     elevation: 5,
//   },
//   left: { flexDirection: "row", alignItems: "center" },
//   avatar: { width: 44, height: 44, borderRadius: 10, marginRight: 12, alignItems: "center", justifyContent: "center" },
//   avatarInitial: { fontWeight: "700", color: "#071025", fontSize: 18 },
//   titleCol: { justifyContent: "center" },
//   usernameText: { color: "#E6EEFF", fontWeight: "700", fontSize: 13 },
//   dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.24)", marginHorizontal: 8 },
//   nickText: { color: "rgba(255,255,255,0.9)", fontSize: 13 },
//   timeText: { color: "rgba(255,255,255,0.46)", fontSize: 11, marginTop: 2 },

//   expandArea: { marginTop: 10, marginLeft: 10, marginRight: 6, flexDirection: "row", alignItems: "flex-start" },
//   connectorArea: { width: 28, alignItems: "center" },
//   connectorLine: { width: 2, flex: 1, backgroundColor: "rgba(255,255,255,0.08)", marginTop: 4, marginBottom: 4, borderRadius: 1 },
//   connectorBubbleTop: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.16)", marginBottom: 8 },
//   expandList: { flex: 1, borderRadius: 12, padding: 10, backgroundColor: "rgba(7,18,36,0.5)", borderWidth: 1, borderColor: "rgba(58,88,160,0.12)" },
//   expandRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
//   stepNumWrap: { width: 28, alignItems: "flex-start", marginRight: 6 },
//   stepNum: { color: "rgba(207,224,255,0.7)", fontWeight: "700" },
//   expandTextWrap: { flex: 1 },
//   expandText: { color: "rgba(207,224,255,0.9)", fontSize: 13 },
// });

// /* ---------- modal styles ---------- */
// const modalStyles = StyleSheet.create({
//   backdrop: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "#000",
//     zIndex: 40,
//   },
//   card: {
//     position: "absolute",
//     left: 12,
//     right: 12,
//     bottom: 22,
//     borderRadius: 16,
//     paddingVertical: 14,
//     paddingHorizontal: 12,
//     backgroundColor: "#071129",
//     borderWidth: 1,
//     borderColor: "rgba(58,88,160,0.18)",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 12 },
//     shadowOpacity: 0.28,
//     shadowRadius: 16,
//     elevation: 14,
//     zIndex: 50,
//   },
//   handle: {
//     width: 36,
//     height: 4,
//     borderRadius: 4,
//     backgroundColor: "rgba(255,255,255,0.06)",
//     alignSelf: "center",
//     marginBottom: 8,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 14,
//     paddingHorizontal: 6,
//     borderBottomWidth: 1,
//     borderBottomColor: "rgba(255,255,255,0.03)",
//   },
//   leftRow: { flexDirection: "row", alignItems: "center" },
//   iconWrap: {
//     width: 38,
//     height: 38,
//     borderRadius: 10,
//     backgroundColor: "rgba(47,78,140,0.18)",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },
//   rowText: { color: "#E6EEFF", fontSize: 15, fontWeight: "700" },
//   closeBtn: {
//     marginTop: 12,
//     alignSelf: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 26,
//     borderRadius: 12,
//     backgroundColor: "transparent",
//     borderWidth: 1,
//     borderColor: "rgba(190,200,255,0.06)",
//   },
//   closeText: { color: "#CFE0FF", fontWeight: "700" },
// });



// src/screens/AuditLog.js
import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
  Platform,
  StatusBar,
  Modal,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

// sample data
const SAMPLE = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  username: "!7SUII_Notashish15",
  nickname: "Sussichlan",
  time: "Last Wednesday at 3:50 AM",
  avatarColor: i % 2 === 0 ? "#FFB6C7" : "#8EEBD8",
  actions: [
    "Removed their nickname of Sussichlan",
    "Removed their nickname of Sussichlan",
    "Removed their nickname of Sussichlan",
  ],
}));

export default function AuditLog({ navigation }) {
  const [query, setQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const rotateMap = useRef({}).current;

  // filter modal
  const [filterVisible, setFilterVisible] = useState(false);
  const modalAnim = useRef(new Animated.Value(0)).current; // 0 hidden, 1 shown

  useEffect(() => {
    Animated.timing(modalAnim, {
      toValue: filterVisible ? 1 : 0,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [filterVisible]);

  const toggleExpand = (id) => {
    if (!rotateMap[id]) rotateMap[id] = new Animated.Value(0);
    const val = expandedId === id ? 0 : 1;
    Animated.timing(rotateMap[id], {
      toValue: val,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filtered = SAMPLE.filter((item) =>
    `${item.username} ${item.nickname}`.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isExpanded = expandedId === item.id;
    if (!rotateMap[item.id]) rotateMap[item.id] = new Animated.Value(isExpanded ? 1 : 0);
    const rotate = rotateMap[item.id].interpolate({ inputRange: [0, 1], outputRange: ["0deg", "180deg"] });

    return (
      <View style={styles.cardWrap}>
        <TouchableOpacity activeOpacity={0.95} onPress={() => toggleExpand(item.id)} style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
              <Text style={styles.avatarInitial}>{item.nickname?.[0] || "U"}</Text>
            </View>
            <View style={styles.titleCol}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.usernameText}>{item.username}</Text>
                <View style={styles.dot} />
                <Text style={styles.nickText}>{item.nickname}</Text>
              </View>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>

          <Animated.View style={{ transform: [{ rotate }] }}>
            <Ionicons name="chevron-down" size={18} color="#CFE0FF" />
          </Animated.View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandArea}>
            <View style={styles.connectorArea}>
              <View style={styles.connectorLine} />
              <View style={styles.connectorBubbleTop} />
            </View>

            <View style={styles.expandList}>
              {item.actions.map((a, idx) => (
                <View key={idx} style={styles.expandRow}>
                  <View style={styles.stepNumWrap}>
                    <Text style={styles.stepNum}>{idx + 1}.</Text>
                  </View>
                  <View style={styles.expandTextWrap}>
                    <Text style={styles.expandText}>{a}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    );
  };

  // modal transforms
  const translateY = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] });
  const backdropOpacity = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.6] });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.headerIcon}>
            <Ionicons name="arrow-back" size={20} color="#CFE0FF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Audit Log</Text>
          <TouchableOpacity style={styles.headerIcon} onPress={() => setFilterVisible(true)}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="rgba(207,224,255,0.5)" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Members"
              placeholderTextColor="rgba(207,224,255,0.32)"
              value={query}
              onChangeText={setQuery}
            />
          </View>

          <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterVisible(true)}>
            <Ionicons name="options" size={18} color="#CFE0FF" />
          </TouchableOpacity>
        </View>

        {/* List */}
        <FlatList
          data={filtered}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 18, paddingBottom: 160 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* FILTER MODAL */}
      <Modal visible={filterVisible} transparent animationType="none" onRequestClose={() => setFilterVisible(false)}>
        {/* Backdrop - clickable to close */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setFilterVisible(false)}
          style={modalStyles.backdropTouchable}
        >
          <Animated.View style={[modalStyles.backdrop, { opacity: backdropOpacity }]} />
        </TouchableOpacity>

        {/* Slide-up card */}
        <Animated.View style={[modalStyles.card, { transform: [{ translateY }] }]} pointerEvents="box-none">
          <View style={modalStyles.handle} />

          <TouchableOpacity
            style={modalStyles.row}
            activeOpacity={0.9}
            onPress={() => {
              setFilterVisible(false);
              navigation.navigate("FilterUser");
            }}
          >
            <View style={modalStyles.leftRow}>
              <View style={modalStyles.iconWrap}>
                <MaterialCommunityIcons name="account-search-outline" size={18} color="#CFE0FF" />
              </View>
              <Text style={modalStyles.rowText}>Filter User</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#CFE0FF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={modalStyles.row}
            activeOpacity={0.9}
            onPress={() => {
              setFilterVisible(false);
              navigation.navigate("FilterAction");
            }}
          >
            <View style={modalStyles.leftRow}>
              <View style={modalStyles.iconWrap}>
                <Ionicons name="list" size={18} color="#CFE0FF" />
              </View>
              <Text style={modalStyles.rowText}>Filter Action</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#CFE0FF" />
          </TouchableOpacity>

          <TouchableOpacity style={modalStyles.closeBtn} activeOpacity={0.9} onPress={() => setFilterVisible(false)}>
            <Text style={modalStyles.closeText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    </SafeAreaView>
  );
}

/* ---------- main styles ---------- */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#050B18" },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: Platform.OS === "android" ? 12 : 8 },

  header: { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  headerIcon: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  headerTitle: { color: "#E6EEFF", fontSize: 16, fontWeight: "700" },
  filterText: { color: "rgba(207,224,255,0.72)", fontSize: 14 },

  searchRow: { marginTop: 6, flexDirection: "row", alignItems: "center" },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "rgba(7,18,36,0.6)",
    borderWidth: 1,
    borderColor: "rgba(58,88,160,0.16)",
  },
  searchInput: { flex: 1, color: "#CFE0FF", fontSize: 14 },
  filterBtn: {
    marginLeft: 10,
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "rgba(11,24,45,0.6)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(58,88,160,0.12)",
  },

  /* card list */
  cardWrap: { marginTop: 12 },
  card: {
    borderRadius: 14,
    padding: 12,
    backgroundColor: "#3457B1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    shadowColor: "#001428",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  left: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 44, height: 44, borderRadius: 10, marginRight: 12, alignItems: "center", justifyContent: "center" },
  avatarInitial: { fontWeight: "700", color: "#071025", fontSize: 18 },
  titleCol: { justifyContent: "center" },
  usernameText: { color: "#E6EEFF", fontWeight: "700", fontSize: 13 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.24)", marginHorizontal: 8 },
  nickText: { color: "rgba(255,255,255,0.9)", fontSize: 13 },
  timeText: { color: "rgba(255,255,255,0.46)", fontSize: 11, marginTop: 2 },

  expandArea: { marginTop: 10, marginLeft: 10, marginRight: 6, flexDirection: "row", alignItems: "flex-start" },
  connectorArea: { width: 28, alignItems: "center" },
  connectorLine: { width: 2, flex: 1, backgroundColor: "rgba(255,255,255,0.08)", marginTop: 4, marginBottom: 4, borderRadius: 1 },
  connectorBubbleTop: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.16)", marginBottom: 8 },
  expandList: { flex: 1, borderRadius: 12, padding: 10, backgroundColor: "rgba(7,18,36,0.5)", borderWidth: 1, borderColor: "rgba(58,88,160,0.12)" },
  expandRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  stepNumWrap: { width: 28, alignItems: "flex-start", marginRight: 6 },
  stepNum: { color: "rgba(207,224,255,0.7)", fontWeight: "700" },
  expandTextWrap: { flex: 1 },
  expandText: { color: "rgba(207,224,255,0.9)", fontSize: 13 },
});

/* ---------- modal styles ---------- */
const modalStyles = StyleSheet.create({
  backdropTouchable: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 40,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    zIndex: 40,
  },
  card: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 22,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#071129",
    borderWidth: 1,
    borderColor: "rgba(58,88,160,0.18)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.28,
    shadowRadius: 16,
    elevation: 14,
    zIndex: 50,
  },
  handle: {
    width: 36,
    height: 4,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.06)",
    alignSelf: "center",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.03)",
  },
  leftRow: { flexDirection: "row", alignItems: "center" },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "rgba(47,78,140,0.18)",
    alignItems: "center",
    justifyContent: "center",
  marginRight: 12,
  },
  rowText: { color: "#E6EEFF", fontSize: 15, fontWeight: "700" },
  closeBtn: {
    marginTop: 12,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 12,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(190,200,255,0.06)",
  },
  closeText: { color: "#CFE0FF", fontWeight: "700" },
});

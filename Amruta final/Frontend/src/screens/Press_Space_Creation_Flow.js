// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//    Platform, 
//    Dimensions,

//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// const members = [
//   { id: 1, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
//   { id: 2, name: "Lofi#8008", color: "#8BF1D1" },
//   {
//     id: 3,
//     name: "Max gamer58858, Faysal_gaming143\nDevil Gaming",
//     color: "#F7B5FF",
//   },
//   { id: 4, name: "Gaming Piro Yug", color: "#FFE39A" },
//   { id: 5, name: "SHERNI", color: "#FF9BD4" },
//   { id: 6, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
// ];

// export default function SpaceSettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Background top card */}
//       <View style={styles.topCard} />

   
   

//       {/* Fake status bar row (time + icons) */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons
//             name="cellular"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="wifi"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="battery-full"
//             size={20}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//         </View>
//       </View>

//       {/* Bottom sheet content */}
//       <View style={styles.sheetWrapper}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.sheetScrollContent}
//         >
//           {/* Top action buttons row */}
//           <View style={styles.actionsRow}>
//             <View style={styles.actionItem}>
//               <View style={styles.actionCircle}>
//                 <Ionicons name="add" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Create Space</Text>
//             </View>

//             <View style={styles.actionItem}>
//               <View style={styles.actionCircle}>
//                 <Ionicons name="albums-outline" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Create Category</Text>
//             </View>

//             <View style={styles.actionItem}>
//               <View style={styles.actionCircle}>
//                 <Ionicons name="settings-outline" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Space Settings</Text>
//             </View>
//           </View>

//           {/* Settings items */}
//           <View style={styles.settingsBlock}>
//             <View style={styles.settingsItem}>
//               <Text style={styles.settingsText}>Mark As Read</Text>
//               <Ionicons name="eye-outline" size={20} color="#9FB4FF" />
//             </View>

//             <View style={styles.settingsItem}>
//               <Text style={styles.settingsText}>Mute Space</Text>
//               <Ionicons name="notifications-off-outline" size={20} color="#9FB4FF" />
//             </View>

//             <View style={styles.settingsHeaderRow}>
//               <Text style={styles.settingsHeaderText}>Notification Settings</Text>
//               <Ionicons
//                 name="notifications-outline"
//                 size={20}
//                 color="#9FB4FF"
//               />
//             </View>
//           </View>

//           {/* Members list */}
//           <View style={styles.membersList}>
//             {members.map((m) => (
//               <View key={m.id} style={styles.memberRow}>
//                 <View style={[styles.avatar, { backgroundColor: m.color }]}>
//                   <Text style={styles.avatarInitial}>
//                     {m.name.trim().charAt(0).toUpperCase()}
//                   </Text>
//                 </View>
//                 <View style={styles.memberTextBox}>
//                   <Text style={styles.memberName} numberOfLines={2}>
//                     {m.name}
//                   </Text>
//                 </View>
//                 <View style={styles.sentPill}>
//                   <Text style={styles.sentPillText}>Sent</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const SHEET_TOP = height * 0.22; // how high the bottom sheet starts

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },

//   // big card behind sheet
//   topCard: {
//     position: "absolute",
//     top: height * 0.13,
//     left: width * 0.07,
//     right: width * 0.07,
//     height: height * 0.22,
//     borderRadius: 28,
//     backgroundColor: "#08152B",
//     opacity: 0.95,
//   },

//   // fake status bar at top
//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 20 : 10),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   timeText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   fakeStatusIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   fakeIcon: {
//     marginLeft: 6,
//   },

//   // left floating buttons
//   leftFloatingColumn: {
//     position: "absolute",
//     top: height * 0.2,
//     left: 16,
//     alignItems: "center",
//     zIndex: 10,
//   },
//   fabSmall: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "#1D3359",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   fabBig: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   // bottom sheet wrapper
//   sheetWrapper: {
//     flex: 1,
//     marginTop: SHEET_TOP,
//     paddingHorizontal: 16,
//   },
//   sheetScrollContent: {
//     paddingBottom: 28,
//   },

//   // action buttons row (Create Space / Category / Settings)
//   actionsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     marginBottom: 16,
//   },
//   actionItem: {
//     alignItems: "center",
//     flex: 1,
//   },
//   actionCircle: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   actionLabel: {
//     color: "#FFFFFF",
//     fontSize: 11,
//     textAlign: "center",
//   },

//   // settings block
//   settingsBlock: {
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 18,
//   },
//   settingsItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#07152C",
//     borderRadius: 18,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 10,
//   },
//   settingsText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   settingsHeaderRow: {
//     marginTop: 4,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 4,
//     paddingVertical: 4,
//   },
//   settingsHeaderText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },

//   // members list
//   membersList: {
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   memberRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: "rgba(255,255,255,0.05)",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   avatarInitial: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#161622",
//   },
//   memberTextBox: {
//     flex: 1,
//     paddingRight: 8,
//   },
//   memberName: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   sentPill: {
//     borderRadius: 16,
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     backgroundColor: "#132A5C",
//   },
//   sentPillText: {
//     color: "#9FB4FF",
//     fontSize: 11,
//     fontWeight: "500",
//   },
// });



// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// const members = [
//   { id: 1, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
//   { id: 2, name: "Lofi#8008", color: "#8BF1D1" },
//   {
//     id: 3,
//     name: "Max gamer58858, Faysal_gaming143\nDevil Gaming",
//     color: "#F7B5FF",
//   },
//   { id: 4, name: "Gaming Piro Yug", color: "#FFE39A" },
//   { id: 5, name: "SHERNI", color: "#FF9BD4" },
//   { id: 6, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
// ];

// export default function SpaceSettingsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Background top card */}
//       <View style={styles.topCard} />

//       {/* Fake status bar row (time + icons) */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons
//             name="cellular"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="wifi"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="battery-full"
//             size={20}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//         </View>
//       </View>

//       {/* Bottom sheet content */}
//       <View style={styles.sheetWrapper}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.sheetScrollContent}
//         >
//           {/* Top action buttons row */}
//           <View style={styles.actionsRow}>
//             {/* CREATE SPACE -> Start_a_Space */}
//             <TouchableOpacity
//               style={styles.actionItem}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate("Start_a_Space")}
//             >
//               <View style={styles.actionCircle}>
//                 <Ionicons name="add" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Create Space</Text>
//             </TouchableOpacity>

//             {/* CREATE CATEGORY -> V55 */}
//             <TouchableOpacity
//               style={styles.actionItem}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate("V55")}
//             >
//               <View style={styles.actionCircle}>
//                 <Ionicons name="albums-outline" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Create Category</Text>
//             </TouchableOpacity>

//             {/* SPACE SETTINGS -> Space_Settings */}
//             <TouchableOpacity
//               style={styles.actionItem}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate("Space_Settings")}
//             >
//               <View style={styles.actionCircle}>
//                 <Ionicons name="settings-outline" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Space Settings</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Settings items */}
//           <View style={styles.settingsBlock}>
//             <View style={styles.settingsItem}>
//               <Text style={styles.settingsText}>Mark As Read</Text>
//               <Ionicons name="eye-outline" size={20} color="#9FB4FF" />
//             </View>

//             <View style={styles.settingsItem}>
//               <Text style={styles.settingsText}>Mute Space</Text>
//               <Ionicons
//                 name="notifications-off-outline"
//                 size={20}
//                 color="#9FB4FF"
//               />
//             </View>

//             <View style={styles.settingsHeaderRow}>
//               <Text style={styles.settingsHeaderText}>
//                 Notification Settings
//               </Text>
//               <Ionicons
//                 name="notifications-outline"
//                 size={20}
//                 color="#9FB4FF"
//               />
//             </View>
//           </View>

//           {/* Members list */}
//           <View style={styles.membersList}>
//             {members.map((m) => (
//               <View key={m.id} style={styles.memberRow}>
//                 <View style={[styles.avatar, { backgroundColor: m.color }]}>
//                   <Text style={styles.avatarInitial}>
//                     {m.name.trim().charAt(0).toUpperCase()}
//                   </Text>
//                 </View>
//                 <View style={styles.memberTextBox}>
//                   <Text style={styles.memberName} numberOfLines={2}>
//                     {m.name}
//                   </Text>
//                 </View>
//                 <View style={styles.sentPill}>
//                   <Text style={styles.sentPillText}>Sent</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const SHEET_TOP = height * 0.22; // how high the bottom sheet starts

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },

//   // big card behind sheet
//   topCard: {
//     position: "absolute",
//     top: height * 0.13,
//     left: width * 0.07,
//     right: width * 0.07,
//     height: height * 0.22,
//     borderRadius: 28,
//     backgroundColor: "#08152B",
//     opacity: 0.95,
//   },

//   // fake status bar at top
//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 20 : 10),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   timeText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   fakeStatusIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   fakeIcon: {
//     marginLeft: 6,
//   },

//   // left floating buttons (if needed later)
//   leftFloatingColumn: {
//     position: "absolute",
//     top: height * 0.2,
//     left: 16,
//     alignItems: "center",
//     zIndex: 10,
//   },
//   fabSmall: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "#1D3359",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   fabBig: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   // bottom sheet wrapper
//   sheetWrapper: {
//     flex: 1,
//     marginTop: SHEET_TOP,
//     paddingHorizontal: 16,
//   },
//   sheetScrollContent: {
//     paddingBottom: 28,
//   },

//   // action buttons row (Create Space / Category / Settings)
//   actionsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     marginBottom: 16,
//   },
//   actionItem: {
//     alignItems: "center",
//     flex: 1,
//   },
//   actionCircle: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   actionLabel: {
//     color: "#FFFFFF",
//     fontSize: 11,
//     textAlign: "center",
//   },

//   // settings block
//   settingsBlock: {
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 18,
//   },
//   settingsItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#07152C",
//     borderRadius: 18,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 10,
//   },
//   settingsText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   settingsHeaderRow: {
//     marginTop: 4,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 4,
//     paddingVertical: 4,
//   },
//   settingsHeaderText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },

//   // members list
//   membersList: {
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   memberRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: "rgba(255,255,255,0.05)",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   avatarInitial: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#161622",
//   },
//   memberTextBox: {
//     flex: 1,
//     paddingRight: 8,
//   },
//   memberName: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   sentPill: {
//     borderRadius: 16,
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     backgroundColor: "#132A5C",
//   },
//   sentPillText: {
//     color: "#9FB4FF",
//     fontSize: 11,
//     fontWeight: "500",
//   },
// });
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// const members = [
//   { id: 1, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
//   { id: 2, name: "Lofi#8008", color: "#8BF1D1" },
//   {
//     id: 3,
//     name: "Max gamer58858, Faysal_gaming143\nDevil Gaming",
//     color: "#F7B5FF",
//   },
//   { id: 4, name: "Gaming Piro Yug", color: "#FFE39A" },
//   { id: 5, name: "SHERNI", color: "#FF9BD4" },
//   { id: 6, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
// ];

// export default function SpaceSettingsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Background top card */}
//       <View style={styles.topCard} />

//       {/* Fake status bar row (time + icons) */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons
//             name="cellular"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="wifi"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="battery-full"
//             size={20}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//         </View>
//       </View>

//       {/* Bottom sheet content */}
//       <View style={styles.sheetWrapper}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.sheetScrollContent}
//         >
//           {/* Top action buttons row */}
//           <View style={styles.actionsRow}>
//             {/* CREATE SPACE -> Start_a_Space */}
//             <TouchableOpacity
//               style={styles.actionItem}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate("Start_a_Space")}
//             >
//               <View style={styles.actionCircle}>
//                 <Ionicons name="add" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Create Space</Text>
//             </TouchableOpacity>

//             {/* CREATE CATEGORY -> V55 */}
//             <TouchableOpacity
//               style={styles.actionItem}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate("V55")}
//             >
//               <View style={styles.actionCircle}>
//                 <Ionicons name="albums-outline" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Create Category</Text>
//             </TouchableOpacity>

//             {/* SPACE SETTINGS -> Space_Settings */}
//             <TouchableOpacity
//               style={styles.actionItem}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate("Space_Settings")}
//             >
//               <View style={styles.actionCircle}>
//                 <Ionicons name="settings-outline" size={22} color="#ffffff" />
//               </View>
//               <Text style={styles.actionLabel}>Space Settings</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Settings items */}
//           <View style={styles.settingsBlock}>
//             <View style={styles.settingsItem}>
//               <Text style={styles.settingsText}>Mark As Read</Text>
//               <Ionicons name="eye-outline" size={20} color="#9FB4FF" />
//             </View>

//             <View style={styles.settingsItem}>
//               <Text style={styles.settingsText}>Mute Space</Text>
//               <Ionicons
//                 name="notifications-off-outline"
//                 size={20}
//                 color="#9FB4FF"
//               />
//             </View>

//             <View style={styles.settingsHeaderRow}>
//               <Text style={styles.settingsHeaderText}>
//                 Notification Settings
//               </Text>
//               <Ionicons
//                 name="notifications-outline"
//                 size={20}
//                 color="#9FB4FF"
//               />
//             </View>
//           </View>

//           {/* Members list */}
//           <View style={styles.membersList}>
//             {members.map((m) => (
//               <View key={m.id} style={styles.memberRow}>
//                 <View style={[styles.avatar, { backgroundColor: m.color }]}>
//                   <Text style={styles.avatarInitial}>
//                     {m.name.trim().charAt(0).toUpperCase()}
//                   </Text>
//                 </View>
//                 <View style={styles.memberTextBox}>
//                   <Text style={styles.memberName} numberOfLines={2}>
//                     {m.name}
//                   </Text>
//                 </View>
//                 <View style={styles.sentPill}>
//                   <Text style={styles.sentPillText}>Sent</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const SHEET_TOP = height * 0.22; // how high the bottom sheet starts

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },

//   // big card behind sheet
//   topCard: {
//     position: "absolute",
//     top: height * 0.13,
//     left: width * 0.07,
//     right: width * 0.07,
//     height: height * 0.22,
//     borderRadius: 28,
//     backgroundColor: "#08152B",
//     opacity: 0.95,
//   },

//   // fake status bar at top
//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 20 : 10),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   timeText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   fakeStatusIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   fakeIcon: {
//     marginLeft: 6,
//   },

//   // left floating buttons (if needed later)
//   leftFloatingColumn: {
//     position: "absolute",
//     top: height * 0.2,
//     left: 16,
//     alignItems: "center",
//     zIndex: 10,
//   },
//   fabSmall: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "#1D3359",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   fabBig: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   // bottom sheet wrapper
//   sheetWrapper: {
//     flex: 1,
//     marginTop: SHEET_TOP,
//     paddingHorizontal: 16,
//   },
//   sheetScrollContent: {
//     paddingBottom: 28,
//   },

//   // action buttons row (Create Space / Category / Settings)
//   actionsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     marginBottom: 16,
//   },
//   actionItem: {
//     alignItems: "center",
//     flex: 1,
//   },
//   actionCircle: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   actionLabel: {
//     color: "#FFFFFF",
//     fontSize: 11,
//     textAlign: "center",
//   },

//   // settings block
//   settingsBlock: {
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 18,
//   },
//   settingsItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#07152C",
//     borderRadius: 18,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 10,
//   },
//   settingsText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   settingsHeaderRow: {
//     marginTop: 4,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 4,
//     paddingVertical: 4,
//   },
//   settingsHeaderText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },

//   // members list
//   membersList: {
//     backgroundColor: "#050B18",
//     borderRadius: 28,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   memberRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: "rgba(255,255,255,0.05)",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   avatarInitial: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#161622",
//   },
//   memberTextBox: {
//     flex: 1,
//     paddingRight: 8,
//   },
//   memberName: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   sentPill: {
//     borderRadius: 16,
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     backgroundColor: "#132A5C",
//   },
//   sentPillText: {
//     color: "#9FB4FF",
//     fontSize: 11,
//     fontWeight: "500",
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const members = [
  { id: 1, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
  { id: 2, name: "Lofi#8008", color: "#8BF1D1" },
  {
    id: 3,
    name: "Max gamer58858, Faysal_gaming143\nDevil Gaming",
    color: "#F7B5FF",
  },
  { id: 4, name: "Gaming Piro Yug", color: "#FFE39A" },
  { id: 5, name: "SHERNI", color: "#FF9BD4" },
  { id: 6, name: "! 7 SUII _Notashish15", color: "#F9C4D2" },
];

export default function SpaceSettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background top card */}
      <View style={styles.topCard} />

      {/* Fake status bar row (time + icons) */}
      <View style={styles.fakeStatusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.fakeStatusIcons}>
          <Ionicons
            name="cellular"
            size={16}
            color="#ffffff"
            style={styles.fakeIcon}
          />
          <Ionicons
            name="wifi"
            size={16}
            color="#ffffff"
            style={styles.fakeIcon}
          />
          <Ionicons
            name="battery-full"
            size={20}
            color="#ffffff"
            style={styles.fakeIcon}
          />
        </View>
      </View>

      {/* Bottom sheet content */}
      <View style={styles.sheetWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sheetScrollContent}
        >
          {/* Top action buttons row */}
          <View style={styles.actionsRow}>
            {/* CREATE SPACE -> Start_a_Space */}
            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Start_a_Space")}
            >
              <View style={styles.actionCircle}>
                <Ionicons name="add" size={22} color="#ffffff" />
              </View>
              <Text style={styles.actionLabel}>Create Space</Text>
            </TouchableOpacity>

            {/* CREATE CATEGORY -> create_Category */}
            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("create_Category")}
            >
              <View style={styles.actionCircle}>
                <Ionicons name="albums-outline" size={22} color="#ffffff" />
              </View>
              <Text style={styles.actionLabel}>Create Category</Text>
            </TouchableOpacity>

            {/* SPACE SETTINGS -> Space_Settings */}
            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Space_Settings")}
            >
              <View style={styles.actionCircle}>
                <Ionicons name="settings-outline" size={22} color="#ffffff" />
              </View>
              <Text style={styles.actionLabel}>Space Settings</Text>
            </TouchableOpacity>
          </View>

          {/* Settings items */}
          <View style={styles.settingsBlock}>
            <View style={styles.settingsItem}>
              <Text style={styles.settingsText}>Mark As Read</Text>
              <Ionicons name="eye-outline" size={20} color="#9FB4FF" />
            </View>

            <View style={styles.settingsItem}>
              <Text style={styles.settingsText}>Mute Space</Text>
              <Ionicons
                name="notifications-off-outline"
                size={20}
                color="#9FB4FF"
              />
            </View>

            <View style={styles.settingsHeaderRow}>
              <Text style={styles.settingsHeaderText}>
                Notification Settings
              </Text>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#9FB4FF"
              />
            </View>
          </View>

          {/* Members list */}
          <View style={styles.membersList}>
            {members.map((m) => (
              <View key={m.id} style={styles.memberRow}>
                <View style={[styles.avatar, { backgroundColor: m.color }]}>
                  <Text style={styles.avatarInitial}>
                    {m.name.trim().charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.memberTextBox}>
                  <Text style={styles.memberName} numberOfLines={2}>
                    {m.name}
                  </Text>
                </View>
                <View style={styles.sentPill}>
                  <Text style={styles.sentPillText}>Sent</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const SHEET_TOP = height * 0.22; // how high the bottom sheet starts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B18",
  },

  // big card behind sheet
  topCard: {
    position: "absolute",
    top: height * 0.13,
    left: width * 0.07,
    right: width * 0.07,
    height: height * 0.22,
    borderRadius: 28,
    backgroundColor: "#08152B",
    opacity: 0.95,
  },

  // fake status bar at top
  fakeStatusBar: {
    marginTop: 8 + (Platform.OS === "ios" ? 20 : 10),
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  fakeStatusIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  fakeIcon: {
    marginLeft: 6,
  },

  // left floating buttons (if needed later)
  leftFloatingColumn: {
    position: "absolute",
    top: height * 0.2,
    left: 16,
    alignItems: "center",
    zIndex: 10,
  },
  fabSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1D3359",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  fabBig: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#3255BA",
    justifyContent: "center",
    alignItems: "center",
  },

  // bottom sheet wrapper
  sheetWrapper: {
    flex: 1,
    marginTop: SHEET_TOP,
    paddingHorizontal: 16,
  },
  sheetScrollContent: {
    paddingBottom: 28,
  },

  // action buttons row (Create Space / Category / Settings)
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#050B18",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  actionItem: {
    alignItems: "center",
    flex: 1,
  },
  actionCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#3255BA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionLabel: {
    color: "#FFFFFF",
    fontSize: 11,
    textAlign: "center",
  },

  // settings block
  settingsBlock: {
    backgroundColor: "#050B18",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 18,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#07152C",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  settingsText: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  settingsHeaderRow: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  settingsHeaderText: {
    color: "#FFFFFF",
    fontSize: 13,
  },

  // members list
  membersList: {
    backgroundColor: "#050B18",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarInitial: {
    fontSize: 16,
    fontWeight: "700",
    color: "#161622",
  },
  memberTextBox: {
    flex: 1,
    paddingRight: 8,
  },
  memberName: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  sentPill: {
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#132A5C",
  },
  sentPillText: {
    color: "#9FB4FF",
    fontSize: 11,
    fontWeight: "500",
  },
});

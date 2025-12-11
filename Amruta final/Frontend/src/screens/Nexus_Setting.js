
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { height } = Dimensions.get("window");

// export default function NexusSettingsScreen({ navigation }) {
//   const [activeTab, setActiveTab] = useState("setting");

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleTabPress = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderTabContent = () => {
//     if (activeTab === "setting") {
//       return (
//         <>
//           {/* BASIC */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Basic</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="reader-outline"
//               label="Overview"
//               onPress={() => navigation.navigate("Nexus_Setting_Overview")}
//             />
//             <SettingsRow
//               icon="grid-outline"
//               label="Spaces"
//               onPress={() => navigation.navigate("Nexus_Setting_Spaces")}
//             />
//             <SettingsRow
//               icon="albums-outline"
//               label="Categories"
//               onPress={() => navigation.navigate("Nexus_Setting_Categories")}
//             />
//             <SettingsRow
//               icon="shield-checkmark-outline"
//               label="Permissions"
//               onPress={() => {}}
//             />
//           </View>

//           {/* MEMBERS / ACCESS */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Members/Access</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="people-outline"
//               label="Members"
//               onPress={() => navigation.navigate("Nexus_Setting_Members")}
//             />
//             <SettingsRow
//               icon="person-circle-outline"
//               label="Idents"
//               onPress={() => {}}
//             />
//             <SettingsRow
//               icon="person-add-outline"
//               label="Invites"
//               onPress={() => navigation.navigate("Nexus_Setting_Invites")}
//             />
//             <SettingsRow
//               icon="shield-outline"
//               label="Moderation"
//               onPress={() => navigation.navigate("Nexus_Setting_Moderation")}
//             />
//           </View>

//           {/* TOOLS */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Tools</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="document-text-outline"
//               label="AuditLog"
//               onPress={() => navigation.navigate("AuditLog")}
//             />
//             <SettingsRow
//               icon="gift-outline"
//               label="Integrations"
//               onPress={() => {}}
//             />
//             <SettingsRow
//               icon="lock-closed-outline"
//               label="Security"
//               onPress={() => navigation.navigate("Nexus_Setting_Security")}
//             />
//           </View>

//           {/* CUSTOMIZATION */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Customization</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="happy-outline"
//               label="Emoji"
//               onPress={() => navigation.navigate("Nexus_Setting_Emoji")}
//             />
//             <SettingsRow
//               icon="images-outline"
//               label="Stickers"
//               onPress={() => navigation.navigate("Nexus_Setting_Stickers")}
//             />
//           </View>
//         </>
//       );
//     }

//     if (activeTab === "community") {
//       return (
//         <View style={styles.sectionBlock}>
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionHeaderText}>Community Settings</Text>
//           </View>
//           <SettingsRow
//             icon="chatbubbles-outline"
//             label="Announcements"
//             onPress={() => {}}
//           />
//           <SettingsRow
//             icon="notifications-outline"
//             label="Notifications"
//             onPress={() => {}}
//           />
//           <SettingsRow
//             icon="flag-outline"
//             label="Reports"
//             onPress={() => {}}
//           />
//         </View>
//       );
//     }

//     if (activeTab === "management") {
//       return (
//         <View style={styles.sectionBlock}>
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionHeaderText}>Management Settings</Text>
//           </View>
//           <SettingsRow
//             icon="person-outline"
//             label="Admins"
//             onPress={() => {}}
//           />
//           <SettingsRow
//             icon="key-outline"
//             label="Roles & Permissions"
//             onPress={() => {}}
//           />
//           <SettingsRow
//             icon="bar-chart-outline"
//             label="Analytics"
//             onPress={() => {}}
//           />
//         </View>
//       );
//     }

//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons name="cellular" size={16} color="#fff" />
//           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
//           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
//         </View>
//       </View>

//       <ScrollView
//         style={{ flex: 1 }}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="close" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Nexus Settings</Text>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Banner */}
//         <View style={styles.banner} />

//         {/* Avatar + stats */}
//         <View style={styles.avatarSection}>
//           <View style={styles.avatarWrapper}>
//             <View style={styles.avatarCircle}>
//               <Text style={styles.avatarEmoji}>🤠</Text>
//             </View>
//             <TouchableOpacity style={styles.avatarEdit}>
//               <Ionicons name="pencil" size={14} color="#050B18" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.spaceTitle}>Shusshi Clean</Text>

//           <View style={styles.statsRow}>
//             <View style={styles.statsItem}>
//               <Ionicons name="people-outline" size={16} color="#9FB4FF" />
//               <Text style={styles.statsText}>3,568 Total Members</Text>
//             </View>
//             <View style={styles.dotDivider} />
//             <View style={styles.statsItem}>
//               <View style={styles.activeDot} />
//               <Text style={styles.statsText}>568 Active today</Text>
//             </View>
//           </View>
//         </View>

//         {/* Card with tabs & content */}
//         <View style={styles.mainCard}>
//           <View style={styles.tabsRow}>
//             {["setting", "community", "management"].map((tab) => (
//               <TouchableOpacity
//                 key={tab}
//                 style={[
//                   styles.tabItem,
//                   activeTab === tab && styles.tabItemActive,
//                 ]}
//                 onPress={() => handleTabPress(tab)}
//                 activeOpacity={0.7}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === tab && styles.tabTextActive,
//                   ]}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {renderTabContent()}
//         </View>

//         <View style={{ height: 32 }} />
//       </ScrollView>
//     </View>
//   );
// }

// function SettingsRow({ icon, label, onPress }) {
//   return (
//     <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
//       <View style={styles.rowLeft}>
//         <Ionicons
//           name={icon}
//           size={18}
//           color="#9FB4FF"
//           style={{ marginRight: 10 }}
//         />
//         <Text style={styles.rowLabel}>{label}</Text>
//       </View>
//       <Ionicons name="chevron-forward" size={16} color="#9FB4FF" />
//     </TouchableOpacity>
//   );
// }

// const CARD_RADIUS = 26;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },

//   fakeStatusBar: {
//     marginTop: 12 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
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

//   scrollContent: {
//     paddingBottom: 32,
//   },

//   headerRow: {
//     marginTop: 12,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "600",
//   },

//   banner: {
//     marginTop: 16,
//     marginHorizontal: 16,
//     height: height * 0.2,
//     borderRadius: 24,
//     backgroundColor: "#08152B",
//   },

//   avatarSection: {
//     marginTop: -40,
//     alignItems: "center",
//     paddingBottom: 16,
//   },
//   avatarWrapper: {
//     position: "relative",
//     marginBottom: 8,
//   },
//   avatarCircle: {
//     width: 88,
//     height: 88,
//     borderRadius: 44,
//     backgroundColor: "#7FE8C8",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatarEmoji: {
//     fontSize: 48,
//   },
//   avatarEdit: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "#ffffff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   spaceTitle: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 6,
//   },
//   statsRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   statsItem: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   statsText: {
//     color: "rgba(255,255,255,0.8)",
//     fontSize: 11,
//     marginLeft: 4,
//   },
//   dotDivider: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: "rgba(255,255,255,0.3)",
//     marginHorizontal: 10,
//   },
//   activeDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#3DE76E",
//   },

//   mainCard: {
//     marginTop: 20,
//     marginHorizontal: 16,
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#060F24",
//     borderWidth: 1,
//     borderColor: "#1F3057",
//     paddingBottom: 12,
//   },

//   tabsRow: {
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     paddingTop: 10,
//     paddingBottom: 6,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: "center",
//     paddingVertical: 8,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   tabItemActive: {
//     backgroundColor: "#08152B",
//   },
//   tabText: {
//     color: "rgba(255,255,255,0.6)",
//     fontSize: 13,
//     fontWeight: "500",
//   },
//   tabTextActive: {
//     color: "#ffffff",
//   },

//   sectionBlock: {
//     borderTopWidth: 1,
//     borderTopColor: "rgba(255,255,255,0.05)",
//     paddingHorizontal: 16,
//     paddingTop: 12,
//     paddingBottom: 4,
//   },
//   sectionHeaderRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   sectionHeaderText: {
//     color: "#ffffff",
//     fontSize: 13,
//     fontWeight: "500",
//   },

//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   rowLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   rowLabel: {
//     color: "rgba(255,255,255,0.9)",
//     fontSize: 13,
//   },
// });
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
//   ImageBackground,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { height } = Dimensions.get("window");

// export default function NexusSettingsScreen({ navigation }) {
//   const [activeTab, setActiveTab] = useState("setting");

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleTabPress = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderTabContent = () => {
//     if (activeTab === "setting") {
//       return (
//         <>
//           {/* BASIC */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Basic</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="reader-outline"
//               label="Overview"
//               onPress={() => navigation.navigate("Nexus_Setting_Overview")}
//             />
//             <SettingsRow
//               icon="grid-outline"
//               label="Spaces"
//               onPress={() => navigation.navigate("Nexus_Setting_Spaces")}
//             />
//             <SettingsRow
//               icon="albums-outline"
//               label="Categories"
//               onPress={() => navigation.navigate("Nexus_Setting_Categories")}
//             />
//             <SettingsRow
//               icon="shield-checkmark-outline"
//               label="Permissions"
//               onPress={() => {}}
//             />
//           </View>

//           {/* MEMBERS / ACCESS */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Members/Access</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="people-outline"
//               label="Members"
//               onPress={() => navigation.navigate("Nexus_Setting_Members")}
//             />
//             <SettingsRow icon="person-circle-outline" label="Idents" onPress={() => {}} />
//             <SettingsRow
//               icon="person-add-outline"
//               label="Invites"
//               onPress={() => navigation.navigate("Nexus_Setting_Invites")}
//             />
//             <SettingsRow
//               icon="shield-outline"
//               label="Moderation"
//               onPress={() => navigation.navigate("Nexus_Setting_Moderation")}
//             />
//           </View>

//           {/* TOOLS */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Tools</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="document-text-outline"
//               label="AuditLog"
//               onPress={() => navigation.navigate("AuditLog")}
//             />
//             <SettingsRow icon="gift-outline" label="Integrations" onPress={() => {}} />
//             <SettingsRow
//               icon="lock-closed-outline"
//               label="Security"
//               onPress={() => navigation.navigate("Nexus_Setting_Security")}
//             />
//           </View>

//           {/* CUSTOMIZATION */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Customization</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="happy-outline"
//               label="Emoji"
//               onPress={() => navigation.navigate("Nexus_Setting_Emoji")}
//             />
//             <SettingsRow
//               icon="images-outline"
//               label="Stickers"
//               onPress={() => navigation.navigate("Nexus_Setting_Stickers")}
//             />
//           </View>
//         </>
//       );
//     }

//     if (activeTab === "community") {
//       return (
//         <View style={styles.sectionBlock}>
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionHeaderText}>Community Settings</Text>
//           </View>
//           <SettingsRow icon="chatbubbles-outline" label="Announcements" onPress={() => {}} />
//           <SettingsRow icon="notifications-outline" label="Notifications" onPress={() => {}} />
//           <SettingsRow icon="flag-outline" label="Reports" onPress={() => {}} />
//         </View>
//       );
//     }

//     if (activeTab === "management") {
//       return (
//         <View style={styles.sectionBlock}>
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionHeaderText}>Management Settings</Text>
//           </View>
//           <SettingsRow icon="person-outline" label="Admins" onPress={() => {}} />
//           <SettingsRow icon="key-outline" label="Roles & Permissions" onPress={() => {}} />
//           <SettingsRow icon="bar-chart-outline" label="Analytics" onPress={() => {}} />
//         </View>
//       );
//     }

//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons name="cellular" size={16} color="#fff" />
//           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
//           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
//         </View>
//       </View>

//       <ScrollView
//         style={{ flex: 1 }}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="close" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Nexus Settings</Text>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Banner with GIF */}
//         <ImageBackground
//             source={require("../../assets/baner.gif")}
//           style={styles.banner}
//           imageStyle={{ borderRadius: 24 }}
//         />

//         {/* Avatar + Stats */}
//         <View style={styles.avatarSection}>
//           <View style={styles.avatarWrapper}>
//             <View style={styles.avatarCircle}>
//               <Text style={styles.avatarEmoji}>🤠</Text>
//             </View>
//             <TouchableOpacity style={styles.avatarEdit}>
//               <Ionicons name="pencil" size={14} color="#050B18" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.spaceTitle}>Shusshi Clean</Text>

//           <View style={styles.statsRow}>
//             <View style={styles.statsItem}>
//               <Ionicons name="people-outline" size={16} color="#9FB4FF" />
//               <Text style={styles.statsText}>3,568 Total Members</Text>
//             </View>
//             <View style={styles.dotDivider} />
//             <View style={styles.statsItem}>
//               <View style={styles.activeDot} />
//               <Text style={styles.statsText}>568 Active today</Text>
//             </View>
//           </View>
//         </View>

//         {/* Card */}
//         <View style={styles.mainCard}>
//           <View style={styles.tabsRow}>
//             {["setting", "community", "management"].map((tab) => (
//               <TouchableOpacity
//                 key={tab}
//                 style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
//                 onPress={() => handleTabPress(tab)}
//                 activeOpacity={0.7}
//               >
//                 <Text
//                   style={[styles.tabText, activeTab === tab && styles.tabTextActive]}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {renderTabContent()}
//         </View>

//         <View style={{ height: 32 }} />
//       </ScrollView>
//     </View>
//   );
// }

// function SettingsRow({ icon, label, onPress }) {
//   return (
//     <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
//       <View style={styles.rowLeft}>
//         <Ionicons name={icon} size={18} color="#9FB4FF" style={{ marginRight: 10 }} />
//         <Text style={styles.rowLabel}>{label}</Text>
//       </View>
//       <Ionicons name="chevron-forward" size={16} color="#9FB4FF" />
//     </TouchableOpacity>
//   );
// }

// const CARD_RADIUS = 26;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0C142A", // UPDATED
//   },

//   fakeStatusBar: {
//     marginTop: 12 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   timeText: { color: "#fff", fontSize: 16, fontWeight: "600" },
//   fakeStatusIcons: { flexDirection: "row", alignItems: "center" },

//   scrollContent: { paddingBottom: 32 },

//   headerRow: {
//     marginTop: 12,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },

//   banner: {
//     marginTop: 16,
//     marginHorizontal: 16,
//     height:211,
//     borderRadius: 24,
//     overflow: "hidden",
//   },

//   avatarSection: {
//     marginTop: -40,
//     alignItems: "center",
//     paddingBottom: 16,
//   },

//   avatarWrapper: { position: "relative", marginBottom: 8 },
//   avatarCircle: {
//     width: 88,
//     height: 88,
//     borderRadius: 44,
//     backgroundColor: "#7FE8C8",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatarEmoji: { fontSize: 48 },
//   avatarEdit: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   spaceTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 6 },

//   statsRow: { flexDirection: "row", alignItems: "center" },
//   statsItem: { flexDirection: "row", alignItems: "center" },
//   statsText: { color: "rgba(255,255,255,0.8)", fontSize: 11, marginLeft: 4 },

//   dotDivider: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: "rgba(255,255,255,0.3)",
//     marginHorizontal: 10,
//   },
//   activeDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#3DE76E",
//   },

//   mainCard: {
//     marginTop: 20,
//     marginHorizontal: 16,
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#08152B", // matches UI theme
//     borderWidth: 1,
//     borderColor: "#1F3057",
//     paddingBottom: 12,
//   },

//   tabsRow: { flexDirection: "row", paddingHorizontal: 16, paddingTop: 10, paddingBottom: 6 },
//   tabItem: { flex: 1, alignItems: "center", paddingVertical: 8, borderRadius: 16 },
//   tabItemActive: { backgroundColor: "#0C142A" },
//   tabText: { color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: "500" },
//   tabTextActive: { color: "#fff" },

//   sectionBlock: {
//     borderTopWidth: 1,
//     borderTopColor: "rgba(255,255,255,0.05)",
//     paddingHorizontal: 16,
//     paddingTop: 12,
//     paddingBottom: 4,
//   },
//   sectionHeaderRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   sectionHeaderText: { color: "#fff", fontSize: 13, fontWeight: "500" },

//   row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10 },
//   rowLeft: { flexDirection: "row", alignItems: "center" },
//   rowLabel: { color: "rgba(255,255,255,0.9)", fontSize: 13 },
// });
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
//   ImageBackground,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { height } = Dimensions.get("window");

// export default function NexusSettingsScreen({ navigation }) {
//   const [activeTab, setActiveTab] = useState("setting");

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleTabPress = (tab) => {
//     setActiveTab(tab);
//   };

//   const renderTabContent = () => {
//     if (activeTab === "setting") {
//       return (
//         <>
//           {/* BASIC */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Basic</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="reader-outline"
//               label="Overview"
//               onPress={() => navigation.navigate("Nexus_Setting_Overview")}
//             />
//             <SettingsRow
//               icon="grid-outline"
//               label="Spaces"
//               onPress={() => navigation.navigate("Nexus_Setting_Spaces")}
//             />
//             <SettingsRow
//               icon="albums-outline"
//               label="Categories"
//               onPress={() => navigation.navigate("Nexus_Setting_Categories")}
//             />
//             <SettingsRow
//               icon="shield-checkmark-outline"
//               label="Permissions"
//               onPress={() => {}}
//             />
//           </View>

//           {/* MEMBERS / ACCESS */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Members/Access</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="people-outline"
//               label="Members"
//               onPress={() => navigation.navigate("Nexus_Setting_Members")}
//             />
//             <SettingsRow icon="person-circle-outline" label="Idents" onPress={() => {}} />
//             <SettingsRow
//               icon="person-add-outline"
//               label="Invites"
//               onPress={() => navigation.navigate("Nexus_Setting_Invites")}
//             />
//             <SettingsRow
//               icon="shield-outline"
//               label="Moderation"
//               onPress={() => navigation.navigate("Nexus_Setting_Moderation")}
//             />
//           </View>

//           {/* TOOLS */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Tools</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="document-text-outline"
//               label="AuditLog"
//               onPress={() => navigation.navigate("AuditLog")}
//             />
//             <SettingsRow icon="gift-outline" label="Integrations" onPress={() => {}} />
//             <SettingsRow
//               icon="lock-closed-outline"
//               label="Security"
//               onPress={() => navigation.navigate("Nexus_Setting_Security")}
//             />
//           </View>

//           {/* CUSTOMIZATION */}
//           <View style={styles.sectionBlock}>
//             <View style={styles.sectionHeaderRow}>
//               <Text style={styles.sectionHeaderText}>Customization</Text>
//               <Ionicons name="chevron-down" size={16} color="#9FB4FF" />
//             </View>

//             <SettingsRow
//               icon="happy-outline"
//               label="Emoji"
//               onPress={() => navigation.navigate("Nexus_Setting_Emoji")}
//             />
//             <SettingsRow
//               icon="images-outline"
//               label="Stickers"
//               onPress={() => navigation.navigate("Nexus_Setting_Stickers")}
//             />
//           </View>
//         </>
//       );
//     }

//     if (activeTab === "community") {
//       return (
//         <View style={styles.sectionBlock}>
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionHeaderText}>Community Settings</Text>
//           </View>
//           <SettingsRow icon="chatbubbles-outline" label="Announcements" onPress={() => {}} />
//           <SettingsRow icon="notifications-outline" label="Notifications" onPress={() => {}} />
//           <SettingsRow icon="flag-outline" label="Reports" onPress={() => {}} />
//         </View>
//       );
//     }

//     if (activeTab === "management") {
//       return (
//         <View style={styles.sectionBlock}>
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionHeaderText}>Management Settings</Text>
//           </View>
//           <SettingsRow icon="person-outline" label="Admins" onPress={() => {}} />
//           <SettingsRow icon="key-outline" label="Roles & Permissions" onPress={() => {}} />
//           <SettingsRow icon="bar-chart-outline" label="Analytics" onPress={() => {}} />
//         </View>
//       );
//     }

//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       <ScrollView
//         style={{ flex: 1 }}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="close" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Nexus Settings</Text>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Banner with GIF */}
//         <ImageBackground
//           source={require("../../assets/baner.gif")}
//           style={styles.banner}
//           imageStyle={{ borderRadius: 24 }}
//         />

//         {/* Avatar (stats removed) */}
//         <View style={styles.avatarSection}>
//           <View style={styles.avatarWrapper}>
//             <View style={styles.avatarCircle}>
//               <Text style={styles.avatarEmoji}>🤠</Text>
//             </View>
//             <TouchableOpacity style={styles.avatarEdit}>
//               <Ionicons name="pencil" size={14} color="#050B18" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.spaceTitle}>Shusshi Clean</Text>
//         </View>

//         {/* Card */}
//         <View style={styles.mainCard}>
//           <View style={styles.tabsRow}>
//             {["setting", "community", "management"].map((tab) => (
//               <TouchableOpacity
//                 key={tab}
//                 style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
//                 onPress={() => handleTabPress(tab)}
//                 activeOpacity={0.7}
//               >
//                 <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {renderTabContent()}
//         </View>

//         <View style={{ height: 32 }} />
//       </ScrollView>
//     </View>
//   );
// }

// function SettingsRow({ icon, label, onPress }) {
//   return (
//     <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
//       <View style={styles.rowLeft}>
//         <Ionicons name={icon} size={18} color="#9FB4FF" style={{ marginRight: 10 }} />
//         <Text style={styles.rowLabel}>{label}</Text>
//       </View>
//       <Ionicons name="chevron-forward" size={16} color="#9FB4FF" />
//     </TouchableOpacity>
//   );
// }

// const CARD_RADIUS = 26;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0C142A", // UPDATED
//   },

//   fakeStatusBar: {
//     marginTop: 12 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   timeText: { color: "#fff", fontSize: 16, fontWeight: "600" },
//   fakeStatusIcons: { flexDirection: "row", alignItems: "center" },

//   scrollContent: { paddingBottom: 32 },

//   headerRow: {
//     marginTop: 60,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },

//   banner: {
//     marginTop: 16,
//     marginHorizontal: 16,
//     height: 211,
//     borderRadius: 24,
//     overflow: "hidden",
//   },

//   avatarSection: {
//     marginTop: -40,
//     alignItems: "center",
//     paddingBottom: 16,
//   },

//   avatarWrapper: { position: "relative", marginBottom: 8 },
//   avatarCircle: {
//     width: 88,
//     height: 88,
//     borderRadius: 44,
//     backgroundColor: "#7FE8C8",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatarEmoji: { fontSize: 48 },
//   avatarEdit: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   spaceTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 6 },

//   statsRow: { flexDirection: "row", alignItems: "center" },
//   statsItem: { flexDirection: "row", alignItems: "center" },
//   statsText: { color: "rgba(255,255,255,0.8)", fontSize: 11, marginLeft: 4 },

//   dotDivider: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: "rgba(255,255,255,0.3)",
//     marginHorizontal: 10,
//   },
//   activeDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#3DE76E",
//   },

//   mainCard: {
//     marginTop: 20,
//     marginHorizontal: 16,
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#08152B", // matches UI theme
//     borderWidth: 1,
//     borderColor: "#1F3057",
//     paddingBottom: 12,
//   },

//   tabsRow: { flexDirection: "row", paddingHorizontal: 16, paddingTop: 10, paddingBottom: 6 },
//   tabItem: { flex: 1, alignItems: "center", paddingVertical: 8, borderRadius: 16 },
//   tabItemActive: { backgroundColor: "#0C142A" },
//   tabText: { color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: "500" },
//   tabTextActive: { color: "#fff" },

//   sectionBlock: {
//     borderTopWidth: 1,
//     borderTopColor: "rgba(255,255,255,0.05)",
//     paddingHorizontal: 16,
//     paddingTop: 12,
//     paddingBottom: 4,
//   },
//   sectionHeaderRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   sectionHeaderText: { color: "#fff", fontSize: 13, fontWeight: "500" },

//   row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10 },
//   rowLeft: { flexDirection: "row", alignItems: "center" },
//   rowLabel: { color: "rgba(255,255,255,0.9)", fontSize: 13 },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function NexusSettingsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("setting");

  // New state: track open/closed sections
  const [openSections, setOpenSections] = useState({});

  const handleBack = () => {
    if (navigation?.goBack) navigation.goBack();
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderSection = (key, title, rows) => {
    const isOpen = openSections[key];
    return (
      <View style={styles.sectionBlock}>
        <TouchableOpacity
          style={styles.sectionHeaderRow}
          onPress={() => toggleSection(key)}
          activeOpacity={0.7}
        >
          <Text style={styles.sectionHeaderText}>{title}</Text>
          <Ionicons
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={16}
            color="#9FB4FF"
          />
        </TouchableOpacity>
        {isOpen && rows.map((row, i) => (
          <SettingsRow
            key={i}
            icon={row.icon}
            label={row.label}
            onPress={row.onPress}
          />
        ))}
      </View>
    );
  };

  const renderTabContent = () => {
    if (activeTab === "setting") {
      return (
        <>
          {renderSection("basic", "Basic", [
            { icon: "reader-outline", label: "Overview", onPress: () => navigation.navigate("Nexus_Setting_Overview") },
            { icon: "grid-outline", label: "Spaces", onPress: () => navigation.navigate("Nexus_Setting_Spaces") },
            { icon: "albums-outline", label: "Categories", onPress: () => navigation.navigate("Nexus_Setting_Categories") },
            { icon: "shield-checkmark-outline", label: "Permissions", onPress: () => {} },
          ])}

          {renderSection("members", "Members/Access", [
            { icon: "people-outline", label: "Members", onPress: () => navigation.navigate("Nexus_Setting_Members") },
            { icon: "person-circle-outline", label: "Idents", onPress: () => {} },
            { icon: "person-add-outline", label: "Invites", onPress: () => navigation.navigate("Nexus_Setting_Invites") },
            { icon: "shield-outline", label: "Moderation", onPress: () => navigation.navigate("Nexus_Setting_Moderation") },
          ])}

          {renderSection("tools", "Tools", [
            { icon: "document-text-outline", label: "AuditLog", onPress: () => navigation.navigate("AuditLog") },
            { icon: "gift-outline", label: "Integrations", onPress: () => {} },
            { icon: "lock-closed-outline", label: "Security", onPress: () => navigation.navigate("Nexus_Setting_Security") },
          ])}

          {renderSection("customization", "Customization", [
            { icon: "happy-outline", label: "Emoji", onPress: () => navigation.navigate("Nexus_Setting_Emoji") },
            { icon: "images-outline", label: "Stickers", onPress: () => navigation.navigate("Nexus_Setting_Stickers") },
          ])}
        </>
      );
    }

    if (activeTab === "community") {
      return renderSection("community", "Community Settings", [
        { icon: "chatbubbles-outline", label: "Announcements", onPress: () => {} },
        { icon: "notifications-outline", label: "Notifications", onPress: () => {} },
        { icon: "flag-outline", label: "Reports", onPress: () => {} },
      ]);
    }

    if (activeTab === "management") {
      return renderSection("management", "Management Settings", [
        { icon: "person-outline", label: "Admins", onPress: () => {} },
        { icon: "key-outline", label: "Roles & Permissions", onPress: () => {} },
        { icon: "bar-chart-outline", label: "Analytics", onPress: () => {} },
      ]);
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nexus Settings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Banner with GIF */}
        <ImageBackground
          source={require("../../assets/baner.gif")}
          style={styles.banner}
          imageStyle={{ borderRadius: 24 }}
        />

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>🤠</Text>
            </View>
            <TouchableOpacity style={styles.avatarEdit}>
              <Ionicons name="pencil" size={14} color="#050B18" />
            </TouchableOpacity>
          </View>

          <Text style={styles.spaceTitle}>Shusshi Clean</Text>
        </View>

        {/* Card */}
        <View style={styles.mainCard}>
          <View style={styles.tabsRow}>
            {["setting", "community", "management"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
                onPress={() => handleTabPress(tab)}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {renderTabContent()}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

function SettingsRow({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.rowLeft}>
        <Ionicons name={icon} size={18} color="#9FB4FF" style={{ marginRight: 10 }} />
        <Text style={styles.rowLabel}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#9FB4FF" />
    </TouchableOpacity>
  );
}

const CARD_RADIUS = 26;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0C142A" },
  scrollContent: { paddingBottom: 32 },
  headerRow: { marginTop: 60, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
  banner: { marginTop: 16, marginHorizontal: 16, height: 211, borderRadius: 24, overflow: "hidden" },
  avatarSection: { marginTop: -40, alignItems: "center", paddingBottom: 16 },
  avatarWrapper: { position: "relative", marginBottom: 8 },
  avatarCircle: { width: 88, height: 88, borderRadius: 44, backgroundColor: "#7FE8C8", justifyContent: "center", alignItems: "center" },
  avatarEmoji: { fontSize: 48 },
  avatarEdit: { position: "absolute", bottom: 0, right: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" },
  spaceTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 6 },
  mainCard: { marginTop: 20, marginHorizontal: 16, borderRadius: CARD_RADIUS, backgroundColor: "#08152B", borderWidth: 1, borderColor: "#1F3057", paddingBottom: 12 },
  tabsRow: { flexDirection: "row", paddingHorizontal: 16, paddingTop: 10, paddingBottom: 6 },
  tabItem: { flex: 1, alignItems: "center", paddingVertical: 8, borderRadius: 16 },
  tabItemActive: { backgroundColor: "#0C142A" },
  tabText: { color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: "500" },
  tabTextActive: { color: "#fff" },
  sectionBlock: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.05)" },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  sectionHeaderText: { color: "#fff", fontSize: 13, fontWeight: "500" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10 },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowLabel: { color: "rgba(255,255,255,0.9)", fontSize: 13 },
});

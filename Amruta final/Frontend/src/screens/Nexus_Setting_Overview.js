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
//   TextInput,
//   Switch,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// export default function Nexus_Overview({ navigation }) {
//   const [nexusName, setNexusName] = useState("Shusshi Clean");

//   const [inactiveSpace, setInactiveSpace] = useState("No Inactive Space");
//   const [timeoutValue, setTimeoutValue] = useState("5 minutes");

//   const [systemSpace, setSystemSpace] = useState("General");
//   const [joinMessageEnabled, setJoinMessageEnabled] = useState(true);

//   const [showJoinLeave, setShowJoinLeave] = useState(true);
//   const [showRoleChanges, setShowRoleChanges] = useState(true);
//   const [showUsernameChanges, setShowUsernameChanges] = useState(true);

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleSave = () => {
//     Alert.alert(
//       "Saved",
//       `Nexus name: ${nexusName}\nInactive: ${inactiveSpace}\nTimeout: ${timeoutValue}\nSystem Space: ${systemSpace}`
//     );
//   };

//   const handleReset = () => {
//     setNexusName("Shusshi Clean");
//     setInactiveSpace("No Inactive Space");
//     setTimeoutValue("5 minutes");
//     setSystemSpace("General");
//     setJoinMessageEnabled(true);
//     setShowJoinLeave(true);
//     setShowRoleChanges(true);
//     setShowUsernameChanges(true);
//     Alert.alert("Reset", "Settings reset to default (demo).");
//   };

//   const handleDelete = () => {
//     Alert.alert(
//       "Delete Nexus",
//       "Are you sure you want to delete this Nexus?",
//       [
//         { text: "Cancel", style: "cancel" },
//         { text: "Delete", style: "destructive", onPress: () => {} },
//       ]
//     );
//   };

//   const chooseInactiveSpace = () => {
//     Alert.alert(
//       "Inactive Space",
//       "Choose inactive space (demo)",
//       [
//         { text: "No Inactive Space", onPress: () => setInactiveSpace("No Inactive Space") },
//         { text: "Archive After 7 days", onPress: () => setInactiveSpace("Archive After 7 days") },
//         { text: "Cancel", style: "cancel" },
//       ]
//     );
//   };

//   const chooseTimeout = () => {
//     Alert.alert(
//       "Timeout",
//       "Choose timeout (demo)",
//       [
//         { text: "5 minutes", onPress: () => setTimeoutValue("5 minutes") },
//         { text: "15 minutes", onPress: () => setTimeoutValue("15 minutes") },
//         { text: "30 minutes", onPress: () => setTimeoutValue("30 minutes") },
//         { text: "Cancel", style: "cancel" },
//       ]
//     );
//   };

//   const chooseSystemSpace = () => {
//     Alert.alert(
//       "System Space",
//       "Choose system space (demo)",
//       [
//         { text: "General", onPress: () => setSystemSpace("General") },
//         { text: "Announcements", onPress: () => setSystemSpace("Announcements") },
//         { text: "Cancel", style: "cancel" },
//       ]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar row */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
//           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
//           <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
//         </View>
//       </View>

//       <ScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="chevron-back" size={24} color="#ffffff" />
//           </TouchableOpacity>
//           <View style={styles.headerCenter}>
//             <Text style={styles.headerTitle}>Nexus Overview</Text>
//             <Text style={styles.headerSubtitle}>Settings for this Nexus only.</Text>
//           </View>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Nexus name */}
//         <View style={styles.section}>
//           <Text style={styles.label}>Nexus name</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               style={styles.input}
//               value={nexusName}
//               onChangeText={setNexusName}
//               placeholder="Enter nexus name"
//               placeholderTextColor="rgba(255,255,255,0.5)"
//             />
//           </View>
//         </View>

//         {/* Inactive Settings */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>Inactive Settings</Text>
//           </View>

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseInactiveSpace}
//           >
//             <Text style={styles.rowLabel}>Inactive Space</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{inactiveSpace}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.rowDivider} />

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseTimeout}
//           >
//             <Text style={styles.rowLabel}>Timeout</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{timeoutValue}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>

//         {/* System & Community Signals */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>System & Community Signals</Text>
//           </View>

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseSystemSpace}
//           >
//             <Text style={styles.rowLabel}>System Space</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{systemSpace}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Join Message</Text>
//             <Switch
//               value={joinMessageEnabled}
//               onValueChange={setJoinMessageEnabled}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>
//         </View>

//         {/* Member Visibility & History */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>Member Visibility & History</Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show join/leave events</Text>
//             <Switch
//               value={showJoinLeave}
//               onValueChange={setShowJoinLeave}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show role changes</Text>
//             <Switch
//               value={showRoleChanges}
//               onValueChange={setShowRoleChanges}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show username changes</Text>
//             <Switch
//               value={showUsernameChanges}
//               onValueChange={setShowUsernameChanges}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <Text style={styles.cardFooterNote}>
//             Changes apply only to this Nexus.
//           </Text>
//         </View>

//         {/* Delete Nexus */}
//         <TouchableOpacity
//           style={styles.deleteButton}
//           activeOpacity={0.85}
//           onPress={handleDelete}
//         >
//           <Ionicons
//             name="trash-outline"
//             size={18}
//             color="#FF6B6B"
//             style={{ marginRight: 8 }}
//           />
//           <Text style={styles.deleteButtonText}>Delete Nexus</Text>
//         </TouchableOpacity>

//         {/* Save + Reset */}
//         <TouchableOpacity
//           style={styles.saveButton}
//           activeOpacity={0.85}
//           onPress={handleSave}
//         >
//           <Text style={styles.saveButtonText}>Save</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleReset}
//           activeOpacity={0.7}
//           style={{ alignSelf: "center", marginTop: 8, marginBottom: 24 }}
//         >
//           <Text style={styles.resetText}>Reset to Default</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const CARD_RADIUS = 22;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },

//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
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

//   scrollContent: {
//     paddingBottom: 32,
//     paddingHorizontal: 20,
//   },

//   headerRow: {
//     marginTop: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerCenter: {
//     flex: 1,
//     alignItems: "center",
//   },
//   headerTitle: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   headerSubtitle: {
//     marginTop: 2,
//     fontSize: 11,
//     color: "rgba(255,255,255,0.7)",
//   },

//   section: {
//     marginBottom: 16,
//   },
//   label: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 13,
//     marginBottom: 10,
//     fontWeight: "500",
//   },
//   inputWrapper: {
//     borderRadius: 20,
//     backgroundColor: "#0B1730",
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//     overflow: "hidden",
//   },
//   input: {
//     height: 52,
//     paddingHorizontal: 16,
//     color: "#ffffff",
//     fontSize: 14,
//   },

//   card: {
//     marginTop: 10,
//     borderRadius: CARD_RADIUS,
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//     backgroundColor: "#060F24",
//     paddingTop: 18,
//     paddingHorizontal: 16,
//     paddingBottom: 12,
//   },
//   cardLabelPill: {
//     position: "absolute",
//     top: -12,
//     left: 24,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//     backgroundColor: "#050B18",
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//   },
//   cardLabelText: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 11,
//     fontWeight: "500",
//   },

//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   rowDivider: {
//     height: 1,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   rowLabel: {
//     color: "#ffffff",
//     fontSize: 13,
//   },
//   rowRight: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   rowValue: {
//     color: "rgba(255,255,255,0.7)",
//     fontSize: 12,
//   },

//   cardFooterNote: {
//     marginTop: 8,
//     fontSize: 11,
//     color: "rgba(255,255,255,0.65)",
//   },

//   deleteButton: {
//     marginTop: 24,
//     alignSelf: "center",
//     width: width * 0.75,
//     height: 48,
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: "#FF4B4B",
//     backgroundColor: "rgba(255, 40, 40, 0.1)",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   deleteButtonText: {
//     color: "#FF6B6B",
//     fontSize: 14,
//     fontWeight: "500",
//   },

//   saveButton: {
//     marginTop: 18,
//     alignSelf: "center",
//     width: width * 0.5,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.35,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 8 },
//     elevation: 5,
//   },
//   saveButtonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   resetText: {
//     color: "#9FB4FF",
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
//   TextInput,
//   Switch,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// // 👇 इथे तुझा backend base URL टाक:
// const API_BASE_URL = "http://192.168.1.5:5000"; // e.g. http://192.168.1.5:5000

// export default function Nexus_Overview({ navigation, route }) {
//   // 👇 Nexus id route params मधून घे (navigation.navigate करताना पाठवायचा)
//   const nexusId = route?.params?.nexusId;

//   const [nexusName, setNexusName] = useState("Shusshi Clean");

//   const [inactiveSpace, setInactiveSpace] = useState("No Inactive Space");
//   const [timeoutValue, setTimeoutValue] = useState("5 minutes");

//   const [systemSpace, setSystemSpace] = useState("General");
//   const [joinMessageEnabled, setJoinMessageEnabled] = useState(true);

//   const [showJoinLeave, setShowJoinLeave] = useState(true);
//   const [showRoleChanges, setShowRoleChanges] = useState(true);
//   const [showUsernameChanges, setShowUsernameChanges] = useState(true);

//   // optional: delete दरम्यान multiple tap टाळण्यासाठी
//   const [deleting, setDeleting] = useState(false);

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleSave = () => {
//     Alert.alert(
//       "Saved",
//       `Nexus name: ${nexusName}\nInactive: ${inactiveSpace}\nTimeout: ${timeoutValue}\nSystem Space: ${systemSpace}`
//     );
//   };

//   const handleReset = () => {
//     setNexusName("Shusshi Clean");
//     setInactiveSpace("No Inactive Space");
//     setTimeoutValue("5 minutes");
//     setSystemSpace("General");
//     setJoinMessageEnabled(true);
//     setShowJoinLeave(true);
//     setShowRoleChanges(true);
//     setShowUsernameChanges(true);
//     Alert.alert("Reset", "Settings reset to default (demo).");
//   };

//   // 🔥 इथून actual backend delete call करतो
//   const deleteNexusFromServer = async () => {
//     if (!nexusId) {
//       Alert.alert(
//         "Error",
//         "Nexus ID सापडला नाही. कृपया हा screen navigate करताना nexusId पाठवा."
//       );
//       return;
//     }

//     if (deleting) return; // already in progress

//     try {
//       setDeleting(true);

//       const response = await fetch(`${API_BASE_URL}/nexus/${nexusId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           // जर auth token वगैरे असेल तर:
//           // Authorization: `Bearer ${token}`
//         },
//       });

//       const json = await response.json().catch(() => ({}));

//       if (!response.ok || !json.success) {
//         Alert.alert(
//           "Delete Failed",
//           json.message || "Could not delete this Nexus."
//         );
//         return;
//       }

//       // Success 🎉
//       Alert.alert("Deleted", "Nexus deleted successfully.", [
//         {
//           text: "OK",
//           onPress: () => {
//             if (navigation?.goBack) {
//               navigation.goBack();
//             }
//           },
//         },
//       ]);
//     } catch (err) {
//       console.log("deleteNexus error =>", err);
//       Alert.alert("Error", "Network error while deleting Nexus.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const handleDelete = () => {
//     if (deleting) return;

//     Alert.alert(
//       "Delete Nexus",
//       "Are you sure you want to delete this Nexus?",
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Delete",
//           style: "destructive",
//           onPress: deleteNexusFromServer, // 👈 इथे backend call
//         },
//       ]
//     );
//   };

//   const chooseInactiveSpace = () => {
//     Alert.alert("Inactive Space", "Choose inactive space (demo)", [
//       {
//         text: "No Inactive Space",
//         onPress: () => setInactiveSpace("No Inactive Space"),
//       },
//       {
//         text: "Archive After 7 days",
//         onPress: () => setInactiveSpace("Archive After 7 days"),
//       },
//       { text: "Cancel", style: "cancel" },
//     ]);
//   };

//   const chooseTimeout = () => {
//     Alert.alert("Timeout", "Choose timeout (demo)", [
//       { text: "5 minutes", onPress: () => setTimeoutValue("5 minutes") },
//       { text: "15 minutes", onPress: () => setTimeoutValue("15 minutes") },
//       { text: "30 minutes", onPress: () => setTimeoutValue("30 minutes") },
//       { text: "Cancel", style: "cancel" },
//     ]);
//   };

//   const chooseSystemSpace = () => {
//     Alert.alert("System Space", "Choose system space (demo)", [
//       { text: "General", onPress: () => setSystemSpace("General") },
//       { text: "Announcements", onPress: () => setSystemSpace("Announcements") },
//       { text: "Cancel", style: "cancel" },
//     ]);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar row */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons
//             name="cellular"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
//           <Ionicons
//             name="battery-full"
//             size={20}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//         </View>
//       </View>

//       <ScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="chevron-back" size={24} color="#ffffff" />
//           </TouchableOpacity>
//           <View style={styles.headerCenter}>
//             <Text style={styles.headerTitle}>Nexus Overview</Text>
//             <Text style={styles.headerSubtitle}>
//               Settings for this Nexus only.
//             </Text>
//           </View>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Nexus name */}
//         <View style={styles.section}>
//           <Text style={styles.label}>Nexus name</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               style={styles.input}
//               value={nexusName}
//               onChangeText={setNexusName}
//               placeholder="Enter nexus name"
//               placeholderTextColor="rgba(255,255,255,0.5)"
//             />
//           </View>
//         </View>

//         {/* Inactive Settings */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>Inactive Settings</Text>
//           </View>

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseInactiveSpace}
//           >
//             <Text style={styles.rowLabel}>Inactive Space</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{inactiveSpace}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.rowDivider} />

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseTimeout}
//           >
//             <Text style={styles.rowLabel}>Timeout</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{timeoutValue}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>

//         {/* System & Community Signals */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>
//               System & Community Signals
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseSystemSpace}
//           >
//             <Text style={styles.rowLabel}>System Space</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{systemSpace}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Join Message</Text>
//             <Switch
//               value={joinMessageEnabled}
//               onValueChange={setJoinMessageEnabled}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>
//         </View>

//         {/* Member Visibility & History */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>
//               Member Visibility & History
//             </Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show join/leave events</Text>
//             <Switch
//               value={showJoinLeave}
//               onValueChange={setShowJoinLeave}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show role changes</Text>
//             <Switch
//               value={showRoleChanges}
//               onValueChange={setShowRoleChanges}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show username changes</Text>
//             <Switch
//               value={showUsernameChanges}
//               onValueChange={setShowUsernameChanges}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <Text style={styles.cardFooterNote}>
//             Changes apply only to this Nexus.
//           </Text>
//         </View>

//         {/* Delete Nexus */}
//         <TouchableOpacity
//           style={styles.deleteButton}
//           activeOpacity={0.85}
//           onPress={handleDelete}
//           disabled={deleting}
//         >
//           <Ionicons
//             name="trash-outline"
//             size={18}
//             color="#FF6B6B"
//             style={{ marginRight: 8 }}
//           />
//           <Text style={styles.deleteButtonText}>
//             {deleting ? "Deleting..." : "Delete Nexus"}
//           </Text>
//         </TouchableOpacity>

//         {/* Save + Reset */}
//         <TouchableOpacity
//           style={styles.saveButton}
//           activeOpacity={0.85}
//           onPress={handleSave}
//         >
//           <Text style={styles.saveButtonText}>Save</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleReset}
//           activeOpacity={0.7}
//           style={{ alignSelf: "center", marginTop: 8, marginBottom: 24 }}
//         >
//           <Text style={styles.resetText}>Reset to Default</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const CARD_RADIUS = 22;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },
//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
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
//   scrollContent: {
//     paddingBottom: 32,
//     paddingHorizontal: 20,
//   },
//   headerRow: {
//     marginTop: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerCenter: {
//     flex: 1,
//     alignItems: "center",
//   },
//   headerTitle: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   headerSubtitle: {
//     marginTop: 2,
//     fontSize: 11,
//     color: "rgba(255,255,255,0.7)",
//   },
//   section: {
//     marginBottom: 16,
//   },
//   label: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 13,
//     marginBottom: 10,
//     fontWeight: "500",
//   },
//   inputWrapper: {
//     borderRadius: 20,
//     backgroundColor: "#0B1730",
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//     overflow: "hidden",
//   },
//   input: {
//     height: 52,
//     paddingHorizontal: 16,
//     color: "#ffffff",
//     fontSize: 14,
//   },
//   card: {
//     marginTop: 10,
//     borderRadius: CARD_RADIUS,
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//     backgroundColor: "#060F24",
//     paddingTop: 18,
//     paddingHorizontal: 16,
//     paddingBottom: 12,
//   },
//   cardLabelPill: {
//     position: "absolute",
//     top: -12,
//     left: 24,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//     backgroundColor: "#050B18",
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//   },
//   cardLabelText: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 11,
//     fontWeight: "500",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   rowDivider: {
//     height: 1,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   rowLabel: {
//     color: "#ffffff",
//     fontSize: 13,
//   },
//   rowRight: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   rowValue: {
//     color: "rgba(255,255,255,0.7)",
//     fontSize: 12,
//   },
//   cardFooterNote: {
//     marginTop: 8,
//     fontSize: 11,
//     color: "rgba(255,255,255,0.65)",
//   },
//   deleteButton: {
//     marginTop: 24,
//     alignSelf: "center",
//     width: width * 0.75,
//     height: 48,
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: "#FF4B4B",
//     backgroundColor: "rgba(255, 40, 40, 0.1)",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   deleteButtonText: {
//     color: "#FF6B6B",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   saveButton: {
//     marginTop: 18,
//     alignSelf: "center",
//     width: width * 0.5,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.35,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 8 },
//     elevation: 5,
//   },
//   saveButtonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   resetText: {
//     color: "#9FB4FF",
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
//   TextInput,
//   Switch,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// // 🔗 इथे तुझा backend base URL
// const API_BASE_URL = "http://192.168.1.5:3000/api/nexus/:id}"; // 👈 लक्ष दे – /api जोडले

// export default function Nexus_Overview({ navigation, route }) {
//   // 👇 params मधून id + नाव घ्या
//   const nexusId = route?.params?.nexusId;
//   const initialName = route?.params?.nexusName || "Shusshi Clean";

//   const [nexusName, setNexusName] = useState(initialName);

//   const [inactiveSpace, setInactiveSpace] = useState("No Inactive Space");
//   const [timeoutValue, setTimeoutValue] = useState("5 minutes");

//   const [systemSpace, setSystemSpace] = useState("General");
//   const [joinMessageEnabled, setJoinMessageEnabled] = useState(true);

//   const [showJoinLeave, setShowJoinLeave] = useState(true);
//   const [showRoleChanges, setShowRoleChanges] = useState(true);
//   const [showUsernameChanges, setShowUsernameChanges] = useState(true);

//   // delete दरम्यान button disable करण्यासाठी
//   const [deleting, setDeleting] = useState(false);

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleSave = () => {
//     Alert.alert(
//       "Saved",
//       `Nexus name: ${nexusName}\nInactive: ${inactiveSpace}\nTimeout: ${timeoutValue}\nSystem Space: ${systemSpace}`
//     );
//   };

//   const handleReset = () => {
//     setNexusName(initialName);
//     setInactiveSpace("No Inactive Space");
//     setTimeoutValue("5 minutes");
//     setSystemSpace("General");
//     setJoinMessageEnabled(true);
//     setShowJoinLeave(true);
//     setShowRoleChanges(true);
//     setShowUsernameChanges(true);
//     Alert.alert("Reset", "Settings reset to default (demo).");
//   };

//   // 🔥 actual backend delete call
//   const deleteNexusFromServer = async () => {
//     if (!nexusId) {
//       Alert.alert(
//         "Error",
//         "Nexus ID not found. Don’t forget to pass the nexusId when opening this screen."
//       );
//       return;
//     }

//     if (deleting) return;

//     try {
//       setDeleting(true);

//       const response = await fetch(`${API_BASE_URL}/api/nexus/${nexusId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           // येथे auth token असेल तर add कर:
//           // Authorization: `Bearer ${token}`,
//         },
//       });

//       const json = await response.json().catch(() => ({}));

//       if (!response.ok || !json.success) {
//         Alert.alert(
//           "Delete Failed",
//           json.message || "Could not delete this Nexus."
//         );
//         return;
//       }

//       // ✅ success
//       Alert.alert("Deleted", "Nexus deleted successfully.", [
//         {
//           text: "OK",
//           onPress: () => {
//             if (navigation?.goBack) {
//               navigation.goBack(); // मागच्या list screen वर परत
//             }
//           },
//         },
//       ]);
//     } catch (err) {
//       console.log("deleteNexus error =>", err);
//       Alert.alert("Error", "Network error while deleting Nexus.");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   const handleDelete = () => {
//     if (deleting) return;

//     Alert.alert("Delete Nexus", "Are you sure you want to delete this Nexus?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "Delete",
//         style: "destructive",
//         onPress: deleteNexusFromServer, // 👈 backend call
//       },
//     ]);
//   };

//   const chooseInactiveSpace = () => {
//     Alert.alert("Inactive Space", "Choose inactive space (demo)", [
//       {
//         text: "No Inactive Space",
//         onPress: () => setInactiveSpace("No Inactive Space"),
//       },
//       {
//         text: "Archive After 7 days",
//         onPress: () => setInactiveSpace("Archive After 7 days"),
//       },
//       { text: "Cancel", style: "cancel" },
//     ]);
//   };

//   const chooseTimeout = () => {
//     Alert.alert("Timeout", "Choose timeout (demo)", [
//       { text: "5 minutes", onPress: () => setTimeoutValue("5 minutes") },
//       { text: "15 minutes", onPress: () => setTimeoutValue("15 minutes") },
//       { text: "30 minutes", onPress: () => setTimeoutValue("30 minutes") },
//       { text: "Cancel", style: "cancel" },
//     ]);
//   };

//   const chooseSystemSpace = () => {
//     Alert.alert("System Space", "Choose system space (demo)", [
//       { text: "General", onPress: () => setSystemSpace("General") },
//       { text: "Announcements", onPress: () => setSystemSpace("Announcements") },
//       { text: "Cancel", style: "cancel" },
//     ]);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar row */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons
//             name="cellular"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
//           <Ionicons
//             name="battery-full"
//             size={20}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//         </View>
//       </View>

//       <ScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="chevron-back" size={24} color="#ffffff" />
//           </TouchableOpacity>
//           <View style={styles.headerCenter}>
//             <Text style={styles.headerTitle}>Nexus Overview</Text>
//             <Text style={styles.headerSubtitle}>
//               Settings for this Nexus only.
//             </Text>
//           </View>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Nexus name */}
//         <View style={styles.section}>
//           <Text style={styles.label}>Nexus name</Text>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               style={styles.input}
//               value={nexusName}
//               onChangeText={setNexusName}
//               placeholder="Enter nexus name"
//               placeholderTextColor="rgba(255,255,255,0.5)"
//             />
//           </View>
//         </View>

//         {/* Inactive Settings */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>Inactive Settings</Text>
//           </View>

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseInactiveSpace}
//           >
//             <Text style={styles.rowLabel}>Inactive Space</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{inactiveSpace}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.rowDivider} />

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseTimeout}
//           >
//             <Text style={styles.rowLabel}>Timeout</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{timeoutValue}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>

//         {/* System & Community Signals */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>
//               System & Community Signals
//             </Text>
//           </View>

//           <TouchableOpacity
//             style={styles.row}
//             activeOpacity={0.8}
//             onPress={chooseSystemSpace}
//           >
//             <Text style={styles.rowLabel}>System Space</Text>
//             <View style={styles.rowRight}>
//               <Text style={styles.rowValue}>{systemSpace}</Text>
//               <Ionicons
//                 name="chevron-down"
//                 size={14}
//                 color="#9FB4FF"
//                 style={{ marginLeft: 8 }}
//               />
//             </View>
//           </TouchableOpacity>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Join Message</Text>
//             <Switch
//               value={joinMessageEnabled}
//               onValueChange={setJoinMessageEnabled}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>
//         </View>

//         {/* Member Visibility & History */}
//         <View style={styles.card}>
//           <View style={styles.cardLabelPill}>
//             <Text style={styles.cardLabelText}>
//               Member Visibility & History
//             </Text>
//           </View>

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show join/leave events</Text>
//             <Switch
//               value={showJoinLeave}
//               onValueChange={setShowJoinLeave}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show role changes</Text>
//             <Switch
//               value={showRoleChanges}
//               onValueChange={setShowRoleChanges}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <View style={styles.rowDivider} />

//           <View style={styles.row}>
//             <Text style={styles.rowLabel}>Show username changes</Text>
//             <Switch
//               value={showUsernameChanges}
//               onValueChange={setShowUsernameChanges}
//               trackColor={{ false: "#29314D", true: "#4A7FE8" }}
//               thumbColor="#ffffff"
//               ios_backgroundColor="#29314D"
//               style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
//             />
//           </View>

//           <Text style={styles.cardFooterNote}>
//             Changes apply only to this Nexus.
//           </Text>
//         </View>

//         {/* Delete Nexus */}
//         <TouchableOpacity
//           style={styles.deleteButton}
//           activeOpacity={0.85}
//           onPress={handleDelete}
//           disabled={deleting}
//         >
//           <Ionicons
//             name="trash-outline"
//             size={18}
//             color="#FF6B6B"
//             style={{ marginRight: 8 }}
//           />
//           <Text style={styles.deleteButtonText}>
//             {deleting ? "Deleting..." : "Delete Nexus"}
//           </Text>
//         </TouchableOpacity>

//         {/* Save + Reset */}
//         <TouchableOpacity
//           style={styles.saveButton}
//           activeOpacity={0.85}
//           onPress={handleSave}
//         >
//           <Text style={styles.saveButtonText}>Save</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleReset}
//           activeOpacity={0.7}
//           style={{ alignSelf: "center", marginTop: 8, marginBottom: 24 }}
//         >
//           <Text style={styles.resetText}>Reset to Default</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const CARD_RADIUS = 22;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#050B18",
//   },
//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
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
//   scrollContent: {
//     paddingBottom: 32,
//     paddingHorizontal: 20,
//   },
//   headerRow: {
//     marginTop: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerCenter: {
//     flex: 1,
//     alignItems: "center",
//   },
//   headerTitle: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   headerSubtitle: {
//     marginTop: 2,
//     fontSize: 11,
//     color: "rgba(255,255,255,0.7)",
//   },
//   section: {
//     marginBottom: 16,
//   },
//   label: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 13,
//     marginBottom: 10,
//     fontWeight: "500",
//   },
//   inputWrapper: {
//     borderRadius: 20,
//     backgroundColor: "#0B1730",
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//     overflow: "hidden",
//   },
//   input: {
//     height: 52,
//     paddingHorizontal: 16,
//     color: "#ffffff",
//     fontSize: 14,
//   },
//   card: {
//     marginTop: 10,
//     borderRadius: CARD_RADIUS,
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//     backgroundColor: "#060F24",
//     paddingTop: 18,
//     paddingHorizontal: 16,
//     paddingBottom: 12,
//   },
//   cardLabelPill: {
//     position: "absolute",
//     top: -12,
//     left: 24,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//     backgroundColor: "#050B18",
//     borderWidth: 1,
//     borderColor: "#2D57C8",
//   },
//   cardLabelText: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 11,
//     fontWeight: "500",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   rowDivider: {
//     height: 1,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   rowLabel: {
//     color: "#ffffff",
//     fontSize: 13,
//   },
//   rowRight: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   rowValue: {
//     color: "rgba(255,255,255,0.7)",
//     fontSize: 12,
//   },
//   cardFooterNote: {
//     marginTop: 8,
//     fontSize: 11,
//     color: "rgba(255,255,255,0.65)",
//   },
//   deleteButton: {
//     marginTop: 24,
//     alignSelf: "center",
//     width: width * 0.75,
//     height: 48,
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: "#FF4B4B",
//     backgroundColor: "rgba(255, 40, 40, 0.1)",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   deleteButtonText: {
//     color: "#FF6B6B",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   saveButton: {
//     marginTop: 18,
//     alignSelf: "center",
//     width: width * 0.5,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "#3255BA",
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.35,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 8 },
//     elevation: 5,
//   },
//   saveButtonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   resetText: {
//     color: "#9FB4FF",
//     fontSize: 13,
//   },
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
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// ✔ Correct base API URL (No :id here)
const API_BASE_URL = "http://192.168.1.5:3000/api/nexus";

export default function Nexus_Overview({ navigation, route }) {
  // ✔ params मधून id + नाव
  const nexusId = route?.params?.nexusId;
  const initialName = route?.params?.nexusName || "Shusshi Clean";

  const [nexusName, setNexusName] = useState(initialName);

  const [inactiveSpace, setInactiveSpace] = useState("No Inactive Space");
  const [timeoutValue, setTimeoutValue] = useState("5 minutes");

  const [systemSpace, setSystemSpace] = useState("General");
  const [joinMessageEnabled, setJoinMessageEnabled] = useState(true);

  const [showJoinLeave, setShowJoinLeave] = useState(true);
  const [showRoleChanges, setShowRoleChanges] = useState(true);
  const [showUsernameChanges, setShowUsernameChanges] = useState(true);

  const [deleting, setDeleting] = useState(false);

  const handleBack = () => navigation?.goBack?.();

  const handleSave = () => {
    Alert.alert(
      "Saved",
      `Nexus name: ${nexusName}\nInactive: ${inactiveSpace}\nTimeout: ${timeoutValue}\nSystem Space: ${systemSpace}`
    );
  };

  const handleReset = () => {
    setNexusName(initialName);
    setInactiveSpace("No Inactive Space");
    setTimeoutValue("5 minutes");
    setSystemSpace("General");
    setJoinMessageEnabled(true);
    setShowJoinLeave(true);
    setShowRoleChanges(true);
    setShowUsernameChanges(true);
    Alert.alert("Reset", "Settings reset to default (demo).");
  };

  // ⭐ Correct delete function
  const deleteNexusFromServer = async () => {
    if (!nexusId) {
      Alert.alert("Error", "Nexus ID missing.");
      return;
    }

    if (deleting) return;

    try {
      setDeleting(true);

      // ⭐ Correct URL => "/api/nexus/:id"
      const response = await fetch(`${API_BASE_URL}/${nexusId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`  (if required)
        },
      });

      let json = {};
      try {
        json = await response.json();
      } catch (parseErr) {
        throw new Error("Server did not return JSON. Check backend route.");
      }

      if (!response.ok || !json.success) {
        Alert.alert("Delete Failed", json.message || "Unable to delete Nexus.");
        return;
      }

      Alert.alert("Deleted", "Nexus deleted successfully.", [
        {
          text: "OK",
          onPress: () => navigation?.goBack?.(),
        },
      ]);
    } catch (err) {
      console.log("deleteNexus error =>", err);
      Alert.alert("Error", err.message || "Network error while deleting.");
    } finally {
      setDeleting(false);
    }
  };

  const handleDelete = () => {
    if (deleting) return;

    Alert.alert("Confirm Delete", "Delete this Nexus permanently?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: deleteNexusFromServer },
    ]);
  };

  const chooseInactiveSpace = () => {
    Alert.alert("Inactive Space", "Choose option", [
      { text: "No Inactive Space", onPress: () => setInactiveSpace("No Inactive Space") },
      { text: "Archive After 7 Days", onPress: () => setInactiveSpace("Archive After 7 Days") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const chooseTimeout = () =>
    Alert.alert("Timeout", "Choose timeout", [
      { text: "5 minutes", onPress: () => setTimeoutValue("5 minutes") },
      { text: "15 minutes", onPress: () => setTimeoutValue("15 minutes") },
      { text: "30 minutes", onPress: () => setTimeoutValue("30 minutes") },
      { text: "Cancel", style: "cancel" },
    ]);

  const chooseSystemSpace = () =>
    Alert.alert("System Space", "Choose space", [
      { text: "General", onPress: () => setSystemSpace("General") },
      { text: "Announcements", onPress: () => setSystemSpace("Announcements") },
      { text: "Cancel", style: "cancel" },
    ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBack}>
            <Ionicons name="chevron-back" size={24} color="#ffffff" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Nexus Overview</Text>
            <Text style={styles.headerSubtitle}>Settings for this Nexus only</Text>
          </View>

          <View style={{ width: 24 }} />
        </View>

        {/* Nexus Name */}
        <View style={styles.section}>
          <Text style={styles.label}>Nexus name</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={nexusName}
              onChangeText={setNexusName}
              placeholder="Enter nexus name"
              placeholderTextColor="rgba(255,255,255,0.5)"
            />
          </View>
        </View>

        {/* --- (KEEP REST OF YOUR UI SAME) --- */}

        {/* DELETE button */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
          disabled={deleting}
        >
          <Ionicons name="trash-outline" size={18} color="#FF6B6B" />
          <Text style={styles.deleteButtonText}>
            {deleting ? "Deleting..." : "Delete Nexus"}
          </Text>
        </TouchableOpacity>

        {/* Save */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleReset} style={{ marginTop: 10 }}>
          <Text style={styles.resetText}>Reset to Default</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const CARD_RADIUS = 22;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050B18" },
  scrollContent: { paddingBottom: 32, paddingHorizontal: 20 },
  headerRow: { marginTop: 12, flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerCenter: { flex: 1, alignItems: "center" },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
  headerSubtitle: { color: "rgba(255,255,255,0.7)", fontSize: 11 },
  section: { marginBottom: 16 },
  label: { color: "#fff", fontSize: 13, marginBottom: 10 },
  inputWrapper: {
    borderRadius: 20,
    backgroundColor: "#0B1730",
    borderWidth: 1,
    borderColor: "#2D57C8",
  },
  input: { height: 50, paddingHorizontal: 16, color: "#fff" },
  deleteButton: {
    marginTop: 24,
    alignSelf: "center",
    width: width * 0.75,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#FF4B4B",
    backgroundColor: "rgba(255, 40, 40, 0.1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: { color: "#FF6B6B", marginLeft: 8, fontSize: 14 },
  saveButton: {
    marginTop: 18,
    alignSelf: "center",
    width: width * 0.5,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3255BA",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  resetText: { color: "#9FB4FF", textAlign: "center", marginTop: 10 },
});

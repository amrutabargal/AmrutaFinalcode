// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   Platform,
// // // //   ScrollView,
// // // //   TouchableOpacity,
// // // //   Switch,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";
// // // // import { LinearGradient } from "expo-linear-gradient";

// // // // export default function V24({ navigation }) {
// // // //   const [autoSort, setAutoSort] = useState(true);
// // // //   const [chatExpanded, setChatExpanded] = useState(true);
// // // //   const [voiceExpanded, setVoiceExpanded] = useState(true);
// // // //   const [announceExpanded, setAnnounceExpanded] = useState(true);

// // // //   const handleBack = () => {
// // // //     if (navigation?.goBack) navigation.goBack();
// // // //   };

// // // //   const handleSave = () => {
// // // //     console.log("Save categories");
// // // //   };

// // // //   const handleReset = () => {
// // // //     console.log("Reset categories to default");
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar barStyle="light-content" />

// // // //       {/* Fake status bar (time + icons) */}
// // // //       <View style={styles.fakeStatusBar}>
// // // //         <Text style={styles.timeText}>9:41</Text>
// // // //         <View style={styles.fakeStatusIcons}>
// // // //           <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
// // // //           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
// // // //           <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
// // // //         </View>
// // // //       </View>

// // // //       <ScrollView
// // // //         style={{ flex: 1 }}
// // // //         contentContainerStyle={styles.scrollContent}
// // // //         showsVerticalScrollIndicator={false}
// // // //       >
// // // //         {/* Header */}
// // // //         <View style={styles.headerRow}>
// // // //           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // // //             <Ionicons name="chevron-back" size={24} color="#ffffff" />
// // // //           </TouchableOpacity>
// // // //           <Text style={styles.headerTitle}>Categories</Text>
// // // //           <View style={{ width: 24 }} />
// // // //         </View>

// // // //         {/* Chat Spaces (expanded with items) */}
// // // //         <CategoryGroupCard
// // // //           title="Chat Spaces"
// // // //           expanded={chatExpanded}
// // // //           onToggle={() => setChatExpanded((p) => !p)}
// // // //           items={[
// // // //             { icon: "#", label: "general", type: "text" },
// // // //             { icon: "#", label: "coffee-talk", type: "text" },
// // // //             { icon: "#", label: "memes", type: "text" },
// // // //           ]}
// // // //         />

// // // //         {/* Voice Zones (expanded with items) */}
// // // //         <CategoryGroupCard
// // // //           title="Voice Zones"
// // // //           expanded={voiceExpanded}
// // // //           onToggle={() => setVoiceExpanded((p) => !p)}
// // // //           items={[
// // // //             { icon: "mic-outline", label: "Hangout", type: "ion" },
// // // //             { icon: "mic-outline", label: "Game VC", type: "ion" },
// // // //           ]}
// // // //         />

// // // //         {/* Gaming Area (collapsed / simple block) */}
// // // //         <CollapsedCategoryCard title="Gaming Area" />

// // // //         {/* Announcements (expanded with items) */}
// // // //         <CategoryGroupCard
// // // //           title="Announcements"
// // // //           expanded={announceExpanded}
// // // //           onToggle={() => setAnnounceExpanded((p) => !p)}
// // // //           items={[
// // // //             { icon: "|", label: "global-news", type: "bar" },
// // // //             { icon: "|", label: "nexus-updates", type: "bar" },
// // // //           ]}
// // // //         />

// // // //         {/* Auto-sort toggle card */}
// // // //         <View style={styles.autoSortCard}>
// // // //           <Text style={styles.autoSortLabel}>Auto-Sort Spaces by Category</Text>
// // // //           <Switch
// // // //             value={autoSort}
// // // //             onValueChange={setAutoSort}
// // // //             thumbColor={autoSort ? "#1BFFFF" : "#ffffff"}
// // // //             trackColor={{ false: "#122347", true: "#2340A0" }}
// // // //           />
// // // //         </View>

// // // //         {/* Save button */}
// // // //         <TouchableOpacity
// // // //           activeOpacity={0.9}
// // // //           style={styles.saveButtonWrapper}
// // // //           onPress={handleSave}
// // // //         >
// // // //           <LinearGradient
// // // //             colors={["#355DFF", "#7F5DFF"]}
// // // //             start={{ x: 0, y: 0 }}
// // // //             end={{ x: 1, y: 1 }}
// // // //             style={styles.saveGradient}
// // // //           >
// // // //             <Text style={styles.saveText}>Save</Text>
// // // //           </LinearGradient>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity onPress={handleReset} activeOpacity={0.7}>
// // // //           <Text style={styles.resetText}>Reset to Default</Text>
// // // //         </TouchableOpacity>

// // // //         <View style={{ height: 40 }} />
// // // //       </ScrollView>
// // // //     </View>
// // // //   );
// // // // }

// // // // /* ---------- Small components ---------- */

// // // // function CategoryGroupCard({ title, expanded, onToggle, items }) {
// // // //   return (
// // // //     <View style={styles.categoryGroupContainer}>
// // // //       <View
// // // //         style={[
// // // //           styles.categoryHeaderRow,
// // // //           !expanded && styles.categoryHeaderOnly,
// // // //         ]}
// // // //       >
// // // //         <View style={styles.categoryHeaderLeft}>
// // // //           <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// // // //           <Text style={styles.categoryTitle}>{title}</Text>
// // // //         </View>
// // // //         <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
// // // //           <Ionicons
// // // //             name={expanded ? "chevron-up" : "chevron-down"}
// // // //             size={16}
// // // //             color="#9FB4FF"
// // // //           />
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       {expanded && (
// // // //         <View style={styles.categoryInnerCard}>
// // // //           {items.map((item, index) => {
// // // //             const isLast = index === items.length - 1;
// // // //             return (
// // // //               <View
// // // //                 key={`${item.label}-${index}`}
// // // //                 style={[
// // // //                   styles.categoryItemRow,
// // // //                   !isLast && styles.categoryItemBorder,
// // // //                 ]}
// // // //               >
// // // //                 <View style={styles.categoryItemLeft}>
// // // //                   {/* Left vertical bar to mimic screenshot */}
// // // //                   <View style={styles.categoryItemBar} />
// // // //                   <View style={{ flexDirection: "row", alignItems: "center" }}>
// // // //                     {item.type === "ion" ? (
// // // //                       <Ionicons
// // // //                         name={item.icon}
// // // //                         size={14}
// // // //                         color="#9FB4FF"
// // // //                         style={{ marginRight: 6 }}
// // // //                       />
// // // //                     ) : null}
// // // //                     <Text style={styles.categoryItemLabel}>
// // // //                       {item.type === "text" ? `# ${item.label}` : item.label}
// // // //                     </Text>
// // // //                   </View>
// // // //                 </View>
// // // //                 <Ionicons
// // // //                   name="chevron-forward"
// // // //                   size={14}
// // // //                   color="#9FB4FF"
// // // //                 />
// // // //               </View>
// // // //             );
// // // //           })}
// // // //         </View>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // function CollapsedCategoryCard({ title }) {
// // // //   return (
// // // //     <View style={styles.collapsedCard}>
// // // //       <View style={styles.categoryHeaderLeft}>
// // // //         <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// // // //         <Text style={styles.categoryTitle}>{title}</Text>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }

// // // // /* ---------- Styles ---------- */

// // // // const CARD_RADIUS = 18;

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#020821", // deep navy
// // // //   },

// // // //   fakeStatusBar: {
// // // //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   timeText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //   },
// // // //   fakeStatusIcons: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   fakeIcon: {
// // // //     marginLeft: 6,
// // // //   },

// // // //   scrollContent: {
// // // //     paddingBottom: 32,
// // // //     paddingHorizontal: 18,
// // // //   },

// // // //   headerRow: {
// // // //     marginTop: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   headerTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 20,
// // // //     fontWeight: "600",
// // // //   },

// // // //   /* Category group cards */

// // // //   categoryGroupContainer: {
// // // //     marginTop: 20,
// // // //   },

// // // //   categoryHeaderRow: {
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   categoryHeaderOnly: {
// // // //     // when collapsed, no extra inner block
// // // //   },

// // // //   categoryHeaderLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   categoryTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 14,
// // // //     marginLeft: 10,
// // // //     fontWeight: "500",
// // // //   },

// // // //   categoryInnerCard: {
// // // //     marginTop: 6,
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     overflow: "hidden",
// // // //   },

// // // //   categoryItemRow: {
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 10,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   categoryItemBorder: {
// // // //     borderBottomWidth: StyleSheet.hairlineWidth,
// // // //     borderBottomColor: "rgba(255,255,255,0.06)",
// // // //   },

// // // //   categoryItemLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     flex: 1,
// // // //   },

// // // //   categoryItemBar: {
// // // //     width: 2,
// // // //     height: "100%",
// // // //     borderRadius: 999,
// // // //     backgroundColor: "#264BFF",
// // // //     marginRight: 10,
// // // //   },

// // // //   categoryItemLabel: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //   },

// // // //   /* Collapsed card for single category */

// // // //   collapsedCard: {
// // // //     marginTop: 20,
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   /* Auto-sort toggle card */

// // // //   autoSortCard: {
// // // //     marginTop: 24,
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 18,
// // // //     paddingVertical: 14,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   autoSortLabel: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //   },

// // // //   /* Save + reset */

// // // //   saveButtonWrapper: {
// // // //     marginTop: 24,
// // // //     borderRadius: CARD_RADIUS,
// // // //     overflow: "hidden",
// // // //   },
// // // //   saveGradient: {
// // // //     paddingVertical: 13,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   saveText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 15,
// // // //     fontWeight: "600",
// // // //   },
// // // //   resetText: {
// // // //     marginTop: 10,
// // // //     textAlign: "center",
// // // //     color: "rgba(255,255,255,0.6)",
// // // //     fontSize: 12,
// // // //   },
// // // // });

// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   Platform,
// // // //   ScrollView,
// // // //   TouchableOpacity,
// // // //   Switch,
// // // //   Modal,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";
// // // // import { LinearGradient } from "expo-linear-gradient";

// // // // export default function V24({ navigation }) {
// // // //   const [autoSort, setAutoSort] = useState(true);
// // // //   const [chatExpanded, setChatExpanded] = useState(true);
// // // //   const [voiceExpanded, setVoiceExpanded] = useState(true);
// // // //   const [announceExpanded, setAnnounceExpanded] = useState(true);

// // // //   // popup state
// // // //   const [showAutoPopup, setShowAutoPopup] = useState(false);

// // // //   const handleBack = () => {
// // // //     if (navigation?.goBack) navigation.goBack();
// // // //   };

// // // //   const handleSave = () => {
// // // //     console.log("Save categories");
// // // //   };

// // // //   const handleReset = () => {
// // // //     console.log("Reset categories to default");
// // // //   };

// // // //   // called when user toggles switch
// // // //   const onToggleAutoSort = (value) => {
// // // //     // if turning on, show popup
// // // //     if (value) {
// // // //       setAutoSort(true);
// // // //       setShowAutoPopup(true);
// // // //     } else {
// // // //       setAutoSort(false);
// // // //     }
// // // //   };

// // // //   // navigate to create screens
// // // //   const openCreateCategory = () => {
// // // //     if (navigation?.navigate) navigation.navigate("Setting_category_create_category");
// // // //   };

// // // //   const openCreateSpace = () => {
// // // //     if (navigation?.navigate) navigation.navigate("Setting_category_create_Space");
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar barStyle="light-content" />

// // // //       {/* Fake status bar (time + icons) */}
// // // //       <View style={styles.fakeStatusBar}>
// // // //         <Text style={styles.timeText}>9:41</Text>
// // // //         <View style={styles.fakeStatusIcons}>
// // // //           <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
// // // //           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
// // // //           <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
// // // //         </View>
// // // //       </View>

// // // //       <ScrollView
// // // //         style={{ flex: 1 }}
// // // //         contentContainerStyle={styles.scrollContent}
// // // //         showsVerticalScrollIndicator={false}
// // // //       >
// // // //         {/* Header */}
// // // //         <View style={styles.headerRow}>
// // // //           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // // //             <Ionicons name="chevron-back" size={24} color="#ffffff" />
// // // //           </TouchableOpacity>
// // // //           <Text style={styles.headerTitle}>Categories</Text>
// // // //           <View style={{ width: 24 }} />
// // // //         </View>

// // // //         {/* Chat Spaces (expanded with items) */}
// // // //         <CategoryGroupCard
// // // //           title="Chat Spaces"
// // // //           expanded={chatExpanded}
// // // //           onToggle={() => setChatExpanded((p) => !p)}
// // // //           items={[
// // // //             { icon: "#", label: "general", type: "text" },
// // // //             { icon: "#", label: "coffee-talk", type: "text" },
// // // //             { icon: "#", label: "memes", type: "text" },
// // // //           ]}
// // // //         />

// // // //         {/* Voice Zones (expanded with items) */}
// // // //         <CategoryGroupCard
// // // //           title="Voice Zones"
// // // //           expanded={voiceExpanded}
// // // //           onToggle={() => setVoiceExpanded((p) => !p)}
// // // //           items={[
// // // //             { icon: "mic-outline", label: "Hangout", type: "ion" },
// // // //             { icon: "mic-outline", label: "Game VC", type: "ion" },
// // // //           ]}
// // // //         />

// // // //         {/* Gaming Area (collapsed / simple block) */}
// // // //         <CollapsedCategoryCard title="Gaming Area" />

// // // //         {/* Announcements (expanded with items) */}
// // // //         <CategoryGroupCard
// // // //           title="Announcements"
// // // //           expanded={announceExpanded}
// // // //           onToggle={() => setAnnounceExpanded((p) => !p)}
// // // //           items={[
// // // //             { icon: "|", label: "global-news", type: "bar" },
// // // //             { icon: "|", label: "nexus-updates", type: "bar" },
// // // //           ]}
// // // //         />

// // // //         {/* Auto-sort toggle card */}
// // // //         <View style={styles.autoSortCard}>
// // // //           <Text style={styles.autoSortLabel}>Auto-Sort Spaces by Category</Text>
// // // //           <Switch
// // // //             value={autoSort}
// // // //             onValueChange={onToggleAutoSort}
// // // //             thumbColor={autoSort ? "#1BFFFF" : "#ffffff"}
// // // //             trackColor={{ false: "#122347", true: "#2340A0" }}
// // // //           />
// // // //         </View>

// // // //         {/* Action buttons: Create Category / Create Space */}
// // // //         <View style={styles.actionsContainer}>
// // // //           <TouchableOpacity
// // // //             style={[styles.actionCard, styles.actionCardPrimary]}
// // // //             activeOpacity={0.85}
// // // //             onPress={openCreateCategory}
// // // //           >
// // // //             <View style={styles.actionRow}>
// // // //               <Ionicons name="albums-outline" size={18} color="#fff" />
// // // //               <Text style={styles.actionText}>Create Category</Text>
// // // //             </View>
// // // //             <Ionicons name="chevron-forward" size={16} color="#fff" />
// // // //           </TouchableOpacity>

// // // //           <TouchableOpacity
// // // //             style={[styles.actionCard, styles.actionCardSecondary]}
// // // //             activeOpacity={0.85}
// // // //             onPress={openCreateSpace}
// // // //           >
// // // //             <View style={styles.actionRow}>
// // // //               <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
// // // //               <Text style={styles.actionText}>Create Space</Text>
// // // //             </View>
// // // //             <Ionicons name="chevron-forward" size={16} color="#fff" />
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         {/* Save button */}
// // // //         <TouchableOpacity
// // // //           activeOpacity={0.9}
// // // //           style={styles.saveButtonWrapper}
// // // //           onPress={handleSave}
// // // //         >
// // // //           <LinearGradient
// // // //             colors={["#355DFF", "#7F5DFF"]}
// // // //             start={{ x: 0, y: 0 }}
// // // //             end={{ x: 1, y: 1 }}
// // // //             style={styles.saveGradient}
// // // //           >
// // // //             <Text style={styles.saveText}>Save</Text>
// // // //           </LinearGradient>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity onPress={handleReset} activeOpacity={0.7}>
// // // //           <Text style={styles.resetText}>Reset to Default</Text>
// // // //         </TouchableOpacity>

// // // //         <View style={{ height: 40 }} />
// // // //       </ScrollView>

// // // //       {/* ---------- Modal / Popup shown when enabling Auto-Sort ---------- */}
// // // //       <Modal
// // // //         visible={showAutoPopup}
// // // //         transparent
// // // //         animationType="fade"
// // // //         onRequestClose={() => setShowAutoPopup(false)}
// // // //       >
// // // //         <View style={styles.modalOverlay}>
// // // //           <View style={styles.modalCard}>
// // // //             <Text style={styles.modalTitle}>Auto-Sort Enabled</Text>
// // // //             <Text style={styles.modalBody}>
// // // //               When Auto-Sort is on, new spaces will automatically be grouped under their
// // // //               respective categories. You can turn this off anytime from this screen.
// // // //             </Text>

// // // //             <View style={styles.modalButtonsRow}>
// // // //               <TouchableOpacity
// // // //                 style={[styles.modalButton, styles.modalButtonSecondary]}
// // // //                 onPress={() => {
// // // //                   setShowAutoPopup(false);
// // // //                 }}
// // // //                 activeOpacity={0.8}
// // // //               >
// // // //                 <Text style={styles.modalButtonTextSecondary}>Got it</Text>
// // // //               </TouchableOpacity>

// // // //               <TouchableOpacity
// // // //                 style={[styles.modalButton, styles.modalButtonPrimary]}
// // // //                 onPress={() => {
// // // //                   setShowAutoPopup(false);
// // // //                 }}
// // // //                 activeOpacity={0.8}
// // // //               >
// // // //                 <Text style={styles.modalButtonTextPrimary}>Okay</Text>
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //           </View>
// // // //         </View>
// // // //       </Modal>
// // // //     </View>
// // // //   );
// // // // }

// // // // /* ---------- Small components ---------- */

// // // // function CategoryGroupCard({ title, expanded, onToggle, items }) {
// // // //   return (
// // // //     <View style={styles.categoryGroupContainer}>
// // // //       <View
// // // //         style={[
// // // //           styles.categoryHeaderRow,
// // // //           !expanded && styles.categoryHeaderOnly,
// // // //         ]}
// // // //       >
// // // //         <View style={styles.categoryHeaderLeft}>
// // // //           <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// // // //           <Text style={styles.categoryTitle}>{title}</Text>
// // // //         </View>
// // // //         <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
// // // //           <Ionicons
// // // //             name={expanded ? "chevron-up" : "chevron-down"}
// // // //             size={16}
// // // //             color="#9FB4FF"
// // // //           />
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       {expanded && (
// // // //         <View style={styles.categoryInnerCard}>
// // // //           {items.map((item, index) => {
// // // //             const isLast = index === items.length - 1;
// // // //             return (
// // // //               <View
// // // //                 key={`${item.label}-${index}`}
// // // //                 style={[
// // // //                   styles.categoryItemRow,
// // // //                   !isLast && styles.categoryItemBorder,
// // // //                 ]}
// // // //               >
// // // //                 <View style={styles.categoryItemLeft}>
// // // //                   {/* Left vertical bar to mimic screenshot */}
// // // //                   <View style={styles.categoryItemBar} />
// // // //                   <View style={{ flexDirection: "row", alignItems: "center" }}>
// // // //                     {item.type === "ion" ? (
// // // //                       <Ionicons
// // // //                         name={item.icon}
// // // //                         size={14}
// // // //                         color="#9FB4FF"
// // // //                         style={{ marginRight: 6 }}
// // // //                       />
// // // //                     ) : null}
// // // //                     <Text style={styles.categoryItemLabel}>
// // // //                       {item.type === "text" ? `# ${item.label}` : item.label}
// // // //                     </Text>
// // // //                   </View>
// // // //                 </View>
// // // //                 <Ionicons
// // // //                   name="chevron-forward"
// // // //                   size={14}
// // // //                   color="#9FB4FF"
// // // //                 />
// // // //               </View>
// // // //             );
// // // //           })}
// // // //         </View>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // function CollapsedCategoryCard({ title }) {
// // // //   return (
// // // //     <View style={styles.collapsedCard}>
// // // //       <View style={styles.categoryHeaderLeft}>
// // // //         <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// // // //         <Text style={styles.categoryTitle}>{title}</Text>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }

// // // // /* ---------- Styles ---------- */

// // // // const CARD_RADIUS = 18;

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#020821", // deep navy
// // // //   },

// // // //   fakeStatusBar: {
// // // //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   timeText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //   },
// // // //   fakeStatusIcons: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   fakeIcon: {
// // // //     marginLeft: 6,
// // // //   },

// // // //   scrollContent: {
// // // //     paddingBottom: 32,
// // // //     paddingHorizontal: 18,
// // // //   },

// // // //   headerRow: {
// // // //     marginTop: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   headerTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 20,
// // // //     fontWeight: "600",
// // // //   },

// // // //   /* Category group cards */

// // // //   categoryGroupContainer: {
// // // //     marginTop: 20,
// // // //   },

// // // //   categoryHeaderRow: {
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   categoryHeaderOnly: {
// // // //     // when collapsed, no extra inner block
// // // //   },

// // // //   categoryHeaderLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   categoryTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 14,
// // // //     marginLeft: 10,
// // // //     fontWeight: "500",
// // // //   },

// // // //   categoryInnerCard: {
// // // //     marginTop: 6,
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     overflow: "hidden",
// // // //   },

// // // //   categoryItemRow: {
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 10,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   categoryItemBorder: {
// // // //     borderBottomWidth: StyleSheet.hairlineWidth,
// // // //     borderBottomColor: "rgba(255,255,255,0.06)",
// // // //   },

// // // //   categoryItemLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     flex: 1,
// // // //   },

// // // //   categoryItemBar: {
// // // //     width: 2,
// // // //     height: "100%",
// // // //     borderRadius: 999,
// // // //     backgroundColor: "#264BFF",
// // // //     marginRight: 10,
// // // //   },

// // // //   categoryItemLabel: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //   },

// // // //   /* Collapsed card for single category */

// // // //   collapsedCard: {
// // // //     marginTop: 20,
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   /* Auto-sort toggle card */

// // // //   autoSortCard: {
// // // //     marginTop: 24,
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 18,
// // // //     paddingVertical: 14,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   autoSortLabel: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //   },

// // // //   /* Actions (Create Category / Create Space) */
// // // //   actionsContainer: {
// // // //     marginTop: 20,
// // // //   },
// // // //   actionCard: {
// // // //     borderRadius: 14,
// // // //     paddingHorizontal: 14,
// // // //     paddingVertical: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     marginBottom: 12,
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     backgroundColor: "#071739",
// // // //   },
// // // //   actionCardPrimary: {
// // // //     // slightly highlighted
// // // //     backgroundColor: "#0E294B",
// // // //   },
// // // //   actionCardSecondary: {
// // // //     backgroundColor: "#071739",
// // // //   },
// // // //   actionRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   actionText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 14,
// // // //     marginLeft: 10,
// // // //     fontWeight: "500",
// // // //   },

// // // //   /* Save + reset */

// // // //   saveButtonWrapper: {
// // // //     marginTop: 8,
// // // //     borderRadius: CARD_RADIUS,
// // // //     overflow: "hidden",
// // // //   },
// // // //   saveGradient: {
// // // //     paddingVertical: 13,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   saveText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 15,
// // // //     fontWeight: "600",
// // // //   },
// // // //   resetText: {
// // // //     marginTop: 10,
// // // //     textAlign: "center",
// // // //     color: "rgba(255,255,255,0.6)",
// // // //     fontSize: 12,
// // // //   },

// // // //   /* Modal styles */
// // // //   modalOverlay: {
// // // //     flex: 1,
// // // //     backgroundColor: "rgba(1,6,20,0.7)",
// // // //     justifyContent: "flex-end", // appear from bottom like screenshot
// // // //     padding: 20,
// // // //   },
// // // //   modalCard: {
// // // //     backgroundColor: "#06152B",
// // // //     borderRadius: 20,
// // // //     padding: 18,
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     shadowColor: "#000",
// // // //     shadowOpacity: 0.25,
// // // //     shadowRadius: 10,
// // // //   },
// // // //   modalTitle: {
// // // //     color: "#fff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //     marginBottom: 8,
// // // //   },
// // // //   modalBody: {
// // // //     color: "rgba(255,255,255,0.85)",
// // // //     fontSize: 13,
// // // //     lineHeight: 18,
// // // //     marginBottom: 16,
// // // //   },
// // // //   modalButtonsRow: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "flex-end",
// // // //   },
// // // //   modalButton: {
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 14,
// // // //     borderRadius: 12,
// // // //     minWidth: 90,
// // // //     alignItems: "center",
// // // //     marginLeft: 10,
// // // //   },
// // // //   modalButtonPrimary: {
// // // //     backgroundColor: "#355DFF",
// // // //   },
// // // //   modalButtonSecondary: {
// // // //     backgroundColor: "transparent",
// // // //     borderWidth: 1,
// // // //     borderColor: "#355DFF",
// // // //   },
// // // //   modalButtonTextPrimary: {
// // // //     color: "#fff",
// // // //     fontWeight: "600",
// // // //   },
// // // //   modalButtonTextSecondary: {
// // // //     color: "#fff",
// // // //     fontWeight: "600",
// // // //   },
// // // // });
// // // import React, { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   Platform,
// // //   ScrollView,
// // //   TouchableOpacity,
// // //   Switch,
// // //   Modal,
// // // } from "react-native";
// // // import { Ionicons } from "@expo/vector-icons";
// // // import { LinearGradient } from "expo-linear-gradient";

// // // export default function V24({ navigation }) {
// // //   const [autoSort, setAutoSort] = useState(true);
// // //   const [chatExpanded, setChatExpanded] = useState(true);
// // //   const [voiceExpanded, setVoiceExpanded] = useState(true);
// // //   const [announceExpanded, setAnnounceExpanded] = useState(true);

// // //   // popup state
// // //   const [showAutoPopup, setShowAutoPopup] = useState(false);

// // //   const handleBack = () => {
// // //     if (navigation?.goBack) navigation.goBack();
// // //   };

// // //   const handleSave = () => {
// // //     console.log("Save categories");
// // //   };

// // //   const handleReset = () => {
// // //     console.log("Reset categories to default");
// // //   };

// // //   // called when user toggles switch
// // //   const onToggleAutoSort = (value) => {
// // //     // if turning on, show popup and show create buttons
// // //     if (value) {
// // //       setAutoSort(true);
// // //       setShowAutoPopup(true);
// // //     } else {
// // //       // hide create buttons when off
// // //       setAutoSort(false);
// // //     }
// // //   };

// // //   // navigate to create screens
// // //   const openCreateCategory = () => {
// // //     if (navigation?.navigate) navigation.navigate("Setting_category_create_category");
// // //   };

// // //   const openCreateSpace = () => {
// // //     if (navigation?.navigate) navigation.navigate("Setting_category_create_Space");
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="light-content" />

// // //       {/* Fake status bar (time + icons) */}
// // //       <View style={styles.fakeStatusBar}>
// // //         <Text style={styles.timeText}>9:41</Text>
// // //         <View style={styles.fakeStatusIcons}>
// // //           <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
// // //           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
// // //           <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
// // //         </View>
// // //       </View>

// // //       <ScrollView
// // //         style={{ flex: 1 }}
// // //         contentContainerStyle={styles.scrollContent}
// // //         showsVerticalScrollIndicator={false}
// // //       >
// // //         {/* Header */}
// // //         <View style={styles.headerRow}>
// // //           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // //             <Ionicons name="chevron-back" size={24} color="#ffffff" />
// // //           </TouchableOpacity>
// // //           <Text style={styles.headerTitle}>Categories</Text>
// // //           <View style={{ width: 24 }} />
// // //         </View>

// // //         {/* Chat Spaces (expanded with items) */}
// // //         <CategoryGroupCard
// // //           title="Chat Spaces"
// // //           expanded={chatExpanded}
// // //           onToggle={() => setChatExpanded((p) => !p)}
// // //           items={[
// // //             { icon: "#", label: "general", type: "text" },
// // //             { icon: "#", label: "coffee-talk", type: "text" },
// // //             { icon: "#", label: "memes", type: "text" },
// // //           ]}
// // //         />

// // //         {/* Voice Zones (expanded with items) */}
// // //         <CategoryGroupCard
// // //           title="Voice Zones"
// // //           expanded={voiceExpanded}
// // //           onToggle={() => setVoiceExpanded((p) => !p)}
// // //           items={[
// // //             { icon: "mic-outline", label: "Hangout", type: "ion" },
// // //             { icon: "mic-outline", label: "Game VC", type: "ion" },
// // //           ]}
// // //         />

// // //         {/* Gaming Area (collapsed / simple block) */}
// // //         <CollapsedCategoryCard title="Gaming Area" />

// // //         {/* Announcements (expanded with items) */}
// // //         <CategoryGroupCard
// // //           title="Announcements"
// // //           expanded={announceExpanded}
// // //           onToggle={() => setAnnounceExpanded((p) => !p)}
// // //           items={[
// // //             { icon: "|", label: "global-news", type: "bar" },
// // //             { icon: "|", label: "nexus-updates", type: "bar" },
// // //           ]}
// // //         />

// // //         {/* Auto-sort toggle card */}
// // //         <View style={styles.autoSortCard}>
// // //           <Text style={styles.autoSortLabel}>Auto-Sort Spaces by Category</Text>
// // //           <Switch
// // //             value={autoSort}
// // //             onValueChange={onToggleAutoSort}
// // //             thumbColor={autoSort ? "#1BFFFF" : "#ffffff"}
// // //             trackColor={{ false: "#122347", true: "#2340A0" }}
// // //           />
// // //         </View>

// // //         {/* Action buttons: Create Category / Create Space
// // //             NOTE: rendered only when autoSort === true */}
// // //         {autoSort && (
// // //           <View style={styles.actionsContainer}>
// // //             <TouchableOpacity
// // //               style={[styles.actionCard, styles.actionCardPrimary]}
// // //               activeOpacity={0.85}
// // //               onPress={openCreateCategory}
// // //             >
// // //               <View style={styles.actionRow}>
// // //                 <Ionicons name="albums-outline" size={18} color="#fff" />
// // //                 <Text style={styles.actionText}>Create Category</Text>
// // //               </View>
// // //               <Ionicons name="chevron-forward" size={16} color="#fff" />
// // //             </TouchableOpacity>

// // //             <TouchableOpacity
// // //               style={[styles.actionCard, styles.actionCardSecondary]}
// // //               activeOpacity={0.85}
// // //               onPress={openCreateSpace}
// // //             >
// // //               <View style={styles.actionRow}>
// // //                 <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
// // //                 <Text style={styles.actionText}>Create Space</Text>
// // //               </View>
// // //               <Ionicons name="chevron-forward" size={16} color="#fff" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         )}

// // //         {/* Save button */}
// // //         <TouchableOpacity
// // //           activeOpacity={0.9}
// // //           style={styles.saveButtonWrapper}
// // //           onPress={handleSave}
// // //         >
// // //           <LinearGradient
// // //             colors={["#355DFF", "#7F5DFF"]}
// // //             start={{ x: 0, y: 0 }}
// // //             end={{ x: 1, y: 1 }}
// // //             style={styles.saveGradient}
// // //           >
// // //             <Text style={styles.saveText}>Save</Text>
// // //           </LinearGradient>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity onPress={handleReset} activeOpacity={0.7}>
// // //           <Text style={styles.resetText}>Reset to Default</Text>
// // //         </TouchableOpacity>

// // //         <View style={{ height: 40 }} />
// // //       </ScrollView>

// // //       {/* ---------- Modal / Popup shown when enabling Auto-Sort ---------- */}
// // //       <Modal
// // //         visible={showAutoPopup}
// // //         transparent
// // //         animationType="fade"
// // //         onRequestClose={() => setShowAutoPopup(false)}
// // //       >
// // //         <View style={styles.modalOverlay}>
// // //           <View style={styles.modalCard}>
// // //             <Text style={styles.modalTitle}>Auto-Sort Enabled</Text>
// // //             <Text style={styles.modalBody}>
// // //               When Auto-Sort is on, new spaces will automatically be grouped under their
// // //               respective categories. You can turn this off anytime from this screen.
// // //             </Text>

// // //             <View style={styles.modalButtonsRow}>
// // //               <TouchableOpacity
// // //                 style={[styles.modalButton, styles.modalButtonSecondary]}
// // //                 onPress={() => {
// // //                   setShowAutoPopup(false);
// // //                 }}
// // //                 activeOpacity={0.8}
// // //               >
// // //                 <Text style={styles.modalButtonTextSecondary}>Got it</Text>
// // //               </TouchableOpacity>

// // //               <TouchableOpacity
// // //                 style={[styles.modalButton, styles.modalButtonPrimary]}
// // //                 onPress={() => {
// // //                   setShowAutoPopup(false);
// // //                 }}
// // //                 activeOpacity={0.8}
// // //               >
// // //                 <Text style={styles.modalButtonTextPrimary}>Okay</Text>
// // //               </TouchableOpacity>
// // //             </View>
// // //           </View>
// // //         </View>
// // //       </Modal>
// // //     </View>
// // //   );
// // // }

// // // /* ---------- Small components ---------- */

// // // function CategoryGroupCard({ title, expanded, onToggle, items }) {
// // //   return (
// // //     <View style={styles.categoryGroupContainer}>
// // //       <View
// // //         style={[
// // //           styles.categoryHeaderRow,
// // //           !expanded && styles.categoryHeaderOnly,
// // //         ]}
// // //       >
// // //         <View style={styles.categoryHeaderLeft}>
// // //           <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// // //           <Text style={styles.categoryTitle}>{title}</Text>
// // //         </View>
// // //         <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
// // //           <Ionicons
// // //             name={expanded ? "chevron-up" : "chevron-down"}
// // //             size={16}
// // //             color="#9FB4FF"
// // //           />
// // //         </TouchableOpacity>
// // //       </View>

// // //       {expanded && (
// // //         <View style={styles.categoryInnerCard}>
// // //           {items.map((item, index) => {
// // //             const isLast = index === items.length - 1;
// // //             return (
// // //               <View
// // //                 key={`${item.label}-${index}`}
// // //                 style={[
// // //                   styles.categoryItemRow,
// // //                   !isLast && styles.categoryItemBorder,
// // //                 ]}
// // //               >
// // //                 <View style={styles.categoryItemLeft}>
// // //                   {/* Left vertical bar to mimic screenshot */}
// // //                   <View style={styles.categoryItemBar} />
// // //                   <View style={{ flexDirection: "row", alignItems: "center" }}>
// // //                     {item.type === "ion" ? (
// // //                       <Ionicons
// // //                         name={item.icon}
// // //                         size={14}
// // //                         color="#9FB4FF"
// // //                         style={{ marginRight: 6 }}
// // //                       />
// // //                     ) : null}
// // //                     <Text style={styles.categoryItemLabel}>
// // //                       {item.type === "text" ? `# ${item.label}` : item.label}
// // //                     </Text>
// // //                   </View>
// // //                 </View>
// // //                 <Ionicons
// // //                   name="chevron-forward"
// // //                   size={14}
// // //                   color="#9FB4FF"
// // //                 />
// // //               </View>
// // //             );
// // //           })}
// // //         </View>
// // //       )}
// // //     </View>
// // //   );
// // // }

// // // function CollapsedCategoryCard({ title }) {
// // //   return (
// // //     <View style={styles.collapsedCard}>
// // //       <View style={styles.categoryHeaderLeft}>
// // //         <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// // //         <Text style={styles.categoryTitle}>{title}</Text>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // /* ---------- Styles ---------- */

// // // const CARD_RADIUS = 18;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#020821", // deep navy
// // //   },

// // //   fakeStatusBar: {
// // //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// // //     paddingHorizontal: 20,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },
// // //   timeText: {
// // //     color: "#ffffff",
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //   },
// // //   fakeStatusIcons: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   fakeIcon: {
// // //     marginLeft: 6,
// // //   },

// // //   scrollContent: {
// // //     paddingBottom: 32,
// // //     paddingHorizontal: 18,
// // //   },

// // //   headerRow: {
// // //     marginTop: 12,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },
// // //   headerTitle: {
// // //     color: "#ffffff",
// // //     fontSize: 20,
// // //     fontWeight: "600",
// // //   },

// // //   /* Category group cards */

// // //   categoryGroupContainer: {
// // //     marginTop: 20,
// // //   },

// // //   categoryHeaderRow: {
// // //     borderRadius: CARD_RADIUS,
// // //     backgroundColor: "#071739",
// // //     borderWidth: 1,
// // //     borderColor: "#132652",
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 12,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },

// // //   categoryHeaderOnly: {
// // //     // when collapsed, no extra inner block
// // //   },

// // //   categoryHeaderLeft: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   categoryTitle: {
// // //     color: "#ffffff",
// // //     fontSize: 14,
// // //     marginLeft: 10,
// // //     fontWeight: "500",
// // //   },

// // //   categoryInnerCard: {
// // //     marginTop: 6,
// // //     borderRadius: CARD_RADIUS,
// // //     backgroundColor: "#071739",
// // //     borderWidth: 1,
// // //     borderColor: "#132652",
// // //     overflow: "hidden",
// // //   },

// // //   categoryItemRow: {
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 10,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },

// // //   categoryItemBorder: {
// // //     borderBottomWidth: StyleSheet.hairlineWidth,
// // //     borderBottomColor: "rgba(255,255,255,0.06)",
// // //   },

// // //   categoryItemLeft: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     flex: 1,
// // //   },

// // //   categoryItemBar: {
// // //     width: 2,
// // //     height: "100%",
// // //     borderRadius: 999,
// // //     backgroundColor: "#264BFF",
// // //     marginRight: 10,
// // //   },

// // //   categoryItemLabel: {
// // //     color: "#ffffff",
// // //     fontSize: 13,
// // //   },

// // //   /* Collapsed card for single category */

// // //   collapsedCard: {
// // //     marginTop: 20,
// // //     borderRadius: CARD_RADIUS,
// // //     backgroundColor: "#071739",
// // //     borderWidth: 1,
// // //     borderColor: "#132652",
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 12,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },

// // //   /* Auto-sort toggle card */

// // //   autoSortCard: {
// // //     marginTop: 24,
// // //     borderRadius: CARD_RADIUS,
// // //     backgroundColor: "#071739",
// // //     borderWidth: 1,
// // //     borderColor: "#132652",
// // //     paddingHorizontal: 18,
// // //     paddingVertical: 14,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },
// // //   autoSortLabel: {
// // //     color: "#ffffff",
// // //     fontSize: 13,
// // //   },

// // //   /* Actions (Create Category / Create Space) */
// // //   actionsContainer: {
// // //     marginTop: 20,
// // //   },
// // //   actionCard: {
// // //     borderRadius: 14,
// // //     paddingHorizontal: 14,
// // //     paddingVertical: 12,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //     marginBottom: 12,
// // //     borderWidth: 1,
// // //     borderColor: "#132652",
// // //     backgroundColor: "#071739",
// // //   },
// // //   actionCardPrimary: {
// // //     // slightly highlighted
// // //     backgroundColor: "#0E294B",
// // //   },
// // //   actionCardSecondary: {
// // //     backgroundColor: "#071739",
// // //   },
// // //   actionRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   actionText: {
// // //     color: "#ffffff",
// // //     fontSize: 14,
// // //     marginLeft: 10,
// // //     fontWeight: "500",
// // //   },

// // //   /* Save + reset */

// // //   saveButtonWrapper: {
// // //     marginTop: 8,
// // //     borderRadius: CARD_RADIUS,
// // //     overflow: "hidden",
// // //   },
// // //   saveGradient: {
// // //     paddingVertical: 13,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   saveText: {
// // //     color: "#ffffff",
// // //     fontSize: 15,
// // //     fontWeight: "600",
// // //   },
// // //   resetText: {
// // //     marginTop: 10,
// // //     textAlign: "center",
// // //     color: "rgba(255,255,255,0.6)",
// // //     fontSize: 12,
// // //   },

// // //   /* Modal styles */
// // //   modalOverlay: {
// // //     flex: 1,
// // //     backgroundColor: "rgba(1,6,20,0.7)",
// // //     justifyContent: "flex-end", // appear from bottom like screenshot
// // //     padding: 20,
// // //   },
// // //   modalCard: {
// // //     backgroundColor: "#06152B",
// // //     borderRadius: 20,
// // //     padding: 18,
// // //     borderWidth: 1,
// // //     borderColor: "#132652",
// // //     shadowColor: "#000",
// // //     shadowOpacity: 0.25,
// // //     shadowRadius: 10,
// // //   },
// // //   modalTitle: {
// // //     color: "#fff",
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //     marginBottom: 8,
// // //   },
// // //   modalBody: {
// // //     color: "rgba(255,255,255,0.85)",
// // //     fontSize: 13,
// // //     lineHeight: 18,
// // //     marginBottom: 16,
// // //   },
// // //   modalButtonsRow: {
// // //     flexDirection: "row",
// // //     justifyContent: "flex-end",
// // //   },
// // //   modalButton: {
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 14,
// // //     borderRadius: 12,
// // //     minWidth: 90,
// // //     alignItems: "center",
// // //     marginLeft: 10,
// // //   },
// // //   modalButtonPrimary: {
// // //     backgroundColor: "#355DFF",
// // //   },
// // //   modalButtonSecondary: {
// // //     backgroundColor: "transparent",
// // //     borderWidth: 1,
// // //     borderColor: "#355DFF",
// // //   },
// // //   modalButtonTextPrimary: {
// // //     color: "#fff",
// // //     fontWeight: "600",
// // //   },
// // //   modalButtonTextSecondary: {
// // //     color: "#fff",
// // //     fontWeight: "600",
// // //   },
// // // });


// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   StatusBar,
// //   Platform,
// //   ScrollView,
// //   TouchableOpacity,
// //   Switch,
// //   Modal,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { LinearGradient } from "expo-linear-gradient";

// // export default function V24({ navigation }) {
// //   // DEFAULT: off
// //   const [autoSort, setAutoSort] = useState(false);
// //   const [chatExpanded, setChatExpanded] = useState(true);
// //   const [voiceExpanded, setVoiceExpanded] = useState(true);
// //   const [announceExpanded, setAnnounceExpanded] = useState(true);

// //   // popup state
// //   const [showAutoPopup, setShowAutoPopup] = useState(false);

// //   const handleBack = () => {
// //     if (navigation?.goBack) navigation.goBack();
// //   };

// //   const handleSave = () => {
// //     console.log("Save categories");
// //   };

// //   const handleReset = () => {
// //     console.log("Reset categories to default");
// //   };

// //   // called when user toggles switch
// //   const onToggleAutoSort = (value) => {
// //     if (value) {
// //       // user turned ON -> temporarily enable and show popup
// //       setAutoSort(true);
// //       setShowAutoPopup(true);
// //     } else {
// //       // user turned OFF manually -> just turn off and ensure popup closed
// //       setAutoSort(false);
// //       setShowAutoPopup(false);
// //     }
// //   };

// //   // close modal handler that reverts to OFF (keeps autoSort off by default)
// //   const closeAutoPopupAndRevert = () => {
// //     setShowAutoPopup(false);
// //     setAutoSort(false);
// //   };

// //   // navigate to create screens
// //   const openCreateCategory = () => {
// //     if (navigation?.navigate) navigation.navigate("Setting_category_create_category");
// //   };

// //   const openCreateSpace = () => {
// //     if (navigation?.navigate) navigation.navigate("Setting_category_create_Space");
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="light-content" />

// //       {/* Fake status bar (time + icons) */}
// //       <View style={styles.fakeStatusBar}>
// //         <Text style={styles.timeText}>9:41</Text>
// //         <View style={styles.fakeStatusIcons}>
// //           <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
// //           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
// //           <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
// //         </View>
// //       </View>

// //       <ScrollView
// //         style={{ flex: 1 }}
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Header */}
// //         <View style={styles.headerRow}>
// //           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// //             <Ionicons name="chevron-back" size={24} color="#ffffff" />
// //           </TouchableOpacity>
// //           <Text style={styles.headerTitle}>Categories</Text>
// //           <View style={{ width: 24 }} />
// //         </View>

// //         {/* Chat Spaces (expanded with items) */}
// //         <CategoryGroupCard
// //           title="Chat Spaces"
// //           expanded={chatExpanded}
// //           onToggle={() => setChatExpanded((p) => !p)}
// //           items={[
// //             { icon: "#", label: "general", type: "text" },
// //             { icon: "#", label: "coffee-talk", type: "text" },
// //             { icon: "#", label: "memes", type: "text" },
// //           ]}
// //         />

// //         {/* Voice Zones (expanded with items) */}
// //         <CategoryGroupCard
// //           title="Voice Zones"
// //           expanded={voiceExpanded}
// //           onToggle={() => setVoiceExpanded((p) => !p)}
// //           items={[
// //             { icon: "mic-outline", label: "Hangout", type: "ion" },
// //             { icon: "mic-outline", label: "Game VC", type: "ion" },
// //           ]}
// //         />

// //         {/* Gaming Area (collapsed / simple block) */}
// //         <CollapsedCategoryCard title="Gaming Area" />

// //         {/* Announcements (expanded with items) */}
// //         <CategoryGroupCard
// //           title="Announcements"
// //           expanded={announceExpanded}
// //           onToggle={() => setAnnounceExpanded((p) => !p)}
// //           items={[
// //             { icon: "|", label: "global-news", type: "bar" },
// //             { icon: "|", label: "nexus-updates", type: "bar" },
// //           ]}
// //         />

// //         {/* Auto-sort toggle card */}
// //         <View style={styles.autoSortCard}>
// //           <Text style={styles.autoSortLabel}>Auto-Sort Spaces by Category</Text>
// //           <Switch
// //             value={autoSort}
// //             onValueChange={onToggleAutoSort}
// //             thumbColor={autoSort ? "#1BFFFF" : "#ffffff"}
// //             trackColor={{ false: "#122347", true: "#2340A0" }}
// //           />
// //         </View>

// //         {/* Action buttons: Create Category / Create Space
// //             NOTE: rendered only when autoSort === true */}
// //         {autoSort && (
// //           <View style={styles.actionsContainer}>
// //             <TouchableOpacity
// //               style={[styles.actionCard, styles.actionCardPrimary]}
// //               activeOpacity={0.85}
// //               onPress={openCreateCategory}
// //             >
// //               <View style={styles.actionRow}>
// //                 <Ionicons name="albums-outline" size={18} color="#fff" />
// //                 <Text style={styles.actionText}>Create Category</Text>
// //               </View>
// //               <Ionicons name="chevron-forward" size={16} color="#fff" />
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //               style={[styles.actionCard, styles.actionCardSecondary]}
// //               activeOpacity={0.85}
// //               onPress={openCreateSpace}
// //             >
// //               <View style={styles.actionRow}>
// //                 <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
// //                 <Text style={styles.actionText}>Create Space</Text>
// //               </View>
// //               <Ionicons name="chevron-forward" size={16} color="#fff" />
// //             </TouchableOpacity>
// //           </View>
// //         )}

// //         {/* Save button */}
// //         <TouchableOpacity
// //           activeOpacity={0.9}
// //           style={styles.saveButtonWrapper}
// //           onPress={handleSave}
// //         >
// //           <LinearGradient
// //             colors={["#355DFF", "#7F5DFF"]}
// //             start={{ x: 0, y: 0 }}
// //             end={{ x: 1, y: 1 }}
// //             style={styles.saveGradient}
// //           >
// //             <Text style={styles.saveText}>Save</Text>
// //           </LinearGradient>
// //         </TouchableOpacity>

// //         <TouchableOpacity onPress={handleReset} activeOpacity={0.7}>
// //           <Text style={styles.resetText}>Reset to Default</Text>
// //         </TouchableOpacity>

// //         <View style={{ height: 40 }} />
// //       </ScrollView>

// //       {/* ---------- Modal / Popup shown when enabling Auto-Sort ---------- */}
// //       <Modal
// //         visible={showAutoPopup}
// //         transparent
// //         animationType="fade"
// //         onRequestClose={closeAutoPopupAndRevert}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalCard}>
// //             <Text style={styles.modalTitle}>Auto-Sort Enabled</Text>
// //             <Text style={styles.modalBody}>
// //               When Auto-Sort is on, new spaces will automatically be grouped under their
// //               respective categories. You can turn this off anytime from this screen.
// //             </Text>

// //             <View style={styles.modalButtonsRow}>
// //               <TouchableOpacity
// //                 style={[styles.modalButton, styles.modalButtonSecondary]}
// //                 onPress={closeAutoPopupAndRevert}
// //                 activeOpacity={0.8}
// //               >
// //                 <Text style={styles.modalButtonTextSecondary}>Got it</Text>
// //               </TouchableOpacity>

// //               <TouchableOpacity
// //                 style={[styles.modalButton, styles.modalButtonPrimary]}
// //                 onPress={closeAutoPopupAndRevert}
// //                 activeOpacity={0.8}
// //               >
// //                 <Text style={styles.modalButtonTextPrimary}>Okay</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // }

// // /* ---------- Small components ---------- */

// // function CategoryGroupCard({ title, expanded, onToggle, items }) {
// //   return (
// //     <View style={styles.categoryGroupContainer}>
// //       <View
// //         style={[
// //           styles.categoryHeaderRow,
// //           !expanded && styles.categoryHeaderOnly,
// //         ]}
// //       >
// //         <View style={styles.categoryHeaderLeft}>
// //           <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// //           <Text style={styles.categoryTitle}>{title}</Text>
// //         </View>
// //         <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
// //           <Ionicons
// //             name={expanded ? "chevron-up" : "chevron-down"}
// //             size={16}
// //             color="#9FB4FF"
// //           />
// //         </TouchableOpacity>
// //       </View>

// //       {expanded && (
// //         <View style={styles.categoryInnerCard}>
// //           {items.map((item, index) => {
// //             const isLast = index === items.length - 1;
// //             return (
// //               <View
// //                 key={`${item.label}-${index}`}
// //                 style={[
// //                   styles.categoryItemRow,
// //                   !isLast && styles.categoryItemBorder,
// //                 ]}
// //               >
// //                 <View style={styles.categoryItemLeft}>
// //                   {/* Left vertical bar to mimic screenshot */}
// //                   <View style={styles.categoryItemBar} />
// //                   <View style={{ flexDirection: "row", alignItems: "center" }}>
// //                     {item.type === "ion" ? (
// //                       <Ionicons
// //                         name={item.icon}
// //                         size={14}
// //                         color="#9FB4FF"
// //                         style={{ marginRight: 6 }}
// //                       />
// //                     ) : null}
// //                     <Text style={styles.categoryItemLabel}>
// //                       {item.type === "text" ? `# ${item.label}` : item.label}
// //                     </Text>
// //                   </View>
// //                 </View>
// //                 <Ionicons
// //                   name="chevron-forward"
// //                   size={14}
// //                   color="#9FB4FF"
// //                 />
// //               </View>
// //             );
// //           })}
// //         </View>
// //       )}
// //     </View>
// //   );
// // }

// // function CollapsedCategoryCard({ title }) {
// //   return (
// //     <View style={styles.collapsedCard}>
// //       <View style={styles.categoryHeaderLeft}>
// //         <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
// //         <Text style={styles.categoryTitle}>{title}</Text>
// //       </View>
// //     </View>
// //   );
// // }

// // /* ---------- Styles ---------- */

// // const CARD_RADIUS = 18;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#020821", // deep navy
// //   },

// //   fakeStatusBar: {
// //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// //     paddingHorizontal: 20,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   timeText: {
// //     color: "#ffffff",
// //     fontSize: 16,
// //     fontWeight: "600",
// //   },
// //   fakeStatusIcons: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   fakeIcon: {
// //     marginLeft: 6,
// //   },

// //   scrollContent: {
// //     paddingBottom: 32,
// //     paddingHorizontal: 18,
// //   },

// //   headerRow: {
// //     marginTop: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   headerTitle: {
// //     color: "#ffffff",
// //     fontSize: 20,
// //     fontWeight: "600",
// //   },

// //   /* Category group cards */

// //   categoryGroupContainer: {
// //     marginTop: 20,
// //   },

// //   categoryHeaderRow: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },

// //   categoryHeaderOnly: {
// //     // when collapsed, no extra inner block
// //   },

// //   categoryHeaderLeft: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   categoryTitle: {
// //     color: "#ffffff",
// //     fontSize: 14,
// //     marginLeft: 10,
// //     fontWeight: "500",
// //   },

// //   categoryInnerCard: {
// //     marginTop: 6,
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     overflow: "hidden",
// //   },

// //   categoryItemRow: {
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },

// //   categoryItemBorder: {
// //     borderBottomWidth: StyleSheet.hairlineWidth,
// //     borderBottomColor: "rgba(255,255,255,0.06)",
// //   },

// //   categoryItemLeft: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     flex: 1,
// //   },

// //   categoryItemBar: {
// //     width: 2,
// //     height: "100%",
// //     borderRadius: 999,
// //     backgroundColor: "#264BFF",
// //     marginRight: 10,
// //   },

// //   categoryItemLabel: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //   },

// //   /* Collapsed card for single category */

// //   collapsedCard: {
// //     marginTop: 20,
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },

// //   /* Auto-sort toggle card */

// //   autoSortCard: {
// //     marginTop: 24,
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 18,
// //     paddingVertical: 14,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   autoSortLabel: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //   },

// //   /* Actions (Create Category / Create Space) */
// //   actionsContainer: {
// //     marginTop: 20,
// //   },
// //   actionCard: {
// //     borderRadius: 14,
// //     paddingHorizontal: 14,
// //     paddingVertical: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginBottom: 12,
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     backgroundColor: "#071739",
// //   },
// //   actionCardPrimary: {
// //     // slightly highlighted
// //     backgroundColor: "#0E294B",
// //   },
// //   actionCardSecondary: {
// //     backgroundColor: "#071739",
// //   },
// //   actionRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   actionText: {
// //     color: "#ffffff",
// //     fontSize: 14,
// //     marginLeft: 10,
// //     fontWeight: "500",
// //   },

// //   /* Save + reset */

// //   saveButtonWrapper: {
// //     marginTop: 8,
// //     borderRadius: CARD_RADIUS,
// //     overflow: "hidden",
// //   },
// //   saveGradient: {
// //     paddingVertical: 13,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   saveText: {
// //     color: "#ffffff",
// //     fontSize: 15,
// //     fontWeight: "600",
// //   },
// //   resetText: {
// //     marginTop: 10,
// //     textAlign: "center",
// //     color: "rgba(255,255,255,0.6)",
// //     fontSize: 12,
// //   },

// //   /* Modal styles */
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: "rgba(1,6,20,0.7)",
// //     justifyContent: "flex-end", // appear from bottom like screenshot
// //     padding: 20,
// //   },
// //   modalCard: {
// //     backgroundColor: "#06152B",
// //     borderRadius: 20,
// //     padding: 18,
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     shadowColor: "#000",
// //     shadowOpacity: 0.25,
// //     shadowRadius: 10,
// //   },
// //   modalTitle: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "600",
// //     marginBottom: 8,
// //   },
// //   modalBody: {
// //     color: "rgba(255,255,255,0.85)",
// //     fontSize: 13,
// //     lineHeight: 18,
// //     marginBottom: 16,
// //   },
// //   modalButtonsRow: {
// //     flexDirection: "row",
// //     justifyContent: "flex-end",
// //   },
// //   modalButton: {
// //     paddingVertical: 10,
// //     paddingHorizontal: 14,
// //     borderRadius: 12,
// //     minWidth: 90,
// //     alignItems: "center",
// //     marginLeft: 10,
// //   },
// //   modalButtonPrimary: {
// //     backgroundColor: "#355DFF",
// //   },
// //   modalButtonSecondary: {
// //     backgroundColor: "transparent",
// //     borderWidth: 1,
// //     borderColor: "#355DFF",
// //   },
// //   modalButtonTextPrimary: {
// //     color: "#fff",
// //     fontWeight: "600",
// //   },
// //   modalButtonTextSecondary: {
// //     color: "#fff",
// //     fontWeight: "600",
// //   },
// // });
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
//   Switch,
//   Modal,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// export default function V24({ navigation }) {
//   // DEFAULT: off
//   const [autoSort, setAutoSort] = useState(false);
//   const [chatExpanded, setChatExpanded] = useState(true);
//   const [voiceExpanded, setVoiceExpanded] = useState(true);
//   const [announceExpanded, setAnnounceExpanded] = useState(true);

//   // popup state (info modal shown when turning ON)
//   const [showAutoPopup, setShowAutoPopup] = useState(false);

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleSave = () => {
//     console.log("Save categories");
//   };

//   const handleReset = () => {
//     console.log("Reset categories to default");
//   };

//   // called when user toggles switch
//   const onToggleAutoSort = (value) => {
//     // set the switch to the chosen value
//     setAutoSort(!!value);

//     // if user just turned it ON, show info popup (but do NOT revert)
//     if (value) {
//       setShowAutoPopup(true);
//     } else {
//       // if turned OFF, ensure popup closed
//       setShowAutoPopup(false);
//     }
//   };

//   // navigate to create screens
//   const openCreateCategory = () => {
//     if (navigation?.navigate) navigation.navigate("Setting_category_create_category");
//   };

//   const openCreateSpace = () => {
//     if (navigation?.navigate) navigation.navigate("Setting_category_create_Space");
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar (time + icons) */}
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
//       >
//         {/* Header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//             <Ionicons name="chevron-back" size={24} color="#ffffff" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Categories</Text>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* Chat Spaces (expanded with items) */}
//         <CategoryGroupCard
//           title="Chat Spaces"
//           expanded={chatExpanded}
//           onToggle={() => setChatExpanded((p) => !p)}
//           items={[
//             { icon: "#", label: "general", type: "text" },
//             { icon: "#", label: "coffee-talk", type: "text" },
//             { icon: "#", label: "memes", type: "text" },
//           ]}
//         />

//         {/* Voice Zones (expanded with items) */}
//         <CategoryGroupCard
//           title="Voice Zones"
//           expanded={voiceExpanded}
//           onToggle={() => setVoiceExpanded((p) => !p)}
//           items={[
//             { icon: "mic-outline", label: "Hangout", type: "ion" },
//             { icon: "mic-outline", label: "Game VC", type: "ion" },
//           ]}
//         />

//         {/* Gaming Area (collapsed / simple block) */}
//         <CollapsedCategoryCard title="Gaming Area" />

//         {/* Announcements (expanded with items) */}
//         <CategoryGroupCard
//           title="Announcements"
//           expanded={announceExpanded}
//           onToggle={() => setAnnounceExpanded((p) => !p)}
//           items={[
//             { icon: "|", label: "global-news", type: "bar" },
//             { icon: "|", label: "nexus-updates", type: "bar" },
//           ]}
//         />

//         {/* Auto-sort toggle card */}
//         <View style={styles.autoSortCard}>
//           <Text style={styles.autoSortLabel}>Auto-Sort Spaces by Category</Text>
//           <Switch
//             value={autoSort}
//             onValueChange={onToggleAutoSort}
//             thumbColor={autoSort ? "#1BFFFF" : "#ffffff"}
//             trackColor={{ false: "#122347", true: "#2340A0" }}
//           />
//         </View>

//         {/* Action buttons: Create Category / Create Space
//             NOTE: rendered only when autoSort === true */}
//         {autoSort && (
//           <View style={styles.actionsContainer}>
//             <TouchableOpacity
//               style={[styles.actionCard, styles.actionCardPrimary]}
//               activeOpacity={0.85}
//               onPress={openCreateCategory}
//             >
//               <View style={styles.actionRow}>
//                 <Ionicons name="albums-outline" size={18} color="#fff" />
//                 <Text style={styles.actionText}>Create Category</Text>
//               </View>
//               <Ionicons name="chevron-forward" size={16} color="#fff" />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.actionCard, styles.actionCardSecondary]}
//               activeOpacity={0.85}
//               onPress={openCreateSpace}
//             >
//               <View style={styles.actionRow}>
//                 <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
//                 <Text style={styles.actionText}>Create Space</Text>
//               </View>
//               <Ionicons name="chevron-forward" size={16} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Save button */}
//         <TouchableOpacity
//           activeOpacity={0.9}
//           style={styles.saveButtonWrapper}
//           onPress={handleSave}
//         >
//           <LinearGradient
//             colors={["#355DFF", "#7F5DFF"]}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={styles.saveGradient}
//           >
//             <Text style={styles.saveText}>Save</Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleReset} activeOpacity={0.7}>
//           <Text style={styles.resetText}>Reset to Default</Text>
//         </TouchableOpacity>

//         <View style={{ height: 40 }} />
//       </ScrollView>

//       {/* ---------- Modal / Popup shown when enabling Auto-Sort ---------- */}
//       <Modal
//         visible={showAutoPopup}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setShowAutoPopup(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalCard}>
//             <Text style={styles.modalTitle}>Auto-Sort Enabled</Text>
//             <Text style={styles.modalBody}>
//               When Auto-Sort is on, new spaces will automatically be grouped under their
//               respective categories. You can turn this off anytime from this screen.
//             </Text>

//             <View style={styles.modalButtonsRow}>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.modalButtonSecondary]}
//                 onPress={() => setShowAutoPopup(false)}
//                 activeOpacity={0.8}
//               >
//                 <Text style={styles.modalButtonTextSecondary}>Got it</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.modalButton, styles.modalButtonPrimary]}
//                 onPress={() => setShowAutoPopup(false)}
//                 activeOpacity={0.8}
//               >
//                 <Text style={styles.modalButtonTextPrimary}>Okay</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// /* ---------- Small components ---------- */

// function CategoryGroupCard({ title, expanded, onToggle, items }) {
//   return (
//     <View style={styles.categoryGroupContainer}>
//       <View
//         style={[
//           styles.categoryHeaderRow,
//           !expanded && styles.categoryHeaderOnly,
//         ]}
//       >
//         <View style={styles.categoryHeaderLeft}>
//           <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
//           <Text style={styles.categoryTitle}>{title}</Text>
//         </View>
//         <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
//           <Ionicons
//             name={expanded ? "chevron-up" : "chevron-down"}
//             size={16}
//             color="#9FB4FF"
//           />
//         </TouchableOpacity>
//       </View>

//       {expanded && (
//         <View style={styles.categoryInnerCard}>
//           {items.map((item, index) => {
//             const isLast = index === items.length - 1;
//             return (
//               <View
//                 key={`${item.label}-${index}`}
//                 style={[
//                   styles.categoryItemRow,
//                   !isLast && styles.categoryItemBorder,
//                 ]}
//               >
//                 <View style={styles.categoryItemLeft}>
//                   {/* Left vertical bar to mimic screenshot */}
//                   <View style={styles.categoryItemBar} />
//                   <View style={{ flexDirection: "row", alignItems: "center" }}>
//                     {item.type === "ion" ? (
//                       <Ionicons
//                         name={item.icon}
//                         size={14}
//                         color="#9FB4FF"
//                         style={{ marginRight: 6 }}
//                       />
//                     ) : null}
//                     <Text style={styles.categoryItemLabel}>
//                       {item.type === "text" ? `# ${item.label}` : item.label}
//                     </Text>
//                   </View>
//                 </View>
//                 <Ionicons
//                   name="chevron-forward"
//                   size={14}
//                   color="#9FB4FF"
//                 />
//               </View>
//             );
//           })}
//         </View>
//       )}
//     </View>
//   );
// }

// function CollapsedCategoryCard({ title }) {
//   return (
//     <View style={styles.collapsedCard}>
//       <View style={styles.categoryHeaderLeft}>
//         <Ionicons name="reorder-three-outline" size={18} color="#9FB4FF" />
//         <Text style={styles.categoryTitle}>{title}</Text>
//       </View>
//     </View>
//   );
// }

// /* ---------- Styles ---------- */

// const CARD_RADIUS = 18;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#020821", // deep navy
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
//     paddingHorizontal: 18,
//   },

//   headerRow: {
//     marginTop: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     color: "#ffffff",
//     fontSize: 20,
//     fontWeight: "600",
//   },

//   /* Category group cards */

//   categoryGroupContainer: {
//     marginTop: 20,
//   },

//   categoryHeaderRow: {
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#071739",
//     borderWidth: 1,
//     borderColor: "#132652",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   categoryHeaderOnly: {
//     // when collapsed, no extra inner block
//   },

//   categoryHeaderLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   categoryTitle: {
//     color: "#ffffff",
//     fontSize: 14,
//     marginLeft: 10,
//     fontWeight: "500",
//   },

//   categoryInnerCard: {
//     marginTop: 6,
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#071739",
//     borderWidth: 1,
//     borderColor: "#132652",
//     overflow: "hidden",
//   },

//   categoryItemRow: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   categoryItemBorder: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: "rgba(255,255,255,0.06)",
//   },

//   categoryItemLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },

//   categoryItemBar: {
//     width: 2,
//     height: "100%",
//     borderRadius: 999,
//     backgroundColor: "#264BFF",
//     marginRight: 10,
//   },

//   categoryItemLabel: {
//     color: "#ffffff",
//     fontSize: 13,
//   },

//   /* Collapsed card for single category */

//   collapsedCard: {
//     marginTop: 20,
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#071739",
//     borderWidth: 1,
//     borderColor: "#132652",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   /* Auto-sort toggle card */

//   autoSortCard: {
//     marginTop: 24,
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#071739",
//     borderWidth: 1,
//     borderColor: "#132652",
//     paddingHorizontal: 18,
//     paddingVertical: 14,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   autoSortLabel: {
//     color: "#ffffff",
//     fontSize: 13,
//   },

//   /* Actions (Create Category / Create Space) */
//   actionsContainer: {
//     marginTop: 20,
//   },
//   actionCard: {
//     borderRadius: 14,
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#132652",
//     backgroundColor: "#071739",
//   },
//   actionCardPrimary: {
//     // slightly highlighted
//     backgroundColor: "#0E294B",
//   },
//   actionCardSecondary: {
//     backgroundColor: "#071739",
//   },
//   actionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   actionText: {
//     color: "#ffffff",
//     fontSize: 14,
//     marginLeft: 10,
//     fontWeight: "500",
//   },

//   /* Save + reset */

//   saveButtonWrapper: {
//     marginTop: 8,
//     borderRadius: CARD_RADIUS,
//     overflow: "hidden",
//   },
//   saveGradient: {
//     paddingVertical: 13,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   saveText: {
//     color: "#ffffff",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   resetText: {
//     marginTop: 10,
//     textAlign: "center",
//     color: "rgba(255,255,255,0.6)",
//     fontSize: 12,
//   },

//   /* Modal styles */
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(1,6,20,0.7)",
//     justifyContent: "flex-end", // appear from bottom like screenshot
//     padding: 20,
//   },
//   modalCard: {
//     backgroundColor: "#06152B",
//     borderRadius: 20,
//     padding: 18,
//     borderWidth: 1,
//     borderColor: "#132652",
//     shadowColor: "#000",
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//   },
//   modalTitle: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   modalBody: {
//     color: "rgba(255,255,255,0.85)",
//     fontSize: 13,
//     lineHeight: 18,
//     marginBottom: 16,
//   },
//   modalButtonsRow: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 12,
//     minWidth: 90,
//     alignItems: "center",
//     marginLeft: 10,
//   },
//   modalButtonPrimary: {
//     backgroundColor: "#355DFF",
//   },
//   modalButtonSecondary: {
//     backgroundColor: "transparent",
//     borderWidth: 1,
//     borderColor: "#355DFF",
//   },
//   modalButtonTextPrimary: {
//     color: "#fff",
//     fontWeight: "600",
//   },
//   modalButtonTextSecondary: {
//     color: "#fff",
//     fontWeight: "600",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

// Responsive scaling
const scale = (size) => (width / 375) * size;
const verticalScale = (size) => (height / 812) * size;

export default function Nexus_Setting_Categories({ navigation }) {
  const [autoSort, setAutoSort] = useState(true);
  const [chatExpanded, setChatExpanded] = useState(true);
  const [voiceExpanded, setVoiceExpanded] = useState(true);
  const [gamingExpanded, setGamingExpanded] = useState(false);
  const [announceExpanded, setAnnounceExpanded] = useState(true);

  const handleBack = () => {
    if (navigation?.goBack) navigation.goBack();
  };

  const handleAddCategory = () => {
    if (navigation?.navigate) navigation.navigate("Setting_category_create_category");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#050B18" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={scale(24)} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity onPress={handleAddCategory} style={styles.addBtn}>
          <Ionicons name="add" size={scale(24)} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Chat Spaces */}
        <CategoryCard
          title="Chat Spaces"
          expanded={chatExpanded}
          onToggle={() => setChatExpanded((p) => !p)}
          items={[
            { icon: "pound", label: "general" },
            { icon: "pound", label: "coffee-talk" },
            { icon: "pound", label: "memes" },
          ]}
        />

        {/* Voice Zones */}
        <CategoryCard
          title="Voice Zones"
          expanded={voiceExpanded}
          onToggle={() => setVoiceExpanded((p) => !p)}
          items={[
            { icon: "microphone", label: "Hangout" },
            { icon: "microphone", label: "Game VC" },
          ]}
        />

        {/* Gaming Area - Collapsed */}
        <CategoryCardCollapsed
          title="Gaming Area"
          expanded={gamingExpanded}
          onToggle={() => setGamingExpanded((p) => !p)}
        />

        {/* Announcements */}
        <CategoryCard
          title="Announcements"
          expanded={announceExpanded}
          onToggle={() => setAnnounceExpanded((p) => !p)}
          items={[
            { icon: "newspaper-variant-outline", label: "global-news" },
            { icon: "newspaper-variant-outline", label: "nexus-updates" },
          ]}
        />

        {/* Auto-Sort Toggle */}
        <View style={styles.autoSortCard}>
          <Text style={styles.autoSortLabel}>Auto-Sort Spaces by Category</Text>
          <Switch
            value={autoSort}
            onValueChange={setAutoSort}
            trackColor={{ false: "#1A2744", true: "#3B82F6" }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#1A2744"
          />
        </View>

        <View style={{ height: verticalScale(40) }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Category Card with expandable items
function CategoryCard({ title, expanded, onToggle, items }) {
  return (
    <View style={styles.categoryContainer}>
      {/* Header Row */}
      <TouchableOpacity
        style={styles.categoryHeader}
        activeOpacity={0.8}
        onPress={onToggle}
      >
        <View style={styles.categoryHeaderLeft}>
          <Ionicons name="menu" size={scale(18)} color="#6B7896" />
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={scale(18)}
          color="#6B7896"
        />
      </TouchableOpacity>

      {/* Expanded Items */}
      {expanded && items && items.length > 0 && (
        <View style={styles.categoryItemsContainer}>
          {items.map((item, index) => (
            <View key={`${item.label}-${index}`} style={styles.categoryItem}>
              <View style={styles.categoryItemLeft}>
                {item.icon === "pound" ? (
                  <Text style={styles.poundIcon}>#</Text>
                ) : item.icon === "microphone" ? (
                  <MaterialCommunityIcons
                    name="microphone"
                    size={scale(16)}
                    color="#22D3EE"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={scale(16)}
                    color="#22D3EE"
                  />
                )}
                <Text style={styles.categoryItemLabel}>{item.label}</Text>
              </View>
              <Ionicons
                name="chevron-expand-outline"
                size={scale(16)}
                color="#6B7896"
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

// Collapsed Category Card (no items shown)
function CategoryCardCollapsed({ title, onToggle }) {
  return (
    <TouchableOpacity
      style={styles.categoryHeaderCollapsed}
      activeOpacity={0.8}
      onPress={onToggle}
    >
      <View style={styles.categoryHeaderLeft}>
        <Ionicons name="menu" size={scale(18)} color="#6B7896" />
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#050B18",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
  },

  backBtn: {
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: scale(16),
    fontWeight: "600",
  },

  addBtn: {
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
    alignItems: "flex-end",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: scale(20),
  },

  // Category Card
  categoryContainer: {
    marginTop: verticalScale(16),
  },

  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0A1628",
    borderWidth: 1,
    borderColor: "#3255BA",
    borderRadius: scale(14),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
  },

  categoryHeaderCollapsed: {
    marginTop: verticalScale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0A1628",
    borderWidth: 1,
    borderColor: "#3255BA",
    borderRadius: scale(14),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
  },

  categoryHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  categoryTitle: {
    color: "#FFFFFF",
    fontSize: scale(13),
    fontWeight: "500",
    marginLeft: scale(12),
  },

  categoryItemsContainer: {
    marginTop: verticalScale(8),
    backgroundColor: "#0A1628",
    borderWidth: 1,
    borderColor: "#3255BA",
    borderRadius: scale(14),
    overflow: "hidden",
  },

  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(50, 85, 186, 0.2)",
  },

  categoryItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  poundIcon: {
    color: "#22D3EE",
    fontSize: scale(16),
    fontWeight: "600",
  },

  categoryItemLabel: {
    color: "#FFFFFF",
    fontSize: scale(13),
    marginLeft: scale(10),
  },

  // Auto-Sort Card
  autoSortCard: {
    marginTop: verticalScale(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0A1628",
    borderWidth: 1,
    borderColor: "#3255BA",
    borderRadius: scale(14),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
  },

  autoSortLabel: {
    color: "#FFFFFF",
    fontSize: scale(13),
  },
});
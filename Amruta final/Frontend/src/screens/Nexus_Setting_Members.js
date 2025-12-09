// // // // // // V25 (updated row UI matching screenshot)
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   StyleSheet,
// // // // //   StatusBar,
// // // // //   Platform,
// // // // //   FlatList,
// // // // //   TouchableOpacity,
// // // // //   TextInput,
// // // // //   Image,
// // // // //   SafeAreaView,
// // // // // } from "react-native";
// // // // // import { Ionicons } from "@expo/vector-icons";

// // // // // const MEMBERS = Array.from({ length: 12 }).map((_, i) => ({
// // // // //   id: String(i + 1),
// // // // //   name: "! 7SUII_Notashish15",
// // // // //   avatar:
// // // // //     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// // // // // }));

// // // // // export default function V25({ navigation }) {
// // // // //   const [search, setSearch] = useState("");

// // // // //   const handleBack = () => {
// // // // //     if (navigation?.goBack) navigation.goBack();
// // // // //   };

// // // // //   const filteredMembers = MEMBERS.filter((m) =>
// // // // //     m.name.toLowerCase().includes(search.toLowerCase())
// // // // //   );

// // // // //   const renderItem = ({ item }) => (
// // // // //     <View style={styles.memberCard}>
// // // // //       <View style={styles.memberLeft}>
// // // // //         <View style={styles.avatarWrapper}>
// // // // //           <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
// // // // //         </View>

// // // // //         <Text style={styles.memberName} numberOfLines={1}>
// // // // //           {item.name}
// // // // //         </Text>
// // // // //       </View>

// // // // //       <TouchableOpacity style={styles.arrowBtn} activeOpacity={0.7}>
// // // // //         <Ionicons name="chevron-forward" size={20} color="#ffffff" />
// // // // //       </TouchableOpacity>
// // // // //     </View>
// // // // //   );

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <StatusBar barStyle="light-content" />

// // // // //       {/* Fake status bar */}
// // // // //       <View style={styles.fakeStatusBar}>
// // // // //         <Text style={styles.timeText}>9:41</Text>
// // // // //         <View style={styles.fakeStatusIcons}>
// // // // //           <Ionicons name="cellular" size={16} color="#fff" />
// // // // //           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
// // // // //           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
// // // // //         </View>
// // // // //       </View>

// // // // //       {/* Header */}
// // // // //       <View style={styles.headerRow}>
// // // // //         <TouchableOpacity onPress={handleBack}>
// // // // //           <Ionicons name="chevron-back" size={24} color="#fff" />
// // // // //         </TouchableOpacity>
// // // // //         <Text style={styles.headerTitle}>Members</Text>
// // // // //         <View style={{ width: 24 }} />
// // // // //       </View>

// // // // //       {/* Search */}
// // // // //       <View style={styles.searchRow}>
// // // // //         <View style={styles.searchBox}>
// // // // //           <Ionicons name="search" size={18} color="#6477B9" style={{ marginRight: 6 }} />
// // // // //           <TextInput
// // // // //             value={search}
// // // // //             onChangeText={setSearch}
// // // // //             placeholder="Search Members"
// // // // //             placeholderTextColor="rgba(255,255,255,0.5)"
// // // // //             style={styles.searchInput}
// // // // //           />
// // // // //         </View>

// // // // //         <TouchableOpacity activeOpacity={0.7}>
// // // // //           <Ionicons name="options" size={22} color="#7F9BFF" />
// // // // //         </TouchableOpacity>
// // // // //       </View>

// // // // //       {/* List */}
// // // // //       <FlatList
// // // // //         data={filteredMembers}
// // // // //         keyExtractor={(item) => item.id}
// // // // //         renderItem={renderItem}
// // // // //         contentContainerStyle={{ paddingBottom: 30 }}
// // // // //         showsVerticalScrollIndicator={false}
// // // // //       />
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // const AVATAR = 42;

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "#020821",
// // // // //   },

// // // // //   fakeStatusBar: {
// // // // //     marginTop: Platform.OS === "android" ? 12 : 0,
// // // // //     paddingHorizontal: 20,
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     height: 40,
// // // // //   },
// // // // //   timeText: {
// // // // //     color: "#fff",
// // // // //     fontSize: 16,
// // // // //     fontWeight: "600",
// // // // //   },

// // // // //   fakeStatusIcons: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   headerRow: {
// // // // //     marginTop: 6,
// // // // //     paddingHorizontal: 20,
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   headerTitle: {
// // // // //     color: "#fff",
// // // // //     fontSize: 18,
// // // // //     fontWeight: "600",
// // // // //   },

// // // // //   searchRow: {
// // // // //     marginTop: 16,
// // // // //     paddingHorizontal: 20,
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   searchBox: {
// // // // //     flex: 1,
// // // // //     height: 40,
// // // // //     backgroundColor: "#071739",
// // // // //     borderRadius: 20,
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#123060",
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     paddingHorizontal: 14,
// // // // //     marginRight: 12,
// // // // //   },
// // // // //   searchInput: {
// // // // //     flex: 1,
// // // // //     color: "#fff",
// // // // //     fontSize: 13,
// // // // //   },

// // // // //   /* Member Card */
// // // // //   memberCard: {
// // // // //     marginHorizontal: 18,
// // // // //     marginTop: 14,
// // // // //     backgroundColor: "#0B2C7C",
// // // // //     borderRadius: 16,
// // // // //     height: 58,
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     paddingHorizontal: 14,
// // // // //     justifyContent: "space-between",
// // // // //   },

// // // // //   memberLeft: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //   },

// // // // //   avatarWrapper: {
// // // // //     width: AVATAR,
// // // // //     height: AVATAR,
// // // // //     borderRadius: AVATAR / 2,
// // // // //     overflow: "hidden",
// // // // //     marginRight: 12,
// // // // //   },
// // // // //   avatarImage: {
// // // // //     width: "100%",
// // // // //     height: "100%",
// // // // //   },

// // // // //   memberName: {
// // // // //     color: "#fff",
// // // // //     fontSize: 14,
// // // // //     fontWeight: "500",
// // // // //     maxWidth: 140,
// // // // //   },

// // // // //   arrowBtn: {
// // // // //     width: 34,
// // // // //     height: 34,
// // // // //     backgroundColor: "#2849D8",
// // // // //     borderRadius: 17,
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //   },
// // // // // });
// // // // // V25.js
// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   Platform,
// // // //   FlatList,
// // // //   TouchableOpacity,
// // // //   TextInput,
// // // //   Image,
// // // //   SafeAreaView,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";

// // // // const MEMBERS = Array.from({ length: 12 }).map((_, i) => ({
// // // //   id: String(i + 1),
// // // //   name: "! 7SUII_Notashish15",
// // // //   avatar:
// // // //     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// // // // }));

// // // // export default function V25({ navigation }) {
// // // //   const [search, setSearch] = useState("");

// // // //   const handleBack = () => {
// // // //     if (navigation?.goBack) navigation.goBack();
// // // //   };

// // // //   const filteredMembers = MEMBERS.filter((m) =>
// // // //     m.name.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   const renderItem = ({ item }) => (
// // // //     <View style={styles.memberCard}>
// // // //       <View style={styles.memberLeft}>
// // // //         <View style={styles.avatarWrapper}>
// // // //           <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
// // // //         </View>

// // // //         <Text style={styles.memberName} numberOfLines={1}>
// // // //           {item.name}
// // // //         </Text>
// // // //       </View>

// // // //       <TouchableOpacity style={styles.arrowBtn} activeOpacity={0.7}>
// // // //         <Ionicons name="chevron-forward" size={20} color="#ffffff" />
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" />

// // // //       {/* Fake status bar */}
// // // //       <View style={styles.fakeStatusBar}>
// // // //         <Text style={styles.timeText}>9:41</Text>
// // // //         <View style={styles.fakeStatusIcons}>
// // // //           <Ionicons name="cellular" size={16} color="#fff" />
// // // //           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
// // // //           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
// // // //         </View>
// // // //       </View>

// // // //       {/* Header */}
// // // //       <View style={styles.headerRow}>
// // // //         <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // // //           <Ionicons name="chevron-back" size={24} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>Members</Text>
// // // //         <View style={{ width: 24 }} />
// // // //       </View>

// // // //       {/* Search + Filter (Filter is plain text per your request) */}
// // // //       <View style={styles.searchRow}>
// // // //         <View style={styles.searchBox}>
// // // //           <Ionicons name="search" size={18} color="#6477B9" style={{ marginRight: 6 }} />
// // // //           <TextInput
// // // //             value={search}
// // // //             onChangeText={setSearch}
// // // //             placeholder="Search Members"
// // // //             placeholderTextColor="rgba(255,255,255,0.5)"
// // // //             style={styles.searchInput}
// // // //           />
// // // //         </View>

// // // //         <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: 10 }}>
// // // //           <Text style={styles.filterText}>Filter</Text>
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       {/* Members list */}
// // // //       <FlatList
// // // //         data={filteredMembers}
// // // //         keyExtractor={(item) => item.id}
// // // //         renderItem={renderItem}
// // // //         contentContainerStyle={{ paddingBottom: 30 }}
// // // //         showsVerticalScrollIndicator={false}
// // // //       />
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // /* ---------- Styles ---------- */

// // // // const AVATAR = 42;

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#020821",
// // // //   },

// // // //   fakeStatusBar: {
// // // //     marginTop: Platform.OS === "android" ? 12 : 0,
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     height: 40,
// // // //   },
// // // //   timeText: {
// // // //     color: "#fff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //   },
// // // //   fakeStatusIcons: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   headerRow: {
// // // //     marginTop: 6,
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //   },
// // // //   headerTitle: {
// // // //     color: "#fff",
// // // //     fontSize: 18,
// // // //     fontWeight: "600",
// // // //   },

// // // //   searchRow: {
// // // //     marginTop: 16,
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   searchBox: {
// // // //     flex: 1,
// // // //     height: 40,
// // // //     backgroundColor: "#071739",
// // // //     borderRadius: 20,
// // // //     borderWidth: 1,
// // // //     borderColor: "#123060",
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 14,
// // // //     marginRight: 12,
// // // //   },
// // // //   searchInput: {
// // // //     flex: 1,
// // // //     color: "#fff",
// // // //     fontSize: 13,
// // // //   },
// // // //   filterText: {
// // // //     color: "#7F9BFF",
// // // //     fontSize: 13,
// // // //     fontWeight: "500",
// // // //   },

// // // //   memberCard: {
// // // //     marginHorizontal: 18,
// // // //     marginTop: 14,
// // // //     backgroundColor: "#0B2C7C",
// // // //     borderRadius: 16,
// // // //     height: 58,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 14,
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   memberLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   avatarWrapper: {
// // // //     width: AVATAR,
// // // //     height: AVATAR,
// // // //     borderRadius: AVATAR / 2,
// // // //     overflow: "hidden",
// // // //     marginRight: 12,
// // // //   },
// // // //   avatarImage: {
// // // //     width: "100%",
// // // //     height: "100%",
// // // //   },

// // // //   memberName: {
// // // //     color: "#fff",
// // // //     fontSize: 14,
// // // //     fontWeight: "500",
// // // //     maxWidth: 140,
// // // //   },

// // // //   arrowBtn: {
// // // //     width: 34,
// // // //     height: 34,
// // // //     backgroundColor: "#2849D8",
// // // //     borderRadius: 17,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // // });
// // // // V25.js
// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   Platform,
// // // //   FlatList,
// // // //   TouchableOpacity,
// // // //   TextInput,
// // // //   Image,
// // // //   SafeAreaView,
// // // //   Modal,
// // // //   Pressable,
// // // //   Animated,
// // // //   Easing,
// // // //   Dimensions,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";

// // // // const { width, height } = Dimensions.get("window");

// // // // const MEMBERS = Array.from({ length: 12 }).map((_, i) => ({
// // // //   id: String(i + 1),
// // // //   name: "! 7SUII_Notashish15",
// // // //   avatar:
// // // //     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// // // // }));

// // // // export default function V25({ navigation }) {
// // // //   const [search, setSearch] = useState("");
// // // //   const [sheetVisible, setSheetVisible] = useState(false);
// // // //   const [newMembers, setNewMembers] = useState(true);
// // // //   const [oldMembers, setOldMembers] = useState(false);

// // // //   // animation refs for bottom sheet
// // // //   const slideAnim = useRef(new Animated.Value(height)).current;
// // // //   const backdropAnim = useRef(new Animated.Value(0)).current;

// // // //   const openSheet = () => {
// // // //     setSheetVisible(true);
// // // //     // animate backdrop fade + slide up
// // // //     Animated.parallel([
// // // //       Animated.timing(backdropAnim, {
// // // //         toValue: 1,
// // // //         duration: 240,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //       Animated.timing(slideAnim, {
// // // //         toValue: 0,
// // // //         duration: 320,
// // // //         easing: Easing.out(Easing.cubic),
// // // //         useNativeDriver: true,
// // // //       }),
// // // //     ]).start();
// // // //   };

// // // //   const closeSheet = () => {
// // // //     // animate down then hide
// // // //     Animated.parallel([
// // // //       Animated.timing(backdropAnim, {
// // // //         toValue: 0,
// // // //         duration: 220,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //       Animated.timing(slideAnim, {
// // // //         toValue: height,
// // // //         duration: 260,
// // // //         easing: Easing.in(Easing.cubic),
// // // //         useNativeDriver: true,
// // // //       }),
// // // //     ]).start(() => {
// // // //       setSheetVisible(false);
// // // //     });
// // // //   };

// // // //   const toggleNew = () => {
// // // //     setNewMembers((v) => !v);
// // // //     // optional: make mutually exclusive
// // // //     if (oldMembers && newMembers) setOldMembers(false);
// // // //   };

// // // //   const toggleOld = () => {
// // // //     setOldMembers((v) => !v);
// // // //     if (newMembers && oldMembers) setNewMembers(false);
// // // //   };

// // // //   const handleBack = () => {
// // // //     if (navigation?.goBack) navigation.goBack();
// // // //   };

// // // //   const filteredMembers = MEMBERS.filter((m) =>
// // // //     m.name.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   const renderItem = ({ item }) => (
// // // //     <View style={styles.memberCard}>
// // // //       <View style={styles.memberLeft}>
// // // //         <View style={styles.avatarWrapper}>
// // // //           <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
// // // //         </View>

// // // //         <Text style={styles.memberName} numberOfLines={1}>
// // // //           {item.name}
// // // //         </Text>
// // // //       </View>

// // // //       <TouchableOpacity style={styles.arrowBtn} activeOpacity={0.7}>
// // // //         <Ionicons name="chevron-forward" size={20} color="#ffffff" />
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" />

// // // //       {/* Fake status bar */}
// // // //       <View style={styles.fakeStatusBar}>
// // // //         <Text style={styles.timeText}>9:41</Text>
// // // //         <View style={styles.fakeStatusIcons}>
// // // //           <Ionicons name="cellular" size={16} color="#fff" />
// // // //           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
// // // //           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
// // // //         </View>
// // // //       </View>

// // // //       {/* Header */}
// // // //       <View style={styles.headerRow}>
// // // //         <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // // //           <Ionicons name="chevron-back" size={24} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>Members</Text>
// // // //         <View style={{ width: 24 }} />
// // // //       </View>

// // // //       {/* Search + Filter */}
// // // //       <View style={styles.searchRow}>
// // // //         <View style={styles.searchBox}>
// // // //           <Ionicons name="search" size={18} color="#6477B9" style={{ marginRight: 6 }} />
// // // //           <TextInput
// // // //             value={search}
// // // //             onChangeText={setSearch}
// // // //             placeholder="Search Members"
// // // //             placeholderTextColor="rgba(255,255,255,0.45)"
// // // //             style={styles.searchInput}
// // // //           />
// // // //         </View>

// // // //         <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: 10 }} onPress={openSheet}>
// // // //           <Text style={styles.filterText}>Filter</Text>
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       {/* Members list */}
// // // //       <FlatList
// // // //         data={filteredMembers}
// // // //         keyExtractor={(item) => item.id}
// // // //         renderItem={renderItem}
// // // //         contentContainerStyle={{ paddingBottom: 140 }} // allow room for sheet
// // // //         showsVerticalScrollIndicator={false}
// // // //       />

// // // //       {/* Bottom Sheet Modal */}
// // // //       {sheetVisible && (
// // // //         <>
// // // //           {/* Backdrop */}
// // // //           <Animated.View
// // // //             style={[
// // // //               styles.backdrop,
// // // //               {
// // // //                 opacity: backdropAnim,
// // // //               },
// // // //             ]}
// // // //           />
// // // //           {/* Slide-up sheet */}
// // // //           <Animated.View
// // // //             style={[
// // // //               styles.sheetWrap,
// // // //               {
// // // //                 transform: [{ translateY: slideAnim }],
// // // //               },
// // // //             ]}
// // // //           >
// // // //             <View style={styles.sheetInner}>
// // // //               <View style={styles.sheetHandle} />

// // // //               <Text style={styles.sheetTitle}>Filters</Text>

// // // //               {/* New Members row */}
// // // //               <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8} onPress={toggleNew}>
// // // //                 <View style={styles.sheetLeft}>
// // // //                   <View style={styles.sheetIconBg}>
// // // //                     <Ionicons name="person-add" size={18} color="#DCE6FF" />
// // // //                   </View>
// // // //                   <View style={{ marginLeft: 12 }}>
// // // //                     <Text style={styles.sheetRowTitle}>New Members</Text>
// // // //                     <Text style={styles.sheetSub}>Recently added members</Text>
// // // //                   </View>
// // // //                 </View>

// // // //                 <TouchableOpacity activeOpacity={0.8} onPress={toggleNew}>
// // // //                   <View style={[styles.switchTrack, newMembers ? styles.switchOn : null]}>
// // // //                     <View style={[styles.switchThumb, newMembers ? styles.switchThumbOn : null]} />
// // // //                   </View>
// // // //                 </TouchableOpacity>
// // // //               </TouchableOpacity>

// // // //               {/* Old Members row */}
// // // //               <TouchableOpacity style={[styles.sheetRow, { marginTop: 10 }]} activeOpacity={0.8} onPress={toggleOld}>
// // // //                 <View style={styles.sheetLeft}>
// // // //                   <View style={styles.sheetIconBg}>
// // // //                     <Ionicons name="time" size={18} color="#DCE6FF" />
// // // //                   </View>
// // // //                   <View style={{ marginLeft: 12 }}>
// // // //                     <Text style={styles.sheetRowTitle}>Old Members</Text>
// // // //                     <Text style={styles.sheetSub}>Members registered earlier</Text>
// // // //                   </View>
// // // //                 </View>

// // // //                 <TouchableOpacity activeOpacity={0.8} onPress={toggleOld}>
// // // //                   <View style={[styles.radioOuter, oldMembers ? styles.radioActive : null]}>
// // // //                     {oldMembers && <View style={styles.radioInner} />}
// // // //                   </View>
// // // //                 </TouchableOpacity>
// // // //               </TouchableOpacity>

// // // //               {/* Apply/Close row */}
// // // //               <View style={{ marginTop: 16 }}>
// // // //                 <TouchableOpacity style={styles.applyBtn} activeOpacity={0.85} onPress={closeSheet}>
// // // //                   <Text style={styles.applyText}>Apply</Text>
// // // //                 </TouchableOpacity>
// // // //               </View>
// // // //             </View>
// // // //           </Animated.View>
// // // //         </>
// // // //       )}
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // /* ---------- Styles ---------- */

// // // // const AVATAR = 42;

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#020821",
// // // //   },

// // // //   fakeStatusBar: {
// // // //     marginTop: Platform.OS === "android" ? 12 : 0,
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     height: 40,
// // // //   },
// // // //   timeText: {
// // // //     color: "#fff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //   },
// // // //   fakeStatusIcons: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   headerRow: {
// // // //     marginTop: 6,
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //   },
// // // //   headerTitle: {
// // // //     color: "#fff",
// // // //     fontSize: 18,
// // // //     fontWeight: "600",
// // // //   },

// // // //   searchRow: {
// // // //     marginTop: 16,
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   searchBox: {
// // // //     flex: 1,
// // // //     height: 40,
// // // //     backgroundColor: "#071739",
// // // //     borderRadius: 20,
// // // //     borderWidth: 1,
// // // //     borderColor: "#123060",
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 14,
// // // //     marginRight: 12,
// // // //   },
// // // //   searchInput: {
// // // //     flex: 1,
// // // //     color: "#fff",
// // // //     fontSize: 13,
// // // //   },
// // // //   filterText: {
// // // //     color: "#7F9BFF",
// // // //     fontSize: 13,
// // // //     fontWeight: "500",
// // // //   },

// // // //   memberCard: {
// // // //     marginHorizontal: 18,
// // // //     marginTop: 14,
// // // //     backgroundColor: "#0B2C7C",
// // // //     borderRadius: 16,
// // // //     height: 58,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 14,
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   memberLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   avatarWrapper: {
// // // //     width: AVATAR,
// // // //     height: AVATAR,
// // // //     borderRadius: AVATAR / 2,
// // // //     overflow: "hidden",
// // // //     marginRight: 12,
// // // //   },
// // // //   avatarImage: {
// // // //     width: "100%",
// // // //     height: "100%",
// // // //   },

// // // //   memberName: {
// // // //     color: "#fff",
// // // //     fontSize: 14,
// // // //     fontWeight: "500",
// // // //     maxWidth: 140,
// // // //   },

// // // //   arrowBtn: {
// // // //     width: 34,
// // // //     height: 34,
// // // //     backgroundColor: "#2849D8",
// // // //     borderRadius: 17,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },

// // // //   /* Backdrop */
// // // //   backdrop: {
// // // //     ...StyleSheet.absoluteFillObject,
// // // //     backgroundColor: "rgba(0,0,0,0.5)",
// // // //   },

// // // //   /* Sheet (absolute positioned slide-up) */
// // // //   sheetWrap: {
// // // //     position: "absolute",
// // // //     left: 12,
// // // //     right: 12,
// // // //     bottom: 18,
// // // //     // height: maybe dynamic; we let content define
// // // //   },

// // // //   sheetInner: {
// // // //     backgroundColor: "#05203E",
// // // //     borderRadius: 18,
// // // //     paddingVertical: 14,
// // // //     paddingHorizontal: 16,
// // // //     // shadow
// // // //     shadowColor: "#000",
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 18,
// // // //     elevation: 16,
// // // //   },

// // // //   sheetHandle: {
// // // //     width: 46,
// // // //     height: 4,
// // // //     borderRadius: 2,
// // // //     backgroundColor: "#0C3A5F",
// // // //     alignSelf: "center",
// // // //     marginBottom: 10,
// // // //   },

// // // //   sheetTitle: {
// // // //     color: "#DCE6FF",
// // // //     fontSize: 15,
// // // //     fontWeight: "600",
// // // //     marginBottom: 10,
// // // //   },

// // // //   sheetRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     paddingVertical: 8,
// // // //   },

// // // //   sheetLeft: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },

// // // //   sheetIconBg: {
// // // //     width: 40,
// // // //     height: 40,
// // // //     borderRadius: 10,
// // // //     backgroundColor: "#0B3656",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },

// // // //   sheetRowTitle: {
// // // //     color: "#fff",
// // // //     fontSize: 14,
// // // //     fontWeight: "600",
// // // //   },
// // // //   sheetSub: {
// // // //     color: "#99B0E6",
// // // //     fontSize: 12,
// // // //   },

// // // //   /* Toggle switch */
// // // //   switchTrack: {
// // // //     width: 52,
// // // //     height: 30,
// // // //     borderRadius: 18,
// // // //     backgroundColor: "#0C304F",
// // // //     padding: 4,
// // // //     justifyContent: "flex-start",
// // // //   },
// // // //   switchOn: {
// // // //     backgroundColor: "#2F2C7F", // darker track when on
// // // //     justifyContent: "flex-end",
// // // //   },
// // // //   switchThumb: {
// // // //     width: 22,
// // // //     height: 22,
// // // //     borderRadius: 11,
// // // //     backgroundColor: "#98A6D9",
// // // //   },
// // // //   switchThumbOn: {
// // // //     backgroundColor: "#E8D9FF", // light thumb / looks purple on screenshot
// // // //   },

// // // //   /* Radio */
// // // //   radioOuter: {
// // // //     width: 34,
// // // //     height: 34,
// // // //     borderRadius: 17,
// // // //     borderWidth: 1,
// // // //     borderColor: "#274C9D",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     backgroundColor: "#07243E",
// // // //   },
// // // //   radioActive: {
// // // //     borderColor: "#47A0FF",
// // // //     backgroundColor: "#2849D8",
// // // //   },
// // // //   radioInner: {
// // // //     width: 14,
// // // //     height: 14,
// // // //     borderRadius: 7,
// // // //     backgroundColor: "#fff",
// // // //   },

// // // //   /* Apply button */
// // // //   applyBtn: {
// // // //     marginTop: 14,
// // // //     backgroundColor: "#3255BA",
// // // //     borderRadius: 12,
// // // //     paddingVertical: 12,
// // // //     alignItems: "center",
// // // //   },
// // // //   applyText: {
// // // //     color: "#fff",
// // // //     fontWeight: "600",
// // // //     fontSize: 15,
// // // //   },
// // // // });
// // // // V25.js
// // // import React, { useState, useRef, useEffect } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   Platform,
// // //   FlatList,
// // //   TouchableOpacity,
// // //   TextInput,
// // //   Image,
// // //   SafeAreaView,
// // //   Modal,
// // //   Animated,
// // //   Easing,
// // //   Dimensions,
// // // } from "react-native";
// // // import { Ionicons } from "@expo/vector-icons";

// // // const { width, height } = Dimensions.get("window");

// // // const MEMBERS = Array.from({ length: 12 }).map((_, i) => ({
// // //   id: String(i + 1),
// // //   name: `! 7SUII_Notashish15 #${i + 1}`,
// // //   avatar:
// // //     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// // // }));

// // // export default function V25({ navigation }) {
// // //   const [search, setSearch] = useState("");
// // //   const [sheetVisible, setSheetVisible] = useState(false);
// // //   const [newMembers, setNewMembers] = useState(true);
// // //   const [oldMembers, setOldMembers] = useState(false);

// // //   // animation refs for bottom sheet
// // //   const slideAnim = useRef(new Animated.Value(height)).current;
// // //   const backdropAnim = useRef(new Animated.Value(0)).current;

// // //   const openSheet = () => {
// // //     setSheetVisible(true);
// // //     Animated.parallel([
// // //       Animated.timing(backdropAnim, {
// // //         toValue: 1,
// // //         duration: 240,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(slideAnim, {
// // //         toValue: 0,
// // //         duration: 320,
// // //         easing: Easing.out(Easing.cubic),
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();
// // //   };

// // //   const closeSheet = () => {
// // //     Animated.parallel([
// // //       Animated.timing(backdropAnim, {
// // //         toValue: 0,
// // //         duration: 220,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(slideAnim, {
// // //         toValue: height,
// // //         duration: 260,
// // //         easing: Easing.in(Easing.cubic),
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start(() => {
// // //       setSheetVisible(false);
// // //     });
// // //   };

// // //   const toggleNew = () => {
// // //     setNewMembers((v) => !v);
// // //     if (oldMembers && newMembers) setOldMembers(false);
// // //   };

// // //   const toggleOld = () => {
// // //     setOldMembers((v) => !v);
// // //     if (newMembers && oldMembers) setNewMembers(false);
// // //   };

// // //   const handleBack = () => {
// // //     if (navigation?.goBack) navigation.goBack();
// // //   };

// // //   const filteredMembers = MEMBERS.filter((m) =>
// // //     m.name.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   const renderItem = ({ item }) => (
// // //     <View style={styles.memberCard}>
// // //       <View style={styles.memberLeft}>
// // //         <View style={styles.avatarWrapper}>
// // //           <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
// // //         </View>

// // //         <Text style={styles.memberName} numberOfLines={1}>
// // //           {item.name}
// // //         </Text>
// // //       </View>

// // //       {/* Arrow: onPress navigates to  with member param */}
// // //       <TouchableOpacity
// // //         style={styles.arrowBtn}
// // //         activeOpacity={0.7}
// // //         onPress={() => navigation.navigate("EditMemberScreen", { member: item })}
// // //       >
// // //         <Ionicons name="chevron-forward" size={20} color="#ffffff" />
// // //       </TouchableOpacity>
// // //     </View>
// // //   );

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" />

// // //       <View style={styles.fakeStatusBar}>
// // //         <Text style={styles.timeText}>9:41</Text>
// // //         <View style={styles.fakeStatusIcons}>
// // //           <Ionicons name="cellular" size={16} color="#fff" />
// // //           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
// // //           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
// // //         </View>
// // //       </View>

// // //       <View style={styles.headerRow}>
// // //         <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // //           <Ionicons name="chevron-back" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Members</Text>
// // //         <View style={{ width: 24 }} />
// // //       </View>

// // //       <View style={styles.searchRow}>
// // //         <View style={styles.searchBox}>
// // //           <Ionicons name="search" size={18} color="#6477B9" style={{ marginRight: 6 }} />
// // //           <TextInput
// // //             value={search}
// // //             onChangeText={setSearch}
// // //             placeholder="Search Members"
// // //             placeholderTextColor="rgba(255,255,255,0.45)"
// // //             style={styles.searchInput}
// // //           />
// // //         </View>

// // //         <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: 10 }} onPress={openSheet}>
// // //           <Text style={styles.filterText}>Filter</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       <FlatList
// // //         data={filteredMembers}
// // //         keyExtractor={(item) => item.id}
// // //         renderItem={renderItem}
// // //         contentContainerStyle={{ paddingBottom: 140 }}
// // //         showsVerticalScrollIndicator={false}
// // //       />

// // //       {sheetVisible && (
// // //         <>
// // //           <Animated.View style={[styles.backdrop, { opacity: backdropAnim }]} />
// // //           <Animated.View style={[styles.sheetWrap, { transform: [{ translateY: slideAnim }] }]}>
// // //             <View style={styles.sheetInner}>
// // //               <View style={styles.sheetHandle} />
// // //               <Text style={styles.sheetTitle}>Filters</Text>

// // //               <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8} onPress={toggleNew}>
// // //                 <View style={styles.sheetLeft}>
// // //                   <View style={styles.sheetIconBg}>
// // //                     <Ionicons name="person-add" size={18} color="#DCE6FF" />
// // //                   </View>
// // //                   <View style={{ marginLeft: 12 }}>
// // //                     <Text style={styles.sheetRowTitle}>New Members</Text>
// // //                     <Text style={styles.sheetSub}>Recently added members</Text>
// // //                   </View>
// // //                 </View>

// // //                 <TouchableOpacity activeOpacity={0.8} onPress={toggleNew}>
// // //                   <View style={[styles.switchTrack, newMembers ? styles.switchOn : null]}>
// // //                     <View style={[styles.switchThumb, newMembers ? styles.switchThumbOn : null]} />
// // //                   </View>
// // //                 </TouchableOpacity>
// // //               </TouchableOpacity>

// // //               <TouchableOpacity style={[styles.sheetRow, { marginTop: 10 }]} activeOpacity={0.8} onPress={toggleOld}>
// // //                 <View style={styles.sheetLeft}>
// // //                   <View style={styles.sheetIconBg}>
// // //                     <Ionicons name="time" size={18} color="#DCE6FF" />
// // //                   </View>
// // //                   <View style={{ marginLeft: 12 }}>
// // //                     <Text style={styles.sheetRowTitle}>Old Members</Text>
// // //                     <Text style={styles.sheetSub}>Members registered earlier</Text>
// // //                   </View>
// // //                 </View>

// // //                 <TouchableOpacity activeOpacity={0.8} onPress={toggleOld}>
// // //                   <View style={[styles.radioOuter, oldMembers ? styles.radioActive : null]}>
// // //                     {oldMembers && <View style={styles.radioInner} />}
// // //                   </View>
// // //                 </TouchableOpacity>
// // //               </TouchableOpacity>

// // //               <View style={{ marginTop: 16 }}>
// // //                 <TouchableOpacity style={styles.applyBtn} activeOpacity={0.85} onPress={closeSheet}>
// // //                   <Text style={styles.applyText}>Apply</Text>
// // //                 </TouchableOpacity>
// // //               </View>
// // //             </View>
// // //           </Animated.View>
// // //         </>
// // //       )}
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const AVATAR = 42;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#020821",
// // //   },
// // //   fakeStatusBar: {
// // //     marginTop: Platform.OS === "android" ? 12 : 0,
// // //     paddingHorizontal: 20,
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     height: 40,
// // //   },
// // //   timeText: {
// // //     color: "#fff",
// // //     fontSize: 16,
// // //     fontWeight: "600",
// // //   },
// // //   fakeStatusIcons: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   headerRow: {
// // //     marginTop: 6,
// // //     paddingHorizontal: 20,
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //   },
// // //   headerTitle: {
// // //     color: "#fff",
// // //     fontSize: 18,
// // //     fontWeight: "600",
// // //   },
// // //   searchRow: {
// // //     marginTop: 16,
// // //     paddingHorizontal: 20,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   searchBox: {
// // //     flex: 1,
// // //     height: 40,
// // //     backgroundColor: "#071739",
// // //     borderRadius: 20,
// // //     borderWidth: 1,
// // //     borderColor: "#123060",
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingHorizontal: 14,
// // //     marginRight: 12,
// // //   },
// // //   searchInput: {
// // //     flex: 1,
// // //     color: "#fff",
// // //     fontSize: 13,
// // //   },
// // //   filterText: {
// // //     color: "#7F9BFF",
// // //     fontSize: 13,
// // //     fontWeight: "500",
// // //   },
// // //   memberCard: {
// // //     marginHorizontal: 18,
// // //     marginTop: 14,
// // //     backgroundColor: "#0B2C7C",
// // //     borderRadius: 16,
// // //     height: 58,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingHorizontal: 14,
// // //     justifyContent: "space-between",
// // //   },
// // //   memberLeft: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   avatarWrapper: {
// // //     width: AVATAR,
// // //     height: AVATAR,
// // //     borderRadius: AVATAR / 2,
// // //     overflow: "hidden",
// // //     marginRight: 12,
// // //   },
// // //   avatarImage: {
// // //     width: "100%",
// // //     height: "100%",
// // //   },
// // //   memberName: {
// // //     color: "#fff",
// // //     fontSize: 14,
// // //     fontWeight: "500",
// // //     maxWidth: 140,
// // //   },
// // //   arrowBtn: {
// // //     width: 34,
// // //     height: 34,
// // //     backgroundColor: "#2849D8",
// // //     borderRadius: 17,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   backdrop: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: "rgba(0,0,0,0.5)",
// // //   },
// // //   sheetWrap: {
// // //     position: "absolute",
// // //     left: 12,
// // //     right: 12,
// // //     bottom: 18,
// // //   },
// // //   sheetInner: {
// // //     backgroundColor: "#05203E",
// // //     borderRadius: 18,
// // //     paddingVertical: 14,
// // //     paddingHorizontal: 16,
// // //     shadowColor: "#000",
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 18,
// // //     elevation: 16,
// // //   },
// // //   sheetHandle: {
// // //     width: 46,
// // //     height: 4,
// // //     borderRadius: 2,
// // //     backgroundColor: "#0C3A5F",
// // //     alignSelf: "center",
// // //     marginBottom: 10,
// // //   },
// // //   sheetTitle: {
// // //     color: "#DCE6FF",
// // //     fontSize: 15,
// // //     fontWeight: "600",
// // //     marginBottom: 10,
// // //   },
// // //   sheetRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //     paddingVertical: 8,
// // //   },
// // //   sheetLeft: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   sheetIconBg: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 10,
// // //     backgroundColor: "#0B3656",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   sheetRowTitle: {
// // //     color: "#fff",
// // //     fontSize: 14,
// // //     fontWeight: "600",
// // //   },
// // //   sheetSub: {
// // //     color: "#99B0E6",
// // //     fontSize: 12,
// // //   },
// // //   switchTrack: {
// // //     width: 52,
// // //     height: 30,
// // //     borderRadius: 18,
// // //     backgroundColor: "#0C304F",
// // //     padding: 4,
// // //     justifyContent: "flex-start",
// // //   },
// // //   switchOn: {
// // //     backgroundColor: "#2F2C7F",
// // //     justifyContent: "flex-end",
// // //   },
// // //   switchThumb: {
// // //     width: 22,
// // //     height: 22,
// // //     borderRadius: 11,
// // //     backgroundColor: "#98A6D9",
// // //   },
// // //   switchThumbOn: {
// // //     backgroundColor: "#E8D9FF",
// // //   },
// // //   radioOuter: {
// // //     width: 34,
// // //     height: 34,
// // //     borderRadius: 17,
// // //     borderWidth: 1,
// // //     borderColor: "#274C9D",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     backgroundColor: "#07243E",
// // //   },
// // //   radioActive: {
// // //     borderColor: "#47A0FF",
// // //     backgroundColor: "#2849D8",
// // //   },
// // //   radioInner: {
// // //     width: 14,
// // //     height: 14,
// // //     borderRadius: 7,
// // //     backgroundColor: "#fff",
// // //   },
// // //   applyBtn: {
// // //     marginTop: 14,
// // //     backgroundColor: "#3255BA",
// // //     borderRadius: 12,
// // //     paddingVertical: 12,
// // //     alignItems: "center",
// // //   },
// // //   applyText: {
// // //     color: "#fff",
// // //     fontWeight: "600",
// // //     fontSize: 15,
// // //   },
// // // });
// // // V25.js
// // import React, { useState, useRef } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   StatusBar,
// //   Platform,
// //   FlatList,
// //   TouchableOpacity,
// //   TextInput,
// //   Image,
// //   SafeAreaView,
// //   Animated,
// //   Easing,
// //   Dimensions,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";

// // const { width, height } = Dimensions.get("window");

// // const MEMBERS = Array.from({ length: 12 }).map((_, i) => ({
// //   id: String(i + 1),
// //   name: `! 7SUII_Notashish15 #${i + 1}`,
// //   avatar:
// //     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// // }));

// // export default function V25({ navigation }) {
// //   const [search, setSearch] = useState("");
// //   const [sheetVisible, setSheetVisible] = useState(false);
// //   const [newMembers, setNewMembers] = useState(true);
// //   const [oldMembers, setOldMembers] = useState(false);

// //   const slideAnim = useRef(new Animated.Value(height)).current;
// //   const backdropAnim = useRef(new Animated.Value(0)).current;

// //   function openSheet() {
// //     setSheetVisible(true);
// //     requestAnimationFrame(() => {
// //       Animated.parallel([
// //         Animated.timing(backdropAnim, { toValue: 1, duration: 240, useNativeDriver: true }),
// //         Animated.timing(slideAnim, { toValue: 0, duration: 320, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
// //       ]).start();
// //     });
// //   }

// //   function closeSheet() {
// //     Animated.parallel([
// //       Animated.timing(backdropAnim, { toValue: 0, duration: 220, useNativeDriver: true }),
// //       Animated.timing(slideAnim, { toValue: height, duration: 260, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
// //     ]).start(() => setSheetVisible(false));
// //   }

// //   const toggleNew = () => {
// //     setNewMembers(v => !v);
// //     if (oldMembers && newMembers) setOldMembers(false);
// //   };
// //   const toggleOld = () => {
// //     setOldMembers(v => !v);
// //     if (newMembers && oldMembers) setNewMembers(false);
// //   };

// //   const filteredMembers = MEMBERS.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

// //   const renderItem = ({ item }) => (
// //     <View style={styles.memberCard}>
// //       <View style={styles.memberLeft}>
// //         <View style={styles.avatarWrapper}>
// //           <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
// //         </View>
// //         <Text style={styles.memberName} numberOfLines={1}>{item.name}</Text>
// //       </View>

// //       {/* IMPORTANT: navigate to EditMemberScreen with member param */}
// //       <TouchableOpacity
// //         style={styles.arrowBtn}
// //         activeOpacity={0.8}
// //         onPress={() => navigation.navigate("EditMemberScreen", { member: item })}
// //       >
// //         <Ionicons name="chevron-forward" size={20} color="#ffffff" />
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" />
// //       <View style={styles.fakeStatusBar}>
// //         <Text style={styles.timeText}>9:41</Text>
// //         <View style={styles.fakeStatusIcons}>
// //           <Ionicons name="cellular" size={16} color="#fff" />
// //           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
// //           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
// //         </View>
// //       </View>

// //       <View style={styles.headerRow}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
// //           <Ionicons name="chevron-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Members</Text>
// //         <View style={{ width: 24 }} />
// //       </View>

// //       <View style={styles.searchRow}>
// //         <View style={styles.searchBox}>
// //           <Ionicons name="search" size={18} color="#6477B9" style={{ marginRight: 6 }} />
// //           <TextInput value={search} onChangeText={setSearch} placeholder="Search Members" placeholderTextColor="rgba(255,255,255,0.45)" style={styles.searchInput} />
// //         </View>

// //         <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: 10 }} onPress={openSheet}>
// //           <Text style={styles.filterText}>Filter</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <FlatList data={filteredMembers} keyExtractor={item => item.id} renderItem={renderItem} contentContainerStyle={{ paddingBottom: 140 }} showsVerticalScrollIndicator={false} />

// //       {sheetVisible && (
// //         <>
// //           <Animated.View style={[styles.backdrop, { opacity: backdropAnim }]} />
// //           <TouchableOpacity style={StyleSheet.absoluteFill} activeOpacity={1} onPress={closeSheet} />
// //           <Animated.View style={[styles.sheetWrap, { transform: [{ translateY: slideAnim }] }]}>
// //             <View style={styles.sheetInner}>
// //               <View style={styles.sheetHandle} />
// //               <Text style={styles.sheetTitle}>Filters</Text>

// //               <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8} onPress={toggleNew}>
// //                 <View style={styles.sheetLeft}>
// //                   <View style={styles.sheetIconBg}><Ionicons name="person-add" size={18} color="#DCE6FF" /></View>
// //                   <View style={{ marginLeft: 12 }}>
// //                     <Text style={styles.sheetRowTitle}>New Members</Text>
// //                     <Text style={styles.sheetSub}>Recently added members</Text>
// //                   </View>
// //                 </View>
// //                 <TouchableOpacity activeOpacity={0.8} onPress={toggleNew}>
// //                   <View style={[styles.switchTrack, newMembers ? styles.switchOn : null]}>
// //                     <View style={[styles.switchThumb, newMembers ? styles.switchThumbOn : null]} />
// //                   </View>
// //                 </TouchableOpacity>
// //               </TouchableOpacity>

// //               <TouchableOpacity style={[styles.sheetRow, { marginTop: 10 }]} activeOpacity={0.8} onPress={toggleOld}>
// //                 <View style={styles.sheetLeft}>
// //                   <View style={styles.sheetIconBg}><Ionicons name="time" size={18} color="#DCE6FF" /></View>
// //                   <View style={{ marginLeft: 12 }}>
// //                     <Text style={styles.sheetRowTitle}>Old Members</Text>
// //                     <Text style={styles.sheetSub}>Members registered earlier</Text>
// //                   </View>
// //                 </View>
// //                 <TouchableOpacity activeOpacity={0.8} onPress={toggleOld}>
// //                   <View style={[styles.radioOuter, oldMembers ? styles.radioActive : null]}>{oldMembers && <View style={styles.radioInner} />}</View>
// //                 </TouchableOpacity>
// //               </TouchableOpacity>

// //               <View style={{ marginTop: 16 }}>
// //                 <TouchableOpacity style={styles.applyBtn} activeOpacity={0.85} onPress={closeSheet}>
// //                   <Text style={styles.applyText}>Apply</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           </Animated.View>
// //         </>
// //       )}
// //     </SafeAreaView>
// //   );
// // }

// // /* styles (same as earlier — paste your styles) */
// // const AVATAR = 42;
// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#020821" },
// //   fakeStatusBar: { marginTop: Platform.OS === "android" ? 12 : 0, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40 },
// //   timeText: { color: "#fff", fontSize: 16, fontWeight: "600" },
// //   fakeStatusIcons: { flexDirection: "row", alignItems: "center" },
// //   headerRow: { marginTop: 6, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
// //   headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
// //   searchRow: { marginTop: 16, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" },
// //   searchBox: { flex: 1, height: 40, backgroundColor: "#071739", borderRadius: 20, borderWidth: 1, borderColor: "#123060", flexDirection: "row", alignItems: "center", paddingHorizontal: 14, marginRight: 12 },
// //   searchInput: { flex: 1, color: "#fff", fontSize: 13 },
// //   filterText: { color: "#7F9BFF", fontSize: 13, fontWeight: "500" },
// //   memberCard: { marginHorizontal: 18, marginTop: 14, backgroundColor: "#0B2C7C", borderRadius: 16, height: 58, flexDirection: "row", alignItems: "center", paddingHorizontal: 14, justifyContent: "space-between" },
// //   memberLeft: { flexDirection: "row", alignItems: "center" },
// //   avatarWrapper: { width: AVATAR, height: AVATAR, borderRadius: AVATAR / 2, overflow: "hidden", marginRight: 12 },
// //   avatarImage: { width: "100%", height: "100%" },
// //   memberName: { color: "#fff", fontSize: 14, fontWeight: "500", maxWidth: 140 },
// //   arrowBtn: { width: 34, height: 34, backgroundColor: "#2849D8", borderRadius: 17, justifyContent: "center", alignItems: "center" },
// //   backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)" },
// //   sheetWrap: { position: "absolute", left: 12, right: 12, bottom: 18 },
// //   sheetInner: { backgroundColor: "#05203E", borderRadius: 18, paddingVertical: 14, paddingHorizontal: 16, shadowColor: "#000", shadowOpacity: 0.3, shadowRadius: 18, elevation: 16 },
// //   sheetHandle: { width: 46, height: 4, borderRadius: 2, backgroundColor: "#0C3A5F", alignSelf: "center", marginBottom: 10 },
// //   sheetTitle: { color: "#DCE6FF", fontSize: 15, fontWeight: "600", marginBottom: 10 },
// //   sheetRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 8 },
// //   sheetLeft: { flexDirection: "row", alignItems: "center" },
// //   sheetIconBg: { width: 40, height: 40, borderRadius: 10, backgroundColor: "#0B3656", justifyContent: "center", alignItems: "center" },
// //   sheetRowTitle: { color: "#fff", fontSize: 14, fontWeight: "600" },
// //   sheetSub: { color: "#99B0E6", fontSize: 12 },
// //   switchTrack: { width: 52, height: 30, borderRadius: 18, backgroundColor: "#0C304F", padding: 4, justifyContent: "flex-start" },
// //   switchOn: { backgroundColor: "#2F2C7F", justifyContent: "flex-end" },
// //   switchThumb: { width: 22, height: 22, borderRadius: 11, backgroundColor: "#98A6D9" },
// //   switchThumbOn: { backgroundColor: "#E8D9FF" },
// //   radioOuter: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: "#274C9D", justifyContent: "center", alignItems: "center", backgroundColor: "#07243E" },
// //   radioActive: { borderColor: "#47A0FF", backgroundColor: "#2849D8" },
// //   radioInner: { width: 14, height: 14, borderRadius: 7, backgroundColor: "#fff" },
// //   applyBtn: { marginTop: 14, backgroundColor: "#3255BA", borderRadius: 12, paddingVertical: 12, alignItems: "center" },
// //   applyText: { color: "#fff", fontWeight: "600", fontSize: 15 },
// // });
// // V25.js
// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   SafeAreaView,
//   Animated,
//   Easing,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width, height } = Dimensions.get("window");

// const MEMBERS = Array.from({ length: 12 }).map((_, i) => ({
//   id: String(i + 1),
//   name: `! 7SUII_Notashish15 #${i + 1}`,
//   avatar:
//     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
// }));

// export default function V25({ navigation }) {
//   const [search, setSearch] = useState("");
//   const [sheetVisible, setSheetVisible] = useState(false);
//   const [newMembers, setNewMembers] = useState(true);
//   const [oldMembers, setOldMembers] = useState(false);

//   const slideAnim = useRef(new Animated.Value(height)).current;
//   const backdropAnim = useRef(new Animated.Value(0)).current;

//   function openSheet() {
//     setSheetVisible(true);
//     requestAnimationFrame(() => {
//       Animated.parallel([
//         Animated.timing(backdropAnim, { toValue: 1, duration: 240, useNativeDriver: true }),
//         Animated.timing(slideAnim, { toValue: 0, duration: 320, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
//       ]).start();
//     });
//   }

//   function closeSheet() {
//     Animated.parallel([
//       Animated.timing(backdropAnim, { toValue: 0, duration: 220, useNativeDriver: true }),
//       Animated.timing(slideAnim, { toValue: height, duration: 260, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
//     ]).start(() => setSheetVisible(false));
//   }

//   const toggleNew = () => {
//     setNewMembers(v => !v);
//     if (oldMembers && newMembers) setOldMembers(false);
//   };
//   const toggleOld = () => {
//     setOldMembers(v => !v);
//     if (newMembers && oldMembers) setNewMembers(false);
//   };

//   const filteredMembers = MEMBERS.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

//   const renderItem = ({ item }) => (
//     <View style={styles.memberCard}>
//       <View style={styles.memberLeft}>
//         <View style={styles.avatarWrapper}>
//           <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
//         </View>
//         <Text style={styles.memberName} numberOfLines={1}>{item.name}</Text>
//       </View>

//       {/* NOTE: navigate to 'EditMember' (matches name in RootNavigator) */}
//       <TouchableOpacity
//         style={styles.arrowBtn}
//         activeOpacity={0.8}
//         onPress={() => navigation.navigate("EditMember", { member: item })}
//       >
//         <Ionicons name="chevron-forward" size={20} color="#ffffff" />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons name="cellular" size={16} color="#fff" />
//           <Ionicons name="wifi" size={16} color="#fff" style={{ marginLeft: 6 }} />
//           <Ionicons name="battery-full" size={20} color="#fff" style={{ marginLeft: 6 }} />
//         </View>
//       </View>

//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
//           <Ionicons name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Members</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <View style={styles.searchRow}>
//         <View style={styles.searchBox}>
//           <Ionicons name="search" size={18} color="#6477B9" style={{ marginRight: 6 }} />
//           <TextInput value={search} onChangeText={setSearch} placeholder="Search Members" placeholderTextColor="rgba(255,255,255,0.45)" style={styles.searchInput} />
//         </View>

//         <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: 10 }} onPress={openSheet}>
//           <Text style={styles.filterText}>Filter</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList data={filteredMembers} keyExtractor={item => item.id} renderItem={renderItem} contentContainerStyle={{ paddingBottom: 140 }} showsVerticalScrollIndicator={false} />

//       {sheetVisible && (
//         <>
//           <Animated.View style={[styles.backdrop, { opacity: backdropAnim }]} />
//           <TouchableOpacity style={StyleSheet.absoluteFill} activeOpacity={1} onPress={closeSheet} />
//           <Animated.View style={[styles.sheetWrap, { transform: [{ translateY: slideAnim }] }]}>
//             <View style={styles.sheetInner}>
//               <View style={styles.sheetHandle} />
//               <Text style={styles.sheetTitle}>Filters</Text>

//               <TouchableOpacity style={styles.sheetRow} activeOpacity={0.8} onPress={toggleNew}>
//                 <View style={styles.sheetLeft}>
//                   <View style={styles.sheetIconBg}><Ionicons name="person-add" size={18} color="#DCE6FF" /></View>
//                   <View style={{ marginLeft: 12 }}>
//                     <Text style={styles.sheetRowTitle}>New Members</Text>
//                     <Text style={styles.sheetSub}>Recently added members</Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity activeOpacity={0.8} onPress={toggleNew}>
//                   <View style={[styles.switchTrack, newMembers ? styles.switchOn : null]}>
//                     <View style={[styles.switchThumb, newMembers ? styles.switchThumbOn : null]} />
//                   </View>
//                 </TouchableOpacity>
//               </TouchableOpacity>

//               <TouchableOpacity style={[styles.sheetRow, { marginTop: 10 }]} activeOpacity={0.8} onPress={toggleOld}>
//                 <View style={styles.sheetLeft}>
//                   <View style={styles.sheetIconBg}><Ionicons name="time" size={18} color="#DCE6FF" /></View>
//                   <View style={{ marginLeft: 12 }}>
//                     <Text style={styles.sheetRowTitle}>Old Members</Text>
//                     <Text style={styles.sheetSub}>Members registered earlier</Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity activeOpacity={0.8} onPress={toggleOld}>
//                   <View style={[styles.radioOuter, oldMembers ? styles.radioActive : null]}>{oldMembers && <View style={styles.radioInner} />}</View>
//                 </TouchableOpacity>
//               </TouchableOpacity>

//               <View style={{ marginTop: 16 }}>
//                 <TouchableOpacity style={styles.applyBtn} activeOpacity={0.85} onPress={closeSheet}>
//                   <Text style={styles.applyText}>Apply</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Animated.View>
//         </>
//       )}
//     </SafeAreaView>
//   );
// }

// const AVATAR = 42;
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#020821" },
//   fakeStatusBar: { marginTop: Platform.OS === "android" ? 12 : 0, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 40 },
//   timeText: { color: "#fff", fontSize: 16, fontWeight: "600" },
//   fakeStatusIcons: { flexDirection: "row", alignItems: "center" },
//   headerRow: { marginTop: 6, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
//   headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
//   searchRow: { marginTop: 16, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" },
//   searchBox: { flex: 1, height: 40, backgroundColor: "#071739", borderRadius: 20, borderWidth: 1, borderColor: "#123060", flexDirection: "row", alignItems: "center", paddingHorizontal: 14, marginRight: 12 },
//   searchInput: { flex: 1, color: "#fff", fontSize: 13 },
//   filterText: { color: "#7F9BFF", fontSize: 13, fontWeight: "500" },
//   memberCard: { marginHorizontal: 18, marginTop: 14, backgroundColor: "#0B2C7C", borderRadius: 16, height: 58, flexDirection: "row", alignItems: "center", paddingHorizontal: 14, justifyContent: "space-between" },
//   memberLeft: { flexDirection: "row", alignItems: "center" },
//   avatarWrapper: { width: AVATAR, height: AVATAR, borderRadius: AVATAR / 2, overflow: "hidden", marginRight: 12 },
//   avatarImage: { width: "100%", height: "100%" },
//   memberName: { color: "#fff", fontSize: 14, fontWeight: "500", maxWidth: 140 },
//   arrowBtn: { width: 34, height: 34, backgroundColor: "#2849D8", borderRadius: 17, justifyContent: "center", alignItems: "center" },
//   backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)" },
//   sheetWrap: { position: "absolute", left: 12, right: 12, bottom: 18 },
//   sheetInner: { backgroundColor: "#05203E", borderRadius: 18, paddingVertical: 14, paddingHorizontal: 16, shadowColor: "#000", shadowOpacity: 0.3, shadowRadius: 18, elevation: 16 },
//   sheetHandle: { width: 46, height: 4, borderRadius: 2, backgroundColor: "#0C3A5F", alignSelf: "center", marginBottom: 10 },
//   sheetTitle: { color: "#DCE6FF", fontSize: 15, fontWeight: "600", marginBottom: 10 },
//   sheetRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 8 },
//   sheetLeft: { flexDirection: "row", alignItems: "center" },
//   sheetIconBg: { width: 40, height: 40, borderRadius: 10, backgroundColor: "#0B3656", justifyContent: "center", alignItems: "center" },
//   sheetRowTitle: { color: "#fff", fontSize: 14, fontWeight: "600" },
//   sheetSub: { color: "#99B0E6", fontSize: 12 },
//   switchTrack: { width: 52, height: 30, borderRadius: 18, backgroundColor: "#0C304F", padding: 4, justifyContent: "flex-start" },
//   switchOn: { backgroundColor: "#2F2C7F", justifyContent: "flex-end" },
//   switchThumb: { width: 22, height: 22, borderRadius: 11, backgroundColor: "#98A6D9" },
//   switchThumbOn: { backgroundColor: "#E8D9FF" },
//   radioOuter: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: "#274C9D", justifyContent: "center", alignItems: "center", backgroundColor: "#07243E" },
//   radioActive: { borderColor: "#47A0FF", backgroundColor: "#2849D8" },
//   radioInner: { width: 14, height: 14, borderRadius: 7, backgroundColor: "#fff" },
//   applyBtn: { marginTop: 14, backgroundColor: "#3255BA", borderRadius: 12, paddingVertical: 12, alignItems: "center" },
//   applyText: { color: "#fff", fontWeight: "600", fontSize: 15 },
// });
// InvitesScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
  Switch,
  Modal,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const VERIFICATION_OPTIONS = [
  { id: "none", label: "None", desc: "Unrestricted" },
  { id: "low", label: "Low", desc: "Must have verified email on their ballastra account." },
  { id: "medium", label: "Medium", desc: "Must also be registered on ballastra for longer than 5 minutes." },
  { id: "high", label: "High", desc: "Must also be a member of this nexus for longer than 10 minutes." },
  { id: "highest", label: "Highest", desc: "Must have a verified phone on their ballastra account." },
];

const SENSITIVE_OPTIONS = [
  { id: "none", label: "None", desc: "No filtering" },
  { id: "scan_media", label: "All Members Filter", desc: "Automatically scan images & videos for NSFW" },
  { id: "hide_on_match", label: "Hide on Match", desc: "Hide automatically when content flagged" },
  { id: "require_age", label: "Age Verified Only", desc: "Require age verification to view content" },
];

export default function InvitesScreen({ navigation }) {
  // hide native status bar
  StatusBar.setHidden(true);

  const [verifyExpanded, setVerifyExpanded] = useState(false);
  const [sensitiveExpanded, setSensitiveExpanded] = useState(false);

  const [selectedVerification, setSelectedVerification] = useState("none");

  const [sensitiveState, setSensitiveState] = useState({
    none: true,
    scan_media: false,
    hide_on_match: false,
    require_age: false,
  });

  const [ageRestricted, setAgeRestricted] = useState(true); // as screenshot shows ON

  const [modalVisible, setModalVisible] = useState(false);
  const [modalFor, setModalFor] = useState(null);

  const handleBack = () => {
    if (navigation?.goBack) navigation.goBack();
  };

  const toggleVerify = () => {
    setVerifyExpanded((p) => !p);
    if (sensitiveExpanded) setSensitiveExpanded(false);
  };

  const toggleSensitive = () => {
    setSensitiveExpanded((p) => !p);
    if (verifyExpanded) setVerifyExpanded(false);
  };

  const selectVerification = (id) => setSelectedVerification(id);

  const toggleSensitiveOption = (id) => {
    if (id === "none") {
      setSensitiveState({
        none: true,
        scan_media: false,
        hide_on_match: false,
        require_age: false,
      });
      return;
    }
    setSensitiveState((prev) => {
      const next = { ...prev, none: false, [id]: !prev[id] };
      const anyOn = Object.keys(next).some((k) => k !== "none" && next[k]);
      if (!anyOn) next.none = true;
      return next;
    });
  };

  const getVerifyLabel = () =>
    VERIFICATION_OPTIONS.find((o) => o.id === selectedVerification)?.label || "None";

  const getSensitiveLabel = () => {
    if (sensitiveState.none) return "None";
    const active = Object.keys(sensitiveState).filter((k) => k !== "none" && sensitiveState[k]);
    return active.length === 1 ? SENSITIVE_OPTIONS.find((o) => o.id === active[0])?.label || "Custom" : "Custom";
  };

  const openModal = (forKey) => {
    setModalFor(forKey);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setModalFor(null);
  };

  return (
    <View style={styles.container}>
      {/* Hidden status bar; we still set background safe spacing */}
      <StatusBar hidden />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7} style={styles.headerLeft}>
            <Ionicons name="chevron-back" size={22} color="#ffffff" />
          </TouchableOpacity>

          <Text style={styles.title}>Invites</Text>

          <View style={{ width: 28 }} />
        </View>

        {/* Verifications pill */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.pill} activeOpacity={0.85} onPress={toggleVerify}>
            <Text style={styles.pillLabel}>Verifications Level</Text>
            <View style={styles.pillRight}>
              <Text style={styles.pillValue}>{getVerifyLabel()}</Text>
              <Ionicons name={verifyExpanded ? "chevron-up" : "chevron-down"} size={16} color="#9FB4FF" style={{ marginLeft: 8 }} />
            </View>
          </TouchableOpacity>

          <Text style={styles.pillDesc}>
            Members of the nexus must meet the following criteria before they can send messages in text Space or initiate a direct message conversation.
          </Text>

          {verifyExpanded && (
            <View style={styles.expandedContainer}>
              {VERIFICATION_OPTIONS.map((opt) => {
                const active = selectedVerification === opt.id;
                return (
                  <TouchableOpacity
                    key={opt.id}
                    style={[styles.optionRow, active ? styles.optionActive : null]}
                    activeOpacity={0.85}
                    onPress={() => selectVerification(opt.id)}
                  >
                    <View style={styles.optionLeft}>
                      <View style={[styles.radioOuter, active ? styles.radioOuterActive : null]}>
                        {active && <View style={styles.radioInner} />}
                      </View>
                      <View style={{ marginLeft: 12 }}>
                        <Text style={[styles.optionTitle, active ? styles.optionTitleActive : null]}>{opt.label}</Text>
                        <Text style={styles.optionDesc}>{opt.desc}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

        {/* Sensitive content pill */}
        <View style={{ marginTop: 22 }}>
          <TouchableOpacity style={styles.pill} activeOpacity={0.85} onPress={toggleSensitive}>
            <Text style={styles.pillLabel}>Sensitive content filters</Text>
            <View style={styles.pillRight}>
              <Text style={styles.pillValue}>{getSensitiveLabel()}</Text>
              <Ionicons name={sensitiveExpanded ? "chevron-up" : "chevron-down"} size={16} color="#9FB4FF" style={{ marginLeft: 8 }} />
            </View>
          </TouchableOpacity>

          <Text style={styles.pillDesc}>
            Choose if nexus members can share image-based media detected by Ballastra sensitive content filters. This setting will apply to Space that are not age-restricted.
          </Text>

          {sensitiveExpanded && (
            <View style={styles.expandedContainer}>
              <View style={styles.filterRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.optionTitle, sensitiveState.none ? styles.optionTitleActive : null]}>None</Text>
                  <Text style={styles.optionDesc}>No filtering</Text>
                </View>
                <Switch
                  value={sensitiveState.none}
                  onValueChange={() => toggleSensitiveOption("none")}
                  thumbColor={sensitiveState.none ? "#1BFFFF" : "#ffffff"}
                  trackColor={{ false: "#122347", true: "#2340A0" }}
                />
              </View>

              <View style={styles.filterRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.optionTitle, sensitiveState.scan_media ? styles.optionTitleActive : null]}>All Members Filter</Text>
                  <Text style={styles.optionDesc}>Automatically scan images & videos for NSFW</Text>
                </View>
                <Switch
                  value={sensitiveState.scan_media}
                  onValueChange={() => toggleSensitiveOption("scan_media")}
                  thumbColor={sensitiveState.scan_media ? "#1BFFFF" : "#ffffff"}
                  trackColor={{ false: "#122347", true: "#2340A0" }}
                />
              </View>

              <View style={styles.filterRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.optionTitle, sensitiveState.hide_on_match ? styles.optionTitleActive : null]}>Hide media on match</Text>
                  <Text style={styles.optionDesc}>Hide automatically when content flagged</Text>
                </View>
                <Switch
                  value={sensitiveState.hide_on_match}
                  onValueChange={() => toggleSensitiveOption("hide_on_match")}
                  thumbColor={sensitiveState.hide_on_match ? "#1BFFFF" : "#ffffff"}
                  trackColor={{ false: "#122347", true: "#2340A0" }}
                />
              </View>

              <View style={styles.filterRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.optionTitle, sensitiveState.require_age ? styles.optionTitleActive : null]}>Require age verification</Text>
                  <Text style={styles.optionDesc}>Members must verify age before viewing</Text>
                </View>
                <Switch
                  value={sensitiveState.require_age}
                  onValueChange={() => toggleSensitiveOption("require_age")}
                  thumbColor={sensitiveState.require_age ? "#1BFFFF" : "#ffffff"}
                  trackColor={{ false: "#122347", true: "#2340A0" }}
                />
              </View>
            </View>
          )}
        </View>

        {/* Age-Restricted Nexus */}
        <View style={{ marginTop: 22 }}>
          <View style={styles.switchCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.switchTitle}>Age-Restricted Nexus</Text>
              <Text style={styles.switchDesc}>Users will need to confirm they are over the legal age to view the content in this nexus.</Text>
            </View>
            <Switch
              value={ageRestricted}
              onValueChange={setAgeRestricted}
              thumbColor={ageRestricted ? "#1BFFFF" : "#ffffff"}
              trackColor={{ false: "#122347", true: "#2340A0" }}
            />
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* optional bottom modal for lists (keeps design parity with screenshots) */}
      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={closeModal}>
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{modalFor === "verify" ? "Select Verification Level" : "Select Filter"}</Text>
            <FlatList
              data={modalFor === "verify" ? VERIFICATION_OPTIONS : SENSITIVE_OPTIONS}
              keyExtractor={(i) => i.id}
              renderItem={({ item }) => {
                const isSelected = modalFor === "verify" ? selectedVerification === item.id : !!sensitiveState[item.id];
                return (
                  <TouchableOpacity style={[styles.modalRow, isSelected ? styles.modalRowSelected : null]} onPress={() => {
                    if (modalFor === "verify") selectVerification(item.id);
                    else toggleSensitiveOption(item.id);
                    closeModal();
                  }}>
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                      <View style={[styles.radioOuter, isSelected ? styles.radioOuterActive : null]}>
                        {isSelected && <View style={styles.radioInner} />}
                      </View>
                      <View style={{ marginLeft: 12 }}>
                        <Text style={[styles.modalRowTitle, isSelected ? styles.modalRowTitleActive : null]}>{item.label}</Text>
                        <Text style={styles.modalRowDesc}>{item.desc}</Text>
                      </View>
                    </View>
                    {isSelected && <Ionicons name="checkmark" size={18} color="#9FB4FF" />}
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity style={styles.modalClose} onPress={closeModal}><Text style={styles.modalCloseText}>Cancel</Text></TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

/* ---------------- Styles ---------------- */
const CARD_RADIUS = 18;
const PADDING = Math.max(18, Math.round(width * 0.04));

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020821" },
  content: { paddingHorizontal: PADDING, paddingTop: Platform.OS === "ios" ? 36 : 24, paddingBottom: 28 },

  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  headerLeft: { width: 40 },
  title: { color: "#ffffff", fontSize: 18, fontWeight: "600" },

  pill: {
    marginTop: 8,
    borderRadius: 20,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#132652",
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pillLabel: { color: "#CFE1FF", fontSize: 14, fontWeight: "600" },
  pillRight: { flexDirection: "row", alignItems: "center" },
  pillValue: { color: "#9FB4FF", fontSize: 13 },

  pillDesc: { marginTop: 10, color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 18 },

  expandedContainer: {
    marginTop: 10,
    borderRadius: CARD_RADIUS,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#132652",
    overflow: "hidden",
  },

  optionRow: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.04)",
  },

  optionLeft: { flexDirection: "row", alignItems: "center", flex: 1 },

  optionTitle: { color: "#ffffff", fontSize: 14, fontWeight: "600" },
  optionTitleActive: { color: "#CFE1FF" },
  optionDesc: { color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 6 },

  optionActive: { backgroundColor: "rgba(159,180,255,0.02)" },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#314B7F",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterActive: { borderColor: "#72A0FF", backgroundColor: "rgba(114,160,255,0.06)" },
  radioInner: { width: 10, height: 10, borderRadius: 6, backgroundColor: "#72A0FF" },

  filterRow: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.04)",
    justifyContent: "space-between",
  },

  switchCard: {
    borderRadius: CARD_RADIUS,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#132652",
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  switchTitle: { color: "#ffffff", fontSize: 14, fontWeight: "600" },
  switchDesc: { color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 6 },

  /* modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(1,6,20,0.7)",
    justifyContent: "flex-end",
  },
  modalCard: {
    backgroundColor: "#06152B",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: "#132652",
  },
  modalTitle: { color: "#fff", fontSize: 16, fontWeight: "700", marginBottom: 12 },

  modalRow: { padding: 12, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  modalRowSelected: { backgroundColor: "rgba(159,180,255,0.04)" },
  modalRowTitle: { color: "#fff", fontSize: 14, fontWeight: "600" },
  modalRowTitleActive: { color: "#CFE1FF" },
  modalRowDesc: { color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4 },

  modalClose: { marginTop: 12, alignItems: "center" },
  modalCloseText: { color: "#9FB4FF", fontSize: 15, fontWeight: "600" },
});

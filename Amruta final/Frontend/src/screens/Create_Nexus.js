
// // // // import React from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   TouchableOpacity,
// // // //   ScrollView,
// // // //   Dimensions,
// // // //   StatusBar,
// // // //   SafeAreaView,
// // // // } from "react-native";
// // // // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // // // import { SvgXml } from "react-native-svg";
// // // // import { scale } from "react-native-size-matters"; // किंवा तुमच्या प्रोजेक्टमधला scale util

// // // // const { width, height } = Dimensions.get("window");

// // // // // Responsive scaling
// // // // const scale = (size = 20) => (width / 375) * size; // iPhone 11 base width
// // // // const verticalScale = (size) => (height / 812) * size; // iPhone 11 base height
// // // // const moderateScale = (size, factor = 0.5) =>
// // // //   size + (scale(size) - size) * factor;

// // // // export default function Create_Nexus({ navigation }) {
// // // //   const CARDS = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Gaming",
// // // //       icon: "gamepad-variant",
// // // //       iconColor: "#00D9FF",
// // // //       bgColor: "rgba(0, 217, 255, 0.15)",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "School",
// // // //       icon: "view-grid",
// // // //       iconColor: "#A855F7",
// // // //       bgColor: "rgba(168, 85, 247, 0.15)",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Study Group",
// // // //       icon: "bookmark-multiple",
// // // //       iconColor: "#22D3EE",
// // // //       bgColor: "rgba(34, 211, 238, 0.15)",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "Friends",
// // // //       icon: "account-group",
// // // //       iconColor: "#3B82F6",
// // // //       bgColor: "rgba(59, 130, 246, 0.15)",
// // // //     },
// // // //   ];

// // // //   const renderIcon = (item) => {
// // // //     return (
// // // //       <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
// // // //         <MaterialCommunityIcons
// // // //           name={item.icon}
// // // //           size={scale(32)}
// // // //           color={item.iconColor}
// // // //         />
// // // //       </View>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <SafeAreaView style={styles.safe}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#0C142A" />
// // // //       <View style={styles.container}>
        
// // // //         {/* Close Button */}
// // // //         <TouchableOpacity
// // // //           style={styles.closeButton}
// // // //           onPress={() => navigation.goBack()}
// // // //         >
// // // //           <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
// // // //         </TouchableOpacity>

// // // //         {/* Title */}
// // // //         <Text style={styles.title}>Create Your Nexus</Text>

// // // //         {/* Subtitle */}
// // // //         <Text style={styles.subtitle}>
// // // //           A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
// // // //         </Text>

// // // //         {/* Create My Own Nexus */}
// // // //         <TouchableOpacity
// // // //           style={styles.primaryButton}
// // // //           onPress={() => navigation.navigate("My_Own_Nexus")}
// // // //           activeOpacity={0.8}
// // // //         >
// // // //           <View style={styles.crownIcon}>
// // // //             <MaterialCommunityIcons name="crown" size={scale(20)} color="#fff" />
// // // //           </View>
// // // //           <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>
// // // //         </TouchableOpacity>

// // // //         {/* ⭐ Only Cards Scroll ⭐ */}
// // // //         <ScrollView
// // // //           style={styles.cardsScrollView}
// // // //           showsVerticalScrollIndicator={false}
// // // //         >
// // // //           <View style={styles.gridContainer}>
// // // //             {CARDS.map((item) => (
// // // //               <View key={item.id} style={styles.card}>
// // // //                 {renderIcon(item)}

// // // //                 <Text style={styles.cardTitle}>{item.title}</Text>

// // // //                 <TouchableOpacity
// // // //                   style={styles.cardButton}
// // // //                   onPress={() =>
// // // //                     navigation.navigate("Create_Nexus_Profile", {
// // // //                       category: item.title,
// // // //                     })
// // // //                   }
// // // //                   activeOpacity={0.8}
// // // //                 >
// // // //                   <Text style={styles.cardButtonText}>Create</Text>
// // // //                 </TouchableOpacity>
// // // //               </View>
// // // //             ))}
// // // //           </View>
// // // //         </ScrollView>

// // // //         {/* Bottom Section */}
// // // //         <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

// // // //         <TouchableOpacity
// // // //           style={styles.exploreButton}
// // // //           onPress={() => navigation.navigate("NexusCommunity")}
// // // //         >
// // // //           <Text style={styles.exploreButtonText}>Explore Nexus</Text>
// // // //         </TouchableOpacity>

// // // //         <View style={{ height: verticalScale(20) }} />
// // // //       </View>
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   safe: {
// // // //     flex: 1,
// // // //     backgroundColor: "#02081A",
// // // //   },

// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#02081A",
// // // //     paddingHorizontal: scale(22),
// // // //   },

// // // //   closeButton: {
// // // //     width: scale(26),
// // // //     height: scale(26),
// // // //     justifyContent: "center",
// // // //     marginTop: verticalScale(25),
// // // //     marginBottom: verticalScale(25),
// // // //   },

// // // //   title: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(18),
// // // //     fontWeight: "700",
// // // //     textAlign: "center",
// // // //   },

// // // //   subtitle: {
// // // //     color: "#BDBDBD",
// // // //     fontSize: moderateScale(12),
// // // //     textAlign: "center",
// // // //     lineHeight: moderateScale(18),
// // // //     marginTop: verticalScale(6),
// // // //     marginBottom: verticalScale(20),
// // // //     fontWeight: "400",
// // // //   },

// // // //   primaryButton: {
// // // //     backgroundColor: "#3154BA4D",
// // // //     paddingVertical: verticalScale(14),
// // // //     paddingHorizontal: scale(22),
// // // //     borderRadius: moderateScale(14),
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     borderWidth: 1,
// // // //     borderColor: "#3255BA00",
// // // //   },

// // // //   crownIcon: {
// // // //     marginRight: scale(14),
// // // //   },

// // // //   primaryButtonText: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(10),
// // // //     fontWeight: "500",
// // // //   },

// // // //   /* ⭐ responsive scroll height ⭐ */
// // // //   cardsScrollView: {
// // // //     maxHeight: height * 0.48, // fits all screens
// // // //     marginTop: verticalScale(30),
// // // //   },

// // // //   gridContainer: {
// // // //     flexDirection: "row",
// // // //     flexWrap: "wrap",
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   card: {
// // // //     width: "47%",
// // // //     borderRadius: moderateScale(18),
// // // //     paddingVertical: verticalScale(20),
// // // //     paddingHorizontal: scale(12),
// // // //     alignItems: "center",
// // // //     marginBottom: verticalScale(10),
// // // //     borderWidth: 1,
// // // //     borderColor: "#3255BA",
// // // //   },

// // // //   iconContainer: {
// // // //     width: moderateScale(60),
// // // //     height: moderateScale(60),
// // // //     borderRadius: moderateScale(16),
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     marginBottom: verticalScale(10),
// // // //   },

// // // //   cardTitle: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(10),
// // // //     fontWeight: "500",
// // // //     marginBottom: verticalScale(12),
// // // //     textAlign: "center",
// // // //   },

// // // //   cardButton: {
// // // //     backgroundColor: "#0D2151",
// // // //     paddingVertical: verticalScale(10),
// // // //     paddingHorizontal: scale(26),
// // // //     borderRadius: moderateScale(10),
// // // //     borderWidth: 1,
// // // //     borderColor: "rgba(59, 130, 246, 0.3)",
// // // //   },

// // // //   cardButtonText: {
// // // //     color: "#FFFFFF",
// // // //     fontWeight: "500",
// // // //     fontSize: moderateScale(10),
// // // //   },

// // // //   bottomText: {
// // // //     color: "#fff",
// // // //     textAlign: "center",
// // // //     marginTop: verticalScale(10),
// // // //     fontSize: moderateScale(10),
// // // //     fontWeight: "500",
// // // //   },

// // // //   exploreButton: {
// // // //     backgroundColor: "#2563EB",
// // // //     marginTop: verticalScale(10),
// // // //     paddingVertical: verticalScale(12),
// // // //     paddingHorizontal: scale(30),
// // // //     borderRadius: moderateScale(15),
// // // //     alignItems: "center",
// // // //     alignSelf: "center",
// // // //     shadowColor: "#030B2466",
// // // //     shadowOffset: { width: 0, height: verticalScale(4) },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 8,
// // // //     elevation: 8,
// // // //   },

// // // //   exploreButtonText: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(14),
// // // //     fontWeight: "500",
// // // //   },
// // // // });
// // // // import React from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   TouchableOpacity,
// // // //   ScrollView,
// // // //   Dimensions,
// // // //   StatusBar,
// // // //   SafeAreaView,
// // // // } from "react-native";
// // // // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // // // import { SvgXml } from "react-native-svg";

// // // // const { width, height } = Dimensions.get("window");

// // // // /* ---------- RESPONSIVE HELPERS ---------- */
// // // // const scale = (size = 20) => (width / 375) * size;
// // // // const verticalScale = (size) => (height / 812) * size;
// // // // const moderateScale = (size, factor = 0.5) =>
// // // //   size + (scale(size) - size) * factor;

// // // // /* ---------- SVG ICON ---------- */
// // // // const nexusSvg = `
// // // // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
// // // //   <path d="M200-160v-80h560v80H200Zm0-140-51-321q-2 0-4.5.5t-4.5.5q-25 0-42.5-17.5T80-680q0-25 17.5-42.5T140-740q25 0 42.5 17.5T200-680q0 7-1.5 13t-3.5 11l125 56 125-171q-11-8-18-21t-7-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820q0 15-7 28t-18 21l125 171 125-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T820-740q25 0 42.5 17.5T880-680q0 25-17.5 42.5T820-620q-2 0-4.5-.5t-4.5-.5l-51 321H200Zm68-80h424l26-167-105 46-133-183-133 183-105-46 26 167Zm212 0Z"/>
// // // // </svg>
// // // // `;

// // // // export default function Create_Nexus({ navigation }) {
// // // //   const CARDS = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Gaming",
// // // //       icon: "gamepad-variant",
// // // //       iconColor: "#00D9FF",
// // // //       bgColor: "rgba(0, 217, 255, 0.15)",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "School",
// // // //       icon: "view-grid",
// // // //       iconColor: "#A855F7",
// // // //       bgColor: "rgba(168, 85, 247, 0.15)",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Study Group",
// // // //       icon: "bookmark-multiple",
// // // //       iconColor: "#22D3EE",
// // // //       bgColor: "rgba(34, 211, 238, 0.15)",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "Friends",
// // // //       icon: "account-group",
// // // //       iconColor: "#3B82F6",
// // // //       bgColor: "rgba(59, 130, 246, 0.15)",
// // // //     },
// // // //   ];

// // // //   const renderIcon = (item) => (
// // // //     <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
// // // //       <MaterialCommunityIcons
// // // //         name={item.icon}
// // // //         size={scale(32)}
// // // //         color={item.iconColor}
// // // //       />
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.safe}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#0C142A" />
// // // //       <View style={styles.container}>
// // // //         {/* Close Button */}
// // // //         <TouchableOpacity
// // // //           style={styles.closeButton}
// // // //           onPress={() => navigation.goBack()}
// // // //         >
// // // //           <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
// // // //         </TouchableOpacity>

// // // //         {/* Title */}
// // // //         <Text style={styles.title}>Create Your Nexus</Text>

// // // //         {/* Subtitle */}
// // // //         <Text style={styles.subtitle}>
// // // //           A Nexus is your space. Build your world with chat,{"\n"}channels and
// // // //           vibes.
// // // //         </Text>

// // // //         {/* Create My Own Nexus */}
// // // //         <TouchableOpacity
// // // //           style={styles.primaryButton}
// // // //           onPress={() => navigation.navigate("My_Own_Nexus")}
// // // //           activeOpacity={0.8}
// // // //         >
// // // //           <View style={{ marginTop: verticalScale(6) }}>
// // // //               <SvgXml xml={nexusSvg} width={scale(22)} height={scale(22)} />
// // // //             </View>

// // // //           <View style={{ flex: 1, alignItems: "center" }}>
// // // //             <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>

// // // //             {/* SVG ICON BELOW TEXT */}
            
// // // //           </View>
// // // //         </TouchableOpacity>

// // // //         {/* Cards Scroll */}
// // // //         <ScrollView
// // // //           style={styles.cardsScrollView}
// // // //           showsVerticalScrollIndicator={false}
// // // //         >
// // // //           <View style={styles.gridContainer}>
// // // //             {CARDS.map((item) => (
// // // //               <View key={item.id} style={styles.card}>
// // // //                 {renderIcon(item)}
// // // //                 <Text style={styles.cardTitle}>{item.title}</Text>

// // // //                 <TouchableOpacity
// // // //                   style={styles.cardButton}
// // // //                   onPress={() =>
// // // //                     navigation.navigate("Create_Nexus_Profile", {
// // // //                       category: item.title,
// // // //                     })
// // // //                   }
// // // //                   activeOpacity={0.8}
// // // //                 >
// // // //                   <Text style={styles.cardButtonText}>Create</Text>
// // // //                 </TouchableOpacity>
// // // //               </View>
// // // //             ))}
// // // //           </View>
// // // //         </ScrollView>

// // // //         {/* Bottom Section */}
// // // //         <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

// // // //         <TouchableOpacity
// // // //           style={styles.exploreButton}
// // // //           onPress={() => navigation.navigate("NexusCommunity")}
// // // //         >
// // // //           <Text style={styles.exploreButtonText}>Explore Nexus</Text>
// // // //         </TouchableOpacity>

// // // //         <View style={{ height: verticalScale(20) }} />
// // // //       </View>
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // /* ---------- STYLES ---------- */
// // // // const styles = StyleSheet.create({
// // // //   safe: {
// // // //     flex: 1,
// // // //     backgroundColor: "#02081A",
// // // //   },

// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#02081A",
// // // //     paddingHorizontal: scale(22),
// // // //   },

// // // //   closeButton: {
// // // //     width: scale(26),
// // // //     height: scale(26),
// // // //     justifyContent: "center",
// // // //     marginTop: verticalScale(25),
// // // //     marginBottom: verticalScale(25),
// // // //   },

// // // //   title: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(18),
// // // //     fontWeight: "700",
// // // //     textAlign: "center",
// // // //   },

// // // //   subtitle: {
// // // //     color: "#BDBDBD",
// // // //     fontSize: moderateScale(12),
// // // //     textAlign: "center",
// // // //     lineHeight: moderateScale(18),
// // // //     marginTop: verticalScale(6),
// // // //     marginBottom: verticalScale(20),
// // // //     fontWeight: "400",
// // // //   },

// // // //   primaryButton: {
// // // //     backgroundColor: "#3154BA4D",
// // // //     paddingVertical: verticalScale(14),
// // // //     paddingHorizontal: scale(22),
// // // //     borderRadius: moderateScale(14),
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     borderWidth: 1,
// // // //     borderColor: "#3255BA00",
// // // //   },

// // // //   crownIcon: {
// // // //     marginRight: scale(14),
// // // //   },

// // // //   primaryButtonText: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(10),
// // // //     fontWeight: "500",
// // // //     textAlign: "center",
// // // //   },

// // // //   cardsScrollView: {
// // // //     maxHeight: height * 0.48,
// // // //     marginTop: verticalScale(30),
// // // //   },

// // // //   gridContainer: {
// // // //     flexDirection: "row",
// // // //     flexWrap: "wrap",
// // // //     justifyContent: "space-between",
// // // //   },

// // // //   card: {
// // // //     width: "47%",
// // // //     borderRadius: moderateScale(18),
// // // //     paddingVertical: verticalScale(20),
// // // //     paddingHorizontal: scale(12),
// // // //     alignItems: "center",
// // // //     marginBottom: verticalScale(10),
// // // //     borderWidth: 1,
// // // //     borderColor: "#3255BA",
// // // //   },

// // // //   iconContainer: {
// // // //     width: moderateScale(60),
// // // //     height: moderateScale(60),
// // // //     borderRadius: moderateScale(16),
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     marginBottom: verticalScale(10),
// // // //   },

// // // //   cardTitle: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(10),
// // // //     fontWeight: "500",
// // // //     marginBottom: verticalScale(12),
// // // //     textAlign: "center",
// // // //   },

// // // //   cardButton: {
// // // //     backgroundColor: "#0D2151",
// // // //     paddingVertical: verticalScale(10),
// // // //     paddingHorizontal: scale(26),
// // // //     borderRadius: moderateScale(10),
// // // //     borderWidth: 1,
// // // //     borderColor: "rgba(59, 130, 246, 0.3)",
// // // //   },

// // // //   cardButtonText: {
// // // //     color: "#FFFFFF",
// // // //     fontWeight: "500",
// // // //     fontSize: moderateScale(10),
// // // //   },

// // // //   bottomText: {
// // // //     color: "#fff",
// // // //     textAlign: "center",
// // // //     marginTop: verticalScale(10),
// // // //     fontSize: moderateScale(10),
// // // //     fontWeight: "500",
// // // //   },

// // // //   exploreButton: {
// // // //     backgroundColor: "#2563EB",
// // // //     marginTop: verticalScale(10),
// // // //     paddingVertical: verticalScale(12),
// // // //     paddingHorizontal: scale(30),
// // // //     borderRadius: moderateScale(15),
// // // //     alignItems: "center",
// // // //     alignSelf: "center",
// // // //     shadowColor: "#030B2466",
// // // //     shadowOffset: { width: 0, height: verticalScale(4) },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 8,
// // // //     elevation: 8,
// // // //   },

// // // //   exploreButtonText: {
// // // //     color: "#FFFFFF",
// // // //     fontSize: moderateScale(14),
// // // //     fontWeight: "500",
// // // //   },
// // // // });
// // // import React from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   ScrollView,
// // //   Dimensions,
// // //   StatusBar,
// // //   SafeAreaView,
// // // } from "react-native";
// // // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // // import { SvgXml } from "react-native-svg";
// // // import { LinearGradient } from "expo-linear-gradient";

// // // const { width, height } = Dimensions.get("window");

// // // /* ---------- RESPONSIVE HELPERS ---------- */
// // // const scale = (size = 20) => (width / 375) * size;
// // // const verticalScale = (size) => (height / 812) * size;
// // // const moderateScale = (size, factor = 0.5) =>
// // //   size + (scale(size) - size) * factor;

// // // /* ---------- SVG ICON ---------- */
// // // const nexusSvg = `
// // // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
// // //   <path d="M200-160v-80h560v80H200Zm0-140-51-321q-2 0-4.5.5t-4.5.5q-25 0-42.5-17.5T80-680q0-25 17.5-42.5T140-740q25 0 42.5 17.5T200-680q0 7-1.5 13t-3.5 11l125 56 125-171q-11-8-18-21t-7-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820q0 15-7 28t-18 21l125 171 125-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T820-740q25 0 42.5 17.5T880-680q0 25-17.5 42.5T820-620q-2 0-4.5-.5t-4.5-.5l-51 321H200Zm68-80h424l26-167-105 46-133-183-133 183-105-46 26 167Zm212 0Z"/>
// // // </svg>
// // // `;

// // // export default function Create_Nexus({ navigation }) {
// // //   const CARDS = [
// // //     {
// // //       id: 1,
// // //       title: "Gaming",
// // //       icon: "gamepad-variant",
// // //       iconColor: "#FFFFFF",
// // //       bgColor: "transparent",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "School",
// // //       icon: "view-grid",
// // //       iconColor: "#A855F7",
// // //       bgColor: "rgba(168, 85, 247, 0.15)",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Study Group",
// // //       icon: "bookmark-multiple",
// // //       iconColor: "#22D3EE",
// // //       bgColor: "rgba(34, 211, 238, 0.15)",
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Friends",
// // //       icon: "account-group",
// // //       iconColor: "#3B82F6",
// // //       bgColor: "rgba(59, 130, 246, 0.15)",
// // //     },
// // //   ];

// // //   const renderIcon = (item) => {
// // //     if (item.id === 1) {
// // //       // Gaming icon with circle gradient ✅
// // //       return (
// // //         <LinearGradient
// // //           colors={["#00D9FF", "#2563EB"]}
// // //           style={styles.gradientCircle}
// // //           start={{ x: 0, y: 0 }}
// // //           end={{ x: 1, y: 1 }}
// // //         >
// // //           <MaterialCommunityIcons
// // //             name={item.icon}
// // //             size={scale(32)}
// // //             color="#FFFFFF"
// // //           />
// // //         </LinearGradient>
// // //       );
// // //     }

// // //     return (
// // //       <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
// // //         <MaterialCommunityIcons
// // //           name={item.icon}
// // //           size={scale(32)}
// // //           color={item.iconColor}
// // //         />
// // //       </View>
// // //     );
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.safe}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#0C142A" />
// // //       <View style={styles.container}>
// // //         {/* Close Button */}
// // //         <TouchableOpacity
// // //           style={styles.closeButton}
// // //           onPress={() => navigation.goBack()}
// // //         >
// // //           <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
// // //         </TouchableOpacity>

// // //         {/* Title */}
// // //         <Text style={styles.title}>Create Your Nexus</Text>

// // //         {/* Subtitle */}
// // //         <Text style={styles.subtitle}>
// // //           A Nexus is your space. Build your world with chat,{"\n"}channels and
// // //           vibes.
// // //         </Text>

// // //         {/* Create My Own Nexus */}
// // //         <TouchableOpacity
// // //           style={styles.primaryButton}
// // //           onPress={() => navigation.navigate("My_Own_Nexus")}
// // //           activeOpacity={0.8}
// // //         >
// // //           <View style={{ marginTop: verticalScale(6) }}>
// // //             <SvgXml xml={nexusSvg} width={scale(22)} height={scale(22)} />
// // //           </View>

// // //           <View style={{ flex: 1, alignItems: "center" }}>
// // //             <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>
// // //           </View>
// // //         </TouchableOpacity>

// // //         {/* Cards Scroll */}
// // //         <ScrollView
// // //           style={styles.cardsScrollView}
// // //           showsVerticalScrollIndicator={false}
// // //         >
// // //           <View style={styles.gridContainer}>
// // //             {CARDS.map((item) => (
// // //               <View key={item.id} style={styles.card}>
// // //                 {renderIcon(item)}
// // //                 <Text style={styles.cardTitle}>{item.title}</Text>

// // //                 <TouchableOpacity
// // //                   style={styles.cardButton}
// // //                   onPress={() =>
// // //                     navigation.navigate("Create_Nexus_Profile", {
// // //                       category: item.title,
// // //                     })
// // //                   }
// // //                   activeOpacity={0.8}
// // //                 >
// // //                   <Text style={styles.cardButtonText}>Create</Text>
// // //                 </TouchableOpacity>
// // //               </View>
// // //             ))}
// // //           </View>
// // //         </ScrollView>

// // //         {/* Bottom Section */}
// // //         <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

// // //         <TouchableOpacity
// // //           style={styles.exploreButton}
// // //           onPress={() => navigation.navigate("NexusCommunity")}
// // //         >
// // //           <Text style={styles.exploreButtonText}>Explore Nexus</Text>
// // //         </TouchableOpacity>

// // //         <View style={{ height: verticalScale(20) }} />
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // /* ---------- STYLES ---------- */
// // // const styles = StyleSheet.create({
// // //   safe: {
// // //     flex: 1,
// // //     backgroundColor: "#02081A",
// // //   },
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#02081A",
// // //     paddingHorizontal: scale(22),
// // //   },
// // //   closeButton: {
// // //     width: scale(26),
// // //     height: scale(26),
// // //     justifyContent: "center",
// // //     marginTop: verticalScale(25),
// // //     marginBottom: verticalScale(25),
// // //   },
// // //   title: {
// // //     color: "#FFFFFF",
// // //     fontSize: moderateScale(18),
// // //     fontWeight: "700",
// // //     textAlign: "center",
// // //   },
// // //   subtitle: {
// // //     color: "#BDBDBD",
// // //     fontSize: moderateScale(12),
// // //     textAlign: "center",
// // //     lineHeight: moderateScale(18),
// // //     marginTop: verticalScale(6),
// // //     marginBottom: verticalScale(20),
// // //     fontWeight: "400",
// // //   },
// // //   primaryButton: {
// // //     backgroundColor: "#3154BA4D",
// // //     paddingVertical: verticalScale(14),
// // //     paddingHorizontal: scale(22),
// // //     borderRadius: moderateScale(14),
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     borderWidth: 1,
// // //     borderColor: "#3255BA00",
// // //   },

// // //   primaryButtonText: {
// // //     color: "#FFFFFF",
// // //     fontSize: moderateScale(10),
// // //     fontWeight: "500",
// // //     textAlign: "center",
// // //   },
// // //   cardsScrollView: {
// // //     maxHeight: height * 0.48,
// // //     marginTop: verticalScale(30),
// // //   },
// // //   gridContainer: {
// // //     flexDirection: "row",
// // //     flexWrap: "wrap",
// // //     justifyContent: "space-between",
// // //   },
// // //   card: {
// // //     width: "47%",
// // //     borderRadius: moderateScale(18),
// // //     paddingVertical: verticalScale(20),
// // //     paddingHorizontal: scale(12),
// // //     alignItems: "center",
// // //     marginBottom: verticalScale(10),
// // //     borderWidth: 1,
// // //     borderColor: "#3255BA",
// // //   },
// // //   iconContainer: {
// // //     width: moderateScale(60),
// // //     height: moderateScale(60),
// // //     borderRadius: moderateScale(16),
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: verticalScale(10),
// // //   },

// // //   /* ✅ Gradient Circle Style */
// // //   gradientCircle: {
// // //     width: moderateScale(60),
// // //     height: moderateScale(60),
// // //     borderRadius: 999,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: verticalScale(10),
// // //   },

// // //   cardTitle: {
// // //     color: "#FFFFFF",
// // //     fontSize: moderateScale(10),
// // //     fontWeight: "500",
// // //     marginBottom: verticalScale(12),
// // //     textAlign: "center",
// // //   },
// // //   cardButton: {
// // //     backgroundColor: "#0D2151",
// // //     paddingVertical: verticalScale(10),
// // //     paddingHorizontal: scale(26),
// // //     borderRadius: moderateScale(10),
// // //     borderWidth: 1,
// // //     borderColor: "rgba(59, 130, 246, 0.3)",
// // //   },
// // //   cardButtonText: {
// // //     color: "#FFFFFF",
// // //     fontWeight: "500",
// // //     fontSize: moderateScale(10),
// // //   },
// // //   bottomText: {
// // //     color: "#fff",
// // //     textAlign: "center",
// // //     marginTop: verticalScale(10),
// // //     fontSize: moderateScale(10),
// // //     fontWeight: "500",
// // //   },
// // //   exploreButton: {
// // //     backgroundColor: "#2563EB",
// // //     marginTop: verticalScale(10),
// // //     paddingVertical: verticalScale(12),
// // //     paddingHorizontal: scale(30),
// // //     borderRadius: moderateScale(15),
// // //     alignItems: "center",
// // //     alignSelf: "center",
// // //     shadowColor: "#030B2466",
// // //     shadowOffset: { width: 0, height: verticalScale(4) },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 8,
// // //     elevation: 8,
// // //   },
// // //   exploreButtonText: {
// // //     color: "#FFFFFF",
// // //     fontSize: moderateScale(14),
// // //     fontWeight: "500",
// // //   },
// // // });
// // import React from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ScrollView,
// //   Dimensions,
// //   StatusBar,
// //   SafeAreaView,
// //   Image,
// // } from "react-native";
// // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // import { SvgXml } from "react-native-svg";

// // import GameIcon from "../../assets/Game.png";

// // const { width, height } = Dimensions.get("window");

// // /* ---------- RESPONSIVE HELPERS ---------- */
// // const scale = (size = 20) => (width / 375) * size;
// // const verticalScale = (size) => (height / 812) * size;
// // const moderateScale = (size, factor = 0.5) =>
// //   size + (scale(size) - size) * factor;

// // /* ---------- SVG ICON ---------- */
// // const nexusSvg = `
// // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
// //   <path d="M200-160v-80h560v80H200Zm0-140-51-321q-2 0-4.5.5t-4.5.5q-25 0-42.5-17.5T80-680q0-25 17.5-42.5T140-740q25 0 42.5 17.5T200-680q0 7-1.5 13t-3.5 11l125 56 125-171q-11-8-18-21t-7-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820q0 15-7 28t-18 21l125 171 125-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T820-740q25 0 42.5 17.5T880-680q0 25-17.5 42.5T820-620q-2 0-4.5-.5t-4.5-.5l-51 321H200Zm68-80h424l26-167-105 46-133-183-133 183-105-46 26 167Zm212 0Z"/>
// // </svg>
// // `;

// // export default function Create_Nexus({ navigation }) {
// //   const CARDS = [
// //     { id: 1, title: "Gaming", icon: "gamepad-variant", iconColor: "#00D9FF", bgColor: "rgba(0, 217, 255, 0.15)" },
// //     { id: 2, title: "School", icon: "view-grid", iconColor: "#A855F7", bgColor: "rgba(168, 85, 247, 0.15)" },
// //     { id: 3, title: "Study Group", icon: "bookmark-multiple", iconColor: "#22D3EE", bgColor: "rgba(34, 211, 238, 0.15)" },
// //     { id: 4, title: "Friends", icon: "account-group", iconColor: "#3B82F6", bgColor: "rgba(59, 130, 246, 0.15)" },
// //   ];

// //   const renderIcon = (item) => {
// //     if (item.title === "Gaming") {
// //       return (
// //         <View style={styles.gamingBox}>
// //           <Image source={GameIcon} style={styles.gamingImage} />
// //         </View>
// //       );
// //     }

// //     return (
// //       <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
// //         <MaterialCommunityIcons
// //           name={item.icon}
// //           size={scale(32)}
// //           color={item.iconColor}
// //         />
// //       </View>
// //     );
// //   };

// //   return (
// //     <SafeAreaView style={styles.safe}>
// //       <StatusBar barStyle="light-content" backgroundColor="#0C142A" />

// //       <View style={styles.container}>
// //         <TouchableOpacity
// //           style={styles.closeButton}
// //           onPress={() => navigation.goBack()}
// //         >
// //           <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
// //         </TouchableOpacity>

// //         <Text style={styles.title}>Create Your Nexus</Text>

// //         <Text style={styles.subtitle}>
// //           A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
// //         </Text>

// //         <TouchableOpacity
// //           style={styles.primaryButton}
// //           onPress={() => navigation.navigate("My_Own_Nexus")}
// //           activeOpacity={0.8}
// //         >
// //           <View style={{ marginTop: verticalScale(6) }}>
// //             <SvgXml xml={nexusSvg} width={scale(22)} height={scale(22)} />
// //           </View>

// //           <View style={{ flex: 1, alignItems: "center" }}>
// //             <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>
// //           </View>
// //         </TouchableOpacity>

// //         <ScrollView style={styles.cardsScrollView} showsVerticalScrollIndicator={false}>
// //           <View style={styles.gridContainer}>
// //             {CARDS.map((item) => (
// //               <View key={item.id} style={styles.card}>
// //                 {renderIcon(item)}

// //                 <Text style={styles.cardTitle}>{item.title}</Text>

// //                 <TouchableOpacity
// //                   style={styles.cardButton}
// //                   onPress={() =>
// //                     navigation.navigate("Create_Nexus_Profile", {
// //                       category: item.title,
// //                     })
// //                   }
// //                   activeOpacity={0.8}
// //                 >
// //                   <Text style={styles.cardButtonText}>Create</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             ))}
// //           </View>
// //         </ScrollView>

// //         <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

// //         <TouchableOpacity
// //           style={styles.exploreButton}
// //           onPress={() => navigation.navigate("NexusCommunity")}
// //         >
// //           <Text style={styles.exploreButtonText}>Explore Nexus</Text>
// //         </TouchableOpacity>

// //         <View style={{ height: verticalScale(20) }} />
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // /* ---------- STYLES (UPDATED ONLY FOR GAMING IMAGE) ---------- */
// // const styles = StyleSheet.create({
// //   safe: { flex: 1, backgroundColor: "#02081A" },

// //   container: { flex: 1, backgroundColor: "#02081A", paddingHorizontal: scale(22) },

// //   closeButton: {
// //     width: scale(26),
// //     height: scale(26),
// //     justifyContent: "center",
// //     marginTop: verticalScale(25),
// //     marginBottom: verticalScale(25),
// //   },

// //   title: {
// //     color: "#FFFFFF",
// //     fontSize: moderateScale(18),
// //     fontWeight: "700",
// //     textAlign: "center",
// //   },

// //   subtitle: {
// //     color: "#BDBDBD",
// //     fontSize: moderateScale(12),
// //     textAlign: "center",
// //     lineHeight: moderateScale(18),
// //     marginTop: verticalScale(6),
// //     marginBottom: verticalScale(20),
// //   },

// //   primaryButton: {
// //     backgroundColor: "#3154BA4D",
// //     paddingVertical: verticalScale(14),
// //     paddingHorizontal: scale(22),
// //     borderRadius: moderateScale(14),
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },

// //   primaryButtonText: {
// //     color: "#FFFFFF",
// //     fontSize: moderateScale(10),
// //     fontWeight: "500",
// //   },

// //   cardsScrollView: {
// //     maxHeight: height * 0.48,
// //     marginTop: verticalScale(30),
// //   },

// //   gridContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },

// //   card: {
// //     width: "47%",
// //     borderRadius: moderateScale(18),
// //     paddingVertical: verticalScale(20),
// //     paddingHorizontal: scale(12),
// //     alignItems: "center",
// //     marginBottom: verticalScale(10),
// //     borderWidth: 1,
// //     borderColor: "#3255BA",
// //   },

// //   iconContainer: {
// //     width: moderateScale(60),
// //     height: moderateScale(60),
// //     borderRadius: moderateScale(16),
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: verticalScale(10),
// //   },

// //   /* ✅ UPDATED – NO CIRCLE / NO SHADOW */
// //   gamingBox: {
// //     width: 70,
// //     height: 70,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "transparent",
// //     marginBottom: 10,
// //   },

// //   gamingImage: {
// //     width: 60,
// //     height: 60,
// //   },

// //   cardTitle: {
// //     color: "#FFFFFF",
// //     fontSize: moderateScale(10),
// //     fontWeight: "500",
// //     marginBottom: verticalScale(12),
// //     textAlign: "center",
// //   },

// //   cardButton: {
// //     backgroundColor: "#0D2151",
// //     paddingVertical: verticalScale(10),
// //     paddingHorizontal: scale(26),
// //     borderRadius: moderateScale(10),
// //     borderWidth: 1,
// //     borderColor: "rgba(59, 130, 246, 0.3)",
// //   },

// //   cardButtonText: {
// //     color: "#FFFFFF",
// //     fontWeight: "500",
// //     fontSize: moderateScale(10),
// //   },

// //   bottomText: {
// //     color: "#fff",
// //     textAlign: "center",
// //     marginTop: verticalScale(10),
// //     fontSize: moderateScale(10),
// //     fontWeight: "500",
// //   },

// //   exploreButton: {
// //     backgroundColor: "#2563EB",
// //     marginTop: verticalScale(10),
// //     paddingVertical: verticalScale(12),
// //     paddingHorizontal: scale(30),
// //     borderRadius: moderateScale(15),
// //     alignItems: "center",
// //     alignSelf: "center",
// //   },

// //   exploreButtonText: {
// //     color: "#FFFFFF",
// //     fontSize: moderateScale(14),
// //     fontWeight: "500",
// //   },
// // });
// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   StatusBar,
//   SafeAreaView,
//   Image,
// } from "react-native";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { SvgXml } from "react-native-svg";

// import GameIcon from "../../assets/Game.png";
// import SchoolIcon from "../../assets/School.png";

// const { width, height } = Dimensions.get("window");

// /* ---------- RESPONSIVE HELPERS ---------- */
// const scale = (size = 20) => (width / 375) * size;
// const verticalScale = (size) => (height / 812) * size;
// const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;

// /* ---------- SVG ICON ---------- */
// const nexusSvg = `
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
//   <path d="M200-160v-80h560v80H200Zm0-140-51-321q-2 0-4.5.5t-4.5.5q-25 0-42.5-17.5T80-680q0-25 17.5-42.5T140-740q25 0 42.5 17.5T200-680q0 7-1.5 13t-3.5 11l125 56 125-171q-11-8-18-21t-7-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820q0 15-7 28t-18 21l125 171 125-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T820-740q25 0 42.5 17.5T880-680q0 25-17.5 42.5T820-620q-2 0-4.5-.5t-4.5-.5l-51 321H200Zm68-80h424l26-167-105 46-133-183-133 183-105-46 26 167Zm212 0Z"/>
// </svg>
// `;

// export default function Create_Nexus({ navigation }) {
//   const CARDS = [
//     { id: 1, title: "Gaming", type: "image", icon: "gamepad-variant", iconColor: "#00D9FF", bgColor: "rgba(0, 217, 255, 0.15)" },
//     { id: 2, title: "School", type: "image", icon: "view-grid", iconColor: "#A855F7", bgColor: "rgba(168, 85, 247, 0.15)" },
//     { id: 3, title: "Study Group", type: "icon", icon: "bookmark-multiple", iconColor: "#22D3EE", bgColor: "rgba(34, 211, 238, 0.15)" },
//     { id: 4, title: "Friends", type: "icon", icon: "account-group", iconColor: "#3B82F6", bgColor: "rgba(59, 130, 246, 0.15)" },
//   ];

//   const renderIcon = (item) => {
//     if (item.title === "Gaming") {
//       return (
//         <View style={styles.gamingBox}>
//           <Image source={GameIcon} style={styles.gamingImage} />
//         </View>
//       );
//     }

//     if (item.title === "School") {
//       return (
//         <View style={styles.gamingBox}>
//           <Image source={SchoolIcon} style={styles.schoolImage} />
//         </View>
//       );
//     }

//     return (
//       <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
//         <MaterialCommunityIcons
//           name={item.icon}
//           size={scale(32)}
//           color={item.iconColor}
//         />
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <StatusBar barStyle="light-content" backgroundColor="#0C142A" />

//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.closeButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
//         </TouchableOpacity>

//         <Text style={styles.title}>Create Your Nexus</Text>

//         <Text style={styles.subtitle}>
//           A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
//         </Text>

//         <TouchableOpacity
//           style={styles.primaryButton}
//           onPress={() => navigation.navigate("My_Own_Nexus")}
//           activeOpacity={0.8}
//         >
//           <View style={{ marginTop: verticalScale(6) }}>
//             <SvgXml xml={nexusSvg} width={scale(22)} height={scale(22)} />
//           </View>

//           <View style={{ flex: 1, alignItems: "center" }}>
//             <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>
//           </View>
//         </TouchableOpacity>

//         <ScrollView style={styles.cardsScrollView} showsVerticalScrollIndicator={false}>
//           <View style={styles.gridContainer}>
//             {CARDS.map((item) => (
//               <View key={item.id} style={styles.card}>
//                 {renderIcon(item)}

//                 <Text style={styles.cardTitle}>{item.title}</Text>

//                 <TouchableOpacity
//                   style={styles.cardButton}
//                   onPress={() =>
//                     navigation.navigate("Create_Nexus_Profile", {
//                       category: item.title,
//                     })
//                   }
//                   activeOpacity={0.8}
//                 >
//                   <Text style={styles.cardButtonText}>Create</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         </ScrollView>

//         <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

//         <TouchableOpacity
//           style={styles.exploreButton}
//           onPress={() => navigation.navigate("NexusCommunity")}
//         >
//           <Text style={styles.exploreButtonText}>Explore Nexus</Text>
//         </TouchableOpacity>

//         <View style={{ height: verticalScale(20) }} />
//       </View>
//     </SafeAreaView>
//   );
// }

// /* ---------- STYLES ---------- */
// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: "#02081A" },

//   container: { flex: 1, backgroundColor: "#02081A", paddingHorizontal: scale(22) },

//   closeButton: {
//     width: scale(26),
//     height: scale(26),
//     justifyContent: "center",
//     marginTop: verticalScale(25),
//     marginBottom: verticalScale(25),
//   },

//   title: {
//     color: "#FFFFFF",
//     fontSize: moderateScale(18),
//     fontWeight: "700",
//     textAlign: "center",
//   },

//   subtitle: {
//     color: "#BDBDBD",
//     fontSize: moderateScale(12),
//     textAlign: "center",
//     lineHeight: moderateScale(18),
//     marginTop: verticalScale(6),
//     marginBottom: verticalScale(20),
//   },

//   primaryButton: {
//     backgroundColor: "#3154BA4D",
//     paddingVertical: verticalScale(14),
//     paddingHorizontal: scale(22),
//     borderRadius: moderateScale(14),
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   primaryButtonText: {
//     color: "#FFFFFF",
//     fontSize: moderateScale(10),
//     fontWeight: "500",
//   },

//   cardsScrollView: {
//     maxHeight: height * 0.48,
//     marginTop: verticalScale(30),
//   },

//   gridContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },

//   card: {
//     width: "47%",
//     borderRadius: moderateScale(18),
//     paddingVertical: verticalScale(20),
//     paddingHorizontal: scale(12),
//     alignItems: "center",
//     marginBottom: verticalScale(10),
//     borderWidth: 1,
//     borderColor: "#3255BA",
//   },

//   iconContainer: {
//     width: moderateScale(60),
//     height: moderateScale(60),
//     borderRadius: moderateScale(16),
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: verticalScale(10),
//   },

//   gamingBox: {
//     width: 70,
//     height: 70,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "transparent",
//     marginBottom: 10,
//   },

//   gamingImage: {
//     width: 60,
//     height: 60,
//   },

//   schoolImage: {
//     width: 60,
//     height: 60,
//   },

//   cardTitle: {
//     color: "#FFFFFF",
//     fontSize: moderateScale(10),
//     fontWeight: "500",
//     marginBottom: verticalScale(12),
//     textAlign: "center",
//   },

//   cardButton: {
//     backgroundColor: "#0D2151",
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: scale(26),
//     borderRadius: moderateScale(10),
//     borderWidth: 1,
//     borderColor: "rgba(59, 130, 246, 0.3)",
//   },

//   cardButtonText: {
//     color: "#FFFFFF",
//     fontWeight: "500",
//     fontSize: moderateScale(10),
//   },

//   bottomText: {
//     color: "#fff",
//     textAlign: "center",
//     marginTop: verticalScale(10),
//     fontSize: moderateScale(10),
//     fontWeight: "500",
//   },

//   exploreButton: {
//     backgroundColor: "#2563EB",
//     marginTop: verticalScale(10),
//     paddingVertical: verticalScale(12),
//     paddingHorizontal: scale(30),
//     borderRadius: moderateScale(15),
//     alignItems: "center",
//     alignSelf: "center",
//   },

//   exploreButtonText: {
//     color: "#FFFFFF",
//     fontSize: moderateScale(14),
//     fontWeight: "500",
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";

import GameIcon from "../../assets/Game.png";
import SchoolIcon from "../../assets/School.png";
import StudyGroupIcon from "../../assets/Study_Group.png";
import FriendsIcon from "../../assets/Friends.png";

const { width, height } = Dimensions.get("window");

/* ---------- RESPONSIVE HELPERS ---------- */
const scale = (size = 20) => (width / 375) * size;
const verticalScale = (size) => (height / 812) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/* ---------- SVG ICON ---------- */
const nexusSvg = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
  <path d="M200-160v-80h560v80H200Zm0-140-51-321q-2 0-4.5.5t-4.5.5q-25 0-42.5-17.5T80-680q0-25 17.5-42.5T140-740q25 0 42.5 17.5T200-680q0 7-1.5 13t-3.5 11l125 56 125-171q-11-8-18-21t-7-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820q0 15-7 28t-18 21l125 171 125-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T820-740q25 0 42.5 17.5T880-680q0 25-17.5 42.5T820-620q-2 0-4.5-.5t-4.5-.5l-51 321H200Zm68-80h424l26-167-105 46-133-183-133 183-105-46 26 167Zm212 0Z"/>
</svg>
`;

export default function Create_Nexus({ navigation }) {
  const CARDS = [
    { id: 1, title: "Gaming" },
    { id: 2, title: "School" },
    { id: 3, title: "Study Group" },
    { id: 4, title: "Friends" },
  ];

  const renderIcon = (item) => {
    if (item.title === "Gaming") {
      return (
        <View style={styles.imageBox}>
          <Image source={GameIcon} style={styles.iconImage} />
        </View>
      );
    }

    if (item.title === "School") {
      return (
        <View style={styles.imageBox}>
          <Image source={SchoolIcon} style={styles.iconImage} />
        </View>
      );
    }

    if (item.title === "Study Group") {
      return (
        <View style={styles.imageBox}>
          <Image source={StudyGroupIcon} style={styles.iconImage} />
        </View>
      );
    }

    if (item.title === "Friends") {
      return (
        <View style={styles.imageBox}>
          <Image source={FriendsIcon} style={styles.iconImage} />
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0C142A" />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.title}>Create Your Nexus</Text>

        <Text style={styles.subtitle}>
          A Nexus is your space. Build your world with chat,{"\n"}channels and
          vibes.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("My_Own_Nexus")}
          activeOpacity={0.8}
        >
          <View style={{ marginTop: verticalScale(6) }}>
            <SvgXml xml={nexusSvg} width={scale(22)} height={scale(22)} />
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.primaryButtonText}>
              Create My Own Nexus
            </Text>
          </View>
        </TouchableOpacity>

        <ScrollView
          style={styles.cardsScrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.gridContainer}>
            {CARDS.map((item) => (
              <View key={item.id} style={styles.card}>
                {renderIcon(item)}

                <Text style={styles.cardTitle}>{item.title}</Text>

                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() =>
                    navigation.navigate("Create_Nexus_Profile", {
                      category: item.title,
                    })
                  }
                  activeOpacity={0.8}
                >
                  <Text style={styles.cardButtonText}>Create</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.exploreButtonText}>Explore Nexus</Text>
        </TouchableOpacity>

        <View style={{ height: verticalScale(20) }} />
      </View>
    </SafeAreaView>
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#02081A" },

  container: {
    flex: 1,
    backgroundColor: "#02081A",
    paddingHorizontal: scale(22),
  },

  closeButton: {
    width: scale(26),
    height: scale(26),
    justifyContent: "center",
    marginTop: verticalScale(25),
    marginBottom: verticalScale(25),
  },

  title: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    color: "#BDBDBD",
    fontSize: moderateScale(12),
    textAlign: "center",
    lineHeight: moderateScale(18),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(20),
  },

 primaryButton: {
  width: "100%",
  height: 54,
  borderRadius: 28,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 22,

  backgroundColor: "#0B1B44",
  borderWidth: 1.2,
  borderColor: "#3B82F6",

  shadowColor: "#4F8BFF",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.55,
  shadowRadius: 18,
  elevation: 12,
},

primaryButtonText: {
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "600",
  textAlign: "center",
  letterSpacing: 0.4,
},


  cardsScrollView: {
    maxHeight: height * 0.48,
    marginTop: verticalScale(30),
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    borderRadius: moderateScale(18),
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(12),
    alignItems: "center",
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: "#3255BA",
  },

  imageBox: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 10,
  },

  iconImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontWeight: "500",
    marginBottom: verticalScale(12),
    textAlign: "center",
  },

  cardButton: {
    backgroundColor: "#0D2151",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(26),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.3)",
  },

  cardButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: moderateScale(10),
  },

  bottomText: {
    color: "#fff",
    textAlign: "center",
    marginTop: verticalScale(10),
    fontSize: moderateScale(10),
    fontWeight: "500",
  },

  exploreButton: {
    backgroundColor: "#2563EB",
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(30),
    borderRadius: moderateScale(15),
    alignItems: "center",
    alignSelf: "center",
  },

  exploreButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});

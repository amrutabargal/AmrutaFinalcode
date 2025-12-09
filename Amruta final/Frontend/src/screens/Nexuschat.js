// // screens/V55.js
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// const { width: SCREEN_W } = Dimensions.get("window");
// const guidelineBaseWidth = 375;
// const scale = (size) => (SCREEN_W / guidelineBaseWidth) * size;

// const SIDE_AVATARS = [
//   {
//     id: "1",
//     avatar:
//       "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
//     color: "#38bdf8",
//     badge: 1,
//   },
//   {
//     id: "2",
//     avatar:
//       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
//     color: "#22c55e",
//     badge: 8,
//   },
//   {
//     id: "3",
//     avatar:
//       "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
//     color: "#eab308",
//     badge: 25,
//   },
//   {
//     id: "4",
//     avatar:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
//     color: "#ec4899",
//     badge: 4,
//   },
//   {
//     id: "5",
//     avatar:
//       "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
//     color: "#6366f1",
//     badge: 1,
//   },
// ];

// const COVER =
//   "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800";

// export default function V55({ route, navigation }) {
//   const communityName = route?.params?.name || "Sushis City";
//   const members = route?.params?.members || 14879;

//   const [chatOpen, setChatOpen] = useState(true);
//   const [voiceOpen, setVoiceOpen] = useState(true);

//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="light-content" />

//       {/* CONTENT + SIDEBAR */}
//       <View style={styles.mainRow}>
//         {/* LEFT VERTICAL AVATAR BAR */}
//         <View style={styles.sidebar}>
//           {/* top tools */}
//           <TouchableOpacity style={styles.sideIconBig}>
//             <Ionicons name="pencil-outline" size={20} color="#E5ECFF" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.sideIconBig, styles.sideIconPlus]}
//             onPress={() => navigation?.navigate?.("Create_Nexus")}
//           >
//             <Ionicons name="add" size={26} color="#E5ECFF" />
//           </TouchableOpacity>

//           {/* avatar list */}
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.sideAvatarScroll}
//           >
//             {SIDE_AVATARS.map((item) => (
//               <View key={item.id} style={styles.sideAvatarWrapper}>
//                 <LinearGradient
//                   colors={[item.color, "#0f172a"]}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 1 }}
//                   style={styles.sideAvatarBorder}
//                 >
//                   <Image
//                     source={{ uri: item.avatar }}
//                     style={styles.sideAvatar}
//                   />
//                 </LinearGradient>
//                 {item.badge > 0 && (
//                   <View style={styles.sideBadge}>
//                     <Text style={styles.sideBadgeText}>
//                       {item.badge > 9 ? "9+" : item.badge}
//                     </Text>
//                   </View>
//                 )}
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//         {/* RIGHT MAIN AREA */}
//         <View style={styles.mainContentWrapper}>
//           <ScrollView
//             showsVerticalScrollIndicator={true}
//             contentContainerStyle={styles.scrollContent}
//           >
//             {/* COVER / HEADER */}
//             <View style={styles.headerCard}>
//               <ImageBackground
//                 source={{ uri: COVER }}
//                 style={styles.headerBg}
//                 imageStyle={styles.headerBgImage}
//               >
//                 <View style={styles.headerOverlay} />

//                 {/* TOP HEADER ICONS */}
//                 <View style={styles.headerTopRow}>
//                   <View style={{ width: scale(40) }} />
//                   <View style={styles.headerIconRow}>
//                     <TouchableOpacity style={styles.roundHeaderBtn}>
//                       <Ionicons
//                         name="search-outline"
//                         size={18}
//                         color="#E5ECFF"
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.roundHeaderBtn}>
//                       <Ionicons
//                         name="people-outline"
//                         size={18}
//                         color="#E5ECFF"
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.roundHeaderBtn}>
//                       <Ionicons
//                         name="ellipsis-horizontal"
//                         size={18}
//                         color="#E5ECFF"
//                       />
//                     </TouchableOpacity>
//                   </View>
//                 </View>

//                 {/* AVATAR + NAME */}
//                 <View style={styles.headerBottomRow}>
//                   <View style={styles.headerAvatarWrapper}>
//                     <Image
//                       source={{
//                         uri:
//                           "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
//                       }}
//                       style={styles.headerAvatar}
//                     />
//                   </View>
//                   <View style={styles.headerInfo}>
//                     <Text style={styles.headerTitle}>{communityName}</Text>
//                     <Text style={styles.headerSub}>
//                       {members.toLocaleString()} Members · Community
//                     </Text>
//                   </View>
//                 </View>
//               </ImageBackground>
//             </View>

//             {/* CHANNEL LIST SECTION */}
//             <View style={styles.channelCard}>
//               {/* TEXT CHANNELS TOP TWO */}
//               <TouchableOpacity style={styles.channelRow}>
//                 <View style={styles.channelLeft}>
//                   <Ionicons
//                     name="pricetag-outline"
//                     size={16}
//                     color="#9fb4ff"
//                     style={styles.channelIcon}
//                   />
//                   <Text style={styles.channelTitle}># general</Text>
//                 </View>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.channelRow}>
//                 <View style={styles.channelLeft}>
//                   <Ionicons
//                     name="megaphone-outline"
//                     size={16}
//                     color="#9fb4ff"
//                     style={styles.channelIcon}
//                   />
//                   <Text style={styles.channelTitle}># announcement</Text>
//                 </View>
//               </TouchableOpacity>

//               {/* CHAT SPACE */}
//               <View style={styles.sectionWrapper}>
//                 <TouchableOpacity
//                   style={styles.sectionHeaderRow}
//                   onPress={() => setChatOpen((p) => !p)}
//                 >
//                   <Text style={styles.sectionHeaderText}>Chat Space</Text>
//                   <Ionicons
//                     name={chatOpen ? "chevron-up" : "chevron-down"}
//                     size={16}
//                     color="#9fb4ff"
//                   />
//                 </TouchableOpacity>

//                 {chatOpen && (
//                   <View style={styles.innerCard}>
//                     <View style={styles.channelLeft}>
//                       <Ionicons
//                         name="chatbubble-ellipses-outline"
//                         size={16}
//                         color="#9fb4ff"
//                         style={styles.channelIcon}
//                       />
//                       <Text style={styles.channelTitle}>{`# < media, >`}</Text>
//                     </View>
//                   </View>
//                 )}
//               </View>

//               {/* VOICE SPACE */}
//               <View style={styles.sectionWrapper}>
//                 <TouchableOpacity
//                   style={styles.sectionHeaderRow}
//                   onPress={() => setVoiceOpen((p) => !p)}
//                 >
//                   <Text style={styles.sectionHeaderText}>Voice space</Text>
//                   <Ionicons
//                     name={voiceOpen ? "chevron-up" : "chevron-down"}
//                     size={16}
//                     color="#9fb4ff"
//                   />
//                 </TouchableOpacity>

//                 {voiceOpen && (
//                   <View style={styles.innerVoiceCard}>
//                     {/* main lounge */}
//                     <View style={styles.voiceMainRow}>
//                       <Ionicons
//                         name="mic-outline"
//                         size={16}
//                         color="#9fb4ff"
//                         style={styles.channelIcon}
//                       />
//                       <Text style={styles.channelTitle}>Lounge</Text>
//                     </View>

//                     {/* sub voice channels */}
//                     {["Team Talk", "Chill Zone", "Game VC", "Hangout"].map(
//                       (label) => (
//                         <View key={label} style={styles.voiceSubRow}>
//                           <Ionicons
//                             name="mic-outline"
//                             size={14}
//                             color="#64748b"
//                             style={styles.voiceSubIcon}
//                           />
//                           <Text style={styles.voiceSubText}>{label}</Text>
//                         </View>
//                       )
//                     )}
//                   </View>
//                 )}
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </View>

//       {/* BOTTOM TAB BAR */}
//       <View style={styles.bottomBarWrapper}>
//         <LinearGradient
//           colors={["#111827", "#020617"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.bottomBar}
//         >
//           <TouchableOpacity style={styles.tabItem}>
//             <LinearGradient
//               colors={["#22c55e", "#16a34a"]}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               style={styles.homeIconBg}
//             >
//               <Ionicons name="home" size={18} color="#ffffff" />
//             </LinearGradient>
//             <Text style={styles.tabLabelActive}>Home</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.tabItem}>
//             <Ionicons
//               name="chatbubble-ellipses-outline"
//               size={20}
//               color="#6b7280"
//             />
//             <Text style={styles.tabLabel}>Chat</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.tabItem}>
//             <Ionicons
//               name="notifications-outline"
//               size={20}
//               color="#6b7280"
//             />
//             <Text style={styles.tabLabel}>Notifications</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.tabItem}>
//             <Ionicons name="person-outline" size={20} color="#6b7280" />
//             <Text style={styles.tabLabel}>You</Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#020617",
//   },
//   mainRow: {
//     flex: 1,
//     flexDirection: "row",
//     paddingTop: scale(40),
//     paddingHorizontal: scale(12),
//     paddingBottom: scale(70), // space for bottom bar
//   },

//   /* LEFT SIDEBAR */
//   sidebar: {
//     width: scale(70),
//     alignItems: "center",
//   },
//   sideIconBig: {
//     width: scale(40),
//     height: scale(40),
//     borderRadius: scale(20),
//     backgroundColor: "#020617",
//     borderWidth: 1,
//     borderColor: "#1f2937",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: scale(8),
//   },
//   sideIconPlus: {
//     backgroundColor: "#1d4ed8",
//     marginBottom: scale(12),
//   },
//   sideAvatarScroll: {
//     paddingBottom: scale(16),
//   },
//   sideAvatarWrapper: {
//     marginBottom: scale(10),
//   },
//   sideAvatarBorder: {
//     width: scale(44),
//     height: scale(44),
//     borderRadius: scale(22),
//     padding: 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sideAvatar: {
//     width: "100%",
//     height: "100%",
//     borderRadius: scale(20),
//   },
//   sideBadge: {
//     position: "absolute",
//     right: -2,
//     top: -2,
//     backgroundColor: "#ef4444",
//     paddingHorizontal: 4,
//     minWidth: 16,
//     height: 16,
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sideBadgeText: {
//     color: "#fff",
//     fontSize: 9,
//     fontWeight: "700",
//   },

//   /* MAIN CONTENT */
//   mainContentWrapper: {
//     flex: 1,
//     paddingLeft: scale(8),
//   },
//   scrollContent: {
//     paddingBottom: scale(24),
//   },

//   /* HEADER CARD */
//   headerCard: {
//     borderRadius: scale(26),
//     overflow: "hidden",
//     marginBottom: scale(16),
//   },
//   headerBg: {
//     height: scale(170),
//     paddingHorizontal: scale(16),
//     paddingTop: scale(14),
//     paddingBottom: scale(16),
//   },
//   headerBgImage: {
//     borderRadius: scale(26),
//   },
//   headerOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(15, 23, 42, 0.45)",
//   },
//   headerTopRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   headerIconRow: {
//     flexDirection: "row",
//     gap: scale(10),
//   },
//   roundHeaderBtn: {
//     width: scale(36),
//     height: scale(36),
//     borderRadius: scale(18),
//     backgroundColor: "rgba(15,23,42,0.75)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerBottomRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: scale(40),
//   },
//   headerAvatarWrapper: {
//     width: scale(60),
//     height: scale(60),
//     borderRadius: scale(30),
//     borderWidth: 3,
//     borderColor: "#22c55e",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: scale(12),
//     backgroundColor: "#020617",
//   },
//   headerAvatar: {
//     width: scale(54),
//     height: scale(54),
//     borderRadius: scale(27),
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerTitle: {
//     color: "#F9FAFF",
//     fontSize: scale(20),
//     fontWeight: "700",
//   },
//   headerSub: {
//     color: "#cbd5f5",
//     marginTop: 4,
//     fontSize: scale(12),
//   },

//   /* CHANNEL CARD */
//   channelCard: {
//     borderRadius: scale(26),
//     backgroundColor: "#020617",
//     borderWidth: 1,
//     borderColor: "#1f2937",
//     paddingHorizontal: scale(14),
//     paddingVertical: scale(12),
//   },
//   channelRow: {
//     borderRadius: scale(16),
//     backgroundColor: "#020617",
//     paddingVertical: scale(10),
//     paddingHorizontal: scale(12),
//     marginBottom: scale(8),
//   },
//   channelLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   channelIcon: {
//     marginRight: scale(8),
//   },
//   channelTitle: {
//     color: "#E5ECFF",
//     fontSize: scale(14),
//     fontWeight: "600",
//   },

//   /* SECTIONS */
//   sectionWrapper: {
//     marginTop: scale(10),
//   },
//   sectionHeaderRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: scale(6),
//     paddingHorizontal: scale(4),
//   },
//   sectionHeaderText: {
//     color: "#9fb4ff",
//     fontSize: scale(12),
//     fontWeight: "600",
//   },
//   innerCard: {
//     borderRadius: scale(16),
//     backgroundColor: "#020617",
//     paddingHorizontal: scale(12),
//     paddingVertical: scale(10),
//   },

//   innerVoiceCard: {
//     borderRadius: scale(18),
//     backgroundColor: "#020617",
//     paddingHorizontal: scale(12),
//     paddingVertical: scale(10),
//     marginTop: scale(2),
//   },
//   voiceMainRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: scale(8),
//   },
//   voiceSubRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingLeft: scale(22),
//     paddingVertical: scale(4),
//   },
//   voiceSubIcon: {
//     marginRight: scale(8),
//   },
//   voiceSubText: {
//     color: "#cbd5f5",
//     fontSize: scale(13),
//   },

//   /* BOTTOM BAR */
//   bottomBarWrapper: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   bottomBar: {
//     height: scale(64),
//     borderTopLeftRadius: scale(22),
//     borderTopRightRadius: scale(22),
//     paddingHorizontal: scale(24),
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   tabItem: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   homeIconBg: {
//     width: scale(34),
//     height: scale(34),
//     borderRadius: scale(17),
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 2,
//   },
//   tabLabelActive: {
//     color: "#ffffff",
//     fontSize: scale(11),
//     fontWeight: "600",
//   },
//   tabLabel: {
//     color: "#9ca3af",
//     fontSize: scale(11),
//     marginTop: 2,
//   },
// });
// screens/V55.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width: SCREEN_W } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const scale = (size) => (SCREEN_W / guidelineBaseWidth) * size;

const SIDE_AVATARS = [
  { id: "1", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200", color: "#38bdf8", badge: 1 },
  { id: "2", avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200", color: "#22c55e", badge: 8 },
  { id: "3", avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200", color: "#eab308", badge: 25 },
  { id: "4", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200", color: "#ec4899", badge: 4 },
  { id: "5", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200", color: "#6366f1", badge: 1 },
];

const COVER = "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800";

export default function V55({ route, navigation }) {
  const communityName = route?.params?.name || "Sushis City";
  const members = route?.params?.members || 14879;

  const [chatOpen, setChatOpen] = useState(true);
  const [voiceOpen, setVoiceOpen] = useState(true);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/* CONTENT + SIDEBAR */}
      <View style={styles.mainRow}>
        {/* LEFT VERTICAL AVATAR BAR */}
        <View style={styles.sidebar}>
          {/* top tools */}
          <TouchableOpacity style={styles.sideIconBig}>
            <Ionicons name="pencil-outline" size={20} color="#E5ECFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.sideIconBig, styles.sideIconPlus]}
            onPress={() => navigation?.navigate?.("Create_Nexus")}
          >
            <Ionicons name="add" size={26} color="#E5ECFF" />
          </TouchableOpacity>

          {/* avatar list */}
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.sideAvatarScroll}>
            {SIDE_AVATARS.map((item) => (
              <View key={item.id} style={styles.sideAvatarWrapper}>
                <LinearGradient colors={[item.color, "#0f172a"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.sideAvatarBorder}>
                  <Image source={{ uri: item.avatar }} style={styles.sideAvatar} />
                </LinearGradient>
                {item.badge > 0 && (
                  <View style={styles.sideBadge}>
                    <Text style={styles.sideBadgeText}>{item.badge > 9 ? "9+" : item.badge}</Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* RIGHT MAIN AREA */}
        <View style={styles.mainContentWrapper}>
          <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollContent}>
            {/* COVER / HEADER */}
            <View style={styles.headerCard}>
              <ImageBackground source={{ uri: COVER }} style={styles.headerBg} imageStyle={styles.headerBgImage}>
                <View style={styles.headerOverlay} />

                {/* TOP HEADER ICONS */}
                <View style={styles.headerTopRow}>
                  <View style={{ width: scale(40) }} />
                  <View style={styles.headerIconRow}>
                    <TouchableOpacity style={styles.roundHeaderBtn}>
                      <Ionicons name="search-outline" size={18} color="#E5ECFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundHeaderBtn}>
                      <Ionicons name="people-outline" size={18} color="#E5ECFF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundHeaderBtn}>
                      <Ionicons name="ellipsis-horizontal" size={18} color="#E5ECFF" />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* AVATAR + NAME */}
                <View style={styles.headerBottomRow}>
                  <View style={styles.headerAvatarWrapper}>
                    <Image source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" }} style={styles.headerAvatar} />
                  </View>
                  <View style={styles.headerInfo}>
                    <Text style={styles.headerTitle}>{communityName}</Text>
                    <Text style={styles.headerSub}>{members.toLocaleString()} Members · Community</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>

            {/* CHANNEL LIST SECTION */}
            <View style={styles.channelCard}>
              {/* TEXT CHANNELS TOP TWO */}
              <TouchableOpacity style={styles.channelRow} onPress={() => navigation.navigate("Chat", { channelName: "# general" })}>
                <View style={styles.channelLeft}>
                  <Ionicons name="pricetag-outline" size={16} color="#9fb4ff" style={styles.channelIcon} />
                  <Text style={styles.channelTitle}># general</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.channelRow} onPress={() => navigation.navigate("Chat", { channelName: "# announcement" })}>
                <View style={styles.channelLeft}>
                  <Ionicons name="megaphone-outline" size={16} color="#9fb4ff" style={styles.channelIcon} />
                  <Text style={styles.channelTitle}># announcement</Text>
                </View>
              </TouchableOpacity>

              {/* CHAT SPACE */}
              <View style={styles.sectionWrapper}>
                <TouchableOpacity style={styles.sectionHeaderRow} onPress={() => setChatOpen((p) => !p)}>
                  <Text style={styles.sectionHeaderText}>Chat Space</Text>
                  <Ionicons name={chatOpen ? "chevron-up" : "chevron-down"} size={16} color="#9fb4ff" />
                </TouchableOpacity>

                {chatOpen && (
                  <View style={styles.innerCard}>
                    <View style={styles.channelLeft}>
                      <Ionicons name="chatbubble-ellipses-outline" size={16} color="#9fb4ff" style={styles.channelIcon} />

                      {/* ← important: navigate to Chat screen (channel = media) */}
                      <TouchableOpacity onPress={() => navigation.navigate("MediaViewer", { channelName: "# < media, >" })}>
                        <Text style={styles.channelTitle}>{`# < media, >`}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>

              {/* VOICE SPACE */}
              <View style={styles.sectionWrapper}>
                <TouchableOpacity style={styles.sectionHeaderRow} onPress={() => setVoiceOpen((p) => !p)}>
                  <Text style={styles.sectionHeaderText}>Voice space</Text>
                  <Ionicons name={voiceOpen ? "chevron-up" : "chevron-down"} size={16} color="#9fb4ff" />
                </TouchableOpacity>

                {voiceOpen && (
                  <View style={styles.innerVoiceCard}>
                    <View style={styles.voiceMainRow}>
                      <Ionicons name="mic-outline" size={16} color="#9fb4ff" style={styles.channelIcon} />
                      <Text style={styles.channelTitle}>Lounge</Text>
                    </View>

                    {["Team Talk", "Chill Zone", "Game VC", "Hangout"].map((label) => (
                      <View key={label} style={styles.voiceSubRow}>
                        <Ionicons name="mic-outline" size={14} color="#64748b" style={styles.voiceSubIcon} />
                        <Text style={styles.voiceSubText}>{label}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* BOTTOM TAB BAR */}
      <View style={styles.bottomBarWrapper}>
        <LinearGradient colors={["#111827", "#020617"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBar}>
          <TouchableOpacity style={styles.tabItem}>
            <LinearGradient colors={["#22c55e", "#16a34a"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.homeIconBg}>
              <Ionicons name="home" size={18} color="#ffffff" />
            </LinearGradient>
            <Text style={styles.tabLabelActive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#6b7280" />
            <Text style={styles.tabLabel}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="notifications-outline" size={20} color="#6b7280" />
            <Text style={styles.tabLabel}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="person-outline" size={20} color="#6b7280" />
            <Text style={styles.tabLabel}>You</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

/* ---------- STYLES (unchanged) ---------- */
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#020617" },
  mainRow: { flex: 1, flexDirection: "row", paddingTop: scale(40), paddingHorizontal: scale(12), paddingBottom: scale(70) },
  sidebar: { width: scale(70), alignItems: "center" },
  sideIconBig: { width: scale(40), height: scale(40), borderRadius: scale(20), backgroundColor: "#020617", borderWidth: 1, borderColor: "#1f2937", justifyContent: "center", alignItems: "center", marginBottom: scale(8) },
  sideIconPlus: { backgroundColor: "#1d4ed8", marginBottom: scale(12) },
  sideAvatarScroll: { paddingBottom: scale(16) },
  sideAvatarWrapper: { marginBottom: scale(10) },
  sideAvatarBorder: { width: scale(44), height: scale(44), borderRadius: scale(22), padding: 2, justifyContent: "center", alignItems: "center" },
  sideAvatar: { width: "100%", height: "100%", borderRadius: scale(20) },
  sideBadge: { position: "absolute", right: -2, top: -2, backgroundColor: "#ef4444", paddingHorizontal: 4, minWidth: 16, height: 16, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  sideBadgeText: { color: "#fff", fontSize: 9, fontWeight: "700" },
  mainContentWrapper: { flex: 1, paddingLeft: scale(8) },
  scrollContent: { paddingBottom: scale(24) },
  headerCard: { borderRadius: scale(26), overflow: "hidden", marginBottom: scale(16) },
  headerBg: { height: scale(170), paddingHorizontal: scale(16), paddingTop: scale(14), paddingBottom: scale(16) },
  headerBgImage: { borderRadius: scale(26) },
  headerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(15, 23, 42, 0.45)" },
  headerTopRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerIconRow: { flexDirection: "row", gap: scale(10) },
  roundHeaderBtn: { width: scale(36), height: scale(36), borderRadius: scale(18), backgroundColor: "rgba(15,23,42,0.75)", justifyContent: "center", alignItems: "center" },
  headerBottomRow: { flexDirection: "row", alignItems: "center", marginTop: scale(40) },
  headerAvatarWrapper: { width: scale(60), height: scale(60), borderRadius: scale(30), borderWidth: 3, borderColor: "#22c55e", justifyContent: "center", alignItems: "center", marginRight: scale(12), backgroundColor: "#020617" },
  headerAvatar: { width: scale(54), height: scale(54), borderRadius: scale(27) },
  headerInfo: { flex: 1 },
  headerTitle: { color: "#F9FAFF", fontSize: scale(20), fontWeight: "700" },
  headerSub: { color: "#cbd5f5", marginTop: 4, fontSize: scale(12) },
  channelCard: { borderRadius: scale(26), backgroundColor: "#020617", borderWidth: 1, borderColor: "#1f2937", paddingHorizontal: scale(14), paddingVertical: scale(12) },
  channelRow: { borderRadius: scale(16), backgroundColor: "#020617", paddingVertical: scale(10), paddingHorizontal: scale(12), marginBottom: scale(8) },
  channelLeft: { flexDirection: "row", alignItems: "center" },
  channelIcon: { marginRight: scale(8) },
  channelTitle: { color: "#E5ECFF", fontSize: scale(14), fontWeight: "600" },
  sectionWrapper: { marginTop: scale(10) },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: scale(6), paddingHorizontal: scale(4) },
  sectionHeaderText: { color: "#9fb4ff", fontSize: scale(12), fontWeight: "600" },
  innerCard: { borderRadius: scale(16), backgroundColor: "#020617", paddingHorizontal: scale(12), paddingVertical: scale(10) },
  innerVoiceCard: { borderRadius: scale(18), backgroundColor: "#020617", paddingHorizontal: scale(12), paddingVertical: scale(10), marginTop: scale(2) },
  voiceMainRow: { flexDirection: "row", alignItems: "center", marginBottom: scale(8) },
  voiceSubRow: { flexDirection: "row", alignItems: "center", paddingLeft: scale(22), paddingVertical: scale(4) },
  voiceSubIcon: { marginRight: scale(8) },
  voiceSubText: { color: "#cbd5f5", fontSize: scale(13) },
  bottomBarWrapper: { position: "absolute", left: 0, right: 0, bottom: 0 },
  bottomBar: { height: scale(64), borderTopLeftRadius: scale(22), borderTopRightRadius: scale(22), paddingHorizontal: scale(24), flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  tabItem: { alignItems: "center", justifyContent: "center" },
  homeIconBg: { width: scale(34), height: scale(34), borderRadius: scale(17), justifyContent: "center", alignItems: "center", marginBottom: 2 },
  tabLabelActive: { color: "#ffffff", fontSize: scale(11), fontWeight: "600" },
  tabLabel: { color: "#9ca3af", fontSize: scale(11), marginTop: 2 },
});

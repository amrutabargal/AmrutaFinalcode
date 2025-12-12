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
  ImageBackground 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width: SCREEN_W } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const scale = (size) => (SCREEN_W / guidelineBaseWidth) * size;

const SIDE_AVATARS = [
  { id: "1", avatar: "https://i.pravatar.cc/150?img=12", color: "#06b6d4", badge: 1 },
  { id: "2", avatar: "https://i.pravatar.cc/150?img=33", color: "#f97316", badge: 1 },
  { id: "3", avatar: "https://i.pravatar.cc/150?img=45", color: "#a855f7", badge: 1 },
  { id: "4", avatar: "https://i.pravatar.cc/150?img=8", color: "#ec4899", badge: 1 },
  { id: "5", avatar: "https://i.pravatar.cc/150?img=25", color: "#22c55e", badge: 1 },
  { id: "6", avatar: "https://i.pravatar.cc/150?img=67", color: "#06b6d4", badge: 1 },
  { id: "7", avatar: "https://i.pravatar.cc/150?img=19", color: "#a855f7", badge: 1 },
];

const COVER = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80";

export default function NexusChat({ route, navigation }) {
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
          {/* top compass icon */}
          <TouchableOpacity style={styles.sideIconBig} onPress={() => navigation?.navigate?.('Discover')}>
            <Ionicons name="compass-outline" size={scale(22)} color="#94a3b8" />
          </TouchableOpacity>
          
          {/* plus button */}
          <TouchableOpacity 
            style={[styles.sideIconBig, styles.sideIconPlus]}
            onPress={() => navigation?.navigate?.("Create_Nexus")}
          >
            <Ionicons name="add" size={scale(26)} color="#fff" />
          </TouchableOpacity>

          {/* avatar list */}
          <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.sideAvatarScroll}
            contentContainerStyle={{ paddingBottom: scale(16) }}
          >
            {SIDE_AVATARS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.sideAvatarWrapper}
                onPress={() => navigation?.navigate?.('UserProfile', { userId: item.id })}
              >
                <LinearGradient
                  colors={[item.color, item.color + "99"]}
                  style={styles.sideAvatarBorder}
                >
                  <Image source={{ uri: item.avatar }} style={styles.sideAvatar} />
                </LinearGradient>
                {item.badge > 0 && (
                  <View style={styles.sideBadge}>
                    <Text style={styles.sideBadgeText}>
                      {item.badge > 9 ? "9+" : item.badge}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* RIGHT MAIN AREA */}
        <View style={styles.mainContentWrapper}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* COVER / HEADER */}
            <View style={styles.headerCard}>
              <ImageBackground 
                source={{ uri: COVER }} 
                style={styles.headerBg}
                imageStyle={styles.headerBgImage}
              >
                <View style={styles.headerOverlay} />
                
                {/* TOP HEADER ICONS */}
                <View style={styles.headerTopRow}>
                  <View style={styles.headerIconRow}>
                      <TouchableOpacity style={styles.roundHeaderBtn} onPress={() => navigation?.navigate?.('Search')}>
                        <Ionicons name="search" size={scale(18)} color="#fff" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.roundHeaderBtn} onPress={() => navigation?.navigate?.('Members')}>
                        <Ionicons name="people" size={scale(18)} color="#fff" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.roundHeaderBtn} onPress={() => navigation?.navigate?.('CommunitySettings')}>
                        <Ionicons name="shield-checkmark" size={scale(18)} color="#fff" />
                      </TouchableOpacity>
                    </View>
                </View>

                {/* AVATAR + NAME */}
                <View style={styles.headerBottomRow}>
                  <View style={styles.headerAvatarWrapper}>
                    <Image 
                      source={{ uri: "https://i.pravatar.cc/150?img=68" }} 
                      style={styles.headerAvatar}
                    />
                  </View>
                  <View style={styles.headerInfo}>
                    <Text style={styles.headerTitle}>{communityName}</Text>
                    <Text style={styles.headerSub}>
                      {members.toLocaleString()} Members · Community
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>

            {/* CHANNEL LIST SECTION */}
            <View style={styles.channelCard}>
              {/* TEXT CHANNELS TOP TWO */}
              <TouchableOpacity 
                style={styles.channelRow}
                onPress={() => navigation.navigate("", { channelName: "# general" })}
              >
                <View style={styles.channelLeft}>
                  <View style={styles.channelBorder} />
                  <Ionicons name="hashtag" size={scale(18)} color="#94a3b8" style={styles.channelIcon} />
                  <Text style={styles.channelTitle}>general</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.channelRow}
                onPress={() => navigation.navigate("", { channelName: "# announcement" })}
              >
                <View style={styles.channelLeft}>
                  <View style={styles.channelBorder} />
                  <Ionicons name="megaphone-outline" size={scale(18)} color="#94a3b8" style={styles.channelIcon} />
                  <Text style={styles.channelTitle}>announcement</Text>
                </View>
              </TouchableOpacity>

              {/* CHAT SPACE */}
              <View style={styles.sectionWrapper}>
                <TouchableOpacity 
                  style={styles.sectionHeaderRow}
                  onPress={() => setChatOpen((p) => !p)}
                >
                  <Text style={styles.sectionHeaderText}>Chat Space</Text>
                  <Ionicons 
                    name={chatOpen ? "chevron-down" : "chevron-forward"} 
                    size={scale(16)} 
                    color="#e2e8f0" 
                  />
                </TouchableOpacity>

                {chatOpen && (
                  <View style={styles.innerCard}>
                    <TouchableOpacity 
                      style={styles.innerChannelRow}
                      onPress={() => navigation.navigate("MediaViewer", { channelName: "# < media, >" })}
                    >
                      <View style={styles.channelLeft}>
                        <View style={styles.innerChannelBorder} />
                        <Ionicons name="hashtag" size={scale(16)} color="#22d3ee" style={styles.channelIcon} />
                        <Text style={styles.innerChannelTitle}>{`< media, >`}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              {/* VOICE SPACE */}
              <View style={styles.sectionWrapper}>
                <TouchableOpacity 
                  style={styles.sectionHeaderRow}
                  onPress={() => setVoiceOpen((p) => !p)}
                >
                  <Text style={styles.sectionHeaderText}>Voice space</Text>
                  <Ionicons 
                    name={voiceOpen ? "chevron-down" : "chevron-forward"} 
                    size={scale(16)} 
                    color="#e2e8f0" 
                  />
                </TouchableOpacity>

                {voiceOpen && (
                  <View style={styles.innerVoiceCard}>
                    <TouchableOpacity style={styles.voiceMainRow} onPress={() => navigation?.navigate?.('VoiceRoom', { roomName: 'Lounge' })}>
                      <View style={styles.channelLeft}>
                        <View style={styles.innerChannelBorder} />
                        <Ionicons name="mic" size={scale(18)} color="#94a3b8" style={styles.voiceSubIcon} />
                        <Text style={styles.voiceMainTitle}>Lounge</Text>
                      </View>
                    </TouchableOpacity>

                    {["Team Talk", "Chill Zone", "Game VC", "Hangout"].map((label) => (
                      <TouchableOpacity
                        key={label}
                        style={styles.voiceSubRow}
                        onPress={() => navigation?.navigate?.('VoiceRoom', { roomName: label })}
                      >
                        <View style={styles.channelLeft}>
                          <View style={styles.innerChannelBorder} />
                          <Ionicons name="mic-outline" size={scale(16)} color="#64748b" style={styles.voiceSubIcon} />
                          <Text style={styles.voiceSubText}>{label}</Text>
                        </View>
                      </TouchableOpacity>
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
        <LinearGradient
          colors={["#1e293b", "#0f172a"]}
          style={styles.bottomBar}
        >
          <TouchableOpacity style={styles.tabItem}>
            <View style={[styles.homeIconBg, { backgroundColor: "#2563eb" }]}>
              <Ionicons name="home" size={scale(20)} color="#fff" />
            </View>
            <Text style={styles.tabLabelActive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="chatbubble-outline" size={scale(24)} color="#9ca3af" />
            <Text style={styles.tabLabel}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="notifications-outline" size={scale(24)} color="#9ca3af" />
            <Text style={styles.tabLabel}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="person-outline" size={scale(24)} color="#9ca3af" />
            <Text style={styles.tabLabel}>You</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0f172a" },
  mainRow: { 
    flex: 1, 
    flexDirection: "row", 
    paddingTop: scale(44), 
    paddingBottom: scale(70) 
  },
  sidebar: { width: scale(64), alignItems: "center", paddingTop: scale(8) },
  sideIconBig: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(12),
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(12)
  },
  sideIconPlus: { 
    backgroundColor: "#2563eb", 
    marginBottom: scale(16),
    borderRadius: scale(14)
  },
  sideAvatarScroll: { flex: 1 },
  sideAvatarWrapper: { 
    marginBottom: scale(12), 
    alignItems: "center" 
  },
  sideAvatarBorder: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(16),
    padding: 2.5,
    justifyContent: "center",
    alignItems: "center"
  },
  sideAvatar: { 
    width: "100%", 
    height: "100%", 
    borderRadius: scale(13) 
  },
  sideBadge: {
    position: "absolute",
    right: -4,
    top: -4,
    backgroundColor: "#ef4444",
    paddingHorizontal: 5,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0f172a"
  },
  sideBadgeText: { 
    color: "#fff", 
    fontSize: 10, 
    fontWeight: "700" 
  },
  mainContentWrapper: { 
    flex: 1, 
    paddingLeft: scale(12),
    paddingRight: scale(12)
  },
  scrollContent: { paddingBottom: scale(24) },
  headerCard: {
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: scale(16)
    
  },
  headerBg: {
    height: scale(160),
    paddingHorizontal: scale(18),
    paddingTop: scale(16),
    paddingBottom: scale(16)
  },
  headerBgImage: { borderRadius: 15 },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.6)"
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headerIconRow: { 
    flexDirection: "row", 
    gap: scale(10) 
  },
  roundHeaderBtn: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    backgroundColor: "rgba(30,41,59,0.85)",
    justifyContent: "center",
    alignItems: "center"
  },
  headerBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(36)
  },
  headerAvatarWrapper: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(20),
    borderWidth: 3,
    borderColor: "#06b6d4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(12),
    backgroundColor: "#0f172a"
  },
  headerAvatar: { 
    width: scale(58), 
    height: scale(58), 
    borderRadius: scale(17) 
  },
  headerInfo: { flex: 1 },
  headerTitle: {
    color: "#ffffff",
    fontSize: scale(22),
    fontWeight: "700",
    letterSpacing: -0.5
  },
  headerSub: {
    color: "#94a3b8",
    marginTop: 4,
    fontSize: scale(13),
    fontWeight: "500"
  },
  channelCard: {
    borderRadius: scale(20),
    backgroundColor: "#0C142A",
    paddingHorizontal: scale(14),
    paddingVertical: scale(12),
    borderWidth: 1,
    // borderColor: "#3b82f6",
    // shadowColor: "#3b82f6",

  // ⭐ Shadow for iOS
  shadowColor: "#3b82f6",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 10,

  // ⭐ Shadow for Android
  elevation: 8,
  },
  channelRow: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(8),
    marginBottom: scale(4)
  },
  channelLeft: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  channelBorder: {
    width: 3,
    height: scale(24),
    backgroundColor: "#3b82f6",
    borderRadius: 2,
    marginRight: scale(10)
  },
  channelIcon: { marginRight: scale(10) },
  channelTitle: {
    color: "#e2e8f0",
    fontSize: scale(15),
    fontWeight: "500",
    letterSpacing: -0.1
  },
  sectionWrapper: { 
    marginTop: scale(16),
    borderTopWidth: 1,
    borderTopColor: "#334155",
    paddingTop: scale(12)
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(8),
    paddingHorizontal: scale(8),
    marginBottom: scale(8)
  },
  sectionHeaderText: {
    color: "#e2e8f0",
    fontSize: scale(14),
    fontWeight: "600",
    letterSpacing: 0.3
  },
  innerCard: {
    borderRadius: scale(16),
    backgroundColor: "#0C142A",
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    borderWidth: 1,
    borderColor: "#3b82f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  innerChannelRow: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(8)
  },
  innerChannelBorder: {
    width: 3,
    height: scale(20),
    backgroundColor: "#22d3ee",
    borderRadius: 2,
    marginRight: scale(10)
  },
  innerChannelTitle: {
    color: "#cbd5e1",
    fontSize: scale(14),
    fontWeight: "500"
  },
  innerVoiceCard: {
    borderRadius: scale(16),
    backgroundColor: "#0f172a",
    paddingHorizontal: scale(8),
    paddingVertical: scale(6),
    borderWidth: 1,
    borderColor: "#3b82f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  voiceMainRow: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(8),
    marginBottom: scale(4)
  },
  voiceMainTitle: {
    color: "#e2e8f0",
    fontSize: scale(15),
    fontWeight: "500"
  },
  voiceSubRow: {
    paddingLeft: scale(8),
    paddingRight: scale(8),
    paddingVertical: scale(8)
  },
  voiceSubIcon: { marginRight: scale(10) },
  voiceSubText: {
    color: "#94a3b8",
    fontSize: scale(14),
    fontWeight: "400"
  },
  bottomBarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  bottomBar: {
    height: scale(70),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    paddingHorizontal: scale(28),
    paddingTop: scale(8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#1e293b"
  },
  tabItem: { 
    alignItems: "center", 
    justifyContent: "center",
    paddingVertical: scale(4)
  },
  homeIconBg: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4
  },
  tabLabelActive: {
    color: "#ffffff",
    fontSize: scale(11),
    fontWeight: "700"
  },
  tabLabel: {
    color: "#64748b",
    fontSize: scale(11),
    fontWeight: "500",
    marginTop: 4
  },
});
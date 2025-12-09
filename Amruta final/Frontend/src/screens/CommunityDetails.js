import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Alert,
  Modal,
  TextInput,
} from "react-native";

// SIMPLE ICONS (emoji-based)
const HashIcon = ({ size = 20, color = "#6edaff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color }]}>#</Text>
  </View>
);

const ZapIcon = ({ size = 20, color = "#6edaff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color }]}>⚡</Text>
  </View>
);

const MicIcon = ({ size = 20, color = "#6edaff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color }]}>🎤</Text>
  </View>
);

const SearchIcon = ({ size = 20, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 16 }]}>🔍</Text>
  </View>
);

const UsersIcon = ({ size = 20, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 16 }]}>👥</Text>
  </View>
);

const SettingsIcon = ({ size = 20, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 16 }]}>⚙️</Text>
  </View>
);

const ChevronUpIcon = ({ size = 20, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 16 }]}>⌃</Text>
  </View>
);

const ChevronDownIcon = ({ size = 20, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 16 }]}>⌄</Text>
  </View>
);

const CompassIcon = ({ size = 24, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 18 }]}>🧭</Text>
  </View>
);

const PlusIcon = ({ size = 28, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 20 }]}>+</Text>
  </View>
);

// Bottom Navigation Icons (not used now but kept if needed later)
const HomeIcon = ({ size = 22, color = "#8a8f9b" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 18 }]}>🏠</Text>
  </View>
);

const ChatIcon = ({ size = 22, color = "#fff" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 18 }]}>💬</Text>
  </View>
);

const BellIcon = ({ size = 22, color = "#8a8f9b" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 18 }]}>🔔</Text>
  </View>
);

const UserIcon = ({ size = 22, color = "#8a8f9b" }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.iconText, { color, fontSize: 18 }]}>👤</Text>
  </View>
);

const NavIcon = ({ title, active = false, icon: IconComponent, onPress }) => (
  <TouchableOpacity style={styles.navBtn} onPress={onPress}>
    <IconComponent color={active ? "#fff" : "#8a8f9b"} />
    <Text style={[styles.navText, { color: active ? "#fff" : "#8a8f9b" }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function CommunityDetails({ navigation }) {
  const [activeBottomTab, setActiveBottomTab] = useState("Chat");
  const [voiceSpaceExpanded, setVoiceSpaceExpanded] = useState(true);
  const [activeVoiceChannel, setActiveVoiceChannel] = useState("Lounge");
  const [activeChatChannel, setActiveChatChannel] = useState("general");
  const [members, setMembers] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");

  const handleSearchPress = () => {
    Alert.alert("Search", "Search functionality would open here");
  };

  const handleUsersPress = () => {
    Alert.alert("Members", `Current members: ${members}`);
  };

  // 👉 Settings icon -> Nexus_Setting screen
  const handleSettingsPress = () => {
    if (navigation && navigation.navigate) {
      navigation.navigate("Nexus_Setting");
    } else {
      Alert.alert("Settings", "Navigation not available");
    }
  };

  const handleCompassPress = () => {
    Alert.alert("Explore", "Explore other communities");
  };

  const handlePlusPress = () => {
    setModalVisible(true);
  };

  const handleAvatarPress = () => {
    Alert.alert("Profile", "Your profile settings");
  };

  const handleChannelPress = (channelName, isVoice = false) => {
    if (isVoice) {
      setActiveVoiceChannel(channelName);
      Alert.alert("Voice Channel", `Joined ${channelName} voice channel`);
    } else {
      setActiveChatChannel(channelName);
      Alert.alert("Chat Channel", `Opened ${channelName} chat`);
    }
  };

  const handleBottomNavPress = (tabName) => {
    setActiveBottomTab(tabName);
    Alert.alert(tabName, `Switched to ${tabName} tab`);
  };

  const handleCreateChannel = () => {
    if (newChannelName.trim()) {
      Alert.alert("Success", `Created new channel: ${newChannelName}`);
      setNewChannelName("");
      setModalVisible(false);
      setMembers((prev) => prev + 1);
    } else {
      Alert.alert("Error", "Please enter a channel name");
    }
  };

  // Press_Space_Creation_Flow SCREEN
  const openPress_Space_Creation_Flow = () => {
    if (navigation && navigation.navigate) {
      navigation.navigate("Press_Space_Creation_Flow");
    } else {
      console.log("navigation not available");
    }
  };

  const handleChatSpaceMenuPress = () => {
    Alert.alert("Chat Space", "Secondary dropdown/menu will open here");
  };

  const voiceChannels = [
    "Lounge",
    "Team Talk",
    "Chill Zone",
    "Game VC",
    "Hangout",
    "Hangout",
  ];

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#020817" />

      {/* LEFT SIDE NAV */}
      <View style={styles.leftNav}>
        <TouchableOpacity style={styles.sideBtn} onPress={handleCompassPress}>
          <CompassIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideBtnBlue} onPress={handlePlusPress}>
          <PlusIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.avatarBtn} onPress={handleAvatarPress}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      {/* MAIN PANEL */}
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }} // footer visible
        >
          <View style={styles.mainCard}>
            {/* HEADER CARD */}
            <View style={styles.headerCard}>
              <View style={styles.headerTopRow}>
                <View style={styles.actionBtns}>
                  <TouchableOpacity
                    style={styles.iconCircle}
                    onPress={handleSearchPress}
                  >
                    <SearchIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconCircle}
                    onPress={handleUsersPress}
                  >
                    <UsersIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconCircle}
                    onPress={handleSettingsPress}
                  >
                    <SettingsIcon />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.headerBottomRow}>
                <View style={styles.avatarCircle}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop",
                    }}
                    style={styles.profile}
                  />
                </View>
                <View style={styles.headerText}>
                  <Text style={styles.title}>Sushìs City</Text>
                  <Text style={styles.subText}>
                    {members} Members • Community
                  </Text>
                </View>
              </View>
            </View>

            {/* CHAT SPACE – HEADER + FIXED BUTTONS BELOW */}
            <View style={styles.channelCard}>
              <TouchableOpacity
                style={styles.channelHeader}
                activeOpacity={0.9}
                onLongPress={openPress_Space_Creation_Flow}
                delayLongPress={300}
              >
                <Text style={styles.channelHeaderText}>Chat Space</Text>
                <TouchableOpacity onPress={handleChatSpaceMenuPress}>
                  <ChevronDownIcon />
                </TouchableOpacity>
              </TouchableOpacity>

              <View style={styles.channelList}>
                <TouchableOpacity
                  style={[
                    styles.channelItem,
                    activeChatChannel === "general" &&
                      styles.channelItemActive,
                  ]}
                  onPress={() => handleChannelPress("general")}
                >
                  {activeChatChannel === "general" && (
                    <View style={styles.activeBar} />
                  )}
                  <View style={styles.channelInner}>
                    <HashIcon />
                    <Text style={styles.channelText}>general</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.channelItem,
                    activeChatChannel === "announcement" &&
                      styles.channelItemActive,
                  ]}
                  onPress={() => handleChannelPress("announcement")}
                >
                  {activeChatChannel === "announcement" && (
                    <View style={styles.activeBar} />
                  )}
                  <View style={styles.channelInner}>
                    <ZapIcon />
                    <Text style={styles.channelText}>announcement</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* VOICE SPACE */}
            <View style={styles.channelCard}>
              <TouchableOpacity
                style={styles.channelHeader}
                activeOpacity={0.9}
                onPress={() => setVoiceSpaceExpanded(!voiceSpaceExpanded)}
                onLongPress={openPress_Space_Creation_Flow}
                delayLongPress={300}
              >
                <Text style={styles.channelHeaderText}>Voice Space</Text>
                {voiceSpaceExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </TouchableOpacity>

              {voiceSpaceExpanded && (
                <View style={styles.channelList}>
                  {voiceChannels.map((name, index) => {
                    const isActive = activeVoiceChannel === name;
                    return (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.channelItem,
                          isActive && styles.channelItemActive,
                        ]}
                        onPress={() => handleChannelPress(name, true)}
                      >
                        {isActive && <View style={styles.activeBar} />}
                        <View style={styles.channelInner}>
                          <MicIcon />
                          <Text
                            style={[
                              styles.channelText,
                              isActive && styles.activeChannelText,
                            ]}
                          >
                            {name}
                          </Text>
                        </View>
                        {isActive && (
                          <View style={styles.activeIndicator}>
                            <Text style={styles.activeDot}>●</Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        {/* 👇 bottomNav काढलं – Footer component आता दिसेल */}
      </View>

      {/* CREATE CHANNEL MODAL */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Channel</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter channel name"
              placeholderTextColor="#7b8ca8"
              value={newChannelName}
              onChangeText={setNewChannelName}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.createButton]}
                onPress={handleCreateChannel}
              >
                <Text style={styles.createButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#020817",
    flexDirection: "row",
  },

  // LEFT NAV
  leftNav: {
    position: "absolute",
    left: 0,
    top: 80,
    width: 70,
    alignItems: "center",
    zIndex: 20,
  },
  sideBtn: {
    width: 52,
    height: 52,
    backgroundColor: "#061023",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  sideBtnBlue: {
    width: 52,
    height: 52,
    backgroundColor: "#246BFD",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  avatarBtn: {
    width: 52,
    height: 52,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#246BFD",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 16,
    fontWeight: "600",
  },

  // MAIN AREA
  container: {
    flex: 1,
    paddingLeft: 80,
  },

  mainCard: {
    backgroundColor: "#050F23",
    marginTop: 40,
    marginRight: 16,
    marginBottom: 20,
    borderRadius: 32,
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 26,
  },

  // HEADER CARD
  headerCard: {
    backgroundColor: "#050F23",
    borderRadius: 32,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 24,
    marginBottom: 22,
    borderBottomWidth: 1.5,
    borderColor: "#1D4ED8",
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  headerBottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#22C55E",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    marginLeft: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  subText: {
    color: "#A5B4CC",
    marginTop: 4,
    fontSize: 13,
  },

  actionBtns: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#246BFD",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  // CHANNEL CARD (Chat / Voice)
  channelCard: {
    marginTop: 22,
  },
  channelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#08172f",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  channelHeaderText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ffffff",
  },

  channelList: {
    marginTop: 8,
  },

  channelItem: {
    borderRadius: 18,
    marginBottom: 8,
    overflow: "hidden",
    backgroundColor: "#08172f",
  },
  channelItemActive: {
    backgroundColor: "#0a1a36",
  },
  channelInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  channelText: {
    color: "#cbd5e1",
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "500",
  },
  activeChannelText: {
    color: "#6edaff",
    fontWeight: "600",
  },
  activeBar: {
    position: "absolute",
    left: 0,
    top: 6,
    bottom: 6,
    width: 3,
    borderRadius: 999,
    backgroundColor: "#246BFD",
  },

  activeIndicator: {
    marginLeft: "auto",
    paddingRight: 16,
  },
  activeDot: {
    color: "#6edaff",
    fontSize: 14,
    fontWeight: "bold",
  },

  // (bottomNav styles kept but unused)
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 82,
    backgroundColor: "#050C1C",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#0f1a2e",
    borderTopWidth: 1,
    paddingBottom: 12,
  },
  navBtn: {
    alignItems: "center",
    paddingTop: 8,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },

  // MODAL
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContent: {
    backgroundColor: "#0b152b",
    padding: 25,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "#08172f",
    width: "100%",
    padding: 15,
    borderRadius: 12,
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    minWidth: 100,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#08172f",
  },
  createButton: {
    backgroundColor: "#246BFD",
  },
  cancelButtonText: {
    color: "#7b8ca8",
    fontWeight: "600",
  },
  createButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

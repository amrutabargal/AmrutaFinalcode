
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path, Circle } from "react-native-svg";

// --- Dummy data ---
const MESSAGES = [
  {
    id: "1",
    name: "Perfecto",
    you: true,
    message: "You: https://discord.gg/KH3gsJKCD",
    time: "2d",
    isHighlighted: true,
    avatarColor: "#326BFF",
  },
  {
    id: "2",
    name: "Perfecto",
    message: "perfecto: https://discord.gg/KH3gsJKCD",
    time: "2d",
    avatarColor: "#37C8FF",
  },
  {
    id: "3",
    name: "Perfecto",
    message: "perfecto: https://discord.gg/KH3gsJKCD",
    time: "2d",
    avatarColor: "#00E37D",
  },
  {
    id: "4",
    name: "Perfecto",
    message: "perfecto: https://discord.gg/KH3gsJKCD",
    time: "4d",
    avatarColor: "#FF37EC",
  },
  {
    id: "5",
    name: "Perfecto",
    message: "perfecto: https://discord.gg/KH3gsJKCD",
    time: "12d",
    avatarColor: "#37F0FF",
  },
  {
    id: "6",
    name: "Perfecto",
    message: "perfecto: https://discord.gg/KH3gsJKCD",
    time: "12d",
    avatarColor: "#FF7F37",
  },
  {
    id: "7",
    name: "Perfecto",
    message: "perfecto: https://discord.gg/KH3gsJKCD",
    time: "12d",
    avatarColor: "#2F2F2F",
  },
];

// -------- SMALL SVG ICONS (header) --------
const PeopleIcon = ({ size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0 1.5c-2.33 0-7 1.17-7 3.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.99c0-2.33-4.67-3.51-7-3.51z"
      fill="#FFFFFF"
    />
  </Svg>
);

const MoreIcon = ({ size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx="5" cy="12" r="1.5" fill="#FFFFFF" />
    <Circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
    <Circle cx="19" cy="12" r="1.5" fill="#FFFFFF" />
  </Svg>
);

const SearchIcon = ({ size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L18.5 20 20 18.5 15.5 14zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
      fill="#64748B"
    />
  </Svg>
);

// -------- CELL COMPONENT --------
const MessageItem = ({ item, onPress }) => {
  if (item.isHighlighted) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <LinearGradient
          colors={["#3B82F6", "#22C1C3", "#8B5CF6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.highlightWrapper}
        >
          <View style={styles.highlightInner}>
            <View
              style={[styles.avatar, { backgroundColor: item.avatarColor }]}
            >
              <Text style={styles.avatarText}>P</Text>
            </View>
            <View style={styles.messageTextContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.messageText}>
                {item.message}
              </Text>
            </View>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.messageRow}>
        <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
          <Text style={styles.avatarText}>P</Text>
        </View>
        <View style={styles.messageTextContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.messageSubText}>
            {item.message}
          </Text>
        </View>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

// ---------- MAIN SCREEN ----------
function ChatChannelInner({ navigation }) {
  const handleOpenChat = (item) => {
    navigation.navigate("Channel", {
      contact: item,
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Messages</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>15</Text>
          </View>
        </View>

        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerIconButton}>
            <PeopleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <MoreIcon />
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <SearchIcon />
          <TextInput
            placeholder="Search nexus, friends, messages..."
            placeholderTextColor="#64748B"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageItem item={item} onPress={() => handleOpenChat(item)} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default function ChatChannelScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  // Android साठी fallback – जर insets.top = 0 असेल तर StatusBar height वापर
  const androidTopPad =
    Platform.OS === "android" && insets.top === 0
      ? (StatusBar.currentHeight || 0) + 4
      : 0;

  return (
    <View style={[styles.root, { paddingTop: androidTopPad }]}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView
        style={styles.safe}
        edges={["top", "left", "right", "bottom"]}
      >
        <ChatChannelInner navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}

// ------------- STYLES -------------
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#020617",
  },
  safe: {
    flex: 1,
    backgroundColor: "#020617",
  },
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  // HEADER
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  badge: {
    marginLeft: 8,
    minWidth: 20,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  headerButtons: {
    flexDirection: "row",
  },
  headerIconButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020617",
    marginLeft: 10,
  },

  // SEARCH
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#020617",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#1E293B",
    paddingHorizontal: 14,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#E2E8F0",
    paddingVertical: 0,
    fontSize: 14,
  },
  filterText: {
    marginLeft: 12,
    color: "#64748B",
    fontSize: 13,
  },

  // LIST
  listContent: {
    paddingBottom: Platform.OS === "ios" ? 32 : 20,
  },
  highlightWrapper: {
    borderRadius: 18,
    padding: 1.5,
    marginBottom: 10,
  },
  highlightInner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#020617",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
  messageTextContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  nameText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  messageText: {
    color: "#E2E8F0",
    fontSize: 12,
    marginTop: 2,
  },
  messageSubText: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 2,
  },
  timeText: {
    color: "#64748B",
    fontSize: 12,
  },
});


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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

export default function V23({ navigation }) {
  const [spaceName, setSpaceName] = useState("# General");

  const [joinMessage, setJoinMessage] = useState(true);
  const [sendMessageVoice, setSendMessageVoice] = useState(true);

  const [showJoinLeave, setShowJoinLeave] = useState(true);
  const [showRoleChanges, setShowRoleChanges] = useState(true);
  const [showUsernameChanges, setShowUsernameChanges] = useState(true);

  const handleBack = () => {
    if (navigation?.goBack) navigation.goBack();
  };

  const handleSave = () => {
    // TODO: save logic
    console.log("Saved");
  };

  const handleReset = () => {
    // TODO: reset logic
    console.log("Reset to default");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Fake status bar */}
      <View style={styles.fakeStatusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.fakeStatusIcons}>
          <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
          <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
          <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Spaces</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Manage spaces in this Nexus</Text>

        {/* Space name input */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Spaces name</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={spaceName}
              onChangeText={setSpaceName}
              placeholder="# General"
              placeholderTextColor="rgba(255,255,255,0.5)"
              style={styles.input}
            />
          </View>
          <Text style={styles.helperText}>
            Controls who can do what inside this specific space.
          </Text>
        </View>

        {/* Inactive Settings */}
        <SectionCard title="Inactive Settings">
          <SettingRow
            label="Inactive Space"
            value="No Inactive Space"
            onPress={() => {}}
          />
          <SettingRow
            label="Timeout"
            value="5 minutes"
            onPress={() => {}}
            isLast
          />
        </SectionCard>

        {/* System & Community Signals */}
        <SectionCard title="System & Community Signals">
          <SettingRow
            label="System Space"
            value="General"
            onPress={() => {}}
          />
          <SettingSwitchRow
            label="Join Message"
            value={joinMessage}
            onValueChange={setJoinMessage}
            isLast
          />
        </SectionCard>

        {/* Single toggle card */}
        <SingleSwitchCard
          label="Send Message / Send Voice Notes"
          value={sendMessageVoice}
          onValueChange={setSendMessageVoice}
        />

        {/* List of single-option cards */}
        <SingleSelectCard
          label="Send Attachments & Media"
          value="None"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Thread Creation"
          value="Everyone"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Slow Mode Override"
          value="Off"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Mention Level"
          value="No mentions"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Pin Message"
          value="Allow pin"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Ghost Mode Reading"
          value="On"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Space-Specific Idents"
          value="On"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Auto-message Deletion Timer"
          value="1 Hour"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Content Filter"
          value="Normal"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Invite Permission"
          value="On"
          onPress={() => {}}
        />
        <SingleSelectCard
          label="Reactions & Emoji Access"
          value="Anyone"
          onPress={() => {}}
        />

        {/* Member Visibility & History */}
        <SectionCard title="Member Visibility & History">
          <SettingSwitchRow
            label="Show join/leave events"
            value={showJoinLeave}
            onValueChange={setShowJoinLeave}
          />
          <SettingSwitchRow
            label="Show role changes"
            value={showRoleChanges}
            onValueChange={setShowRoleChanges}
          />
          <SettingSwitchRow
            label="Show username changes"
            value={showUsernameChanges}
            onValueChange={setShowUsernameChanges}
            isLast
          />
        </SectionCard>
        <Text style={styles.footnoteText}>Changes apply only to this Nexus.</Text>

        {/* Delete */}
        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Ionicons name="trash-outline" size={18} color="#FFD3D3" />
          <Text style={styles.deleteText}>Delete Nexus</Text>
        </TouchableOpacity>

        {/* Save */}
        <TouchableOpacity
          style={styles.saveButtonWrapper}
          activeOpacity={0.9}
          onPress={handleSave}
        >
          <LinearGradient
            colors={["#355DFF", "#7F5DFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.saveGradient}
          >
            <Text style={styles.saveText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleReset} activeOpacity={0.7}>
          <Text style={styles.resetText}>Reset to Default</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

/* ---------- Small components ---------- */

function SectionCard({ title, children }) {
  return (
    <View style={styles.sectionCardContainer}>
      <View style={styles.sectionTabLabel}>
        <Text style={styles.sectionTabLabelText}>{title}</Text>
      </View>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function SettingRow({ label, value, onPress, isLast }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.settingRow,
        !isLast && styles.settingRowBorder,
      ]}
    >
      <Text style={styles.settingLabel}>{label}</Text>
      <View style={styles.settingRight}>
        <Text style={styles.settingValue}>{value}</Text>
        <Ionicons name="chevron-forward" size={14} color="#9FB4FF" />
      </View>
    </TouchableOpacity>
  );
}

function SettingSwitchRow({ label, value, onValueChange, isLast }) {
  return (
    <View
      style={[
        styles.settingRow,
        !isLast && styles.settingRowBorder,
      ]}
    >
      <Text style={styles.settingLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={value ? "#1BFFFF" : "#ffffff"}
        trackColor={{ false: "#122347", true: "#2340A0" }}
      />
    </View>
  );
}

function SingleSwitchCard({ label, value, onValueChange }) {
  return (
    <View style={styles.singleCard}>
      <View style={styles.singleRow}>
        <Text style={styles.settingLabel}>{label}</Text>
        <Switch
          value={value}
          onValueChange={onValueChange}
          thumbColor={value ? "#1BFFFF" : "#ffffff"}
          trackColor={{ false: "#122347", true: "#2340A0" }}
        />
      </View>
    </View>
  );
}

function SingleSelectCard({ label, value, onPress }) {
  return (
    <TouchableOpacity
      style={styles.singleCard}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.singleRow}>
        <Text style={styles.settingLabel}>{label}</Text>
        <View style={styles.settingRight}>
          <Text style={styles.settingValue}>{value}</Text>
          <Ionicons name="chevron-forward" size={14} color="#9FB4FF" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

/* ---------- Styles ---------- */

const CARD_RADIUS = 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020821",
  },

  fakeStatusBar: {
    marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
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

  scrollContent: {
    paddingBottom: 32,
    paddingHorizontal: 18,
  },

  headerRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 6,
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },

  section: {
    marginTop: 20,
  },
  sectionLabel: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginBottom: 8,
  },
  inputWrapper: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2849D8",
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#071234",
  },
  input: {
    color: "#ffffff",
    fontSize: 14,
  },
  helperText: {
    marginTop: 8,
    fontSize: 11,
    color: "rgba(255,255,255,0.6)",
  },

  sectionCardContainer: {
    marginTop: 20,
  },
  sectionTabLabel: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#071739",
    marginLeft: 10,
    zIndex: 2,
  },
  sectionTabLabelText: {
    color: "#9FB4FF",
    fontSize: 11,
    fontWeight: "500",
  },

  card: {
    marginTop: -6,
    borderRadius: CARD_RADIUS,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#132652",
    overflow: "hidden",
  },

  settingRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingRowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },
  settingLabel: {
    color: "#ffffff",
    fontSize: 13,
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    color: "#9FB4FF",
    fontSize: 12,
    marginRight: 6,
  },

  singleCard: {
    marginTop: 14,
    borderRadius: CARD_RADIUS,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#132652",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  singleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  footnoteText: {
    marginTop: 6,
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
  },

  deleteButton: {
    marginTop: 24,
    borderRadius: CARD_RADIUS,
    backgroundColor: "#2A0C16",
    borderWidth: 1,
    borderColor: "#FF4B5C",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#FFD3D3",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 8,
  },

  saveButtonWrapper: {
    marginTop: 18,
    borderRadius: CARD_RADIUS,
    overflow: "hidden",
  },
  saveGradient: {
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  resetText: {
    marginTop: 10,
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
  },
});

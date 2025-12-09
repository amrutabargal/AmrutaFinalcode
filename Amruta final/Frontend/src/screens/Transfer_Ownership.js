// TransferOwnershipScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function TransferOwnershipScreen({ navigation }) {
  // toggles and state
  const [confirmToggle, setConfirmToggle] = useState(false);

  // sample avatar sources - replace with your assets
  const topAvatar = null; // require('../../assets/topAvatar.png')
  const bottomAvatar = null; // require('../../assets/bottomAvatar.png')
  const bottomName = "Shusshi Clean Nexus";
  const targetName = "7SUIL_Notashah15";

  const handleTransfer = () => {
    if (!confirmToggle) {
      // optionally show toast / disabled
      return;
    }
    // perform transfer logic here (API call)
    console.log("Transfer ownership to:", targetName);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* Top header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack?.()}>
            <Ionicons name="close" size={22} color="#CFE0FF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Transfer Ownership</Text>
          <View style={{ width: 44 }} />
        </View>

        {/* Avatars stack */}
        <View style={styles.avatarsWrap}>
          <View style={styles.avatarTop}>
            {topAvatar ? (
              <Image source={topAvatar} style={styles.avatarImg} />
            ) : (
              <View style={[styles.avatarImg, styles.avatarPlaceholder]}>
                <Text style={styles.avatarInitial}>A</Text>
              </View>
            )}
          </View>

          {/* dotted connector */}
          <View style={styles.connectorWrap}>
            <View style={styles.dotsCol}>
              {Array.from({ length: 6 }).map((_, i) => (
                <View key={i} style={styles.dot} />
              ))}
            </View>
          </View>

          <View style={styles.avatarBottom}>
            {bottomAvatar ? (
              <Image source={bottomAvatar} style={styles.avatarImg} />
            ) : (
              <View style={[styles.avatarImg, styles.avatarPlaceholderBottom]}>
                <Text style={styles.avatarInitialBottom}>{bottomName.split(" ")[0][0]}</Text>
              </View>
            )}
            <Text style={styles.avatarLabel}>{bottomName}</Text>
          </View>
        </View>

        {/* explanatory text */}
        <View style={styles.explainWrap}>
          <Text style={styles.explainPrimary}>
            This will transfer ownership of <Text style={styles.boldText}>{bottomName}</Text> to{" "}
            <Text style={styles.boldText}>{targetName}</Text>. This cannot be undone!
          </Text>
        </View>

        {/* bordered card with toggle */}
        <View style={styles.cardWrap}>
          <View style={styles.cardInner}>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>
                I acknowledge that by transferring ownership of this nexus I transfer control to{" "}
                <Text style={styles.boldText}>{targetName}</Text>.
              </Text>
            </View>

            <View style={styles.cardRowBottom}>
              <Text style={styles.cardSmall}>Transfer Ownership</Text>
              <ToggleSwitch value={confirmToggle} onChange={setConfirmToggle} />
            </View>
          </View>
        </View>

        {/* primary button */}
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleTransfer}
            disabled={!confirmToggle}
          >
            <LinearGradient
              colors={confirmToggle ? ["#2D57C8", "#316BFF"] : ["#16263D", "#16263D"]}
              start={[0, 0]}
              end={[1, 1]}
              style={[styles.primaryBtn, !confirmToggle && styles.primaryBtnDisabled]}
            >
              <Text style={styles.primaryBtnText}>Transfer Ownership</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* small confirmation pill below button */}
          <View style={styles.pill}>
            <Text style={styles.pillText}>339 Hug × 152 Hug</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* small toggle component that matches circular gradient knob */
function ToggleSwitch({ value = false, onChange = () => {} }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onChange(!value)}
      style={[toggleStyles.track, value ? toggleStyles.trackOn : toggleStyles.trackOff]}
    >
      <View style={[toggleStyles.knob, value ? toggleStyles.knobOn : toggleStyles.knobOff]} />
    </TouchableOpacity>
  );
}

/* ---------------- styles ---------------- */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#050B18" },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBtn: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  headerTitle: { color: "#E6EEFF", fontSize: 16, fontWeight: "700" },

  avatarsWrap: {
    marginTop: 8,
    alignItems: "center",
  },
  avatarTop: {
    alignItems: "center",
  },
  avatarBottom: {
    marginTop: 6,
    alignItems: "center",
  },

  avatarImg: {
    width: 84,
    height: 84,
    borderRadius: 84 / 2,
  },
  avatarPlaceholder: {
    backgroundColor: "#8EEBD8", // mint circle as in image
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: {
    color: "#08303A",
    fontWeight: "800",
    fontSize: 36,
  },
  avatarPlaceholderBottom: {
    backgroundColor: "#FFB6C7", // pink
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitialBottom: {
    color: "#3A1B16",
    fontWeight: "700",
    fontSize: 36,
  },
  avatarLabel: {
    marginTop: 8,
    color: "#CFE0FF",
    fontSize: 13,
    fontWeight: "600",
  },

  connectorWrap: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  dotsCol: {
    width: 2,
    alignItems: "center",
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "rgba(207,224,255,0.22)",
    marginVertical: 4,
  },

  explainWrap: {
    marginTop: 10,
    paddingHorizontal: 6,
  },
  explainPrimary: {
    color: "rgba(207,224,255,0.72)",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  boldText: { color: "#E6EEFF", fontWeight: "700" },

  cardWrap: {
    marginTop: 18,
    paddingHorizontal: 6,
  },
  cardInner: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(45,87,200,0.18)",
    backgroundColor: "rgba(7,17,38,0.6)",
    padding: 12,
    // subtle inner glow / shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  cardRow: {
    paddingBottom: 10,
  },
  cardLabel: {
    color: "rgba(207,224,255,0.74)",
    fontSize: 12,
    lineHeight: 18,
  },
  cardRowBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  cardSmall: {
    color: "#CFE0FF",
    fontWeight: "700",
    fontSize: 13,
  },

  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  primaryBtn: {
    width: width * 0.68,
    height: 48,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    // floating shadow
    shadowColor: "#316BFF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 10,
  },
  primaryBtnDisabled: {
    opacity: 0.78,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  pill: {
    marginTop: 12,
    backgroundColor: "#0E3C77",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2D78FF",
  },
  pillText: {
    color: "#BFE1FF",
    fontWeight: "700",
    fontSize: 13,
  },
});

/* toggle styles */
const toggleStyles = StyleSheet.create({
  track: {
    width: 52,
    height: 28,
    borderRadius: 20,
    padding: 3,
    justifyContent: "center",
  },
  trackOff: {
    backgroundColor: "rgba(255,255,255,0.06)",
    alignItems: "flex-start",
  },
  trackOn: {
    backgroundColor: "linear-gradient(90deg, #6B5BFF, #316BFF)", // not used on RN; kept for visual note
    backgroundColor: "#5F52F8",
    alignItems: "flex-end",
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: Platform.OS === "android" ? 4 : 0,
  },
  knobOn: {},
  knobOff: {},
});

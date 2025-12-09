// src/screens/Violent_or_harmful_behavior.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OPTIONS = [
  "Terrorism",
  "Human trafficking",
  "Violent or graphic content",
  "Organized crime",
];

// label → screen name map
const OPTION_SCREEN_MAP = {
  "Terrorism": "Terrorism",
  "Human trafficking": "Human_trafficking",
  "Violent or graphic content": "Violent_or_graphic_content",
  "Organized crime": "Organized_crime",
};

export default function Violent_or_harmful_behavior({ navigation, route }) {
  const message = route?.params?.message;

  const handleSelect = (option) => {
    const targetScreen = OPTION_SCREEN_MAP[option];
    console.log("REPORT (violence category):", {
      messageId: message?.id,
      option,
      targetScreen,
    });

    if (targetScreen) {
      // पुढचा detail screen उघड
      navigation.navigate(targetScreen, {
        message,
        option,
      });
    }
  };

  return (
    <View style={styles.root}>
      {/* background overlay (tap outside = close) */}
      <Pressable style={styles.overlay} onPress={() => navigation.goBack()} />

      {/* bottom card + SafeArea */}
      <SafeAreaView style={styles.sheet}>
        {/* handle bar */}
        <View style={styles.handle} />

        {/* header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Ionicons name="flag" size={16} color="#F97373" />
            <Text style={styles.headerTitle}>Report</Text>
          </View>

          <View style={{ width: 22 }} />
        </View>

        {/* top divider */}
        <View style={styles.divider} />

        {/* title + subtitle */}
        <Text style={styles.title}>Which best describes this problem?</Text>
        <Text style={styles.subtitle}>
          You can report this chat to ballastra if you think that it goes
          against our Community Standards. We won’t notify the account that you
          submitted this report.
        </Text>

        {/* middle divider */}
        <View style={[styles.divider, { marginTop: 10, marginBottom: 6 }]} />

        {/* options list */}
        <View style={styles.listWrapper}>
          {OPTIONS.map((label, idx) => (
            <TouchableOpacity
              key={label}
              style={[
                styles.row,
                idx === OPTIONS.length - 1 && { borderBottomWidth: 0 },
              ]}
              activeOpacity={0.7}
              onPress={() => handleSelect(label)}
            >
              <Text style={styles.rowText}>{label}</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#6B7280"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15,23,42,0.55)",
  },
  sheet: {
    marginHorizontal: 12,
    marginVertical: 26,
    borderRadius: 24,
    backgroundColor: "#020617",
    paddingTop: 6,
    paddingHorizontal: 18,
    paddingBottom: 24,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
  },
  handle: {
    alignSelf: "center",
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#4B5563",
    marginBottom: 12,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    marginLeft: 6,
    color: "#F97373",
    fontSize: 18,
    fontWeight: "600",
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#111827",
    marginBottom: 10,
  },

  title: {
    color: "#F9FAFB",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    color: "#9CA3AF",
    fontSize: 12,
  },

  listWrapper: {
    marginTop: 4,
    borderRadius: 18,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#111827",
  },
  rowText: {
    flex: 1,
    color: "#E5E7EB",
    fontSize: 14,
  },
});

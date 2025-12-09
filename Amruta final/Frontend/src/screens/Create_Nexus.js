
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
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

// Responsive scaling
const scale = (size = 20) => (width / 375) * size; // iPhone 11 base width
const verticalScale = (size) => (height / 812) * size; // iPhone 11 base height
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default function Create_Nexus({ navigation }) {
  const CARDS = [
    {
      id: 1,
      title: "Gaming",
      icon: "gamepad-variant",
      iconColor: "#00D9FF",
      bgColor: "rgba(0, 217, 255, 0.15)",
    },
    {
      id: 2,
      title: "School",
      icon: "view-grid",
      iconColor: "#A855F7",
      bgColor: "rgba(168, 85, 247, 0.15)",
    },
    {
      id: 3,
      title: "Study Group",
      icon: "bookmark-multiple",
      iconColor: "#22D3EE",
      bgColor: "rgba(34, 211, 238, 0.15)",
    },
    {
      id: 4,
      title: "Friends",
      icon: "account-group",
      iconColor: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.15)",
    },
  ];

  const renderIcon = (item) => {
    return (
      <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={scale(32)}
          color={item.iconColor}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0C142A" />
      <View style={styles.container}>
        
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={scale(24)} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Create Your Nexus</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          A Nexus is your space. Build your world with chat,{"\n"}channels and vibes.
        </Text>

        {/* Create My Own Nexus */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("My_Own_Nexus")}
          activeOpacity={0.8}
        >
          <View style={styles.crownIcon}>
            <MaterialCommunityIcons name="crown" size={scale(20)} color="#fff" />
          </View>
          <Text style={styles.primaryButtonText}>Create My Own Nexus</Text>
        </TouchableOpacity>

        {/* ⭐ Only Cards Scroll ⭐ */}
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

        {/* Bottom Section */}
        <Text style={styles.bottomText}>Don't have a Nexus to join?</Text>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("NexusCommunity")}
        >
          <Text style={styles.exploreButtonText}>Explore Nexus</Text>
        </TouchableOpacity>

        <View style={{ height: verticalScale(20) }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#02081A",
  },

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
    fontWeight: "400",
  },

  primaryButton: {
    backgroundColor: "#3154BA4D",
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(22),
    borderRadius: moderateScale(14),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3255BA00",
  },

  crownIcon: {
    marginRight: scale(14),
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontWeight: "500",
  },

  /* ⭐ responsive scroll height ⭐ */
  cardsScrollView: {
    maxHeight: height * 0.48, // fits all screens
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

  iconContainer: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
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
    shadowColor: "#030B2466",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  exploreButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});

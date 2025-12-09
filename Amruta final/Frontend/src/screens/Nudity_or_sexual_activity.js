// // src/screens/Nudity_or_sexual_activity.js
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Pressable,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const REASONS = [
//   "Nudity or pornography",
//   "Sexual exploitation or solicitation",
//   "Threatening to share private images",
//   "Child nudity",
// ];

// export default function Nudity_or_sexual_activity({ navigation, route }) {
//   const message = route?.params?.message;
//   const [selectedReason, setSelectedReason] = useState(REASONS[0]);

//   const handleSubmit = () => {
//     console.log("REPORT (nudity flow):", {
//       messageId: message?.id,
//       reason: selectedReason,
//     });
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.root}>
//       {/* background overlay */}
//       <Pressable style={styles.overlay} onPress={() => navigation.goBack()} />

//       {/* main card */}
//       <SafeAreaView style={styles.sheet}>
//         {/* handle bar */}
//         <View style={styles.handle} />

//         {/* header */}
//         <View style={styles.headerRow}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
//           </TouchableOpacity>

//           <View style={styles.headerCenter}>
//             <Ionicons name="flag" size={16} color="#F97373" />
//             <Text style={styles.headerTitle}>Report</Text>
//           </View>

//           <View style={{ width: 22 }} />
//         </View>

//         {/* title + subtitle */}
//         <Text style={styles.title}>Which best describes this problem?</Text>
//         <Text style={styles.subtitle}>
//           Send recent messages from this conversation to ballastra for review.
//           If someone is in immediate danger, call the local emergency services.
//         </Text>

//         {/* options */}
//         <View style={styles.listWrapper}>
//           {REASONS.map((reason, index) => {
//             const selected = reason === selectedReason;
//             return (
//               <TouchableOpacity
//                 key={reason}
//                 style={[
//                   styles.row,
//                   index === REASONS.length - 1 && { borderBottomWidth: 0 },
//                 ]}
//                 activeOpacity={0.7}
//                 onPress={() => setSelectedReason(reason)}
//               >
//                 <Text style={styles.rowText}>{reason}</Text>
//                 <View style={styles.checkboxOuter}>
//                   {selected && <View style={styles.checkboxInner} />}
//                 </View>
//               </TouchableOpacity>
//             );
//           })}
//         </View>

//         {/* submit button */}
//         <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//           <Text style={styles.submitText}>Submit report</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "transparent",
//     justifyContent: "flex-end",
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(15,23,42,0.55)",
//   },
//   sheet: {
//     marginHorizontal: 12,
//     marginVertical: 26,
//     borderRadius: 24,
//     backgroundColor: "#020617",
//     paddingTop: 6,
//     paddingHorizontal: 18,
//     paddingBottom: 24,
//     elevation: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.45,
//     shadowOffset: { width: 0, height: 8 },
//     shadowRadius: 18,
//   },
//   handle: {
//     alignSelf: "center",
//     width: 42,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: "#4B5563",
//     marginBottom: 12,
//   },

//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 14,
//   },
//   headerCenter: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headerTitle: {
//     marginLeft: 6,
//     color: "#F97373",
//     fontSize: 18,
//     fontWeight: "600",
//   },

//   title: {
//     color: "#F9FAFB",
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 6,
//   },
//   subtitle: {
//     color: "#9CA3AF",
//     fontSize: 12,
//     marginBottom: 16,
//   },

//   listWrapper: {
//     borderRadius: 18,
//     overflow: "hidden",
//     borderTopWidth: StyleSheet.hairlineWidth,
//     borderTopColor: "#111827",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: "#111827",
//   },
//   rowText: {
//     flex: 1,
//     color: "#E5E7EB",
//     fontSize: 14,
//   },

//   checkboxOuter: {
//     width: 22,
//     height: 22,
//     borderRadius: 6,
//     borderWidth: 1.5,
//     borderColor: "#6366F1",
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: 14,
//   },
//   checkboxInner: {
//     width: 13,
//     height: 13,
//     borderRadius: 4,
//     backgroundColor: "#6366F1",
//   },

//   submitBtn: {
//     marginTop: 24,
//     alignSelf: "center",
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 999,
//     backgroundColor: "#2563EB",
//   },
//   submitText: {
//     color: "#F9FAFB",
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });
// src/screens/Nudity_or_sexual_activity.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const REASONS = [
  "Nudity or pornography",
  "Sexual exploitation or solicitation",
  "Threatening to share private images",
  "Child nudity",
];

export default function Nudity_or_sexual_activity({ navigation, route }) {
  const message = route?.params?.message;
  const [selectedReason, setSelectedReason] = useState(REASONS[0]);

  const handleSubmit = () => {
    console.log("REPORT (nudity flow):", {
      messageId: message?.id,
      reason: selectedReason,
    });

    // Navigate to Done screen after submitting
    navigation.navigate("Done", {
      messageId: message?.id,
      reason: selectedReason,
    });
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#06112A" />

      {/* Background Overlay */}
      <Pressable style={styles.overlay} onPress={() => navigation.goBack()} />

      {/* Main Card */}
      <SafeAreaView style={styles.sheet}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Ionicons name="flag" size={16} color="red" />
            <Text style={styles.headerTitle}> Report</Text>
          </View>

          <View style={{ width: 24 }} />
        </View>

        <View style={styles.divider} />

        {/* Title + Description */}
        <Text style={styles.title}>Which best describes this problem?</Text>
        <Text style={styles.subtitle}>
          Send recent messages from this conversation to ballastra for review.
          If someone is in immediate danger, call the local emergency services.
        </Text>

        {/* Options */}
        <View style={styles.listWrapper}>
          {REASONS.map((reason, index) => {
            const selected = reason === selectedReason;
            return (
              <TouchableOpacity
                key={reason}
                style={[
                  styles.row,
                  index === REASONS.length - 1 && { borderBottomWidth: 0 },
                ]}
                activeOpacity={0.8}
                onPress={() => setSelectedReason(reason)}
              >
                <Text style={styles.rowText}>{reason}</Text>

                <View
                  style={[
                    styles.checkboxOuter,
                    selected && styles.checkboxSelected,
                  ]}
                >
                  {selected && (
                    <Ionicons name="checkmark" size={14} color="#00C2FF" />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Submit Button */}
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit report</Text>
          </TouchableOpacity>
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
    backgroundColor: "rgba(10, 20, 40, 0.65)",
  },

  sheet: {
    width: "92%",
    alignSelf: "center",
    backgroundColor: "#06112A",
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 22,
    marginBottom: Platform.OS === "ios" ? 20 : 10,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    color: "red",
    fontSize: 15,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#1E335C",
    marginBottom: 14,
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },

  subtitle: {
    color: "#B6C2D3",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 16,
  },

  listWrapper: {
    marginTop: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1E335C",
  },

  rowText: {
    color: "#fff",
    fontSize: 14,
    flex: 1,
  },

  checkboxOuter: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.4,
    borderColor: "#2E5BFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  checkboxSelected: {
    backgroundColor: "rgba(46, 91, 255, 0.15)",
  },

  buttonWrap: {
    alignItems: "center",
    marginTop: 24,
  },

  submitBtn: {
    width: width * 0.55,
    height: 44,
    backgroundColor: "#2E5BFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  submitText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

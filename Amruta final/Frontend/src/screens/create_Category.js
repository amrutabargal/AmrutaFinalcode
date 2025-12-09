// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// export default function StartCategoryScreen({ navigation }) {
//   const [categoryName, setCategoryName] = useState("new-space");
//   const [isPrivate, setIsPrivate] = useState(true);

//   const handleClose = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   const handleTogglePrivate = () => {
//     setIsPrivate((prev) => !prev);
//   };

//   const handleCreate = () => {
//     Alert.alert(
//       "Create Category",
//       `Name: ${categoryName || "(empty)"}\nPrivate: ${
//         isPrivate ? "Yes" : "No"
//       }`
//     );
//   };

//   const handleLearnMore = () => {
//     Alert.alert("Space Modes", "Open Space Modes info (demo).");
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Fake status bar row */}
//       <View style={styles.fakeStatusBar}>
//         <Text style={styles.timeText}>9:41</Text>
//         <View style={styles.fakeStatusIcons}>
//           <Ionicons
//             name="cellular"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="wifi"
//             size={16}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//           <Ionicons
//             name="battery-full"
//             size={20}
//             color="#ffffff"
//             style={styles.fakeIcon}
//           />
//         </View>
//       </View>

//       {/* Header */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
//           <Ionicons name="close" size={22} color="#ffffff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Start a Category</Text>
//         {/* right spacer */}
//         <View style={{ width: 22 }} />
//       </View>

//       <ScrollView
//         style={{ flex: 1 }}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Category name label */}
//         <Text style={styles.labelText}>Category name</Text>

//         {/* Rounded input */}
//         <View style={styles.inputWrapper}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter category name"
//             placeholderTextColor="#647199"
//             value={categoryName}
//             onChangeText={setCategoryName}
//           />
//         </View>

//         {/* Helper text */}
//         <Text style={styles.helperText}>
//           Private Spaces are visible only to people you choose. Everyone else
//           won’t see them at all.
//         </Text>

//         {/* Private Category card */}
//         <TouchableOpacity
//           style={styles.privateCard}
//           activeOpacity={0.85}
//           onPress={handleTogglePrivate}
//         >
//           <View style={styles.privateLeft}>
//             <View style={styles.privateIconWrapper}>
//               <Ionicons name="lock-closed-outline" size={18} color="#9FB4FF" />
//             </View>
//             <Text style={styles.privateTitle}>Private Category</Text>
//           </View>

//           {/* Custom pill toggle to look like screenshot */}
//           <View
//             style={[
//               styles.toggleOuter,
//               isPrivate && { backgroundColor: "#3154D3" },
//             ]}
//           >
//             <View
//               style={[
//                 styles.toggleInner,
//                 isPrivate ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" },
//               ]}
//             />
//           </View>
//         </TouchableOpacity>

//         {/* Learn more link */}
//         <TouchableOpacity
//           style={styles.learnMoreRow}
//           activeOpacity={0.7}
//           onPress={handleLearnMore}
//         >
//           <Text style={styles.learnMoreText}>Learn more about Space Modes</Text>
//           <Ionicons
//             name="arrow-forward"
//             size={14}
//             color="#9FB4FF"
//             style={{ marginLeft: 4 }}
//           />
//         </TouchableOpacity>

//         {/* Create button */}
//         <TouchableOpacity
//           style={styles.createButtonWrapper}
//           activeOpacity={0.85}
//           onPress={handleCreate}
//         >
//           <LinearGradient
//             colors={["#3255D0", "#1C2B5F"]}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={styles.createButton}
//           >
//             <Text style={styles.createButtonText}>Create</Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <View style={{ height: 40 }} />
//       </ScrollView>
//     </View>
//   );
// }

// const BG = "#020818";
// const CARD_BG = "#071736";
// const BORDER = "#2D57C8";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: BG,
//   },

//   // fake status bar at top
//   fakeStatusBar: {
//     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   timeText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   fakeStatusIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   fakeIcon: {
//     marginLeft: 6,
//   },

//   // header row
//   headerRow: {
//     marginTop: 14,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "600",
//   },

//   scrollContent: {
//     paddingHorizontal: 20,
//     paddingTop: 28,
//   },

//   labelText: {
//     color: "#9FB4FF",
//     fontSize: 13,
//     marginBottom: 8,
//   },

//   inputWrapper: {
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: BORDER,
//     backgroundColor: CARD_BG,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     marginBottom: 12,
//   },
//   textInput: {
//     color: "#ffffff",
//     fontSize: 14,
//     paddingVertical: 4,
//   },

//   helperText: {
//     color: "#6B789F",
//     fontSize: 12,
//     lineHeight: 18,
//     marginTop: 4,
//     marginBottom: 18,
//   },

//   privateCard: {
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: BORDER,
//     backgroundColor: CARD_BG,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 24,
//   },
//   privateLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   privateIconWrapper: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: "#0A1A3A",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//   },
//   privateTitle: {
//     color: "#ffffff",
//     fontSize: 14,
//     fontWeight: "500",
//   },

//   // custom toggle
//   toggleOuter: {
//     width: 44,
//     height: 24,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: "#3154D3",
//     backgroundColor: "#050B18",
//     paddingHorizontal: 3,
//     justifyContent: "center",
//   },
//   toggleInner: {
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     backgroundColor: "#ffffff",
//   },

//   learnMoreRow: {
//     alignSelf: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 32,
//   },
//   learnMoreText: {
//     color: "#9FB4FF",
//     fontSize: 12,
//   },

//   createButtonWrapper: {
//     alignItems: "center",
//   },
//   createButton: {
//     width: 170,
//     paddingVertical: 12,
//     borderRadius: 22,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   createButtonText: {
//     color: "#ffffff",
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Share_Nexus_Screen({ navigation }) {
  const [search, setSearch] = useState("");

  const USERS = [
    { id: 1, name: "! 7 SUII _Notashish15", avatar: "https://img.icons8.com/color/96/user-female-circle--v1.png" },
    { id: 2, name: "Lofi#8098", avatar: "https://img.icons8.com/color/96/guest-male--v1.png" },
    { id: 3, name: "Max gamer58858", avatar: "https://img.icons8.com/color/96/user-male-circle--v1.png" },
    { id: 4, name: "Gaming Piro Yug", avatar: "https://img.icons8.com/color/96/circled-user-female-skin-type-5--v1.png" },
    { id: 5, name: "SHERN!", avatar: "https://img.icons8.com/color/96/user-male--v1.png" },
  ];

  const filteredUsers = USERS.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Close button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
        <Icon name="x" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Share nexus link</Text>

      {/* Profile Avatar */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://img.icons8.com/3d-fluency/512/user-male-circle.png" }}
          style={styles.profileImg}
        />
        <Text style={styles.profileName}>Shusshi Clean</Text>
      </View>

      {/* Share Icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.shareIcon}>
          <Image source={{ uri: "https://img.icons8.com/color/96/whatsapp--v1.png" }} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareIcon}>
          <Icon name="link" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareIcon}>
          <Image source={{ uri: "https://img.icons8.com/color/96/sms.png" }} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareIcon}>
          <Image source={{ uri: "https://img.icons8.com/color/96/facebook-messenger--v1.png" }} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareIcon}>
          <Image source={{ uri: "https://img.icons8.com/color/96/facebook-new.png" }} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareIcon}>
          <Image source={{ uri: "https://img.icons8.com/fluency/96/new-post.png" }} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#9BA4C1" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search users..."
          placeholderTextColor="#8B96B2"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* User List */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.userRow}>
            <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
            <Text style={styles.userName}>{item.name}</Text>

            <TouchableOpacity style={styles.sentButton}>
              <Text style={styles.sentText}>Sent</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020A1A",
    padding: 20,
  },

  closeBtn: {
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginBottom: 10,
  },

  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  shareIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#081832",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 35,
    height: 35,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D1C35",
    height: 48,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 18,
  },

  searchInput: {
    color: "#fff",
    flex: 1,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 12,
  },

  userName: {
    color: "#fff",
    flex: 1,
    fontSize: 14,
  },

  sentButton: {
    backgroundColor: "#143C80",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  sentText: {
    color: "#B8C8EA",
    fontSize: 13,
    fontWeight: "600",
  },
});

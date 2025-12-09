// // import React, { useRef, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   StatusBar,
// //   Platform,
// //   ScrollView,
// //   TouchableOpacity,
// //   TextInput,
// //   Image,
// //   Alert,
// //   KeyboardAvoidingView,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import * as ImagePicker from "expo-image-picker";
// // import { LinearGradient } from "expo-linear-gradient";

// // export default function V27({ navigation }) {
// //   const [emojiUri, setEmojiUri] = useState<string | null>(null);
// //   const [emojiName, setEmojiName] = useState("Shusshi");
// //   const [isEditingName, setIsEditingName] = useState(false);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const nameInputRef = useRef<TextInput | null>(null);

// //   const handleBack = () => {
// //     if (navigation?.goBack) navigation.goBack();
// //   };

// //   // ----- Upload Emoji -----
// //   const handleUpload = async () => {
// //     try {
// //       const { status } =
// //         await ImagePicker.requestMediaLibraryPermissionsAsync();
// //       if (status !== "granted") {
// //         Alert.alert(
// //           "Permission needed",
// //           "Please allow access to your photos to upload emojis."
// //         );
// //         return;
// //       }

// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         allowsEditing: false,
// //         quality: 1,
// //       });

// //       if (result.canceled) return;

// //       const asset = result.assets[0];
// //       setEmojiUri(asset.uri);
// //       setIsEditingName(true);

// //       // थोडा delay देऊन keyboard सहित focus
// //       setTimeout(() => {
// //         nameInputRef.current?.focus();
// //       }, 100);
// //     } catch (e) {
// //       console.log("upload error", e);
// //       Alert.alert("Error", "Unable to upload emoji right now.");
// //     }
// //   };

// //   // ----- Preview -----
// //   const handlePreview = () => {
// //     if (!emojiUri) {
// //       Alert.alert("No emoji", "Please upload an emoji first.");
// //       return;
// //     }
// //     setShowPreview(true);
// //   };

// //   // ----- Update / Delete -----
// //   const handleUpdateNamePress = () => {
// //     if (!emojiUri) return;
// //     setIsEditingName(true);
// //     setTimeout(() => {
// //       nameInputRef.current?.focus();
// //     }, 100);
// //   };

// //   const handleDelete = () => {
// //     setEmojiUri(null);
// //     setEmojiName("Shusshi");
// //     setIsEditingName(false);
// //   };

// //   const handleSave = () => {
// //     if (!emojiUri) {
// //       Alert.alert("No emoji", "Upload an emoji before saving.");
// //       return;
// //     }
// //     console.log("Save emoji:", { emojiUri, emojiName });
// //     Alert.alert("Saved", "Emoji saved (demo).");
// //   };

// //   return (
// //     <KeyboardAvoidingView
// //       style={{ flex: 1 }}
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //     >
// //       <View style={styles.container}>
// //         <StatusBar barStyle="light-content" />

// //         {/* Fake status bar */}
// //         <View style={styles.fakeStatusBar}>
// //           <Text style={styles.timeText}>9:41</Text>
// //           <View style={styles.fakeStatusIcons}>
// //             <Ionicons
// //               name="cellular"
// //               size={16}
// //               color="#ffffff"
// //               style={styles.fakeIcon}
// //             />
// //             <Ionicons
// //               name="wifi"
// //               size={16}
// //               color="#ffffff"
// //               style={styles.fakeIcon}
// //             />
// //             <Ionicons
// //               name="battery-full"
// //               size={20}
// //               color="#ffffff"
// //               style={styles.fakeIcon}
// //             />
// //           </View>
// //         </View>

// //         <ScrollView
// //           style={{ flex: 1 }}
// //           contentContainerStyle={styles.scrollContent}
// //           keyboardShouldPersistTaps="handled"
// //           showsVerticalScrollIndicator={false}
// //         >
// //           {/* Header */}
// //           <View style={styles.headerRow}>
// //             <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// //               <Ionicons name="chevron-back" size={24} color="#ffffff" />
// //             </TouchableOpacity>
// //             <Text style={styles.headerTitle}>Emoji</Text>
// //             <View style={{ width: 24 }} />
// //           </View>

// //           {/* Upload + preview row */}
// //           <View style={styles.uploadRow}>
// //             <TouchableOpacity
// //               style={[
// //                 styles.uploadCircle,
// //                 emojiUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
// //               ]}
// //               onPress={handleUpload}
// //               activeOpacity={0.8}
// //             >
// //               {emojiUri ? (
// //                 <Image
// //                   source={{ uri: emojiUri }}
// //                   style={styles.uploadPreviewThumb}
// //                 />
// //               ) : (
// //                 <Ionicons name="add" size={30} color="#9FB4FF" />
// //               )}
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //               style={styles.previewButton}
// //               onPress={handlePreview}
// //               activeOpacity={0.7}
// //             >
// //               <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
// //               <Text style={styles.previewText}>Preview</Text>
// //             </TouchableOpacity>
// //           </View>

// //           <Text style={styles.uploadMainLabel}>Upload a File</Text>
// //           <Text style={styles.uploadSubLabel}>
// //             File should be png, jpg, png, or GIF{"\n"}
// //             <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
// //           </Text>

// //           {/* Limits & usage */}
// //           <View style={styles.section}>
// //             <View style={styles.sectionTitleRow}>
// //               <Text style={styles.sectionTitle}>Limits & Usage</Text>
// //               <Ionicons
// //                 name="information-circle-outline"
// //                 size={14}
// //                 color="#9FB4FF"
// //               />
// //             </View>
// //             <View style={styles.infoCard}>
// //               <Text style={styles.infoText}>
// //                 Add up to 50 custom emoji for all server members. Animated GIF
// //                 emoji are restricted to members with Discord Nitro.
// //               </Text>
// //             </View>
// //           </View>

// //           {/* Requirements */}
// //           <View style={styles.section}>
// //             <Text style={styles.sectionTitle}>Requirements</Text>
// //             <View style={styles.infoCard}>
// //               <Text style={styles.infoBullet}>
// //                 • File type: JPEG, PNG, GIF, WEBP, AVIF
// //               </Text>
// //               <Text style={styles.infoBullet}>
// //                 • Recommended file size: &lt; 256 KB (We’ll compress it for you)
// //               </Text>
// //               <Text style={styles.infoBullet}>
// //                 • Recommended dimensions: 128x128
// //               </Text>
// //               <Text style={styles.infoBullet}>
// //                 • Naming – Emoji names must be at least 2 characters long and
// //                 can only contain alphanumeric characters and underscores
// //               </Text>
// //             </View>
// //           </View>

// //           {/* Emoji chip + edit row */}
// //           {emojiUri && (
// //             <View style={styles.emojiChipWrapper}>
// //               <View style={styles.emojiChip}>
// //                 <Image
// //                   source={{ uri: emojiUri }}
// //                   style={styles.emojiChipImage}
// //                   resizeMode="cover"
// //                 />

// //                 {isEditingName ? (
// //                   <TextInput
// //                     ref={nameInputRef}
// //                     value={emojiName}
// //                     onChangeText={setEmojiName}
// //                     placeholder="Name"
// //                     placeholderTextColor="rgba(255,255,255,0.6)"
// //                     style={styles.emojiNameInput}
// //                     returnKeyType="done"
// //                     onSubmitEditing={() => setIsEditingName(false)}
// //                   />
// //                 ) : (
// //                   <Text style={styles.emojiNameText} numberOfLines={1}>
// //                     {emojiName}
// //                   </Text>
// //                 )}

// //                 {isEditingName && (
// //                   <TouchableOpacity
// //                     onPress={() => {
// //                       setEmojiName("");
// //                       nameInputRef.current?.focus();
// //                     }}
// //                     activeOpacity={0.7}
// //                   >
// //                     <Ionicons name="close" size={18} color="#ffffff" />
// //                   </TouchableOpacity>
// //                 )}
// //               </View>
// //             </View>
// //           )}

// //           {/* Bottom actions when emoji exists and not currently editing */}
// //           {emojiUri && !isEditingName && (
// //             <View style={styles.bottomButtonsWrapper}>
// //               <TouchableOpacity
// //                 style={[styles.bottomButton, styles.updateButton]}
// //                 activeOpacity={0.8}
// //                 onPress={handleUpdateNamePress}
// //               >
// //                 <Ionicons
// //                   name="create-outline"
// //                   size={18}
// //                   color="#9FB4FF"
// //                   style={{ marginRight: 8 }}
// //                 />
// //                 <Text style={styles.updateButtonText}>Update GIF Name</Text>
// //               </TouchableOpacity>

// //               <TouchableOpacity
// //                 style={[styles.bottomButton, styles.deleteButton]}
// //                 activeOpacity={0.8}
// //                 onPress={handleDelete}
// //               >
// //                 <Ionicons
// //                   name="trash-outline"
// //                   size={18}
// //                   color="#FFD3D3"
// //                   style={{ marginRight: 8 }}
// //                 />
// //                 <Text style={styles.deleteButtonText}>Delete GIF</Text>
// //               </TouchableOpacity>
// //             </View>
// //           )}

// //           {/* Save */}
// //           <TouchableOpacity
// //             style={styles.saveButtonWrapper}
// //             activeOpacity={0.9}
// //             onPress={handleSave}
// //           >
// //             <LinearGradient
// //               colors={["#355DFF", "#7F5DFF"]}
// //               start={{ x: 0, y: 0 }}
// //               end={{ x: 1, y: 1 }}
// //               style={styles.saveGradient}
// //             >
// //               <Text style={styles.saveText}>Save</Text>
// //             </LinearGradient>
// //           </TouchableOpacity>

// //           <View style={{ height: 40 }} />
// //         </ScrollView>

// //         {/* Preview overlay */}
// //         {showPreview && (
// //           <View style={styles.previewOverlay}>
// //             <View style={styles.previewCard}>
// //               <View style={styles.previewHeader}>
// //                 <Text style={styles.previewTitle}>Preview</Text>
// //                 <TouchableOpacity
// //                   onPress={() => setShowPreview(false)}
// //                   activeOpacity={0.7}
// //                 >
// //                   <Ionicons name="close" size={20} color="#ffffff" />
// //                 </TouchableOpacity>
// //               </View>

// //               <View style={styles.previewImageWrapper}>
// //                 {emojiUri ? (
// //                   <Image
// //                     source={{ uri: emojiUri }}
// //                     style={styles.previewImage}
// //                     resizeMode="cover"
// //                   />
// //                 ) : null}
// //               </View>
// //             </View>
// //           </View>
// //         )}
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // }

// // /* ---------- styles ---------- */

// // const CARD_RADIUS = 18;
// // const EMOJI_SIZE = 52;
// // const UPLOAD_SIZE = 90;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#020821",
// //   },

// //   fakeStatusBar: {
// //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// //     paddingHorizontal: 20,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   timeText: {
// //     color: "#ffffff",
// //     fontSize: 16,
// //     fontWeight: "600",
// //   },
// //   fakeStatusIcons: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   fakeIcon: {
// //     marginLeft: 6,
// //   },

// //   scrollContent: {
// //     paddingHorizontal: 18,
// //     paddingBottom: 32,
// //   },

// //   headerRow: {
// //     marginTop: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   headerTitle: {
// //     color: "#ffffff",
// //     fontSize: 18,
// //     fontWeight: "600",
// //   },

// //   uploadRow: {
// //     marginTop: 28,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   uploadCircle: {
// //     width: UPLOAD_SIZE,
// //     height: UPLOAD_SIZE,
// //     borderRadius: UPLOAD_SIZE / 2,
// //     borderWidth: 1,
// //     borderStyle: "dashed",
// //     borderColor: "#264BFF",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   uploadPreviewThumb: {
// //     width: UPLOAD_SIZE - 8,
// //     height: UPLOAD_SIZE - 8,
// //     borderRadius: (UPLOAD_SIZE - 8) / 2,
// //   },

// //   previewButton: {
// //     position: "absolute",
// //     right: 0,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   previewText: {
// //     marginLeft: 6,
// //     color: "#9FB4FF",
// //     fontSize: 12,
// //   },

// //   uploadMainLabel: {
// //     marginTop: 12,
// //     textAlign: "center",
// //     color: "#ffffff",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },
// //   uploadSubLabel: {
// //     marginTop: 6,
// //     textAlign: "center",
// //     color: "rgba(255,255,255,0.6)",
// //     fontSize: 12,
// //     lineHeight: 16,
// //   },

// //   section: {
// //     marginTop: 24,
// //   },
// //   sectionTitleRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 8,
// //   },
// //   sectionTitle: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //     marginRight: 6,
// //   },

// //   infoCard: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 14,
// //     paddingVertical: 12,
// //   },
// //   infoText: {
// //     color: "rgba(255,255,255,0.8)",
// //     fontSize: 12,
// //     lineHeight: 17,
// //   },
// //   infoBullet: {
// //     color: "rgba(255,255,255,0.8)",
// //     fontSize: 12,
// //     lineHeight: 18,
// //     marginBottom: 4,
// //   },

// //   emojiChipWrapper: {
// //     marginTop: 24,
// //   },
// //   emojiChip: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 12,
// //     paddingVertical: 8,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   emojiChipImage: {
// //     width: EMOJI_SIZE,
// //     height: EMOJI_SIZE,
// //     borderRadius: 12,
// //     marginRight: 10,
// //   },
// //   emojiNameInput: {
// //     flex: 1,
// //     color: "#ffffff",
// //     fontSize: 14,
// //     paddingVertical: 0,
// //     marginRight: 8,
// //   },
// //   emojiNameText: {
// //     flex: 1,
// //     color: "#ffffff",
// //     fontSize: 14,
// //     marginRight: 8,
// //   },

// //   bottomButtonsWrapper: {
// //     marginTop: 20,
// //   },
// //   bottomButton: {
// //     borderRadius: CARD_RADIUS,
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 10,
// //   },
// //   updateButton: {
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#2849D8",
// //   },
// //   deleteButton: {
// //     backgroundColor: "#2A0C16",
// //     borderWidth: 1,
// //     borderColor: "#FF4B5C",
// //   },
// //   updateButtonText: {
// //     color: "#9FB4FF",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },
// //   deleteButtonText: {
// //     color: "#FFD3D3",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },

// //   saveButtonWrapper: {
// //     marginTop: 26,
// //     borderRadius: CARD_RADIUS,
// //     overflow: "hidden",
// //   },
// //   saveGradient: {
// //     paddingVertical: 13,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   saveText: {
// //     color: "#ffffff",
// //     fontSize: 15,
// //     fontWeight: "600",
// //   },

// //   /* Preview overlay */
// //   previewOverlay: {
// //     position: "absolute",
// //     top: 0,
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: "rgba(0,0,0,0.55)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     paddingHorizontal: 32,
// //   },
// //   previewCard: {
// //     width: "100%",
// //     maxWidth: 340,
// //     borderRadius: 26,
// //     backgroundColor: "#050C26",
// //     borderWidth: 1,
// //     borderColor: "#273A7A",
// //     paddingHorizontal: 20,
// //     paddingVertical: 18,
// //   },
// //   previewHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginBottom: 16,
// //   },
// //   previewTitle: {
// //     color: "#ffffff",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },
// //   previewImageWrapper: {
// //     borderRadius: 24,
// //     overflow: "hidden",
// //     alignSelf: "center",
// //     width: "100%",
// //     aspectRatio: 1,
// //   },
// //   previewImage: {
// //     width: "100%",
// //     height: "100%",
// //   },
// // });
// // import React, { useRef, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   StatusBar,
// //   Platform,
// //   ScrollView,
// //   TouchableOpacity,
// //   TextInput,
// //   Image,
// //   Alert,
// //   KeyboardAvoidingView,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import * as ImagePicker from "expo-image-picker";
// // import { LinearGradient } from "expo-linear-gradient";

// // export default function V27({ navigation }) {
// //   const [emojiUri, setEmojiUri] = useState(null);
// //   const [emojiName, setEmojiName] = useState("Shusshi");
// //   const [isEditingName, setIsEditingName] = useState(false);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const nameInputRef = useRef(null);

// //   const handleBack = () => {
// //     if (navigation?.goBack) navigation.goBack();
// //   };

// //   // ----- Upload Emoji -----
// //   const handleUpload = async () => {
// //     try {
// //       const { status } =
// //         await ImagePicker.requestMediaLibraryPermissionsAsync();
// //       if (status !== "granted") {
// //         Alert.alert(
// //           "Permission needed",
// //           "Please allow access to your photos to upload emojis."
// //         );
// //         return;
// //       }

// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         allowsEditing: false,
// //         quality: 1,
// //       });

// //       if (result.canceled) return;

// //       const asset = result.assets[0];
// //       setEmojiUri(asset.uri);
// //       setIsEditingName(true);

// //       setTimeout(() => {
// //         if (nameInputRef.current) {
// //           nameInputRef.current.focus();
// //         }
// //       }, 100);
// //     } catch (e) {
// //       console.log("upload error", e);
// //       Alert.alert("Error", "Unable to upload emoji right now.");
// //     }
// //   };

// //   // ----- Preview -----
// //   const handlePreview = () => {
// //     if (!emojiUri) {
// //       Alert.alert("No emoji", "Please upload an emoji first.");
// //       return;
// //     }
// //     setShowPreview(true);
// //   };

// //   // ----- Update / Delete -----
// //   const handleUpdateNamePress = () => {
// //     if (!emojiUri) return;
// //     setIsEditingName(true);
// //     setTimeout(() => {
// //       if (nameInputRef.current) {
// //         nameInputRef.current.focus();
// //       }
// //     }, 100);
// //   };

// //   const handleDelete = () => {
// //     setEmojiUri(null);
// //     setEmojiName("Shusshi");
// //     setIsEditingName(false);
// //   };

// //   const handleSave = () => {
// //     if (!emojiUri) {
// //       Alert.alert("No emoji", "Upload an emoji before saving.");
// //       return;
// //     }
// //     console.log("Save emoji:", { emojiUri, emojiName });
// //     Alert.alert("Saved", "Emoji saved (demo).");
// //   };

// //   return (
// //     <KeyboardAvoidingView
// //       style={{ flex: 1 }}
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //     >
// //       <View style={styles.container}>
// //         <StatusBar barStyle="light-content" />

// //         {/* Fake status bar */}
// //         <View style={styles.fakeStatusBar}>
// //           <Text style={styles.timeText}>9:41</Text>
// //           <View style={styles.fakeStatusIcons}>
// //             <Ionicons
// //               name="cellular"
// //               size={16}
// //               color="#ffffff"
// //               style={styles.fakeIcon}
// //             />
// //             <Ionicons
// //               name="wifi"
// //               size={16}
// //               color="#ffffff"
// //               style={styles.fakeIcon}
// //             />
// //             <Ionicons
// //               name="battery-full"
// //               size={20}
// //               color="#ffffff"
// //               style={styles.fakeIcon}
// //             />
// //           </View>
// //         </View>

// //         <ScrollView
// //           style={{ flex: 1 }}
// //           contentContainerStyle={styles.scrollContent}
// //           keyboardShouldPersistTaps="handled"
// //           showsVerticalScrollIndicator={false}
// //         >
// //           {/* Header */}
// //           <View style={styles.headerRow}>
// //             <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// //               <Ionicons name="chevron-back" size={24} color="#ffffff" />
// //             </TouchableOpacity>
// //             <Text style={styles.headerTitle}>Emoji</Text>
// //             <View style={{ width: 24 }} />
// //           </View>

// //           {/* Upload + preview row */}
// //           <View style={styles.uploadRow}>
// //             <TouchableOpacity
// //               style={[
// //                 styles.uploadCircle,
// //                 emojiUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
// //               ]}
// //               onPress={handleUpload}
// //               activeOpacity={0.8}
// //             >
// //               {emojiUri ? (
// //                 <Image
// //                   source={{ uri: emojiUri }}
// //                   style={styles.uploadPreviewThumb}
// //                 />
// //               ) : (
// //                 <Ionicons name="add" size={30} color="#9FB4FF" />
// //               )}
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //               style={styles.previewButton}
// //               onPress={handlePreview}
// //               activeOpacity={0.7}
// //             >
// //               <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
// //               <Text style={styles.previewText}>Preview</Text>
// //             </TouchableOpacity>
// //           </View>

// //           <Text style={styles.uploadMainLabel}>Upload a File</Text>
// //           <Text style={styles.uploadSubLabel}>
// //             File should be png, jpg, png, or GIF{"\n"}
// //             <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
// //           </Text>

// //           {/* Limits & usage */}
// //           <View style={styles.section}>
// //             <View style={styles.sectionTitleRow}>
// //               <Text style={styles.sectionTitle}>Limits & Usage</Text>
// //               <Ionicons
// //                 name="information-circle-outline"
// //                 size={14}
// //                 color="#9FB4FF"
// //               />
// //             </View>
// //             <View style={styles.infoCard}>
// //               <Text style={styles.infoText}>
// //                 Add up to 50 custom emoji for all server members. Animated GIF
// //                 emoji are restricted to members with Discord Nitro.
// //               </Text>
// //             </View>
// //           </View>

// //           {/* Requirements */}
// //           <View style={styles.section}>
// //             <Text style={styles.sectionTitle}>Requirements</Text>
// //             <View style={styles.infoCard}>
// //               <Text style={styles.infoBullet}>
// //                 • File type: JPEG, PNG, GIF, WEBP, AVIF
// //               </Text>
// //               <Text style={styles.infoBullet}>
// //                 • Recommended file size: &lt; 256 KB (We’ll compress it for you)
// //               </Text>
// //               <Text style={styles.infoBullet}>
// //                 • Recommended dimensions: 128x128
// //               </Text>
// //               <Text style={styles.infoBullet}>
// //                 • Naming – Emoji names must be at least 2 characters long and
// //                 can only contain alphanumeric characters and underscores
// //               </Text>
// //             </View>
// //           </View>

// //           {/* Emoji chip + edit row */}
// //           {emojiUri && (
// //             <View style={styles.emojiChipWrapper}>
// //               <View style={styles.emojiChip}>
// //                 <Image
// //                   source={{ uri: emojiUri }}
// //                   style={styles.emojiChipImage}
// //                   resizeMode="cover"
// //                 />

// //                 {isEditingName ? (
// //                   <TextInput
// //                     ref={nameInputRef}
// //                     value={emojiName}
// //                     onChangeText={setEmojiName}
// //                     placeholder="Name"
// //                     placeholderTextColor="rgba(255,255,255,0.6)"
// //                     style={styles.emojiNameInput}
// //                     returnKeyType="done"
// //                     onSubmitEditing={() => setIsEditingName(false)}
// //                   />
// //                 ) : (
// //                   <Text style={styles.emojiNameText} numberOfLines={1}>
// //                     {emojiName}
// //                   </Text>
// //                 )}

// //                 {isEditingName && (
// //                   <TouchableOpacity
// //                     onPress={() => {
// //                       setEmojiName("");
// //                       if (nameInputRef.current) {
// //                         nameInputRef.current.focus();
// //                       }
// //                     }}
// //                     activeOpacity={0.7}
// //                   >
// //                     <Ionicons name="close" size={18} color="#ffffff" />
// //                   </TouchableOpacity>
// //                 )}
// //               </View>
// //             </View>
// //           )}

// //           {/* Bottom actions when emoji exists and not currently editing */}
// //           {emojiUri && !isEditingName && (
// //             <View style={styles.bottomButtonsWrapper}>
// //               <TouchableOpacity
// //                 style={[styles.bottomButton, styles.updateButton]}
// //                 activeOpacity={0.8}
// //                 onPress={handleUpdateNamePress}
// //               >
// //                 <Ionicons
// //                   name="create-outline"
// //                   size={18}
// //                   color="#9FB4FF"
// //                   style={{ marginRight: 8 }}
// //                 />
// //                 <Text style={styles.updateButtonText}>Update GIF Name</Text>
// //               </TouchableOpacity>

// //               <TouchableOpacity
// //                 style={[styles.bottomButton, styles.deleteButton]}
// //                 activeOpacity={0.8}
// //                 onPress={handleDelete}
// //               >
// //                 <Ionicons
// //                   name="trash-outline"
// //                   size={18}
// //                   color="#FFD3D3"
// //                   style={{ marginRight: 8 }}
// //                 />
// //                 <Text style={styles.deleteButtonText}>Delete GIF</Text>
// //               </TouchableOpacity>
// //             </View>
// //           )}

// //           {/* Save */}
// //           <TouchableOpacity
// //             style={styles.saveButtonWrapper}
// //             activeOpacity={0.9}
// //             onPress={handleSave}
// //           >
// //             <LinearGradient
// //               colors={["#355DFF", "#7F5DFF"]}
// //               start={{ x: 0, y: 0 }}
// //               end={{ x: 1, y: 1 }}
// //               style={styles.saveGradient}
// //             >
// //               <Text style={styles.saveText}>Save</Text>
// //             </LinearGradient>
// //           </TouchableOpacity>

// //           <View style={{ height: 40 }} />
// //         </ScrollView>

// //         {/* Preview overlay */}
// //         {showPreview && (
// //           <View style={styles.previewOverlay}>
// //             <View style={styles.previewCard}>
// //               <View style={styles.previewHeader}>
// //                 <Text style={styles.previewTitle}>Preview</Text>
// //                 <TouchableOpacity
// //                   onPress={() => setShowPreview(false)}
// //                   activeOpacity={0.7}
// //                 >
// //                   <Ionicons name="close" size={20} color="#ffffff" />
// //                 </TouchableOpacity>
// //               </View>

// //               <View style={styles.previewImageWrapper}>
// //                 {emojiUri ? (
// //                   <Image
// //                     source={{ uri: emojiUri }}
// //                     style={styles.previewImage}
// //                     resizeMode="cover"
// //                   />
// //                 ) : null}
// //               </View>
// //             </View>
// //           </View>
// //         )}
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // }

// // /* ---------- styles ---------- */

// // const CARD_RADIUS = 18;
// // const EMOJI_SIZE = 52;
// // const UPLOAD_SIZE = 90;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#020821",
// //   },

// //   fakeStatusBar: {
// //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// //     paddingHorizontal: 20,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   timeText: {
// //     color: "#ffffff",
// //     fontSize: 16,
// //     fontWeight: "600",
// //   },
// //   fakeStatusIcons: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   fakeIcon: {
// //     marginLeft: 6,
// //   },

// //   scrollContent: {
// //     paddingHorizontal: 18,
// //     paddingBottom: 32,
// //   },

// //   headerRow: {
// //     marginTop: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   headerTitle: {
// //     color: "#ffffff",
// //     fontSize: 18,
// //     fontWeight: "600",
// //   },

// //   uploadRow: {
// //     marginTop: 28,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   uploadCircle: {
// //     width: UPLOAD_SIZE,
// //     height: UPLOAD_SIZE,
// //     borderRadius: UPLOAD_SIZE / 2,
// //     borderWidth: 1,
// //     borderStyle: "dashed",
// //     borderColor: "#264BFF",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   uploadPreviewThumb: {
// //     width: UPLOAD_SIZE - 8,
// //     height: UPLOAD_SIZE - 8,
// //     borderRadius: (UPLOAD_SIZE - 8) / 2,
// //   },

// //   previewButton: {
// //     position: "absolute",
// //     right: 0,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   previewText: {
// //     marginLeft: 6,
// //     color: "#9FB4FF",
// //     fontSize: 12,
// //   },

// //   uploadMainLabel: {
// //     marginTop: 12,
// //     textAlign: "center",
// //     color: "#ffffff",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },
// //   uploadSubLabel: {
// //     marginTop: 6,
// //     textAlign: "center",
// //     color: "rgba(255,255,255,0.6)",
// //     fontSize: 12,
// //     lineHeight: 16,
// //   },

// //   section: {
// //     marginTop: 24,
// //   },
// //   sectionTitleRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 8,
// //   },
// //   sectionTitle: {
// //     color: "#ffffff",
// //     fontSize: 13,
// //     marginRight: 6,
// //   },

// //   infoCard: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 14,
// //     paddingVertical: 12,
// //   },
// //   infoText: {
// //     color: "rgba(255,255,255,0.8)",
// //     fontSize: 12,
// //     lineHeight: 17,
// //   },
// //   infoBullet: {
// //     color: "rgba(255,255,255,0.8)",
// //     fontSize: 12,
// //     lineHeight: 18,
// //     marginBottom: 4,
// //   },

// //   emojiChipWrapper: {
// //     marginTop: 24,
// //   },
// //   emojiChip: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#132652",
// //     paddingHorizontal: 12,
// //     paddingVertical: 8,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   emojiChipImage: {
// //     width: EMOJI_SIZE,
// //     height: EMOJI_SIZE,
// //     borderRadius: 12,
// //     marginRight: 10,
// //   },
// //   emojiNameInput: {
// //     flex: 1,
// //     color: "#ffffff",
// //     fontSize: 14,
// //     paddingVertical: 0,
// //     marginRight: 8,
// //   },
// //   emojiNameText: {
// //     flex: 1,
// //     color: "#ffffff",
// //     fontSize: 14,
// //     marginRight: 8,
// //   },

// //   bottomButtonsWrapper: {
// //     marginTop: 20,
// //   },
// //   bottomButton: {
// //     borderRadius: CARD_RADIUS,
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 10,
// //   },
// //   updateButton: {
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#2849D8",
// //   },
// //   deleteButton: {
// //     backgroundColor: "#2A0C16",
// //     borderWidth: 1,
// //     borderColor: "#FF4B5C",
// //   },
// //   updateButtonText: {
// //     color: "#9FB4FF",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },
// //   deleteButtonText: {
// //     color: "#FFD3D3",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },

// //   saveButtonWrapper: {
// //     marginTop: 26,
// //     borderRadius: CARD_RADIUS,
// //     overflow: "hidden",
// //   },
// //   saveGradient: {
// //     paddingVertical: 13,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   saveText: {
// //     color: "#ffffff",
// //     fontSize: 15,
// //     fontWeight: "600",
// //   },

// //   /* Preview overlay */
// //   previewOverlay: {
// //     position: "absolute",
// //     top: 0,
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: "rgba(0,0,0,0.55)",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     paddingHorizontal: 32,
// //   },
// //   previewCard: {
// //     width: "100%",
// //     maxWidth: 340,
// //     borderRadius: 26,
// //     backgroundColor: "#050C26",
// //     borderWidth: 1,
// //     borderColor: "#273A7A",
// //     paddingHorizontal: 20,
// //     paddingVertical: 18,
// //   },
// //   previewHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginBottom: 16,
// //   },
// //   previewTitle: {
// //     color: "#ffffff",
// //     fontSize: 14,
// //     fontWeight: "500",
// //   },
// //   previewImageWrapper: {
// //     borderRadius: 24,
// //     overflow: "hidden",
// //     alignSelf: "center",
// //     width: "100%",
// //     aspectRatio: 1,
// //   },
// //   previewImage: {
// //     width: "100%",
// //     height: "100%",
// //   },
// // });
// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   Alert,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Modal,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
// import { LinearGradient } from "expo-linear-gradient";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const STORAGE_KEY = "@app:emojis_v1";
// const UPLOAD_SIZE = 90;
// const CARD_RADIUS = 14;

// export default function EmojiScreen({ navigation }) {
//   const [emojiUri, setEmojiUri] = useState(null);
//   const [emojiName, setEmojiName] = useState("Shusshi");
//   const [isEditingName, setIsEditingName] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const nameInputRef = useRef(null);

//   const handleBack = () => {
//     if (navigation?.goBack) navigation.goBack();
//   };

//   // Open gallery (requests permission implicitly)
//   const handleUpload = async () => {
//     try {
//       const res = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         quality: 1,
//       });

//       if (!res) return;
//       if (res.canceled === true || res.cancelled === true) return;

//       const asset = res.assets ? res.assets[0] : { uri: res.uri, fileName: res.fileName || null };
//       if (!asset || !asset.uri) return;

//       setEmojiUri(asset.uri);
//       // default name from file (if available) else keep current
//       if (asset.fileName) {
//         const base = asset.fileName.replace(/\.[^/.]+$/, "");
//         setEmojiName(base.length >= 2 ? base : "emoji");
//       }

//       // open name editing immediately
//       setIsEditingName(true);
//       setTimeout(() => {
//         nameInputRef.current?.focus();
//       }, 120);
//     } catch (err) {
//       console.warn("Upload error", err);
//       Alert.alert("Error", "Unable to upload emoji. Try again.");
//     }
//   };

//   const handlePreview = () => {
//     if (!emojiUri) {
//       Alert.alert("No emoji", "Please upload an emoji first.");
//       return;
//     }
//     setShowPreview(true);
//   };

//   const handleUpdateNamePress = () => {
//     if (!emojiUri) return;
//     setIsEditingName(true);
//     setTimeout(() => nameInputRef.current?.focus(), 120);
//   };

//   const handleDelete = () => {
//     if (!emojiUri) return;
//     Alert.alert(
//       "Delete emoji",
//       "Are you sure you want to delete this emoji?",
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Delete",
//           style: "destructive",
//           onPress: () => {
//             setEmojiUri(null);
//             setEmojiName("Shusshi");
//             setIsEditingName(false);
//           },
//         },
//       ],
//       { cancelable: true }
//     );
//   };

//   const handleSave = async () => {
//     if (!emojiUri) {
//       Alert.alert("No emoji", "Upload an emoji before saving.");
//       return;
//     }
//     if (!emojiName || emojiName.trim().length < 2) {
//       Alert.alert("Invalid name", "Emoji name must be at least 2 characters.");
//       return;
//     }
//     // validate name: only alphanumeric + underscores
//     const ok = /^[a-zA-Z0-9_]+$/.test(emojiName);
//     if (!ok) {
//       Alert.alert("Invalid name", "Name can only contain letters, numbers and underscores.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const raw = await AsyncStorage.getItem(STORAGE_KEY);
//       const arr = raw ? JSON.parse(raw) : [];
//       // keep small object (uri + name + id + date)
//       arr.push({ id: `e_${Date.now()}`, name: emojiName, uri: emojiUri, createdAt: Date.now() });
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
//       Alert.alert("Saved", "Emoji saved.");
//       setIsEditingName(false);
//     } catch (e) {
//       console.warn("Save error", e);
//       Alert.alert("Save failed", "Could not save emoji. Try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // Close edit on outside tap
//   const handleOutsideTap = () => {
//     if (isEditingName) {
//       setIsEditingName(false);
//       Keyboard.dismiss();
//     }
//   };

//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
//       <TouchableWithoutFeedback onPress={handleOutsideTap}>
//         <View style={styles.container}>
//           <StatusBar barStyle="light-content" />

//           {/* Header */}
//           <View style={styles.headerRow}>
//             <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//               <Ionicons name="chevron-back" size={24} color="#ffffff" />
//             </TouchableOpacity>
//             <Text style={styles.headerTitle}>Emoji</Text>
//             <View style={{ width: 24 }} />
//           </View>

//           <ScrollView
//             contentContainerStyle={styles.scrollContent}
//             keyboardShouldPersistTaps="handled"
//             showsVerticalScrollIndicator={false}
//           >
//             {/* Upload + preview */}
//             <View style={styles.uploadRow}>
//               <TouchableOpacity
//                 style={[styles.uploadCircle, emojiUri && { borderStyle: "solid", borderColor: "#4C7CFF" }]}
//                 onPress={handleUpload}
//                 activeOpacity={0.8}
//               >
//                 {emojiUri ? (
//                   <Image source={{ uri: emojiUri }} style={styles.uploadPreviewThumb} resizeMode="cover" />
//                 ) : (
//                   <Ionicons name="add" size={30} color="#9FB4FF" />
//                 )}
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.previewButton} onPress={handlePreview} activeOpacity={0.7}>
//                 <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
//                 <Text style={styles.previewText}>Preview</Text>
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.uploadMainLabel}>Upload a File</Text>
//             <Text style={styles.uploadSubLabel}>
//               File should be png, jpg, png, or GIF{"\n"}
//               <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
//             </Text>

//             {/* Limits & Usage */}
//             <View style={styles.section}>
//               <View style={styles.sectionTitleRow}>
//                 <Text style={styles.sectionTitle}>Limits & Usage</Text>
//                 <Ionicons name="information-circle-outline" size={14} color="#9FB4FF" />
//               </View>
//               <View style={styles.infoCard}>
//                 <Text style={styles.infoText}>Add up to 50 custom emoji for all Nexus members. Animated GIF emoji are restricted to members with Ballista.</Text>
//               </View>
//             </View>

//             {/* Requirements */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Requirements</Text>
//               <View style={styles.infoCard}>
//                 <Text style={styles.infoBullet}>• File type : JPEG, PNG, GIF, WEBP, AVIF</Text>
//                 <Text style={styles.infoBullet}>• Recommended file size : &lt; 256 KB (We'll compress it for you)</Text>
//                 <Text style={styles.infoBullet}>• Recommended dimensions : 128x128</Text>
//                 <Text style={styles.infoBullet}>• Naming : at least 2 characters. Only alphanumeric & underscores.</Text>
//               </View>
//             </View>

//             {/* Emoji chip */}
//             {emojiUri && (
//               <View style={styles.emojiChipWrapper}>
//                 <View style={styles.emojiChip}>
//                   <Image source={{ uri: emojiUri }} style={styles.emojiChipImage} resizeMode="cover" />

//                   {isEditingName ? (
//                     <TextInput
//                       ref={nameInputRef}
//                       value={emojiName}
//                       onChangeText={setEmojiName}
//                       placeholder="Name"
//                       placeholderTextColor="rgba(255,255,255,0.6)"
//                       style={styles.emojiNameInput}
//                       returnKeyType="done"
//                       onSubmitEditing={() => setIsEditingName(false)}
//                     />
//                   ) : (
//                     <Text style={styles.emojiNameText} numberOfLines={1}>
//                       {emojiName}
//                     </Text>
//                   )}

//                   {isEditingName && (
//                     <TouchableOpacity
//                       onPress={() => {
//                         setEmojiName("");
//                         nameInputRef.current?.focus();
//                       }}
//                       activeOpacity={0.7}
//                     >
//                       <Ionicons name="close" size={18} color="#ffffff" />
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               </View>
//             )}

//             {/* Bottom actions */}
//             {emojiUri && !isEditingName && (
//               <View style={styles.bottomButtonsWrapper}>
//                 <TouchableOpacity style={[styles.bottomButton, styles.updateButton]} activeOpacity={0.85} onPress={handleUpdateNamePress}>
//                   <Ionicons name="create-outline" size={18} color="#9FB4FF" style={{ marginRight: 8 }} />
//                   <Text style={styles.updateButtonText}>Update GIF Name</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={[styles.bottomButton, styles.deleteButton]} activeOpacity={0.85} onPress={handleDelete}>
//                   <Ionicons name="trash-outline" size={18} color="#FFD3D3" style={{ marginRight: 8 }} />
//                   <Text style={styles.deleteButtonText}>Delete GIF</Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* Save */}
//             <TouchableOpacity style={styles.saveButtonWrapper} activeOpacity={0.9} onPress={handleSave}>
//               <LinearGradient colors={["#355DFF", "#7F5DFF"]} style={styles.saveGradient}>
//                 <Text style={styles.saveText}>{saving ? "Saving..." : "Save"}</Text>
//               </LinearGradient>
//             </TouchableOpacity>

//             <View style={{ height: 48 }} />
//           </ScrollView>

//           {/* Preview Modal */}
//           <Modal visible={showPreview} transparent animationType="fade" onRequestClose={() => setShowPreview(false)}>
//             <TouchableWithoutFeedback onPress={() => setShowPreview(false)}>
//               <View style={styles.previewOverlay}>
//                 <TouchableWithoutFeedback>
//                   <View style={styles.previewCard}>
//                     <View style={styles.previewHeader}>
//                       <Text style={styles.previewTitle}>Preview</Text>
//                       <TouchableOpacity onPress={() => setShowPreview(false)} activeOpacity={0.7}>
//                         <Ionicons name="close" size={20} color="#ffffff" />
//                       </TouchableOpacity>
//                     </View>

//                     <View style={styles.previewImageWrapper}>
//                       {emojiUri ? (
//                         <Image source={{ uri: emojiUri }} style={styles.previewImage} resizeMode="cover" />
//                       ) : null}
//                     </View>
//                   </View>
//                 </TouchableWithoutFeedback>
//               </View>
//             </TouchableWithoutFeedback>
//           </Modal>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// /* ---------- styles ---------- */

// const EMOJI_SIZE = 56;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#020821" },

//   headerRow: {
//     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerTitle: { color: "#ffffff", fontSize: 18, fontWeight: "600" },

//   scrollContent: { paddingHorizontal: 18, paddingBottom: 32 },

//   uploadRow: { marginTop: 28, flexDirection: "row", alignItems: "center" },
//   uploadCircle: {
//     width: UPLOAD_SIZE,
//     height: UPLOAD_SIZE,
//     borderRadius: UPLOAD_SIZE / 2,
//     borderWidth: 1,
//     borderStyle: "dashed",
//     borderColor: "#264BFF",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#071739",
//   },
//   uploadPreviewThumb: { width: UPLOAD_SIZE - 8, height: UPLOAD_SIZE - 8, borderRadius: (UPLOAD_SIZE - 8) / 2 },

//   previewButton: { position: "absolute", right: 0, flexDirection: "row", alignItems: "center" },
//   previewText: { marginLeft: 6, color: "#9FB4FF", fontSize: 12 },

//   uploadMainLabel: { marginTop: 12, textAlign: "center", color: "#ffffff", fontSize: 14, fontWeight: "500" },
//   uploadSubLabel: { marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 16 },

//   section: { marginTop: 24 },
//   sectionTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
//   sectionTitle: { color: "#ffffff", fontSize: 13, marginRight: 6 },

//   infoCard: { borderRadius: CARD_RADIUS, backgroundColor: "#071739", borderWidth: 1, borderColor: "#132652", paddingHorizontal: 14, paddingVertical: 12 },
//   infoText: { color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 17 },
//   infoBullet: { color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 18, marginBottom: 6 },

//   emojiChipWrapper: { marginTop: 24 },
//   emojiChip: { borderRadius: 16, backgroundColor: "#071739", borderWidth: 1, borderColor: "#132652", paddingHorizontal: 12, paddingVertical: 10, flexDirection: "row", alignItems: "center" },
//   emojiChipImage: { width: EMOJI_SIZE, height: EMOJI_SIZE, borderRadius: 12, marginRight: 12 },
//   emojiNameInput: { flex: 1, color: "#ffffff", fontSize: 14, paddingVertical: 0, marginRight: 8 },
//   emojiNameText: { flex: 1, color: "#ffffff", fontSize: 14, marginRight: 8 },

//   bottomButtonsWrapper: { marginTop: 20 },
//   bottomButton: { borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 },
//   updateButton: { backgroundColor: "#071739", borderWidth: 1, borderColor: "#2849D8" },
//   deleteButton: { backgroundColor: "#2A0C16", borderWidth: 1, borderColor: "#FF4B5C" },
//   updateButtonText: { color: "#9FB4FF", fontSize: 14, fontWeight: "500" },
//   deleteButtonText: { color: "#FFD3D3", fontSize: 14, fontWeight: "500" },

//   saveButtonWrapper: { marginTop: 26, borderRadius: 18, overflow: "hidden" },
//   saveGradient: { paddingVertical: 13, justifyContent: "center", alignItems: "center" },
//   saveText: { color: "#ffffff", fontSize: 15, fontWeight: "600" },

//   /* Preview modal */
//   previewOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.55)", justifyContent: "center", alignItems: "center" },
//   previewCard: { width: "86%", maxWidth: 420, borderRadius: 22, backgroundColor: "#05091A", paddingTop: 18, paddingBottom: 26, paddingHorizontal: 18, borderWidth: 1, borderColor: "#23305A", alignItems: "center" },
//   previewHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: 12 },
//   previewTitle: { color: "#fff", fontSize: 14, fontWeight: "600" },
//   previewImageWrapper: { width: 220, height: 220, borderRadius: 20, backgroundColor: "#08173A", borderWidth: 1, borderColor: "#273A7A", justifyContent: "center", alignItems: "center", overflow: "hidden" },
//   previewImage: { width: "100%", height: "100%" },
// });



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function NexusTypeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ color: "#fff", fontSize: 30 }}>‹</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What kind of Nexus are you building?</Text>
      <Text style={styles.subtitle}>
        This helps us shape your Nexus experience.{"\n"}Who's it for?
      </Text>

      {/* Options */}
      <View style={{ marginTop: 20 }}>
        
        {/* First Button */}
        <TouchableOpacity 
          style={styles.option} 
          onPress={() => navigation.navigate("Build_Your_Nexus")}
        >
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }} 
            style={styles.icon} 
          />
          <Text style={styles.optionText}>For me and my orbit circle</Text>
        </TouchableOpacity>

        {/* Second Button */}
        <TouchableOpacity 
          style={styles.option} 
          onPress={() => navigation.navigate("Build_Your_Nexus")}
        >
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828885.png" }} 
            style={styles.icon} 
          />
          <Text style={styles.optionText}>For a public community space</Text>
        </TouchableOpacity>

      </View>

      {/* Skip */}
      <TouchableOpacity 
        style={{ marginTop: 40 }} 
        onPress={() => navigation.navigate("Build_Your_Nexus")}
      >
        <Text style={styles.skip}>
          Not sure yet? <Text style={{ color: "#4da6ff" }}>skip</Text> for now.
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020b22',
    paddingTop: 50,
  },

  backButton: {
  width: 50,     // ⭐ increase width
  justifyContent: "start",
  alignItems: "start",
      paddingHorizontal: 23,

},

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 48,
    textAlign: "center",    
  alignSelf: "center",      
  },

  subtitle: {
    color: '#BDBDBD',
    marginTop: 5,
    fontSize: 14,
        fontWeight: '400',
    lineHeight: 20,
    textAlign: "center",   
  alignSelf: "center",      
  },

  option: {
    width: '100%',
    backgroundColor: '#3154BA4D',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  optionText: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 15,
            fontWeight: '500',

  },

  icon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },

  skip: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
                fontWeight: '500',

  },
});

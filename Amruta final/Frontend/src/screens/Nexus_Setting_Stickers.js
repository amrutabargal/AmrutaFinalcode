// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   Platform,
// // // //   ScrollView,
// // // //   TouchableOpacity,
// // // //   TextInput,
// // // //   Image,
// // // //   Alert,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";
// // // // import { LinearGradient } from "expo-linear-gradient";
// // // // import * as ImagePicker from "expo-image-picker";

// // // // export default function V28({ navigation }) {
// // // //   const [stickerName, setStickerName] = useState("Suss hi Clean");
// // // //   const [description, setDescription] = useState(
// // // //     "See our help Center for tips on writing sticker descriptions."
// // // //   );

// // // //   const [stickerUri, setStickerUri] = useState(null); // निवडलेली फाईल
// // // //   const [showPreview, setShowPreview] = useState(false);

// // // //   const handleBack = () => {
// // // //     if (navigation?.goBack) navigation.goBack();
// // // //   };

// // // //   // ===== Upload handler =====
// // // //   const handleUploadPress = async () => {
// // // //     try {
// // // //       // permissions
// // // //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // //       if (status !== "granted") {
// // // //         Alert.alert("Permission needed", "Please allow access to your photos to upload stickers.");
// // // //         return;
// // // //       }

// // // //       const result = await ImagePicker.launchImageLibraryAsync({
// // // //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // //         allowsEditing: false,
// // // //         quality: 1,
// // // //       });

// // // //       if (result.canceled) return;

// // // //       const asset = result.assets[0];
// // // //       setStickerUri(asset.uri);
// // // //     } catch (err) {
// // // //       console.log("Image pick error", err);
// // // //       Alert.alert("Error", "Something went wrong while picking the image.");
// // // //     }
// // // //   };

// // // //   // ===== Preview button =====
// // // //   const handlePreviewPress = () => {
// // // //     if (!stickerUri) {
// // // //       Alert.alert("No file", "Please upload a sticker first to preview.");
// // // //       return;
// // // //     }
// // // //     setShowPreview(true);
// // // //   };

// // // //   const handleSave = () => {
// // // //     // TODO: इथे backend वर upload / save कर
// // // //     console.log("Save sticker:", { stickerName, description, stickerUri });
// // // //     Alert.alert("Saved", "Sticker settings saved (demo).");
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar barStyle="light-content" />

// // // //       {/* Fake status bar row */}
// // // //       <View style={styles.fakeStatusBar}>
// // // //         <Text style={styles.timeText}>9:41</Text>
// // // //         <View style={styles.fakeStatusIcons}>
// // // //           <Ionicons name="cellular" size={16} color="#ffffff" style={styles.fakeIcon} />
// // // //           <Ionicons name="wifi" size={16} color="#ffffff" style={styles.fakeIcon} />
// // // //           <Ionicons name="battery-full" size={20} color="#ffffff" style={styles.fakeIcon} />
// // // //         </View>
// // // //       </View>

// // // //       <ScrollView
// // // //         style={{ flex: 1 }}
// // // //         contentContainerStyle={styles.scrollContent}
// // // //         showsVerticalScrollIndicator={false}
// // // //       >
// // // //         {/* Header */}
// // // //         <View style={styles.headerRow}>
// // // //           <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // // //             <Ionicons name="chevron-back" size={24} color="#ffffff" />
// // // //           </TouchableOpacity>
// // // //           <Text style={styles.headerTitle}>Stickers</Text>
// // // //           <View style={{ width: 24 }} />
// // // //         </View>

// // // //         {/* Upload + Preview row */}
// // // //         <View style={styles.uploadRow}>
// // // //           <TouchableOpacity
// // // //             style={[
// // // //               styles.uploadCircle,
// // // //               stickerUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
// // // //             ]}
// // // //             onPress={handleUploadPress}
// // // //             activeOpacity={0.8}
// // // //           >
// // // //             {stickerUri ? (
// // // //               <Image source={{ uri: stickerUri }} style={styles.uploadPreviewThumb} />
// // // //             ) : (
// // // //               <Ionicons name="add" size={30} color="#9FB4FF" />
// // // //             )}
// // // //           </TouchableOpacity>

// // // //           <TouchableOpacity
// // // //             style={styles.previewButton}
// // // //             onPress={handlePreviewPress}
// // // //             activeOpacity={0.7}
// // // //           >
// // // //             <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
// // // //             <Text style={styles.previewText}>Preview</Text>
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         <Text style={styles.uploadMainLabel}>Upload a File</Text>
// // // //         <Text style={styles.uploadSubLabel}>
// // // //           File should be png, jpg, png, or GIF{"\n"}
// // // //           <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
// // // //         </Text>

// // // //         {/* Upload Instructions */}
// // // //         <View style={styles.section}>
// // // //           <View style={styles.sectionTitleRow}>
// // // //             <Text style={styles.sectionTitle}>Upload Instructions</Text>
// // // //             <Ionicons name="information-circle-outline" size={14} color="#9FB4FF" />
// // // //           </View>

// // // //           <View style={styles.instructionsCard}>
// // // //             <Text style={styles.instructionsText}>
// // // //               Stickers can be static (jpg, png) or animated (png, GIF). Stickers must
// // // //               be exactly 320x320 pixels and no larger than 1mb. We will automatically
// // // //               resize static, jpg, png and animated GIF Stickers for you.{"\n\n"}
// // // //               For more information about file types and tips on uploading custom
// // // //               stickers, check out this Help Center article.
// // // //             </Text>
// // // //           </View>
// // // //         </View>

// // // //         {/* Sticker Name */}
// // // //         <View style={styles.section}>
// // // //           <Text style={styles.fieldLabel}>Sticker Name</Text>
// // // //           <View style={styles.fieldInputWrapper}>
// // // //             <TextInput
// // // //               value={stickerName}
// // // //               onChangeText={setStickerName}
// // // //               placeholder="Sticker Name"
// // // //               placeholderTextColor="rgba(255,255,255,0.5)"
// // // //               style={styles.singleLineInput}
// // // //             />
// // // //             <Ionicons
// // // //               name="create-outline"
// // // //               size={18}
// // // //               color="#9FB4FF"
// // // //               style={{ marginLeft: 8 }}
// // // //             />
// // // //           </View>
// // // //         </View>

// // // //         {/* Description */}
// // // //         <View style={styles.section}>
// // // //           <Text style={styles.fieldLabel}>Descriptions</Text>
// // // //           <View style={styles.multiInputWrapper}>
// // // //             <TextInput
// // // //               value={description}
// // // //               onChangeText={setDescription}
// // // //               placeholder="Description"
// // // //               placeholderTextColor="rgba(255,255,255,0.5)"
// // // //               style={styles.multiLineInput}
// // // //               multiline
// // // //               textAlignVertical="top"
// // // //               maxLength={500}
// // // //             />
// // // //             <Text style={styles.charCount}>{`${description.length}/500`}</Text>
// // // //           </View>
// // // //         </View>

// // // //         {/* Save button */}
// // // //         <TouchableOpacity
// // // //           style={styles.saveButtonWrapper}
// // // //           activeOpacity={0.9}
// // // //           onPress={handleSave}
// // // //         >
// // // //           <LinearGradient
// // // //             colors={["#355DFF", "#7F5DFF"]}
// // // //             start={{ x: 0, y: 0 }}
// // // //             end={{ x: 1, y: 1 }}
// // // //             style={styles.saveGradient}
// // // //           >
// // // //             <Text style={styles.saveText}>Save</Text>
// // // //           </LinearGradient>
// // // //         </TouchableOpacity>

// // // //         <View style={{ height: 40 }} />
// // // //       </ScrollView>

// // // //       {/* ===== Preview Overlay Modal ===== */}
// // // //       {showPreview && (
// // // //         <View style={styles.previewOverlay}>
// // // //           <View style={styles.previewCard}>
// // // //             <View style={styles.previewHeader}>
// // // //               <Text style={styles.previewTitle}>Preview</Text>
// // // //               <TouchableOpacity
// // // //                 onPress={() => setShowPreview(false)}
// // // //                 activeOpacity={0.7}
// // // //               >
// // // //                 <Ionicons name="close" size={20} color="#ffffff" />
// // // //               </TouchableOpacity>
// // // //             </View>

// // // //             <View style={styles.previewImageWrapper}>
// // // //               {stickerUri ? (
// // // //                 <Image
// // // //                   source={{ uri: stickerUri }}
// // // //                   style={styles.previewImage}
// // // //                   resizeMode="cover"
// // // //                 />
// // // //               ) : (
// // // //                 <View style={styles.previewPlaceholder}>
// // // //                   <Ionicons name="image-outline" size={32} color="#9FB4FF" />
// // // //                   <Text style={styles.previewPlaceholderText}>
// // // //                     Upload a sticker to preview
// // // //                   </Text>
// // // //                 </View>
// // // //               )}
// // // //             </View>
// // // //           </View>
// // // //         </View>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // /* ---------- Styles ---------- */

// // // // const UPLOAD_SIZE = 90;
// // // // const CARD_RADIUS = 18;

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#020821",
// // // //   },

// // // //   fakeStatusBar: {
// // // //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// // // //     paddingHorizontal: 20,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   timeText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 16,
// // // //     fontWeight: "600",
// // // //   },
// // // //   fakeStatusIcons: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   fakeIcon: {
// // // //     marginLeft: 6,
// // // //   },

// // // //   scrollContent: {
// // // //     paddingBottom: 32,
// // // //     paddingHorizontal: 18,
// // // //   },

// // // //   headerRow: {
// // // //     marginTop: 12,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //   },
// // // //   headerTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 18,
// // // //     fontWeight: "600",
// // // //   },

// // // //   uploadRow: {
// // // //     marginTop: 28,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "flex-start",
// // // //   },
// // // //   uploadCircle: {
// // // //     width: UPLOAD_SIZE,
// // // //     height: UPLOAD_SIZE,
// // // //     borderRadius: UPLOAD_SIZE / 2,
// // // //     borderWidth: 1,
// // // //     borderStyle: "dashed",
// // // //     borderColor: "#264BFF",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   uploadPreviewThumb: {
// // // //     width: UPLOAD_SIZE - 8,
// // // //     height: UPLOAD_SIZE - 8,
// // // //     borderRadius: (UPLOAD_SIZE - 8) / 2,
// // // //   },

// // // //   previewButton: {
// // // //     position: "absolute",
// // // //     right: 0,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   previewText: {
// // // //     marginLeft: 6,
// // // //     color: "#9FB4FF",
// // // //     fontSize: 12,
// // // //   },

// // // //   uploadMainLabel: {
// // // //     marginTop: 12,
// // // //     textAlign: "center",
// // // //     color: "#ffffff",
// // // //     fontSize: 14,
// // // //     fontWeight: "500",
// // // //   },
// // // //   uploadSubLabel: {
// // // //     marginTop: 6,
// // // //     textAlign: "center",
// // // //     color: "rgba(255,255,255,0.6)",
// // // //     fontSize: 12,
// // // //     lineHeight: 16,
// // // //   },

// // // //   section: {
// // // //     marginTop: 24,
// // // //   },
// // // //   sectionTitleRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     marginBottom: 8,
// // // //   },
// // // //   sectionTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //     marginRight: 6,
// // // //   },
// // // //   instructionsCard: {
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#132652",
// // // //     paddingHorizontal: 14,
// // // //     paddingVertical: 12,
// // // //   },
// // // //   instructionsText: {
// // // //     color: "rgba(255,255,255,0.8)",
// // // //     fontSize: 12,
// // // //     lineHeight: 17,
// // // //   },

// // // //   fieldLabel: {
// // // //     color: "rgba(255,255,255,0.8)",
// // // //     fontSize: 13,
// // // //     marginBottom: 8,
// // // //   },

// // // //   fieldInputWrapper: {
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#2849D8",
// // // //     paddingHorizontal: 14,
// // // //     paddingVertical: 10,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   singleLineInput: {
// // // //     flex: 1,
// // // //     color: "#ffffff",
// // // //     fontSize: 14,
// // // //   },

// // // //   multiInputWrapper: {
// // // //     borderRadius: CARD_RADIUS,
// // // //     backgroundColor: "#071739",
// // // //     borderWidth: 1,
// // // //     borderColor: "#2849D8",
// // // //     paddingHorizontal: 14,
// // // //     paddingTop: 10,
// // // //     paddingBottom: 8,
// // // //     minHeight: 120,
// // // //   },
// // // //   multiLineInput: {
// // // //     color: "#ffffff",
// // // //     fontSize: 13,
// // // //     lineHeight: 18,
// // // //     flex: 1,
// // // //   },
// // // //   charCount: {
// // // //     marginTop: 4,
// // // //     textAlign: "right",
// // // //     fontSize: 11,
// // // //     color: "rgba(159,180,255,0.9)",
// // // //   },

// // // //   saveButtonWrapper: {
// // // //     marginTop: 26,
// // // //     borderRadius: CARD_RADIUS,
// // // //     overflow: "hidden",
// // // //   },
// // // //   saveGradient: {
// // // //     paddingVertical: 13,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   saveText: {
// // // //     color: "#ffffff",
// // // //     fontSize: 15,
// // // //     fontWeight: "600",
// // // //   },

// // // //   /* Preview overlay */

// // // //   previewOverlay: {
// // // //     position: "absolute",
// // // //     top: 0,
// // // //     bottom: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: 32,
// // // //   },
// // // //   previewCard: {
// // // //     width: "100%",
// // // //     maxWidth: 340,
// // // //     borderRadius: 26,
// // // //     backgroundColor: "#050C26",
// // // //     borderWidth: 1,
// // // //     borderColor: "#273A7A",
// // // //     paddingHorizontal: 20,
// // // //     paddingVertical: 18,
// // // //   },
// // // //   previewHeader: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     marginBottom: 16,
// // // //   },
// // // //   previewTitle: {
// // // //     color: "#ffffff",
// // // //     fontSize: 14,
// // // //     fontWeight: "500",
// // // //   },
// // // //   previewImageWrapper: {
// // // //     borderRadius: 24,
// // // //     overflow: "hidden",
// // // //     alignSelf: "center",
// // // //     width: "100%",
// // // //     aspectRatio: 1,
// // // //   },
// // // //   previewImage: {
// // // //     width: "100%",
// // // //     height: "100%",
// // // //   },
// // // //   previewPlaceholder: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     backgroundColor: "#08173A",
// // // //   },
// // // //   previewPlaceholderText: {
// // // //     marginTop: 8,
// // // //     color: "#9FB4FF",
// // // //     fontSize: 12,
// // // //   },
// // // // });
// // // // StickersScreen.js
// // // import React, { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   Platform,
// // //   ScrollView,
// // //   TouchableOpacity,
// // //   TextInput,
// // //   Image,
// // //   Alert,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import { Ionicons } from "@expo/vector-icons";
// // // import { LinearGradient } from "expo-linear-gradient";
// // // import * as ImagePicker from "expo-image-picker";
// // // import * as ImageManipulator from "expo-image-manipulator";
// // // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // const STORAGE_KEY = "@app:stickers";
// // // const MAX_BYTES = 1 * 1024 * 1024; // 1 MB
// // // const TARGET_SIZE = 320; // px

// // // export default function StickersScreen({ navigation }) {
// // //   const [stickerName, setStickerName] = useState("Suss hi Clean");
// // //   const [description, setDescription] = useState(
// // //     "See our help Center for tips on writing sticker descriptions."
// // //   );

// // //   const [stickerUri, setStickerUri] = useState(null);
// // //   const [stickerInfo, setStickerInfo] = useState(null); // { size, type, name }
// // //   const [processing, setProcessing] = useState(false);
// // //   const [showPreview, setShowPreview] = useState(false);

// // //   const handleBack = () => navigation?.goBack && navigation.goBack();

// // //   // helper: fetch uri and return blob & type & size
// // //   async function fetchBlobInfo(uri) {
// // //     const res = await fetch(uri);
// // //     const blob = await res.blob();
// // //     // try to detect extension/type
// // //     const type = blob.type || "";
// // //     return { blob, type, size: blob.size };
// // //   }

// // //   // try to reduce size for static images (png/jpg) to under MAX_BYTES
// // //   async function compressAndResize(uri) {
// // //     // resize to TARGET_SIZE x TARGET_SIZE and compress progressively
// // //     let quality = 0.9;
// // //     for (let i = 0; i < 5; i++) {
// // //       const manipResult = await ImageManipulator.manipulateAsync(
// // //         uri,
// // //         [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
// // //         { compress: quality, format: ImageManipulator.SaveFormat.PNG } // PNG keeps quality; JPEG may compress better
// // //       );
// // //       const info = await fetchBlobInfo(manipResult.uri);
// // //       if (info.size <= MAX_BYTES) {
// // //         return { uri: manipResult.uri, info };
// // //       }
// // //       // lower quality and try JPEG (better compression usually)
// // //       quality -= 0.2;
// // //       if (quality <= 0 && i >= 2) {
// // //         // last attempt use JPEG with moderate quality
// // //         const jpegRes = await ImageManipulator.manipulateAsync(
// // //           uri,
// // //           [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
// // //           { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG }
// // //         );
// // //         const jpegInfo = await fetchBlobInfo(jpegRes.uri);
// // //         if (jpegInfo.size <= MAX_BYTES) return { uri: jpegRes.uri, info: jpegInfo };
// // //         // else continue loop but quality won't go lower a lot
// // //       }
// // //     }
// // //     // if still large, return last manip result
// // //     return null;
// // //   }

// // //   const handleUploadPress = async () => {
// // //     try {
// // //       // request permission
// // //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // //       if (status !== "granted") {
// // //         Alert.alert("Permission needed", "Please allow access to your photos to upload stickers.");
// // //         return;
// // //       }

// // //       const result = await ImagePicker.launchImageLibraryAsync({
// // //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // //         allowsEditing: false,
// // //         quality: 1,
// // //       });

// // //       if (result.canceled) return;
// // //       const asset = result.assets[0];
// // //       let uri = asset.uri;

// // //       setProcessing(true);

// // //       // try to determine extension/type from uri
// // //       const lc = uri.toLowerCase();
// // //       const isGif = lc.endsWith(".gif") || (asset.type === "image" && asset.uri?.includes(".gif"));

// // //       // get initial blob info
// // //       const initial = await fetchBlobInfo(uri);
// // //       const initialSize = initial.size;

// // //       // Allowed types
// // //       const allowedExt = [".png", ".jpg", ".jpeg", ".gif"];
// // //       const hasAllowed = allowedExt.some((ext) => lc.endsWith(ext));
// // //       if (!hasAllowed && !initial.type) {
// // //         // try to allow based on MIME header; if neither, reject
// // //         Alert.alert("Invalid file", "Please select a PNG, JPG or GIF file.");
// // //         setProcessing(false);
// // //         return;
// // //       }

// // //       // GIF handling: do NOT manipulate (to preserve animation).
// // //       if (isGif) {
// // //         if (initialSize > MAX_BYTES) {
// // //           Alert.alert(
// // //             "File too large",
// // //             "Animated GIFs must be smaller than 1MB. Please choose a smaller GIF."
// // //           );
// // //           setProcessing(false);
// // //           return;
// // //         }
// // //         // set as chosen
// // //         setStickerUri(uri);
// // //         setStickerInfo({ size: initialSize, type: "image/gif", name: asset.fileName || null });
// // //         setProcessing(false);
// // //         return;
// // //       }

// // //       // For static images (jpg/png) — ensure 320x320 and under 1MB
// // //       if (initialSize <= MAX_BYTES) {
// // //         // if larger than 320x320 we still resize to target for consistent appearance
// // //         // attempt to resize to TARGET_SIZE to keep expected format
// // //         const manip = await ImageManipulator.manipulateAsync(
// // //           uri,
// // //           [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
// // //           { compress: 1, format: ImageManipulator.SaveFormat.PNG }
// // //         );
// // //         const info = await fetchBlobInfo(manip.uri);
// // //         setStickerUri(manip.uri);
// // //         setStickerInfo({ size: info.size, type: info.blob?.type || "image/png", name: asset.fileName || null });
// // //         setProcessing(false);
// // //         return;
// // //       }

// // //       // If initial > 1MB, try compress/resizing
// // //       const compressed = await compressAndResize(uri);
// // //       if (compressed) {
// // //         setStickerUri(compressed.uri);
// // //         setStickerInfo({ size: compressed.info.size, type: compressed.info.blob?.type || "image/png", name: asset.fileName || null });
// // //       } else {
// // //         Alert.alert(
// // //           "Couldn't compress",
// // //           "We couldn't compress the image below 1MB. Try choosing a smaller image."
// // //         );
// // //       }
// // //       setProcessing(false);
// // //     } catch (err) {
// // //       console.error("Image pick error", err);
// // //       Alert.alert("Error", "Something went wrong while picking or processing the image.");
// // //       setProcessing(false);
// // //     }
// // //   };

// // //   const handlePreview = () => {
// // //     if (!stickerUri) {
// // //       Alert.alert("No file", "Please upload a sticker first to preview.");
// // //       return;
// // //     }
// // //     setShowPreview(true);
// // //   };

// // //   const handleSave = async () => {
// // //     if (!stickerUri) {
// // //       Alert.alert("No sticker", "Please upload a sticker before saving.");
// // //       return;
// // //     }
// // //     if (!stickerName || stickerName.trim().length === 0) {
// // //       Alert.alert("Enter name", "Please enter a sticker name.");
// // //       return;
// // //     }

// // //     const item = {
// // //       id: `st_${Date.now()}`,
// // //       name: stickerName.trim(),
// // //       description,
// // //       uri: stickerUri,
// // //       info: stickerInfo,
// // //       createdAt: Date.now(),
// // //     };

// // //     try {
// // //       const raw = await AsyncStorage.getItem(STORAGE_KEY);
// // //       const arr = raw ? JSON.parse(raw) : [];
// // //       arr.push(item);
// // //       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
// // //       Alert.alert("Saved", "Sticker saved locally.");
// // //       // optionally navigate back or clear fields
// // //       // navigation.goBack();
// // //     } catch (e) {
// // //       console.warn("Failed to save sticker", e);
// // //       Alert.alert("Save failed", "Couldn't save sticker locally.");
// // //     }
// // //   };

// // //   // human readable size
// // //   const humanSize = (bytes) => {
// // //     if (!bytes) return "";
// // //     if (bytes < 1024) return `${bytes} B`;
// // //     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
// // //     return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <StatusBar barStyle="light-content" />

// // //       {/* Header */}
// // //       <View style={styles.headerRow}>
// // //         <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// // //           <Ionicons name="chevron-back" size={24} color="#ffffff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Stickers</Text>
// // //         <View style={{ width: 24 }} />
// // //       </View>

// // //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// // //         {/* Upload row */}
// // //         <View style={styles.uploadRow}>
// // //           <TouchableOpacity
// // //             style={[
// // //               styles.uploadCircle,
// // //               stickerUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
// // //             ]}
// // //             onPress={handleUploadPress}
// // //             activeOpacity={0.8}
// // //           >
// // //             {processing ? (
// // //               <ActivityIndicator color="#9FB4FF" />
// // //             ) : stickerUri ? (
// // //               <Image source={{ uri: stickerUri }} style={styles.uploadPreviewThumb} />
// // //             ) : (
// // //               <Ionicons name="add" size={30} color="#9FB4FF" />
// // //             )}
// // //           </TouchableOpacity>

// // //           <TouchableOpacity style={styles.previewButton} onPress={handlePreview} activeOpacity={0.8}>
// // //             <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
// // //             <Text style={styles.previewText}>Preview</Text>
// // //           </TouchableOpacity>
// // //         </View>

// // //         <Text style={styles.uploadMainLabel}>Upload a File</Text>
// // //         <Text style={styles.uploadSubLabel}>
// // //           File should be png, jpg, jpeg, or GIF{"\n"}
// // //           <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
// // //         </Text>

// // //         {/* show selected file info */}
// // //         {stickerInfo && (
// // //           <View style={styles.fileInfo}>
// // //             <Text style={styles.fileInfoText}>
// // //               {stickerInfo.name ? stickerInfo.name : "Selected file"} • {humanSize(stickerInfo.size)}{" "}
// // //               {stickerInfo.type ? `• ${stickerInfo.type.split("/").pop()}` : ""}
// // //             </Text>
// // //           </View>
// // //         )}

// // //         {/* Upload Instructions */}
// // //         <View style={styles.section}>
// // //           <View style={styles.sectionTitleRow}>
// // //             <Text style={styles.sectionTitle}>Upload Instructions</Text>
// // //             <Ionicons name="information-circle-outline" size={14} color="#9FB4FF" />
// // //           </View>

// // //           <View style={styles.instructionsCard}>
// // //             <Text style={styles.instructionsText}>
// // //               Stickers can be static (jpg, png) or animated (png, GIF). Stickers must
// // //               be exactly 320x320 pixels and no larger than 1mb. We will automatically
// // //               resize static images for you when possible. Animated GIFs are preserved
// // //               (we do not modify GIF animation).{"\n\n"}
// // //               For more information about file types and tips on uploading custom
// // //               stickers, check out the Help Center.
// // //             </Text>
// // //           </View>
// // //         </View>

// // //         {/* Sticker Name */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.fieldLabel}>Sticker Name</Text>
// // //           <View style={styles.fieldInputWrapper}>
// // //             <TextInput
// // //               value={stickerName}
// // //               onChangeText={setStickerName}
// // //               placeholder="Sticker Name"
// // //               placeholderTextColor="rgba(255,255,255,0.5)"
// // //               style={styles.singleLineInput}
// // //             />
// // //             <Ionicons name="create-outline" size={18} color="#9FB4FF" style={{ marginLeft: 8 }} />
// // //           </View>
// // //         </View>

// // //         {/* Description */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.fieldLabel}>Descriptions</Text>
// // //           <View style={styles.multiInputWrapper}>
// // //             <TextInput
// // //               value={description}
// // //               onChangeText={setDescription}
// // //               placeholder="Description"
// // //               placeholderTextColor="rgba(255,255,255,0.5)"
// // //               style={styles.multiLineInput}
// // //               multiline
// // //               textAlignVertical="top"
// // //               maxLength={500}
// // //             />
// // //             <Text style={styles.charCount}>{`${description.length}/500`}</Text>
// // //           </View>
// // //         </View>

// // //         {/* Save button */}
// // //         <TouchableOpacity
// // //           style={styles.saveButtonWrapper}
// // //           activeOpacity={0.9}
// // //           onPress={handleSave}
// // //         >
// // //           <LinearGradient colors={["#355DFF", "#7F5DFF"]} style={styles.saveGradient}>
// // //             <Text style={styles.saveText}>Save</Text>
// // //           </LinearGradient>
// // //         </TouchableOpacity>

// // //         <View style={{ height: 40 }} />
// // //       </ScrollView>

// // //       {/* Preview modal */}
// // //       {showPreview && (
// // //         <View style={styles.previewOverlay}>
// // //           <View style={styles.previewCard}>
// // //             <View style={styles.previewHeader}>
// // //               <Text style={styles.previewTitle}>Preview</Text>
// // //               <TouchableOpacity onPress={() => setShowPreview(false)} activeOpacity={0.7}>
// // //                 <Ionicons name="close" size={20} color="#ffffff" />
// // //               </TouchableOpacity>
// // //             </View>

// // //             <View style={styles.previewImageWrapper}>
// // //               {stickerUri ? (
// // //                 <Image source={{ uri: stickerUri }} style={styles.previewImage} resizeMode="contain" />
// // //               ) : (
// // //                 <View style={styles.previewPlaceholder}>
// // //                   <Ionicons name="image-outline" size={32} color="#9FB4FF" />
// // //                   <Text style={styles.previewPlaceholderText}>Upload a sticker to preview</Text>
// // //                 </View>
// // //               )}
// // //             </View>
// // //           </View>
// // //         </View>
// // //       )}
// // //     </View>
// // //   );
// // // }

// // // /* Styles */
// // // const UPLOAD_SIZE = 90;
// // // const CARD_RADIUS = 18;

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: "#020821" },

// // //   headerRow: {
// // //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// // //     paddingHorizontal: 20,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "space-between",
// // //   },
// // //   headerTitle: { color: "#ffffff", fontSize: 18, fontWeight: "600" },

// // //   scrollContent: { paddingBottom: 32, paddingHorizontal: 18 },

// // //   uploadRow: {
// // //     marginTop: 28,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   uploadCircle: {
// // //     width: UPLOAD_SIZE,
// // //     height: UPLOAD_SIZE,
// // //     borderRadius: UPLOAD_SIZE / 2,
// // //     borderWidth: 1.5,
// // //     borderStyle: "dashed",
// // //     borderColor: "#264BFF",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     backgroundColor: "#071739",
// // //   },
// // //   uploadPreviewThumb: { width: UPLOAD_SIZE - 8, height: UPLOAD_SIZE - 8, borderRadius: (UPLOAD_SIZE - 8) / 2 },

// // //   previewButton: {
// // //     position: "absolute",
// // //     right: 24,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   previewText: { marginLeft: 6, color: "#9FB4FF", fontSize: 12 },

// // //   uploadMainLabel: { marginTop: 12, textAlign: "center", color: "#ffffff", fontSize: 14, fontWeight: "500" },
// // //   uploadSubLabel: { marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 16 },

// // //   fileInfo: { marginTop: 10, alignItems: "center" },
// // //   fileInfoText: { color: "rgba(159,180,255,0.9)", fontSize: 12 },

// // //   section: { marginTop: 24 },
// // //   sectionTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
// // //   sectionTitle: { color: "#ffffff", fontSize: 13, marginRight: 6 },
// // //   instructionsCard: { borderRadius: CARD_RADIUS, backgroundColor: "#071739", borderWidth: 1, borderColor: "#132652", paddingHorizontal: 14, paddingVertical: 12 },
// // //   instructionsText: { color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 17 },

// // //   fieldLabel: { color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 8 },
// // //   fieldInputWrapper: {
// // //     borderRadius: CARD_RADIUS,
// // //     backgroundColor: "#071739",
// // //     borderWidth: 1,
// // //     borderColor: "#2849D8",
// // //     paddingHorizontal: 14,
// // //     paddingVertical: 10,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   singleLineInput: { flex: 1, color: "#ffffff", fontSize: 14 },

// // //   multiInputWrapper: {
// // //     borderRadius: CARD_RADIUS,
// // //     backgroundColor: "#071739",
// // //     borderWidth: 1,
// // //     borderColor: "#2849D8",
// // //     paddingHorizontal: 14,
// // //     paddingTop: 10,
// // //     paddingBottom: 8,
// // //     minHeight: 120,
// // //   },
// // //   multiLineInput: { color: "#ffffff", fontSize: 13, lineHeight: 18, flex: 1 },
// // //   charCount: { marginTop: 4, textAlign: "right", fontSize: 11, color: "rgba(159,180,255,0.9)" },

// // //   saveButtonWrapper: { marginTop: 26, borderRadius: CARD_RADIUS, overflow: "hidden" },
// // //   saveGradient: { paddingVertical: 13, justifyContent: "center", alignItems: "center" },
// // //   saveText: { color: "#ffffff", fontSize: 15, fontWeight: "600" },

// // //   /* Preview overlay */
// // //   previewOverlay: {
// // //     position: "absolute",
// // //     top: 0, bottom: 0, left: 0, right: 0,
// // //     backgroundColor: "rgba(0,0,0,0.55)",
// // //     justifyContent: "center", alignItems: "center", paddingHorizontal: 32,
// // //   },
// // //   previewCard: {
// // //     width: "100%", maxWidth: 380, borderRadius: 26, backgroundColor: "#050C26",
// // //     borderWidth: 1, borderColor: "#273A7A", paddingHorizontal: 20, paddingVertical: 18,
// // //   },
// // //   previewHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
// // //   previewTitle: { color: "#ffffff", fontSize: 14, fontWeight: "500" },
// // //   previewImageWrapper: { borderRadius: 24, overflow: "hidden", alignSelf: "center", width: "100%", aspectRatio: 1 },
// // //   previewImage: { width: "100%", height: "100%" },
// // //   previewPlaceholder: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#08173A" },
// // //   previewPlaceholderText: { marginTop: 8, color: "#9FB4FF", fontSize: 12 },
// // // });
// // import React, { useState } from "react";
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
// //   ActivityIndicator,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { LinearGradient } from "expo-linear-gradient";
// // import * as ImagePicker from "expo-image-picker";
// // import * as ImageManipulator from "expo-image-manipulator";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // const STORAGE_KEY = "@app:stickers";
// // const MAX_BYTES = 1 * 1024 * 1024; // 1 MB
// // const TARGET_SIZE = 320; // px

// // export default function StickersScreen({ navigation }) {
// //   const [stickerName, setStickerName] = useState("Suss hi Clean");
// //   const [description, setDescription] = useState(
// //     "See our help Center for tips on writing sticker descriptions."
// //   );

// //   const [stickerUri, setStickerUri] = useState(null);
// //   const [stickerInfo, setStickerInfo] = useState(null); // { size, type, name }
// //   const [processing, setProcessing] = useState(false);
// //   const [showPreview, setShowPreview] = useState(false);

// //   const handleBack = () => navigation?.goBack && navigation.goBack();

// //   // helper: fetch uri and return blob & type & size
// //   async function fetchBlobInfo(uri) {
// //     const res = await fetch(uri);
// //     const blob = await res.blob();
// //     // try to detect extension/type
// //     const type = blob.type || "";
// //     return { blob, type, size: blob.size };
// //   }

// //   // try to reduce size for static images (png/jpg) to under MAX_BYTES
// //   async function compressAndResize(uri) {
// //     // resize to TARGET_SIZE x TARGET_SIZE and compress progressively
// //     let quality = 0.9;
// //     let lastResult = null;
// //     for (let i = 0; i < 5; i++) {
// //       const manipResult = await ImageManipulator.manipulateAsync(
// //         uri,
// //         [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
// //         { compress: quality, format: ImageManipulator.SaveFormat.PNG }
// //       );
// //       lastResult = manipResult;
// //       const info = await fetchBlobInfo(manipResult.uri);
// //       if (info.size <= MAX_BYTES) {
// //         return { uri: manipResult.uri, info };
// //       }
// //       // lower quality and try JPEG (better compression usually)
// //       quality -= 0.2;
// //       if (quality <= 0 && i >= 2) {
// //         // last attempt use JPEG with moderate quality
// //         const jpegRes = await ImageManipulator.manipulateAsync(
// //           uri,
// //           [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
// //           { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG }
// //         );
// //         const jpegInfo = await fetchBlobInfo(jpegRes.uri);
// //         if (jpegInfo.size <= MAX_BYTES) return { uri: jpegRes.uri, info: jpegInfo };
// //         lastResult = jpegRes;
// //       }
// //     }
// //     // if still large, return last manip result (might still be >1MB)
// //     if (lastResult) {
// //       const info = await fetchBlobInfo(lastResult.uri);
// //       return { uri: lastResult.uri, info };
// //     }
// //     return null;
// //   }

// //   // Robust permission + picker handling
// //   const handleUploadPress = async () => {
// //     try {
// //       // Request permissions for media library
// //       const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();

// //       // On iOS the status can be 'granted' or 'limited'
// //       if (perm.status !== "granted" && perm.status !== "limited") {
// //         // If not granted, show alert with instructions
// //         Alert.alert(
// //           "Permission needed",
// //           "Please allow access to your photos to upload stickers. Go to Settings → Privacy → Photos and allow access for this app.",
// //           [
// //             { text: "Cancel", style: "cancel" },
// //             { text: "Open Settings", onPress: () => ImagePicker.openSettings?.() },
// //           ]
// //         );
// //         return;
// //       }

// //       // Launch the image library
// //       const result = await ImagePicker.launchImageLibraryAsync({
// //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //         allowsEditing: false,
// //         quality: 1,
// //       });

// //       if (!result) return;

// //       // handle both shapes (newer: { canceled, assets }, older: { cancelled, uri })
// //       if (result.canceled === true || result.cancelled === true) {
// //         // user dismissed picker
// //         return;
// //       }

// //       // support both assets array (new) and uri (old)
// //       let asset = null;
// //       if (result.assets && result.assets.length > 0) {
// //         asset = result.assets[0];
// //       } else if (result.uri) {
// //         asset = { uri: result.uri, fileName: result.fileName || null, type: result.type || "image" };
// //       }

// //       if (!asset || !asset.uri) {
// //         Alert.alert("No image", "Couldn't get the selected image. Try again.");
// //         return;
// //       }

// //       setProcessing(true);

// //       const uri = asset.uri;
// //       const lc = uri.toLowerCase();
// //       const isGif =
// //         lc.endsWith(".gif") ||
// //         (asset.fileName && asset.fileName.toLowerCase().endsWith(".gif")) ||
// //         (asset.type && asset.type === "image/gif");

// //       // get initial blob info
// //       const initial = await fetchBlobInfo(uri);
// //       const initialSize = initial.size || 0;

// //       // Allowed types
// //       const allowedExt = [".png", ".jpg", ".jpeg", ".gif"];
// //       const hasAllowed = allowedExt.some((ext) => lc.endsWith(ext));
// //       if (!hasAllowed && !initial.type) {
// //         // try to allow based on MIME header; if neither, reject
// //         Alert.alert("Invalid file", "Please select a PNG, JPG or GIF file.");
// //         setProcessing(false);
// //         return;
// //       }

// //       // GIF handling: do NOT manipulate (to preserve animation).
// //       if (isGif) {
// //         if (initialSize > MAX_BYTES) {
// //           Alert.alert(
// //             "File too large",
// //             "Animated GIFs must be smaller than 1MB. Please choose a smaller GIF."
// //           );
// //           setProcessing(false);
// //           return;
// //         }
// //         // set as chosen
// //         setStickerUri(uri);
// //         setStickerInfo({ size: initialSize, type: "image/gif", name: asset.fileName || null });
// //         setProcessing(false);
// //         return;
// //       }

// //       // For static images (jpg/png) — ensure 320x320 and under 1MB
// //       if (initialSize <= MAX_BYTES) {
// //         // resize to target for consistent appearance
// //         try {
// //           const manip = await ImageManipulator.manipulateAsync(
// //             uri,
// //             [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
// //             { compress: 1, format: ImageManipulator.SaveFormat.PNG }
// //           );
// //           const info = await fetchBlobInfo(manip.uri);
// //           setStickerUri(manip.uri);
// //           setStickerInfo({ size: info.size, type: info.type || "image/png", name: asset.fileName || null });
// //         } catch (e) {
// //           // fallback: use original if manipulate fails
// //           setStickerUri(uri);
// //           setStickerInfo({ size: initialSize, type: initial.type || "image", name: asset.fileName || null });
// //         }
// //         setProcessing(false);
// //         return;
// //       }

// //       // If initial > 1MB, try compress/resizing
// //       const compressed = await compressAndResize(uri);
// //       if (compressed) {
// //         if (compressed.info.size <= MAX_BYTES) {
// //           setStickerUri(compressed.uri);
// //           setStickerInfo({ size: compressed.info.size, type: compressed.info.type || "image/png", name: asset.fileName || null });
// //         } else {
// //           // compressed but still >1MB - inform user
// //           Alert.alert(
// //             "Couldn't compress",
// //             "We couldn't compress the image below 1MB. Try choosing a smaller image."
// //           );
// //         }
// //       } else {
// //         Alert.alert(
// //           "Couldn't compress",
// //           "We couldn't compress the image below 1MB. Try choosing a smaller image."
// //         );
// //       }
// //       setProcessing(false);
// //     } catch (err) {
// //       console.error("Image pick error", err);
// //       Alert.alert("Error", "Something went wrong while picking or processing the image.");
// //       setProcessing(false);
// //     }
// //   };

// //   const handlePreview = () => {
// //     if (!stickerUri) {
// //       Alert.alert("No file", "Please upload a sticker first to preview.");
// //       return;
// //     }
// //     setShowPreview(true);
// //   };

// //   const handleSave = async () => {
// //     if (!stickerUri) {
// //       Alert.alert("No sticker", "Please upload a sticker before saving.");
// //       return;
// //     }
// //     if (!stickerName || stickerName.trim().length === 0) {
// //       Alert.alert("Enter name", "Please enter a sticker name.");
// //       return;
// //     }

// //     const item = {
// //       id: `st_${Date.now()}`,
// //       name: stickerName.trim(),
// //       description,
// //       uri: stickerUri,
// //       info: stickerInfo,
// //       createdAt: Date.now(),
// //     };

// //     try {
// //       const raw = await AsyncStorage.getItem(STORAGE_KEY);
// //       const arr = raw ? JSON.parse(raw) : [];
// //       arr.push(item);
// //       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
// //       Alert.alert("Saved", "Sticker saved locally.");
// //       // optionally navigate back or clear fields
// //       // navigation.goBack();
// //     } catch (e) {
// //       console.warn("Failed to save sticker", e);
// //       Alert.alert("Save failed", "Couldn't save sticker locally.");
// //     }
// //   };

// //   // human readable size
// //   const humanSize = (bytes) => {
// //     if (!bytes) return "";
// //     if (bytes < 1024) return `${bytes} B`;
// //     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
// //     return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="light-content" />

// //       {/* Header */}
// //       <View style={styles.headerRow}>
// //         <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
// //           <Ionicons name="chevron-back" size={24} color="#ffffff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Stickers</Text>
// //         <View style={{ width: 24 }} />
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// //         {/* Upload row */}
// //         <View style={styles.uploadRow}>
// //           <TouchableOpacity
// //             style={[
// //               styles.uploadCircle,
// //               stickerUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
// //             ]}
// //             onPress={handleUploadPress}
// //             activeOpacity={0.8}
// //           >
// //             {processing ? (
// //               <ActivityIndicator color="#9FB4FF" />
// //             ) : stickerUri ? (
// //               <Image source={{ uri: stickerUri }} style={styles.uploadPreviewThumb} />
// //             ) : (
// //               <Ionicons name="add" size={30} color="#9FB4FF" />
// //             )}
// //           </TouchableOpacity>

// //           <TouchableOpacity style={styles.previewButton} onPress={handlePreview} activeOpacity={0.8}>
// //             <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
// //             <Text style={styles.previewText}>Preview</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <Text style={styles.uploadMainLabel}>Upload a File</Text>
// //         <Text style={styles.uploadSubLabel}>
// //           File should be png, jpg, jpeg, or GIF{"\n"}
// //           <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
// //         </Text>

// //         {/* show selected file info */}
// //         {stickerInfo && (
// //           <View style={styles.fileInfo}>
// //             <Text style={styles.fileInfoText}>
// //               {stickerInfo.name ? stickerInfo.name : "Selected file"} • {humanSize(stickerInfo.size)}{" "}
// //               {stickerInfo.type ? `• ${String(stickerInfo.type).split("/").pop()}` : ""}
// //             </Text>
// //           </View>
// //         )}

// //         {/* Upload Instructions */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionTitleRow}>
// //             <Text style={styles.sectionTitle}>Upload Instructions</Text>
// //             <Ionicons name="information-circle-outline" size={14} color="#9FB4FF" />
// //           </View>

// //           <View style={styles.instructionsCard}>
// //             <Text style={styles.instructionsText}>
// //               Stickers can be static (jpg, png) or animated (png, GIF). Stickers must
// //               be exactly 320x320 pixels and no larger than 1mb. We will automatically
// //               resize static images for you when possible. Animated GIFs are preserved
// //               (we do not modify GIF animation).{"\n\n"}
// //               For more information about file types and tips on uploading custom
// //               stickers, check out the Help Center.
// //             </Text>
// //           </View>
// //         </View>

// //         {/* Sticker Name */}
// //         <View style={styles.section}>
// //           <Text style={styles.fieldLabel}>Sticker Name</Text>
// //           <View style={styles.fieldInputWrapper}>
// //             <TextInput
// //               value={stickerName}
// //               onChangeText={setStickerName}
// //               placeholder="Sticker Name"
// //               placeholderTextColor="rgba(255,255,255,0.5)"
// //               style={styles.singleLineInput}
// //             />
// //             <Ionicons name="create-outline" size={18} color="#9FB4FF" style={{ marginLeft: 8 }} />
// //           </View>
// //         </View>

// //         {/* Description */}
// //         <View style={styles.section}>
// //           <Text style={styles.fieldLabel}>Descriptions</Text>
// //           <View style={styles.multiInputWrapper}>
// //             <TextInput
// //               value={description}
// //               onChangeText={setDescription}
// //               placeholder="Description"
// //               placeholderTextColor="rgba(255,255,255,0.5)"
// //               style={styles.multiLineInput}
// //               multiline
// //               textAlignVertical="top"
// //               maxLength={500}
// //             />
// //             <Text style={styles.charCount}>{`${description.length}/500`}</Text>
// //           </View>
// //         </View>

// //         {/* Save button */}
// //         <TouchableOpacity
// //           style={styles.saveButtonWrapper}
// //           activeOpacity={0.9}
// //           onPress={handleSave}
// //         >
// //           <LinearGradient colors={["#355DFF", "#7F5DFF"]} style={styles.saveGradient}>
// //             <Text style={styles.saveText}>Save</Text>
// //           </LinearGradient>
// //         </TouchableOpacity>

// //         <View style={{ height: 40 }} />
// //       </ScrollView>

// //       {/* Preview modal */}
// //       {showPreview && (
// //         <View style={styles.previewOverlay}>
// //           <View style={styles.previewCard}>
// //             <View style={styles.previewHeader}>
// //               <Text style={styles.previewTitle}>Preview</Text>
// //               <TouchableOpacity onPress={() => setShowPreview(false)} activeOpacity={0.7}>
// //                 <Ionicons name="close" size={20} color="#ffffff" />
// //               </TouchableOpacity>
// //             </View>

// //             <View style={styles.previewImageWrapper}>
// //               {stickerUri ? (
// //                 <Image source={{ uri: stickerUri }} style={styles.previewImage} resizeMode="contain" />
// //               ) : (
// //                 <View style={styles.previewPlaceholder}>
// //                   <Ionicons name="image-outline" size={32} color="#9FB4FF" />
// //                   <Text style={styles.previewPlaceholderText}>Upload a sticker to preview</Text>
// //                 </View>
// //               )}
// //             </View>
// //           </View>
// //         </View>
// //       )}
// //     </View>
// //   );
// // }

// // /* Styles */
// // const UPLOAD_SIZE = 90;
// // const CARD_RADIUS = 18;

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#020821" },

// //   headerRow: {
// //     marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
// //     paddingHorizontal: 20,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },
// //   headerTitle: { color: "#ffffff", fontSize: 18, fontWeight: "600" },

// //   scrollContent: { paddingBottom: 32, paddingHorizontal: 18 },

// //   uploadRow: {
// //     marginTop: 28,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   uploadCircle: {
// //     width: UPLOAD_SIZE,
// //     height: UPLOAD_SIZE,
// //     borderRadius: UPLOAD_SIZE / 2,
// //     borderWidth: 1.5,
// //     borderStyle: "dashed",
// //     borderColor: "#264BFF",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#071739",
// //   },
// //   uploadPreviewThumb: { width: UPLOAD_SIZE - 8, height: UPLOAD_SIZE - 8, borderRadius: (UPLOAD_SIZE - 8) / 2 },

// //   previewButton: {
// //     position: "absolute",
// //     right: 24,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   previewText: { marginLeft: 6, color: "#9FB4FF", fontSize: 12 },

// //   uploadMainLabel: { marginTop: 12, textAlign: "center", color: "#ffffff", fontSize: 14, fontWeight: "500" },
// //   uploadSubLabel: { marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 16 },

// //   fileInfo: { marginTop: 10, alignItems: "center" },
// //   fileInfoText: { color: "rgba(159,180,255,0.9)", fontSize: 12 },

// //   section: { marginTop: 24 },
// //   sectionTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
// //   sectionTitle: { color: "#ffffff", fontSize: 13, marginRight: 6 },
// //   instructionsCard: { borderRadius: CARD_RADIUS, backgroundColor: "#071739", borderWidth: 1, borderColor: "#132652", paddingHorizontal: 14, paddingVertical: 12 },
// //   instructionsText: { color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 17 },

// //   fieldLabel: { color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 8 },
// //   fieldInputWrapper: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#2849D8",
// //     paddingHorizontal: 14,
// //     paddingVertical: 10,
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   singleLineInput: { flex: 1, color: "#ffffff", fontSize: 14 },

// //   multiInputWrapper: {
// //     borderRadius: CARD_RADIUS,
// //     backgroundColor: "#071739",
// //     borderWidth: 1,
// //     borderColor: "#2849D8",
// //     paddingHorizontal: 14,
// //     paddingTop: 10,
// //     paddingBottom: 8,
// //     minHeight: 120,
// //   },
// //   multiLineInput: { color: "#ffffff", fontSize: 13, lineHeight: 18, flex: 1 },
// //   charCount: { marginTop: 4, textAlign: "right", fontSize: 11, color: "rgba(159,180,255,0.9)" },

// //   saveButtonWrapper: { marginTop: 26, borderRadius: CARD_RADIUS, overflow: "hidden" },
// //   saveGradient: { paddingVertical: 13, justifyContent: "center", alignItems: "center" },
// //   saveText: { color: "#ffffff", fontSize: 15, fontWeight: "600" },

// //   /* Preview overlay */
// //   previewOverlay: {
// //     position: "absolute",
// //     top: 0, bottom: 0, left: 0, right: 0,
// //     backgroundColor: "rgba(0,0,0,0.55)",
// //     justifyContent: "center", alignItems: "center", paddingHorizontal: 32,
// //   },
// //   previewCard: {
// //     width: "100%", maxWidth: 380, borderRadius: 26, backgroundColor: "#050C26",
// //     borderWidth: 1, borderColor: "#273A7A", paddingHorizontal: 20, paddingVertical: 18,
// //   },
// //   previewHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
// //   previewTitle: { color: "#ffffff", fontSize: 14, fontWeight: "500" },
// //   previewImageWrapper: { borderRadius: 24, overflow: "hidden", alignSelf: "center", width: "100%", aspectRatio: 1 },
// //   previewImage: { width: "100%", height: "100%" },
// //   previewPlaceholder: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#08173A" },
// //   previewPlaceholderText: { marginTop: 8, color: "#9FB4FF", fontSize: 12 },
// // });
// import React, { useState } from "react";
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
//   ActivityIndicator,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import * as ImagePicker from "expo-image-picker";
// import * as FileSystem from "expo-file-system";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// /**
//  * Try to require expo-image-manipulator at runtime.
//  * If it's not installed, we won't crash — we'll use fallback behavior.
//  */
// let ImageManipulator = null;
// try {
//   ImageManipulator = require("expo-image-manipulator");
// } catch (e) {
//   ImageManipulator = null;
//   // console.warn("expo-image-manipulator not installed — compression disabled.");
// }

// const STORAGE_KEY = "@app:stickers";
// const MAX_BYTES = 1 * 1024 * 1024; // 1 MB
// const TARGET_SIZE = 320; // px

// export default function StickersScreen({ navigation }) {
//   const [stickerName, setStickerName] = useState("Suss hi Clean");
//   const [description, setDescription] = useState(
//     "See our help Center for tips on writing sticker descriptions."
//   );

//   const [stickerUri, setStickerUri] = useState(null);
//   const [stickerInfo, setStickerInfo] = useState(null); // { size, type, name }
//   const [processing, setProcessing] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleBack = () => navigation?.goBack && navigation.goBack();

//   // Helper to get file size and try to detect mime type via fetch blob
//   const getFileInfo = async (uri) => {
//     try {
//       const info = await FileSystem.getInfoAsync(uri, { size: true });
//       let size = info.size || 0;
//       let type = null;
//       try {
//         const res = await fetch(uri);
//         const blob = await res.blob();
//         type = blob.type || null;
//         if (!size && blob.size) size = blob.size;
//       } catch (e) {
//         // ignore fetch failures
//       }
//       return { size, type };
//     } catch (e) {
//       return { size: 0, type: null };
//     }
//   };

//   // Compress/resize with ImageManipulator if available
//   const compressAndResizeIfAvailable = async (uri) => {
//     if (!ImageManipulator) return null;
//     try {
//       let quality = 0.9;
//       let lastResult = null;
//       for (let i = 0; i < 5; i++) {
//         const manipResult = await ImageManipulator.manipulateAsync(
//           uri,
//           [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
//           { compress: quality, format: ImageManipulator.SaveFormat.PNG }
//         );
//         lastResult = manipResult;
//         const info = await getFileInfo(manipResult.uri);
//         if (info.size && info.size <= MAX_BYTES) {
//           return { uri: manipResult.uri, info };
//         }
//         quality -= 0.2;
//         if (quality <= 0 && i >= 2) {
//           // last attempt use JPEG moderate quality
//           const jpegRes = await ImageManipulator.manipulateAsync(
//             uri,
//             [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
//             { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG }
//           );
//           const jpegInfo = await getFileInfo(jpegRes.uri);
//           if (jpegInfo.size && jpegInfo.size <= MAX_BYTES) return { uri: jpegRes.uri, info: jpegInfo };
//           lastResult = jpegRes;
//         }
//       }
//       if (lastResult) {
//         const info = await getFileInfo(lastResult.uri);
//         return { uri: lastResult.uri, info };
//       }
//       return null;
//     } catch (e) {
//       console.warn("compressAndResizeIfAvailable error", e);
//       return null;
//     }
//   };

//   // ===== Updated: open gallery directly (no explicit requestMediaLibraryPermissionsAsync) =====
//   const handleUploadPress = async () => {
//     try {
//       // launch image library directly — system will prompt for permission if needed
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: false,
//         quality: 1,
//       });

//       if (!result) return;

//       // support both newer ({ canceled, assets }) and older ({ cancelled, uri })
//       if (result.canceled === true || result.cancelled === true) {
//         return; // user dismissed
//       }

//       let asset = null;
//       if (result.assets && result.assets.length > 0) {
//         asset = result.assets[0];
//       } else if (result.uri) {
//         asset = { uri: result.uri, fileName: result.fileName || null, type: result.type || "image" };
//       }

//       if (!asset || !asset.uri) {
//         Alert.alert("No image", "Couldn't get the selected image. Try again.");
//         return;
//       }

//       setProcessing(true);
//       const uri = asset.uri;
//       const lc = uri.toLowerCase();
//       const isGif =
//         lc.endsWith(".gif") ||
//         (asset.fileName && asset.fileName.toLowerCase().endsWith(".gif")) ||
//         (asset.type && asset.type === "image/gif");

//       const initial = await getFileInfo(uri);
//       const initialSize = initial.size || 0;

//       // basic extension/type check
//       const allowedExt = [".png", ".jpg", ".jpeg", ".gif"];
//       const hasAllowed = allowedExt.some((ext) => lc.endsWith(ext));
//       if (!hasAllowed && !initial.type) {
//         Alert.alert("Invalid file", "Please select a PNG, JPG or GIF file.");
//         setProcessing(false);
//         return;
//       }

//       // GIF: preserve animation — reject if too large
//       if (isGif) {
//         if (initialSize > MAX_BYTES) {
//           Alert.alert("File too large", "Animated GIFs must be smaller than 1MB. Please choose a smaller GIF.");
//           setProcessing(false);
//           return;
//         }
//         setStickerUri(uri);
//         setStickerInfo({ size: initialSize, type: initial.type || "image/gif", name: asset.fileName || null });
//         setProcessing(false);
//         return;
//       }

//       // Static image
//       if (initialSize <= MAX_BYTES) {
//         // normalize size if manipulator present
//         if (ImageManipulator) {
//           try {
//             const manip = await ImageManipulator.manipulateAsync(
//               uri,
//               [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
//               { compress: 1, format: ImageManipulator.SaveFormat.PNG }
//             );
//             const info = await getFileInfo(manip.uri);
//             setStickerUri(manip.uri);
//             setStickerInfo({ size: info.size, type: info.type || "image/png", name: asset.fileName || null });
//             setProcessing(false);
//             return;
//           } catch (e) {
//             // fallback to original
//             setStickerUri(uri);
//             setStickerInfo({ size: initialSize, type: initial.type || "image", name: asset.fileName || null });
//             setProcessing(false);
//             return;
//           }
//         } else {
//           // manipulator not installed — accept original if <= 1MB
//           setStickerUri(uri);
//           setStickerInfo({ size: initialSize, type: initial.type || "image", name: asset.fileName || null });
//           setProcessing(false);
//           return;
//         }
//       }

//       // initialSize > MAX_BYTES: try compress/resizing if possible
//       if (ImageManipulator) {
//         const compressed = await compressAndResizeIfAvailable(uri);
//         if (compressed && compressed.info && compressed.info.size <= MAX_BYTES) {
//           setStickerUri(compressed.uri);
//           setStickerInfo({ size: compressed.info.size, type: compressed.info.type || "image", name: asset.fileName || null });
//           setProcessing(false);
//           return;
//         } else {
//           Alert.alert("Couldn't compress", "We couldn't compress the image below 1MB. Choose a smaller image or install expo-image-manipulator for automatic compression.");
//           setProcessing(false);
//           return;
//         }
//       } else {
//         Alert.alert(
//           "File too large",
//           "Selected image is larger than 1MB. Install 'expo-image-manipulator' for automatic compression OR pick a smaller image."
//         );
//         setProcessing(false);
//         return;
//       }
//     } catch (err) {
//       console.error("Image pick error", err);
//       Alert.alert("Error", "Something went wrong while picking or processing the image.");
//       setProcessing(false);
//     }
//   };

//   const handlePreview = () => {
//     if (!stickerUri) {
//       Alert.alert("No file", "Please upload a sticker first to preview.");
//       return;
//     }
//     setShowPreview(true);
//   };

//   const handleSave = async () => {
//     if (!stickerUri) {
//       Alert.alert("No sticker", "Please upload a sticker before saving.");
//       return;
//     }
//     if (!stickerName || stickerName.trim().length === 0) {
//       Alert.alert("Enter name", "Please enter a sticker name.");
//       return;
//     }

//     const item = {
//       id: `st_${Date.now()}`,
//       name: stickerName.trim(),
//       description,
//       uri: stickerUri,
//       info: stickerInfo,
//       createdAt: Date.now(),
//     };

//     try {
//       const raw = await AsyncStorage.getItem(STORAGE_KEY);
//       const arr = raw ? JSON.parse(raw) : [];
//       arr.push(item);
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
//       Alert.alert("Saved", "Sticker saved locally.");
//     } catch (e) {
//       console.warn("Failed to save sticker", e);
//       Alert.alert("Save failed", "Couldn't save sticker locally.");
//     }
//   };

//   const humanSize = (bytes) => {
//     if (!bytes) return "";
//     if (bytes < 1024) return `${bytes} B`;
//     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
//     return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" />

//       {/* Header */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
//           <Ionicons name="chevron-back" size={24} color="#ffffff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Stickers</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         {/* Upload row */}
//         <View style={styles.uploadRow}>
//           <TouchableOpacity
//             style={[
//               styles.uploadCircle,
//               stickerUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
//             ]}
//             onPress={handleUploadPress}
//             activeOpacity={0.8}
//           >
//             {processing ? (
//               <ActivityIndicator color="#9FB4FF" />
//             ) : stickerUri ? (
//               <Image source={{ uri: stickerUri }} style={styles.uploadPreviewThumb} />
//             ) : (
//               <Ionicons name="add" size={30} color="#9FB4FF" />
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.previewButton} onPress={handlePreview} activeOpacity={0.8}>
//             <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
//             <Text style={styles.previewText}>Preview</Text>
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.uploadMainLabel}>Upload a File</Text>
//         <Text style={styles.uploadSubLabel}>
//           File should be png, jpg, jpeg, or GIF{"\n"}
//           <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
//         </Text>

//         {/* show selected file info */}
//         {stickerInfo && (
//           <View style={styles.fileInfo}>
//             <Text style={styles.fileInfoText}>
//               {stickerInfo.name ? stickerInfo.name : "Selected file"} • {humanSize(stickerInfo.size)}{" "}
//               {stickerInfo.type ? `• ${String(stickerInfo.type).split("/").pop()}` : ""}
//             </Text>
//           </View>
//         )}

//         {/* Upload Instructions */}
//         <View style={styles.section}>
//           <View style={styles.sectionTitleRow}>
//             <Text style={styles.sectionTitle}>Upload Instructions</Text>
//             <Ionicons name="information-circle-outline" size={14} color="#9FB4FF" />
//           </View>

//           <View style={styles.instructionsCard}>
//             <Text style={styles.instructionsText}>
//               Stickers can be static (jpg, png) or animated (png, GIF). Stickers must
//               be exactly 320x320 pixels and no larger than 1mb. Static images will be
//               resized/compressed automatically if 'expo-image-manipulator' is installed.
//             </Text>
//           </View>
//         </View>

//         {/* Sticker Name */}
//         <View style={styles.section}>
//           <Text style={styles.fieldLabel}>Sticker Name</Text>
//           <View style={styles.fieldInputWrapper}>
//             <TextInput
//               value={stickerName}
//               onChangeText={setStickerName}
//               placeholder="Sticker Name"
//               placeholderTextColor="rgba(255,255,255,0.5)"
//               style={styles.singleLineInput}
//             />
//             <Ionicons name="create-outline" size={18} color="#9FB4FF" style={{ marginLeft: 8 }} />
//           </View>
//         </View>

//         {/* Description */}
//         <View style={styles.section}>
//           <Text style={styles.fieldLabel}>Descriptions</Text>
//           <View style={styles.multiInputWrapper}>
//             <TextInput
//               value={description}
//               onChangeText={setDescription}
//               placeholder="Description"
//               placeholderTextColor="rgba(255,255,255,0.5)"
//               style={styles.multiLineInput}
//               multiline
//               textAlignVertical="top"
//               maxLength={500}
//             />
//             <Text style={styles.charCount}>{`${description.length}/500`}</Text>
//           </View>
//         </View>

//         {/* Save button */}
//         <TouchableOpacity
//           style={styles.saveButtonWrapper}
//           activeOpacity={0.9}
//           onPress={handleSave}
//         >
//           <LinearGradient colors={["#355DFF", "#7F5DFF"]} style={styles.saveGradient}>
//             <Text style={styles.saveText}>Save</Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <View style={{ height: 40 }} />
//       </ScrollView>

//       {/* Preview modal */}
//       {showPreview && (
//         <View style={styles.previewOverlay}>
//           <View style={styles.previewCard}>
//             <View style={styles.previewHeader}>
//               <Text style={styles.previewTitle}>Preview</Text>
//               <TouchableOpacity onPress={() => setShowPreview(false)} activeOpacity={0.7}>
//                 <Ionicons name="close" size={20} color="#ffffff" />
//               </TouchableOpacity>
//             </View>

//             <View style={styles.previewImageWrapper}>
//               {stickerUri ? (
//                 <Image source={{ uri: stickerUri }} style={styles.previewImage} resizeMode="contain" />
//               ) : (
//                 <View style={styles.previewPlaceholder}>
//                   <Ionicons name="image-outline" size={32} color="#9FB4FF" />
//                   <Text style={styles.previewPlaceholderText}>Upload a sticker to preview</Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// /* Styles */
// const UPLOAD_SIZE = 90;
// const CARD_RADIUS = 18;

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

//   scrollContent: { paddingBottom: 32, paddingHorizontal: 18 },

//   uploadRow: {
//     marginTop: 28,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   uploadCircle: {
//     width: UPLOAD_SIZE,
//     height: UPLOAD_SIZE,
//     borderRadius: UPLOAD_SIZE / 2,
//     borderWidth: 1.5,
//     borderStyle: "dashed",
//     borderColor: "#264BFF",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#071739",
//   },
//   uploadPreviewThumb: { width: UPLOAD_SIZE - 8, height: UPLOAD_SIZE - 8, borderRadius: (UPLOAD_SIZE - 8) / 2 },

//   previewButton: {
//     position: "absolute",
//     right: 24,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   previewText: { marginLeft: 6, color: "#9FB4FF", fontSize: 12 },

//   uploadMainLabel: { marginTop: 12, textAlign: "center", color: "#ffffff", fontSize: 14, fontWeight: "500" },
//   uploadSubLabel: { marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 16 },

//   fileInfo: { marginTop: 10, alignItems: "center" },
//   fileInfoText: { color: "rgba(159,180,255,0.9)", fontSize: 12 },

//   section: { marginTop: 24 },
//   sectionTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
//   sectionTitle: { color: "#ffffff", fontSize: 13, marginRight: 6 },
//   instructionsCard: { borderRadius: CARD_RADIUS, backgroundColor: "#071739", borderWidth: 1, borderColor: "#132652", paddingHorizontal: 14, paddingVertical: 12 },
//   instructionsText: { color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 17 },

//   fieldLabel: { color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 8 },
//   fieldInputWrapper: {
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#071739",
//     borderWidth: 1,
//     borderColor: "#2849D8",
//     paddingHorizontal: 14,
//     paddingVertical: 10,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   singleLineInput: { flex: 1, color: "#ffffff", fontSize: 14 },

//   multiInputWrapper: {
//     borderRadius: CARD_RADIUS,
//     backgroundColor: "#071739",
//     borderWidth: 1,
//     borderColor: "#2849D8",
//     paddingHorizontal: 14,
//     paddingTop: 10,
//     paddingBottom: 8,
//     minHeight: 120,
//   },
//   multiLineInput: { color: "#ffffff", fontSize: 13, lineHeight: 18, flex: 1 },
//   charCount: { marginTop: 4, textAlign: "right", fontSize: 11, color: "rgba(159,180,255,0.9)" },

//   saveButtonWrapper: { marginTop: 26, borderRadius: CARD_RADIUS, overflow: "hidden" },
//   saveGradient: { paddingVertical: 13, justifyContent: "center", alignItems: "center" },
//   saveText: { color: "#ffffff", fontSize: 15, fontWeight: "600" },

//   previewOverlay: {
//     position: "absolute",
//     top: 0, bottom: 0, left: 0, right: 0,
//     backgroundColor: "rgba(0,0,0,0.55)",
//     justifyContent: "center", alignItems: "center", paddingHorizontal: 32,
//   },
//   previewCard: {
//     width: "100%", maxWidth: 380, borderRadius: 26, backgroundColor: "#050C26",
//     borderWidth: 1, borderColor: "#273A7A", paddingHorizontal: 20, paddingVertical: 18,
//   },
//   previewHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
//   previewTitle: { color: "#ffffff", fontSize: 14, fontWeight: "500" },
//   previewImageWrapper: { borderRadius: 24, overflow: "hidden", alignSelf: "center", width: "100%", aspectRatio: 1 },
//   previewImage: { width: "100%", height: "100%" },
//   previewPlaceholder: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#08173A" },
//   previewPlaceholderText: { marginTop: 8, color: "#9FB4FF", fontSize: 12 },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Try to require expo-image-manipulator at runtime.
 * If it's not installed, we won't crash — we'll use fallback behavior.
 */
let ImageManipulator = null;
try {
  ImageManipulator = require("expo-image-manipulator");
} catch (e) {
  ImageManipulator = null;
}

const STORAGE_KEY = "@app:stickers";
const MAX_BYTES = 1 * 1024 * 1024; // 1 MB
const TARGET_SIZE = 320; // px

export default function StickersScreen({ navigation }) {
  const [stickerName, setStickerName] = useState("Suss hi Clean");
  const [description, setDescription] = useState(
    "See our help Center for tips on writing sticker descriptions."
  );

  const [stickerUri, setStickerUri] = useState(null);
  const [stickerInfo, setStickerInfo] = useState(null); // { size, type, name }
  const [processing, setProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // animation value for modal fade/slide
  const modalAnim = React.useRef(new Animated.Value(0)).current;

  const handleBack = () => navigation?.goBack && navigation.goBack();

  const animateOpen = () => {
    modalAnim.setValue(0);
    Animated.timing(modalAnim, {
      toValue: 1,
      duration: 220,
      useNativeDriver: true,
    }).start();
  };
  const animateClose = (cb) => {
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 180,
      useNativeDriver: true,
    }).start(() => cb && cb());
  };

  // Helper to get file size and try to detect mime type via fetch blob
  const getFileInfo = async (uri) => {
    try {
      const info = await FileSystem.getInfoAsync(uri, { size: true });
      let size = info.size || 0;
      let type = null;
      try {
        const res = await fetch(uri);
        const blob = await res.blob();
        type = blob.type || null;
        if (!size && blob.size) size = blob.size;
      } catch (e) {
        // ignore fetch failures
      }
      return { size, type };
    } catch (e) {
      return { size: 0, type: null };
    }
  };

  // Compress/resize with ImageManipulator if available
  const compressAndResizeIfAvailable = async (uri) => {
    if (!ImageManipulator) return null;
    try {
      let quality = 0.9;
      let lastResult = null;
      for (let i = 0; i < 5; i++) {
        const manipResult = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
          { compress: quality, format: ImageManipulator.SaveFormat.PNG }
        );
        lastResult = manipResult;
        const info = await getFileInfo(manipResult.uri);
        if (info.size && info.size <= MAX_BYTES) {
          return { uri: manipResult.uri, info };
        }
        quality -= 0.2;
        if (quality <= 0 && i >= 2) {
          // last attempt use JPEG moderate quality
          const jpegRes = await ImageManipulator.manipulateAsync(
            uri,
            [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
            { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG }
          );
          const jpegInfo = await getFileInfo(jpegRes.uri);
          if (jpegInfo.size && jpegInfo.size <= MAX_BYTES) return { uri: jpegRes.uri, info: jpegInfo };
          lastResult = jpegRes;
        }
      }
      if (lastResult) {
        const info = await getFileInfo(lastResult.uri);
        return { uri: lastResult.uri, info };
      }
      return null;
    } catch (e) {
      console.warn("compressAndResizeIfAvailable error", e);
      return null;
    }
  };

  // ===== Updated: open gallery directly (no explicit requestMediaLibraryPermissionsAsync) =====
  const handleUploadPress = async () => {
    try {
      // launch image library directly — system will prompt for permission if needed
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (!result) return;

      // support both newer ({ canceled, assets }) and older ({ cancelled, uri })
      if (result.canceled === true || result.cancelled === true) {
        return; // user dismissed
      }

      let asset = null;
      if (result.assets && result.assets.length > 0) {
        asset = result.assets[0];
      } else if (result.uri) {
        asset = { uri: result.uri, fileName: result.fileName || null, type: result.type || "image" };
      }

      if (!asset || !asset.uri) {
        Alert.alert("No image", "Couldn't get the selected image. Try again.");
        return;
      }

      setProcessing(true);
      const uri = asset.uri;
      const lc = uri.toLowerCase();
      const isGif =
        lc.endsWith(".gif") ||
        (asset.fileName && asset.fileName.toLowerCase().endsWith(".gif")) ||
        (asset.type && asset.type === "image/gif");

      const initial = await getFileInfo(uri);
      const initialSize = initial.size || 0;

      // basic extension/type check
      const allowedExt = [".png", ".jpg", ".jpeg", ".gif"];
      const hasAllowed = allowedExt.some((ext) => lc.endsWith(ext));
      if (!hasAllowed && !initial.type) {
        Alert.alert("Invalid file", "Please select a PNG, JPG or GIF file.");
        setProcessing(false);
        return;
      }

      // GIF: preserve animation — reject if too large
      if (isGif) {
        if (initialSize > MAX_BYTES) {
          Alert.alert("File too large", "Animated GIFs must be smaller than 1MB. Please choose a smaller GIF.");
          setProcessing(false);
          return;
        }
        setStickerUri(uri);
        setStickerInfo({ size: initialSize, type: initial.type || "image/gif", name: asset.fileName || null });
        setProcessing(false);
        return;
      }

      // Static image
      if (initialSize <= MAX_BYTES) {
        // normalize size if manipulator present
        if (ImageManipulator) {
          try {
            const manip = await ImageManipulator.manipulateAsync(
              uri,
              [{ resize: { width: TARGET_SIZE, height: TARGET_SIZE } }],
              { compress: 1, format: ImageManipulator.SaveFormat.PNG }
            );
            const info = await getFileInfo(manip.uri);
            setStickerUri(manip.uri);
            setStickerInfo({ size: info.size, type: info.type || "image/png", name: asset.fileName || null });
            setProcessing(false);
            return;
          } catch (e) {
            // fallback to original
            setStickerUri(uri);
            setStickerInfo({ size: initialSize, type: initial.type || "image", name: asset.fileName || null });
            setProcessing(false);
            return;
          }
        } else {
          // manipulator not installed — accept original if <= 1MB
          setStickerUri(uri);
          setStickerInfo({ size: initialSize, type: initial.type || "image", name: asset.fileName || null });
          setProcessing(false);
          return;
        }
      }

      // initialSize > MAX_BYTES: try compress/resizing if possible
      if (ImageManipulator) {
        const compressed = await compressAndResizeIfAvailable(uri);
        if (compressed && compressed.info && compressed.info.size <= MAX_BYTES) {
          setStickerUri(compressed.uri);
          setStickerInfo({ size: compressed.info.size, type: compressed.info.type || "image", name: asset.fileName || null });
          setProcessing(false);
          return;
        } else {
          Alert.alert("Couldn't compress", "We couldn't compress the image below 1MB. Choose a smaller image or install expo-image-manipulator for automatic compression.");
          setProcessing(false);
          return;
        }
      } else {
        Alert.alert(
          "File too large",
          "Selected image is larger than 1MB. Install 'expo-image-manipulator' for automatic compression OR pick a smaller image."
        );
        setProcessing(false);
        return;
      }
    } catch (err) {
      console.error("Image pick error", err);
      Alert.alert("Error", "Something went wrong while picking or processing the image.");
      setProcessing(false);
    }
  };

  const handlePreview = () => {
    if (!stickerUri) {
      Alert.alert("No file", "Please upload a sticker first to preview.");
      return;
    }
    animateOpen();
    setShowPreview(true);
  };

  const closePreview = () => {
    animateClose(() => setShowPreview(false));
  };

  const handleSave = async () => {
    if (!stickerUri) {
      Alert.alert("No sticker", "Please upload a sticker before saving.");
      return;
    }
    if (!stickerName || stickerName.trim().length === 0) {
      Alert.alert("Enter name", "Please enter a sticker name.");
      return;
    }

    const item = {
      id: `st_${Date.now()}`,
      name: stickerName.trim(),
      description,
      uri: stickerUri,
      info: stickerInfo,
      createdAt: Date.now(),
    };

    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push(item);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      Alert.alert("Saved", "Sticker saved locally.");
    } catch (e) {
      console.warn("Failed to save sticker", e);
      Alert.alert("Save failed", "Couldn't save sticker locally.");
    }
  };

  const humanSize = (bytes) => {
    if (!bytes) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  // interpolation for animation
  const modalScale = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] });
  const modalOpacity = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
  const backdropOpacity = modalAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 0.6] });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stickers</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Upload row */}
        <View style={styles.uploadRow}>
          <TouchableOpacity
            style={[
              styles.uploadCircle,
              stickerUri && { borderStyle: "solid", borderColor: "#4C7CFF" },
            ]}
            onPress={handleUploadPress}
            activeOpacity={0.8}
          >
            {processing ? (
              <ActivityIndicator color="#9FB4FF" />
            ) : stickerUri ? (
              <Image source={{ uri: stickerUri }} style={styles.uploadPreviewThumb} />
            ) : (
              <Ionicons name="add" size={30} color="#9FB4FF" />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.previewButton} onPress={handlePreview} activeOpacity={0.8}>
            <Ionicons name="eye-outline" size={18} color="#9FB4FF" />
            <Text style={styles.previewText}>Preview</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.uploadMainLabel}>Upload a File</Text>
        <Text style={styles.uploadSubLabel}>
          File should be png, jpg, jpeg, or GIF{"\n"}
          <Text style={{ fontSize: 11 }}>(less than 1mb Max)</Text>
        </Text>

        {/* show selected file info */}
        {stickerInfo && (
          <View style={styles.fileInfo}>
            <Text style={styles.fileInfoText}>
              {stickerInfo.name ? stickerInfo.name : "Selected file"} • {humanSize(stickerInfo.size)}{" "}
              {stickerInfo.type ? `• ${String(stickerInfo.type).split("/").pop()}` : ""}
            </Text>
          </View>
        )}

        {/* Upload Instructions */}
        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>Upload Instructions</Text>
            <Ionicons name="information-circle-outline" size={14} color="#9FB4FF" />
          </View>

          <View style={styles.instructionsCard}>
            <Text style={styles.instructionsText}>
              Stickers can be static (jpg, png) or animated (png, GIF). Stickers must
              be exactly 320x320 pixels and no larger than 1mb. Static images will be
              resized/compressed automatically if 'expo-image-manipulator' is installed.
            </Text>
          </View>
        </View>

        {/* Sticker Name */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Sticker Name</Text>
          <View style={styles.fieldInputWrapper}>
            <TextInput
              value={stickerName}
              onChangeText={setStickerName}
              placeholder="Sticker Name"
              placeholderTextColor="rgba(255,255,255,0.5)"
              style={styles.singleLineInput}
            />
            <Ionicons name="create-outline" size={18} color="#9FB4FF" style={{ marginLeft: 8 }} />
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Descriptions</Text>
          <View style={styles.multiInputWrapper}>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="Description"
              placeholderTextColor="rgba(255,255,255,0.5)"
              style={styles.multiLineInput}
              multiline
              textAlignVertical="top"
              maxLength={500}
            />
            <Text style={styles.charCount}>{`${description.length}/500`}</Text>
          </View>
        </View>

        {/* Save button */}
        <TouchableOpacity
          style={styles.saveButtonWrapper}
          activeOpacity={0.9}
          onPress={handleSave}
        >
          <LinearGradient colors={["#355DFF", "#7F5DFF"]} style={styles.saveGradient}>
            <Text style={styles.saveText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* ---------- Preview Popup (styled like screenshot) ---------- */}
      {showPreview && (
        <View style={styles.previewRoot}>
          <Animated.View style={[styles.previewBackdrop, { opacity: backdropOpacity }]} />

          <Animated.View
            style={[
              styles.previewWrapper,
              { transform: [{ scale: modalScale }], opacity: modalOpacity },
            ]}
          >
            {/* close icon top-right (outside card look) */}
            <TouchableOpacity
              style={styles.previewClose}
              onPress={closePreview}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="close" size={22} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.previewHeaderTitle}>Preview</Text>

            <View style={styles.previewImageOuter}>
              <View style={styles.previewImageInner}>
                {stickerUri ? (
                  <Image source={{ uri: stickerUri }} style={styles.previewImage} resizeMode="cover" />
                ) : (
                  <View style={styles.previewPlaceholder}>
                    <Ionicons name="image-outline" size={36} color="#9FB4FF" />
                    <Text style={styles.previewPlaceholderText}>No image</Text>
                  </View>
                )}
              </View>
            </View>
          </Animated.View>
        </View>
      )}
    </View>
  );
}

/* Styles */
const UPLOAD_SIZE = 90;
const CARD_RADIUS = 18;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020821" },

  headerRow: {
    marginTop: 8 + (Platform.OS === "ios" ? 12 : StatusBar.currentHeight || 0),
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { color: "#ffffff", fontSize: 18, fontWeight: "600" },

  scrollContent: { paddingBottom: 32, paddingHorizontal: 18 },

  uploadRow: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadCircle: {
    width: UPLOAD_SIZE,
    height: UPLOAD_SIZE,
    borderRadius: UPLOAD_SIZE / 2,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#264BFF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#071739",
  },
  uploadPreviewThumb: { width: UPLOAD_SIZE - 8, height: UPLOAD_SIZE - 8, borderRadius: (UPLOAD_SIZE - 8) / 2 },

  previewButton: {
    position: "absolute",
    right: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  previewText: { marginLeft: 6, color: "#9FB4FF", fontSize: 12 },

  uploadMainLabel: { marginTop: 12, textAlign: "center", color: "#ffffff", fontSize: 14, fontWeight: "500" },
  uploadSubLabel: { marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 16 },

  fileInfo: { marginTop: 10, alignItems: "center" },
  fileInfoText: { color: "rgba(159,180,255,0.9)", fontSize: 12 },

  section: { marginTop: 24 },
  sectionTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  sectionTitle: { color: "#ffffff", fontSize: 13, marginRight: 6 },
  instructionsCard: { borderRadius: CARD_RADIUS, backgroundColor: "#071739", borderWidth: 1, borderColor: "#132652", paddingHorizontal: 14, paddingVertical: 12 },
  instructionsText: { color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 17 },

  fieldLabel: { color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 8 },
  fieldInputWrapper: {
    borderRadius: CARD_RADIUS,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#2849D8",
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  singleLineInput: { flex: 1, color: "#ffffff", fontSize: 14 },

  multiInputWrapper: {
    borderRadius: CARD_RADIUS,
    backgroundColor: "#071739",
    borderWidth: 1,
    borderColor: "#2849D8",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
    minHeight: 120,
  },
  multiLineInput: { color: "#ffffff", fontSize: 13, lineHeight: 18, flex: 1 },
  charCount: { marginTop: 4, textAlign: "right", fontSize: 11, color: "rgba(159,180,255,0.9)" },

  saveButtonWrapper: { marginTop: 26, borderRadius: CARD_RADIUS, overflow: "hidden" },
  saveGradient: { paddingVertical: 13, justifyContent: "center", alignItems: "center" },
  saveText: { color: "#ffffff", fontSize: 15, fontWeight: "600" },

  /* preview popup styles */
  previewRoot: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
    elevation: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  previewBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
  },
  previewWrapper: {
    width: "86%",
    maxWidth: 420,
    borderRadius: 22,
    backgroundColor: "#05091A",
    paddingTop: 18,
    paddingBottom: 26,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#23305A",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
  },

  previewClose: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#0B1530",
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: "#2C4AFF",
  },

  previewHeaderTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
  },

  previewImageOuter: {
    width: "100%",
    alignItems: "center",
  },
  previewImageInner: {
    width: 220,
    height: 220,
    borderRadius: 20,
    backgroundColor: "#08173A",
    borderWidth: 1,
    borderColor: "#273A7A",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    elevation: 6,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  previewPlaceholder: { justifyContent: "center", alignItems: "center" },
  previewPlaceholderText: { marginTop: 8, color: "#9FB4FF" },
});


// // // src/screens/VideoCallScreen.js
// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   StatusBar,
// // } from "react-native";

// // export default function VideoCallScreen({ navigation, route }) {
// //   const { contact } = route.params || {};
// //   const name = contact?.name || "Perfecto";

// //   const [isMuted, setIsMuted] = useState(false);
// //   const [isVideoOff, setIsVideoOff] = useState(false);

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000000" />

// //       <View style={styles.remoteVideo}>
// //         {!isVideoOff ? (
// //           <Text style={styles.remoteText}>Remote video</Text>
// //         ) : (
// //           <Text style={styles.remoteText}>Video off</Text>
// //         )}
// //       </View>

// //       <View style={styles.localVideo}>
// //         <Text style={styles.localText}>You</Text>
// //       </View>

// //       <View style={styles.controls}>
// //         <Text style={styles.name}>{name}</Text>
// //         <View style={styles.row}>
// //           <TouchableOpacity
// //             style={styles.roundBtn}
// //             onPress={() => setIsMuted((m) => !m)}
// //           >
// //             <Text style={styles.iconText}>{isMuted ? "🔇" : "🎙️"}</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.roundBtn}
// //             onPress={() => setIsVideoOff((v) => !v)}
// //           >
// //             <Text style={styles.iconText}>{isVideoOff ? "🎥❌" : "🎥"}</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.endBtn}
// //             onPress={() => navigation.goBack()}
// //           >
// //             <Text style={styles.endIcon}>📞</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#000000" },
// //   remoteVideo: {
// //     flex: 1,
// //     backgroundColor: "#020617",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   remoteText: { color: "#E2E8F0", fontSize: 16 },
// //   localVideo: {
// //     position: "absolute",
// //     right: 16,
// //     bottom: 120,
// //     width: 100,
// //     height: 140,
// //     borderRadius: 16,
// //     backgroundColor: "#1E293B",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   localText: { color: "#E2E8F0", fontSize: 12 },
// //   controls: {
// //     paddingHorizontal: 24,
// //     paddingTop: 12,
// //     paddingBottom: 24,
// //     borderTopLeftRadius: 24,
// //     borderTopRightRadius: 24,
// //     backgroundColor: "#020617",
// //   },
// //   name: {
// //     color: "#FFFFFF",
// //     fontSize: 18,
// //     fontWeight: "600",
// //     textAlign: "center",
// //     marginBottom: 10,
// //   },
// //   row: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   roundBtn: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     backgroundColor: "#0F172A",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   iconText: { fontSize: 22 },
// //   endBtn: {
// //     width: 70,
// //     height: 70,
// //     borderRadius: 35,
// //     backgroundColor: "#EF4444",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   endIcon: { fontSize: 26, transform: [{ rotate: "135deg" }] },
// // });
// // VideoCallScreen.js (replace the previous content or merge)
// import React, { useEffect, useRef, useState } from "react";
// import {
//   View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform
// } from "react-native";
// import io from "socket.io-client";
// import {
//   RTCPeerConnection, mediaDevices, RTCView
// } from "react-native-webrtc";

// const SIGNALING_SERVER = "http://YOUR_SERVER:4000"; // replace

// const pcConfig = {
//   iceServers: [
//     { urls: "stun:stun.l.google.com:19302" },
//     // add TURN servers here for production
//   ],
// };

// export default function VideoCallScreen({ navigation, route }) {
//   const { contact, user } = route.params || {}; // contact = receiver info, user = current user
//   const myId = user?.id || "user1";
//   const remoteId = contact?.id || null;
//   const name = contact?.name || "Perfecto";

//   const [localStream, setLocalStream] = useState(null);
//   const [remoteStream, setRemoteStream] = useState(null);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isVideoOff, setIsVideoOff] = useState(false);

//   const socketRef = useRef(null);
//   const pcRef = useRef(null);

//   useEffect(() => {
//     socketRef.current = io(SIGNALING_SERVER, { transports: ["websocket"] });

//     socketRef.current.on("connect", () => {
//       console.log("connected to signaling");
//       socketRef.current.emit("register", myId);
//     });

//     socketRef.current.on("call:offer", async (payload) => {
//       console.log("incoming offer", payload);
//       await ensureGetLocalStream();
//       await createPeerConnection();

//       const desc = payload.sdp;
//       await pcRef.current.setRemoteDescription(desc);

//       const answer = await pcRef.current.createAnswer();
//       await pcRef.current.setLocalDescription(answer);

//       socketRef.current.emit("call:answer", {
//         callId: payload.callId,
//         from: myId,
//         to: payload.from,
//         sdp: pcRef.current.localDescription
//       });
//     });

//     socketRef.current.on("call:answer", async (payload) => {
//       console.log("got answer", payload);
//       const desc = payload.sdp;
//       if (pcRef.current) await pcRef.current.setRemoteDescription(desc);
//     });

//     socketRef.current.on("call:ice", async (payload) => {
//       if (pcRef.current && payload.candidate) {
//         try {
//           await pcRef.current.addIceCandidate(payload.candidate);
//         } catch (e) {
//           console.warn("addIceCandidate error", e);
//         }
//       }
//     });

//     socketRef.current.on("disconnect", () => {
//       console.log("signaling disconnected");
//     });

//     // cleanup
//     return () => {
//       if (pcRef.current) {
//         pcRef.current.close();
//         pcRef.current = null;
//       }
//       if (socketRef.current) socketRef.current.disconnect();
//       if (localStream) {
//         localStream.getTracks().forEach((t) => t.stop());
//       }
//     };
//   }, []);

//   async function ensureGetLocalStream() {
//     if (localStream) return;
//     const isFront = true;
//     const stream = await mediaDevices.getUserMedia({
//       audio: true,
//       video: {
//         facingMode: isFront ? "user" : "environment",
//         width: 640,
//         height: 480,
//         frameRate: 30
//       }
//     });
//     setLocalStream(stream);
//   }

//   async function createPeerConnection() {
//     if (pcRef.current) return;
//     const pc = new RTCPeerConnection(pcConfig);
//     pcRef.current = pc;

//     if (localStream) {
//       localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
//     } else {
//       // Wait for local stream then add tracks
//       await ensureGetLocalStream();
//       localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
//     }

//     pc.onicecandidate = (event) => {
//       if (event.candidate) {
//         socketRef.current.emit("call:ice", {
//           to: remoteId,
//           from: myId,
//           candidate: event.candidate
//         });
//       }
//     };

//     pc.ontrack = (event) => {
//       console.log("ontrack", event);
//       const [stream] = event.streams;
//       setRemoteStream(stream);
//     };

//     return pc;
//   }

//   // Caller: initiate call
//   async function startCall() {
//     await ensureGetLocalStream();
//     await createPeerConnection();

//     const offer = await pcRef.current.createOffer();
//     await pcRef.current.setLocalDescription(offer);

//     const callId = `${myId}_${remoteId}_${Date.now()}`; // or get from server createCall

//     socketRef.current.emit("call:offer", {
//       callId,
//       from: myId,
//       to: remoteId,
//       sdp: pcRef.current.localDescription,
//       callType: "video"
//     });

//     // Optionally: call REST startCall to record call
//     // fetch(`${SIGNALING_SERVER}/api/calls/start`, { method: "POST", headers:..., body: JSON.stringify({receiver_id: remoteId, call_type: "video"})})
//   }

//   function endCall() {
//     if (pcRef.current) {
//       pcRef.current.close();
//       pcRef.current = null;
//     }
//     if (localStream) {
//       localStream.getTracks().forEach((t) => t.stop());
//       setLocalStream(null);
//     }
//     setRemoteStream(null);
//     navigation.goBack();

//     // optionally notify server via REST or socket event to update call status
//     // socketRef.current.emit("call:end", { from: myId, to: remoteId, callId })
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000000" />

//       <View style={styles.remoteVideo}>
//         {remoteStream ? (
//           <RTCView streamURL={remoteStream.toURL()} style={{flex:1}} />
//         ) : (
//           <Text style={styles.remoteText}>{isVideoOff ? "Video off" : "Remote video"}</Text>
//         )}
//       </View>

//       <View style={styles.localVideo}>
//         {localStream ? (
//           <RTCView streamURL={localStream.toURL()} style={{width:100,height:140}} />
//         ) : (
//           <Text style={styles.localText}>You</Text>
//         )}
//       </View>

//       <View style={styles.controls}>
//         <Text style={styles.name}>{name}</Text>
//         <View style={styles.row}>
//           <TouchableOpacity style={styles.roundBtn} onPress={() => setIsMuted(m => !m)}>
//             <Text style={styles.iconText}>{isMuted ? "🔇" : "🎙️"}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.roundBtn} onPress={() => setIsVideoOff(v => !v)}>
//             <Text style={styles.iconText}>{isVideoOff ? "🎥❌" : "🎥"}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.endBtn} onPress={endCall}>
//             <Text style={styles.endIcon}>📞</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.roundBtn, {marginLeft:10}]} onPress={startCall}>
//             <Text>Start</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// // keep your existing styles here (or import)
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#000000" },
//   remoteVideo: {
//     flex: 1,
//     backgroundColor: "#020617",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   remoteText: { color: "#E2E8F0", fontSize: 16 },
//   localVideo: {
//     position: "absolute",
//     right: 16,
//     bottom: 120,
//     width: 100,
//     height: 140,
//     borderRadius: 16,
//     backgroundColor: "#1E293B",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   localText: { color: "#E2E8F0", fontSize: 12 },
//   controls: {
//     paddingHorizontal: 24,
//     paddingTop: 12,
//     paddingBottom: 24,
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     backgroundColor: "#020617",
//   },
//   name: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   roundBtn: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#0F172A",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   iconText: { fontSize: 22 },
//   endBtn: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: "#EF4444",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   endIcon: { fontSize: 26, transform: [{ rotate: "135deg" }] },
// });
// VideoCallScreen.js
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
  Platform,
} from "react-native";
import { RTCView, mediaDevices, RTCPeerConnection } from "react-native-webrtc";
import {
  startCallApi,
  saveSDPApi,
  addIceApi,
  getCallByIdApi,
  endCallApi,
} from "../utils/webrtcSignaling"; // path to helper
import AsyncStorage from "@react-native-async-storage/async-storage";

const STUN_SERVERS = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    // add your TURN servers here for production
  ],
};

export default function VideoCallScreen({ navigation, route }) {
  const { contact, callId: incomingCallId } = route.params || {};
  const name = contact?.name || "User";

  const [localStream, setLocalStream] = useState(null);
  const [remoteStreamUrl, setRemoteStreamUrl] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const pcRef = useRef(null);
  const callIdRef = useRef(incomingCallId || null);
  const pollingRef = useRef(null);

  // get token from AsyncStorage (or pass as prop)
  const getToken = async () => {
    try {
      return await AsyncStorage.getItem("token");
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    start();
    return cleanup;
  }, []);

  async function start() {
    const token = await getToken();
    try {
      // 1) get local media
      const constraints = {
        audio: true,
        video: { facingMode: "user", width: 640, height: 480, frameRate: 30 },
      };
      const stream = await mediaDevices.getUserMedia(constraints);
      setLocalStream(stream);

      // 2) create peer connection
      const pc = new RTCPeerConnection(STUN_SERVERS);
      pcRef.current = pc;

      // add local tracks
      stream.getTracks().forEach((t) => pc.addTrack(t, stream));

      // ontrack => remote stream
      const remoteStream = { toURL: null };
      pc.onaddstream = (event) => {
        // deprecated path (some devices)
        const s = event.stream;
        setRemoteStreamUrl(s.toURL ? s.toURL() : s.toURL);
      };
      pc.ontrack = (event) => {
        const s = event.streams && event.streams[0];
        if (s) {
          setRemoteStreamUrl(s.toURL ? s.toURL() : s.toURL);
        }
      };

      // ICE candidate -> send to server
      pc.onicecandidate = async ({ candidate }) => {
        if (candidate && callIdRef.current) {
          try {
            await addIceApi(token, callIdRef.current, candidate);
          } catch (e) {
            console.warn("addIce error", e);
          }
        }
      };

      // 3) create offer & send to server
      // If incoming call (we are callee) you'll instead wait for offer from server (accept flow)
      if (callIdRef.current) {
        // callee flow: we should fetch the offer and create answer
        await handleIncomingCall(pc, token, callIdRef.current);
      } else {
        // caller flow: start call via API
        const resp = await startCallApi(token, contact?.id, "video");
        if (!resp?.success) {
          Alert.alert("Error", "Could not start call");
          return;
        }
        callIdRef.current = resp.data?.call_id;
        // create local offer
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        // send offer to backend
        await saveSDPApi(token, callIdRef.current, { offer });

        // start polling for answer and remote ICEs
        startPollingForAnswer(pc, token, callIdRef.current);
      }
    } catch (err) {
      console.warn("start error", err);
      Alert.alert("Error", "Cannot start call. Check permissions & network.");
      cleanup();
    }
  }

  async function handleIncomingCall(pc, token, callId) {
    // Poll to get call object (which should contain 'offer')
    try {
      const res = await getCallByIdApi(token, callId);
      if (!res?.success) {
        console.warn("no call object yet");
        // fallback: poll until offer appears
        pollForOffer(pc, token, callId);
        return;
      }
      const session = res.data;
      const offer = session.offer;
      if (!offer) {
        pollForOffer(pc, token, callId);
        return;
      }
      // set remote desc with offer, create answer
      await pc.setRemoteDescription(offer);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      // send answer back
      await saveSDPApi(token, callId, { answer });
      // start polling for remote ICE candidates
      startPollingForRemoteIce(pc, token, callId);
    } catch (e) {
      console.warn("handleIncomingCall error", e);
      pollForOffer(pc, token, callId);
    }
  }

  function pollForOffer(pc, token, callId) {
    const t = setInterval(async () => {
      try {
        const res = await getCallByIdApi(token, callId);
        if (res?.success && res.data?.offer) {
          clearInterval(t);
          handleIncomingCall(pc, token, callId);
        }
      } catch (e) {}
    }, 1000);
    pollingRef.current = t;
  }

  function startPollingForAnswer(pc, token, callId) {
    const t = setInterval(async () => {
      try {
        const res = await getCallByIdApi(token, callId);
        if (res?.success && res.data?.answer) {
          const answer = res.data.answer;
          if (answer) {
            await pc.setRemoteDescription(answer);
            clearInterval(t);
            // You may also fetch pending remote ICE candidates here (if server stores them)
            startPollingForRemoteIce(pc, token, callId);
          }
        }
      } catch (e) {
        console.warn("poll answer err", e);
      }
    }, 1000);
    pollingRef.current = t;
  }

  function startPollingForRemoteIce(pc, token, callId) {
    // server should return collected remote ICE candidates in call object
    const t = setInterval(async () => {
      try {
        const res = await getCallByIdApi(token, callId);
        if (res?.success) {
          const remoteIceList = res.data?.remote_ices || [];
          for (const c of remoteIceList) {
            try {
              await pc.addIceCandidate(c);
            } catch (e) {}
          }
          // optional: if server indicates call ended, cleanup
          if (res.data?.status === "ended") {
            clearInterval(t);
            cleanup();
            navigation.goBack();
          }
        }
      } catch (e) {}
    }, 1000);
    pollingRef.current = t;
  }

  async function end() {
    const token = await getToken();
    if (callIdRef.current) {
      try {
        await endCallApi(token, callIdRef.current);
      } catch (e) {}
    }
    cleanup();
    navigation.goBack();
  }

  function cleanup() {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
    if (pcRef.current) {
      try {
        pcRef.current.close();
      } catch (e) {}
      pcRef.current = null;
    }
    if (localStream) {
      localStream.getTracks().forEach((t) => t.stop());
      setLocalStream(null);
    }
    setRemoteStreamUrl(null);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.remote}>
        {remoteStreamUrl ? (
          <RTCView streamURL={remoteStreamUrl} style={styles.rtc} />
        ) : (
          <Text style={styles.remoteText}>Waiting for remote...</Text>
        )}
      </View>

      {localStream && (
        <View style={styles.local}>
          <RTCView streamURL={localStream.toURL()} style={styles.localRtc} />
        </View>
      )}

      <View style={styles.controls}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.roundBtn} onPress={() => {
            setIsMuted((m) => {
              const next = !m;
              localStream && localStream.getAudioTracks().forEach(t => t.enabled = !next);
              return next;
            });
          }}>
            <Text style={styles.iconText}>{isMuted ? "🔇" : "🎙️"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundBtn} onPress={() => {
            setVideoOff((v) => {
              const next = !v;
              localStream && localStream.getVideoTracks().forEach(t => t.enabled = !next);
              return next;
            });
          }}>
            <Text style={styles.iconText}>{videoOff ? "🎥❌" : "🎥"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.endBtn} onPress={end}>
            <Text style={styles.endIcon}>📞</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  remote: { flex: 1, backgroundColor: "#020617", alignItems: "center", justifyContent: "center" },
  rtc: { width: "100%", height: "100%" },
  remoteText: { color: "#E2E8F0" },
  local: { position: "absolute", right: 12, top: 60, width: 120, height: 160, borderRadius: 10, overflow: "hidden", backgroundColor: "#111" },
  localRtc: { width: "100%", height: "100%" },
  controls: { padding: 16, backgroundColor: "#020617", borderTopLeftRadius: 18, borderTopRightRadius: 18 },
  name: { color: "#fff", fontSize: 18, textAlign: "center", marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" },
  roundBtn: { width: 64, height: 64, borderRadius: 32, backgroundColor: "#0F172A", alignItems: "center", justifyContent: "center" },
  iconText: { fontSize: 22 },
  endBtn: { width: 70, height: 70, borderRadius: 35, backgroundColor: "#EF4444", alignItems: "center", justifyContent: "center" },
  endIcon: { fontSize: 26, transform: [{ rotate: "135deg" }] },
});

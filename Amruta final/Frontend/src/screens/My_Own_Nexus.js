
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// export default function NexusTypeScreen({ navigation }) {

//   return (
//     <View style={styles.container}>

//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Text style={{ color: "#fff", fontSize: 20 }}>‹</Text>
//       </TouchableOpacity>

//       {/* Title */}
//       <Text style={styles.title}>What kind of Nexus are you building?</Text>
//       <Text style={styles.subtitle}>
//         This helps us shape your Nexus experience.{"\n"}Who's it for?
//       </Text>

//       {/* Options */}
//       <View style={{ marginTop: 40 }}>
        
//         {/* First Button */}
//         <TouchableOpacity 
//           style={styles.option} 
//           onPress={() => navigation.navigate("Build_Your_Nexus")}
//         >
//           <Image 
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }} 
//             style={styles.icon} 
//           />
//           <Text style={styles.optionText}>For me and my orbit circle</Text>
//         </TouchableOpacity>

//         {/* Second Button */}
//         <TouchableOpacity 
//           style={styles.option} 
//           onPress={() => navigation.navigate("Build_Your_Nexus")}
//         >
//           <Image 
//             source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828885.png" }} 
//             style={styles.icon} 
//           />
//           <Text style={styles.optionText}>For a public community space</Text>
//         </TouchableOpacity>

//       </View>

//       {/* Skip */}
//       <TouchableOpacity 
//         style={{ marginTop: 40 }} 
//         onPress={() => navigation.navigate("Build_Your_Nexus")}
//       >
//         <Text style={styles.skip}>
//           Not sure yet? <Text style={{ color: "#4da6ff" }}>skip</Text> for now.
//         </Text>
//       </TouchableOpacity>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#020b22',
//     paddingHorizontal: 25,
//     paddingTop: 70,
//   },

//   backButton: {
//     marginBottom: 20,
//   },

//   title: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: '700',
//   },

//   subtitle: {
//     color: '#8a9ab5',
//     marginTop: 10,
//     fontSize: 14,
//     lineHeight: 20,
//   },

//   option: {
//     width: '100%',
//     backgroundColor: '#0f1b36',
//     padding: 18,
//     borderRadius: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },

//   optionText: {
//     color: '#fff',
//     fontSize: 15,
//     marginLeft: 10,
//   },

//   icon: {
//     width: 26,
//     height: 26,
//     resizeMode: 'contain',
//   },

//   skip: {
//     color: "#8a9ab5",
//     fontSize: 14,
//     textAlign: "center",
//   },
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

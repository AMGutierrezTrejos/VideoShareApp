import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
import Colors from "../../../Utils/Colors";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Video
        style={styles.video}
        source={{
          uri: "https://cdn.pixabay.com/video/2020/03/13/33628-397860881_large.mp4",
        }}
        shouldPlay
        resizeMode="cover"
        isLooping={true}
      />
      <View
        style={{
          display: "flex",
          paddingTop: 100,
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: Colors.BACKGROUND_TRANSP,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
            fontSize: 35,
          }}
        >
          Video Share App
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
            fontSize: 15,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Excelent space to share your best moments
        </Text>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: Colors.WHITE,
            padding: 10,
            paddingHorizontal: 55,
            borderRadius: 99,
            position: "absolute",
            bottom: 100,
          }}
        >
          <Image
            source={require("./../../../assets/images/GoogleIcon.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontFamily: "outfit" }}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    height: "100%",
    width: "1000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

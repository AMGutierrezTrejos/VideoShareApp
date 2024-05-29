import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function VideoThumbnailItem({ video }) {
  return (
    <View style={{ flex: 1, margin: 5 }}>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: 0,
          padding: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Image
            source={{ uri: video?.Users?.profileImage }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: Colors.WHITE,
              borderRadius: 99,
            }}
          />
          <Text
            style={{ color: Colors.WHITE, fontFamily: "outfit", fontSize: 10 }}
          >
            {video?.Users?.username}
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Text
            style={{ color: Colors.WHITE, fontFamily: "outfit", fontSize: 10 }}
          >
            36
          </Text>
          <AntDesign name="like2" size={24} color="black" />
        </View>
      </View>

      <Image
        source={{ uri: video?.thumbnail }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

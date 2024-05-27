import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useNavigation } from "@react-navigation/native";

export default function AddScreen() {
  const navigation = useNavigation();

  // This is for selecting video from gallery
  const SelectVideoFile = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      GenerateThumbnail(result.assets[0].uri);
    }
  };

  //Used to generate thumbnail
  const GenerateThumbnail = async (videoUri) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri, {
        time: 15000,
      });
      navigation.navigate('PreviewScreen', { video: videoUri, thumbnail: uri });
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View
      style={{
        padding: 20,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWZuZ2t1bWNjMmFmNXE0eWl6NnY0ODd1YWU3dzhibzM4ZXdidmszeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnmEOUikgzEqI/giphy.gif",
          }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      </View>

      <Text style={{ marginTop: 20, fontFamily: "outfit-bold", fontSize: 20 }}>
        Upload Your Best Experience!
      </Text>
      <Text
        style={{ textAlign: "center", marginTop: 10, fontFamily: "outfit" }}
      >
        Let's Get Started
      </Text>

      <TouchableOpacity
        onPress={SelectVideoFile}
        style={{
          backgroundColor: Colors.BLACK,
          paddingHorizontal: 75,
          paddingVertical: 15,
          borderRadius: 99,
          marginTop: 30,
        }}
      >
        <Text
          style={{ color: Colors.WHITE, fontSize: 20, fontFamily: "outfit" }}
        >
          Select Video
        </Text>
      </TouchableOpacity>
    </View>
  );
}

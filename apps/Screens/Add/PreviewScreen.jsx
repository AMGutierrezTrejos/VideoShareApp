import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { s3bucket } from "../../Utils/S3BucketConfig";

export default function PreviewScreen() {
  const params = useRoute().params;
  const navigation = useNavigation();
  const [description, setDescription] = useState();

  useEffect(() => {
    console.log(params);
  }, []);

  const publishHandler = async () => {
    UploadFileToAws(params.video, "video");
  };

  const UploadFileToAws = async (file, type) => {
    const fileType = file.split(".").pop(); // Get the file extension .mp4 etc
    const params = {
      Bucket: "videosocialnetwork", // name of your bucket on AWS S3
      Key: `SocialNetworkMaoGT-${Date.now()}.${fileType}`, // name of the file in your bucket
      Body: await fetch(file).then((resp) => resp.blob()),
      ACL: "public-read", // set public read access
      ContentType: type == "video" ? `video/${fileType}` : `image/${fileType}`,
    };
    try {
      const data = await s3bucket
        .upload(params)
        .promise()
        .then((resp) => {
          console.log("File uploaded successfully", resp);
        });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ backgroundColor: Colors.WHITE, flex: 1 }}>
      <ScrollView style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          <Text style={{ fontFamily: "outfit", fontSize: 20 }}>Back</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingTop: 20 }}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
            Add Details
          </Text>
          <Image
            source={{ uri: params?.thumbnail }}
            style={{ width: 200, height: 300, borderRadius: 20, marginTop: 20 }}
          />
          <TextInput
            numberOfLines={3}
            placeholder="Description"
            onChangeText={(value) => setDescription(value)}
            style={{
              borderWidth: 1,
              width: "100%",
              borderRadius: 10,
              marginTop: 20,
              borderColor: Colors.BACKGROUND_TRANSP,
              paddingHorizontal: 20,
            }}
          />
          <TouchableOpacity
            onPress={publishHandler}
            style={{
              backgroundColor: Colors.BLACK,
              paddingHorizontal: 75,
              paddingVertical: 15,
              borderRadius: 99,
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 20,
                fontFamily: "outfit",
              }}
            >
              Publish
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

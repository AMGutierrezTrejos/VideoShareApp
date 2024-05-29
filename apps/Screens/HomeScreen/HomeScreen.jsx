import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { supabase } from "../../Utils/SupabaseConfig";

export default function HomeScreen() {
  const { user } = useUser();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    user && updateProfileImage();
    GetLatestVideoList();
  }, [user]);

  const updateProfileImage = async () => {
    const { data, error } = await supabase
      .from("Users")
      .update({ profileImage: user?.imageUrl })
      .eq("email", user?.primaryEmailAddress?.emailAddress)
      .is("profileImage", null)
      .select();

    console.log(data);
  };

  const GetLatestVideoList = async () => {
    const { data, error } = await supabase
      .from("PostList")
      .select("*,Users(username,name,profileImage)")
      .range(0, 10);

    console.log(data);
    console.log(error);

    setVideoList(data);
  };

  return (
    <View style={{ padding: 20, paddingTop: 25 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
          Video Social Network
        </Text>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 50, height: 50, borderRadius: 99 }}
        />
      </View>

      <View>
        <FlatList
          data={videoList}
          renderItem={({ item, index }) => <View></View>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

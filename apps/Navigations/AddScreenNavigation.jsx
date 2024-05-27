import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddScreen from "../Screens/Add/AddScreen";
import PreviewScreen from "../Screens/Add/PreviewScreen";

const Stack = createNativeStackNavigator();

export default function AddScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
    </Stack.Navigator>
  );
}

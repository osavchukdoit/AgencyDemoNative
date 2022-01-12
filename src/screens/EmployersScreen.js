import React from "react";
import { Text, View } from "react-native";

export const EmployersScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>EmployersScreen</Text>
      <Text>This is {route.params.name}'s page</Text>
    </View>
  );
};

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const EnrollWaiveTabBar = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // TODO: implement appropriate screen navigation
          navigation.navigate("StdSelectPlanScreen");
        }}
      >
        <Text>Enroll</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>Waive</Text>
      </TouchableOpacity>
    </View>
  );
};

import React from "react";
import { Button, Text, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title={"Navigate to EmployersScreen"}
        onPress={() => navigation.navigate("Employers", { name: "Local User" })}
      />
    </View>
  );
};

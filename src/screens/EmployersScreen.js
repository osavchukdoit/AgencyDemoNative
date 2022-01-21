import React from "react";
import { Text, View, Button } from "react-native";

export const EmployersScreen = ({ navigation, route }) => {
  const loadScene = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <Text>EmployersScreen</Text>
      {/* <Text>This is {route.params.name}'s page</Text> */}
      <Button title="Employers" onPress={loadScene} />
    </View>
  );
};

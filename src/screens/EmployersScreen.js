import React from "react";
import { Text, View, Button } from "react-native";

export const EmployersScreen = ({ navigation, route, onLogout }) => {
  const loadScene = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>EmployersScreen</Text>
      {/* <Text>This is {route.params.name}'s page</Text> */}
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

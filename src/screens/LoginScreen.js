import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import { THEME } from "../styles/theme";
import {login} from "../api/login";

export const LoginScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({ login: "", password: "" });

  const handleInputValue = (inputName, inputValue) => {
    setUserDetails({ ...userDetails, [inputName]: inputValue });
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchOnline}>
        <Text>online/offline</Text>
      </View>

      <View>
        <Text>Please log in to your account:</Text>
        <TextInput
          onChangeText={(text) => handleInputValue("login", text)}
          placeholder={"Login"}
          autoCapitalize={"none"}
        />
        <TextInput
          onChangeText={(text) => handleInputValue("password", text)}
          placeholder={"Password"}
          autoCapitalize={"none"}
        />
        <Button
          title={"Login"}
          onPress={() =>
            // navigation.navigate("Employers", { name: "Local User" })
            // login(userDetails)
            console.log(userDetails)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BACKGROUND.MAIN,
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  switchOnline: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

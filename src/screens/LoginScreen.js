import React, { useState } from "react";
import {TouchableOpacity, Button, Text, View, StyleSheet, TextInput, linearGradient } from "react-native";
import { THEME } from "../styles/theme";
import { login } from "../api/login";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const LoginScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({ login: "", password: "" });

  const handleInputValue = (inputName, inputValue) => {
    setUserDetails({ ...userDetails, [inputName]: inputValue });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginWindow}>
        <Text style={styles.loginWimdow_title}>
          Please log in to your account:
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => handleInputValue("login", text)}
          placeholder={"Username"}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => handleInputValue("password", text)}
          placeholder={"Password"}
          autoCapitalize={"none"}
        />
        <View style={styles.wraper_login_button}>
          <Button
            title={"Sign in to agencyEZ"}
            onPress={() =>
              // navigation.navigate("Employers", { name: "Local User" })
              // login(userDetails)
              console.log(userDetails)
            }
          />
        </View>
      </View>
    </View>
  );
};


/*
-вынести цвета в переменые
-втавить иконки в поля юзернаме и пасворд
-fontweight in title
- no capitalized in title button
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BACKGROUND.MAIN,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  loginWindow: {
    backgroundColor: "#fff",
    width: "80%",
    height: "50%",
    paddingTop: "8%",
    alignItems: "center",
  },
  loginWimdow_title: {
    fontSize: 32,
    color: THEME.COLOR.LOGIN_TITLE,
    marginBottom: 20,
    fontWeight: "bold"
  },

  textInput: {
    borderWidth: 1,
    borderColor: THEME.COLOR.INPUT_BORDER,
    borderRadius: 4,
    marginBottom: 15,
    height: 30,
    paddingLeft: 15,
    width: "78%",
    
  },

  wraper_login_button: {
    width: "78%",
  },
});

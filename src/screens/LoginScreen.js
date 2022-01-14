import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { login } from "../api/login";
import styles from "../styles/loginScreenStyles";
import { LinearGradient } from "expo-linear-gradient";

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
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(38, 153, 162, 1);", "transparent"]}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 0.5 }}
            style={styles.linear_background}
          />
          <TouchableOpacity
            style={styles.login_button}
            onPress={() =>
              // navigation.navigate("Employers", { name: "Local User" })
              // login(userDetails)
              console.log(userDetails)
            }
          >
            <Text style={styles.login_button_text}>Sign in to agencyEZ</Text>
          </TouchableOpacity>
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

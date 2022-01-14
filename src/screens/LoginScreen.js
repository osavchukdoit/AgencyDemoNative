import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import { login } from "../api/login";
import styles from "../styles/loginScreenStyles";
import { LinearGradient } from "react-native-linear-gradient"; 


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

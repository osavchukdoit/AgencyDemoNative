import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { login } from "../api/login";
import styles from "../styles/loginScreenStyles";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../styles/theme";

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
        <View style={styles.wraper_login_input}>
          <Image
            style={styles.login_input_img}
            source={require("../img/user.png")}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleInputValue("login", text)}
            placeholder={"Username"}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.wraper_login_input}>
          <Image
            style={styles.login_input_img}
            source={require("../img/pass.png")}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleInputValue("password", text)}
            placeholder={"Password"}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.wraper_login_button}>
          <LinearGradient
            // Background Linear Gradient
            colors={[THEME.COLOR.BUTTON_LOGIN_LIGHT_GRADIENT, "transparent"]}
            start={{ y: 0.0, x: 0.0 }}
            end={{ y: 0.0, x: 0.5 }}
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
-fontweight in title --no reaction on number values
- no capitalized in title button -DONE
*/

import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Button,
  Platform
} from "react-native";
import { login } from "../api/login";
import styles from "../styles/loginScreenStyles";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../styles/theme";
import { CONSTS } from "../consts";
// import { Button } from "react-native-web";

export const LoginScreen = ({ navigation, onLogin }) => {
  const [userDetails, setUserDetails] = useState({ login: "", password: "" });
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const onHandleFocus = (value) => {
    switch (value) {
      case CONSTS.LOGIN_SCREEN.LOGIN_INPUT:
        setIsFocusedLogin(true);
        break;

      case CONSTS.LOGIN_SCREEN.PASSWORD_INPUT:
        setIsFocusedPassword(true);
        break;
      default:
        return;
    }
  };

  const onHandleBlur = (value) => {
    switch (value) {
      case CONSTS.LOGIN_SCREEN.LOGIN_INPUT:
        setIsFocusedLogin(false);
        break;
      case CONSTS.LOGIN_SCREEN.PASSWORD_INPUT:
        setIsFocusedPassword(false);
        break;
      default:
        return;
    }
  };

  const handleInputValue = (inputName, inputValue) => {
    setUserDetails({ ...userDetails, [inputName]: inputValue });
  };

  const loadScene = ()=>{
    navigation.navigate("Employers")
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.loginWindow}
      >
        <Text style={styles.loginWimdowTitle}>
          Please log in to your account:
        </Text>
        <View style={styles.wraperLoginInput}>
          <Image
            style={styles.loginInputImg}
            source={require("../img/user.png")}
          />
          <TextInput
            onFocus={() => onHandleFocus(CONSTS.LOGIN_SCREEN.LOGIN_INPUT)}
            onBlur={() => onHandleBlur(CONSTS.LOGIN_SCREEN.LOGIN_INPUT)}
            style={isFocusedLogin ? styles.textInputFocus : styles.textInput}
            onChangeText={(text) =>
              handleInputValue(CONSTS.LOGIN_SCREEN.LOGIN_INPUT, text)
            }
            placeholder={"Username"}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.wraperLoginInput}>
          <Image
            style={styles.loginInputImg}
            source={require("../img/pass.png")}
          />

          <TextInput
            onFocus={() => onHandleFocus(CONSTS.LOGIN_SCREEN.PASSWORD_INPUT)}
            onBlur={() => onHandleBlur(CONSTS.LOGIN_SCREEN.PASSWORD_INPUT)}
            style={isFocusedPassword ? styles.textInputFocus : styles.textInput}
            onChangeText={(text) =>
              handleInputValue(CONSTS.LOGIN_SCREEN.PASSWORD_INPUT, text)
            }
            placeholder={"Password"}
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.wraperLoginButton}>
          <LinearGradient
            // Background Linear Gradient
            colors={[THEME.COLOR.BUTTON_LOGIN_LIGHT_GRADIENT, "transparent"]}
            start={{ y: 0.0, x: 0.0 }}
            end={{ y: 0.0, x: 0.5 }}
            style={styles.linearBackground}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={
              // navigation.navigate("Employers", { name: "Local User" })
              // login(userDetails)
              // console.log(userDetails)
              onLogin
            }
          >
            <Text style={styles.loginButtonText}>Sign in to agencyEz</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

import { StatusBar } from "expo-status-bar";
import React, { useState, Fragment } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./src/navigation/AppStack";
import { LoginScreen } from "./src/screens/LoginScreen";
// import { Fragment } from "react/cjs/react.production.min";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const onLogin = () => setIsLogin(true);
  const onLogout = () => {
    setIsLogin(false);
  };

  return isLogin ? (
    <Fragment>
      <TouchableOpacity style={styles.logoutButton}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <AppStack onLogout={onLogout} />
    </Fragment>
  ) : (
    <LoginScreen onLogin={onLogin} />
  );

  // <NavigationContainer>
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton:{
    position: "absolute",
    backgroundColor: "green",
    marginTop: 40,
  }
});

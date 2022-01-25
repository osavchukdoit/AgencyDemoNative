import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/redux/store";
import React, { Fragment } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppStack } from "./src/navigation/AppStack";
import { LoginScreen } from "./src/screens/LoginScreen";
import { isLogin, isLogout } from "./src/redux/login/loginActions";

function AppCoveredByProvider() {
  const value = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const onLogin = () => dispatch(isLogin());
  const onLogout = () => dispatch(isLogout());

  return value ? (
    <Fragment>
      <TouchableOpacity style={styles.logoutButton}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <AppStack onLogout={onLogout} />
    </Fragment>
  ) : (
    <LoginScreen onLogin={onLogin} />
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppCoveredByProvider />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    position: "absolute",
    backgroundColor: "green",
    marginTop: 40,
  },
});

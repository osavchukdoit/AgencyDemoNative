import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/redux/store";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppStack } from "./src/navigation/AppStack";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Loader } from "./src/components/utils/Loader";
import { setLoggedIn, setLoggedOut } from "./src/redux/actions/actionCreator";

function ToCoverAppByProvider() {
  const { isLogged, user, loaderStatus } = useSelector((state) => state.utils);
  const { visible: isLoading } = loaderStatus;
  const dispatch = useDispatch();

  console.log(isLogged, user);

  const handleLogin = ({ userName }) => dispatch(setLoggedIn(userName));
  const handleLogout = () => dispatch(setLoggedOut());

  return isLogged ? (
    <>
      <TouchableOpacity style={styles.logoutButton}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <AppStack onLogout={handleLogout} />
      {isLoading && <Loader />}
    </>
  ) : (
    <>
      <LoginScreen onLogin={handleLogin} />
      {isLoading && <Loader />}
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ToCoverAppByProvider />
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

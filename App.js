import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/redux/store";
import { AppStack } from "./src/navigation/AppStack";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Loader } from "./src/components/utils/Loader";
import { setLoggedIn, setLoggedOut } from "./src/redux/actions/actionCreator";
import { StatusBar } from "react-native";
import * as Font from "expo-font";

function ToCoverAppByProvider() {
  const { isLogged, user, loaderStatus } = useSelector((state) => state.utils);
  const { visible: isLoading } = loaderStatus;
  const dispatch = useDispatch();

  console.log(isLogged, user);

  const handleLogin = ({ userName }) => dispatch(setLoggedIn(userName));
  const handleLogout = () => dispatch(setLoggedOut());

  return isLogged ? (
    <>
      <StatusBar barStyle={"light-content"} />
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
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      AvenirBook: require("./src/assets/fonts/Avenir_Book.ttf"),
      AvenirHeavy: require("./src/assets/fonts/Avenir_Heavy.ttf"),
      AvenirLight: require("./src/assets/fonts/Avenir_Light.ttf"),
      AvenirMedium: require("./src/assets/fonts/Avenir_Medium.ttf"),
      AvenirRoman: require("./src/assets/fonts/Avenir_Roman.ttf"),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <ToCoverAppByProvider />
      </Provider>
    );
  }
  return null;
}

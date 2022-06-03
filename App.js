import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/redux/store";
import { AppStack } from "./src/navigation/AppStack";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Loader } from "./src/components/utils/Loader";
import { setLoggedIn, setLoggedOut } from "./src/redux/actions/actionCreator";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { Formik } from "formik";
import { useInitialFormikValues } from "./src/form/useInitialFormikValues";
import { newYupSchema } from "./src/form/yup-schema";
import FlashMessage from "react-native-flash-message";

function UncoveredApp({ setPageDesc }) {
  const { isLogged, loaderStatus } = useSelector((state) => state.utils);
  const { visible: isLoading } = loaderStatus;
  const dispatch = useDispatch();
  const { pageDesc } = useSelector((state) => state);

  useEffect(() => {
    setPageDesc(pageDesc);
  }, [pageDesc]);

  const handleLogin = ({ userName }) => dispatch(setLoggedIn(userName));
  const handleLogout = () => dispatch(setLoggedOut());

  return isLogged ? (
    <>
      <StatusBar barStyle={"light-content"} />
      <AppStack onLogout={handleLogout} />
      {isLoading && <Loader />}
      <FlashMessage />
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
  const initialFormikValues = useInitialFormikValues();
  const [pageDesc, setPageDesc] = useState(null);

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

  const validationSchema = newYupSchema(pageDesc);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Formik
          initialValues={initialFormikValues}
          onSubmit={(values) => {}}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, touched, errors, isValid } = props;
            return <UncoveredApp setPageDesc={setPageDesc} />;
          }}
        </Formik>
      </Provider>
    );
  }
  return null;
}

import { THEME } from "./theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    minHeight: 300,
    height: "50%",
    paddingTop: "8%",
    alignItems: "center",
  },
  loginWimdowTitle: {
    fontSize: 32,
    color: THEME.COLOR.LOGIN_TITLE,
    marginBottom: 20,
    fontWeight: "bold",
  },

  textInput: {
    borderWidth: 1,
    borderColor: THEME.COLOR.INPUT_BORDER,
    borderRadius: 4,
    marginBottom: 15,
    height: 30,
    paddingLeft: 30,
  },

  textInputFocus: {
    borderWidth: 1,
    borderColor: THEME.COLOR.INPUT_BORDER_HOVER,
    borderRadius: 4,
    marginBottom: 15,
    height: 30,
    paddingLeft: 30,
  },

  wraperLoginInput: {
    position: "relative",
    width: "78%",
  },

  loginInputImg: {
    position: "absolute",
    marginTop: 7,
    marginLeft: 8,
    marginRight: 8,
  },

  wraperLoginButton: {
    backgroundColor: THEME.COLOR.BUTTON_LOGIN_DARK_GRADIENT,
    width: "78%",
  },

  loginButton: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: 5,
  },

  loginButtonText: {
    color: THEME.COLOR.LOGIN_BUTTON_TEXT,
    fontSize: 18,
    fontWeight: "bold",
  },

  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

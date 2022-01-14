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
    height: "50%",
    paddingTop: "8%",
    alignItems: "center",
  },
  loginWimdow_title: {
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
    paddingLeft: 15,
    width: "78%",
  },

  wraper_login_button: {
    backgroundColor: THEME.COLOR.BUTTON_LOGIN_DARK_GRADIENT,
    width: "78%",
  },

  login_button: {
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: 5,
  },

  login_button_text:{
    color:THEME.COLOR.LOGIN_BUTTON_TEXT,
    fontSize:18,
    fontWeight: "bold"

  },

  linear_background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

});

import { THEME } from './theme'
import {StyleSheet} from "react-native"

export default  StyleSheet.create({
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
      fontWeight: "500"
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
      width: "78%",
    },
  });
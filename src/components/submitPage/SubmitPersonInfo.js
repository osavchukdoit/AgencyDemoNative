import { Text, StyleSheet, View } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import ClendarSvg from "../../assets/icons/submitScr/calendar.svg";
import SmsSvg from "../../assets/icons/submitScr/sms.svg";

export const SubmitPersonInfo = () => {
  return (
    <>
      <Text style={styles.nameText}>John Doe</Text>
      <View style={styles.infoItemContainer}>
        <ClendarSvg />
        <Text style={styles.infoText}>09/09/1990</Text>
      </View>
      <View style={styles.infoItemContainer}>
        <SmsSvg />
        <Text style={styles.infoText}>jdoe@gmail.com</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 18,
    lineHeight: 25,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginBottom: 8,
  },

  infoItemContainer: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center"
  },

  infoText: {
    marginLeft: 9,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },
});

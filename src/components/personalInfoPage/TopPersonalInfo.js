import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";

export const TopPersonalInfo = () => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <Text style={styles.text}>
        Review to confirm employee and family information to enroll in plans
        that best fit your needs
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 17,
    paddingRight: 15,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
  },

  text: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});

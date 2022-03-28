import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";

export const FamilyInfoTop = () => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <Text style={styles.title}>
        Below is an overview of the info that has been entered
      </Text>
      <View style={styles.pseudoElement} />
      <Text style={styles.text}>
        Please review any outstanding items and make sure everything is correct
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 21,
    paddingLeft: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
  },

  title: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.GREY_MEDIUM_TEXT,
    marginBottom: 10,
  },

  pseudoElement: {
    width: 21,
    height: 2,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    marginBottom: 10,
  },

  text: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});

import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const FamilyInfoTop = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Below is an overview of the info that has been entered
      </Text>
      <View style={styles.pseudoElement}></View>
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
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 30,
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

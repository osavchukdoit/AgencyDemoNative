import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../styles/theme";
import { FONTS } from "../../../styles/fonts";
import { shadowStyles } from "../../../styles/shadowStyles";

export const EnrollmentInfoTop = ({ title, subtitle }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pseudoElement} />
      <Text style={styles.text}>{subtitle}</Text>
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

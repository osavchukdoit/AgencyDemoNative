import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const InformationMapper = ({ options }) => {
  return options.map(({ id, title, status }, index) => {
    return (
      <View
        key={id}
        style={[
          styles.wrapper,
          index % 2 !== 0 && styles.additionalBgColor,
          index === 0 && styles.additionalTopRadius,
          index === options.length - 1 && styles.additionalBottomRadius,
        ]}
      >
        <Text style={styles.text}>{title}</Text>
        <Text style={[styles.text, styles.textDark]}>{status}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: 42,
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V4,
    paddingHorizontal: 16,
  },

  additionalBgColor: {
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V2,
  },

  additionalTopRadius: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  additionalBottomRadius: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 13,
  },

  text: {
    width: "50%",
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_RGBA,
  },

  textDark: {
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PersonIconSvg from "../../assets/icons/submitScr/personIcon.svg";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const DependantsItemMapper = ({ options }) => {
  return options.map((item) => {
    return (
      <View key={item.id} style={styles.itemWrapper}>
        <PersonIconSvg />
        <Text style={styles.boldText}>{item.name}</Text>
        <View style={styles.point} />
        <Text style={styles.normalText}>{item.status}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    marginBottom: 13,
    alignItems: "center",
  },

  boldText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 15,
    marginRight: 8,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  normalText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  point: {
    width: 5,
    height: 5,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 8,
    marginRight: 8,
  },
});

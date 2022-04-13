import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const SubscriberDependants = ({ options, children }) => {
  return (
    <>
      <View style={styles.sectorTitleWrapper}>
        <Text style={styles.title}>John Doe</Text>
        <View style={styles.point} />
        <Text style={styles.subTitle}>Subscriber</Text>
      </View>
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  sectorTitleWrapper: {
    flexDirection: "row",
    marginBottom: 7,
    alignItems: "center",
  },

  title: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 18,
    lineHeight: 25,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginRight: 5,
  },

  point: {
    width: 5,
    height: 5,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 8,
    marginRight: 5,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 18,
    lineHeight: 25,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },
});

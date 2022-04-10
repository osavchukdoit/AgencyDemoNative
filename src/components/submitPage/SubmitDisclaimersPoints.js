import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { shadowStyles } from "../../styles/shadowStyles";

export const SubmitDisclaimersPoints = ({ options }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      {options.map((item) => {
        const { id, text } = item;
        return (
          <View key={id} style={styles.pointAndTextWrapper}>
            <View style={styles.point} />
            <Text style={styles.text}>{text}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 12,
    paddingBottom: 6,
    paddingHorizontal: 9,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 20,
  },

  pointAndTextWrapper: {
    flexDirection: "row",
    marginBottom: 7,
    width: "90%"
  },

  point: {
    width: 4,
    height: 4,
    borderRadius: 8,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    marginRight: 5,
    marginTop: 5,
  },

  text: {
    fontFamily: FONTS.AVENIR.LIGHT,
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLACK,
  },
});

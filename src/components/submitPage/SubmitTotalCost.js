import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { shadowStyles } from "../../styles/shadowStyles";

export const SubmitTotalCost = ({ options }) => {
  const result = options.reduce((acc, value) => acc + Number(value.price), 0);

  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <View style={styles.totalCostWrapper}>
        <Text style={styles.totalCostText}>
          Your Bi-Weekly Total Cost: ${result}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 20,
  },

  totalCostWrapper: {
    paddingTop: 3,
    paddingBottom: 4,
    borderRadius: 20,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE,
    alignItems: "center",
  },

  totalCostText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLUE_BRIGHT,
  },
});

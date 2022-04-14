import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import DownloadSvg from "../../assets/icons/stdPlanOptions/downloadIcon.svg";

export const LinkIconAndText = ({
  rightSide = false,
  text = "Benefits Document",
}) => {
  return (
    <View style={[styles.linksWrapper, rightSide && styles.flexEnd]}>
      <TouchableOpacity style={styles.iconAndLinkWrapper}>
        <DownloadSvg style={styles.linkIcon} />
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  linksWrapper: {
    flexDirection: "row",
    marginBottom: 16,
  },

  flexEnd: {
    justifyContent: "flex-end",
  },

  iconAndLinkWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  linkIcon: {
    marginRight: 6,
  },

  linkText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLUE_BRIGHT,
    textDecorationLine: "underline",
  },
});

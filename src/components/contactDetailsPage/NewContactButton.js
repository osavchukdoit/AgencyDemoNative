import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AddContactButton from "../../assets/icons/contactDetailsIcons/plusIconSvg.svg";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const NewContactButton = ({ onVisible }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onVisible}
        style={styles.buttonAndTextContainer}
      >
        <AddContactButton />
        <Text style={styles.text}>New Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-end",
    marginBottom: 10,
  },

  buttonAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginLeft: 8,
  },
});

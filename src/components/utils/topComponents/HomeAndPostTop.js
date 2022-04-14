import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { THEME } from "../../../styles/theme";
import { AppText } from "../../utils/AppText";
import { shadowStyles } from "../../../styles/shadowStyles";

export const HomeAndPostTop = ({ title, subtitle = "" }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/topComponent/cute-family-playing-summer-field.png")}
        />
      </View>
      <AppText style={styles.text}>{title}</AppText>

      {!!subtitle && (
        <>
          <View style={styles.pseudoElement} />
          <AppText color={THEME.COLOR.GREY_LIGHT_TEXT} style={styles.text}>
            {subtitle}
          </AppText>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 18,
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 12,
    paddingBottom: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 88,
    marginBottom: 9,
  },

  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 9,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },

  pseudoElement: {
    width: 21,
    height: 4,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 10,
    marginBottom: 9,
  },
});

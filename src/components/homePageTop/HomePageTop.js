import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const HomePageTop = () => {
  return (
    <View style={[styles.wraper, styles.shadowProp]}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/topComponent/cute-family-playing-summer-field.png")}
        />
      </View>
      <Text style={styles.text}>
        Lockheed 2 Industries Inc working with Brown Agencies Inc has created a
        best-in-class benefits program to meet your benefit needs. Below are the
        benefits offered in this enrollment.
      </Text>
      <View style={styles.pseudoelement}></View>
      <Text style={[styles.text, styles.lastTextEl]}>
        View details by clicking on each and select which one you would like to
        enroll to
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    paddingHorizontal: 18,
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 12,
    paddingBottom: 14,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    fontFamily: FONTS.AVENIR.ROMAN,
    marginBottom: 9,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
  pseudoelement: {
    width: 21,
    height: 4,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 10,
    marginBottom: 9,
  },
  shadowProp: {
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
  },
  lastTextEl: {
    marginBottom: 0,
  },
});

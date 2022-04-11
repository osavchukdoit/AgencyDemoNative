import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const SubmitSelectedBenefits = ({ item }) => {
  const { title, subTitle, icon, price } = item;
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.iconAndTextWrapper}>
          <View style={styles.iconWrapper}>{icon}</View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price} Bi-Weekly</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },

  iconAndTextWrapper: {
    flexDirection: "row",
    marginBottom: 9,
  },

  iconWrapper: {
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_GREY,
    borderRadius: 10,
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    marginLeft: 7,
  },

  title: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 1,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 20,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginLeft: 4,
  },

  priceContainer: {
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 7,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    borderRadius: 20,
    alignItems: "flex-end",
  },

  price: {
    color: THEME.COLOR.BLUE_BRIGHT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
  },
});

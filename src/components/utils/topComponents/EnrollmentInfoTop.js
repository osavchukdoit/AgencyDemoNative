import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { THEME } from "../../../styles/theme";
import { FONTS } from "../../../styles/fonts";
import { shadowStyles } from "../../../styles/shadowStyles";
import { getServerIcon } from "../../../constants";

export const EnrollmentInfoTop = ({
  title,
  subtitle,
  children,
  bannerUri = null,
}) => {
  const serverBanner = bannerUri ? getServerIcon(bannerUri) : null;
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      {bannerUri && (
        <Image
          source={{ uri: serverBanner }}
          style={{ width: "100%", height: 85 }}
          resizeMode={"contain"}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pseudoElement} />
      <Text style={styles.text}>{subtitle}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 15,
    paddingBottom: 21,
    paddingHorizontal: 18,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 16,
  },

  title: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.GREY_MEDIUM_TEXT,
    marginBottom: 10,
  },

  pseudoElement: {
    width: 21,
    height: 2,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    marginBottom: 10,
  },

  text: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});

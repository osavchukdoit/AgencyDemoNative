import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { THEME } from "../../../styles/theme";
import { FONTS } from "../../../styles/fonts";

export const TopComponentPlanOptions = ({
  imgMain,
  textnormal,
  textBold,
  imgSecondary,
  textDown,
}) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={imgMain} style={styles.imageTop}>
        <View style={styles.imageTopTextWrapper}>
          <Text style={styles.imageTopTextUp}>{textnormal}</Text>
          <Text style={[styles.imageTopTextUp, styles.imageTopTextDown]}>
            {textBold}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.subImageAndTextWrapper}>
        <Image style={styles.subImageTop} source={imgSecondary} />
        <View style={styles.subTextTopWrapper}>
          <Text style={styles.subTextTop}>{textDown}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 21,
    paddingTop: 22,
    paddingBottom: 19,
    backgroundColor: THEME.COLOR.WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 14,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
  },

  imageTop: {
    resizeMode: "cover",
    width: "100%",
    height: 141,
    borderRadius: 10,
    marginBottom: 19,
    flexDirection: "column-reverse",
  },

  imageTopTextWrapper: {
    marginLeft: 9,
    marginBottom: 3,
  },

  imageTopTextUp: {
    color: THEME.COLOR.WHITE,
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: -0.28,
  },

  imageTopTextDown: {
    fontFamily: FONTS.AVENIR.HEAVY,
  },

  subImageAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  subImageTop: {
    marginRight: 12,
  },

  subTextTopWrapper: {
    width: "73%",
  },

  subTextTop: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});

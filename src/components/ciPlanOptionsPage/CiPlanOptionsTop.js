import { View, Text, StyleSheet, Image } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const CiPlanOptionsTop = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageTopWrapper}>
        <Image
          style={styles.imageTop}
          source={require("../../assets/topComponent/ciPlanOptionTopPic.png")}
        />
        <View style={styles.imageTopTextWrapper}>
          <Text style={styles.imageTopTextUp}>
            Income Protection for the Unexpected!
          </Text>
          <Text style={[styles.imageTopTextUp, styles.imageTopTextDown]}>
            Select Short Term Disability Plan
          </Text>
        </View>
      </View>
      <View style={styles.subImageAndTextWrapper}>
        <Image
          style={styles.subImageTop}
          source={require("../../assets/topComponent/stdGlobePic.png")}
        />
        <View style={styles.subTextTopWrapper}>
          <Text style={styles.subTextTop}>
            Critical illness insurance can help you protect your finances if you
            are diagnosed with a covered serious condition. The plan pays
            benefits to you.
          </Text>
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

  imageTopWrapper: {
    position: "relative",
    marginBottom: 19,
  },

  imageTop: {
    width: "100%",
    borderRadius: 10,
  },

  imageTopTextWrapper: {
    position: "absolute",
    left: 9,
    bottom: 3,
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

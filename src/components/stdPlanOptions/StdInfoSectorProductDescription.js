import { View, Text, StyleSheet } from "react-native";
import CrutchesSvg from "../../assets/icons/stdPlanOptions/crutches.svg";
import { PseudoElement } from "./PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const StdInfoSectorProductDescription = () => {
  return (
    <View style={styles.infoSectorWrapper}>
      <View style={styles.iconAndTitleWrapper}>
        <View style={styles.iconWrapper}>
          <CrutchesSvg />
        </View>
        <Text style={styles.sectorTitle}>Product Description</Text>
      </View>
      <PseudoElement />
      <Text style={styles.subTitleMedium}>
        Short Term Disability Insurance can pay you a weekly benefit if you have
        a covered disability that keeps you from working.
      </Text>

      <Text style={styles.subTextNormal}>Disability Definition: </Text>
      <Text style={styles.subTextNormal}>
        You are disabled when Unum determines that due to your sickness or
        injury
      </Text>

      <View style={styles.pointAndTitleWrapper}>
        <View style={styles.point} />
        <Text style={styles.itemTitle}>
          You are unable to perform the material and substantial duties of your
          regular occupation; and
        </Text>
      </View>

      <View style={styles.pointAndTitleWrapper}>
        <View style={styles.point} />
        <Text style={styles.itemTitle}>
          You are not working in any occupation.
        </Text>
      </View>

      <Text style={styles.subTextNormal}>
        You must be under the regular case of a physician in order to be
        considered disabled.
      </Text>

      <Text style={styles.subTextNormal}>
        The loss of a professional or occupational license or certification does
        not, in itself, constitute disability.
      </Text>
    </View>
  );
};

// TODO: extract
const styles = StyleSheet.create({
  infoSectorWrapper: {
    paddingTop: 11,
    paddingBottom: 14,
    paddingHorizontal: 15,
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
    borderRadius: 20,
    marginBottom: 16,
  },

  iconAndTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_GREY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },

  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
  },

  subTitleMedium: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    marginBottom: 16,
    marginTop: 16,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  subTextNormal: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 7,
  },

  pointAndTitleWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    position: "relative",
    marginBottom: 11,
  },

  point: {
    width: 5,
    height: 5,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    borderRadius: 8,
    position: "absolute",
    top: 6,
  },

  itemTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginLeft: 9,
  },
});

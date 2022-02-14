import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import CrutchesSvg from "../../assets/icons/crutches.svg";

export const VoluntarySTD = () => {
  return (
    <View style={styles.voluntaryStdWrapper}>
      <View style={styles.svgAndTitleWrapper}>
        <View style={styles.svgContainer}>
          <CrutchesSvg />
        </View>
        <View style={{ width: 256 }}>
          <Text style={styles.titleSTD}>Voluntary STD</Text>
          <Text style={styles.textSTD}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  voluntaryStdWrapper: {
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    borderRadius: 10,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 16,
  },
  svgAndTitleWrapper: {
    flexDirection: "row",
  },
  svgContainer: {
    width: 48,
    height: 48,
    backgroundColor: THEME.COLOR.WHITE,
    marginRight: 12,
    borderRadius: 8,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSTD: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.BLUE_BRIGHT,
  },
  textSTD: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});

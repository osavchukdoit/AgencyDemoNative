import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const BenefitSubSector = ({
  logoSubSector,
  titleSubSector,
  children,
}) => {
  return (
    <View style={styles.subSectorWrapper}>
      <View style={styles.svgAndTitleWrapper}>
        <View style={styles.svgContainer}>{logoSubSector}</View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{titleSubSector}</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </Text>
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  subSectorWrapper: {
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    borderRadius: 10,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 16,
    marginBottom: 15,
  },
  svgAndTitleWrapper: {
    flexDirection: "row",
    marginBottom: 11,
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

  textWrapper: {
    width: 256,
  },

  title: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.BLUE_BRIGHT,
  },
  text: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});

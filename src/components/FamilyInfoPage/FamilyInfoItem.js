import { Text, View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import InfoCircle from "../../assets/icons/familyInfoIcons/infoCircle.svg";

export const FamilyInfoItem = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.infoTitle}>Personal Info</Text>
      <View style={styles.infoWrapper}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>John Doe</Text>
          <View style={styles.warningTextContainer}>
              <InfoCircle/>
            <Text style={styles.warningSubTitle}>Missing items</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  infoTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.28,
    marginBottom: 10,
  },

  infoWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 30,
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingTop: 16,
    paddingBottom: 21,
  },

  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  warningTextContainer: {
    flexDirection: "row",
  },

  warningSubTitle: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WARNING_TEXT,
    marginLeft: 4,
  },
});

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { AppText } from "../utils/AppText";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { LinearGradient } from "expo-linear-gradient";

export const BenefitGroups = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.benefitWrapper}>
        <View style={styles.benefitTitleWrapper}>
          <AppText fontFamily={FONTS.AVENIR.HEAVY} style={styles.benefitTitle}>
            Income Protection
          </AppText>
          <View style={styles.containetButtoShowHide}>
            <TouchableOpacity
              style={styles.buttonShowHide}
              onPress={() => console.log("Press")}
            >
              <Text>{<ShowHideIconSvg />}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gradientWrapper}>
          <LinearGradient
            // colors={['#4c669f', '#3b5998', '#192f6a']}
            colors={[
              "rgba(76, 102, 159, 0)",
              "rgba(76, 102, 159, 0.5)",
              "rgba(76, 102, 159, 0)",
            ]}
            start={{ y: 0, x: 1 }}
            end={{ y: 0, x: 0 }}
            style={styles.linearBackground}
          />
        </View>
        <Text style={styles.benefitText}>
          Benefits designed to protect your income for a set period of time when
          you are unable to work due to an unexpected illness or injury
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 22,
    paddingHorizontal: 20,
  },
  benefitWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 12,
    paddingBottom: 14,
    paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  shadowProp: {
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
  },
  benefitTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  benefitTitle: {
    fontSize: 16,
    lineHeight: 21.8,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
  containetButtoShowHide: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(67, 190, 187, 0.1)",
    borderRadius: 4,
  },
  buttonShowHide: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  gradientWrapper: {
    marginTop: 10,
    marginBottom: 7,
    height: 1,
    backgroundColor: "rgba(76, 102, 159, 0.5)",
  },
  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  benefitText: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
  },
});

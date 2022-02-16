import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";

export const CostOverview = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onHandlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <View style={styles.costOverviewWrapper}>
      <View style={styles.costOverwieTitleWrapper}>
        <Text>Cost Overview</Text>
        <View style={styles.containerButtoShowHide}>
          <TouchableOpacity
            style={
              isVisible
                ? { ...styles.buttonShowHide }
                : {
                    ...styles.buttonShowHide,
                    transform: [{ rotate: "180deg" }],
                  }
            }
            onPress={onHandlePress}
          >
            <Text>
              <ShowHideIconSvg />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={isVisible ? { display: "flex" } : { display: "none" }}>
        <View style={styles.gradientWrapper}>
          <LinearGradient
            colors={[
              "rgba(67, 190, 187, 0)",
              "rgba(67, 190, 187, 0.5)",
              "rgba(67, 190, 187, 0)",
            ]}
            start={{ y: 0, x: 1 }}
            end={{ y: 0, x: 0 }}
            style={styles.linearBackground}
          />
        </View>
        <View style={styles.coverageTierWrapper}>
          <View style={styles.titlesItemsWrapper}>
            <Text style={[styles.titleItems, { width: "50%" }]}>
              Coverage Tier
            </Text>
            <Text style={[styles.titleItems, { width: "30%" }]}>Weekly</Text>
            <Text style={[styles.titleItems, { width: "20%" }]}>Monthly</Text>
          </View>
          <View
            style={[
              styles.textItemsWrapper,
              { backgroundColor: "rgba(67, 190, 187, 0.05)" },
            ]}
          >
            <Text style={[styles.textItems, { width: "50%" }]}>
              Employee Only
            </Text>
            <Text style={[styles.numbetItems, { width: "30%" }]}>$4.16</Text>
            <Text style={[styles.numbetItems, { width: "20%" }]}>$5K</Text>
          </View>

          <View style={[styles.textItemsWrapper]}>
            <Text style={[styles.textItems, { width: "50%" }]}>
              Employee and Spouse
            </Text>
            <Text style={[styles.numbetItems, { width: "30%" }]}>$8.58</Text>
            <Text style={[styles.numbetItems, { width: "20%" }]}>$6K</Text>
          </View>

          <View
            style={[
              styles.textItemsWrapper,
              { backgroundColor: "rgba(67, 190, 187, 0.05)" },
            ]}
          >
            <Text style={[styles.textItems, { width: "50%" }]}>
              Employee and Children
            </Text>
            <Text style={[styles.numbetItems, { width: "30%" }]}>$4.16</Text>
            <Text style={[styles.numbetItems, { width: "20%" }]}>$15K</Text>
          </View>

          <View style={[styles.textItemsWrapper]}>
            <Text style={[styles.textItems, { width: "50%" }]}>
              Employee and Family
            </Text>
            <Text style={[styles.numbetItems, { width: "30%" }]}>$8.58</Text>
            <Text style={[styles.numbetItems, { width: "20%" }]}>$30K</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  costOverviewWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 40,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: 0.05,
    borderRadius: 8,
    paddingTop: 11,
    paddingBottom: 9,
  },
  costOverwieTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingRight: 10,
  },

  costOverviewTitle: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.28,
  },

  containerButtoShowHide: {
    width: 24,
    height: 24,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE_BG,
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
    marginBottom: 5,
  },

  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  coverageTierWrapper: {},

  titlesItemsWrapper: {
    flexDirection: "row",
    paddingLeft: 18,
    marginBottom: 7,
  },

  titleItems: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 13,
    lineHeight: 17.76,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLUE_BRIGHT,
  },

  textItemsWrapper: {
    flexDirection: "row",
    height: 33,
    paddingLeft: 18,
    alignItems: "center",
  },

  textItems: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    opacity: 0.45,
  },

  numbetItems: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});

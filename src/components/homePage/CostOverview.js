import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { useState } from "react";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { ShowHideButtonAndText } from "../utils/ShowHideButtonAndText";

export const CostOverview = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <View style={styles.costOverviewWrapper}>
      <ShowHideButtonAndText isVisible={isVisible} handlePress={handlePress}>
        <Text style={styles.costOverviewTitle}>Cost Overview</Text>
      </ShowHideButtonAndText>

      <View style={isVisible ? { display: "flex" } : { display: "none" }}>
        <PseudoElement />
        <View style={styles.costListWrapper}>
          <View style={styles.titlesItemsWrapper}>
            <Text style={[styles.titleItems, styles.coverageWidth]}>
              Coverage Tier
            </Text>
            <Text style={[styles.titleItems, styles.weeklyWidth]}>Weekly</Text>
            <Text style={[styles.titleItems, styles.monthlyWidth]}>
              Monthly
            </Text>
          </View>
          <View style={[styles.textItemsWrapper, styles.itemsBackgroundColor]}>
            <Text style={[styles.textItems, styles.coverageWidth]}>
              Employee Only
            </Text>
            <Text style={[styles.numberItems, styles.weeklyWidth]}>$4.16</Text>
            <Text style={[styles.numberItems, styles.monthlyWidth]}>$5K</Text>
          </View>

          <View style={[styles.textItemsWrapper]}>
            <Text style={[styles.textItems, styles.coverageWidth]}>
              Employee and Spouse
            </Text>
            <Text style={[styles.numberItems, styles.weeklyWidth]}>$8.58</Text>
            <Text style={[styles.numberItems, styles.monthlyWidth]}>$6K</Text>
          </View>

          <View style={[styles.textItemsWrapper, styles.itemsBackgroundColor]}>
            <Text style={[styles.textItems, styles.coverageWidth]}>
              Employee and Children
            </Text>
            <Text style={[styles.numberItems, styles.weeklyWidth]}>$4.16</Text>
            <Text style={[styles.numberItems, styles.monthlyWidth]}>$15K</Text>
          </View>

          <View style={[styles.textItemsWrapper]}>
            <Text style={[styles.textItems, styles.coverageWidth]}>
              Employee and Family
            </Text>
            <Text style={[styles.numberItems, styles.weeklyWidth]}>$8.58</Text>
            <Text style={[styles.numberItems, styles.monthlyWidth]}>$30K</Text>
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
  },

  costOverviewTitle: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
  },

  costListWrapper: {
    marginTop: 5,
  },

  titlesItemsWrapper: {
    flexDirection: "row",
    paddingLeft: 18,
    marginBottom: 7,
  },

  itemsBackgroundColor: {
    backgroundColor: THEME.BACKGROUND.OVERVIEW_ITEMS_ROW,
  },

  coverageWidth: {
    width: "50%",
  },

  monthlyWidth: {
    width: "20%",
  },

  weeklyWidth: {
    width: "30%",
  },

  titleItems: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 13,
    lineHeight: 17.76,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
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
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_DARK_TEXT,
    opacity: 0.45,
  },

  numberItems: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});

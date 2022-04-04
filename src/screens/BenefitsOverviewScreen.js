import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { EnrollmentInfoTop } from "../components/utils/topComponents/EnrollmentInfoTop";
import { AppText } from "../components/utils/AppText";
import { shadowStyles } from "../styles/shadowStyles";
import { THEME } from "../styles/theme";
import ArrowRightSvg from "../assets/icons/enrollmentNavigation/arrowRight.svg";
import { LinearGradient } from "expo-linear-gradient";
import { FONTS } from "../styles/fonts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StdPlanOptionsScreen } from "./StdPlanOptionsScreen";
import { CiPlanOptionsScreen } from "./CiPlanOptionsScreen";
import { TermLifePlanOptionsScreen } from "./TermLifePlanOptionsScreen";
import CISvg from "../assets/icons/plans/ci.svg";
import HISvg from "../assets/icons/plans/hospital.svg";
import LTDSvg from "../assets/icons/plans/ltd.svg";
import VSTDSvg from "../assets/icons/plans/vstd.svg";
import TLSvg from "../assets/icons/plans/term.svg";
import WLSvg from "../assets/icons/plans/wl.svg";
import { useDispatch } from "react-redux";
import { setEnrollWaiveVisible } from "../redux/actions/actionCreator";
import { StdSelectPlanScreen } from "./StdSelectPlanScreen";
import { CiSelectPlanScreen } from "./CiSelectPlanScreen";
import { TermLifeEnrollScreen } from "./TermLifeEnrollScreen";

export const BenefitsNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"BenefitsOverviewScreen"}
        component={BenefitsOverviewScreen}
      />
      <Stack.Screen
        name={"StdPlanOptionsScreen"}
        component={StdPlanOptionsScreen}
      />
      <Stack.Screen
        name={"StdSelectPlanScreen"}
        component={StdSelectPlanScreen}
      />
      <Stack.Screen
        name={"CiPlanOptionsScreen"}
        component={CiPlanOptionsScreen}
      />
      <Stack.Screen
        name={"CiSelectPlanScreen"}
        component={CiSelectPlanScreen}
      />
      <Stack.Screen
        name={"TermLifePlanOptionsScreen"}
        component={TermLifePlanOptionsScreen}
      />
      <Stack.Screen
        name={"TermLifeEnrollScreen"}
        component={TermLifeEnrollScreen}
      />
    </Stack.Navigator>
  );
};

export const BenefitsOverviewScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const benefitsList = [
    {
      benefitLabel: "Voluntary STD",
      benefitIcon: <VSTDSvg />,
      id: "VSTD",
      selected: true,
    },
    {
      benefitLabel: "Voluntary LTD",
      benefitIcon: <LTDSvg />,
      id: "VLTD",
      selected: false,
    },
    {
      benefitLabel: "Term Life",
      benefitIcon: <TLSvg />,
      id: "TL",
      selected: true,
    },
    {
      benefitLabel: "Whole Life",
      benefitIcon: <WLSvg />,
      id: "WL",
      selected: false,
    },
    {
      benefitLabel: "Critical Illness",
      benefitIcon: <CISvg />,
      id: "CI",
      selected: true,
    },
    {
      benefitLabel: "Hospital Indemnity",
      benefitIcon: <HISvg />,
      id: "HI",
      selected: false,
    },
  ];

  const handleBenefitSelect = (id) => {
    let planName = "StdPlanOptionsScreen";
    if (id === "VSTD") planName = "StdPlanOptionsScreen";
    if (id === "CI") planName = "CiPlanOptionsScreen";
    if (id === "TL") planName = "TermLifePlanOptionsScreen";
    navigation.navigate(planName);
    dispatch(setEnrollWaiveVisible(true));
  };

  const renderBenefitItem = ({ item, index }) => {
    const { id, benefitLabel, selected, benefitIcon } = item;
    return (
      <TouchableOpacity
        onPress={() => handleBenefitSelect(id)}
        style={styles.benefitItem}
      >
        {index !== 0 && (
          <LinearGradient
            colors={[
              "rgba(26, 60, 90, 0)",
              "rgba(26, 60, 90, 0.5)",
              "rgba(26, 60, 90, 0)",
            ]}
            style={styles.linearGradient}
            start={[1, 1]}
          />
        )}
        <View style={styles.benefitHeadingWrapper}>
          <View style={styles.icon}>{benefitIcon}</View>
          <View style={styles.benefitLabelWrapper}>
            <AppText
              color={
                selected
                  ? THEME.COLOR.BENEFIT_LABEL_SELECTED
                  : THEME.COLOR.BENEFIT_LABEL
              }
              fontFamily={FONTS.AVENIR.HEAVY}
              style={styles.benefitLabel}
            >
              {benefitLabel}
            </AppText>
            <AppText
              color={
                selected
                  ? THEME.COLOR.BENEFIT_SELECTED_MARK
                  : THEME.COLOR.BENEFIT_NOT_SELECTED_MARK
              }
              fontFamily={selected ? FONTS.AVENIR.MEDIUM : FONTS.AVENIR.ROMAN}
              style={styles.benefitLabel}
            >
              {!selected && "Not "}Selected
            </AppText>
          </View>
        </View>
        <ArrowRightSvg />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <EnrollmentInfoTop
        title={"Below are the enrolled benefits you have selected"}
        subtitle={"Click on each to select or edit your selection"}
      />
      <SafeAreaView style={styles.wrapper}>
        <FlatList
          style={[shadowStyles.boxShadow, styles.flatList]}
          data={benefitsList}
          renderItem={renderBenefitItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  flatList: {
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  benefitItem: {
    paddingVertical: 10,
    position: "relative",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  linearGradient: {
    height: 1,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  benefitHeadingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  benefitLabelWrapper: {
    marginHorizontal: 10,
  },
  benefitLabel: {
    fontSize: 12,
    lineHeight: 16,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    borderRadius: 7,
    backgroundColor: THEME.BACKGROUND.BENEFITS_OVERVIEW_ICON,
  },
});

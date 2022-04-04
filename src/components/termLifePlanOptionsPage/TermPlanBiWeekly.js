import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme.js";
import { shadowStyles } from "../../styles/shadowStyles.js";
import { RadioButtonsList } from "../utils/RadioButtonsList.js";

const biWeeklyData = [
  { title: "$6.92 for $50,000 Policy", id: 1 },
  { title: "$8.31 for $60,000 Policy", id: 2 },
  { title: "$9.69 for $70,000 Policy", id: 3 },
  { title: "$12.69 for $80,000 Policy", id: 4 },
  { title: "$15.69 for $90,000 Policy", id: 5 },
  { title: "$18.69 for $100,000 Policy", id: 6 },
];

const biWeeklyDataForSpouse = [
  { title: "No coverage needed for my spouse", id: 1 },
  { title: "$6.92 for $50,000 Policy", id: 2 },
  { title: "$8.31 for $60,000 Policy", id: 3 },
  { title: "$9.69 for $70,000 Policy", id: 4 },
  { title: "$12.69 for $80,000 Policy", id: 5 },
  { title: "$15.69 for $90,000 Policy", id: 6 },
];

const biWeeklyDataForChildren = [
  { title: "No coverage needed for my spouse", id: 1 },
  { title: "$1.05 for $10,000 Policy", id: 2 },
];

export const TermPlanBiWeekly = () => {
  return (
    <View style={[styles.planBiWeeklyWrapper, shadowStyles.boxShadow]}>
      <RadioButtonsList
        data={biWeeklyData}
        header={"Bi-Weekly costs for available Policies"}
      />

      <RadioButtonsList
        data={biWeeklyDataForSpouse}
        header={"Bi-Weekly costs for available Policies for Spouse"}
      />

      <RadioButtonsList
        data={biWeeklyDataForChildren}
        header={"Bi-Weekly costs for available Policies for Children"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  planBiWeeklyWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 20,
  },
});

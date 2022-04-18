import React from "react";
import { RadioButtonsList } from "../utils/RadioButtonsList.js";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper.js";

const biWeeklyOptions = [
  { title: "$6.92 for $50,000 Policy", id: 1 },
  { title: "$8.31 for $60,000 Policy", id: 2 },
  { title: "$9.69 for $70,000 Policy", id: 3 },
  { title: "$12.69 for $80,000 Policy", id: 4 },
  { title: "$15.69 for $90,000 Policy", id: 5 },
  { title: "$18.69 for $100,000 Policy", id: 6 },
];

const biWeeklyOptionsForSpouse = [
  { title: "No coverage needed for my spouse", id: 1 },
  { title: "$6.92 for $50,000 Policy", id: 2 },
  { title: "$8.31 for $60,000 Policy", id: 3 },
  { title: "$9.69 for $70,000 Policy", id: 4 },
  { title: "$12.69 for $80,000 Policy", id: 5 },
  { title: "$15.69 for $90,000 Policy", id: 6 },
];

const biWeeklyOptionsForChildren = [
  { title: "No coverage needed for my spouse", id: 1 },
  { title: "$1.05 for $10,000 Policy", id: 2 },
];

export const TermPlanBiWeekly = () => {
  return (
    <BasicSectorWrapper>
      <RadioButtonsList
        additionalMarginTop={true}
        options={biWeeklyOptions}
        header={"Bi-Weekly costs for available Policies"}
      />

      <RadioButtonsList
        options={biWeeklyOptionsForSpouse}
        header={"Bi-Weekly costs for available Policies for Spouse"}
      />

      <RadioButtonsList
        options={biWeeklyOptionsForChildren}
        header={"Bi-Weekly costs for available Policies for Children"}
      />
    </BasicSectorWrapper>
  );
};

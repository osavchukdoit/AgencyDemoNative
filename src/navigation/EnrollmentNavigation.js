import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FamilyInfoOverviewScreen } from "../screens/FamilyInfoOverviewScreen";
import { BenefitsScreen } from "../screens/BenefitsScreen";
import { PaymentScreen } from "../screens/PaymentScreen";
import { SubmitScreen } from "../screens/SubmitScreen";
import { EnrollmentTabBar } from "./EnrollmentTabBar";

const Tab = createBottomTabNavigator();

export const EnrollmentNavigation = () => {
  const initialEnrollmentNavigationOptions = [
    {
      label: "Family Info",
      path: "Family Info",
      isChecked: false,
    },
    { label: "Benefits", path: "Benefits", isChecked: false },
    { label: "Payment", path: "Payment", isChecked: false },
    {
      label: "Review & Submit",
      path: "Review and Submit",
      isChecked: false,
    },
  ];

  const [enrollmentNavigationOptions, setEnrollmentNavigationOptions] =
    useState(initialEnrollmentNavigationOptions);

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <EnrollmentTabBar
          options={enrollmentNavigationOptions}
          setOptions={setEnrollmentNavigationOptions}
          {...props}
        />
      )}
    >
      <Tab.Screen name={"Family Info"} component={FamilyInfoOverviewScreen} />
      <Tab.Screen name={"Benefits"} component={BenefitsScreen} />
      <Tab.Screen name={"Payment"} component={PaymentScreen} />
      <Tab.Screen name={"Review and Submit"} component={SubmitScreen} />
    </Tab.Navigator>
  );
};

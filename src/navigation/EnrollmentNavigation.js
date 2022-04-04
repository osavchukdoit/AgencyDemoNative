import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FamilyInfoOverviewNavigator } from "../screens/FamilyInfoOverviewScreen";
import { BenefitsNavigator } from "../screens/BenefitsOverviewScreen";
import { PaymentScreen } from "../screens/PaymentScreen";
import { SubmitScreen } from "../screens/SubmitScreen";
import { EnrollmentTabBar } from "./EnrollmentTabBar";
import { ScreenHeaderStyleZeroHeight } from "./navigationUtils";

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
      <Tab.Screen
        name={"Family Info"}
        component={FamilyInfoOverviewNavigator}
        options={ScreenHeaderStyleZeroHeight}
      />
      <Tab.Screen
        name={"Benefits"}
        component={BenefitsNavigator}
        options={ScreenHeaderStyleZeroHeight}
      />
      <Tab.Screen
        name={"Payment"}
        component={PaymentScreen}
        options={ScreenHeaderStyleZeroHeight}
      />
      <Tab.Screen
        name={"Review and Submit"}
        component={SubmitScreen}
        options={ScreenHeaderStyleZeroHeight}
      />
    </Tab.Navigator>
  );
};

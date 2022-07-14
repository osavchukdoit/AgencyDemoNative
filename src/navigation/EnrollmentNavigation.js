import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FamilyInfoOverviewNavigator } from "../screens/FamilyInfoOverviewScreen";
import { BenefitsNavigator } from "../screens/BenefitsOverviewScreen";
import { PaymentScreen } from "../screens/PaymentScreen";
import { SubmitScreen } from "../screens/SubmitScreen";
import { EnrollmentTabBar } from "./EnrollmentTabBar";
import { ScreenHeaderStyleZeroHeight } from "./navigationUtils";
import { getBP } from "../api/businessProcess";
import { useDispatch, useSelector } from "react-redux";
import { getBPPageUrl } from "../constants";
import { setBp } from "../store/actions/actionCreator";
import { isEmpty } from "lodash";

const Tab = createBottomTabNavigator();

export const EnrollmentNavigation = () => {
  const { jwt } = useSelector((state) => state.utils);
  const { bp } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [bpSteps, setBpSteps] = useState([]);

  useEffect(async () => {
    const bpUrl = getBPPageUrl();
    const bpDetails = await getBP(jwt, bpUrl);
    dispatch(setBp(bpDetails));
  }, []);

  useEffect(() => {
    if (!isEmpty(bp)) {
      const { steps } = bp;
      const formattedSteps = steps.map(
        ({ stepName, pageType, actionLinkPageName }) => ({
          stepName,
          pageType,
          actionLinkPageName,
        })
      );
      setBpSteps(formattedSteps);
    }
  }, [bp]);

  const [enrollmentNavigationOptions, setEnrollmentNavigationOptions] =
    useState([]);
  useEffect(() => {
    !isEmpty(bpSteps) &&
      setEnrollmentNavigationOptions(
        bpSteps.map(({ stepName }) => ({
          label: stepName,
          path: stepName,
          isChecked: false,
        }))
      );
  }, [bpSteps]);

  const getStepComponent = ({ stepName }) => {
    switch (stepName) {
      case "Confirm Family Info":
        return FamilyInfoOverviewNavigator;
      case "Select Benefits":
        return BenefitsNavigator;
      case "Review and Submit":
        return SubmitScreen;
      default:
        return null;
    }
  };

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
      {bpSteps.map((stepDetails) => {
        const { stepName } = stepDetails;
        const stepComponent = getStepComponent(stepDetails);
        return (
          <Tab.Screen
            key={stepName}
            name={stepName}
            component={stepComponent}
            options={ScreenHeaderStyleZeroHeight}
          />
        );
      })}

      {/* temporary unused */}
      {/*<Tab.Screen*/}
      {/*  name={"Payment"}*/}
      {/*  component={PaymentScreen}*/}
      {/*  options={ScreenHeaderStyleZeroHeight}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
};

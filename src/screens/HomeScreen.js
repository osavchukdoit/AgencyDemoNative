import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";
import { BenefitSubSector } from "../components/homePage/BenefitSubSector";
import { CostOverview } from "../components/homePage/CostOverview";
import CruthesSvg from "../assets/icons/plans/std.svg";
import WheelchairSvg from "../assets/icons/plans/ltd.svg";
import UmbrelaSvg from "../assets/icons/plans/term.svg";
import ThermometrSvg from "../assets/icons/plans/ci.svg";
import HospitalBedSvg from "../assets/icons/plans/hospital.svg";
import { HomeAndPostTop } from "../components/utils/topComponents/HomeAndPostTop";
import { useDispatch, useSelector } from "react-redux";
import { getDomainModel } from "../api/domainModel";
import { setDomainModel } from "../redux/actions/actionCreator";
import { useFillDynamicValue } from "../api/useFillDynamicValue";
import { isEmpty } from "lodash";
import { useFormikContext } from "formik";
import { useInitialFormikValues } from "../form/useInitialFormikValues";

export const HomeScreen = ({ navigation }) => {
  const state = useSelector((state) => state);
  const { domain } = state;
  const { jwt } = useSelector((state) => state.utils);
  const dispatch = useDispatch();
  const fillDynamicUrl = useFillDynamicValue();
  const { setValues } = useFormikContext();
  const initialFormikValues = useInitialFormikValues();

  useEffect(() => {
    const findDomainModelUrl = state?.pageDesc?.pageDesc?.datamodelFindGETURL;
    const domainUrl = fillDynamicUrl(findDomainModelUrl);
    getDomainModel(domainUrl, jwt).then((domainModel) => {
      dispatch(setDomainModel(domainModel));
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(domain)) {
      setValues({
        ...initialFormikValues,
        employee: {
          ...domain,
        },
      });
    }
  }, [domain]);

  return (
    <>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
        <HomeAndPostTop
          title={
            "Lockheed 2 Industries Inc working with Brown Agencies Inc has created a best-in-class benefits program to meet your benefit needs. Below are the benefits offered in this enrollment."
          }
          subtitle={
            "View details by clicking on each and select which one you would like to enroll to"
          }
        />
        <View style={styles.wrapper}>
          <BenefitGroups title={"Income Protection"}>
            <BenefitSubSector
              logoSubSector={<CruthesSvg />}
              titleSubSector={"Voluntary STD"}
            >
              <CostOverview />
            </BenefitSubSector>
            <BenefitSubSector
              logoSubSector={<WheelchairSvg />}
              titleSubSector={"Voluntary LTD"}
            >
              <CostOverview />
            </BenefitSubSector>
          </BenefitGroups>

          <BenefitGroups title={"Financial Protection"}>
            <BenefitSubSector
              logoSubSector={<UmbrelaSvg />}
              titleSubSector={"Term Life"}
            >
              <CostOverview />
            </BenefitSubSector>
            <BenefitSubSector
              logoSubSector={<UmbrelaSvg />}
              titleSubSector={"Whole Life"}
            >
              <CostOverview />
            </BenefitSubSector>
          </BenefitGroups>

          <BenefitGroups title={"Healthcare Expense Management"}>
            <BenefitSubSector
              logoSubSector={<ThermometrSvg />}
              titleSubSector={"Critical Illness"}
            >
              <CostOverview />
            </BenefitSubSector>
            <BenefitSubSector
              logoSubSector={<HospitalBedSvg />}
              titleSubSector={"Hospital Indemnity"}
            >
              <CostOverview />
            </BenefitSubSector>
          </BenefitGroups>
        </View>
      </ScrollView>
      <ButtonEnrollment
        handleStartEnrollment={() =>
          navigation.navigate("EnrollmentNavigation")
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 70,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
});

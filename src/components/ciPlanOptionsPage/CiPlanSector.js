import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { useState } from "react";
import EyeSvg from "../../assets/icons/stdPlanOptions/eyeIcon.svg";
import DownloadSvg from "../../assets/icons/stdPlanOptions/downloadIcon.svg";
import ThermometerIconSvg from "../../assets/icons/plans/ci.svg";
import styles from "./CiPlanSectorStyles";
import { PlanSector } from "../utils/PlanSector";
import { ShowHideButtonAndText } from "../utils/ShowHideButtonAndText";

export const CiPlanSector = (props) => {
  const { header, isRadioButton = false } = props;
  const [isVisiblePlan, setIsVisiblePlan] = useState(true);
  const [isVisibleEmployee, setIsVisibleEmployee] = useState(true);
  const [isSelected, setIsSelected] = useState(true);
  const handleSelect = () => {
    setIsSelected((prev) => !prev);
  };

  const handlePress = (state) => {
    state((prev) => !prev);
  };

  return (
    <PlanSector
      logo={<ThermometerIconSvg />}
      title={header}
      handleSelect={handleSelect}
      isSelected={isSelected}
      isRadioButton={isRadioButton}
    >
      <ShowHideButtonAndText
        isVisible={isVisiblePlan}
        handlePress={() => handlePress(setIsVisiblePlan)}
        isMarginTop={true}
      >
        <Text style={styles.subTitle}>Plan Summary</Text>
      </ShowHideButtonAndText>

      <View
        style={isVisiblePlan ? { ...styles.listWrapper } : { display: "none" }}
      >
        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Member Benefit</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>$10,000</Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Spouse Benefit</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>$10,000</Text>
        </View>

        <View style={[styles.listItem, styles.additionalItemBottomMargin]}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Child(ren) Benefit</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>$5,000</Text>
        </View>

        <View style={styles.linksWrapper}>
          <TouchableOpacity style={styles.iconAndLinkWrapper}>
            <EyeSvg style={styles.linkIcon} />
            <Text style={styles.linkText}>View Benefit Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconAndLinkWrapper}>
            <DownloadSvg style={styles.linkIcon} />
            <Text style={styles.linkText}>Download Benefit Details</Text>
          </TouchableOpacity>
        </View>

        <PseudoElement />
      </View>

      <ShowHideButtonAndText
        isMarginTop={true}
        isVisible={isVisibleEmployee}
        handlePress={() => handlePress(setIsVisibleEmployee)}
      >
        <Text style={styles.subTitle}>Employee Cost</Text>
      </ShowHideButtonAndText>

      <View
        style={
          isVisibleEmployee ? { ...styles.listWrapper } : { display: "none" }
        }
      >
        <View style={styles.costListWrapper}>
          <View style={styles.titlesItemsWrapper}>
            <Text style={[styles.titleItems, styles.additionalWidth]}>
              Coverage Tier
            </Text>
            <Text style={styles.titleItems}>Bi-Weekly Cost</Text>
          </View>
          <View style={[styles.textItemsWrapper, styles.itemsBackgroundColor]}>
            <Text style={styles.textItems}>Employee Only</Text>
            <Text style={styles.numberItems}>$4.16</Text>
          </View>

          <View style={[styles.textItemsWrapper]}>
            <Text style={styles.textItems}>Employee and Spouse</Text>
            <Text style={styles.numberItems}>$8.58</Text>
          </View>

          <View style={[styles.textItemsWrapper, styles.itemsBackgroundColor]}>
            <Text style={styles.textItems}>Employee and Children</Text>
            <Text style={styles.numberItems}>$4.16</Text>
          </View>

          <View style={[styles.textItemsWrapper]}>
            <Text style={styles.textItems}>Employee and Family</Text>
            <Text style={styles.numberItems}>$8.58</Text>
          </View>
        </View>
      </View>
    </PlanSector>
  );
};

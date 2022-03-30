import { View, Text, TouchableOpacity } from "react-native";
import UmbrelaSvg from "../../assets/icons/termLifePlanOptions/umbrelaIconSvg.svg";
import { useState } from "react";
import EyeSvg from "../../assets/icons/stdPlanOptions/eyeIcon.svg";
import DownloadSvg from "../../assets/icons/stdPlanOptions/downloadIcon.svg";
import styles from "./TermPlanSectorStyles";
import { PlanSector } from "../utils/PlanSector";
import { ShowHideButtonAndText } from "../utils/ShowHideButtonAndText";

export const TermPlanSector = ({ isRadioButton = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  const onHandleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  const onHandlePress = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <PlanSector
      logo={<UmbrelaSvg />}
      title={"Group Voluntary Term Life"}
      onHandleSelected={onHandleSelected}
      isSelected={isSelected}
      isRadioButton={isRadioButton}
    >
      <ShowHideButtonAndText
        isVisible={isVisible}
        onHandlePress={onHandlePress}
        subTitle={"Plan Summary"}
      />

      <View style={isVisible ? { ...styles.listWrapper } : { display: "none" }}>
        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Type of Coverage</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>
            Term Life and AD&D
          </Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Policy Amount</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>
            Choose from $10k to 100k
          </Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Spouse Policy</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>
            Choose from $5k to 25k
          </Text>
        </View>

        <View style={[styles.listItem, styles.additionalItemBottomMargin]}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Children Policy</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>
            Upto $10k
          </Text>
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
      </View>
    </PlanSector>
  );
};

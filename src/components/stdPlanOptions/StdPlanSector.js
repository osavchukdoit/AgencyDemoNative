import { View, Text, TouchableOpacity } from "react-native";
import CrutchesSvg from "../../assets/icons/stdPlanOptions/crutches.svg";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { useState } from "react";
import EyeSvg from "../../assets/icons/stdPlanOptions/eyeIcon.svg";
import DownloadSvg from "../../assets/icons/stdPlanOptions/downloadIcon.svg";
import styles from "./stdPlanSectorStyles";
import { PlanSector } from "../utils/PlanSector";

export const StdPlanSector = ({ isRadioButton = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSelected, setIsSelected] = useState(true);

  const handleSelect = () => {
    setIsSelected((prev) => !prev);
  };

  const handlePress = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <PlanSector
      logo={<CrutchesSvg />}
      title={"Short Time Disability 7-7-25"}
      handleSelect={handleSelect}
      isSelected={isSelected}
      isRadioButton={isRadioButton}
    >
      <View style={styles.subTitleAndButtonWrapper}>
        <Text style={styles.subTitle}>Plan Summary</Text>
        <TouchableOpacity
          style={[styles.buttonShowHide, isVisible && styles.rotate]}
          onPress={handlePress}
        >
          <Text>
            <ShowHideIconSvg />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={isVisible ? { ...styles.listWrapper } : { display: "none" }}>
        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Type of Coverage</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>
            Occupational
          </Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Elimination Period</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>
            7 days injury/7 days sickness
          </Text>
        </View>

        <View style={[styles.listItem, styles.additionalItemBottomMargin]}>
          <View style={styles.pointAndTitleWrapper}>
            <View style={styles.listPoint}></View>
            <Text style={styles.itemTitle}>Benefit Duration</Text>
          </View>
          <Text style={[styles.itemTitle, styles.darkTextColor]}>25 Weeks</Text>
        </View>
      </View>

      <View style={styles.costWrapper}>
        <Text style={[styles.subTitle, styles.additionalBottomMargin]}>
          Bi-Weekly cost for available weekly benefits amouts
        </Text>
        <View style={styles.costAndButtonWrapper}>
          <Text style={styles.costTitle}>$51.25 for $1025 Weekly Benefit</Text>
          <TouchableOpacity style={styles.buttonShowHide}>
            <ShowHideIconSvg />
          </TouchableOpacity>
        </View>
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
    </PlanSector>
  );
};

import { View, Text, TouchableOpacity } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { useState } from "react";
import EyeSvg from "../../assets/icons/stdPlanOptions/eyeIcon.svg";
import DownloadSvg from "../../assets/icons/stdPlanOptions/downloadIcon.svg";
import ThermometerIconSvg from "../../assets/icons/ciPlanOptions/thermometerIcon.svg";
import styles from "./CiPlanSectorStyles";
import { PlanSector } from "../utils/PlanSector";

export const CiPlanSector = ({ isRadioButton = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSelected, setIsSelected] = useState(true);

  const onHandleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  const onHandlePress = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <PlanSector
      logo={<ThermometerIconSvg />}
      title={"Critical Illness $10,000"}
      onHandleSelected={onHandleSelected}
      isSelected={isSelected}
      isRadioButton={isRadioButton}
    >
      <View style={styles.subTitleAndButtonWrapper}>
        <Text style={styles.subTitle}>Plan Summary</Text>
        <TouchableOpacity
          style={[
            styles.buttonShowHide,
            isVisible && { transform: [{ rotate: "180deg" }] },
          ]}
          onPress={onHandlePress}
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
      </View>

      <PseudoElement />

      <View style={styles.subTitleWrapper}>
        <Text style={styles.subTitle}>Employee Cost</Text>
      </View>

      <View style={styles.listWrapper}>
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

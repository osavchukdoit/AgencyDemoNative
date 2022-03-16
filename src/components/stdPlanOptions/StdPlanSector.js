import { View, Text, TouchableOpacity } from "react-native";
import CrutchesSvg from "../../assets/icons/stdPlanOptions/crutches.svg";
import { PseudoElement } from "./PseudoElement";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { useState } from "react";
import EyeSvg from "../../assets/icons/stdPlanOptions/eyeIcon.svg";
import DownloadSvg from "../../assets/icons/stdPlanOptions/downloadIcon.svg";
import styles from "./stdPlanSectorStyles";

export const StdPlanSector = ({ isRadioButton = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSelected, setIsSelected] = useState(true);

  const onHandleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  const onHandlePress = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <View
      style={[
        styles.planSectorWrapper,
        isRadioButton && styles.focusPlanSectorBorder,
      ]}
    >
      <View style={styles.iconAndTitleWrapper}>
        <View style={styles.iconWrapper}>
          <CrutchesSvg />
        </View>
        <View>
          <Text style={styles.sectorTitle}>Short Time Disability 7-7-25</Text>
          {isRadioButton && (
            <View style={styles.selectedButtonAndTextWrapper}>
              <TouchableOpacity
                onPress={onHandleSelected}
                style={styles.selectedRaioButton}
              >
                <View
                  style={
                    isSelected ? styles.radioButtonPoint : styles.displayNone
                  }
                ></View>
              </TouchableOpacity>
              <Text style={styles.selectedRadioButtonText}>Selected Plan</Text>
            </View>
          )}
        </View>
      </View>

      <PseudoElement />

      <View style={styles.subTitleAndButtonWrapper}>
        <Text style={styles.subTitle}>Plan Summary</Text>
        <TouchableOpacity
          style={
            isVisible
              ? { ...styles.buttonShowHide }
              : {
                  ...styles.buttonShowHide,
                  transform: [{ rotate: "180deg" }],
                }
          }
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
    </View>
  );
};

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { shadowStyles } from "../../styles/shadowStyles";
import ArrowUpSvg from "../../assets/icons/arrowUp.svg";
import styles from "./PostPlanSectorStyles";

export const PostPlanSector = ({ children, options }) => {
  const { icon, title, effectiveDate, cost } = options;
  const [isVisible, setVisible] = useState(true);
  const handleVisible = () => setVisible((prev) => !prev);
  return (
    <View
      style={[
        styles.postPlanlanSectorWrapper,
        !isVisible && styles.additionalPaddingBottom,
        shadowStyles.boxShadow,
      ]}
    >
      <View style={styles.iconAndTitleWrapper}>
        <View style={styles.iconWrapper}>{icon}</View>
        <View>
          <View style={styles.titleAndButtonContainer}>
            <Text style={styles.sectorTitle}>{title}</Text>
            <TouchableOpacity
              onPress={handleVisible}
              style={[styles.buttonShowHide, !isVisible && styles.rotate]}
            >
              <ArrowUpSvg />
            </TouchableOpacity>
          </View>
          <Text style={styles.dateText}>{effectiveDate}</Text>
          <Text style={styles.costText}>${cost} Bi-Weekly</Text>
        </View>
      </View>
      <View
        style={[
          styles.employeeAndFamilyWrapper,
          isVisible && styles.additionalMarginBottom,
        ]}
      >
        <Text style={styles.employeeAndFamilyTitle}>Employee and Family</Text>
        <View style={styles.familyMembersContainer}>
          <Text style={styles.familyMemberName}>John Doe</Text>
          <View style={styles.point} />
          <Text style={styles.familyMemberName}>Mary Doe</Text>
          <View style={styles.point} />
          <Text style={styles.familyMemberName}>Sarah Doe</Text>
        </View>
      </View>
      {isVisible && <>{children}</>}
    </View>
  );
};

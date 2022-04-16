import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { InformationMapper } from "../postEnrollmentHomePage/InformationMapper";
import { SubmitSectorWrapper } from "../submitPage/SubmitSectorWrapper";
import EditButtonSvg from "../../assets/icons/contactDetailsIcons/editButtonSvg.svg";

export const MemberServiceIAndContactDetailsSector = ({ options }) => {
  const [editActive, setEditActive] = useState(false);

  const handleEditActive = () => setEditActive((prev) => !prev);

  return (
    <SubmitSectorWrapper>
      <View style={styles.headerAndIconContainer}>
        <Text style={styles.header}>{options.header}</Text>
        {options.isEditable &&
          (editActive ? (
            <TouchableOpacity
              onPress={handleEditActive}
              style={[styles.buttonWithIcon, styles.buttonSave]}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleEditActive}
              style={styles.buttonWithIcon}
            >
              <EditButtonSvg />
            </TouchableOpacity>
          ))}
      </View>
      {
        <InformationMapper
          isEditActive={editActive}
          options={options.infoOptions}
        />
      }
    </SubmitSectorWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 13,
  },

  headerAndIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonWithIcon: {
    width: 24,
    height: 24,
    backgroundColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonSave: {
    width: 50,
    height: 24,
    borderRadius: 15,
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.WHITE,
  },
});

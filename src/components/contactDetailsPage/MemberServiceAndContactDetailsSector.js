import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { InformationMapper } from "../postEnrollmentHomePage/InformationMapper";
import { BasicSectorWrapper } from "../../components/utils/BasicSectorWrapper";
import EditButtonSvg from "../../assets/icons/contactDetailsIcons/editButtonSvg.svg";

export const MemberServiceAndContactDetailsSector = ({ memberDetails }) => {
  const [editActive, setEditActive] = useState(false);
  const { header, isEditable, infoOptions } = memberDetails;
  const handleEditActive = () => setEditActive((prev) => !prev);

  return (
    <BasicSectorWrapper>
      <View style={styles.headerAndIconContainer}>
        <Text style={styles.header}>{header}</Text>
        {isEditable &&
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
      {<InformationMapper isEditActive={editActive} options={infoOptions} />}
    </BasicSectorWrapper>
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
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.WHITE,
  },
});

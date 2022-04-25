import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import ModalSelector from "react-native-modal-selector";
import ArrowDownSvg from "../../assets/icons/contactDetailsIcons/arrowDownSvg.svg";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const Dropdown = () => {
  const [textInputValue, setTextInputValue] = useState("");

  const dropdownOptions = [
    { key: 1, section: true, label: "Doctors" },
    { key: 2, label: "Vision Care" },
    { key: 3, label: "Dantist" },
    {
      key: 4,
      label: "Family Doctor",
    },
  ];

  return (
    <View
      style={[
        styles.selectWrapper,
        Platform.OS === "android" && styles.additionalHight,
      ]}
    >
      <View style={styles.iconWrapper}>
        <ArrowDownSvg />
      </View>

      <ModalSelector
        optionContainerStyle={styles.additionalBgColor}
        data={dropdownOptions}
        supportedOrientations={["portrait"]}
        accessible={true}
        scrollViewAccessibilityLabel={"Scrollable options"}
        cancelButtonAccessibilityLabel={"Cancel Button"}
        onChange={(option) => {
          setTextInputValue(option.label);
        }}
      >
        <TextInput
          style={[textInputValue && styles.textInputValue]}
          editable={false}
          placeholder="Select Specialist"
          value={textInputValue}
        />
      </ModalSelector>
    </View>
  );
};

const styles = StyleSheet.create({
  selectWrapper: {
    borderWidth: 1,
    borderColor: THEME.COLOR.GREY_LIGHT_BORDER,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: THEME.COLOR.GREY_LIGHT_SHADOW,
    marginBottom: 16,
    paddingLeft: 19,
    height: 44,
    justifyContent: "center",
    position: "relative",
  },

  additionalBgColor: {
    backgroundColor: THEME.COLOR.GREY_MODAL_DROPDOWN,
  },

  additionalHight: {
    height: 49,
  },

  iconWrapper: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 11,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V2,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  textInputValue: {
    fontFamily: FONTS.AVENIR.HEAVY,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    fontSize: 16,
  },
});

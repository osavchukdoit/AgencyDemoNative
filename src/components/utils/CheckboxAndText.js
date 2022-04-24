import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import SelectedIconSvg from "../../assets/icons/ciSelectPlan/selectedIcon.svg";

export const CheckboxAndText = ({ children, onModalVisible }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <TouchableOpacity
      onPress={() => (handleCheck(), onModalVisible())}
      style={styles.checkboxAndTextWrapper}
    >
      <View style={styles.checkbox}>{isChecked && <SelectedIconSvg />}</View>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: THEME.BACKGROUND.MENU,
    marginRight: 9,
    justifyContent: "center",
    alignItems: "center",
  },
});

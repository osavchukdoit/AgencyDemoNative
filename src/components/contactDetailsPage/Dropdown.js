import React, { useState, useRef } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import ArrowDownSvg from "../../assets/icons/contactDetailsIcons/arrowDownSvg.svg";

const Icon = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.iconWrapper}>
      <ArrowDownSvg />
    </Pressable>
  );
};

export const Dropdown = () => {
  const [selectedType, setSelectedType] = useState();
  const pickerRef = useRef();
  const open = () => {
    pickerRef.current.focus();
  };
  return (
    <View style={styles.selectWrapper}>
      <Icon onPress={open} />

      <Picker
        itemStyle={styles.textInputValue}
        ref={pickerRef}
        style={styles.textInput}
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
      >
        <Picker.Item label="Vision Care" value="visioncare" />
        <Picker.Item label="Dantist" value="dantist" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  selectWrapper: {
    borderWidth: 1,
    borderColor: "rgba(29, 37, 43, 0.05)",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: "rgba(112, 112, 112, 0.05)",
    marginBottom: 16,
    paddingLeft: 8,
    height: 49,
    justifyContent: "center",
    position: "relative",
  },

  textInput: {
    fontFamily: FONTS.AVENIR.HEAVY,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    fontSize: 16,
    marginBottom: 10,
  },

  textInputValue: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
  },

  iconWrapper: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 11,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V2,
    zIndex: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

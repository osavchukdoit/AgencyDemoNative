import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { ControlWrapper } from "./ControlWrapper";
import { useSelector } from "react-redux";
import { getValidValues } from "../api/validValues";
import { isEmpty } from "lodash";

export const RadioButton = (props) => {
  const { editable, propName } = props;
  const { jwt } = useSelector((state) => state.utils);
  const [options, setOptions] = useState();
  const [checkedOption, setCheckedOption] = useState(null);

  useEffect(() => {
    getValidValues(jwt, propName).then((validValues) => {
      setOptions(validValues);
    });
  }, [propName]);

  const onOptionPressed = (id) => {
    setCheckedOption(id);
  };

  const radioButton = ({ display, id }) => {
    const isChecked = checkedOption === id;
    return (
      <TouchableOpacity
        disabled={editable === "false"}
        onPress={() => onOptionPressed(id)}
        style={[styles.radioButton, isChecked && styles.checkedRadioButton]}
        key={id}
      >
        <Text
          style={[styles.radioLabel, isChecked && styles.checkedRadioLabel]}
        >
          {display}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (!isEmpty(options) && propName === "gender") {
      setCheckedOption(options[0].id);
    }
  }, [propName, options]);

  return (
    <ControlWrapper {...props}>
      <View style={styles.radioButtonsContainer}>
        {options?.map((radioOption) => radioButton(radioOption))}
      </View>
    </ControlWrapper>
  );
};

const styles = StyleSheet.create({
  radioButtonsContainer: {
    flexDirection: "row",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.06,
    borderWidth: 1,
    borderColor: THEME.COLOR.LIGHT_BORDER,
    borderStyle: "solid",
    borderRadius: 10,
  },
  radioButton: {
    width: "50%",
    height: 49,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedRadioButton: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },
  radioLabel: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },
  checkedRadioLabel: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },
});
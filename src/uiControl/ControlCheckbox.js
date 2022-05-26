import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import SelectedIconSvg from "../assets/icons/selectedIcon.svg";
import { THEME } from "../styles/theme";
import { getValidValues } from "../api/validValues";
import { useSelector } from "react-redux";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";
import { useSetMandatory } from "../form/useSetMandatory";
import { uiControlStyles } from "./uiControlStyles";
import { isEmpty } from "lodash";

export const ControlCheckbox = (props) => {
  const {
    editable,
    propName,
    personType = "employee",
    markup,
    mandatory,
  } = props;
  const { jwt } = useSelector((state) => state.utils);
  const [options, setOptions] = useState([]);
  const [yesLabel, setYesLabel] = useState("");
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error: errorMessage, touched }] =
    useField(fieldName);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);
  const markupStyles = propMarkupStyles(markup);
  useSetMandatory({ personType, propName, mandatory });

  useEffect(() => {
    getValidValues(jwt, propName).then((validValues) => {
      setOptions(validValues);
      setYesLabel(
        validValues.find(({ id }) => id === "true" || id === "Yes").display
      );
    });
  }, [propName]);

  const handleCheck = () => {
    if (fieldValue === "true" || fieldValue === "Yes") {
      handleChangeFieldValue(
        options.find(({ id }) => id === "false" || id === "No").id
      );
    }
    if (fieldValue === "false" || fieldValue === "No" || !fieldValue) {
      handleChangeFieldValue(
        options.find(({ id }) => id === "true" || id === "Yes").id
      );
    }
  };

  useEffect(() => {
    if (fieldValue === undefined && !isEmpty(options)) {
      handleChangeFieldValue(
        options.find(({ id }) => id === "false" || id === "No").id
      );
    }
  }, [options]);

  return (
    <>
      <TouchableOpacity
        onPress={() => handleCheck()}
        style={styles.checkboxAndTextWrapper}
        disabled={editable === "false"}
      >
        <View
          style={[
            styles.checkbox,
            editable === "false" && styles.checkboxDisabled,
          ]}
        >
          {(fieldValue === "true" || fieldValue === "Yes") && (
            <SelectedIconSvg />
          )}
        </View>
        <Text style={[markupStyles && markupStyles]}>{yesLabel}</Text>
      </TouchableOpacity>
      {errorMessage && touched && (
        <Text style={uiControlStyles.textError}>{errorMessage}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  checkboxAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
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
  checkboxDisabled: {
    borderColor: THEME.COLOR.GREY_BORDER,
  },
});

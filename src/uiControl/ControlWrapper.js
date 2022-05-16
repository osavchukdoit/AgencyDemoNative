import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";
import {
  useFillDynamicDomainField,
  useFillDynamicValue,
} from "../api/useFillDynamicValue";
import { useField } from "formik";

export const ControlWrapper = (props) => {
  const {
    propLabel,
    mandatory,
    children,
    propName,
    displayable,
    propValue,
    personType = "employee",
    editable,
  } = props;
  const fillDynamicFieldValue = useFillDynamicValue();
  const fillDynamicDomainField = useFillDynamicDomainField();
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);

  if (displayable === "false") {
    if (propValue) {
      const value = fillDynamicFieldValue(propValue);
      if (fieldValue !== value && editable === "true") {
        setValue(value);
      }
    }
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        {fillDynamicDomainField(propLabel)}
        {mandatory === "true" && <RequiredField />}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    marginBottom: 16,
    width: "100%",
  },
  title: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
  },
});

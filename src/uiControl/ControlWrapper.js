import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";
import {
  useFillDynamicContextField,
  useFillDynamicValue,
} from "../api/useFillDynamicValue";
import { useField } from "formik";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

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
    depPropDesc = null,
  } = props;
  const { domain } = useSelector((state) => state);
  const fillDynamicFieldValue = useFillDynamicValue();
  const fillDynamicDomainField = useFillDynamicContextField(domain);
  const [{ value: personFieldValue }] = useField(personType);
  const fillDynamicPersonField = useFillDynamicContextField(
    personFieldValue,
    true
  );
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);
  const [conditionalRender, setConditionalRender] = useState(true);

  if (displayable === "false") {
    if (propValue) {
      const value = fillDynamicFieldValue(propValue);
      if (fieldValue !== value && editable === "true") {
        setValue(value);
      }
    }
    return null;
  }

  useEffect(() => {
    if (!isEmpty(depPropDesc)) {
      const propDependencies = depPropDesc.filter(({ displayPropNames }) => {
        return displayPropNames.includes(propName);
      });
      if (!isEmpty(propDependencies)) {
        const propConditions = propDependencies.map(({ condition }) => {
          const processedCondition = condition.replaceAll(
            /\=[\w\d\s]*/gi,
            (value) => {
              return value.trim().replace("=", '==="').concat('"');
            }
          );
          const filledCondition = fillDynamicPersonField(processedCondition);
          const result = eval(filledCondition);
          return result;
        });
        setConditionalRender(
          propConditions.some((condition) => condition === true)
        );
      }
    }
  }, [depPropDesc, personFieldValue]);

  if (!conditionalRender) return null;

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

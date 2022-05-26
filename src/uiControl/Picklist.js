import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { getValidValues } from "../api/validValues";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { uiControlStyles } from "./uiControlStyles";
import { CONSTANTS } from "../constants";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";
import { useSetMandatory } from "../form/useSetMandatory";

export const Picklist = (props) => {
  const {
    editable,
    propName,
    personType = "employee",
    markup,
    mandatory,
  } = props;
  const { jwt } = useSelector((state) => state.utils);
  const [picklistOptions, setPicklistOptions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const isIos = Platform.OS === CONSTANTS.OS.ios;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error: errorMessage, touched }] =
    useField(fieldName);
  const [fieldLabel, setFieldLabel] = useState();
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);
  useSetMandatory({ personType, propName, mandatory });

  useEffect(() => {
    if (!isEmpty(picklistOptions)) {
      const value = picklistOptions?.find(({ value }) => value === fieldValue);
      setFieldLabel(value?.label);
    }
  }, [picklistOptions, fieldValue]);

  const getPicklistValidValues = () => {
    getValidValues(jwt, propName).then((validValues) => {
      const options = validValues.map(({ display, id }) => {
        return { label: display, value: id };
      });
      setPicklistOptions(options);
    });
  };

  useEffect(async () => {
    getPicklistValidValues();
  }, []);

  useEffect(() => {
    if (!isEmpty(picklistOptions) && isEmpty(fieldValue)) {
      handleChangeFieldValue(picklistOptions[0]?.value);

      if (
        propName === "countryOfCitizenship" ||
        propName === "depCountryCitizenship"
      ) {
        const defaultUsCitizenshipIndex = picklistOptions?.findIndex(
          ({ value }) => value === "United States"
        );
        handleChangeFieldValue(
          picklistOptions[defaultUsCitizenshipIndex]?.value
        );
      }
    }
  }, [picklistOptions, propName, fieldValue]);

  const openPicklist = () => setIsVisible(true);
  const closePicklist = () => setIsVisible(false);

  return (
    <>
      {isIos && (
        <>
          <Text
            style={[
              uiControlStyles.textInputBorderFocus,
              uiControlStyles.textInput,
              editable === "true" && uiControlStyles.textInputEditable,
              styles.picklistValue,
              markupStyles && markupStyles,
              !isVisible && uiControlStyles.textInputBorderBlurTransparent,
            ]}
            onPress={openPicklist}
          >
            {fieldLabel}
          </Text>
          {errorMessage && touched && (
            <Text style={uiControlStyles.textError}>{errorMessage}</Text>
          )}
        </>
      )}
      {(!isIos || isVisible) && (
        <>
          <View
            style={[
              !isIos &&
                uiControlStyles.textInput &&
                styles.picklistValue &&
                styles.picklistWrapperAndroid,
            ]}
          >
            <Picker
              selectedValue={fieldValue}
              onValueChange={(itemValue) => {
                handleChangeFieldValue(itemValue);
              }}
              enabled={editable === "true"}
              mode={"dropdown"}
              style={[
                !isIos && styles.picklistValueAndroid,
                editable === "true" && uiControlStyles.textInputEditable,
                markupStyles && markupStyles,
              ]}
            >
              {picklistOptions?.map((option) => (
                <Picker.Item key={option.value} {...option} />
              ))}
            </Picker>
          </View>
          {errorMessage && touched && (
            <Text style={uiControlStyles.textError}>{errorMessage}</Text>
          )}
        </>
      )}
      {isIos && isVisible && (
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={closePicklist} style={styles.hideBtn}>
            <Text style={styles.hideBtnText}>Hide</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  picklistValue: {
    lineHeight: 49,
    overflow: "hidden",
  },
  picklistWrapperAndroid: {
    paddingLeft: 41,
    height: 49,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    borderRadius: 10,
  },
  picklistValueAndroid: {
    color: THEME.COLOR.DARK_BLUE_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
  },
  btnWrapper: {
    alignItems: "center",
  },
  hideBtn: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  hideBtnText: {
    color: THEME.COLOR.WHITE,
    textAlign: "center",
  },
});

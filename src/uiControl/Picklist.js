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

export const Picklist = (props) => {
  const { editable, propName, personType = "employee" } = props;
  const { jwt } = useSelector((state) => state.utils);
  const [picklistOptions, setPicklistOptions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const isIos = Platform.OS === CONSTANTS.OS.ios;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);
  const [fieldLabel, setFieldLabel] = useState();

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
    if (!isEmpty(picklistOptions)) {
      setValue(picklistOptions[0]?.value);

      if (propName === "countryOfCitizenship") {
        const defaultUsCitizenshipIndex = picklistOptions?.findIndex(
          ({ value }) => value === "United States"
        );
        setValue(picklistOptions[defaultUsCitizenshipIndex]?.value);
      }
    }
  }, [picklistOptions, propName]);

  const openPicklist = () => setIsVisible(true);
  const closePicklist = () => setIsVisible(false);

  return (
    <>
      {isIos && (
        <Text
          style={[
            uiControlStyles.textInputBorderFocus,
            uiControlStyles.textInput,
            editable === "true" && uiControlStyles.textInputEditable,
            styles.picklistValue,
            !isVisible && uiControlStyles.textInputBorderBlurTransparent,
          ]}
          onPress={openPicklist}
        >
          {fieldLabel}
        </Text>
      )}
      {(!isIos || isVisible) && (
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
              setValue(itemValue);
            }}
            enabled={editable === "true"}
            mode={"dropdown"}
            style={[
              !isIos && styles.picklistValueAndroid,
              editable === "true" && uiControlStyles.textInputEditable,
            ]}
          >
            {picklistOptions?.map((option) => (
              <Picker.Item key={option.value} {...option} />
            ))}
          </Picker>
        </View>
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

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
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { CONSTANTS } from "../constants";

export const Picklist = (props) => {
  const { editable, propName } = props;
  const { jwt } = useSelector((state) => state.utils);
  const [picklistOptions, setPicklistOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const isIos = Platform.OS === CONSTANTS.OS.ios;

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
    setSelectedValue(picklistOptions[0]?.value);
    setSelectedLabel(picklistOptions[0]?.label);

    if (propName === "countryOfCitizenship" && !isEmpty(picklistOptions)) {
      const defaultUsCitizenshipIndex = picklistOptions?.findIndex(
        ({ value }) => value === "United States"
      );
      setSelectedValue(picklistOptions[defaultUsCitizenshipIndex]?.value);
      setSelectedLabel(picklistOptions[defaultUsCitizenshipIndex]?.label);
    }
  }, [picklistOptions]);

  const openPicklist = () => {
    setIsVisible(true);
  };
  const closePicklist = () => setIsVisible(false);

  return (
    <ControlWrapper {...props}>
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
          {selectedLabel}
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
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              setSelectedLabel(picklistOptions[itemIndex].label);
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
    </ControlWrapper>
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

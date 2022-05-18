import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import CalendarIconSvg from "../assets/icons/familyInfoIcons/calendar.svg";
import { AppDatePicker } from "../components/AppDatePicker";
import { uiControlStyles } from "./uiControlStyles";
// React Native used JavaScriptCore engine in non-debug mode
// & it doesn't work well with dates, but work during debug
// because it uses chrome V8 engine while debugging.
import moment from "moment";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";

export const DateControl = (props) => {
  const { editable, propName, personType = "employee", markup } = props;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const markupStyles = propMarkupStyles(markup);

  const handleDatePress = () => {
    if (editable === "false") return;
    setShowDatePicker(true);
  };

  return (
    <>
      <CalendarIconSvg style={uiControlStyles.inputIcon} />
      <Text
        style={[
          uiControlStyles.textInputBorderFocus,
          uiControlStyles.textInput,
          editable === "true" && uiControlStyles.textInputEditable,
          styles.dateText,
          markupStyles && markupStyles,
          !showDatePicker && uiControlStyles.textInputBorderBlurTransparent,
        ]}
        onPress={handleDatePress}
      >
        {fieldValue}
      </Text>
      <AppDatePicker
        date={moment(fieldValue, "L").toDate()}
        setDate={setValue}
        show={showDatePicker}
        setShow={setShowDatePicker}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dateText: {
    lineHeight: 49,
  },
});

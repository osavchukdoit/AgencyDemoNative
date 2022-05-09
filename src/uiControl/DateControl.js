import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import CalendarIconSvg from "../assets/icons/familyInfoIcons/calendar.svg";
import { AppDatePicker } from "../components/AppDatePicker";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
// React Native used JavaScriptCore engine in non-debug mode
// & it doesn't work well with dates, but work during debug
// because it uses chrome V8 engine while debugging.
import moment from "moment";

export const DateControl = (props) => {
  const { editable } = props;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date(598061730000));

  const handleDatePress = () => {
    if (editable === "false") return;
    setShowDatePicker(true);
  };

  return (
    <ControlWrapper {...props}>
      <CalendarIconSvg style={uiControlStyles.inputIcon} />
      <Text
        style={[
          uiControlStyles.textInputBorderFocus,
          uiControlStyles.textInput,
          styles.dateText,
          !showDatePicker && uiControlStyles.textInputBorderBlurTransparent,
        ]}
        onPress={handleDatePress}
      >
        {moment(date).format("MM/DD/YYYY")}
      </Text>
      <AppDatePicker
        date={date}
        setDate={setDate}
        show={showDatePicker}
        setShow={setShowDatePicker}
      />
    </ControlWrapper>
  );
};

const styles = StyleSheet.create({
  dateText: {
    lineHeight: 49,
  },
});

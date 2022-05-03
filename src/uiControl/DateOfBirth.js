import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CalendarIconSvg from "../assets/icons/familyInfoIcons/calendar.svg";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";
import { AppDatePicker } from "../components/AppDatePicker";

export const DateOfBirth = (props) => {
  const { mandatory, editable, propLabel } = props;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date(598051730000));

  const handleDatePress = () => {
    if (editable === "false") return;
    setShowDatePicker(true);
  };

  return (
    <View style={styles.titleAndInputWrapper}>
      <Text style={styles.titleInfo}>
        {propLabel}
        {mandatory === "true" && <RequiredField />}
      </Text>
      <CalendarIconSvg style={styles.inputIcon} />
      <Text style={styles.dateText} onPress={handleDatePress}>
        {date.toLocaleDateString("en-US")}
      </Text>
      <AppDatePicker
        date={date}
        setDate={setDate}
        show={showDatePicker}
        setShow={setShowDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleAndInputWrapper: {
    position: "relative",
    marginBottom: 16,
    width: "100%",
  },
  titleInfo: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
  },
  inputIcon: {
    position: "absolute",
    top: 46,
    left: 20,
    zIndex: 1,
  },
  dateText: {
    height: 49,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 49,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
  },
});

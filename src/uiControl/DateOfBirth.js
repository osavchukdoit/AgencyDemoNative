import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
// import styles from "../components/personalInfoPage/stylesMainPersonalInfo";
import CalendarIconSvg from "../assets/icons/familyInfoIcons/calendar.svg";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";

export const DateOfBirth = (props) => {
  const { mandatory, editable, propLabel } = props;
  return (
    <View style={styles.titleAndInputWrapper}>
      <Text style={styles.titleInfo}>
        {propLabel}
        {mandatory && <RequiredField />}
      </Text>
      <CalendarIconSvg style={styles.inputIcon} />
      {editable ? (
        <TextInput style={styles.textInput}>09/09/1990</TextInput>
      ) : (
        <Text>09/09/1990</Text>
      )}
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
    bottom: 16,
    left: 20,
    zIndex: 9,
  },
  textInput: {
    height: 49,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
  },
});

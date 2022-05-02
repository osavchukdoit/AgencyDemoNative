import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ShieldIconSvg from "../assets/icons/personInfoIcons/shield.svg";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";
import { TextInputMask } from "react-native-masked-text";

export const Ssn = (props) => {
  const { propLabel, editable, mandatory } = props;
  const [ssnValue, setSsnValue] = useState("XXX-XXX-XXXX");

  return (
    <View style={styles.titleAndInputWrapper}>
      <Text style={styles.titleInfo}>
        {propLabel}
        {mandatory === "true" && <RequiredField />}
      </Text>
      <ShieldIconSvg style={styles.inputIcon} />
      {editable === "true" ? (
        <TextInputMask
          type={"custom"}
          options={{
            mask: "999-999-9999",
          }}
          value={ssnValue}
          onChangeText={setSsnValue}
          style={styles.textInput}
        />
      ) : (
        <TextInput editable={false} style={styles.textInput}>
          XXX-XXX-XXXX
        </TextInput>
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

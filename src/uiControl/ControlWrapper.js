import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";
import { useFillDynamicField } from "../api/useFillDynamicUrl";
import { CONSTANTS } from "../constants";

export const ControlWrapper = (props) => {
  const { propLabel, mandatory, children, propName } = props;
  const fillDynamicField = useFillDynamicField();

  return (
    <View style={styles.wrapper}>
    {/*// <KeyboardAvoidingView*/}
    {/*//   behavior={Platform.OS === CONSTANTS.OS.ios ? "padding" : "height"}*/}
    {/*//   style={styles.wrapper}*/}
    {/*// >*/}
      <Text style={styles.title}>
        {fillDynamicField(propLabel)}
        {mandatory === "true" && <RequiredField />}
      </Text>
        {children}
      {/*// </KeyboardAvoidingView>*/}
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

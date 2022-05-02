import React from "react";
import { Text, TextInput, View } from "react-native";
import PersonIconSvg from "../assets/icons/familyInfoIcons/person.svg";
import { RequiredField } from "../components/utils/RequiredField";
import { styles } from "./NameFieldStyles";

export const LastName = (props) => {
  const { uiControl, mandatory, propLabel } = props;
  return (
    <View style={styles.nameWrapper}>
      <Text style={styles.titleInfo}>
        {propLabel}
        {mandatory && <RequiredField />}
      </Text>
      <PersonIconSvg style={styles.inputIcon} />
      {uiControl === "statictext" ? (
        <Text style={[styles.textInput, styles.statictext]}>Doe</Text>
      ) : (
        <TextInput style={styles.textInput}>John</TextInput>
      )}
    </View>
  );
};

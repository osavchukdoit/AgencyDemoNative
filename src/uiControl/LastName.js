import React from "react";
import { Text, TextInput, View } from "react-native";
import PersonIconSvg from "../assets/icons/familyInfoIcons/person.svg";
import { RequiredField } from "../components/utils/RequiredField";
import { styles } from "./NameFieldStyles";

export const LastName = (props) => {
  const { uiControl, mandatory, propLabel, editable } = props;
  return (
    <View style={styles.nameWrapper}>
      <Text style={styles.titleInfo}>
        {propLabel}
        {mandatory === "true" && <RequiredField />}
      </Text>
      <PersonIconSvg style={styles.inputIcon} />
      <TextInput
        editable={uiControl !== "statictext" || editable === "true"}
        style={styles.textInput}
      >
        Moren
      </TextInput>
    </View>
  );
};

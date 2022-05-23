import React from "react";
import { uiControlsFields } from "../../api/uiControlsFields";
import { ControlWrapper } from "../../uiControl";
import { useSavePostModel } from "../../api/useSavePostModel";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const BlockDesc = (props) => {
  const {
    personType = "employee",
    datamodelSavePOSTURL = "",
    submitLabel = "Submit",
  } = props;
  const propFields = props.props.PropDesc;

  const fieldsRender = propFields.map((field) => {
    const { propName } = field;
    const resultField = uiControlsFields(field, personType);
    return (
      <ControlWrapper personType={personType} {...field} key={propName}>
        {resultField}
      </ControlWrapper>
    );
  });

  const savePostModel = useSavePostModel(
    datamodelSavePOSTURL,
    propFields,
    personType
  );

  const onSave = () => {
    savePostModel();
  };

  return (
    <>
      <BasicSectorWrapper>
        <View style={styles.fieldsContainer}>{fieldsRender}</View>
      </BasicSectorWrapper>
      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text style={styles.saveButtonText}>{submitLabel}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fieldsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  saveButtonWrapper: {
    alignItems: "center",
  },
  saveButton: {
    minWidth: 160,
    paddingHorizontal: 10,
    height: 49,
    borderRadius: 10,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
  },
  saveButtonText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },
});

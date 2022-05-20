import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./stylesMainPersonalInfo";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { useSelector } from "react-redux";
import { DateControl } from "../../uiControl/DateControl";
import { Ssn } from "../../uiControl/Ssn";
import { Picklist } from "../../uiControl/Picklist";
import { Email } from "../../uiControl/Email";
import { UsPhone } from "../../uiControl/UsPhone";
import { UsAddress } from "../../uiControl/UsAddress";
import { StaticText } from "../../uiControl/StaticText";
import { RadioButton } from "../../uiControl/RadioButton";
import { useSavePostModel } from "../../api/useSavePostModel";
import { showMessage } from "react-native-flash-message";
import { CONSTANTS } from "../../constants";
import { uiControlsFields } from "../../api/uiControlsFields";
import { ControlWrapper } from "../../uiControl/ControlWrapper";

export const MainPersonalInfo = () => {
  const employerBlocks = useSelector(
    (state) => state.pageDesc.pageDesc.blocks.BlockDesc
  );
  const profileBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Profile"
  );
  const personType = `employee`;
  const profileFields = profileBlockDesc.props.PropDesc;
  const savePostModel = useSavePostModel(
    profileBlockDesc.datamodelSavePOSTURL,
    profileFields,
    personType
  );

  // const fieldsRender = profileFields.map((field) => {
  //   const { propName, displayable } = field;
  //   if (displayable === "false") return null;
  //   if (
  //     propName === "firstName" ||
  //     propName === "middleName" ||
  //     propName === "lastName"
  //   )
  //     return <StaticText key={propName} {...field} />;
  //   if (propName === "dob") return <DateControl key={propName} {...field} />;
  //   if (propName === "gender") return <RadioButton key={propName} {...field} />;
  //   if (propName === "SSN") return <Ssn key={propName} {...field} />;
  //   if (propName === "countryOfCitizenship")
  //     return <Picklist key={propName} {...field} />;
  //   if (propName === "birthState")
  //     return <Picklist key={propName} {...field} />;
  //   if (propName === "email") return <Email key={propName} {...field} />;
  //   if (propName === "mobilePhone")
  //     return <UsPhone key={propName} {...field} />;
  //   if (propName === "homeAddress")
  //     return <UsAddress key={propName} {...field} />;
  //
  //   return <Text key={propName}>{propName}</Text>;
  // });

  // hidden until the appropriate controls are received
  const fieldsRender = profileFields.map((field) => {
    const { propName } = field;

    const resultField = uiControlsFields(field, personType);
    return (
      <ControlWrapper personType={personType} {...field} key={propName}>
        {resultField}
      </ControlWrapper>
    );
  });

  const onSave = () => {
    savePostModel();
  };

  return (
    <>
      <BasicSectorWrapper>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {fieldsRender}
        </View>

        {/*<Text style={styles.questionText}>*/}
        {/*  Have you used any tobacco products (such as cigarettes, cigars, sniff,*/}
        {/*  dip, chew or pipe) or any nicotine delivery system in the past 12*/}
        {/*  months?**/}
        {/*</Text>*/}
        {/*<RadioButtonsYesNo />*/}
      </BasicSectorWrapper>

      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            onSave();
          }}
        >
          <Text style={styles.saveButtonText}>
            {profileBlockDesc.submitLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

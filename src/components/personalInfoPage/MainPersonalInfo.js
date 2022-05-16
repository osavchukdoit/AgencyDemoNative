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
import { savePostModel } from "../../api/savePostModel";
import { showMessage } from "react-native-flash-message";
import { CONSTANTS } from "../../constants";
import { uiControlsFields } from "../../api/uiControlsFields";
import { ControlWrapper } from "../../uiControl/ControlWrapper";

export const MainPersonalInfo = () => {
  const employerBlocks = useSelector(
    (state) => state.pageDesc.pageDesc.blocks.BlockDesc
  );
  const { jwt } = useSelector((state) => state.utils);
  const { domain } = useSelector((state) => state);
  const profileBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Profile"
  );
  const profileFields = profileBlockDesc.props.PropDesc;

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
    const { propName, displayable, uiControl } = field;
    const personType = `employee`;

    const resultField = uiControlsFields(field, personType);
    return (
      <ControlWrapper personType={personType} {...field} key={propName}>
        {resultField}
      </ControlWrapper>
    );
  });

  const onSubmitProfile = () => {
    console.info("Submit Profile!");
    showMessage({
      message: "Submitting",
      type: "info",
      duration: CONSTANTS.FLASH_MESSAGE_DURATION,
    });
    savePostModel(
      515057,
      { id: 515057, email: "qweasd@gmail.com" },
      // { blockIdentifier: 515057, email: "qweasd@gmail.com" },
      jwt,
      "https://www.aezbenefitsdev2.com/hitf/gateway/services/dataservice/save/employer/Employee?media=json"
    ).then((response) => {
      console.log("response=", response);
      const { ResponseMessage } = response;
      if (ResponseMessage) {
        const errors =
          ResponseMessage.Exception.validationMessages.validationMsg.objectMsg
            .recordMsg.propertyMsg;
        console.log("errors=", errors);
        const errorMessages = errors.map(({ msg }) => msg);
        const errorString = errorMessages.join(". ");
        showMessage({
          message: "Failed to save",
          description: errorString,
          type: "danger",
          duration: CONSTANTS.FLASH_MESSAGE_DURATION,
        });
      } else {
        showMessage({
          message: "Saved!",
          type: "success",
          duration: CONSTANTS.FLASH_MESSAGE_DURATION,
        });
      }
    });
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
            onSubmitProfile();
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

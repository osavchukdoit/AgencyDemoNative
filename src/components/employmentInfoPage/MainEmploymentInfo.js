import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../personalInfoPage/stylesMainPersonalInfo";
import PersonWithTieSvg from "../../assets/icons/employmentInfoIcons/personWithTie.svg";
import BagIconSvg from "../../assets/icons/familyInfoIcons/bag.svg";
import CalendarSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import CalendarWhiteSvg from "../../assets/icons/employmentInfoIcons/calendarWhiteIcon.svg";
import TimerSvg from "../../assets/icons/employmentInfoIcons/timerIcon.svg";
import ClockSvg from "../../assets/icons/employmentInfoIcons/clockIcon.svg";
import { THEME } from "../../styles/theme";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { useSelector } from "react-redux";
import { StaticText } from "../../uiControl/StaticText";
import { Amount } from "../../uiControl/Amount";
import { DateControl } from "../../uiControl/DateControl";
import { showMessage } from "react-native-flash-message";
import { CONSTANTS } from "../../constants";
import { savePostModel } from "../../api/savePostModel";

export const MainEmploymentInfo = () => {
  const employerBlocks = useSelector(
    (state) => state.pageDesc.pageDesc.blocks.BlockDesc
  );
  const { jwt } = useSelector((state) => state.utils);
  const employmentBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Employment"
  );
  const employmentFields = employmentBlockDesc.props.PropDesc;

  const fieldsRender = employmentFields.map((field) => {
    const { propName, displayable, uiControl } = field;
    if (displayable === "false") return null;
    if (uiControl === "statictext")
      return <StaticText key={propName} {...field} />;
    if (uiControl === "amount") return <Amount key={propName} {...field} />;
    if (uiControl === "date") return <DateControl key={propName} {...field} />;
  });

  const onSave = () => {
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
      // console.log("response=", response.id, "email=", response.email);
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

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Employee ID/Code</Text>*/}
        {/*  <PersonWithTieSvg style={styles.inputIcon} />*/}
        {/*  <TextInput style={styles.textInput}>1235</TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Job Title</Text>*/}
        {/*  <BagIconSvg style={styles.inputIcon} />*/}
        {/*  <TextInput*/}
        {/*    style={[*/}
        {/*      styles.textInputBorderFocus,*/}
        {/*      styles.textInputBorderBlur,*/}
        {/*      styles.textInputMediumSize,*/}
        {/*    ]}*/}
        {/*  >*/}
        {/*    Professor*/}
        {/*  </TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Date of Hire</Text>*/}
        {/*  <CalendarSvg style={styles.inputIcon} />*/}
        {/*  <TouchableOpacity style={localStyles.calendarButton}>*/}
        {/*    <CalendarWhiteSvg />*/}
        {/*  </TouchableOpacity>*/}
        {/*  <TextInput*/}
        {/*    style={[*/}
        {/*      styles.textInputBorderFocus,*/}
        {/*      styles.textInputBorderBlur,*/}
        {/*      styles.textInputMediumSize,*/}
        {/*    ]}*/}
        {/*  >*/}
        {/*    01/11/2022*/}
        {/*  </TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Employee Type</Text>*/}
        {/*  <TimerSvg style={styles.inputIcon} />*/}
        {/*  <TextInput style={styles.textInput}>Full Time</TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Employee Type Effective Date</Text>*/}
        {/*  <CalendarSvg style={styles.inputIcon} />*/}
        {/*  <TextInput style={styles.textInput}>01/11/2022</TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Hours worked per Week</Text>*/}
        {/*  <ClockSvg style={styles.inputIcon} />*/}
        {/*  <TextInput style={styles.textInput}>40</TextInput>*/}
        {/*</View>*/}
      </BasicSectorWrapper>

      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text style={styles.saveButtonText}>
            {employmentBlockDesc.submitLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  calendarButton: {
    width: 38,
    height: 38,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 10,
    position: "absolute",
    bottom: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
});

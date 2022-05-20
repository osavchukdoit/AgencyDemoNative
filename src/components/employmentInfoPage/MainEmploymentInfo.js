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
import { useSavePostModel } from "../../api/useSavePostModel";
import { uiControlsFields } from "../../api/uiControlsFields";
import { ControlWrapper } from "../../uiControl/ControlWrapper";

export const MainEmploymentInfo = () => {
  const employerBlocks = useSelector(
    (state) => state.pageDesc.pageDesc.blocks.BlockDesc
  );
  const employmentBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Employment"
  );
  const employmentFields = employmentBlockDesc.props.PropDesc;
  const personType = `employee`;

  const fieldsRender = employmentFields.map((field) => {
    const { propName } = field;

    const resultField = uiControlsFields(field, personType);
    return (
      <ControlWrapper personType={personType} {...field} key={propName}>
        {resultField}
      </ControlWrapper>
    );
  });
  const savePostModel = useSavePostModel(
    employmentBlockDesc.datamodelSavePOSTURL,
    employmentFields,
    personType
  );

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

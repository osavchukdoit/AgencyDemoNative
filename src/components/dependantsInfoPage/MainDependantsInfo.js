import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme.js";
import styles from "../personalInfoPage/stylesMainPersonalInfo.js";
import TrushSvg from "../../assets/icons/dependantsInfoIcons/trush.svg";
import { FONTS } from "../../styles/fonts";
import { LinearGradient } from "expo-linear-gradient";
import PersonSvg from "../../assets/icons/familyInfoIcons/person.svg";
import CalendarWhiteSvg from "../../assets/icons/employmentInfoIcons/calendarWhiteIcon.svg";
import CalendarSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import ShieldSvg from "../../assets/icons/personInfoIcons/shield.svg";
import { DependantsRadioButtons } from "../utils/DependantsRadioButtons.js";
import { RadioButtonsYesNo } from "../utils/RadioButtonsYesNo.js";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper.js";
import { useSelector } from "react-redux";
import { StaticText } from "../../uiControl/StaticText";
import { RadioButton } from "../../uiControl/RadioButton";
import { DateControl } from "../../uiControl/DateControl";
import { Ssn } from "../../uiControl/Ssn";
import { Picklist } from "../../uiControl/Picklist";
import { UsAddress } from "../../uiControl/UsAddress";
import { ControlCheckbox } from "../../uiControl/ControlCheckbox";
import { uiControlsFields } from "../../api/uiControlsFields";
import { ControlWrapper } from "../../uiControl/ControlWrapper";
// import { Gender } from "../../uiControl/Gender.js";

export const MainDependantsInfo = () => {
  const { pageDesc } = useSelector((state) => state);
  const pageDescriptor = pageDesc.pageDesc;
  const dependentsBlockDesc = pageDescriptor.blockLists.BlockListDesc;
  const blockDescriptor = dependentsBlockDesc.block.BlockDesc;
  const { submitLabel } = blockDescriptor;
  const dependentFields = blockDescriptor.props.PropDesc;

  const fieldsRender = dependentFields.map((field) => {
    const { propName, displayable, uiControl } = field;
    const personType = `employee.dependents[0]`;

    const resultField = uiControlsFields(field, personType);
    return (
      <ControlWrapper personType={personType} {...field} key={propName}>
        {resultField}
      </ControlWrapper>
    );
  });

  const onSubmitDependent = () => {
    console.info("Save Dependent");
  };

  return (
    <>
      <BasicSectorWrapper>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <TouchableOpacity style={localStyles.deleteButton}>
            <TrushSvg />
            <Text style={localStyles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          {fieldsRender}
        </View>

        {/*<View>*/}
        {/*  <Text style={localStyles.topTitleText}>*/}
        {/*    Dependents who need to be covered for benefits*/}
        {/*  </Text>*/}
        {/*  <Text style={localStyles.topSubTitleText}>*/}
        {/*    (not needed if you are waiving benefits)*/}
        {/*  </Text>*/}
        {/*</View>*/}

        {/*<DependantsRadioButtons options={dependantsOptions} />*/}

        {/*<View style={localStyles.gradientWrapper}>*/}
        {/*  <LinearGradient*/}
        {/*    colors={[*/}
        {/*      "rgba(26, 60, 90, 0)",*/}
        {/*      "rgba(26, 60, 90, 0.5)",*/}
        {/*      "rgba(26, 60, 90, 0)",*/}
        {/*    ]}*/}
        {/*    style={localStyles.linearBackground}*/}
        {/*    start={[1, 1]}*/}
        {/*  />*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>First Name</Text>*/}
        {/*  <PersonSvg style={styles.inputIcon} />*/}
        {/*  <TextInput*/}
        {/*    style={[styles.textInputBorderFocus, styles.textInputMediumSize]}*/}
        {/*  >*/}
        {/*    Mary*/}
        {/*  </TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Last Name</Text>*/}
        {/*  <PersonSvg style={styles.inputIcon} />*/}
        {/*  <TextInput*/}
        {/*    style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}*/}
        {/*    placeholder={"Enter last name"}*/}
        {/*  ></TextInput>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>Date of Birth</Text>*/}
        {/*  <CalendarSvg style={styles.inputIcon} />*/}
        {/*  <TouchableOpacity style={localStyles.calendarButton}>*/}
        {/*    <CalendarWhiteSvg />*/}
        {/*  </TouchableOpacity>*/}
        {/*  <TextInput*/}
        {/*    style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}*/}
        {/*    placeholder={"DD/MM/YYYY"}*/}
        {/*  ></TextInput>*/}
        {/*</View>*/}

        {/*/!*<Gender />*!/*/}
        {/*<Text>Gender</Text>*/}

        {/*<View*/}
        {/*  style={[styles.titleAndInputWrapper, localStyles.additionalMargin]}*/}
        {/*>*/}
        {/*  <Text style={styles.titleInfo}>SNN</Text>*/}
        {/*  <ShieldSvg style={styles.inputIcon} />*/}
        {/*  <TextInput*/}
        {/*    style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}*/}
        {/*    placeholder={"XXX-XXX-XXXX"}*/}
        {/*  ></TextInput>*/}
        {/*</View>*/}

        {/*<View>*/}
        {/*  <Text style={styles.questionText}>Is Child 1 Disabled?</Text>*/}
        {/*  <RadioButtonsYesNo />*/}
        {/*  <Text style={styles.questionText}>*/}
        {/*    Is Child 1 a Full-time Student?*/}
        {/*  </Text>*/}
        {/*  <RadioButtonsYesNo />*/}
        {/*</View>*/}
      </BasicSectorWrapper>

      <View style={localStyles.addAndSaveButtonsWrapper}>
        {/*<TouchableOpacity style={[styles.saveButton, localStyles.addButton]}>*/}
        {/*  <Text style={[styles.saveButtonText, localStyles.addButtonText]}>*/}
        {/*    Add Dependant*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
        <TouchableOpacity style={styles.saveButton} onPress={onSubmitDependent}>
          <Text style={styles.saveButtonText}>{submitLabel}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  deleteButton: {
    width: 93,
    height: 32,
    borderRadius: 15,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -30,
    top: -27,
  },

  deleteButtonText: {
    color: THEME.COLOR.WHITE,
    marginLeft: 8,
  },

  topTitleText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  topSubTitleText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 7,
  },

  gradientWrapper: {
    marginBottom: 12,
    height: 1,
  },

  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },

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

  additionalMargin: {
    marginBottom: 25,
  },

  addAndSaveButtonsWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  addButton: {
    borderWidth: 1,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    backgroundColor: THEME.COLOR.WHITE,
    marginBottom: 35,
  },

  addButtonText: {
    color: THEME.COLOR.BLUE_BRIGHT,
  },
});

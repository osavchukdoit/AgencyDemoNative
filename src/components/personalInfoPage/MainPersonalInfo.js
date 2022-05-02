import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import EnvelopeIconSvg from "../../assets/icons/personInfoIcons/envelope.svg";
import ShieldIconSvg from "../../assets/icons/personInfoIcons/shield.svg";
import PhoneIconSvg from "../../assets/icons/personInfoIcons/phone.svg";
import MobileIconSvg from "../../assets/icons/personInfoIcons/mobile.svg";
import GpsMarkIconSvg from "../../assets/icons/personInfoIcons/gpsMark.svg";
import styles from "./stylesMainPersonalInfo";
import { RadioButtonsYesNo } from "../utils/RadioButtonsYesNo";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { useSelector } from "react-redux";
import { FirstName } from "../../uiControl/FirstName";
import { MiddleName } from "../../uiControl/MiddleName";
import { LastName } from "../../uiControl/LastName";
import { DateOfBirth } from "../../uiControl/DateOfBirth";
import { Gender } from "../../uiControl/Gender";

export const MainPersonalInfo = () => {
  const employerBlocks = useSelector(
    (state) => state.pageDesc.pageDesc.blocks.BlockDesc
  );
  const profileBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Profile"
  );
  const profileFields = profileBlockDesc.props.PropDesc;

  console.log("profileBlockDesc=", profileFields);

  const fieldsRender = profileFields.map((field, index) => {
    const { propName, displayable } = field;
    if (!displayable) return;
    if (propName === "firstName")
      return <FirstName key={propName} {...field} />;
    if (propName === "middleName")
      return <MiddleName key={propName} {...field} />;
    if (propName === "lastName") return <LastName key={propName} {...field} />;
    if (propName === "dob") return <DateOfBirth key={propName} {...field} />;
    if (propName === "gender") return <Gender key={propName} {...field} />;
  });

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

        {/*<View style={styles.twoRowElements}>*/}
        {/*  <View style={styles.nameWrapper}>*/}
        {/*    <Text style={styles.titleInfo}>*/}
        {/*      First Name<Text style={styles.notifyStar}>*</Text>*/}
        {/*    </Text>*/}
        {/*    <PersonIconSvg style={styles.inputIcon} />*/}
        {/*    <TextInput style={styles.textInput}>John</TextInput>*/}
        {/*  </View>*/}
        {/*  <View style={styles.nameWrapper}>*/}
        {/*    <Text style={styles.titleInfo}>*/}
        {/*      Last Name<Text style={styles.notifyStar}>*</Text>*/}
        {/*    </Text>*/}
        {/*    <PersonIconSvg style={styles.inputIcon} />*/}
        {/*    <TextInput style={styles.textInput}>Doe</TextInput>*/}
        {/*  </View>*/}
        {/*</View>*/}

        {/*<View style={styles.titleAndInputWrapper}>*/}
        {/*  <Text style={styles.titleInfo}>*/}
        {/*    Date of Birth<Text style={styles.notifyStar}>*</Text>*/}
        {/*  </Text>*/}
        {/*  <CalendarIconSvg style={styles.inputIcon} />*/}
        {/*  <TextInput style={styles.textInput}>09/09/1990</TextInput>*/}
        {/*</View>*/}

        {/*<GenderButtons />*/}

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Email</Text>
          <EnvelopeIconSvg style={styles.inputIcon} />
          <TextInput
            style={styles.textInputBorderFocus}
            placeholder={"Enter your email address"}
          />
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>SSN</Text>
          <ShieldIconSvg style={styles.inputIcon} />
          <TextInput style={styles.textInput}>XXX-XXX-XXXX</TextInput>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Work Phone</Text>
          <PhoneIconSvg style={styles.inputIcon} />
          <TextInput
            style={styles.textInputBorderFocus}
            placeholder={"Enter your phone number"}
          />
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Mobile Phone</Text>
          <MobileIconSvg style={styles.inputIcon} />
          <TextInput
            style={styles.textInputBorderFocus}
            placeholder={"Enter your mobile number"}
          />
        </View>

        <View
          style={[styles.titleAndInputWrapper, styles.additionalMarginBiger]}
        >
          <Text style={[styles.titleInfo, styles.additionalMarginLess]}>
            Address<Text style={styles.notifyStar}>*</Text>
          </Text>
          <Text style={styles.subText}>
            Must be selected from the google list that will populate once you
            enter your complete address including city, state and zip code. If
            you have an apartment number, please enter it with a comma before
            the city (for example: Apt 310, Any City)
          </Text>
          <GpsMarkIconSvg style={styles.inputIcon} />
          <TextInput
            style={[
              styles.textInputBorderFocus,
              styles.textInputBorderBlur,
              styles.textInputLessSize,
            ]}
          >
            12-3 Bayard, LL2394 St Staten Island
          </TextInput>
        </View>

        <Text style={styles.questionText}>
          Have you used any tobacco products (such as cigarettes, cigars, sniff,
          dip, chew or pipe) or any nicotine delivery system in the past 12
          months?*
        </Text>

        <RadioButtonsYesNo />
      </BasicSectorWrapper>

      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

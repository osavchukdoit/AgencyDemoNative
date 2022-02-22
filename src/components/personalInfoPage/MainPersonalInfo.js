import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import EnvelopeIconSvg from "../../assets/icons/personInfoIcons/envelope.svg";
import ShieldIconSvg from "../../assets/icons/personInfoIcons/shield.svg";
import PhoneIconSvg from "../../assets/icons/personInfoIcons/phone.svg";
import MobileIconSvg from "../../assets/icons/personInfoIcons/mobile.svg";
import GpsMarkIconSvg from "../../assets/icons/personInfoIcons/gpsMark.svg";

export const MainPersonalInfo = () => {
  const [isSmoke, setIsSmoke] = useState(true);

  const onHandleSmoke = () => setIsSmoke(true);

  const onHandleNoSmoke = () => setIsSmoke(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.infoWrapper}>
        <View style={styles.twoRowElements}>
          <View style={styles.nameWrapper}>
            <Text style={styles.titleInfo}>First Name</Text>
            <PersonIconSvg style={styles.inputIcon} />
            <TextInput style={styles.textInput}>John</TextInput>
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.titleInfo}>Last Name</Text>
            <PersonIconSvg style={styles.inputIcon} />
            <TextInput style={styles.textInput}>Doe</TextInput>
          </View>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Date of Birth*</Text>
          <CalendarIconSvg style={styles.inputIcon} />
          <TextInput style={styles.textInput}>09/09/1990</TextInput>
        </View>

        <View style={styles.genderTitleAndButtonsWrapper}>
          <Text style={styles.titleInfo}>Gender</Text>
          <View style={styles.genderButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                { backgroundColor: THEME.COLOR.BLUE_BRIGHT },
              ]}
            >
              <Text style={styles.checkedGenderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.genderButton}>
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Email</Text>
          <EnvelopeIconSvg style={styles.inputIcon} />
          <TextInput
            style={styles.textInputBorderFocus}
            placeholder={"Enter your email address"}
          ></TextInput>
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
          ></TextInput>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Mobile Phone</Text>
          <MobileIconSvg style={styles.inputIcon} />
          <TextInput
            style={styles.textInputBorderFocus}
            placeholder={"Enter your mobile number"}
          ></TextInput>
        </View>

        <View style={[styles.titleAndInputWrapper, { marginBottom: 27 }]}>
          <Text style={[styles.titleInfo, { marginBottom: 2 }]}>Address*</Text>
          <Text style={styles.subText}>
            Must be selected from the google list that will populate once you
            enter your complete address including city, state and zip code. If
            you have an apartment number, please enter it with a comma before
            the city (for example: Apt 310, Any City)
          </Text>
          <GpsMarkIconSvg style={styles.inputIcon} />
          <TextInput
            style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}
          >
            12-3 Bayard, LL2394 St Staten Island
          </TextInput>
        </View>

        <View>
          <Text style={styles.questionText}>
            Have you used any tobacco products (such as cigarettes, cigars,
            sniff, dip, chew or pipe) or any nicotine delivery system in the
            past 12 months?*
          </Text>

          <View style={styles.radioButonsWrapper}>
            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={onHandleSmoke}
            >
              <View
                style={
                  isSmoke ? { ...styles.radioCheckPoint } : { display: "none" }
                }
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Yes</Text>

            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={onHandleNoSmoke}
            >
              <View
                style={
                  isSmoke ? { display: "none" } : { ...styles.radioCheckPoint }
                }
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>No</Text>
          </View>
        </View>
      </View>
      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  infoWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 30,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 23,
    marginBottom: 23,
  },

  twoRowElements: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  nameWrapper: {
    width: "48%",
    position: "relative",
  },

  titleInfo: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
  },

  subText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 10,
    lineHeight: 14,
    color: THEME.COLOR.GREY_LIGHT_TEXT_V2,
    marginBottom: 11,
  },

  inputIcon: {
    position: "absolute",
    bottom: 16,
    left: 20,
    zIndex: 9,
  },

  textInput: {
    height: 49,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
  },

  textInputBorderFocus: {
    height: 49,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
    borderWidth: 1,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    borderStyle: "solid",
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
  },

  textInputBorderBlur: {
    borderColor: THEME.COLOR.LIGHT_BORDER,
  },

  titleAndInputWrapper: {
    position: "relative",
    marginBottom: 16,
  },

  genderTitleAndButtonsWrapper: {
    marginBottom: 16,
  },

  genderButtonsContainer: {
    flexDirection: "row",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.06,
    borderWidth: 1,
    borderColor: THEME.COLOR.LIGHT_BORDER,
    borderStyle: "solid",
    borderRadius: 10,
  },

  genderButton: {
    width: "50%",
    height: 49,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  genderText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  checkedGenderText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },

  questionText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 20,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 20,
  },

  radioButonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioButtonContainer: {
    width: 16,
    height: 16,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    borderWidth: 1,
    borderRadius: 53,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  radioCheckPoint: {
    width: 8,
    height: 8,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 53,
  },

  radioButtonLabel: {
    marginRight: 35,
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
  },

  saveButton: {
    width: 160,
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

  saveButtonWrapper: {
    alignItems: "center",
  },
});

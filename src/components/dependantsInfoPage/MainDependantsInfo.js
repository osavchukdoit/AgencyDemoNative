import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { THEME } from "../../styles/theme.js";
import styles from "../personalInfoPage/stylesMainPersonalInfo.js";
import TrushSvg from "../../assets/icons/dependantsInfoIcons/trush.svg";
import { FONTS } from "../../styles/fonts";
import { LinearGradient } from "expo-linear-gradient";
import PersonSvg from "../../assets/icons/familyInfoIcons/person.svg";
import CalendarWhiteSvg from "../../assets/icons/employmentInfoIcons/calendarWhiteIcon.svg";
import CalendarSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import { GendersContainer } from "../personalInfoPage/GendersContainer";
import ShieldSvg from "../../assets/icons/personInfoIcons/shield.svg";
import { useRadioButton } from "../personalInfoPage/customHooks/useRadioButton";
import { shadowStyles } from "../../styles/shadowStyles.js";

export const MainDependantsInfo = () => {
  const [isChild, setIsChild] = useRadioButton(null);
  return (
    <View>
      <View style={[styles.infoWrapper, shadowStyles.boxShadow]}>
        <View>
          <TouchableOpacity style={localStyles.deleteButton}>
            <TrushSvg />
            <Text style={localStyles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          <Text style={localStyles.topTitleText}>
            Dependents who need to be covered for benefits
          </Text>
          <Text style={localStyles.topSubTitleText}>
            (not needed if you are waiving benefits)
          </Text>
        </View>

        <View style={localStyles.radioButtonsContainer}>
          <View style={localStyles.radioButtonAndLabelWrapper}>
            <TouchableOpacity style={styles.radioButtonContainer}>
              <View style={styles.radioCheckPoint}></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Spouse</Text>
          </View>
          <View style={localStyles.radioButtonAndLabelWrapper}>
            <TouchableOpacity style={styles.radioButtonContainer}>
              <View
                style={[styles.radioCheckPoint, { display: "none" }]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Child</Text>
          </View>
          <View style={localStyles.radioButtonAndLabelWrapper}>
            <TouchableOpacity style={styles.radioButtonContainer}>
              <View
                style={[styles.radioCheckPoint, { display: "none" }]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Domestic Partner</Text>
          </View>
          <View style={localStyles.radioButtonAndLabelWrapper}>
            <TouchableOpacity style={styles.radioButtonContainer}>
              <View
                style={[styles.radioCheckPoint, { display: "none" }]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Grandchild</Text>
          </View>
        </View>

        <View style={localStyles.gradientWrapper}>
          <LinearGradient
            colors={[
              "rgba(26, 60, 90, 0)",
              "rgba(26, 60, 90, 0.5)",
              "rgba(26, 60, 90, 0)",
            ]}
            style={localStyles.linearBackground}
            start={[1, 1]}
          />
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>First Name</Text>
          <PersonSvg style={styles.inputIcon} />
          <TextInput
            style={[styles.textInputBorderFocus, styles.textInputMediumSize]}
          >
            Mary
          </TextInput>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Last Name</Text>
          <PersonSvg style={styles.inputIcon} />
          <TextInput
            style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}
            placeholder={"Enter last name"}
          ></TextInput>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>Date of Birth</Text>
          <CalendarSvg style={styles.inputIcon} />
          <TouchableOpacity style={localStyles.calendarButton}>
            <CalendarWhiteSvg />
          </TouchableOpacity>
          <TextInput
            style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}
            placeholder={"DD/MM/YYYY"}
          ></TextInput>
        </View>

        <GendersContainer />

        <View
          style={[styles.titleAndInputWrapper, localStyles.additionalMargin]}
        >
          <Text style={styles.titleInfo}>SNN</Text>
          <ShieldSvg style={styles.inputIcon} />
          <TextInput
            style={[styles.textInputBorderFocus, styles.textInputBorderBlur]}
            placeholder={"XXX-XXX-XXXX"}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.questionText}>Is Child 1 Disabled?</Text>

          <View
            style={[styles.radioButonsWrapper, localStyles.additionalMargin]}
          >
            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setIsChild(true)}
            >
              <View
                style={[
                  { display: "none" },
                  isChild === true && styles.radioCheckPoint,
                ]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Yes</Text>

            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setIsChild(false)}
            >
              <View
                style={[
                  { display: "none" },
                  isChild === false && styles.radioCheckPoint,
                ]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>No</Text>
          </View>

          <Text style={styles.questionText}>
            Is Child 1 a Full-time Student?
          </Text>

          <View style={styles.radioButonsWrapper}>
            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setIsChild(true)}
            >
              <View
                style={[
                  { display: "none" },
                  isChild === true && styles.radioCheckPoint,
                ]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Yes</Text>

            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setIsChild(false)}
            >
              <View
                style={[
                  { display: "none" },
                  isChild === false && styles.radioCheckPoint,
                ]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>No</Text>
          </View>
        </View>
      </View>
      <View style={localStyles.addAndSaveButtonsWrapper}>
        <TouchableOpacity style={[styles.saveButton, localStyles.addButton]}>
          <Text style={[styles.saveButtonText, localStyles.addButtonText]}>
            Add Dependant
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  buttonAndTextWrapper: {
    position: "relative",
    marginBottom: 7,
  },

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
    top: -37,
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

  radioButtonsContainer: {
    marginBottom: 3,
  },

  radioButtonAndLabelWrapper: {
    flexDirection: "row",
    marginBottom: 12,
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

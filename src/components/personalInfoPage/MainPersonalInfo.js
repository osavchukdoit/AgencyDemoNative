import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import EnvelopeIconSvg from "../../assets/icons/personInfoIcons/envelope.svg";
import ShieldIconSvg from "../../assets/icons/personInfoIcons/shield.svg";
import PhoneIconSvg from "../../assets/icons/personInfoIcons/phone.svg";
import MobileIconSvg from "../../assets/icons/personInfoIcons/mobile.svg";
import GpsMarkIconSvg from "../../assets/icons/personInfoIcons/gpsMark.svg";
import { useRadioButton } from "./customHooks/useRadioButton";
import styles from "./stylesMainPersonalInfo";

export const MainPersonalInfo = () => {
  const [isSmoke, setIsSmoke] = useRadioButton(null);

  return (
    <View style={styles.wrapper}>
      <View style={styles.infoWrapper}>
        <View style={styles.twoRowElements}>
          <View style={styles.nameWrapper}>
            <Text style={styles.titleInfo}>
              First Name<Text style={styles.notifyStar}>*</Text>
            </Text>
            <PersonIconSvg style={styles.inputIcon} />
            <TextInput style={styles.textInput}>John</TextInput>
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.titleInfo}>
              Last Name<Text style={styles.notifyStar}>*</Text>
            </Text>
            <PersonIconSvg style={styles.inputIcon} />
            <TextInput style={styles.textInput}>Doe</TextInput>
          </View>
        </View>

        <View style={styles.titleAndInputWrapper}>
          <Text style={styles.titleInfo}>
            Date of Birth<Text style={styles.notifyStar}>*</Text>
          </Text>
          <CalendarIconSvg style={styles.inputIcon} />
          <TextInput style={styles.textInput}>09/09/1990</TextInput>
        </View>

        <View style={styles.genderTitleAndButtonsWrapper}>
          <Text style={styles.titleInfo}>Gender</Text>
          <View style={styles.genderButtonsContainer}>
            <TouchableOpacity
              style={[styles.genderButton, styles.additionalButtonColor]}
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

        <View>
          <Text style={styles.questionText}>
            Have you used any tobacco products (such as cigarettes, cigars,
            sniff, dip, chew or pipe) or any nicotine delivery system in the
            past 12 months?*
          </Text>

          <View style={styles.radioButonsWrapper}>
            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setIsSmoke(true)}
            >
              <View
                style={[
                  { display: "none" },
                  isSmoke === true && styles.radioCheckPoint,
                ]}
              ></View>
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>Yes</Text>

            <TouchableOpacity
              style={styles.radioButtonContainer}
              onPress={() => setIsSmoke(false)}
            >
              <View
                style={[
                  { display: "none" },
                  isSmoke === false && styles.radioCheckPoint,
                ]}
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

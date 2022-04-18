import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const GenderButtons = () => {
  const [isMale, setMale] = useState(true);

  const handleChangeMale = () => setMale(true);

  const handleFemale = () => setMale(false);

  return (
    <View style={styles.genderTitleAndButtonsWrapper}>
      <Text style={styles.titleInfo}>Gender</Text>
      <View style={styles.genderButtonsContainer}>
        <TouchableOpacity
          onPress={handleChangeMale}
          style={[styles.genderButton, isMale && styles.additionalButtonColor]}
        >
          <Text style={[styles.genderText, isMale && styles.checkedGenderText]}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFemale}
          style={[styles.genderButton, !isMale && styles.additionalButtonColor]}
        >
          <Text
            style={[styles.genderText, !isMale && styles.checkedGenderText]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genderTitleAndButtonsWrapper: {
    marginBottom: 16,
  },

  titleInfo: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
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

  additionalButtonColor: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },

  checkedGenderText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },

  genderText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },
});

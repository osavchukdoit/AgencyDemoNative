import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { THEME } from "../../styles/theme";
import { Dropdown } from "./Dropdown";

export const AddContactForm = ({ onCancel }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <ScrollView>
        <Text style={styles.formTitle}>Add New Contact</Text>
        <Text style={styles.inputTitle}>Select Type</Text>
        <Dropdown />

        <Text style={styles.inputTitle}>Doctor Name</Text>
        <TextInput
          placeholder="Enter Doctor Name"
          placeholderTextColor={THEME.COLOR.PLACEHOLDER_TEXT}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>Phone Number</Text>
        <TextInput
          placeholder="Enter number"
          placeholderTextColor={THEME.COLOR.PLACEHOLDER_TEXT}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>Location</Text>
        <TextInput
          placeholder="Enter location name"
          placeholderTextColor={THEME.COLOR.PLACEHOLDER_TEXT}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>Address</Text>
        <TextInput
          placeholder="Enter address"
          placeholderTextColor={THEME.COLOR.PLACEHOLDER_TEXT}
          style={styles.textInput}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onCancel} style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.additionalButtonColor]}
          >
            <Text style={[styles.buttonText, styles.checkedText]}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "86%",
    backgroundColor: THEME.COLOR.WHITE,
    paddingHorizontal: 16,
    paddingTop: 21,
    borderRadius: 20,
  },

  formTitle: {
    alignSelf: "center",
    marginBottom: 29,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  inputTitle: {
    marginBottom: 9,
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  textInput: {
    borderWidth: 1,
    borderColor: THEME.COLOR.GREY_LIGHT_BORDER,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 19,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: THEME.COLOR.GREY_LIGHT_SHADOW,
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 20,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  buttonsContainer: {
    flexDirection: "row",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.06,
    borderStyle: "solid",
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 21,
  },

  button: {
    borderWidth: 1,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    width: "48%",
    height: 49,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  additionalButtonColor: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },

  checkedText: {
    color: THEME.COLOR.WHITE,
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.BLUE_BRIGHT,
  },
});

import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MapButtonSvg from "../../assets/icons/contactDetailsIcons/mapButtonSvg.svg";
import PhoneButtonSvg from "../../assets/icons/contactDetailsIcons/phoneButtonISvg.svg";
import styles from "./InformationMapperStyles";

export const InformationMapper = ({ options, isEditActive }) => {
  return options.map(({ id, title, value }, index) => {
    return (
      <View
        key={id}
        style={[
          styles.wrapper,
          index % 2 !== 0 && styles.additionalBgColor,
          index === 0 && styles.additionalTopRadius,
          index === options.length - 1 && styles.additionalBottomRadius,
        ]}
      >
        <Text style={[styles.text, styles.additionalTextWrappertWidth]}>
          {title}
        </Text>
        <View
          style={[styles.textAndButtonWrapper, styles.additionalInputWidth]}
        >
          <TextInput
            multiline={true}
            editable={isEditActive}
            style={[
              styles.text,
              styles.textDark,
              styles.additionalTextWidth,
              styles.inputContainer,
              isEditActive && {
                ...styles.borderActive,
                ...styles.additionalWidthFull,
              },
              id !== "phoneNumber" &&
                id !== "address" && { ...styles.additionalWidthFull },
            ]}
          >
            {value === "" ? "N/A" : value}
          </TextInput>

          {id === "phoneNumber" && !isEditActive && value !== "" && (
            <TouchableOpacity style={styles.buttonWithIcon}>
              <PhoneButtonSvg />
            </TouchableOpacity>
          )}
          {id === "address" && !isEditActive && value !== "" && (
            <TouchableOpacity style={styles.buttonWithIcon}>
              <MapButtonSvg />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  });
};

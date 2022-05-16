import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { useSelector } from "react-redux";
import { getValidValues } from "../api/validValues";
import { useField } from "formik";
import { AppTooltip } from "../components/utils/AppTooltip";

export const RadioButton = (props) => {
  const { editable, propName, personType = "employee" } = props;
  const { jwt } = useSelector((state) => state.utils);
  const [options, setOptions] = useState();
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);

  useEffect(() => {
    getValidValues(jwt, propName).then((validValues) => {
      setOptions(validValues);
    });
  }, [propName]);

  const onOptionPressed = (id) => {
    setValue(id);
  };

  const isGenderProp = propName === "gender" || propName === "depGender";

  const genderRadioButton = ({ display, id }) => {
    const isChecked = fieldValue === id;
    return (
      <TouchableOpacity
        disabled={editable === "false"}
        onPress={() => onOptionPressed(id)}
        style={[
          styles.genderRadioButton,
          isChecked && styles.checkedGenderRadioButton,
        ]}
        key={id}
      >
        <Text
          style={[
            styles.genderRadioLabel,
            isChecked && styles.checkedGenderRadioLabel,
          ]}
        >
          {display}
        </Text>
      </TouchableOpacity>
    );
  };

  const radioButton = ({ item }) => {
    const { display, id, tooltip } = item;

    return (
      <View style={styles.radioButtonWrapper}>
        <TouchableOpacity
          style={styles.radioButtonAndLabelWrapper}
          onPress={() => setValue(id)}
        >
          <View style={styles.radioButtonContainer}>
            {fieldValue === id && <View style={styles.radioCheckPoint}></View>}
          </View>
          <Text style={styles.radioButtonLabel}>{display}</Text>
        </TouchableOpacity>
        {tooltip && <AppTooltip tooltipText={tooltip} />}
      </View>
    );
  };

  return (
    <>
      {isGenderProp ? (
        <View style={styles.genderRadioButtonsContainer}>
          {options?.map((radioOption) => genderRadioButton(radioOption))}
        </View>
      ) : (
        <FlatList
          data={options}
          renderItem={radioButton}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  genderRadioButtonsContainer: {
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
  genderRadioButton: {
    width: "50%",
    height: 49,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedGenderRadioButton: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },
  genderRadioLabel: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },
  checkedGenderRadioLabel: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },

  radioButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioButtonAndLabelWrapper: {
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
    display: "flex",
  },
  radioButtonLabel: {
    marginRight: 5,
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 14,
    lineHeight: 16,
  },
});

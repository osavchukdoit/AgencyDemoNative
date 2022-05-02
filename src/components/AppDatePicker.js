import React from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { THEME } from "../styles/theme";

export const AppDatePicker = ({ date, setDate, show, setShow }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const isIos = Platform.OS === "ios";
  const pickerDisplay = isIos ? "inline" : "default";

  if (!show) return null;

  return (
    <>
      <DateTimePicker
        testID="AppDatePicker"
        value={date}
        is24Hour={true}
        onChange={onChange}
        display={pickerDisplay}
      />
      {isIos && (
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            onPress={() => setShow(false)}
            style={styles.hideBtn}
          >
            <Text style={styles.hideBtnText}>Hide</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    alignItems: "center",
  },
  hideBtn: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  hideBtnText: {
    color: THEME.COLOR.WHITE,
    textAlign: "center",
  },
});

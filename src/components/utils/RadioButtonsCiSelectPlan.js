import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { THEME } from "../../styles/theme";
import styles from "./RadioButtonsYesNoStyles";

export const RadioButtonsCiSelectPlan = () => {
  const [isValue, setValue] = useState(null);
  return (
    <View style={[styles.radioButtonsWrapper, styles.additionalMargin]}>
      <TouchableOpacity
        style={styles.radioButtonAndTextWrapper}
        onPress={() => setValue(true)}
      >
        <View
          style={[
            styles.radioButtonContainer,
            localStyles.radioButtonContainer,
          ]}
        >
          <View
            style={[
              { display: "none" },
              isValue && [styles.radioCheckPoint, localStyles.radioCheckPoint],
            ]}
          ></View>
        </View>
        <Text style={styles.radioButtonLabel}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioButtonAndTextWrapper}
        onPress={() => setValue(false)}
      >
        <View
          style={[
            styles.radioButtonContainer,
            localStyles.radioButtonContainer,
          ]}
        >
          <View
            style={[
              { display: "none" },
              isValue === false && [
                styles.radioCheckPoint,
                localStyles.radioCheckPoint,
              ],
            ]}
          ></View>
        </View>
        <Text style={styles.radioButtonLabel}>No</Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  radioButtonContainer: {
    width: 13,
    height: 13,
    borderColor: THEME.COLOR.DARK_BLUE_TEXT,
  },

  radioCheckPoint: {
    width: 7,
    height: 7,
    backgroundColor: THEME.COLOR.DARK_BLUE_TEXT,
  },
});

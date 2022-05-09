import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./RadioButtonsYesNoStyles";

export const RadioButtonsYesNo = () => {
  const [isValue, setValue] = useState(null);
  return (
    <View style={[styles.radioButtonsWrapper, styles.additionalMargin]}>
      <TouchableOpacity
        style={styles.radioButtonAndTextWrapper}
        onPress={() => setValue(true)}
      >
        <View style={styles.radioButtonContainer}>
          <View
            style={[{ display: "none" }, isValue && styles.radioCheckPoint]}
          ></View>
        </View>
        <Text style={styles.radioButtonLabel}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioButtonAndTextWrapper}
        onPress={() => setValue(false)}
      >
        <View style={styles.radioButtonContainer}>
          <View
            style={[
              { display: "none" },
              isValue === false && styles.radioCheckPoint,
            ]}
          ></View>
        </View>
        <Text style={styles.radioButtonLabel}>No</Text>
      </TouchableOpacity>
    </View>
  );
};

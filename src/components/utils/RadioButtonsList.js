import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";

export const RadioButtonsList = ({
  options,
  header,
  additionalMarginTop = false,
}) => {
  const [value, setValue] = useState(null);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.radioButtonAndTextWrapper}
      onPress={() => setValue(item.title)}
    >
      <View style={styles.radioButton}>
        {value === item.title && <View style={styles.point}></View>}
      </View>
      <Text style={styles.costText}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Text
        style={[
          styles.sectorTitle,
          additionalMarginTop && styles.additionalMarginTop,
        ]}
      >
        {header}
      </Text>
      <PseudoElement />

      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.28,
    marginBottom: 9,
    marginTop: 19,
  },

  additionalMarginTop: {
    marginTop: 5,
  },

  radioButtonAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
  },

  radioButton: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  point: {
    height: 7,
    width: 7,
    backgroundColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 6,
  },

  costText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});

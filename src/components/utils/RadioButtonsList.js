import React from "react";
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

export const RadioButtonsList = ({ data, header }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.radioButtonAndTextWrapper}
      onPress={() => console.log(item.title)}
    >
      <View style={styles.radioButton}></View>
      <Text style={styles.costText}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Text style={styles.sectorTitle}>{header}</Text>
      <PseudoElement />

      <FlatList
        data={data}
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
  },

  costText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});

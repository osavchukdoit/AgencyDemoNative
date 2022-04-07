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

export const DependantsRadioButtons = ({ options }) => {
  const [value, setValue] = useState(null);
  const renderItem = ({ item }) => {
    const { title } = item;
    return (
      <TouchableOpacity
        style={styles.radioButtonAndLabelWrapper}
        onPress={() => setValue(title)}
      >
        <View style={styles.radioButtonContainer}>
          {value === title && <View style={styles.radioCheckPoint}></View>}
        </View>
        <Text style={styles.radioButtonLabel}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.radioButtonsContainer}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonsContainer: {
    marginBottom: 3,
  },

  radioButtonAndLabelWrapper: {
    flexDirection: "row",
    marginBottom: 12,
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
    marginRight: 35,
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
  },
});

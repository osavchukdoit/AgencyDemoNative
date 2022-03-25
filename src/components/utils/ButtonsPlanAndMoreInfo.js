import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const ButtonsPlanAndMoreInfo = ({
  handlePressOptions,
  handlePressInfo,
  isPlanOptionActive,
}) => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={handlePressOptions}
        style={[
          styles.button,
          isPlanOptionActive && styles.additionalButtonColor,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            isPlanOptionActive && styles.checkedButtonText,
          ]}
        >
          Plan Options
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePressInfo}
        style={[
          styles.button,
          !isPlanOptionActive && styles.additionalButtonColor,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            !isPlanOptionActive && styles.checkedButtonText,
          ]}
        >
          More Info
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 4,
    backgroundColor: "#1a3c5a0f",
    marginBottom: 12,
  },

  button: {
    width: "50%",
    height: 41,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  additionalButtonColor: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    letterSpacing: -0.28,
  },

  checkedButtonText: {
    color: THEME.COLOR.WHITE,
  },
});

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export const ButtonEnrollment = ({ handleStartEnrollment }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.touchableButton}
          onPress={handleStartEnrollment}
        >
          <Text style={styles.touchableButtonText}>Start Enrollment Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  buttonWrapper: {
    height: 49,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 10,
  },

  touchableButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  touchableButtonText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },
});

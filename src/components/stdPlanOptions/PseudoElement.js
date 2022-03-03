import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const PseudoElement = () => {
  return (
    <View style={styles.gradientWrapper}>
      <LinearGradient
        colors={[
          "rgba(26, 60, 90, 0)",
          "rgba(26, 60, 90, 0.5)",
          "rgba(26, 60, 90, 0)",
        ]}
        style={styles.linearBackground}
        start={[1, 1]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    marginTop: 10,
    marginBottom: 10,
    height: 1,
  },

  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
});

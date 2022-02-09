import React from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={"large"} color={THEME.COLOR.LOADER} />
      <Text style={styles.loaderText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.BACKGROUND.LOADER,
  },
  loaderText: {
    color: THEME.COLOR.LOADER,
  },
});

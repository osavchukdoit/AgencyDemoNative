import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { useSelector } from "react-redux";
import { AppText } from "./AppText";

export const Loader = () => {
  const { text } = useSelector((state) => state.utils.loaderStatus);

  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={"large"} color={THEME.COLOR.LOADER} />
      <AppText color={THEME.COLOR.LOADER}>{text}</AppText>
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
});

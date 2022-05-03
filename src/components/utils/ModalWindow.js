import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { THEME } from "../../styles/theme";

export const ModalWindow = ({ isVisible, children }) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.MODAL_WINDOW,
  },
});

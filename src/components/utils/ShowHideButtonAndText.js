import { View, TouchableOpacity, StyleSheet } from "react-native";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { THEME } from "../../styles/theme";

export const ShowHideButtonAndText = ({
  isVisible,
  handlePress,
  children,
  isMarginTop = false,
}) => {
  return (
    <View
      style={[
        styles.titleAndButtonWrapper,
        isMarginTop && styles.additionalMarginTop,
      ]}
    >
      {children}
      <TouchableOpacity
        style={[styles.buttonShowHide, !isVisible && styles.rotate]}
        onPress={handlePress}
      >
        <ShowHideIconSvg />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleAndButtonWrapper: {
    flexDirection: "row",
    paddingLeft: 4,
    paddingRight: 6,
    justifyContent: "space-between",
    marginBottom: 9,
  },

  additionalMarginTop: {
    marginTop: 9,
  },

  buttonShowHide: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE,
    borderRadius: 4,
  },

  rotate: {
    transform: [{ rotate: "180deg" }],
  },
});

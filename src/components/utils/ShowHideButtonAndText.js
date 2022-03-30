import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const ShowHideButtonAndText = ({ isVisible, handlePress, title }) => {
  return (
    <View
      style={[
        styles.titleAndButtonWrapper,
        !isVisible && styles.zeroMarginBottom,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={[styles.buttonShowHide, isVisible && styles.rotate]}
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
    marginBottom: 7,
    marginTop: 9,
  },

  zeroMarginBottom: {
    marginBottom: 0,
  },

  title: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
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

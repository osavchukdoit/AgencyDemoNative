import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const ShowHideButtonAndText = ({
  isVisible,
  onHandlePress,
  subTitle,
}) => {
  return (
    <View
      style={[
        styles.subTitleAndButtonWrapper,
        !isVisible && styles.zeroMarginBottom,
      ]}
    >
      <Text style={styles.subTitle}>{subTitle}</Text>
      <TouchableOpacity
        style={[styles.buttonShowHide, isVisible && styles.rotate]}
        onPress={onHandlePress}
      >
        <ShowHideIconSvg />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitleAndButtonWrapper: {
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

  subTitle: {
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
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE_BG,
    borderRadius: 4,
  },

  rotate: {
    transform: [{ rotate: "180deg" }],
  },
});

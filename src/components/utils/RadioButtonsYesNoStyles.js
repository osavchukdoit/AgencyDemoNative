import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  radioButonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  additionalMargin: {
    marginBottom: 25,
  },

  radioButtonAndTextWrapper: {
    flexDirection: "row",
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

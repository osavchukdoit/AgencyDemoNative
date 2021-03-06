import { StyleSheet } from "react-native";
import { THEME } from "../styles/theme";

export default StyleSheet.create({
  tabBarWrapper: {
    paddingVertical: 11,
    paddingHorizontal: 7,
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: THEME.BACKGROUND.TAB_NAVIGATION,
    borderRadius: 20,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: 0.1,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 20,
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonTouchable: {
    width: 60,
    alignItems: "center",
    zIndex: 1,
  },
  optionProgress: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: THEME.COLOR.ENROLLMENT_NAVIGATION_TAB_BAR,
    backgroundColor: THEME.BACKGROUND.ENROLLMENT_NAVIGATION_TAB_BAR,
    justifyContent: "center",
    alignItems: "center",
  },
  optionProgressInner: {
    display: "none",
  },
  optionProgressInnerChecked: {
    backgroundColor: THEME.COLOR.ENROLLMENT_NAVIGATION_TAB_BAR_ACTIVE,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionProgressActive: {
    borderColor: THEME.COLOR.ENROLLMENT_NAVIGATION_TAB_BAR_ACTIVE,
  },
  optionProgressChecked: {
    borderColor: THEME.COLOR.ENROLLMENT_NAVIGATION_TAB_BAR_ACTIVE,
    borderWidth: 3,
  },
  progressBar: {
    position: "absolute",
    top: 13,
    height: 5,
    left: 30,
    right: 30,
    backgroundColor: THEME.BACKGROUND.ENROLLMENT_NAVIGATION_TAB_BAR_PROGRESS,
  },
  progressBarActive: {
    right: "auto",
    backgroundColor:
      THEME.BACKGROUND.ENROLLMENT_NAVIGATION_TAB_BAR_PROGRESS_ACTIVE,
  },
  optionLabel: {
    fontSize: 11,
    lineHeight: 15,
    textAlign: "center",
  },
  progressWrapper: {
    marginBottom: 6,
    position: "relative",
  },
  backNextWrapper: {
    paddingHorizontal: 9,
    alignItems: "center",
    display: "flex",
  },
  backNextText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800",
    paddingBottom: 0,
  },
  backNextBtn: {
    backgroundColor: THEME.BACKGROUND.ENROLLMENT_NAVIGATION_BTN,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backNextBtnActive: {
    backgroundColor: THEME.BACKGROUND.ENROLLMENT_NAVIGATION_BTN_ACTIVE,
  },
  backArrow: {
    marginRight: 9,
  },
  nextArrow: {
    marginLeft: 9,
    transform: [{ rotate: "180deg" }],
  },
});

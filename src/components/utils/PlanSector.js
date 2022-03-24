import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const PlanSector = ({
  logo,
  title,
  children,
  onHandleSelected,
  isSelected,
  isRadioButton,
}) => {
  return (
    <View
      style={[
        styles.planSectorWrapper,
        isSelected && isRadioButton && styles.focusPlanSectorBorder,
      ]}
    >
      <View style={styles.iconAndTitleWrapper}>
        <View style={styles.iconWrapper}>{logo}</View>
        <View>
          <Text style={styles.sectorTitle}>{title}</Text>
          {isRadioButton && (
            <View style={styles.selectedButtonAndTextWrapper}>
              <TouchableOpacity
                onPress={onHandleSelected}
                style={styles.selectedRaioButton}
              >
                <View
                  style={
                    isSelected ? styles.radioButtonPoint : styles.displayNone
                  }
                ></View>
              </TouchableOpacity>
              <Text style={styles.selectedRadioButtonText}>Selected Plan</Text>
            </View>
          )}
        </View>
      </View>
      <PseudoElement />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  planSectorWrapper: {
    padding: 11,
    paddingBottom: 22,
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: THEME.COLOR.WHITE,
  },

  focusPlanSectorBorder: {
    borderColor: THEME.BACKGROUND.MENU,
  },

  iconAndTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_GREY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },

  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
  },

  selectedButtonAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  selectedRaioButton: {
    height: 13,
    width: 13,
    borderWidth: 1,
    borderColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  radioButtonPoint: {
    width: 7,
    height: 7,
    borderRadius: 8,
    backgroundColor: THEME.COLOR.DARK_BLUE_TEXT,
  },

  displayNone: {
    display: "none",
  },

  selectedRadioButtonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLACK,
  },
});

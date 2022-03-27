import { View, Text, TouchableOpacity } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import styles from "./PlanSectorStyles";

export const PlanSector = ({
  logo,
  title,
  children,
  onHandleSelected,
  isSelected = false,
  isRadioButton = false,
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
                />
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

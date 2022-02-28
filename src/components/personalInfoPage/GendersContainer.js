import { View, Text, TouchableOpacity } from "react-native";
import styles from "./stylesMainPersonalInfo";

export const GendersContainer = () => {
  return (
    <View style={styles.genderTitleAndButtonsWrapper}>
      <Text style={styles.titleInfo}>Gender</Text>
      <View style={styles.genderButtonsContainer}>
        <TouchableOpacity
          style={[styles.genderButton, styles.additionalButtonColor]}
        >
          <Text style={styles.checkedGenderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderButton}>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

import { View, Text } from "react-native";
import CrutchesSvg from "../../assets/icons/stdPlanOptions/crutches.svg";
import { PlanSector } from "../utils/PlanSector";
import styles from "./StdInfoSectorProductDescriptionStyles";

export const StdInfoSectorProductDescription = () => {
  return (
    <PlanSector logo={<CrutchesSvg />} title={"Product Description"}>
      <Text style={styles.subTitleMedium}>
        Short Term Disability Insurance can pay you a weekly benefit if you have
        a covered disability that keeps you from working.
      </Text>

      <Text style={styles.subTextNormal}>Disability Definition: </Text>
      <Text style={styles.subTextNormal}>
        You are disabled when Unum determines that due to your sickness or
        injury
      </Text>

      <View style={styles.pointAndTitleWrapper}>
        <View style={styles.point} />
        <Text style={styles.itemTitle}>
          You are unable to perform the material and substantial duties of your
          regular occupation; and
        </Text>
      </View>

      <View style={styles.pointAndTitleWrapper}>
        <View style={styles.point} />
        <Text style={styles.itemTitle}>
          You are not working in any occupation.
        </Text>
      </View>

      <Text style={styles.subTextNormal}>
        You must be under the regular case of a physician in order to be
        considered disabled.
      </Text>

      <Text style={styles.subTextNormal}>
        The loss of a professional or occupational license or certification does
        not, in itself, constitute disability.
      </Text>
    </PlanSector>
  );
};

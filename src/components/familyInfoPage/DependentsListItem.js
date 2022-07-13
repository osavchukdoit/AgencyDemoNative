import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import mainStyles from "./FamilyInfoItemStyles";
import TrashBasketSvg from "../../assets/icons/familyInfoIcons/trashBasket.svg";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { THEME } from "../../styles/theme";
import { useDeleteDependent } from "../../api/useDeleteDependent";

export const DependentsListItem = (props) => {
  const {
    handleInfoDetails,
    dependentIndex,
    depFirstName,
    depLastName,
    relationType,
    blockDesc,
    id: dependentId = null,
  } = props;

  const deleteDependent = useDeleteDependent();

  const onDeleteDependent = () => {
    console.log("delete id=", dependentId);
    // temporary inactive
    // deleteDependent(dependentId);
  };

  return (
    <BasicSectorWrapper>
      <View style={mainStyles.subTitleContainer}>
        <Text style={mainStyles.baseText}>
          Dependent #{dependentIndex + 1} {dependentId}
        </Text>
        <TouchableOpacity
          style={localStyles.trashButton}
          onPress={onDeleteDependent}
        >
          <TrashBasketSvg />
        </TouchableOpacity>
      </View>
      <View style={mainStyles.subInfoWrapper}>
        <View style={mainStyles.subTextAndIconsContainer}>
          <View style={mainStyles.iconSvgWrapper}>
            <PersonIconSvg />
          </View>
          <Text style={mainStyles.subTitle}>
            {depFirstName} {depLastName}
          </Text>
          <View style={localStyles.pointWrapper}>
            <View style={localStyles.point} />
          </View>
          <Text style={mainStyles.baseText}>{relationType}</Text>
        </View>
        <TouchableOpacity
          style={mainStyles.arrowButton}
          onPress={() => {
            handleInfoDetails("DependantsInfoDetailsScreen", {
              dependentIndex,
              blockDesc,
              dependentId,
            });
          }}
        >
          <ArrowRightSvg />
        </TouchableOpacity>
      </View>
    </BasicSectorWrapper>
  );
};

const localStyles = StyleSheet.create({
  trashButton: {
    width: 28,
    height: 28,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  pointWrapper: {
    width: 21,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    width: 5,
    height: 5,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 2,
  },
});

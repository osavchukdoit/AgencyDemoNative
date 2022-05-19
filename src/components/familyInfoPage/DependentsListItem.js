import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import mainStyles from "./FamilyInfoItemStyles";
import TrashBasketSvg from "../../assets/icons/familyInfoIcons/trashBasket.svg";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { THEME } from "../../styles/theme";

export const DependentsListItem = (props) => {
  const {
    handleInfoDetails,
    dependantIndex,
    depFirstName,
    depLastName,
    relationType,
  } = props;

  const onDeleteDependent = () => {
    console.info(`Delete dependent #${dependantIndex}`);
  };

  return (
    <BasicSectorWrapper>
      <View style={mainStyles.subTitleContainer}>
        <Text style={mainStyles.baseText}>Dependant #{dependantIndex + 1}</Text>
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
            handleInfoDetails("DependantsInfoDetailsScreen");
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
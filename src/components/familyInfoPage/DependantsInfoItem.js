import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import mainStyles from "./FamilyInfoItemStyles";
import TrashBasketSvg from "../../assets/icons/familyInfoIcons/trashBasket.svg";
import { THEME } from "../../styles/theme";
import CrossSvg from "../../assets/icons/familyInfoIcons/cross.svg";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { commonPlanStyles } from "../../styles/commonPlanStyles";

export const DependantsInfoItem = ({ handleInfoDetails }) => {
  return (
    <>
      <Text style={commonPlanStyles.planSectorHeader}>Dependants</Text>
      <View style={[mainStyles.infoWrapper, shadowStyles.boxShadow]}>
        <View style={mainStyles.subTitleContainer}>
          <Text style={mainStyles.baseText}>Dependant #1</Text>
          <TouchableOpacity style={localStyles.trashButton}>
            <TrashBasketSvg />
          </TouchableOpacity>
        </View>
        <View style={mainStyles.subInfoWrapper}>
          <View style={mainStyles.subTextAndIconsContainer}>
            <View style={mainStyles.iconSvgWrapper}>
              <PersonIconSvg />
            </View>
            <Text style={mainStyles.subTitle}>Mary Smith</Text>
            <View style={localStyles.pointWrapper}>
              <View style={localStyles.point} />
            </View>
            <Text style={mainStyles.baseText}>Spouse</Text>
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
      </View>

      <View style={mainStyles.infoWrapper}>
        <View style={mainStyles.subTitleContainer}>
          <Text style={mainStyles.baseText}>Dependant #2</Text>
          <TouchableOpacity style={localStyles.trashButton}>
            <TrashBasketSvg />
          </TouchableOpacity>
        </View>
        <View style={mainStyles.subInfoWrapper}>
          <View style={mainStyles.subTextAndIconsContainer}>
            <View style={mainStyles.iconSvgWrapper}>
              <PersonIconSvg />
            </View>
            <Text style={mainStyles.subTitle}>Josh Doe</Text>
            <View style={localStyles.pointWrapper}>
              <View style={localStyles.point} />
            </View>
            <Text style={mainStyles.baseText}>Child</Text>
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
      </View>
      <TouchableOpacity style={localStyles.buttonAddDependant}>
        <CrossSvg />
        <Text style={localStyles.addButtonText}>Add Dependent</Text>
      </TouchableOpacity>
    </>
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

  buttonAddDependant: {
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 11,
    paddingRight: 13,
    paddingBottom: 10,
    paddingLeft: 17,
    marginBottom: 25,
  },

  addButtonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.WHITE,
  },
});

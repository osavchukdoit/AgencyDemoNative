import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import PersonIconSvg from "../../assets/icons/familyInfoIcons/person.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import mainStyles from "./FamilyInfoItemStyles";
import TrashBasketSvg from "../../assets/icons/familyInfoIcons/trashBasket.svg";
import { THEME } from "../../styles/theme";
import CrossSvg from "../../assets/icons/familyInfoIcons/cross.svg";
import { FONTS } from "../../styles/fonts";
import { commonPlanStyles } from "../../styles/commonPlanStyles";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { useField } from "formik";
import { isEmpty } from "lodash";
import { DependentsListItem } from "./DependentsListItem";
import { getServerIcon } from "../../constants";

export const DependantsInfoItem = ({
  dependentsBlockDesc,
  handleInfoDetails,
  personType = "employee",
}) => {
  const {
    blockListLabel,
    blockListName,
    addLabel,
    allowDelete,
    allowEdit,
    allowAdd,
    block,
  } = dependentsBlockDesc;
  const dependentsFieldName = `${personType}.${blockListName}`;
  const [{ value: dependents }, { error: errorMessage }, { setDependents }] =
    useField(dependentsFieldName);
  const { blockTitle, blockIcon } = block.BlockDesc;
  const blockServerIcon = getServerIcon(blockIcon);

  const onAddDependent = () => {
    handleInfoDetails("DependantsInfoDetailsScreen", {
      dependentIndex: dependents.length,
    });
  };

  return (
    <View style={localStyles.wrapper}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: blockServerIcon }}
          style={{ width: 22, height: 22 }}
        />
        <Text style={commonPlanStyles.planSectorHeader}>{blockTitle}</Text>
      </View>

      {isEmpty(dependents)
        ? null
        : dependents.map((dependentItem, index) => {
            return (
              <DependentsListItem
                key={index}
                {...dependentItem}
                dependentIndex={index}
                handleInfoDetails={handleInfoDetails}
              />
            );
          })}

      {/*<DependentsListItem*/}
      {/*  handleInfoDetails={handleInfoDetails}*/}
      {/*/>*/}

      {/*<BasicSectorWrapper>*/}
      {/*  <View style={mainStyles.subTitleContainer}>*/}
      {/*    <Text style={mainStyles.baseText}>Dependant #1</Text>*/}
      {/*    <TouchableOpacity style={localStyles.trashButton}>*/}
      {/*      <TrashBasketSvg />*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*  <View style={mainStyles.subInfoWrapper}>*/}
      {/*    <View style={mainStyles.subTextAndIconsContainer}>*/}
      {/*      <View style={mainStyles.iconSvgWrapper}>*/}
      {/*        <PersonIconSvg />*/}
      {/*      </View>*/}
      {/*      <Text style={mainStyles.subTitle}>Mary Smith</Text>*/}
      {/*      <View style={localStyles.pointWrapper}>*/}
      {/*        <View style={localStyles.point} />*/}
      {/*      </View>*/}
      {/*      <Text style={mainStyles.baseText}>Spouse</Text>*/}
      {/*    </View>*/}
      {/*    <TouchableOpacity*/}
      {/*      style={mainStyles.arrowButton}*/}
      {/*      onPress={() => {*/}
      {/*        handleInfoDetails("DependantsInfoDetailsScreen");*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <ArrowRightSvg />*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*</BasicSectorWrapper>*/}

      {/*<BasicSectorWrapper>*/}
      {/*  <View style={mainStyles.subTitleContainer}>*/}
      {/*    <Text style={mainStyles.baseText}>Dependant #2</Text>*/}
      {/*    <TouchableOpacity style={localStyles.trashButton}>*/}
      {/*      <TrashBasketSvg />*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*  <View style={mainStyles.subInfoWrapper}>*/}
      {/*    <View style={mainStyles.subTextAndIconsContainer}>*/}
      {/*      <View style={mainStyles.iconSvgWrapper}>*/}
      {/*        <PersonIconSvg />*/}
      {/*      </View>*/}
      {/*      <Text style={mainStyles.subTitle}>Josh Doe</Text>*/}
      {/*      <View style={localStyles.pointWrapper}>*/}
      {/*        <View style={localStyles.point} />*/}
      {/*      </View>*/}
      {/*      <Text style={mainStyles.baseText}>Child</Text>*/}
      {/*    </View>*/}
      {/*    <TouchableOpacity*/}
      {/*      style={mainStyles.arrowButton}*/}
      {/*      onPress={() => {*/}
      {/*        handleInfoDetails("DependantsInfoDetailsScreen");*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <ArrowRightSvg />*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*</BasicSectorWrapper>*/}

      {allowAdd === "true" && (
        <TouchableOpacity
          style={localStyles.buttonAddDependant}
          onPress={onAddDependent}
        >
          <CrossSvg />
          <Text style={localStyles.addButtonText}>{addLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-start",
  },
  buttonAddDependant: {
    minWidth: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    flexDirection: "row",
    justifyContent: "flex-start",
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
    paddingLeft: 17,
  },
});

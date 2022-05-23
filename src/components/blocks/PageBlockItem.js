import React, { useState } from "react";
import { getServerIcon } from "../../constants";
import { Image, Text, View, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { ItemInnerProfile } from "../blockItemInner/ItemInnerProfile";
import { ItemInnerEmployment } from "../blockItemInner/ItemInnerEmployment";

export const PageBlockItem = ({ blockDesc, handleInfoDetails, personType }) => {
  const { blockTitle, blockIcon, blockName } = blockDesc;
  const blockServerIcon = getServerIcon(blockIcon);
  const [isWarning, setIsWarning] = useState(false);

  const handleDescInfo = () =>
    handleInfoDetails("BlockDescScreen", {
      blockDesc: { personType, ...blockDesc },
    });

  const blockItemInner = () => {
    switch (blockName) {
      case "Profile":
        return (
          <ItemInnerProfile
            isWarning={isWarning}
            handleNavigateProfile={handleDescInfo}
          />
        );
      case "Employment":
        return (
          <ItemInnerEmployment
            isWarning={isWarning}
            handleNavigateEmployment={handleDescInfo}
          />
        );
      default:
        return <Text>{blockName}</Text>;
    }
  };

  return (
    <>
      <View style={styles.titleWrapper}>
        <Image source={{ uri: blockServerIcon }} style={styles.titleImage} />
        <Text style={styles.blockTitle}>{blockTitle}</Text>
      </View>
      <BasicSectorWrapper>{blockItemInner()}</BasicSectorWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
  },
  titleImage: {
    width: 22,
    height: 22,
  },
  blockTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    marginBottom: 10,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});

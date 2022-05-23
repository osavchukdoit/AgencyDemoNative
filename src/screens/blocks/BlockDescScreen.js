import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { TopPersonalInfo } from "../../components/personalInfoPage/TopPersonalInfo";
import { BlockDesc } from "../../components/blocks/BlockDesc";
import { getServerIcon } from "../../constants";
import { useFormikContext } from "formik";

export const BlockDescScreen = (props) => {
  const { blockDesc } = props.route.params;
  const { blockTitle } = blockDesc;
  const { navigation } = props;
  const blockServerIcon = getServerIcon(blockDesc.blockIcon);
  // TODO: show modal on back if there are unsaved changes
  const { touched } = useFormikContext();

  useEffect(() => {
    navigation.setOptions({
      title: blockTitle,
      headerRight: () => (
        <Image source={{ uri: blockServerIcon }} style={styles.blockIcon} />
      ),
    });
  }, [blockDesc]);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TopPersonalInfo />
      <View style={styles.wrapper}>
        <BlockDesc {...blockDesc} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  blockIcon: {
    width: 22,
    height: 22,
  },
});

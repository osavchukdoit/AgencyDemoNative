import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { TopPersonalInfo } from "../../components/personalInfoPage/TopPersonalInfo";
import { BlockDesc } from "../../components/blocks/BlockDesc";
import { getServerIcon } from "../../constants";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash";
import { setLoader } from "../../store/actions/actionCreator";
import { useDispatch } from "react-redux";

export const BlockDescScreen = (props) => {
  const { blockDesc } = props.route.params;
  const { blockTitle, personType } = blockDesc;
  const { navigation } = props;
  const { touched } = useFormikContext();
  const blockServerIcon = getServerIcon(blockDesc.blockIcon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader({ visible: false, text: "" }));
  }, []);

  const handleGoBack = () => {
    const touchedFields = touched[personType];
    if (isEmpty(touchedFields)) {
      navigation.goBack();
      return;
    }
    const touchedFieldsValues = Object.values(touchedFields);
    const touchedDependents = touchedFields.dependents;
    if (isEmpty(touchedDependents)) {
      if (
        touchedFieldsValues.every((value) => !value) ||
        isEmpty(touchedFields)
      ) {
        navigation.goBack();
        return;
      }
    } else {
      if (
        touchedDependents.every(
          (dependent) =>
            Object.values(dependent).every((value) => !value) ||
            isEmpty(dependent)
        )
      ) {
        navigation.goBack();
        return;
      }
    }
    Alert.alert(
      "Leave the screen?",
      "You have unsaved changes. Are you sure to leave the screen?",
      [
        { text: "Don't leave", style: "cancel", onPress: () => {} },
        {
          text: "Leave",
          style: "destructive",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  useEffect(() => {
    navigation.setOptions({
      title: blockTitle,
      headerRight: () => (
        <Image source={{ uri: blockServerIcon }} style={styles.blockIcon} />
      ),
      gestureEnabled: false,
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={handleGoBack}>
            <Text>Back</Text>
          </TouchableOpacity>
        );
      },
    });
  }, [blockDesc, touched, handleGoBack]);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TopPersonalInfo />
      <View style={styles.wrapper}>
        <BlockDesc {...blockDesc} navigation={navigation} />
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

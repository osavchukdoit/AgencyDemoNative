import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme.js";
import styles from "../personalInfoPage/stylesMainPersonalInfo.js";
import TrushSvg from "../../assets/icons/dependantsInfoIcons/trush.svg";
import { FONTS } from "../../styles/fonts";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper.js";
import { useSelector } from "react-redux";
import { uiControlsFields } from "../../api/uiControlsFields";
import { ControlWrapper } from "../../uiControl";
import { isEmpty } from "lodash";
import { useSavePostModel } from "../../api/useSavePostModel";
import { useFormikContext } from "formik";
import { showWarningMessage } from "../../api/showFlashMessage";

export const MainDependantsInfo = ({ params }) => {
  const { pageDesc } = useSelector((state) => state);
  const pageDescriptor = pageDesc.pageDesc;
  const dependentsBlockDesc = pageDescriptor.blockLists.BlockListDesc;
  const blockDescriptor = dependentsBlockDesc.block.BlockDesc;
  const { submitLabel } = blockDescriptor;
  const dependentFields = blockDescriptor.props.PropDesc;
  const [depPropDesc, setDepPropDesc] = useState(null);
  const { dependentIndex } = params;
  const personType = `employee.dependents[${dependentIndex}]`;
  const { setFieldTouched, errors } = useFormikContext();

  useEffect(() => {
    const depProps = [];
    for (const field of dependentFields) {
      const depPropDescriptor = field.depProps?.DepPropDesc;
      if (!isEmpty(depPropDescriptor)) {
        if (depPropDescriptor.length) {
          for (const depProp of depPropDescriptor) {
            depProps.push(depProp);
          }
        } else {
          depProps.push(depPropDescriptor);
        }
      }
    }
    const displayProps = depProps.map((depProp) => {
      const { displayPropNames } = depProp;
      const splitPropNames = displayPropNames.split(",");
      return { ...depProp, displayPropNames: splitPropNames };
    });
    setDepPropDesc(displayProps);
  }, [dependentFields]);

  const fieldsRender = dependentFields.map((field) => {
    const { propName } = field;

    const resultField = uiControlsFields(field, personType);
    return (
      <ControlWrapper
        personType={personType}
        {...field}
        key={propName}
        depPropDesc={depPropDesc}
      >
        {resultField}
      </ControlWrapper>
    );
  });

  const savePostModel = useSavePostModel(
    blockDescriptor.datamodelSavePOSTURL,
    dependentFields,
    personType,
    true,
    dependentIndex
  );

  const onSave = () => {
    const validFields = dependentFields.map(({ propName, displayable }) => {
      const fieldName = `${personType}.${propName}`;
      displayable !== "false" && setFieldTouched(fieldName, true);
      return { fieldName, fieldError: Object.byString(errors, fieldName) };
    });

    if (validFields.every(({ fieldError }) => !fieldError)) {
      savePostModel().then((result) => {
        if (result) {
          for (const { propName } of dependentFields) {
            const fieldName = `${personType}.${propName}`;
            setFieldTouched(fieldName, false);
          }
        }
      });
    } else {
      showWarningMessage("Please fill all required fields");
      console.info(validFields);
    }
  };

  return (
    <>
      <BasicSectorWrapper>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <TouchableOpacity style={localStyles.deleteButton}>
            <TrushSvg />
            <Text style={localStyles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
          {fieldsRender}
        </View>
      </BasicSectorWrapper>

      <View style={localStyles.addAndSaveButtonsWrapper}>
        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text style={styles.saveButtonText}>{submitLabel}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  deleteButton: {
    width: 93,
    height: 32,
    borderRadius: 15,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -30,
    top: -27,
  },

  deleteButtonText: {
    color: THEME.COLOR.WHITE,
    marginLeft: 8,
  },

  topTitleText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  topSubTitleText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 7,
  },

  gradientWrapper: {
    marginBottom: 12,
    height: 1,
  },

  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },

  calendarButton: {
    width: 38,
    height: 38,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 10,
    position: "absolute",
    bottom: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  additionalMargin: {
    marginBottom: 25,
  },

  addAndSaveButtonsWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  addButton: {
    borderWidth: 1,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    backgroundColor: THEME.COLOR.WHITE,
    marginBottom: 35,
  },

  addButtonText: {
    color: THEME.COLOR.BLUE_BRIGHT,
  },
});

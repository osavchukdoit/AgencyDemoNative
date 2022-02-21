import React, { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { THEME } from "../styles/theme";
import { AppText } from "../components/utils/AppText";
import ArrowLeftActive from "../assets/icons/enrollmentNavigation/arrowLeftActive.svg";
import ArrowLeftInactive from "../assets/icons/enrollmentNavigation/arrowLeftInactive.svg";
import CheckedIcon from "../assets/icons/enrollmentNavigation/checked.svg";
import { FONTS } from "../styles/fonts";
import styles from "./EnrollmentTapBarStyles";

export const EnrollmentTapBar = ({
  state,
  navigation,
  options,
  setOptions,
}) => {
  const backBtnActive = useMemo(() => state.index - 1 >= 0, [state.index]);
  const nextBtnActive = useMemo(
    () => state.index + 1 <= options.length - 1,
    [state.index, options]
  );

  const onOptionPressed = (path) => {
    navigation.navigate(path);
  };

  const onBackPressed = () => {
    if (backBtnActive) {
      const prevIndex = state.index - 1;
      navigation.navigate(options[prevIndex].path);
    }
    const updatedOptions = options.map((option, index) => {
      if (index === state.index) {
        return { ...option, isChecked: false };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  const onNextPressed = () => {
    if (nextBtnActive) {
      const nextIndex = state.index + 1;
      navigation.navigate(options[nextIndex].path);
    }
    const updatedOptions = options.map((option, index) => {
      if (index === state.index) {
        return { ...option, isChecked: true };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  return (
    <View style={styles.tapBarWrapper}>
      <View style={[styles.buttonsWrapper, styles.progressWrapper]}>
        {options.map((route, index) => {
          const { label, path, isChecked } = route;
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              onPress={() => onOptionPressed(path)}
              key={label}
              style={styles.buttonTouchable}
            >
              <View style={styles.progressItem}>
                <View
                  style={[
                    styles.optionProgress,
                    isFocused && styles.optionProgressActive,
                    isChecked && styles.optionProgressChecked,
                  ]}
                >
                  <View
                    style={
                      isChecked
                        ? styles.optionProgressInnerChecked
                        : styles.optionProgressInner
                    }
                  >
                    <CheckedIcon />
                  </View>
                </View>
                <View
                  style={[
                    styles.progressBar,
                    isFocused && styles.progressBarActive,
                    isChecked && styles.progressBarActive,
                    index === 0 && styles.progressBarFirstElement,
                  ]}
                />
              </View>
              <AppText
                color={
                  isFocused || isChecked
                    ? THEME.COLOR.ENROLLMENT_NAVIGATION_LABEL_FOCUSED
                    : THEME.COLOR.ENROLLMENT_NAVIGATION_LABEL
                }
                fontFamily={
                  isFocused || isChecked
                    ? FONTS.AVENIR.HEAVY
                    : FONTS.AVENIR.ROMAN
                }
                style={styles.optionLabel}
              >
                {label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.buttonsWrapper, styles.backNextWrapper]}>
        <TouchableOpacity
          onPress={onBackPressed}
          style={[
            styles.backNextBtn,
            backBtnActive && styles.backNextBtnActive,
          ]}
        >
          <View>
            {backBtnActive ? (
              <ArrowLeftActive style={styles.backArrow} />
            ) : (
              <ArrowLeftInactive style={styles.backArrow} />
            )}
          </View>
          <AppText
            fontFamily={FONTS.AVENIR.HEAVY}
            color={
              backBtnActive
                ? THEME.COLOR.ENROLLMENT_NAVIGATION_BTN_ACTIVE
                : THEME.COLOR.ENROLLMENT_NAVIGATION_BTN
            }
            style={styles.backNextText}
          >
            Back
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onNextPressed}
          style={[
            styles.backNextBtn,
            nextBtnActive && styles.backNextBtnActive,
          ]}
        >
          <AppText
            fontFamily={FONTS.AVENIR.HEAVY}
            color={
              nextBtnActive
                ? THEME.COLOR.ENROLLMENT_NAVIGATION_BTN_ACTIVE
                : THEME.COLOR.ENROLLMENT_NAVIGATION_BTN
            }
            style={styles.backNextText}
          >
            Next
          </AppText>
          <View>
            {nextBtnActive ? (
              <ArrowLeftActive style={styles.nextArrow} />
            ) : (
              <ArrowLeftInactive style={styles.nextArrow} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

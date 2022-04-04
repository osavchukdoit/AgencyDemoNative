import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { THEME } from "../styles/theme";
import { AppText } from "../components/utils/AppText";
import ArrowLeftActive from "../assets/icons/enrollmentNavigation/arrowLeftActive.svg";
import ArrowLeftInactive from "../assets/icons/enrollmentNavigation/arrowLeftInactive.svg";
import CheckedIcon from "../assets/icons/enrollmentNavigation/checked.svg";
import { FONTS } from "../styles/fonts";
import styles from "./EnrollmentTabBarStyles";
import { useDispatch, useSelector } from "react-redux";
import { EnrollWaiveTabBar } from "./EnrollWaiveTabBar";
import { setEnrollWaiveVisible } from "../redux/actions/actionCreator";

export const EnrollmentTabBar = ({
  state,
  navigation,
  options,
  setOptions,
}) => {
  const dispatch = useDispatch();
  const { isEnrollWaiveVisible } = useSelector((state) => state.utils);

  const backBtnActive = useMemo(() => state.index - 1 >= 0, [state.index]);
  const nextBtnActive = useMemo(
    () => state.index + 1 <= options.length - 1,
    [state.index, options]
  );
  const [progressBarWidth, setProgressBarWidth] = useState(0);

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

  const progressBarActiveWidth = useMemo(
    () => (progressBarWidth / (options.length - 1)) * state.index,
    [progressBarWidth, options, state.index]
  );

  useEffect(() => {
    if (state.index !== 1) {
      dispatch(setEnrollWaiveVisible(false));
    }
  }, [state.index]);

  return (
    <View style={styles.tabBarWrapper}>
      {/* Enroll / Waive buttons */}
      {isEnrollWaiveVisible && <EnrollWaiveTabBar navigation={navigation} />}
      {/* Progress bar navigation */}
      <View style={[styles.buttonsWrapper, styles.progressWrapper]}>
        {options.map((route, index) => {
          const { label, path, isChecked } = route;
          const isFocused = state.index === index;

          return (
            //  Touchable button contains progress circles and text
            <TouchableOpacity
              onPress={() => onOptionPressed(path)}
              key={label}
              style={styles.buttonTouchable}
            >
              {/* Button circle */}
              <View
                style={[
                  styles.optionProgress,
                  isFocused && styles.optionProgressActive,
                  isChecked && styles.optionProgressChecked,
                ]}
              >
                {/* Filled inner circle for checked item */}
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
              {/* Button text */}
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
        {/* Background progress bar, always visible */}
        <View
          style={styles.progressBar}
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setProgressBarWidth(width);
          }}
        />
        {/* "Active" progress bar, the width depends on the state.index */}
        <View
          style={[
            styles.progressBar,
            styles.progressBarActive,
            { width: progressBarActiveWidth },
          ]}
        />
      </View>
      {/* Back/Next buttons */}
      <View style={[styles.buttonsWrapper, styles.backNextWrapper]}>
        {/* Back button */}
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
        {/* Next button */}
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

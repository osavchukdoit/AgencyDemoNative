import React from "react";
import { Text, StyleSheet } from "react-native";
import GpsMarkIconSvg from "../assets/icons/personInfoIcons/gpsMark.svg";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../constants";

export const GooglePlacesInput = ({ editable }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
      onFail={(error) => {
        console.log("error=", error);
      }}
      // textInputProps={{
      //   editable: editable === "true",
      // }}
      styles={{
        textInputContainer: [
          uiControlStyles.textInputBorderFocus,
          editable === "true" && uiControlStyles.textInputEditable,
          { paddingLeft: 40 },
        ],
        textInput: [editable === "true" && uiControlStyles.textInputEditable],
      }}
    />
  );
};
export const UsAddress = (props) => {
  const { editable, propName } = props;

  // useEffect(() => {
  //   LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  // }, [])

  return (
    <ControlWrapper {...props}>
      <Text style={uiControlStyles.subText}>
        Must be selected from the google list that will populate once you enter
        your complete address including city, state and zip code. If you have an
        apartment number, please enter it with a comma before the city (for
        example: Apt 310, Any City)
      </Text>
      <GpsMarkIconSvg
        style={[uiControlStyles.inputIcon, addressStyles.inputIcon]}
      />
      {/*<ControlTextInput editable={editable === "true"}>*/}
      {/*  12-3 Bayard, LL2394 St Staten Island*/}
      {/*</ControlTextInput>*/}
      <GooglePlacesInput {...props} />
    </ControlWrapper>
  );
};

const addressStyles = StyleSheet.create({
  inputIcon: {
    top: "auto",
    bottom: 16,
  },
});
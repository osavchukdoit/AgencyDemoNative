import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import GpsMarkIconSvg from "../assets/icons/personInfoIcons/gpsMark.svg";
import { uiControlStyles } from "./uiControlStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../constants";
import { propMarkupStyles } from "./propMarkupStyles";
import { useSetMandatory } from "../form/useSetMandatory";
import { ControlTextInput } from "./ControlTextInput";
import { useField } from "formik";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";

export const GooglePlacesInput = ({ editable }) => {
  const [value, setValue] = useState("");
  const GOOGLE_PLACES_API_BASE_URL =
    "https://maps.googleapis.com/maps/api/place";
  const [search, setSearch] = useState({ term: "", fetchPredictions: false });
  const [predictions, setPredictions] = useState([]);

  const onChangeText = async () => {
    // setValue(searchText);

    if (search.term.trim() === "") return;
    if (!search.fetchPredictions) return;

    const apiUrl = `${GOOGLE_PLACES_API_BASE_URL}/autocomplete/json?key=${GOOGLE_API_KEY}&input=${search.term}`;
    try {
      // const result = await axios.request({
      //   method: 'post',
      //   url: apiUrl
      // })
      const result = await fetch(apiUrl, { method: "POST" });
      console.log("result=", result);
      // if (result) {
      //   const {
      //     data: { predictions },
      //   } = result;
      //   setPredictions(predictions);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const onPredictionTapped = async (placeId, description) => {
    const apiUrl = `${GOOGLE_PLACES_API_BASE_URL}/details/json?key=${GOOGLE_API_KEY}&place_id=${placeId}`;
    try {
      const result = await fetch(apiUrl, { method: "POST" });
      if (result) {
        const {
          data: {
            result: {
              geometry: { location },
            },
          },
        } = result;
        const { lat, lng } = location;
        setShowPredictions(false);
        setSearch({ term: description });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <TextInput
        placeholder={"Placeholder"}
        value={search.term}
        onChangeText={(text) => {
          setSearch({ term: text, fetchPredictions: true });
          onChangeText();
        }}
      />
    </View>

    // <GooglePlacesAutocomplete
    //   placeholder="Search"
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.info(data, details);
    //   }}
    //   query={{
    //     key: GOOGLE_API_KEY,
    //     language: "en",
    //   }}
    //   onFail={(error) => {
    //     console.error("error=", error);
    //   }}
    //   // textInputProps={{
    //   //   editable: editable === "true",
    //   // }}
    //
    //   // styles={{
    //   //   textInputContainer: [
    //   //     uiControlStyles.textInputBorderFocus,
    //   //     editable === "true" && uiControlStyles.textInputEditable,
    //   //     { paddingLeft: 40 },
    //   //   ],
    //   //   textInput: [editable === "true" && uiControlStyles.textInputEditable],
    //   // }}
    // />
  );
};
export const UsAddress = (props) => {
  const {
    editable,
    propName,
    markup,
    personType,
    mandatory,
    ableToAutoSave,
    onSave,
  } = props;
  const markupStyles = propMarkupStyles(markup);
  useSetMandatory({ personType, propName, mandatory });
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error, touched }] = useField(fieldName);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);

  // useEffect(() => {
  //   LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  // }, [])

  return (
    <>
      <Text style={uiControlStyles.subText}>
        Must be selected from the google list that will populate once you enter
        your complete address including city, state and zip code. If you have an
        apartment number, please enter it with a comma before the city (for
        example: Apt 310, Any City)
      </Text>
      <GpsMarkIconSvg
        style={[uiControlStyles.inputIcon, addressStyles.inputIcon]}
      />
      <ControlTextInput
        editable={editable}
        value={fieldValue}
        onChangeText={handleChangeFieldValue}
        errorMessage={touched ? error : null}
      />
      {/*  12-3 Bayard, LL2394 St Staten Island*/}
      {/*</ControlTextInput>*/}
      {/*<GooglePlacesInput {...props} />*/}
    </>
  );
};

const addressStyles = StyleSheet.create({
  inputIcon: {
    top: "auto",
    bottom: 16,
  },
});

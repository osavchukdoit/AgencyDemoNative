import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

export const HomePageTop = () => {
  const image = {
    source: "../../assets/topComponent/cute-family-playing-summer-field.png",
  };
  return (
    <View style={styles.wraper}>
      <View>
        <Image
        //   resizeMode="cover"
          style={styles.image}
          source={require("../../assets/topComponent/cute-family-playing-summer-field.png")}
        />
      </View>
      <Text style={styles.text}>
        Lockheed 2 Industries Inc working with Brown Agencies Inc has created a
        best-in-class benefits program to meet your benefit needs. Below are the
        benefits offered in this enrollment.
      </Text>
      <View style={styles.pseudoelement}></View>
      <Text style={styles.text}>
        View details by clicking on each and select which one you would like to
        enroll to
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 88,
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
  },
  masthead: {
    width: 21,
    // border: "3px solid #43BEBB"
  },
  pseudoelement: {
    width: 21,
    height: 4,
    backgroundColor: "#43BEBB",
    borderRadius: 6
  },
});

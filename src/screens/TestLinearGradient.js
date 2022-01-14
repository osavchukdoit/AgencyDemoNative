import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const TestLinearGradient = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />

<LinearGradient colors={['#112C50', '#2699A2']}
    style={{borderRadius: 20, width: 200}} 
    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>

    <Button style={{borderRadius: 20, width: 100, color:"green",
        textAlign: 'center', color: '#fff'}} title={`Welcomeee`}/>

</LinearGradient>

      {/* <LinearGradient
        // Button Linear Gradient
        colors={["#112C50", "#2699A2"]}
        style={styles.button}
        onPress={()=>console.log("FFF")}
        >
          <Button
            title={"Sign in to agencyEZ"}
            onPress={() =>
              // navigation.navigate("Employers", { name: "Local User" })
              // login(userDetails)
              console.log("userDetails")
            }
          />
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
});

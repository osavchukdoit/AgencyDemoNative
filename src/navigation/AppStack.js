import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { EmployersScreen } from "../screens/EmployersScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { THEME } from "../styles/theme";

const Stack = createNativeStackNavigator();

export const AppStack = ({ onLogout }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          
        {/* <Stack.Screen name="HomePage" options={{ title: "HomePage" }}>
          {(props) => <HomeScreen onLogout={onLogout} {...props} />}
        </Stack.Screen> */}
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About",
            headerStyle: {
              backgroundColor: THEME.COLOR.INPUT_BORDER,
              height: 100,
            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.logoutButtonBg}
                onPress={onLogout}
              >
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Employers" options={{ title: "Employers" }}>
          {(props) => <EmployersScreen onLogout={onLogout} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoutButtonBg: {
    height: 32,
    width: 66,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },

  logoutButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});

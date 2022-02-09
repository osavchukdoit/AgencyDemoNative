import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/LoginScreen";
import { EmployersScreen } from "../screens/EmployersScreen";

const Stack = createNativeStackNavigator();

export const AppStack = ({ setIsLoading }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ title: "Login" }}>
          {(props) => <LoginScreen {...props} setIsLoading={setIsLoading} />}
        </Stack.Screen>
        <Stack.Screen
          name="Employers"
          component={EmployersScreen}
          options={{ title: "Employers" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

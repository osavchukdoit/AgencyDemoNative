import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { EmployersScreen } from "../screens/EmployersScreen";
import { AboutScreen } from "../screens/AboutScreen";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  Platform,
} from "react-native";
import { HomeScreen } from "../screens/HomeScreen";
import { THEME } from "../styles/theme";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { BenefitContactsScreen } from "../screens/BenefitContactsScreen";
import headerLogo from "../assets/header_logo.png";
import HomeIconSvg from "../assets/icons/home.svg";
import LogoutIconSvg from "../assets/icons/logout.svg";
import CallIconSvg from "../assets/icons/call.svg";
import ArrowRightSvg from "../assets/icons/arrowRight.svg";
import { AppText } from "../components/utils/AppText";
import { EnrollmentNavigation } from "./EnrollmentNavigation";

const isWebOs = Platform.OS === "web";

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <AppText color={THEME.COLOR.MENU}>Menu</AppText>
    </View>
    <DrawerItem
      label={() => (
        <View style={styles.drawerItemWrapper}>
          <View style={styles.labelWrapper}>
            <View>{!isWebOs ? <CallIconSvg /> : <Text>Icon</Text>}</View>
            <AppText color={THEME.COLOR.MENU}>Benefit Contacts</AppText>
          </View>
          <View>
            <Text>{!isWebOs ? <ArrowRightSvg /> : <Text>arrow</Text>}</Text>
          </View>
        </View>
      )}
      inactiveTintColor={THEME.COLOR.MENU}
      onPress={() => props.navigation.navigate("Benefit Contacts")}
    />
    <DrawerItem
      label="Toggle drawer"
      onPress={() => props.navigation.toggleDrawer()}
    />
  </DrawerContentScrollView>
);

export const AppStack = ({ onLogout }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"Home"}
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: THEME.BACKGROUND.MENU,
            width: 265,
          },
          headerStyle: {
            backgroundColor: THEME.BACKGROUND.HEADER,
            height: 102,
          },
          headerTintColor: THEME.COLOR.HEADER_TINT,
          headerTitle: () => (
            <View>
              <Image source={headerLogo} style={styles.headerLogo} />
            </View>
          ),
          headerTitleAlign: "center",
          headerRight: (props) => (
            <View style={styles.headerButtonsWrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                {!isWebOs ? <HomeIconSvg /> : <Text>HomeIconSvg</Text>}
              </TouchableOpacity>
              <TouchableOpacity onPress={onLogout}>
                {!isWebOs ? <LogoutIconSvg /> : <Text>LogoutIconSvg</Text>}
              </TouchableOpacity>
            </View>
          ),
          contentOptions: {
            labelStyle: {
              color: "#fff",
            },
          },
        })}
      >
        <Drawer.Screen name={"Home"} component={HomeScreen} />
        <Drawer.Screen
          name={"EnrollmentNavigation"}
          component={EnrollmentNavigation}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About",
          }}
        />
        <Drawer.Screen name="Employers" options={{ title: "Employers" }}>
          {(props) => <EmployersScreen onLogout={onLogout} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen
          name={"Benefit Contacts"}
          component={BenefitContactsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    paddingTop: 0,
  },
  drawerItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelWrapper: {
    flexDirection: "row",
  },
  headerLogo: {
    width: 64,
    height: 47,
  },
  headerButtonsWrapper: {
    flexDirection: "row",
  },
});

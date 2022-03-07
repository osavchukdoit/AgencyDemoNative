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
import { StdPlanOptionsScreen } from "../screens/StdPlanOptionsScreen";
import { DependantsInfoDetailsScreen } from "../screens/DependantsInfoDetailsScreen";
import { EmploymentInfoDetailsScreen } from "../screens/EmploymentInfoDetailsScreen";
import { PersonalInfoDetailsScreen } from "../screens/PersonalInfoDetailsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { FamilyInfoOverviewScreen } from "../screens/FamilyInfoOverviewScreen";
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
import { FONTS } from "../styles/fonts";
import { LinearGradient } from "expo-linear-gradient";
import { CONSTANTS } from "../constants";

const isWebOs = Platform.OS === CONSTANTS.OS.web;
const isIos = Platform.OS === CONSTANTS.OS.ios;

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <AppText color={THEME.COLOR.MENU} fontFamily={FONTS.AVENIR.HEAVY}>
        Menu
      </AppText>
      <View style={styles.linearGradientWrapper}>
        <LinearGradient
          colors={[
            "rgba(256, 256, 256, 0)",
            "rgba(256, 256, 256, 0.5)",
            "rgba(256, 256, 256, 0)",
          ]}
          style={styles.linearGradient}
          start={[0, 0]}
        />
      </View>
    </View>
    <DrawerItem
      label={() => (
        <View style={styles.drawerItemWrapper}>
          <View style={styles.labelWrapper}>
            <View style={styles.labelIconLeft}>
              {!isWebOs ? <CallIconSvg /> : <Text>Icon</Text>}
            </View>
            <AppText
              color={THEME.COLOR.MENU}
              fontFamily={FONTS.AVENIR.MEDIUM}
              style={styles.labelText}
            >
              Benefit Contacts
            </AppText>
          </View>
          <View style={styles.labelIconRight}>
            {!isWebOs ? <ArrowRightSvg /> : <Text>arrow</Text>}
          </View>
        </View>
      )}
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
            height: isIos ? 102 : 52,
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
                style={styles.headerButton}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                {!isWebOs ? <HomeIconSvg /> : <Text>HomeIconSvg</Text>}
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton} onPress={onLogout}>
                {!isWebOs ? <LogoutIconSvg /> : <Text>LogoutIconSvg</Text>}
              </TouchableOpacity>
            </View>
          ),
        })}
      >
        <Drawer.Screen
          name={"StdPlanOptionsScreen"}
          component={StdPlanOptionsScreen}
        />
        <Drawer.Screen
          name={"DependantsInfoDetailsScreen"}
          component={DependantsInfoDetailsScreen}
        />
        <Drawer.Screen
          name={"EmploymentInfoDetailsScreen"}
          component={EmploymentInfoDetailsScreen}
        />
        <Drawer.Screen
          name={"PersonalInfoDetailsScreen"}
          component={PersonalInfoDetailsScreen}
        />
        <Drawer.Screen
          name={"FamilyInfoOverviewScreen"}
          component={FamilyInfoOverviewScreen}
        />
        <Drawer.Screen
          name={"EnrollmentNavigation"}
          component={EnrollmentNavigation}
        />
        <Drawer.Screen name={"Home"} component={HomeScreen} />
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
    paddingTop: 10,
  },
  drawerHeaderText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
  },
  drawerItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelWrapper: {
    flexDirection: "row",
  },
  labelIconLeft: {
    marginRight: 10,
  },
  labelIconRight: {
    position: "relative",
    right: -30,
  },
  labelText: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.28,
  },
  headerLogo: {
    width: 64,
    height: 47,
  },
  headerButtonsWrapper: {
    flexDirection: "row",
    marginRight: 13,
  },
  headerButton: {
    padding: 7,
  },
  linearGradientWrapper: {
    height: 1,
    position: "relative",
  },
  linearGradient: {
    width: 265,
    position: "absolute",
    left: -20,
    bottom: -20,
    height: "100%",
  },
});

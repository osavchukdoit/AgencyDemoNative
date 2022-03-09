import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { EmployersScreen } from "../screens/EmployersScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { TouchableOpacity, Text, View, Image, Platform } from "react-native";
import { CiPlanOptionsScreen } from "../screens/CiPlanOptionsScreen";
import { StdSelectPlanScreen } from "../screens/StdSelectPlanScreen";
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
import { styles } from "./AppStackStyles";

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
          name={"CiPlanOptionsScreen"}
          component={CiPlanOptionsScreen}
        />
        <Drawer.Screen
          name={"StdSelectPlanScreen"}
          component={StdSelectPlanScreen}
        />
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

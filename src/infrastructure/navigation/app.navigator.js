import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons} from "@expo/vector-icons";
import { Text, View, Button } from "react-native";
import { SafeArea } from "../../utility/safe-area";
import { PrimaryNavigator } from "./primary.navigator";
import { SecondaryNavigator } from "./secondary.navigator";
import Credits from "../../features/home/screens/credits.screen";

const Drawer = createDrawerNavigator();

const TAB_ICON = {
  "Primary Hues": "color-filter",
  "Secondary Hues": "color-palette",
  "Credits": "code",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    drawerIcon: ({ size, focused }) => (
      <Ionicons name={iconName} size={size} color={"#FFF"} />
    ),
    headerShown: false,
    drawerStyle: {
      backgroundColor: '#1D1A36',
    },
    drawerLabelStyle: {
      color:"white"
    },
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={createScreenOptions}
      initialRouteName="Home"
      
    >
      <Drawer.Screen component={PrimaryNavigator} name="Primary Hues" />
      <Drawer.Screen component={SecondaryNavigator} name="Secondary Hues" />
      <Drawer.Screen component={Credits} name="Credits" />
    </Drawer.Navigator>
  </NavigationContainer>
);

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../utility/safe-area";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Launch: "md-rocket",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Home = () => (
  <SafeArea>
    <Text> Welcome Home...</Text>
  </SafeArea>
);
const Launch = () => (
  <SafeArea>
    <Text>Let's Launch</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
      "tabBarActiveTintColor": "tomato",
      "tabBarInactiveTintColor": "gray",
      "tabBarStyle": [
        {
          "display": "flex",
          paddingTop: 5,
          paddingBottom: 5,
        },
        null
      ]
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Launch" component={Launch} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);

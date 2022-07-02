import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../utility/safe-area";
import HomeScreen from "../../features/home/screens/home.screen"

const Tab = createBottomTabNavigator();

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
  return {
    tabBarIcon: ({ size, color }) => (
      <Feather name={"headphones"} size={size} color={color} />
    ),
    headerShown: false,
      "tabBarActiveTintColor": `${ route.name === 'White' ? "white" : route.name === "Pink" ? "pink" : "brown"}`,
      "tabBarInactiveTintColor": "gray",
      "tabBarStyle": [
        {
          backgroundColor:"#1D1A36",
          height: 65,
          paddingBottom: 10,
          borderTopColor: "#1D1A36",    
        },
        null
    ],
    "tabBarLabelStyle": {
        fontSize:15
      }
    
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="White" component={HomeScreen} />
      <Tab.Screen name="Pink" component={HomeScreen} />
      <Tab.Screen name="Brown" component={HomeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

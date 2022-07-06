import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "../../features/home/screens/home.screen";

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ size, color }) => (
      <Feather name={"headphones"} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: `${
      route.name === "Blue"
        ? "#0000FF"
        : route.name === "Violet"
        ? "#8F00FF"
        : "#808080"
    }`,
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        backgroundColor: "#1D1A36",
        height: 65,
        paddingBottom: 10,
        borderTopColor: "#1D1A36",
      },
      null,
    ],
    tabBarLabelStyle: {
      fontSize: 15,
    },
  };
};

export const SecondaryNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Blue" component={HomeScreen} />
    <Tab.Screen name="Violet" component={HomeScreen} />
    <Tab.Screen name="Grey" component={HomeScreen} />
  </Tab.Navigator>
);

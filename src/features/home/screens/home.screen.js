import React, { useEffect, useState } from "react";
import { SafeArea } from "../../../utility/safe-area";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text } from "../../../components/text";
import { Spacer } from "../../../components/spacer";
import { Header, MenuIcon } from "../components/home.styles";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import Circles from "../components/circles";
import { Navigation } from "../../../infrastructure/navigation";
import Sounds from "../components/sounds";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function HomeScreen({ navigation, route }) {
  const BG_COLOR = {
    White: "#FFFFFF",
    Brown: "#964B00",
    Pink: "#FFC0CB",
    Blue: "#0000FF",
    Violet: "#8F00FF",
    Grey: "#808080",
  };
  const hue = BG_COLOR[route.name];

  return (
    <SafeArea>
      <Header>
        <Pressable style={{flexDirection:"row"}} onPress={() => navigation.openDrawer()}>
          <MenuIcon/>
        <Spacer position="left" size="large">
          <Text>Explore More</Text>
        </Spacer>
        </Pressable>
      </Header>
      <LinearGradient
        colors={[`${hue}`, "#1D1A36"]}
        locations={[0, 0.01]}
        style={{
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Circles hue={hue} />
        <Sounds hue={route.name.toLowerCase()} color={hue} />
      </LinearGradient>
    </SafeArea>
  );
}

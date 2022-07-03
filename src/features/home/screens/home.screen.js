import React, { useEffect, useState } from "react";
import { SafeArea } from "../../../utility/safe-area";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text } from "../../../components/text";
import { Spacer } from "../../../components/spacer";
import { Header, MenuIcon } from "../components/home.styles";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import Circles from "../components/circles";

export default function HomeScreen({ route }) {
  const BG_COLOR = {
    White: "#FFFFFF",
    Brown: "#964B00",
    Pink: "#FFC0CB",
  };
  const hue = BG_COLOR[route.name];

  return (
    <SafeArea>
      {/* <Header>
        <Text>
          <MenuIcon />
          <Spacer /> Explore More
        </Text>
      </Header> */}
      <View>
        <LinearGradient
          colors={[`${hue}`, "#1D1A36"]}
          locations={[0, 0.15]}
          style={{
            height: "100%",
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Circles hue={hue} />
          </View>
        </LinearGradient>
      </View>
    </SafeArea>
  );
}

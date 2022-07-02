import React, { useEffect, useState } from "react";
import { SafeArea } from "../../../utility/safe-area";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text } from "../../../components/text";
import { Spacer } from "../../../components/spacer";
import { Header, MenuIcon } from "../components/home.styles";
import {LinearGradient} from 'expo-linear-gradient';
import { View } from "react-native";


export default function HomeScreen({ route }) {
  const BG_COLOR = {
    White: "white",
    Brown: "brown",
    Pink:"pink"
  }
  const hue = BG_COLOR[route.name]
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
          locations={[0, 0.85]}
          style={{
            height:"100%"
          }}
        >
         
        </LinearGradient>
      </View>
    </SafeArea>
  );
}

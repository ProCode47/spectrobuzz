import { SafeArea } from "../../../utility/safe-area";
import React from "react";
import { Spacer } from "../../../components/spacer";
import { Feather } from "@expo/vector-icons";
import { Header, EditIcon, BackIcon, CreditsHeader } from "../components/home.styles";
import { Text } from "../../../components/text";
import { View } from "react-native";
import { Button } from "react-native-paper";
import * as Linking from 'expo-linking';

export default function Credits({ navigation }) {
  return (
    <SafeArea style={{ backgroundColor: "#1D1A36" }}>
      <CreditsHeader>
        <BackIcon onPress={() => navigation.goBack()} />
        <Text>Credits</Text>
        <EditIcon />
      </CreditsHeader>
      <View style={{padding:10, display:"flex",alignItems:"center",flexDirection:"column-reverse"}}>
      <Text> developed with <Feather name="heart"/> and <Feather name="code"/></Text>
        <Button
          style={{
            backgroundColor: "#FFF",
            width: "80%",
            alignSelf: "center",
            marginBottom: 10,
          }}
          mode="contained"
          icon="twitter"
          labelStyle={{
            color:"#1D1A36"
          }}
          onPress={()=> Linking.openURL("https://twitter.com/shadowbytee")}
        >
          Twitter
        </Button>
        <Button
          style={{
            backgroundColor: "#FFF",
            width: "80%",
            alignSelf: "center",
            marginBottom: 10,
          }}
          mode="contained"
          textColor="#1D1A36"
          icon="linkedin"
          labelStyle={{
            color:"#1D1A36"
          }}
          onPress={()=> Linking.openURL("https://www.linkedin.com/in/iloenyenwa-victor")}
        >
          {" "}
          Linkedin{" "}
        </Button>
        <Button
          style={{
            backgroundColor: "#FFF",
            width: "80%",
            alignSelf: "center",
            marginBottom: 10,
          }}
          mode="contained"
          textColor="#1D1A36"
          icon="github"
          labelStyle={{
            color:"#1D1A36"
          }}
          onPress={()=> Linking.openURL("https://www.github.com/procode47")}

        >
          {" "}
          Github{" "}
        </Button>
        <Button
          style={{
            backgroundColor: "#FFF",
            width: "80%",
            alignSelf: "center",
            marginBottom: 10,
          }}
          mode="contained"
          textColor="#1D1A36"
          icon="gmail"
          labelStyle={{
            color:"#1D1A36"
          }}
          onPress={()=> Linking.openURL('mailto:mailto@iloenyenwavictor@gmail.com?subject=Hello!')}
        >
          {" "}
          Email{" "}
        </Button>
      </View>
    </SafeArea>
  );
}

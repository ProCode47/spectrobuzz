import React, { useEffect, useState,useRef } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import { PauseIcon, PlayIcon } from "./home.styles";


export default function Sounds({hue}) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const color = useRef();
  useEffect(() => {
    const tabColor = `./${hue}.mp3`
    console.log(`./${hue}.mp3`)
    color.current = tabColor
  },[])

  async function handleSound() {
    if (isPlaying) {
      console.log("Unloading Sound");
      sound.unloadAsync();
      setIsPlaying(false);

    } else {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(require(`./white.mp3`));
      setSound(sound);
      console.log("Playing Sound");
      setIsPlaying(true);
      await sound.setIsLoopingAsync(true);
      await sound.playAsync();
    }
  }

  return (
    <View style={{marginTop:75,justifyContent:"center",flexDirection:"row"}}>
      {isPlaying ? (
        <PauseIcon onPress={handleSound} />
      ) : (
        <PlayIcon onPress={handleSound} />
      )}
    </View>
  );
}

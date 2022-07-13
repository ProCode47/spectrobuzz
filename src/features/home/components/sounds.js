import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import { PauseIcon, PlayIcon } from "./home.styles";

export default function Sounds({ hue, color }) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  async function handleSound() {
    if (isPlaying) {
      console.log("Unloading Sound");
      sound.unloadAsync();
      setIsPlaying(false);
    } else {
      console.log("Loading Sound");
      let filePath = `./${hue}.mp3`;
      console.log(filePath);
      let soundObject
      switch (hue) {
        case "white":
          soundObject = await Audio.Sound.createAsync(require(`../assets/white.mp3`));
          break;
        case "pink":
          soundObject = await Audio.Sound.createAsync(require(`../assets/pink.mp3`));
          break;
        case "brown":
          soundObject = await Audio.Sound.createAsync(require(`../assets/brown.mp3`));
          break;
        case "blue":
          soundObject = await Audio.Sound.createAsync(require(`../assets/blue.mp3`));
          break;
        case "violet":
          soundObject = await Audio.Sound.createAsync(require(`../assets/violet.mp3`));
          break;
        case "grey":
          soundObject = await Audio.Sound.createAsync(require(`../assets/gray.mp3`));
          break;

        default:
          break;
      }
      const {sound} = soundObject
      setSound(sound);
      console.log("Playing Sound");
      setIsPlaying(true);
      await sound.setIsLoopingAsync(true);
      await sound.playAsync();
    }
  }

  return (
    <View
      style={{ marginTop: 75, justifyContent: "center", flexDirection: "row" }}
    >
      {isPlaying ? (
        <PauseIcon hue={color} onPress={handleSound} />
      ) : (
        <PlayIcon hue={color} onPress={handleSound} />
      )}
    </View>
  );
}

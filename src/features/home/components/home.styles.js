import styled from "styled-components/native";
import { Text } from "../../../components/text";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";
import { Card, Searchbar } from "react-native-paper";

export const Header = styled.View`
  background-color: #1D1A36;
  height: 60px;
  padding-left: 10px;
  flex-direction:row;
  align-items:center;
`;
export const CreditsHeader = styled.View`
  background-color: #1D1A36;
  height: 60px;
  flex-direction:row;
  padding:15px;
  align-items:center;
  justify-content:space-between;
`;
export const MenuIcon = styled(Feather).attrs({
  name: "menu",
  size: 20,
  color: "#FFF",
})``;
export const BackIcon = styled(Feather).attrs({
  name: "chevron-left",
  size: 20,
  color: "#FFF",
})``;
export const EditIcon = styled(Feather).attrs({
  name: "edit",
  size: 20,
  color: "#FFF",
})``;
export const PlayIcon = styled(Feather).attrs({
  name: "play",
  size: 50,
})`color: ${(props) => `${props.hue}`};`;
export const PauseIcon = styled(Feather).attrs({
  name: "pause",
  size: 50,
})`color: ${(props) => `${props.hue}`};`;

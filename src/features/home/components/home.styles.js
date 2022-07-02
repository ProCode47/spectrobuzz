import styled from "styled-components/native";
import { Text } from "../../../components/text";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";
import { Card, Searchbar } from "react-native-paper";

export const Header = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 60px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const MenuIcon = styled(Feather).attrs({
  name: "menu",
  size: 20,
  color: colors.brand.primary,
})``;

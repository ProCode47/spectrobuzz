import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const ring1_width = (60 / 100) * DEVICE_WIDTH;
const ring2_width = (50 / 100) * DEVICE_WIDTH;
const ring3_width = (40 / 100) * DEVICE_WIDTH;
const ring4_width = (30 / 100) * DEVICE_WIDTH;
const ring5_width = (20 / 100) * DEVICE_WIDTH;
const ring6_width = (10 / 100) * DEVICE_WIDTH;

const Ring1 = styled.View`
  border-radius: ${(50 / 100) * ring1_width}px;
  height: ${ring1_width}px;
  width: ${ring1_width}px;
  background-color: ${(props) => `${props.hue}40`};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ring2 = styled.View`
  border-radius: ${(50 / 100) * ring2_width}px;
  height: ${ring2_width}px;
  width: ${ring2_width}px;
  background-color: #1d1a36;
  position: absolute;
`;
const Ring3 = styled.View`
  border-radius: ${(50 / 100) * ring3_width}px;
  height: ${ring3_width}px;
  width: ${ring3_width}px;
  background-color: ${(props) => `${props.hue}80`};
  position: absolute;
`;
const Ring4 = styled.View`
  border-radius: ${(50 / 100) * ring4_width}px;
  height: ${ring4_width}px;
  width: ${ring4_width}px;
  background-color: #1d1a36;
  position: absolute;
`;
const Ring5 = styled.View`
  border-radius: ${(50 / 100) * ring5_width}px;
  height: ${ring5_width}px;
  width: ${ring5_width}px;
  background-color: ${(props) => `${props.hue}`};
  position: absolute;
`;
const Ring6 = styled.View`
  border-radius: ${(50 / 100) * ring6_width}px;
  height: ${ring6_width}px;
  width: ${ring6_width}px;
  background-color: #1d1a36;
  position: absolute;
`;

export default function Circles({ hue }) {
  return (
    <Ring1 hue={hue}>
      <Ring2 />
      <Ring3 hue={hue}/>
      <Ring4 />
      <Ring5 hue={hue} />
      <Ring6 />
    </Ring1>
  );
}

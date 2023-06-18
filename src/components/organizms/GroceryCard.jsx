import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 160px;
  height: 160px;
  ${({ color }) => (color ? `background-color: ${color}` : "")}
  display: flex;
  justify-content: space-between;
  padding: 27px 25px 20px;
`;

const TimeContainer = styled.View`
  background-color: #00000045;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const GroceryCard = ({
  onPress,
  color,
  imgUrl,
  deliveryTime = "60",
  ...otherProps
}) => {
  return (
    <Container onPress={onPress} color={color} {...otherProps}>
      <Image source={imgUrl} />
      <TimeContainer>
        <Text style={{ color: "white" }}>In {deliveryTime} Minutes</Text>
      </TimeContainer>
    </Container>
  );
};

export default GroceryCard;

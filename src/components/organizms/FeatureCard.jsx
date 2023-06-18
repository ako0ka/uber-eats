import { View, Image, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../components/constants/routes";

import Text from "../atoms/Text";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Container = styled.Pressable`
  width: ${windowWidth / 2.8}px;
  height: ${windowHeight / 4}px;
`;

const ImageView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextView = styled.View`
  gap: 8px;
`;

const Title = styled(Text)``;

const Price = styled(Text)``;

const Subtitle = styled(Text)``;

const FeaturedCard = ({ title, imgUrl, subTitle, price, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ImageView>
        <Image source={imgUrl} />

        <Image source={require("../../../assets/icons/WhitePlus")} />
      </ImageView>

      <TextView>
        <Title>{title}</Title>
        <Price>${price}</Price>
        <Subtitle>{subTitle}</Subtitle>
      </TextView>
    </Container>
  );
};

export default FeaturedCard;

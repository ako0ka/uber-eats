import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";
import Screen from "../atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";
import Button from "../atoms/Button";

import * as ROUTES from "../constants/routes";

const Container = styled(Screen)``;

const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Close = styled.View``;

const Help = styled.View`
  background: #eeeeee;
  border-radius: 50px;
  padding: 7px 16px;
`;

const Title = styled(Text)`
  color: #eeeeee;
`;

const BlackBtn = styled.Pressable`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 100px;
  gap: 10px;

  background: #000000;

  border: 1px solid #000000;
`;

const Desc = styled(Text)``;

const Delivered = ({ navigation }) => {
  return (
    <Container>
      <View>
        <Header>
          <Close>
            <Image source={require("../../../assets/icons/Xicon.png")} />
          </Close>
          <Help>
            <Text>Help</Text>
          </Help>
        </Header>
        <Title>
          <Text color={{ color: "#000000" }}>Enjoy your order</Text>
        </Title>
        <Desc>
          <Text>
            Jonathan and Subway (Worriors Arena Road) worked their magic for
            you. Take a minute to rate, tip, and say thanks.
          </Text>
        </Desc>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "30%",
          }}
        >
          <Image source={require("../../../assets/images/deliverBag.png")} />
        </View>
        <BlackBtn>
          <Title color={{ color: "#eeeeee" }}>Close</Title>
        </BlackBtn>
      </View>
    </Container>
  );
};

export default Delivered;

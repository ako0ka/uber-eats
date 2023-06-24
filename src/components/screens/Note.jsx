import { View } from "react-native";
import React from "react";
import styled from "styled-components";
styled;
import { TextInput } from "react-native-gesture-handler";

import * as ROUTES from "../constants/routes";

import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import CtgrBtn from "../atoms/CtgrBtn";
import Button from "../atoms/Button";

const Container = styled(Screen)``;

const TextContainer = styled.View`
  align-items: center;
`;

const Wrapper = styled.View`
  background-color: #ffffff;
  padding: 0 22px;
  margin-top: 22px;
  height: 750px;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: #6b6b6b;
  font-size: 16px;
  width: 350px;
  margin: 22px 0;
`;

const Btn = styled(Button)`
  padding: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 16px;
  margin-bottom: 200px;
`;

const Input = styled(TextInput)`
  border-radius: 0px;
  width: 98%;
  padding: 15px 15px 190px;
  background-color: #eeeeee;
`;

const Note = ({ navigation }) => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Input placeholder="Leave a note for your Shopper..." />
          <Title>
            Your Shopper will try their best to follow your notes and may contac
            you if they need your help making a decision.
          </Title>
        </TextContainer>
        <Btn onPress={() => navigation.goBack(ROUTES.DELIVERED_SCREEN)}>
          <Title style={{ color: "#ffffff" }}>Save</Title>
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Note;

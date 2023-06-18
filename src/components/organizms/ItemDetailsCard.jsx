import { Image } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";
import SectionSeparator from "../atoms/SectionSeparato";

const Container = styled.View`
  margin: 10px 0;
`;

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const Right = styled.View``;

const Section = styled(SectionSeparator)`
  height: 1px;
`;

const ItemDetailsCard = ({ title, weight, percent }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Text>{title}</Text>
          <Text>{weight}</Text>
        </Left>

        <Right>
          <Text>{percent}</Text>
        </Right>
      </Wrapper>
      <Section />
    </Container>
  );
};

export default ItemDetailsCard;

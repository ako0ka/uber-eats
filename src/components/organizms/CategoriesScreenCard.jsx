import { Image } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";
import SectionSeparator from "../atoms/SectionSeparato";

const Container = styled.View`
  margin: 10px 0;
`;

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Left = styled.View``;

const Middle = styled.View``;

const Right = styled.View``;

const Separator = styled(SectionSeparator)`
  height: 1px;
`;

const CategoriesScreenCard = ({ imgUrl, title }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image source={imgUrl} />
        </Left>
        <Middle>
          <Text>{title}</Text>
        </Middle>
        <Right>
          <Image source={require("../../../assets/icons/arrowRight.png")} />
        </Right>
      </Wrapper>
      <Separator />
    </Container>
  );
};

export default CategoriesScreenCard;

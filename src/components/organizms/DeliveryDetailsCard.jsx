import { Image, View } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 5px;
`;

const TextView = styled.View``;

const Title = styled(Text)``;

const SubTitleTxt = styled(Text)`
  color: grey;
`;

const AddView = styled.View``;

const DeliveryDetailsCard = ({ title, subTitle }) => {
  return (
    <Container>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <AddView>
          <Image source={require("../../../assets/icons/pin.png")} />
        </AddView>
        <TextView>
          <Title>{title}</Title>
          <SubTitleTxt>{subTitle}</SubTitleTxt>
        </TextView>
      </View>
      <AddView>
        <Image source={require("../../../assets/icons/arrowRight.png")} />
      </AddView>
    </Container>
  );
};

export default DeliveryDetailsCard;

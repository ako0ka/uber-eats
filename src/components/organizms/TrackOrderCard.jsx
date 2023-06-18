import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";
import SectionSeparator from "../atoms/SectionSeparato";
import CtgrBtn from "../atoms/CtgrBtn";

const Container = styled.View``;

const Delivery = styled.View``;

const Section = styled(SectionSeparator)`
  height: 1px;
`;

const Share = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 15px;
`;

const Left = styled.View`
  gap: 5px;
`;

const GreyBtn = styled(CtgrBtn)`
  width: 30%;
`;

const Summary = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const DetailsView = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-top: 20px;
`;

const NumberView = styled.View`
  align-items: center;
  background-color: #eeeeee;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

const Txt = styled(Text)``;

const TxtView = styled.View``;

const FoodTitle = styled(Text)``;

const FoodSubTitle = styled(Text)``;

const SubTotal = styled(Text)``;

const SubtotalPrice = styled(Text)``;

const TrackOrderCard = () => {
  return (
    <Container>
      <Delivery style={{ margin: 15 }}>
        <Text style={{ marginBottom: 15, fontSize: 20 }}>Delivery Details</Text>

        <View style={{ gap: 5, marginVertical: 10 }}>
          <Text color="grey">Address</Text>
          <Text>Bay Area, San Francisco, California, USA</Text>
        </View>

        <Section />

        <View style={{ gap: 5, marginVertical: 10 }}>
          <Text>Type</Text>
          <Text>Leave at door</Text>
        </View>

        <Section />

        <View style={{ gap: 5, marginVertical: 10 }}>
          <Text color="grey">Instructions</Text>
          <Text>
            Please knock to let me know it has arrive and then leave it at the
            doorstep
          </Text>
        </View>

        <Section />

        <View style={{ gap: 5, marginVertical: 10 }}>
          <Text color="grey">Service</Text>
          <Text>Standart</Text>
        </View>
      </Delivery>

      <SectionSeparator />

      <Share>
        <Left>
          <Text>Share this delivery</Text>
          <Text>Let someone follow along</Text>
        </Left>
        <GreyBtn
          title="Share"
          img={require("../../../assets/images/share.png")}
        />
      </Share>

      <SectionSeparator />

      <View style={{ margin: 15 }}>
        <Summary>
          <View style={{ gap: 8 }}>
            <Text>Order summary</Text>
            <Text>Subway, Warriors Arena Road</Text>
          </View>
          <Text>view reciept</Text>
        </Summary>

        <DetailsView>
          <NumberView>
            <Txt>1</Txt>
          </NumberView>

          <TxtView>
            <FoodTitle>Cantina Crispy Chicken</FoodTitle>

            <FoodSubTitle color="grey">Show more</FoodSubTitle>
          </TxtView>
        </DetailsView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <SubTotal>Total</SubTotal>
          <SubtotalPrice>US$13.18</SubtotalPrice>
        </View>
      </View>

      <SectionSeparator />

      <View
        style={{
          margin: 15,
        }}
      >
        <Text style={{ marginTop: 20 }}>Invite friends</Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginVertical: 20,
            gap: 20,
          }}
        >
          <Image source={require("../../../assets/images/burger.png")} />
          <Text>Invite a friend, get $5 off</Text>
        </View>
      </View>
    </Container>
  );
};

export default TrackOrderCard;

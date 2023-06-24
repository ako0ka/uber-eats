import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RolePropType } from "deprecated-react-native-prop-types/DeprecatedViewAccessibility";

import AppSnackBar from "../moleculs/SnackBar";
import { Shop } from "../../userProvider";
import Screen from "../atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";
import ShopCard from "../organizms/ShopCard";

import * as ROUTES from "../constants/routes";

const imageUrl = require("../../../assets/icons/orders.png");

const testUrl = require("../../../assets/images/shopCartTestImage.png");

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 12px;
`;

const SubTitle = styled.Text`
  text-align: center;
  padding: 0 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #545454;
  margin-bottom: 38px;
`;

const MainTitle = styled.Text`
  position: absolute;
  top: 84px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  text-align: left;
  width: 100%;
`;

const StartBtn = styled(CtgrBtn)``;

const OrdersBtn = styled(CtgrBtn)`
  position: absolute;
  right: 0;
  top: 43px;
`;

const fakeData = [
  {
    title: "Taco Bell",
    subTitle: "1 item / US 43.00 $",
    des: "some random description text",
    imageUrl: testUrl,
  },
  {
    title: "Taco Bell",
    subTitle: "1 item / US 43.00 $",
    des: "some random description text",
    imageUrl: testUrl,
  },
  {
    title: "Taco Bell",
    subTitle: "1 item / US 43.00 $",
    des: "some random description text",
    imageUrl: testUrl,
  },
  {
    title: "Taco Bell",
    subTitle: "1 item / US 43.00 $",
    des: "some random description text",
    imageUrl: testUrl,
  },
];

function ShopScreen({ navigation }) {
  const [data, setData] = useState(fakeData);
  let shopItems = Shop();

  setTimeout(() => {
    setData(shopItems);
  }, 1500);

  return (
    <Container>
      <MainTitle>Cart</MainTitle>
      <OrdersBtn
        title="Orders"
        iconLeft={imageUrl}
        light
        // onPress={() => setData(!data)}
      />

      {data.length === 0 ? (
        <InnerContainer>
          <Image source={require("../../../assets/images/shopcart.png")} />
          <Title>Add items to start a basket</Title>
          <SubTitle>items in cart {data.length}</SubTitle>
          <SubTitle>
            Once you add items from a restuarant or store, your basket will
            appear here.
          </SubTitle>
          <StartBtn title="Start Shopping" />
        </InnerContainer>
      ) : (
        <SecondContainer>
          {data.map((item, index) => {
            return (
              <ShopCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                des={item.des}
                imageUrl={testUrl}
                onPress={() => navigation.navigate(ROUTES.ORDER_DETAILS, item)}
              />
            );
          })}
        </SecondContainer>
      )}
    </Container>
  );
}

export default ShopScreen;

import { ScrollView, Image, Pressable, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";

import * as ROUTES from "../constants/routes";

import TextInput from "../atoms/TextInput";
import Screen from "../atoms/Screen";
import GroceryCard from "../organizms/GroceryCard";
import DeliveryDetailsCard from "../organizms/DeliveryDetailsCard";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Left = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;
const Right = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 23px;
`;

const SearchContainer = styled.View``;

const InputText = styled(TextInput)``;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled(GroceryCard)`
  margin-bottom: 16px;
`;

const groceryShops = [
  {
    imgUrl: require("../../../assets/grocery/logo1.png"),
    color: "#F60000",
    deliveryTime: "60",
    // handlePress: () => navigation.navigate(ROUTES.CATEGORIES_SCREEN),
  },
  {
    imgUrl: require("../../../assets/grocery/logo2.png"),
    color: "#77A240",
    deliveryTime: "50",
  },
  {
    imgUrl: require("../../../assets/grocery/logo3.png"),
    color: "#E4AE3C",
    deliveryTime: "40",
  },
  {
    imgUrl: require("../../../assets/grocery/logo4.png"),
    color: "#B71234",
    deliveryTime: "30",
  },
  {
    imgUrl: require("../../../assets/grocery/logo5.png"),
    color: "#AB0920",
    deliveryTime: "25",
  },
  {
    imgUrl: require("../../../assets/grocery/logo6.png"),
    color: "#D2202F",
    deliveryTime: "20",
  },
];

const Grocery = ({ navigation, route }) => {
  const [grocery, setGrocery] = useState(groceryShops);
  return (
    <Container>
      <ScrollView>
        <Header>
          <Left>
            <Pressable onPress={() => navigation.goBack(ROUTES.HOME_SCREEN)}>
              <Image source={require("../../../assets/icons/arrowLeft.png")} />
            </Pressable>
            <Text>Stores</Text>
          </Left>

          <Right>
            <Pressable
              onPress={() => navigation.navigate(ROUTES.DELIVERED_SCREEN)}
            >
              <Image source={require("../../../assets/images/Person.png")} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate(ROUTES.STORE_SCREEN)}>
              <Image source={require("../../../assets/icons/Cart.png")} />
            </Pressable>
          </Right>
        </Header>
        <SearchContainer>
          <InputText></InputText>
        </SearchContainer>

        <DeliveryDetailsCard
          title="San Francisco Bay Area"
          subTitle="John's List"
        />

        <InnerContainer>
          {groceryShops.map((item, idx) => {
            return (
              <Card
                key={idx}
                imgUrl={item.imgUrl}
                color={item.color}
                deliveryTime={item.deliveryTime}
              />
            );
          })}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default Grocery;

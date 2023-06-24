import React, { useEffect, useState } from "react";
import { Pressable, Image, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import styled from "styled-components";
import { Octicons } from "@expo/vector-icons";

import * as ROUTES from "../constants/routes";

import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import CtgrBtn from "../atoms/CtgrBtn";
import CategoriesScreenCard from "../organizms/CategoriesScreenCard";
import Input from "../atoms/TextInput";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

// Header
const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 23px;
`;

// SearchBar
const SearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #eeeeee;
  gap: 15px;
  height: 60px;
  padding: 15px;
  margin-bottom: 15px;
`;

const InputText = styled.TextInput`
  font-weight: 500;
  font-size: 16px;
`;

// Time and Price
const TimePrice = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Time = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
`;

const Price = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
`;

// Spinner and Category Btns
const SpinnerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CtgrView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: 20px 0;
`;

const categories = [
  {
    id: 0,
    title: "Fruits & vegetables",
    imgUrl: require("../../../assets/images/Categories/cat1.png"),
  },
  {
    id: 1,
    title: "Beverages",
    imgUrl: require("../../../assets/images/Categories/cat2.png"),
  },
  {
    id: 2,
    title: "Fruits & vegetables",
    imgUrl: require("../../../assets/images/Categories/cat3.png"),
  },
  {
    id: 3,
    title: "Pantry & Groceries",
    imgUrl: require("../../../assets/images/Categories/cat4.png"),
  },
  {
    id: 4,
    title: "Snacks",
    imgUrl: require("../../../assets/images/Categories/cat5.png"),
  },
  {
    id: 5,
    title: "Meat, Seafood & Plant-Bas...",
    imgUrl: require("../../../assets/images/Categories/cat6.png"),
  },
  {
    id: 6,
    title: "Cheese",
    imgUrl: require("../../../assets/images/Categories/cat7.png"),
  },
  {
    id: 7,
    title: "Bread",
    imgUrl: require("../../../assets/images/Categories/cat8.png"),
  },
  {
    id: 8,
    title: "Milk",
    imgUrl: require("../../../assets/images/Categories/cat9.png"),
  },
  {
    id: 9,
    title: "Canned Products",
    imgUrl: require("../../../assets/images/Categories/cat10.png"),
  },
  {
    id: 10,
    title: "Home",
    imgUrl: require("../../../assets/images/Categories/cat11.png"),
  },
  {
    id: 11,
    title: "Breakfast",
    imgUrl: require("../../../assets/images/Categories/cat12.png"),
  },
  {
    id: 12,
    title: "Sweets & Chocolates",
    imgUrl: require("../../../assets/images/Categories/cat13.png"),
  },
  {
    id: 13,
    title: "Yogurt",
    imgUrl: require("../../../assets/images/Categories/cat14.png"),
  },
  {
    id: 14,
    title: "Prepared Foods",
    imgUrl: require("../../../assets/images/Categories/cat15.png"),
  },
];

const Categories = ({ navigation, route }) => {
  // const { restName } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <SpinnerView>
          <Progress.CircleSnail size={80} color={["red", "green", "blue"]} />
        </SpinnerView>
      ) : (
        <>
          <ScrollView>
            <Wrapper>
              <Header>
                <Left>
                  <Pressable
                    onPress={() => navigation.goBack(ROUTES.HOME_SCREEN)}
                  >
                    <Image
                      source={require("../../../assets/icons/arrowLeft.png")}
                    />
                  </Pressable>
                  {/* <Text>{restName}</Text> */}
                </Left>

                <Right>
                  <Image
                    source={require("../../../assets/images/Person.png")}
                  />
                  <Image source={require("../../../assets/icons/Cart.png")} />
                </Right>
              </Header>

              <SearchContainer>
                <Octicons name="search" size={25} color="black" />

                <Input />
              </SearchContainer>

              <TimePrice>
                <Time>
                  <Image source={require("../../../assets/icons/clock.png")} />
                  <Text>In 60 minutes</Text>
                </Time>

                <Price>
                  <Image source={require("../../../assets/icons/dollar.png")} />
                  <Text>Pricing and Fees</Text>
                </Price>
              </TimePrice>

              <CtgrView>
                <CtgrBtn
                  title="Featured"
                  onPress={() =>
                    navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN)
                  }
                />
                <CtgrBtn title="Categories" black={true} />
                <CtgrBtn
                  title="Orders"
                  onPress={() => navigation.navigate("Orders")}
                />
              </CtgrView>

              {categories.map((item) => {
                return (
                  <CategoriesScreenCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.imgUrl}
                  />
                );
              })}
            </Wrapper>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Categories;

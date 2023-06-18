import React, { useEffect, useState } from "react";
import { Pressable, Image, ScrollView, FlatList } from "react-native";
import styled from "styled-components";
import * as Progress from "react-native-progress";
import { Octicons } from "@expo/vector-icons";

import * as ROUTES from "../../components/constants/routes";

import FeaturedCard from "../organizms/FeatureCard";
import Text from "../atoms/Text";
import Screen from "../atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";
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

const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SeeAllBtnView = styled.Pressable``;

const SeeAllBtn = styled(Text)``;

const SectionTitle = styled(Text)`
  margin: 30px 0 30px;
`;

const FeaturedList = [
  {
    title: "Fruits & Vegetables",
    data: [
      {
        id: 0,
        url: require("../../../assets/images/Store/banana.png"),
        title: "Organic Banana",
        subTitle: "1 banana",
        price: "0.27",
      },
      {
        id: 1,
        url: require("../../../assets/images/Store/avocado.png"),
        title: "Meium Hass Avocado",
        subTitle: "1 avocado",
        price: "2.21",
      },
      {
        id: 2,
        url: require("../../../assets/images/Store/banana.png"),
        title: "Organic Banana",
        subTitle: "1 banana",
        price: "0.27",
      },
      {
        id: 3,
        url: require("../../../assets/images/Store/avocado.png"),
        title: "Meium Hass Avocado",
        subTitle: "1 avocado",
        price: "2.21",
      },
    ],
  },
  {
    title: "Beverages",
    data: [
      {
        id: 3,
        url: require("../../../assets/images/Store/cola.png"),
        title: "Coca-Cola Zero Sugar Cola Soda",
        subTitle: "12 x 12 fl oz",
        price: "9.89",
      },
      {
        id: 4,
        url: require("../../../assets/images/Store/juice.png"),
        title: "Simply Pulp Free Orange Juice",
        subTitle: "52 fl oz",
        price: "5.49",
      },
      {
        id: 5,
        url: require("../../../assets/images/Store/cola.png"),
        title: "Coca-Cola Zero Sugar Cola Soda",
        subTitle: "12 x 12 fl oz",
        price: "9.89",
      },
      {
        id: 6,
        url: require("../../../assets/images/Store/juice.png"),
        title: "Simply Pulp Free Orange Juice",
        subTitle: "52 fl oz",
        price: "5.49",
      },
    ],
  },
  {
    title: "Frozen Foods",
    data: [
      {
        id: 6,
        url: require("../../../assets/images/Store/chicken.png"),
        title: "T.G.I Friay's Boneless Chicken Bites",
        subTitle: "15 oz",
        price: "10.44",
      },
      {
        id: 7,
        url: require("../../../assets/images/Store/apple.png"),
        title: "Apple and Maple Froken Sausages",
        subTitle: "55 fl oz",
        price: "7.69",
      },
      {
        id: 8,
        url: require("../../../assets/images/Store/chicken.png"),
        title: "T.G.I Friay's Boneless Chicken Bites",
        subTitle: "15 oz",
        price: "10.44",
      },
      {
        id: 7,
        url: require("../../../assets/images/Store/apple.png"),
        title: "Apple and Maple Froken Sausages",
        subTitle: "55 fl oz",
        price: "7.69",
      },
    ],
  },
  {
    title: "Pantry & Groceries",
    data: [
      {
        id: 9,
        url: require("../../../assets/images/Store/doritos.png"),
        title: "Doritos Nacho Cheese",
        subTitle: "9.3 oz",
        price: "6.15",
      },
      {
        id: 10,
        url: require("../../../assets/images/Store/wheat-thins.png"),
        title: "Wheat Sundried Tomato &...",
        subTitle: "8.5 oz",
        price: "5.49",
      },
      {
        id: 11,
        url: require("../../../assets/images/Store/doritos.png"),
        title: "Doritos Nacho Cheese",
        subTitle: "9.3 oz",
        price: "6.15",
      },
      {
        id: 10,
        url: require("../../../assets/images/Store/wheat-thins.png"),
        title: "Wheat Sundried Tomato &...",
        subTitle: "8.5 oz",
        price: "5.49",
      },
    ],
  },
  {
    title: "Meat Seafood & Plant-Based",
    data: [
      {
        id: 12,
        url: require("../../../assets/images/Store/chicken.png"),
        title: "Signature Farms Boneless Skinless Chicke...",
        subTitle: "approx 1.5 lbs; p...",
        price: "11.54",
      },
      {
        id: 13,
        url: require("../../../assets/images/Store/turkey.png"),
        title: "Boar's Head Turkey Honey Maple Glazed",
        subTitle: "12 oz",
        price: "7.69",
      },
      {
        id: 14,
        url: require("../../../assets/images/Store/chicken.png"),
        title: "Signature Farms Boneless Skinless Chicke...",
        subTitle: "approx 1.5 lbs; p...",
        price: "11.54",
      },
      {
        id: 13,
        url: require("../../../assets/images/Store/turkey.png"),
        title: "Boar's Head Turkey Honey Maple Glazed",
        subTitle: "12 oz",
        price: "7.69",
      },
    ],
  },
  {
    title: "Cheese",
    data: [
      {
        id: 15,
        url: require("../../../assets/images/Store/vegan-dairy.png"),
        title: "Open Nature Vegan non-Dairy",
        subTitle: "8 oz",
        price: "5.49",
      },
      {
        id: 16,
        url: require("../../../assets/images/Store/brie-cheese.png"),
        title: "Prime Taglio Herb & Garlic Brie Cheese",
        subTitle: "approx 0.5 lb",
        price: "7.70",
      },
      {
        id: 17,
        url: require("../../../assets/images/Store/vegan-dairy.png"),
        title: "Open Nature Vegan non-Dairy",
        subTitle: "8 oz",
        price: "5.49",
      },
      {
        id: 16,
        url: require("../../../assets/images/Store/brie-cheese.png"),
        title: "Prime Taglio Herb & Garlic Brie Cheese",
        subTitle: "approx 0.5 lb",
        price: "7.70",
      },
    ],
  },
];

const Store = ({ navigation, route }) => {
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
                <Octicons />

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
                <CtgrBtn title="Featured" black={true} />
                <CtgrBtn
                  title="Categories"
                  onPress={() => navigation.navigate(ROUTES.CATEGORIES_SCREEN)}
                />
                <CtgrBtn
                  title="Orders"
                  onPress={() => navigation.navigate(ROUTES.ORDER_DETAILS)}
                />
              </CtgrView>

              <>
                {FeaturedList[0].title && (
                  <SectionTitleView>
                    <SectionTitle>{FeaturedList[0].title}</SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[0].title && (
                        <SeeAllBtn secTitle={FeaturedList[0].title}>
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[0].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[1].title && (
                  <SectionTitleView>
                    <SectionTitle>{FeaturedList[1].title}</SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[1].title && (
                        <SeeAllBtn secTitle={FeaturedList[1].title}>
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[1].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[2].title && (
                  <SectionTitleView>
                    <SectionTitle>{FeaturedList[2].title}</SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[2].title && (
                        <SeeAllBtn secTitle={FeaturedList[2].title}>
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[2].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[3].title && (
                  <SectionTitleView>
                    <SectionTitle>{FeaturedList[3].title}</SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[3].title && (
                        <SeeAllBtn secTitle={FeaturedList[3].title}>
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[3].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[4].title && (
                  <SectionTitleView>
                    <SectionTitle>{FeaturedList[4].title}</SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[4].title && (
                        <SeeAllBtn secTitle={FeaturedList[4].title}>
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[4].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>

              <>
                {FeaturedList[5].title && (
                  <SectionTitleView>
                    <SectionTitle>{FeaturedList[5].title}</SectionTitle>

                    <SeeAllBtnView>
                      {FeaturedList[5].title && (
                        <SeeAllBtn secTitle={FeaturedList[5].title}>
                          See All
                        </SeeAllBtn>
                      )}
                    </SeeAllBtnView>
                  </SectionTitleView>
                )}

                <FlatList
                  data={FeaturedList[5].data}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => {
                    return (
                      <FeaturedCard
                        title={item.title}
                        subTitle={item.subTitle}
                        price={item.price}
                        imgUrl={item.url}
                        onPress={() =>
                          navigation.navigate(ROUTES.ITEM_DETAILS_SCREEN, {
                            item,
                          })
                        }
                      />
                    );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </>
            </Wrapper>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Store;

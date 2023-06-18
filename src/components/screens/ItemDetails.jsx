import { Pressable, Image, Dimensions, View, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import * as ROUTES from "../constants/routes";

import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import SectionSeparator from "../atoms/SectionSeparato";
import ItemDetailsCard from "../organizms/ItemDetailsCard";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  margin: 0 15px;
`;

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

const ImageView = styled.View`
  align-items: center;
  justify-content: center;
`;

const InformView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NutritionFacts = styled.View`
  background: #efeff4;
  padding: 10px;
`;

const Section = styled(SectionSeparator)`
  height: 3px;
  margin: 5px 0;
`;

const Related = styled(Text)`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const RelatedImages = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const BottomView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Add = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Note = styled.Pressable`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const MinusPlus = styled.View`
  align-items: center;
  flex-direction: row;
  border: 3px solid lightgray;
  gap: 40px;
  padding: 5px 10px;
`;

const nutritionFacts = [
  {
    id: 0,
    title: "Total Fat",
    gr: "0g",
    percent: "0%",
  },
  {
    id: 1,
    title: "Saturated Fat",
    gr: "0g",
    percent: "0%",
  },
  {
    id: 2,
    title: "Total carbohydrate",
    gr: "30g",
    percent: "10%",
  },
  {
    id: 3,
    title: "Dietary Fiber",
    gr: "3g",
    percent: "10%",
  },
  {
    id: 4,
    title: "Sugars",
    gr: "19g",
    percent: false,
  },
  {
    id: 5,
    title: "Protain",
    gr: "1g",
    percent: false,
  },
  {
    id: 6,
    title: "Potassium",
    gr: false,
    percent: "15%",
  },
  {
    id: 7,
    title: "Calcium",
    gr: false,
    percent: "0%",
  },
  {
    id: 8,
    title: "Iron",
    gr: false,
    percent: "2%",
  },
  {
    id: 9,
    title: "Vitamin A",
    gr: false,
    percent: "2%",
  },
  {
    id: 10,
    title: "Vitamin C",
    gr: false,
    percent: "15%",
  },
];

const ItemDetails = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <Container>
      <ScrollView>
        <Wrapper>
          <Header>
            <Left>
              <Pressable
                onPress={() => navigation.goBack(ROUTES.HOMESCREEN_SCREEN)}
              >
                <Image source={require("../../../assets/icons/Xicon.png")} />
              </Pressable>
            </Left>

            <Right>
              <Image source={require("../../../assets/icons/Cart.png")} />
            </Right>
          </Header>

          <ImageView>
            <ImageSize source={item.url} style={{ width: 200 }} />
          </ImageView>

          <View style={{ gap: 10, marginTop: 20 }}>
            <Text style={{ marginVertical: 20 }}>Information</Text>

            <InformView>
              <Text>Price</Text>

              <Text>${item.price}/pc</Text>
            </InformView>

            <InformView>
              <Text>Price per ground</Text>

              <Text>$1.09/lb</Text>
            </InformView>

            <InformView>
              <Text>Package</Text>

              <Text>{item.subTitle}</Text>
            </InformView>

            <Text style={{ marginVertical: 20 }}>Nutrition facts</Text>

            <NutritionFacts>
              <Text style={{ marginVertical: 10 }}>
                Serving Size about {item.subTitle}
              </Text>

              <InformView>
                <Text>Calories 110</Text>

                <Text>% Daily Value</Text>
              </InformView>

              <Section />

              {nutritionFacts.map((item) => {
                return (
                  <ItemDetailsCard
                    key={item.id}
                    title={item.title}
                    weight={item.gr}
                    percent={item.percent}
                  />
                );
              })}

              <Text>
                * The % DailyValue (DV) tells you how much a nutrient in a
                serving of food contributes to a daily diet. 2,000 calories a
                day is used for general nutritional advice.
              </Text>
            </NutritionFacts>

            <Related>Related</Related>

            <RelatedImages>
              <Image
                source={require("../../../assets/images/Store/lemon.png")}
              />
              <Image
                source={require("../../../assets/images/Store/banana.png")}
              />
              <Image
                source={require("../../../assets/images/Store/avocado.png")}
              />
            </RelatedImages>

            <BottomView>
              <Add>
                <MinusPlus>
                  <Image source={require("../../../assets/icons/minus.png")} />
                  <Image source={require("../../../assets/icons/plus.png")} />
                </MinusPlus>

                <Text>1pc</Text>
              </Add>

              <Note onPress={() => navigation.navigate("Note")}>
                <Text>Leave a note</Text>
              </Note>
            </BottomView>
          </View>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default ItemDetails;

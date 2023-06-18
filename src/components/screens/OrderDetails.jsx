import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { ScrollView, View } from "react-native";
import { Portal } from "react-native-paper";

import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import PromotionWidget from "../moleculs/PromotionWidget";
import RadioLabel from "../moleculs/RadioLabel";
import Check from "../moleculs/Check";
import Counter from "../atoms/Counter";
import BottomSheet from "../atoms/BottomSheet";
import SectionSeparator from "../atoms/SectionSeparato";
import * as ROUTES from "../../components/constants/routes";
import CtgrBtn from "../atoms/CtgrBtn";

const sauces = [
  {
    id: 0,
    value: 1,
    label: "Mariana Sauce",
  },
  {
    id: 1,
    value: 2,
    label: "Galicky Sauce",
  },
  {
    id: 2,
    value: 3,
    label: "Pesto Sauce",
  },
  {
    id: 3,
    value: 4,
    label: "BBQ Sauce",
  },
  {
    id: 4,
    value: 5,
    label: "Bufallo Sauce",
  },
];

// const sideSauce = [
//   {
//     id: 5,
//     value: 1,
//     label: "Sauce on the side",
//   },
// ];

const sizes = [
  {
    id: 5,
    isChecked: false,
    label: "Small 10(6 Slices)",
  },
  {
    id: 6,
    isChecked: false,
    label: "Medium 12(8 slices)",
    price: 4,
  },
  {
    id: 7,
    isChecked: false,
    label: "Large 14(8 Slices)",
    price: 10,
  },
  {
    id: 8,
    isChecked: false,
    label: "Extra large 16(12 Slices)",
    price: 15,
  },
  {
    id: 9,
    isChecked: false,
    label: "Super 20(12 Slices)",
    price: 18,
  },
  {
    id: 10,
    isChecked: false,
    label: "24",
    price: 25,
  },
];

const crust = [
  {
    id: 11,
    isChecked: false,
    label: "Regular crust",
  },
  {
    id: 12,
    isChecked: false,
    label: "Corn Skinny Crust",
    price: 4,
  },
  {
    id: 13,
    isChecked: false,
    label: "Thick Pan Crust",
    price: 10,
  },
];

const addons = [
  {
    id: 14,
    isChecked: false,
    text: "1 Side of Ranch Dressing",
    price: 0.5,
  },
  {
    id: 15,
    isChecked: false,
    text: "2 Side of Ranch Dressing",
    price: 1.0,
  },
  {
    id: 16,
    isChecked: false,
    text: "Side of marina sauce",
    price: 0.69,
  },
];

const frequent = [
  {
    id: 17,
    isChecked: false,
    text: "Soda",
    price: 1.69,
    subTitle: "Select options",
  },
  {
    id: 18,
    isChecked: false,
    text: "Cheeze Pizza",
    price: 12.99,
    subTitle: "Select options",
  },
  {
    id: 19,
    isChecked: false,
    text: "Amigos Hawaiana Pizza",
    price: 16.99,
    subTitle: "Select options",
  },
];

const Container = styled(Screen)``;

const RestaurantTitle = styled(Text)``;

const Section = styled(SectionSeparator)`
  background: #f6f6f6;
`;

const ItemPrice = styled(Text)`
  margin: 8px 0;
`;

const ItemDesc = styled(Text)`
  color: #545454;
`;

const Promotion = styled(PromotionWidget)`
  margin-top: 36px;
`;

const SauceContainer = styled.View`
  margin-top: 24px;
`;
const SauceTitle = styled(Text)``;

const SauceTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const SideSouce = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;
const SouceSide = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;
const PizzaContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
`;
const CrustContainer = styled.View`
  margin-bottom: 24px;
`;
const AddOnsContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 24px;
`;

const FrequentContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const subTitle = styled(Text)``;

const CounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const AddBtn = styled.Pressable`
  align-items: center;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  margin: 15px;
  margin-bottom: 100px;
`;

const AddBtnTxt = styled(Text)`
  color: white;
`;

const LineTxt = styled(Text)`
  color: white;
`;

// bottomsheet

const BottomSheetView = styled.View``;

const TextWrapper = styled.View`
  display: flex;
  align-items: center;
`;

const RestTitle = styled(Text)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
  font-size: 24px;
`;

const SaveText = styled(Text)`
  margin-top: 1px;
  color: green;
`;

const GroupIcon = require("../../../assets/images/Group.png");

export default function OrderDetails({ navigation, route }) {
  const { price, desc, restaurantName } = route.params;
  let num = parseInt(price);
  const addedItems = useRef();

  const [count, setCount] = useState(1);
  const [sum, setSum] = useState(0);

  const [sizePrice, setSizePrice] = useState(num);
  const [crustPrice, setCrustPrice] = useState(sizePrice);
  const [addonsPrice, setAddonsPrice] = useState(crustPrice);
  const [frequentPrice, setFrequentPrice] = useState(addonsPrice);
  const [sizeArr, setSizeArr] = useState(sizes);
  const [totalPrice, setTotalPrice] = useState(num);

  const handlePress = (id, amount, arr, callback) => {
    let newPrice = num + (amount ? amount : 0);

    arr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });

    callback(newPrice);
    setTotalPrice(newPrice);
  };

  return (
    <Container>
      <ScrollView>
        {/* <RestaurantTitle size={24}>{restaurantName}</RestaurantTitle>
        <ItemPrice size={22}>${price}</ItemPrice>
        <ItemDesc>{desc}</ItemDesc> */}

        <Promotion />

        <SauceContainer>
          <SauceTitleWrapper>
            <SauceTitle size={18}>Choose your sauce</SauceTitle>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            >
              <Text>Required</Text>
            </View>
          </SauceTitleWrapper>
          {sauces.map((item) => {
            return (
              <RadioLabel
                key={item.id}
                label={item.label}
                onPress={() => handlePress(item.id, sauces)}
                checked={item.isChecked}
              />
            );
          })}
        </SauceContainer>

        <Section />

        <SideSouce>
          <View>
            <Text size={18}>Get your sauce on the side</Text>
            <Text size={14} style={{ color: "gray" }}>
              Choose up to 1
            </Text>
          </View>
        </SideSouce>
        <SouceSide>
          <Check />
          <Text>Sauce on the side</Text>
        </SouceSide>

        <PizzaContainer>
          <SauceTitleWrapper>
            <SauceTitle size={18}>Choose your size</SauceTitle>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            >
              <Text>Required</Text>
            </View>
          </SauceTitleWrapper>

          {sizeArr.map((item) => {
            return (
              <RadioLabel
                key={item.id}
                label={item.label}
                price={item.price}
                onPress={() =>
                  handlePress(item.id, item.price, sizes, setSizePrice)
                }
                checked={item.isChecked}
              />
            );
          })}
          <Text>{sizePrice}</Text>
        </PizzaContainer>

        <Section />

        <CrustContainer>
          <SauceTitleWrapper>
            <SauceTitle size={18}>Choose your crust</SauceTitle>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            >
              <Text>Required</Text>
            </View>
          </SauceTitleWrapper>

          {crust.map((item) => {
            return (
              <RadioLabel
                key={item.id}
                label={item.label}
                price={item.price}
                // text={item.text}
                onPress={() =>
                  handlePress(item.id, item.price, crust, setSizePrice)
                }
                checked={item.isChecked}
              />
            );
          })}
          <Text>{crustPrice}</Text>
        </CrustContainer>

        <Section />

        <Text size={18}>Choose your add-ons</Text>

        <Text>Choose up to 3</Text>

        <AddOnsContainer>
          <SauceTitleWrapper>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            ></View>
          </SauceTitleWrapper>

          {addons.map((item) => {
            return (
              <Check
                key={item.id}
                text={item.text}
                price={item.price}
                style={{ margin: 5 }}
                value={item.isChecked}
                onPress={() =>
                  handlePress(item.id, item.price, addons, setAddonsPrice)
                }
                checked={item.isChecked}
              />
            );
          })}
          <Text>{addonsPrice}</Text>
        </AddOnsContainer>

        <Section />

        <FrequentContainer>
          <SauceTitleWrapper>
            <SauceTitle size={18}>Frequently brought together</SauceTitle>
          </SauceTitleWrapper>

          {frequent.map((item) => {
            return (
              <Check
                key={item.id}
                text={item.text}
                price={item.price}
                subtitle={item.subTitle}
                onPress={() =>
                  handlePress(item.id, item.price, frequent, setFrequentPrice)
                }
                checked={item.isChecked}
              />
            );
          })}
          <Text>{frequentPrice}</Text>
        </FrequentContainer>

        <Section />

        <CounterContainer>
          <Counter />
        </CounterContainer>

        <Section />

        <AddBtn onPress={() => addedItems.current.open()}>
          <AddBtnTxt>
            Add {count} to basket • US${sum.toFixed(2)}
          </AddBtnTxt>

          <LineTxt>US$21.00</LineTxt>
        </AddBtn>
      </ScrollView>
      <Portal>
        <BottomSheet
          bottomSheetRef={addedItems}
          modalHeight={700}
          onPress={() => {
            current.close();
          }}
        >
          <TextWrapper>
            <RestTitle>Taco Bell(2255 Telegraph Avenue)</RestTitle>
            <SaveText>You're saving US$25</SaveText>
            <Section />
          </TextWrapper>
          {/* <AddBtn
            title="Go to checkout"
            onPress={() => {
              navigation.navigate(ROUTES.DELIVERY_DETAILS_SCREEN);
            }}
          /> */}
          {/* <GroupIcon /> */}
          <CtgrBtn
            title="Go to checkout"
            onPress={() => {
              navigation.navigate(ROUTES.DELIVERY_DETAILS_SCREEN);
            }}
          />

          <Section />
        </BottomSheet>
      </Portal>
    </Container>
  );
}

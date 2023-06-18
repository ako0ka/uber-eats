import React, { useState } from "react";
import { ScrollView, View, Image, Pressable } from "react-native";
import styled from "styled-components";

import * as ROUTES from "../constants/routes";

import Screen from "../atoms/Screen";
import SectionSeparator from "../atoms/SectionSeparato";
import CtgrBtn from "../atoms/CtgrBtn";
import Check from "../moleculs/Check";
import Text from "../atoms/Text";
import DeliveryPickupBtns from "../atoms/DeliveryPkUp";
import DeliveryDetailsCard from "../organizms/DeliveryDetailsCard";

const Container = styled(Screen)``;

const TitleView = styled.View``;

const RestTitle = styled(Text)`
  margin-top: 7px;
`;

const SwitcherContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  height: 55px;
  flex-direction: row;
  padding: 5px;
  margin-top: 20px;
`;

const PinPersonView = styled.View`
  margin-top: 20px;
`;

const TimeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Priority = styled.View`
  align-items: center;
  border: 1px solid lightgrey;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px;
  margin-top: 20px;
`;

const Standart = styled.View`
  align-items: center;
  border: 2px solid black;
  flex-direction: row;
  padding: 25px;
  margin-top: 20px;
`;

const Schedule = styled.View`
  align-items: center;
  border: 1px solid lightgrey;
  flex-direction: row;
  padding: 25px;
  margin-top: 20px;
`;

const DetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
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

const RestTiTle = styled(Text)`
  color: #6b6b6b;
`;

const PriceWrapper = styled.View`
  align-items: flex-end;
`;

const IconPriceView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

const SubPrice = styled(Text)`
  color: #6b6b6b;
  text-decoration: line-through;
`;

const RenderView = styled.View``;

const Left = styled.View`
  flex-direction: row;
  background: #eeeeee;
  justify-content: space-between;
  gap: 25px;
  padding: 20px 10px;
`;

const Right = styled.View`
  background: #eeeeee;
  padding: 20px;
`;

// Hurry

const Cont = styled.View`
  align-items: center;
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 0 15px 15px;
`;

const TView = styled.View``;

const Ttl = styled(Text)``;

const SubTitleTxt = styled(Text)`
  margin-top: 10px;
`;

const Addview = styled.View``;

const Section = styled(SectionSeparator)`
  height: 3px;
`;

const DeliveryDetails = ({ navigation, route }) => {
  const [category, setCategory] = useState(0);

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  function handlePress(value) {
    setCategory(value);
  }

  return (
    <Container>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <TitleView>
            <Pressable onPress={() => navigation.goBack(ROUTES.ORDER_DETAILS)}>
              <Image source={require("../../../assets/icons/arrowLeft.png")} />
            </Pressable>

            <RestTitle>Delivery Details</RestTitle>
          </TitleView>

          <SwitcherContainer>
            {btns.map((btn) => {
              return (
                <DeliveryPickupBtns
                  title={btn.title}
                  onPress={() => handlePress(btn.value)}
                  key={btn.title}
                  black={btn.value === category ? true : false}
                />
              );
            })}
          </SwitcherContainer>

          <PinPersonView>
            <DeliveryDetailsCard
              iconSource={require("../../../assets/icons/pin.png")}
              title="San Francisco Bay Area"
              subTitle="Ca"
            />
            <DeliveryDetailsCard
              iconSource={require("../../../assets/images/Person.png")}
              title="San Francisco Bay Area"
              subTitle="Add delivery note"
            />
          </PinPersonView>

          <TimeView>
            <Text>Delivery Time</Text>
            <Text>15-30 min(s)</Text>
          </TimeView>

          <Priority>
            <View style={{ gap: 10 }}>
              <Text>Priority</Text>
              <Text>Delivered directly to you</Text>
            </View>
            <Text>+US$1.99</Text>
          </Priority>

          <Standart>
            <Text>Standart</Text>
          </Standart>

          <Schedule>
            <Text>Schedule</Text>
          </Schedule>

          <TimeView>
            <Text>Your items</Text>
            <Text>see menu</Text>
          </TimeView>

          <DetailsView>
            <NumberView>
              <Txt>1</Txt>
            </NumberView>
            <TxtView>
              <FoodTitle>Cantina Crispy Chicken</FoodTitle>

              <FoodSubTitle>6 Wings • Side of Celery •</FoodSubTitle>

              <RestTiTle>Ranch Dip</RestTiTle>
            </TxtView>

            <PriceWrapper>
              <IconPriceView>
                <Image
                  source={require("../../../assets/icons/promotions.png")}
                />
                <Text>US$13.18</Text>
              </IconPriceView>

              <SubPrice>US$17.49</SubPrice>
            </PriceWrapper>
          </DetailsView>

          <RenderView>
            <Cont>
              <TView>
                <Ttl>Cantina Crispy Chicken</Ttl>
                <SubTitleTxt>Buy 1, get 1 free (add 2 to basket)</SubTitleTxt>
              </TView>
              <Addview>
                <Image source={require("../../../assets/icons/plus.png")} />
              </Addview>
            </Cont>

            <Cont>
              <TView>
                <Ttl>Spicy Cheesy Double</Ttl>
                <SubTitleTxt>Buy 1, get 1 free (add 2 to basket)</SubTitleTxt>
              </TView>
              <Addview>
                <Image source={require("../../../assets/icons/plus.png")} />
              </Addview>
            </Cont>

            <Cont>
              <TView>
                <Ttl>Mango Freeze</Ttl>
                <SubTitleTxt>Buy 1, get 1 free (add 2 to basket)</SubTitleTxt>
              </TView>
              <Addview>
                <Image source={require("../../../assets/icons/plus.png")} />
              </Addview>
            </Cont>
          </RenderView>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <CtgrBtn
              title="Add items"
              img={require("../../../assets/icons/plus.png")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 15,
              justifyContent: "space-between",
            }}
          >
            <Left>
              <Text>Request utensils, etc.</Text>
              <Check />
            </Left>
            <Right>
              <Text>Add note</Text>
            </Right>
          </View>

          <PinPersonView>
            <DeliveryDetailsCard
              Source={require("../../../assets/icons/gift.png")}
              title="Make a gift"
              subTitle="Add recipient info and a message"
            />
            <DeliveryDetailsCard
              Source={require("../../../assets/icons/gift.png")}
              title="Promotion applied"
              subTitle="You’re saving US$25"
            />
          </PinPersonView>

          <TimeView>
            <Text>Subtotal</Text>
            <Text>US$19.99</Text>
          </TimeView>

          <TimeView>
            <Text>Promotion</Text>
            <Text>-US$19.99</Text>
          </TimeView>

          <TimeView>
            <Text>Delivery fee</Text>
            <Text>US$0.49</Text>
          </TimeView>

          <TimeView>
            <Text>Taxes and Other fees</Text>
            <Text>US$10.99</Text>
          </TimeView>

          <TimeView>
            <Text>Total</Text>
            <Text>US$10.71</Text>
          </TimeView>

          <PinPersonView>
            <DeliveryDetailsCard
              Source={require("../../../assets/images/creditCard.png")}
            />
          </PinPersonView>
        </View>
        <Section />

        <View style={{ marginBottom: 50, gap: 20 }}>
          <Text>
            If you’re not around when the courier arrives, they’ll leave your
            order at the door. By placing your order, you agree to take full
            responsibilty for it once it’s delivered.
          </Text>
          <CtgrBtn
            onPress={() => navigation.navigate(ROUTES.TRACK_ORDER_SCREEN)}
            black
            title="Next • US$10.71"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default DeliveryDetails;

import { View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-native-paper";

import * as ROUTES from "../../components/constants/routes";

import Screen from "../atoms/Screen";
styled;
import Text from "../atoms/Text";
import TrackOrderCard from "../organizms/TrackOrderCard";
import TextInput from "../atoms/TextInput";
import CtgrBtn from "../atoms/CtgrBtn";
import Map from "../organizms/Map";

const Container = styled(Screen)``;

const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Left = styled.View`
  align-items: center;
  justify-content: center;
`;

const Close = styled.View``;

const Right = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

const Share = styled.View``;

const Help = styled.View`
  background: #eeeeee;
  border-radius: 50px;
  padding: 7px 16px;
`;

const Arriving = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
  margin: 8px 0;
`;

const ProgressView = styled.View``;

const Latest = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 7px;
  margin: 8px 0;
`;

const Prepare = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

const MainImage = styled.Image``;

const CurierView = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const Images = styled.View``;

const Person = styled.View`
  align-items: center;
  flex-direction: row;
`;
const ProfilePhoto = styled.View`
  position: absolute;
`;

const Car = styled.View`
  margin-left: 45px;
`;

const Like = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  flex-direction: row;
  bottom: -18px;
  left: -6px;
  gap: 5px;
  margin-left: 8px;
  padding: 5px 0;
  position: absolute;
  width: 50%;
`;

const TextsView = styled.View`
  gap: 3px;
`;

const TrackOrder = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 1) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 0.5);
      }, 10000);

      return () => clearTimeout(timer);
    } else if (progress === 1) {
      navigation.navigate(ROUTES.DELIVERED_SCREEN);
    }
  }, [progress, navigation]);

  return (
    <Container>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <Header>
            <Left>
              <Close>
                <Image source={require("../../../assets/icons/Xicon.png")} />
              </Close>
            </Left>

            <Right>
              <Share>
                <Image source={require("../../../assets/images/share.png")} />
              </Share>

              <Help>
                <Text>Help</Text>
              </Help>
            </Right>
          </Header>
        </View>

        <View style={{ margin: 15 }}>
          {progress === 0 ? (
            <Text>Preparing your order...</Text>
          ) : (
            <Text>Almost There...</Text>
          )}
          <Arriving>
            <Text>Arriving at</Text>
            <Text>10:15</Text>
          </Arriving>
          <ProgressView>
            <ProgressBar progress={progress} color={"green"} />
          </ProgressView>
          <Latest>
            <Text>Latest arrival by 10:40</Text>
            <View>{/* <Image source={IMAGES.ExclaMarkGrey} /> */}</View>
          </Latest>

          {progress === 0 ? (
            <Prepare>
              <MainImage
                source={require("../../../assets/images/prepare.png")}
              />
            </Prepare>
          ) : (
            <Map />
          )}
        </View>

        <View>{progress === 0 && <TrackOrderCard />}</View>

        {progress === 0.5 && (
          <View style={{ margin: 15 }}>
            <CurierView>
              <Images>
                <Person>
                  <Car>
                    <Image
                      source={require("../../../assets/images/pic21.png")}
                    />
                  </Car>

                  <ProfilePhoto>
                    <Image
                      source={require("../../../assets/images/driver.png")}
                    />
                  </ProfilePhoto>
                </Person>

                <Like>
                  <Text>95%</Text>
                  <Image source={require("../../../assets/icons/like.png")} />
                </Like>
              </Images>

              <TextsView>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  <Image
                    source={require("../../../assets/icons/greenProfile.png")}
                  />

                  <Text>Jonathan</Text>

                  <Text>• 7EL005</Text>
                </View>
                <Text>White Honda Civic</Text>
              </TextsView>
            </CurierView>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
                justifyContent: "space-between",
              }}
            >
              <Image source={require("../../../assets/icons/call.png")} />
              <TextInput
                placeholder="Send a message"
                style={{
                  borderRadius: 50,
                  width: "55%",
                  height: "70%",
                }}
              />
              <CtgrBtn
                title="Tip"
                img={require("../../../assets/icons/WhitePlus")}
                style={{ borderRadius: 50, width: "25%", height: "70%" }}
              />
            </View>

            <TrackOrderCard />
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default TrackOrder;

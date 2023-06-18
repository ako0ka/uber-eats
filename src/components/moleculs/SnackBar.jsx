import React, { useEffect } from "react";
import styled from "styled-components";
import SnackBar from "react-native-snackbar-component";
import { LogBox } from "react-native";
import Constants from "expo-constants";

import Text from "../atoms/Text";
import Error from "../../../assets/icons/Erorr.png";
import Success from "../../../assets/icons/Success.png";

const NOTIFICATION_DISMISS_TIME = 3000;

const SnackContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 16px;
`;

const InfoContainer = styled.View`
  margin-left: 15px;
`;

const Title = styled(Text)`
  color: white;
  font-size: 16px;
  line-height: 19px;
`;

const InfoText = styled(Text)`
  color: white;
  font-size: 12px;
  line-height: 14px;
`;

const AppSnackBar = ({ text, isError, visible = false, callback }) => {
  // useEffect(() => {
  //   LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  // }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        callback((prev) => !prev);
      }, NOTIFICATION_DISMISS_TIME);
    }
  }, [visible]);

  const Message = () => {
    return (
      <SnackContainer>
        {isError ? <Error /> : <Success />}
        <InfoContainer>
          <Title>{isError ? "Error" : "Success"}</Title>
          <InfoText numberoflines={2}>{text}</InfoText>
        </InfoContainer>
      </SnackContainer>
    );
  };
  return (
    <SnackBar
      useNativeDriver={true}
      visible={visible}
      backgroundColor="#219ebc70"
      messageColor="#219ebc70"
      textMessage={Message}
      messageStyle={{ fontFamily: "Uber-Regular" }}
      position="top"
      top={Constants.statusBarHeight + 4}
      containerStyle={{
        marginHorizontal: 22,
        borderRadius: 12,
      }}
    />
  );
};

export default AppSnackBar;

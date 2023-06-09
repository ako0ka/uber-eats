import React from "react";
import styled from "styled-components";

import Text from "./Text";

const Btn = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  ${({ black }) => (black ? `background - color : #ffffff` : "")};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 50%;
`;

const BtnText = styled(Text)`
  ${({ black }) => (black ? `color : #000000` : "")};
  line-height: 20px;
`;

const TimeText = styled(Text)`
  line-height: 20px;
`;

const DeliveryPickupBtns = ({
  Time,
  Distance,
  onPress,
  black = false,
  title,
  ...props
}) => {
  return (
    <Btn onPress={onPress} black={black} {...props}>
      {title && <BtnText black={black}>{title}</BtnText>}
      {Time && Distance && (
        <TimeText>
          {Time} min {Distance}mi
        </TimeText>
      )}
    </Btn>
  );
};

export default DeliveryPickupBtns;

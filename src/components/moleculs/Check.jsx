import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "expo-checkbox";

import Text from "../atoms/Text";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  flex-direction: row;
`;
const LeftCont = styled.View`
  margin-bottom: 10px;
  margin-left: 10px;
`;

const RightContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Label = styled(Text)``;

const Price = styled(Text)``;

const Check = ({ text, price, checked, onPress, subTitle }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container>
      <LeftContainer>
        <Checkbox
          style={{ margin: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <LeftCont>
          {text && <Text>{text}</Text>}
          {subTitle && (
            <Text color="grey">
              US${price} {subTitle}
            </Text>
          )}
        </LeftCont>
      </LeftContainer>
      <RightContainer>
        {subTitle && price ? "" : price ? <Price>US${price} ea</Price> : ""}
      </RightContainer>
    </Container>
  );
};

export default Check;

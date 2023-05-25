import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './Text';



const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  height: 50%; 
  width: 100%;
`
const Minus = styled.Pressable`
align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  font-size: 50px;
`

const Plus = styled.Pressable`
align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  font-size: 18px;
`
const Total = styled(Text)`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
`


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container>
      <Minus onPress={decrement}>
        <Text>-</Text>
      </Minus>

      <Total>{count}</Total>

      <Plus onPress={increment}>
        <Text  >+</Text>
      </Plus>
    </Container>
  );
};

export default Counter;

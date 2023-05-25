import React from 'react'
import styled from 'styled-components'
import { Checkbox } from 'react-native-paper'
import Text from '../atoms/Text';


const Container = styled.View`
flex-direction: row;
justify-content: space-between;
`;

const LeftContainer = styled.View`
 flex-direction: row;
`
const LeftCont = styled.View`
margin-bottom: 10px;
margin-left: 10px;
`

const RightContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`




const Label = styled(Text)``

const Price = styled(Text)``





const Check = ({label,price, checked, onPress, subTitle}) => {
  return (
    <Container>
        <LeftContainer>
            <Checkbox
            value={checked} 
            status={checked === true ? "checked" : "unchecked" }
            onPress={onPress}
            uncheckedColor='blue'
            />
            <LeftCont>
                {label&& (
                    <Label>{label}</Label>

                )}
                {subTitle && (
                    <Text color="grey" > US${price}  {subTitle} </Text>

                )}

            </LeftCont>
        </LeftContainer>
        <RightContainer>
            {subTitle && price ? "" : price ? <Price>US${price} ea</Price> : ""}
        </RightContainer>

    </Container>
  )
}

export default Check
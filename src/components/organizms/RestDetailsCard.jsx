import styled from "styled-components/native";
import { View,Text, Image } from "react-native";
import Button from "../atoms/Button";

const Container = styled.Pressable`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width: 100%;
height: 102px;
margin-bottom: 10px;
`;

const RightContainer = styled.View`
width: ${({ imgUrl }) => ( imgUrl ? "60%" : "80%") };
`;

const LeftContainer = styled.View`
flex: 1;
display: flex;
align-items: flex-end;
`;


const Title = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #000000;
`;

const SubTitle = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
`;

const Desc = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
`
const img = require("../../../assets/images/pizzaOne.png");

const RestDetailsCard = ({
    title= "Title",
    subtitle = "Subtitle",
    desc = "Desc",
    imgUrl,
    onPress,

}) => {
return (
    <Container onPress={onPress} >
        <RightContainer imgUrl={imgUrl}>
           {title && <Title>{title}</Title>} 
          {subtitle && <SubTitle>{subtitle}</SubTitle>}  
          {desc && (
          <Desc numberOfLines={3} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta corporis vel? Repudiandae ea nulla impedit dolore mollitia alias aliquam!
           </Desc>
           )}  
        </RightContainer>
        <LeftContainer>
            <Image source={imgUrl}/>
        </LeftContainer>
    </Container>
)
}

export default RestDetailsCard;
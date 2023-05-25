import React from "react";
import styled from "styled-components/native";


const Container = styled.Pressable`
width: 258px;
height:45px;
background-color: ${({ light }) => (light ? "#C7DAC5" : "#54924F")};
border-radius: 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 23px;
`;
const Img = styled.Image``;

const Title = styled.Text`
color: ${({ light }) => (light ? "#558370" : "#FFFFFF")};
 font-size: 16px;
`;

const Button = ({title, onPress, light = false,imgUrl, ...othertProps }) => {
      return ( 
<Container onPress={onPress} light={light} {...othertProps}>
<Img source={imgUrl} /> 
<Title light={light}>{title}</Title>
</Container>
   )
}

export default Button;
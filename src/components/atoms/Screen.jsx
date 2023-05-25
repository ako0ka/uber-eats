import React from "react";
import { View, Text, Platform, Dimensions,StatusBar } from "react-native"; 
import styled from "styled-components/native"



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const statusBarHeight = StatusBar.currentHeight;

const MainWrapper = styled.KeyboardAvoidingView`

`;

const ImageBackground = styled.ImageBackground`
height: ${windowHeight}px;
width: ${windowWidth}px;
`

const Container = styled.SafeAreaView`
flex: 1;
padding-right: 22px;
padding-left: 22px;
padding-top: ${Platform.OS === "ios" ? "0" : statusBarHeight}px;
background-color: #ffffff;
`;


const Screen = ({ children, ...otherProps }) => {
    return (
    <MainWrapper 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    
     >
        <ImageBackground >
            <Container {...otherProps} >
     {children}
     </Container>
     </ImageBackground>
    </MainWrapper>
    )
};

export default Screen;



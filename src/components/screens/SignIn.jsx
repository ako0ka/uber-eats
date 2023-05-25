import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styled from "styled-components/native";

import Button from "../atoms/Button";

import Screen from "../atoms/Screen";
import * as  ROUTES from "../constants/routes"
import LoginScreenImage from "../../../assets/images/LoginScreenImage";

const Container = styled(Screen)`
display: flex;
justify-content: center;
align-items: center;
`;

const SignUpContainer = styled.View`
flex: 1;
 display: flex;
 flex-direction:row; 
 align-items: flex-end;  

`;

const ForgotPasswordContainer = styled.View`
display: flex;
flex-direction: row;

`

const SignUpButton = styled.Text`
    color: blue;
    margin-left: 5px;
`;

const Image = styled(LoginScreenImage)`
margin-top: 40px;
margin-bottom: 54px;
`;

const UserName = styled.TextInput`
    background-color: #daece6;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 18px;
    width: 258px;
    padding-left: 10px;
`;

const Password = styled.TextInput`
    background-color: #daece6;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 18px;
    width: 258px;
    padding-left: 10px;
`;





const SignInBtn = styled(Button)``

const GetStartedBtn = styled(Button)`
margin-bottom: 23px;
`;

const SkipBtn = styled(Button)``;


const SignIn = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

return (
<Container> 
<Image style={{ marginTop: 150 }}/>
<UserName
placeholder="Username"
onChange={(e) => setUserName(e.nativeEvent.text)}
value={userName}
/>
<Password 
placeholder="Password"
onChange={(e) => setPassword(e)}
value={password}
/>
<SignInBtn  
title="Sign In"
onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)} 
/>

<ForgotPasswordContainer style={{ marginBottom: 20 }}>
    <Text>Forgot password?</Text>
    <Pressable onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}>
        <SignUpButton>Reset</SignUpButton>
    </Pressable>
    </ForgotPasswordContainer>
<SignUpContainer>
    <Text>Doesnt have accouut?</Text>
<Pressable>
    <SignUpButton>Sign Up</SignUpButton>
</Pressable>
<Text>Not registred yet?</Text>
</SignUpContainer>
</Container>
)
};

export default SignIn;
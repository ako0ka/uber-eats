import { View, Text, Image } from "react-native";
import styled from "styled-components";

import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import RestDetailsCard from "../organizms/RestDetailsCard";
import CtgrBtn from "../atoms/CtgrBtn";
import * as ROUTES from "../../components/constants/routes"




const Container = styled.ScrollView`
    padding: 20px;
`

const HeaderContainer = styled.View``

const RestTitle = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
`;

const InfoContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;

const RestInfo = styled.Text``;

const ratingImage = require("../../../assets/images/Rating.png")

const SectionTitle = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
margin-bottom: 18px;
color: #000000;

`;
const SectionContainer = styled.View``;

const OptionBar = styled.View`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;


const GroupBtn = styled(Button)``;

const groupImg = require("../../../assets/images/Group.png")

const data = {
    
    restaurant:{
        name: "Lanespan Pizza $ Pub",
        category: "Pizza",
        rating: "4.6",
        ratingQuantity: 300,
        workingHours: "Open until 3:00 AM",

    },
    mostPopular: [
        {
            title: "McMushroom Pizza",
            price: "21.00",
            desc: "Some random description for restaurant",
            imgUrl: require("../../../assets/images/pizzaOne.png"),

    },
    {
        title: "Magic Mushroom",
        price: "21.00",
        desc: "Some random description for restaurant",
        imgUrl: require("../../../assets/images/pizzaOne.png"),

},
{
    title: "Super Pizza",
    price: "21.00",
    desc: "Some random description for restaurant",
    imgUrl: require("../../../assets/images/pizzaOne.png"),

},
],
pickedForYou: [
    {
        id: 1,
        title: "McMushroom Pizza",
        price: "21.00",
        desc: "Some random description for restaurant",   
    },
    {
        id: 2,
        title: "McMushroom Pizza",
        price: "21.00",
        desc: "Some random description for restaurant",   
    },
    {
        id: 3,
        title: "McMushroom Pizza",
        price: "21.00",
        desc: "Some random description for restaurant",   
    },
    
],
ourSpecialPizza: [
    {
        id: 1,
        title: "McMushroom Pizza",
        price: "21.00",
        desc: "Some random description for restaurant",   
    },
    {
        id: 2,
        title: "McMushroom Pizza",
        price: "21.00",
        desc: "Some random description for restaurant",   
    },
    {
        id: 3,
        title: "McMushroom Pizza",
        price: "21.00",
        desc: "Some random description for restaurant",   
    },
    
]
}

const RestaurantDetails = ({
     route,
      navigation,
    }) => {
    const rest = data.restaurant;

    const calcRating = (num) => {
        if (num > 200) {
            return "200+ Rating";
         }else {
            return num;
         }
    }
    return (
       <Container>
        <HeaderContainer>
            <RestTitle>{rest.name}</RestTitle>
            <InfoContainer>
                <View style={{ marginRight: 3}} >
                    <Image source={ratingImage} />
                </View>
                <RestInfo>
                    {rest.rating}
                ({calcRating(rest.ratingQuantity)}) / {rest.category}/$$
                </RestInfo>
            </InfoContainer>
            <Text>{rest.workingHours}</Text>
        </HeaderContainer>
 
        <View style={{ height: 150 }}> 
</View>
        {/* <OptionBar>
        <View>
            <Text>DELIVER</Text>
            <Text>20-35 min 1.7ml</Text>
            </View>
            <View>
            <Text>PICKUP</Text>
            <Text>5-15 min 1.7ml</Text>
            </View>

       
        </OptionBar> */}
        <SectionContainer>
            <SectionTitle>Most Popular</SectionTitle>
            {data.mostPopular.map((item, idx) => {
                return (
                    <RestDetailsCard
                    key={idx}
                    title={item.title}
                    subtitle={item.price}
                    desc={item.desc}
                    imgUrl={item.imgUrl}
                    onPress={() => navigation.navigate(ROUTES.ORDER_DETAILS, { ...item, restaurantName: rest.name } )}
                    />
                )
            })}
        </SectionContainer>
        <SectionContainer>
            <SectionTitle>Picked for You</SectionTitle>
            {data.pickedForYou.map((item, idx) => {
                return (
                    <RestDetailsCard
                    key={idx}
                    title={item.title}
                    subtitle={item.price}
                    desc={item.desc}
                    />
                )
            })}
        </SectionContainer>
        <SectionContainer>
            <SectionTitle>Our Special Pizza</SectionTitle>
            {data.ourSpecialPizza.map((item, idx) => {
                return (
                    <RestDetailsCard
                    key={idx}
                    title={item.title}
                    subtitle={item.price}
                    desc={item.desc}
                    />
                )
            })}
        </SectionContainer>
       </Container>
    )
}

export default RestaurantDetails;
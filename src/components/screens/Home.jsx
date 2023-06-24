import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Portal } from "react-native-portalize";
import React, { useEffect, useState, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";

import MainCard from "../organizms/MainCard";
import styled from "styled-components/native";
import CtgrBtn from "../atoms/CtgrBtn";
import Screen from "../atoms/Screen";
import * as ROUTES from "../../components/constants/routes";
import BottomSheet from "../atoms/BottomSheet";
import Button from "../atoms/Button";
import CategoryCard from "../atoms/CategoryCard";
import { Shop } from "../../userProvider";

const ctgrListItems = [
  {
    id: 0,
    title: "Convenience",
    imgUrl: require("../../../assets/images/pic1.png"),
  },
  {
    id: 1,
    title: "Alcohol",
    imgUrl: require("../../../assets/images/pic2.png"),
  },
  {
    id: 2,
    title: "Pet Supplies",
    imgUrl: require("../../../assets/images/pic3.png"),
  },
  {
    id: 3,
    title: "Flowers",
    imgUrl: require("../../../assets/images/pic4.png"),
  },
  {
    id: 4,
    title: "Grocery",
    imgUrl: require("../../../assets/images/pic5.png"),
  },
  {
    id: 5,
    title: "American",
    imgUrl: require("../../../assets/images/pic6.png"),
  },
  {
    id: 6,
    title: "Speciality",
    imgUrl: require("../../../assets/images/pic7.png"),
  },
  {
    id: 7,
    title: "Takeout",
    imgUrl: require("../../../assets/images/pic8.png"),
  },
  {
    id: 8,
    title: "Asian",
    imgUrl: require("../../../assets/images/pic9.png"),
  },
  {
    id: 9,
    title: "Ice Cream",
    imgUrl: require("../../../assets/images/pic10.png"),
  },
  {
    id: 10,
    title: "Convenience",
    imgUrl: require("../../../assets/images/pic1.png"),
  },
  {
    id: 11,
    title: "Halal",
    imgUrl: require("../../../assets/images/pic11.png"),
  },
  {
    id: 12,
    title: "Retails",
    imgUrl: require("../../../assets/images/pic12.png"),
  },
  {
    id: 13,
    title: "Carribean",
    imgUrl: require("../../../assets/images/pic13.png"),
  },
  {
    id: 14,
    title: "Indian",
    imgUrl: require("../../../assets/images/pic14.png"),
  },
  {
    id: 15,
    title: "French",
    imgUrl: require("../../../assets/images/pic15.png"),
  },
  {
    id: 16,
    title: "Fast Foods",
    imgUrl: require("../../../assets/images/pic16.png"),
  },
  {
    id: 17,
    title: "Burger",
    imgUrl: require("../../../assets/images/pic17.png"),
  },
  {
    id: 18,
    title: "Ride",
    imgUrl: require("../../../assets/images/pic18.png"),
  },
  {
    id: 19,
    title: "Chinese",
    imgUrl: require("../../../assets/images/pic19.png"),
  },
  {
    id: 20,
    title: "Dessert",
    imgUrl: require("../../../assets/images/pic20.png"),
  },
];

let data = { object: [ctgrListItems] };

const getData = () => [...data.object];

const deliveryList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "DELIVERY",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: false,
    promQuantity: null,
    promPrice: null,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "DELIVERY",
    price: "0.35",
    deliveryTime: "15-45",
    rating: 4.2,
    promotion: true,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 2,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
  },
  {
    id: 3,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
  },
  {
    id: 4,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
  },
];

const pickupList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "PICK UP",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: false,
    promQuantity: null,
    promPrice: null,
    distance: 5.4,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "Ice PICK UP",
    price: "0.35",
    deliveryTime: "15-45",
    rating: 4.2,
    promotion: true,
    promQuantity: 5,
    promPrice: 8,
    distance: 3.4,
  },
  {
    id: 2,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
    distance: 2.7,
  },
  {
    id: 3,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
    distance: 3.2,
  },
  {
    id: 4,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
    distance: 4.4,
  },
];

const dineInList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "DINE IN",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promotion: false,
    promQuantity: null,
    promPrice: null,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "DINE IN",
    price: "0.35",
    deliveryTime: "15-45",
    rating: 4.2,
    promotion: true,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 2,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
  },
  {
    id: 3,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
  },
  {
    id: 4,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "African Flavour",
    price: "2.29",
    deliveryTime: "20-50",
    rating: 4.1,
    promotion: true,
    promQuantity: 10,
    promPrice: 14,
  },
];

const RenderComponent = ({ firstName, lastName }) => {
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

const InnerContainer = styled.View``;

const CategoryBtn = styled(CtgrBtn)`
  margin-right: 15px;
`;

const Container = styled(Screen)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 0 20px;
  background-color: "#FFFFFF";
`;

const HeaderComponent = () => {
  return <View style={{ height: 300 }}></View>;
};

const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 23px;
`;

const SortContainer = styled.View``;

const SortBottomContainer = styled.View`
  height: 25px;
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center;
`;

const Location = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;

const CtgrBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;
const Title = styled.Text`
  font-size: 24px;
  text-align: center;
`;

function Home({ navigation }) {
  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);

  const categorySheetRef = useRef();
  let shopItems = Shop();

  const fetchData = () => {
    if (ctgr === 0) {
      setData(deliveryList);
    } else if (ctgr === 1) {
      setData(pickupList);
    } else {
      setData(dineInList);
    }
  };

  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  });

  const renderItem = (item) => (
    <CategoryBtn
      title={item.title}
      imgUrl={item.imgUrl}
      onPress={() => console.log(item.title)}
    />
  );

  return (
    <Container>
      <InnerContainer>
        <SortContainer>
          <SortTopContainer>
            {btns.map((item, idx) => {
              return (
                <CategoryBtn
                  key={idx}
                  title={item.title}
                  onPress={() => handlePress(item.value)}
                  light={item.value === ctgr ? true : false}
                />
              );
            })}
            <Location>{shopItems.length}</Location>
            <AntDesign name="shoppingcart" size={30} color="black" />
          </SortTopContainer>

          <SortBottomContainer>
            <Location>NEW LONDON</Location>
          </SortBottomContainer>

          <CtgrBtnWrapper>
            <CategoryCard
              title={ctgrListItems[0].title}
              imgUrl={ctgrListItems[0].imgUrl}
            />
            <CategoryCard
              title={ctgrListItems[1].title}
              imgUrl={ctgrListItems[1].imgUrl}
            />
            <CategoryCard
              title={ctgrListItems[2].title}
              imgUrl={ctgrListItems[2].imgUrl}
            />
            <CategoryCard
              title="More"
              imgUrl={require("../../../assets/images/dot.png")}
              onPress={() => categorySheetRef.current.open()}
            />
          </CtgrBtnWrapper>
        </SortContainer>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              distance={ctgr === 1 ? item.distance : ""}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              promQuantity={item.promQuantity}
              promPrice={item.promPrice}
              onPress={() =>
                navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </InnerContainer>

      <Portal>
        <BottomSheet
          bottomSheetRef={categorySheetRef}
          modalHeight={500}
          flatListprops={{
            data: getData(),
            renderItem: renderItem,
            keyExtractor: (item) => item.id,
            showsVerticalScrollIndicator: false,
          }}
        >
          {/* <FlatList
            data={ctgrListItems}
            renderItem={({ item }) => (
              <CategoryBtn
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
              />
            )}
            horizontal={false}
            numColumns={4}
            keyExtractor={(item) => item.id}
          />
          <Title>Header</Title> */}

          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              height: 700,
              paddingTop: 30,
              paddingHorizontal: 15,
            }}
          >
            {ctgrListItems.map((item) => {
              return (
                <CategoryCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  onPress={() => console.log(item.title)}
                  key={item.id}
                  withMarginBottom
                />
              );
            })}
          </View>
        </BottomSheet>
      </Portal>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: "red",
    marginBottom: 5,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;

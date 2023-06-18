import * as ROUTES from "../constants/routes";

export const offerList = [
  {
    id: 0,
    title: "Breakfast  brunch",
    imgUrl: require("../../../assets/images/browse/CategoryImage.png"),
  },
  {
    id: 1,
    title: "Cofee & Tea",
    imgUrl: require("../../../assets/images/browse/CategoryImage-1.png"),
  },
  {
    id: 2,
    title: "Deals",
    imgUrl: require("../../../assets/images/browse/CategoryImage-2.png"),
    // handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { num: 1 }),
    routeName: ROUTES.DEALS_SCREEN,
    type: 1,
  },
  {
    id: 3,
    title: "Restautant Rewards",
    imgUrl: require("../../../assets/images/browse/CategoryImage-3.png"),
    // handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { num: 2 }),
    routeName: ROUTES.DEALS_SCREEN,
    type: 2,
  },
  {
    id: 4,
    title: "Best overall",
    imgUrl: require("../../../assets/images/browse/CategoryImage-4.png"),
  },
  {
    id: 5,
    title: "Shipped free",
    imgUrl: require("../../../assets/images/browse/CategoryImage-5.png"),
  },
];

export const browseList = [
  {
    id: 0,
    title: "Mexican",
    imgUrl: require("../../../assets/images/browse/CategoryImage-6.png"),
  },
  {
    id: 1,
    title: "Fast Food",
    imgUrl: require("../../../assets/images/browse/CategoryImage-7.png"),
  },
  {
    id: 2,
    title: "Healthy",
    imgUrl: require("../../../assets/images/browse/CategoryImage-8.png"),
  },
  {
    id: 3,
    title: "Pizza",
    imgUrl: require("../../../assets/images/browse/CategoryImage-9.png"),
  },
  {
    id: 4,
    title: "Asian",
    imgUrl: require("../../../assets/images/browse/CategoryImage-10.png"),
  },
  {
    id: 5,
    title: "Bakery",
    imgUrl: require("../../../assets/images/browse/CategoryImage-11.png"),
  },
  {
    id: 6,
    title: "Sandwich",
    imgUrl: require("../../../assets/images/browse/CategoryImage-12.png"),
  },
  {
    id: 7,
    title: "Sushi",
    imgUrl: require("../../../assets/images/browse/CategoryImage-13.png"),
  },
  {
    id: 8,
    title: "Korean",
    imgUrl: require("../../../assets/images/browse/CategoryImage-14.png"),
  },
  {
    id: 9,
    title: "Vietnamese",
    imgUrl: require("../../../assets/images/browse/CategoryImage-15.png"),
  },
  {
    id: 10,
    title: "Vegan",
    imgUrl: require("../../../assets/images/browse/CategoryImage-16.png"),
  },
  {
    id: 11,
    title: " Bubble Tea ",
    imgUrl: require("../../../assets/images/browse/CategoryImage-17.png"),
  },
  {
    id: 12,
    title: " Juice & Smoothies ",
    imgUrl: require("../../../assets/images/browse/CategoryImage-18.png"),
  },
];

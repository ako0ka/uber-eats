import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Button from "../src/components/atoms/Button";

import * as ROUTES from "../src/components/constants/routes";

import SignIn from "../src/components/screens/SignIn";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import SettingsDetails from "../src/components/screens/SettingDetails";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../src/components/screens/RestaurantDetails";

import { Host } from "react-native-portalize";
import Deals from "../src/components/screens/Deals";
import BackIcon from "../assets/icons/BackIcon";
import OrderDetails from "../src/components/screens/OrderDetails";
import TrackOrderMap from "../src/components/screens/TrackOrderMap";
import Grocery from "../src/components/screens/Grocery";
import Store from "../src/components/screens/Store";
import Categories from "../src/components/screens/Categories";
import Delivered from "../src/components/screens/Delivered";
import ItemDetails from "../src/components/screens/ItemDetails";
import { TransitioningView } from "react-native-reanimated";
import TrackOrder from "../src/components/screens/TrackOrder";
import DeliveryDetails from "../src/components/screens/DeliveryDetails";
import Note from "../src/components/screens/Note";
import Registration from "../src/components/screens/Registration";

const Stack = createNativeStackNavigator();

function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "centre", justifyContent: "center" }}>
      <Text>Shop Screen</Text>
      <Button title="Go Back" light onPress={() => navigation.goBack()} />
      <Button
        title="FINISH SHOP"
        light
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const AuthNavigator = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator
          headerBackImage={() => <BackIcon />}
          headerBackTitle={false}
        >
          <Stack.Screen
            name={ROUTES.SIGN_IN_SCREEN}
            component={SignIn}
            options={{ title: "Sign in", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPassword}
            options={{ title: "Forgot Password", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUp}
            options={{ title: "Sign Up", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SETTINGS_DETAILS}
            component={SettingsDetails}
            options={{
              title: "SettingDetails",
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.REST_DETAILS}
            component={RestaurantDetails}
            options={{
              title: "Restaurant",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_DETAILS}
            component={OrderDetails}
            options={{
              title: "Order Details",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{
              title: "Deals",
              headerShown: true,
            }}
          />

          <Stack.Screen
            name={ROUTES.GROCERY_SCREEN}
            component={Grocery}
            options={{
              title: "Grocery",
              headerShown: false,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.STORE_SCREEN}
            component={Store}
            options={{
              title: "Store",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.CATEGORIES_SCREEN}
            component={Categories}
            options={{
              title: "Categories",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.ITEM_DETAILS_SCREEN}
            component={ItemDetails}
            options={{
              title: "ItemDetails",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERED_SCREEN}
            component={Delivered}
            options={{
              title: "Delivered",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERY_DETAILS_SCREEN}
            component={DeliveryDetails}
            options={{
              title: "DeliveryDetails",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.NOTE_SCREEN}
            component={Note}
            options={{
              title: "Note",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          {/* <Stack.Screen
            name={ROUTES.TRACK_ORDER_MAP}
            component={TrackOrderMap}
            options={{
              title: "TrackOrderMap",
              headerShown: true,
              headerBackVisible: true,
            }}
          /> */}
          <Stack.Screen
            name={ROUTES.TRACK_ORDER_SCREEN}
            component={TrackOrder}
            options={{
              title: "TrackOrder",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name={ROUTES.REGISTRATION_SCREEN}
            component={Registration}
            options={{
              title: "Registration",
              headerShown: true,
              headerBackVisible: true,
            }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AuthNavigator;

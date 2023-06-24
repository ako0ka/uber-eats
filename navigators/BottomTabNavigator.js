import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";

import Home from "../src/components/screens/Home";
import Settings from "../src/components/screens/Settings";
import ShopScreen from "../src/components/screens/ShopScreen";
import Browse from "../src/components/screens/Browse";
import * as ROUTES from "../src/components/constants/routes";
import SettingsNavigator from "./SettingsNavigator";
import Grocery from "../src/components/screens/Grocery";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "shopping" : "shopping-outline";

            return (
              <MaterialCommunityIcons name={icon} size={size} color={color} />
            );
          }
          return <Ionicons name={icon} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{
          title: "Browse",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{ title: "Grocery" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={ShopScreen}
        options={{ title: "Shop" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

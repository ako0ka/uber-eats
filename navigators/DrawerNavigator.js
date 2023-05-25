import Home from '../src/components/screens/Home'; 
import Settings from '../src/components/screens/Settings';
import BottomTabNavigator from './BottomTabNavigator';
import Browse from '../src/components/screens/Browse';
import ShopScreen from '../src/components/screens/ShopScreen';
import * as ROUTES from "../src/components/constants/routes"
import * as COLORS from "../src/components/constants/colors"

import { Dimensions } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../src/components/organizms/DrawerContent';


const window = Dimensions.get("screen")

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const renderConent = (props) => <DrawerContent {...props} />;
  return (
    <Drawer.Navigator 
    screenOptions={{ headerShown: false }}
    drawerContent={renderConent}
    drawerStyle={{
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      width: window - 60,
    }} 
    >
      <Drawer.Screen 
          name={ROUTES.BOTTOM_TAB_NAV}
          component={BottomTabNavigator}
          options={{ title: "Home", }} 
          />
      
      <Drawer.Screen 
      name={ROUTES.BROWSE_SCREEN} 
      component={Browse} 
      options={{ title: "Browse"}} 
      />

      <Drawer.Screen 
      name={ROUTES.SHOP_SCREEN} 
      component={ShopScreen} 
      options={{ title: "Shop"}} 
      />

      <Drawer.Screen 
      name={ROUTES.SETTINGS_NAVIGATOR} 
      component={Settings} 
      options={{ title: "Settings"}} 
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
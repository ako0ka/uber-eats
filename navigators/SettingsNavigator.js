import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsDetails from '../src/components/screens/SettingDetails';
import Settings from '../src/components/screens/Settings';

import * as ROUTES from "../src/components/constants/routes"

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundcolor: "red",
      }
    }} >
      <Stack.Screen 
      name={ROUTES.SETTINGS_SCREEN} 
      component={Settings} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name={ROUTES.SETTINGS_DETAILS} 
      component={SettingsDetails} 
      options={{ title: "SettingDetails"}} 
      />
     
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
import AuthNavigator from "./navigators/AuthNavigator";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("./assets/fonts/UberMoveTextBold.otf"),
    "Uber-Medium": require("./assets/fonts/UberMoveTextMedium.otf"),
    "Uber-Light": require("./assets/fonts/UberMoveTextLight.otf"),
    "Uber-Regular": require("./assets/fonts/UberMoveTextRegular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (fontsLoaded) onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <AuthNavigator />
    </PaperProvider>
  );
}

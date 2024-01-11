import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import {
  useFonts,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
// import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";
import amplifyconfig from "@/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import { ThemeProvider, Theme } from "@aws-amplify/ui-react-native";
const theme: Theme = {
  tokens: {
    colors: {
      font: {
        primary: "{colors.pink.100}",
        secondary: "{colors.pink.90}",
        tertiary: "{colors.pink.80}",
      },
      background: {
        primary: "{colors.purple.10}",
        secondary: "{colors.purple.20}",
        tertiary: "{colors.purple.40}",
      },
      border: {
        primary: "{colors.pink.60}",
        secondary: "{colors.pink.40}",
        tertiary: "{colors.pink.20}",
      },
    },
  },
};
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;

  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }
  return (
    <Authenticator.Provider>
      <Authenticator>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Animated.View style={{ flex: 1 }} entering={FadeIn}>
              <Stack screenOptions={{}}>
                <Stack.Screen
                  name="index"
                  options={{
                    title: "DEVember",
                  }}
                />
              </Stack>
            </Animated.View>
          </GestureHandlerRootView>
        </ThemeProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}

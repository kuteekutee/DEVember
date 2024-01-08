import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

import * as Location from "expo-location";
import ForecastItem from "@/components/day8/ForecastItem";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
const bgImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg";

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};
type Weather = {
  name: string;
  main: MainWeather;
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
};

export type WeatherForecast = {
  dt: number;
  main: MainWeather;
};

const WeatherScreen = () => {
  const [weather, setWeather] = useState<Weather>();
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    if (location) {
      fetchWeather();
      fetchForecast();
    }
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log("Location: ", location);
      setLocation(location);
    })();
  }, []);

  const fetchWeather = async () => {
    if (!location) {
      return;
    }
    console.log("fetch data");
    // console.log(OPEN_WEATHER_KEY);
    // const lat = location?.coords.latitude; // 1.3473368;
    // const lon = location?.coords.longitude; //103.9478215;
    // console.log(
    //   `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    // );
    const results = await fetch(
      `${BASE_URL}/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
    const data = await results.json();
    // console.log(JSON.stringify(data, null, 2));
    setWeather(data);
  };

  const fetchForecast = async () => {
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    if (!location) {
      return;
    }
    console.log("fetch 5 day / 3 hour forecast data");

    const results = await fetch(
      `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );

    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setForecast(data.list);
  };

  if (!weather) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={{
        uri: bgImage,
      }}
      style={styles.container}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          style={{ width: 200, aspectRatio: 1 }}
          source={
            weather.weather[0].main === "Rain"
              ? require("@assets/lottie/rain.json")
              : require("@assets/lottie/sunny.json")
          }
          loop
          autoPlay
        />
        <Text style={styles.location}>{weather.name}</Text>
        <Text style={styles.temp}>{weather.main.temp}℃</Text>
        <Text style={styles.location}>{weather.weather[0].main}</Text>
      </View>

      <FlatList
        data={forecast}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 0,
          height: 150,
          marginBottom: 40,
        }}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        renderItem={({ item }) => <ForecastItem forecast={item} />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontFamily: "InterSemi",
    fontSize: 30,
    color: "lightgray",
  },
  temp: {
    fontFamily: "InterBlack",
    fontSize: 70,
    color: "#fefefe",
  },
});

export default WeatherScreen;

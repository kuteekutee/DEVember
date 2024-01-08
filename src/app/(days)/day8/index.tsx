import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Weather app
Fetch weather data and display it
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day8/weather" asChild>
        <Button title="Go to Weather" />
      </Link>

      <Stack.Screen options={{ title: "Day 8: Weather " }} />
    </View>
  );
};

export default DayDetailsScreen;

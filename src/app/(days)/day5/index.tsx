import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# AirBNB Maps
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day5/airbnb" asChild>
        <Button title="Go to AirBNB Map" />
      </Link>

      <Stack.Screen options={{ title: "Day 5: Maps" }} />
    </View>
  );
};

export default DayDetailsScreen;

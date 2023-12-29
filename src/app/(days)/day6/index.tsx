import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Tinder Swipe Animation

Let's build the Tinder Swipe Animation in React Native using Reanimated
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day6/tinder" asChild>
        <Button title="Go to Tinder Screen" />
      </Link>

      <Stack.Screen options={{ title: "Day 6: Tinder" }} />
    </View>
  );
};

export default DayDetailsScreen;

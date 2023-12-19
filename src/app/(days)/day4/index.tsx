import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `# Animated splash screen
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day4/animation" asChild>
        <Button title="Go to animation" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="Splash screen animation" />
      </Link>
      <Stack.Screen options={{ title: "Day 4: Splash Screen" }} />
    </View>
  );
};

export default DayDetailsScreen;

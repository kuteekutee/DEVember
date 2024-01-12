import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Biometrics
Use FaceID and Fingerprint to unlock the next screen
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 10: Biometrics " }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day10/protected" asChild>
        <Button title="Go to Protected App" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;

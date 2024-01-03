import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Voice Memos
Work with the microphone and Audio playback
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day7/memos" asChild>
        <Button title="Go to Memos" />
      </Link>

      <Stack.Screen options={{ title: "Day 7: Voice Memos" }} />
    </View>
  );
};

export default DayDetailsScreen;

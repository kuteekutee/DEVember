import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Authentication
AWS Amplify v6 Authentication
`;

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 9: Auth " }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day9/protected" asChild>
        <Button title="Go to Protected Page" />
      </Link>

      <Link href="/day9/auth/sign-in" asChild>
        <Button title="Sign in" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;

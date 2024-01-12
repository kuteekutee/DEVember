import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import { Link } from "expo-router";

const SecondProtectedScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontFamily: "Inter", fontSize: 20, marginBottom: 20 }}>
        More protected Info
      </Text>
      <FontAwesome5 name="lock" size={75} color="gray" />

      <Link href={"/day10/protected/index"}>Prev page</Link>
    </View>
  );
};

export default SecondProtectedScreen;

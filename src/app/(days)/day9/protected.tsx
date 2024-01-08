import { View, Text } from "react-native";
import React from "react";

const ProtectedScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello there</Text>
      <Text style={{ fontFamily: "InterSemi", fontSize: 20 }}>
        You should on be able to see this page only if you have been
        authenticated!
      </Text>
    </View>
  );
};

export default ProtectedScreen;

//  AWS Access Key - AKIARNTMA2LLKBM5SV5S
// Access Key - Secret access key - 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

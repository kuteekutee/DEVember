// import { signOut } from "aws-amplify/auth";
import { View, Text, Button } from "react-native";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const ProtectedScreen = () => {
  const { signOut } = useAuthenticator();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  // function SignOutButton() {
  //   const { signOut } = useAuthenticator();
  //   return <Button title="Sign out" onPress={signOut} />;
  // }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello there</Text>
      <Text style={{ fontFamily: "InterSemi", fontSize: 20 }}>
        You should on be able to see this page only if you have been
        authenticated!
      </Text>

      <Button title="Sign out" onPress={handleSignOut} />

      {/* <SignOutButton /> */}
    </View>
  );
};

export default ProtectedScreen;

//  AWS Access Key - AKIARNTMA2LLKBM5SV5S
// Access Key - Secret access key - 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

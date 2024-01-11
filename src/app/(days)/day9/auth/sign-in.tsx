import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignInPressed = async () => {
    setError("");
    try {
      const { isSignedIn } = await signIn({
        username: email,
        password: password,
      });
      // console.log(isSignedIn);
      if (isSignedIn) {
        router.push("/(days)/day9/protected");
      }
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder="jon@acme.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Sign in" onPress={onSignInPressed} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <Link href="/day9/auth/sign-up">New here? Sign up</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontFamily: "InterSemi",
    fontSize: 24,
    color: "dimgray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default SignIn;

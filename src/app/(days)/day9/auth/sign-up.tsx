import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signUp } from "aws-amplify/auth";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignUpPressed = async () => {
    setError("");
    try {
      await signUp({
        username: email,
        password: password,
        options: {
          userAttributes: {},
          autoSignIn: true,
        },
      });
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account (Sign up)</Text>
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

      <Button title="Sign up" onPress={onSignUpPressed} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <Link href="/day9/auth/sign-in">Have an account? Sign In</Link>
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

export default SignUp;

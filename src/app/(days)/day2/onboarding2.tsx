import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <FontAwesome5 style={styles.image} name="left" size={100} color="#cef202" />
        <View style={styles.footer}>
          <Text style={styles.title}>Save better</Text>
          <Text style={styles.description}>Monitor your spending and contribution, ensuring every penny aligns with your family.</Text>
          <View style={styles.buttonsRow}>
            <Text style={styles.buttonText}>Skip</Text>
            <Pressable style={styles.button} >
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    margin: 20,
  },
  title: {
    color: '#fdfdfd',
    fontSize: 50,
    fontFamily: 'InterBlack',
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: 'gray',
    fontSize: 20,
    fontFamily: 'Inter',
    lineHeight: 28,
  },
  footer: {
    marginTop: 'auto',
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#302e38',
    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#fdfdfd',
    fontFamily: 'InterSemi',
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },

})
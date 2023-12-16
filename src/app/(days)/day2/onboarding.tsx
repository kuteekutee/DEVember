import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { useState } from 'react'
import { Stack, router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, { FadeIn, FadeOut, SlideInLeft, SlideInRight, SlideOutLeft, SlideOutRight } from 'react-native-reanimated';

const onboardingSteps = [
  {
    icon: 'snowflake',
    title: 'Welcome #DEVember',
    description: 'Daily React Native tutorials during December'
  },
  {
    icon: 'react',
    title: 'Learn and grow together',
    description: 'Learn by building 24 projects with React Native and Expo'
  },
  {
    icon: 'child',
    title: 'Education for children',
    description: 'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to children'
  },
]
export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0)
  const data = onboardingSteps[screenIndex]

  const onLeft = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1
    if (isLastScreen) {
      endOnboarding()
    }
    else {
      setScreenIndex(screenIndex + 1)
    }
  }

  const onRight = () => {
    const isFirstScreen = screenIndex === 0
    if (isFirstScreen) {
      endOnboarding()
    }
    else {
      setScreenIndex(screenIndex - 1)
    }
  }

  const endOnboarding = () => {
    setScreenIndex(0)
    router.back()
  }

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onLeft),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onRight)
  )

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style='dark' />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              { backgroundColor: index == screenIndex ? '#cef202' : 'gray' },
            ]}
          ></View>
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View
          style={styles.pageContent}
          key={screenIndex}
        >
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5 style={styles.image} name={data.icon} size={100} color="#cef202" />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(150)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>
              <Pressable onPress={onLeft} style={styles.button} >
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',
    marginTop: 25,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    margin: 20,
    marginTop: 70,
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
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 25,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: 'gray',
    borderRadius: 10,
  }
})
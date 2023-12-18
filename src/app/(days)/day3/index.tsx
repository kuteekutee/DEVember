import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const description = `
# Markdown
Integrate Markdown content in **React Native**

📚 Today's Agenda
- Intro to Markdown
- Markdown Syntax Overview
- Setting up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`

const DayDetailsScreen = () => {
  return (
    <View style={{ flex: 1}}>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
      
      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
      <MarkdownDisplay>{description}</MarkdownDisplay>
    </View>
  )
}

export default DayDetailsScreen 
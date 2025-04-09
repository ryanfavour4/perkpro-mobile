import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name='userProfile' options={{ headerShown: false }} />
      <Stack.Screen name='agentKyc' options={{ headerShown: false }} />
    </Stack>
  )
}
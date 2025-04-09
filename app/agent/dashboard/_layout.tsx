import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Dashboardlayout() {
  return (
    <Stack>
        <Stack.Screen name='agentDashboard' options={{headerShown:false}}/>
    </Stack>
  )
}
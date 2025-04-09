import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AgentLayout() {
    return (
        <Stack>
            <Stack.Screen name='dashboard' options={{ headerShown: false, animation:"slide_from_left" }} />
            <Stack.Screen name='agentProfile' options={{ headerShown: false }} />
            <Stack.Screen name='agentProperty' options={{ headerShown: false }} />
        </Stack>
    )
}
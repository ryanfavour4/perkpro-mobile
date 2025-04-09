import React from 'react'
import { Stack } from 'expo-router'

export default function AgentPropertieslayout() {
    return (
        <Stack>
            <Stack.Screen name='manageProperty' options={{ headerShown: false, animation: 'slide_from_left' }} />
            <Stack.Screen name='addProperty' options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name='editProperty' options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        </Stack>
    )
}
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Userlayout() {
    return (
        <Stack>
            <Stack.Screen name="profile" options={{ headerShown: false }} />
            <Stack.Screen name="kyc" options={{ headerShown: false }} />
        </Stack>
    )
}
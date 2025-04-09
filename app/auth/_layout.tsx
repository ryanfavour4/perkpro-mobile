import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" options={{ headerShown: false, animation:'slide_from_bottom' }} />
                <Stack.Screen name="register" options={{ headerShown: false, animation:'slide_from_bottom'  }} />
                <Stack.Screen name="login-landlord" options={{ headerShown: false, animation:'slide_from_bottom'  }} />
                <Stack.Screen name="forgot-password" options={{ headerShown: false, animation:'slide_from_bottom'  }} />


            </Stack>
        </>
    );
}

const styles = StyleSheet.create({});

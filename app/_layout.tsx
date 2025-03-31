import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { ThemeProvider } from "@/contexts/theme";
import AppSplashScreen from "@/components/app-splash-screen";

import "./styles/globals.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [isReady, setIsReady] = useState(false);
    const [loaded] = useFonts({
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    });

    useEffect(() => {
        if (loaded) SplashScreen.hideAsync();
    }, [loaded]);

    // Simulate asset loading (e.g., fonts, images, etc.)
    useEffect(() => {
        async function loadAssets() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading for 2 seconds
            } catch (error) {
                console.warn(error);
            } finally {
                setIsReady(true); // Once assets are loaded, update state
            }
        }

        loadAssets();
    }, []);

    if (!loaded || !isReady) {
        return (
            <ThemeProvider>
                <AppSplashScreen onFinish={() => setIsReady(true)} />
            </ThemeProvider>
        );
    }

    return (
        <>
            <ThemeProvider>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="auth"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="chat/chat-list"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="notifications/notifications"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="property/single-rent-property-details"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="property/single-sale-property-details"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="property/pay-property"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="schedules/schedules"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="search/search"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="search/companies"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="search/results"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="wishlist/wishlist"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </ThemeProvider>
        </>
    );
}


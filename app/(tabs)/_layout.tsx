import { useTheme } from "@/contexts/theme";
import { Ionicons, AntDesign } from "@expo/vector-icons"; // Regular Icons
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.text,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="information-circle"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}


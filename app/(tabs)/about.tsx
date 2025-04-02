import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function About() {
    return (
        <View>
            <SafeAreaView>
                <Text className="dark:text-red-500 text-blue-500 text-4xl">
                    Hello About {Platform.OS}
                </Text>
                <Link href="/auth/login">Login with us</Link>
                <Link href="/">Choose Account</Link>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});

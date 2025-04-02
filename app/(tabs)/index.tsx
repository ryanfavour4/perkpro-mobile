import AppSplashScreen from "@/components/app-splash-screen";
import { useTheme } from "@/contexts/theme";
import { Link } from "expo-router";
import { Image, StyleSheet, Platform, Text, Button } from "react-native";

export default function HomeScreen() {
    const { isDark, colors, toggleTheme } = useTheme();

    return (
        <>
            <AppSplashScreen onFinish={() => null} />
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique illo laborum aut ut nemo eveniet et! Adipisci rerum
                eos iste blanditiis rem ipsam tempore accusantium, repudiandae
                at! Est, non cupiditate.
            </Text>
            <Link href="/auth/login">Login with us</Link>
            <Link href="/">Choose Account</Link>
            <Button title="Click Me!" onPress={toggleTheme} />
        </>
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


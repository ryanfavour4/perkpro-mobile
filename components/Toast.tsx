import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from '@expo/vector-icons/Feather';

type Props = {
    status: "Error" | "Success" | "Warning";
    message: string;
    onClose: () => void;
};

export default function Toast({ status, message, onClose }: Props) {
    const translateY = useRef(new Animated.Value(-50)).current; // Start above screen

    useEffect(() => {
        // Slide in animation
        Animated.timing(translateY, {
            toValue: 10, // Moves down to visible position
            duration: 300,
            useNativeDriver: true,
        }).start();

        // Slide out animation after 4s
        const timer = setTimeout(() => {
            Animated.timing(translateY, {
                toValue: -50, // Moves back up
                duration: 500,
                useNativeDriver: true,
            }).start(() => onClose()); // Call onClose after animation ends
        }, 4000);

        return () => clearTimeout(timer);
    }, [translateY, onClose]);

    return (
        <Animated.View
            style={{
                transform: [{ translateY }, { translateX: -125 }],
                position: "absolute",
                top: 20,
                left: "50%",
                width: 250,
                backgroundColor: "#333",
                padding: 12,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.9,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
                zIndex: 1
            }}
        >
            {status === "Error" && <FontAwesome5 name="times-circle" size={16} color="red" />}
            {status === 'Success' && <Feather name="check-circle" size={16} color="green" />}
            <Text style={{ color: "white", marginLeft: 8 }}>{message}</Text>
        </Animated.View>
    );
}

import { images } from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import Button from "./buttons/button";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/theme";

export default function HomeHouseCards() {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <View className="border p-2 rounded-xl border-primary-100/25 w-56 mx-2">
            <View className="relative">
                <Image
                    className="rounded-lg h-36 w-full"
                    source={images.listingHouse1}
                />
                <Text className="text-sm py-px rounded-full w-fit px-4 bg-light-100 absolute top-1 right-1">
                    2 hours ago
                </Text>
            </View>
            <View className="p-1.5 mt-1.5 flex flex-col gap-3">
                <Text className="font-semibold">Ikoyi, Leki</Text>
                <Text className="text-lg font-semibold">
                    2 Bedroom bungalow
                </Text>
                <View className="flex flex-row gap-3 items-center">
                    <MaterialCommunityIcons
                        name="car-brake-parking"
                        size={24}
                        colors={colors["dark-50"]}
                    />
                    <MaterialCommunityIcons
                        name="tree-outline"
                        size={24}
                        className="text-dark-50"
                        colors={colors["error"]}
                    />
                    <MaterialCommunityIcons
                        name="shield-key-outline"
                        size={24}
                        className="text-dark-50"
                        colors={colors["dark-50"]}
                    />
                    <Ionicons
                        name="sunny-outline"
                        size={24}
                        className="text-dark-50"
                        colors={colors["dark-50"]}
                    />
                </View>
                <Button
                    onPress={() => router.push("/auth/login")}
                    title="Inspect Property"
                />
            </View>
        </View>
    );
}

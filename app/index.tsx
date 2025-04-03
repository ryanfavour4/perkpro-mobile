import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign } from "@expo/vector-icons"; // Regular Icons
import { useTheme } from "@/contexts/theme";
import { Link } from "expo-router";

export default function UserType() {
    const { colors } = useTheme();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-5">
                <View className="flex flex-col gap-10 items-center h-full pt-36">
                    <Image
                        resizeMode="contain"
                        className="w-24 h-24"
                        source={images.logoIcon}
                    />

                    <View className="w-full mt-10 flex flex-col gap-5">
                        <Link href={"/auth/login"} className="w-full flex-row">
                            <View className="rounded-lg overflow-hidden bg-primary-100 flex-row justify-between items-center w-full">
                                <View className="flex text-center mx-auto flex-row items-center justify-center p-6">
                                    <Text className="text-light-100">
                                        Login As Tenant
                                    </Text>
                                </View>
                                <View className="w-20 flex items-center text-center bg-dark-100 p-6 rounded-lg">
                                    <Ionicons
                                        name="chevron-forward"
                                        size={24}
                                        className="text-light-100"
                                        color={colors["light-100"]}
                                    />
                                </View>
                            </View>
                        </Link>
                        {/*  */}
                        <Link
                            href={"/auth/login-landlord"}
                            className="w-full flex-row"
                        >
                            <View className="w-full rounded-lg overflow-hidden bg-dark-100 flex-row justify-between items-center">
                                <View className="flex text-center mx-auto flex-row items-center justify-center p-6">
                                    <Text className="text-light-100">
                                        Login as Landlord/Agent
                                    </Text>
                                </View>
                                <View className="w-20 flex items-center text-center bg-primary-100 p-6 rounded-lg">
                                    <Ionicons
                                        name="chevron-forward"
                                        size={24}
                                        className="text-light-100"
                                        color={colors["light-100"]}
                                    />
                                </View>
                            </View>
                        </Link>
                        {/* -- */}
                        <View className="mt-2">
                            <Text className="mb-1">
                                Don’t have an account with us yet?
                            </Text>
                            <Link
                                className="text-primary-100"
                                href={"/auth/register"}
                            >
                                Register Here
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

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
        <SafeAreaView>
            <View className="px-4">
                <View className="flex flex-col gap-10 items-center h-full pt-28">
                    <Image
                        resizeMode="contain"
                        className="w-24 h-24"
                        source={images.logoIcon}
                    />

                    <View className="w-full mt-28 flex flex-col gap-5">
                        <View className="rounded-lg overflow-hidden bg-primary-100 flex-row justify-between items-center">
                            <View className="flex text-center mx-auto flex-row items-center justify-center p-6">
                                <Text className="text-light-100 text-xl">
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
                        {/*  */}
                        <View className="rounded-lg overflow-hidden bg-dark-100 flex-row justify-between items-center">
                            <View className="flex text-center mx-auto flex-row items-center justify-center p-6">
                                <Text className="text-light-100 text-xl">
                                    Login As Tenant
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
                        {/* -- */}
                        <View className="mt-4">
                            <Text className="text-xl mb-1">
                                Don’t have an account with us yet?
                            </Text>
                            <Link
                                className="text-xl text-primary-100"
                                href={"/"}
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

const styles = StyleSheet.create({});

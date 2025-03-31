import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HeaderTopNavbar from "@/layouts/header-top-navbar";
import { images } from "@/constants/images";
import { useTheme } from "@/contexts/theme";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Notifications = () => {
    const { colors } = useTheme();

    return (
        <>
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Notification" />
            <ScrollView className="px-4 bg-light-100">
                <View className="mt-10 flex-col flex gap-4">
                    {/*  */}
                    <View className="flex overflow-hidden rounded-lg flex-row border-primary-100/25 border-2 px-2 py-2 gap-5">
                        <View className="bg-primary-100 py-6 self-start px-3 w-[20%] rounded-md flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                className="w-10 h-10"
                                source={images.notificationBellIcon}
                                alt="Image"
                            />
                        </View>
                        <View className="border-blue-600 w-[75%]">
                            <Text className="py-2">
                                A property you added to your wishlist has been
                                rented out.{" "}
                                <Link
                                    href={"/wishlist/wishlist"}
                                    className="text-primary-100 font-semibold"
                                >
                                    Click to View
                                </Link>
                            </Text>

                            <View className="flex flex-row gap-2 items-center mt-4 justify-end">
                                <Ionicons
                                    name="time-outline"
                                    size={16}
                                    color={colors.text}
                                />
                                <Text className="text-sm">1 day ago</Text>
                            </View>
                        </View>
                    </View>
                    {/*  */}
                    <View className="flex overflow-hidden rounded-lg flex-row border-primary-100/25 border-2 px-2 py-2 gap-5">
                        <View className="bg-dark-50 py-6 self-start px-3 w-[20%] rounded-md flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                className="w-10 h-10"
                                source={images.chatBubbleIcon}
                                alt="Image"
                            />
                        </View>
                        <View className="border-blue-600 w-[75%]">
                            <Text className="py-2">
                                You have a new message from:{" "}
                                <Link
                                    href={"/chat/chat-list"}
                                    className="text-primary-100 font-semibold"
                                >
                                    Cornerstone Properties.
                                </Link>
                            </Text>

                            <View className="flex flex-row gap-2 items-center mt-4 justify-end">
                                <Ionicons
                                    name="time-outline"
                                    size={16}
                                    color={colors.text}
                                />
                                <Text className="text-sm">1 day ago</Text>
                            </View>
                        </View>
                    </View>
                    {/*  */}
                    <View className="flex overflow-hidden rounded-lg flex-row border-primary-100/25 border-2 px-2 py-2 gap-5">
                        <View className="bg-green-500 py-6 self-start px-3 w-[20%] rounded-md flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                className="w-10 h-10"
                                source={images.bankPillarsDarkIcon}
                                alt="Image"
                            />
                        </View>
                        <View className="border-blue-600 w-[75%]">
                            <Text className="py-2">
                                Your rent Finance application has been approved
                                successfully.{" "}
                                <Link
                                    href={"/"}
                                    className="text-primary-100 font-semibold"
                                >
                                    Click to View
                                </Link>
                            </Text>

                            <View className="flex flex-row gap-2 items-center mt-4 justify-end">
                                <Ionicons
                                    name="time-outline"
                                    size={16}
                                    color={colors.text}
                                />
                                <Text className="text-sm">1 day ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Notifications;

import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HeaderTopNavbar from "@/layouts/header-top-navbar";
import { useTheme } from "@/contexts/theme";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";

const ChatList = () => {
    const { colors } = useTheme();

    return (
        <>
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Manage Chats" />
            <ScrollView className="px-4 bg-light-100">
                <View className="mt-10 flex-col flex gap-4">
                    {/*  */}
                    <View className="flex overflow-hidden rounded-lg flex-row border-primary-100/25 border-2 px-2 py-2 gap-5">
                        <View className="bg-primary-100 py-4 aspect-square self-start px-2 w-[15%] rounded-full flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                className="w-8 h-8"
                                source={images.logoIconWhite}
                                alt="Image"
                            />
                        </View>
                        <View className="border-blue-600 w-[75%]">
                            <Text
                                className="py-2 tr"
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                Hello Peace, Thanks for contacting support, How
                                may i be of help Hello Peace, Thanks for
                                contacting support, How may i be of help
                            </Text>

                            <View className="flex flex-row gap-2 items-center mt-2 justify-end">
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
                        <View className="bg-primary-100 py-4 aspect-square self-start px-2 w-[15%] rounded-full flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                className="w-8 h-8"
                                source={images.logoIconWhite}
                                alt="Image"
                            />
                        </View>
                        <View className="border-blue-600 w-[75%]">
                            <Text
                                className="py-2 tr"
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                Hello Peace, Thanks for contacting support, How
                                may i be of help Hello Peace, Thanks for
                                contacting support, How may i be of help
                            </Text>

                            <View className="flex flex-row gap-2 items-center mt-2 justify-end">
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

export default ChatList;

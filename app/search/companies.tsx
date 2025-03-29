import Button from "@/components/buttons/button";
import { images } from "@/constants/images";
import { useTheme } from "@/contexts/theme";
import HeaderTopNavbar from "@/layouts/header-top-navbar";
import TopNavbar from "@/layouts/top-navbar";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    Pressable,
    TextInput,
} from "react-native";

export default function SearchCompanies() {
    const { colors } = useTheme();
    const [search, setSearch] = useState("");
    const router = useRouter();

    return (
        <>
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Search Companies" />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View className="border bg-white border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3 mb-6">
                        <TextInput
                            placeholder={"Find real estate companies"}
                            className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                            value={search}
                            onChangeText={setSearch}
                        />
                        <AntDesign name="search1" size={24} color="black" />
                    </View>

                    <View>
                        <Text className="text-xl font-semibold mb-6">
                            Featured Companies:
                        </Text>

                        <View className="border-t border-dark-50/25 flex-wrap justify-between py-6 flex flex-row gap-4">
                            <View className="h-32 w-32 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                <Image
                                    className="h-24 w-24 aspect-square"
                                    resizeMode="contain"
                                    source={images.pwanLogo}
                                />
                            </View>
                            <View className="h-32 w-32 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                <Image
                                    className="h-24 w-24 aspect-square"
                                    resizeMode="contain"
                                    source={images.landweyLogo}
                                />
                            </View>
                            <View className="h-32 w-32 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                <Image
                                    className="h-24 w-24 aspect-square"
                                    resizeMode="contain"
                                    source={images.sweetcoysLogo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

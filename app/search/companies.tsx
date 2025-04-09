import { View, Text, Image, TextInput, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { images } from "@/constants/images";
import HeaderTopNavbar from "@/layouts/header-top-navbar";

const { width } = Dimensions.get("window");
const gap = 12; // Adjust gap size as needed
const itemSize = (width - gap * 4) / 3;

export default function SearchCompanies() {
    const [search, setSearch] = useState("");

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Search Companies" />

            {/* Search Input Section */}
            <View className="px-4 bg-light-100">
                <View className="border bg-[#0415FE1F] border-[#0415FE1F] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3 mb-4">
                    <TextInput
                        placeholder="Find real estate companies"
                        className="py-4 text-base flex-1 border-none outline-none"
                        value={search}
                        onChangeText={setSearch}
                    />
                    <AntDesign name="search1" size={20} color="#000000A6" />
                </View>
            </View>

            {/* Scrollable Content */}
            <View className="flex-1">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 16 }}
                >
                    <Text className="text-lg font-[400] mb-4">Featured Companies:</Text>
                    <View className="flex flex-wrap flex-row justify-between">
                        {[images.pwanLogo, images.landweyLogo, images.sweetcoysLogo, images.pwanLogo, images.landweyLogo, images.sweetcoysLogo, images.sweetcoysLogo, images.pwanLogo, images.landweyLogo, images.sweetcoysLogo, images.pwanLogo, images.landweyLogo, images.sweetcoysLogo, images.sweetcoysLogo].map((logo, index) => (
                            <View
                                key={index}
                                style={{ width: itemSize, marginBottom: gap }}
                            >
                                <View className="h-32 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image className="h-24 w-24 aspect-square" resizeMode="contain" source={logo} />
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

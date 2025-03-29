import { useTheme } from "@/contexts/theme";
import TopNavbar from "@/layouts/top-navbar";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import BuySearchForm from "./components/buy-search-form";
import LandSearchForm from "./components/land-search-form";
import RentSearchForm from "./components/rent-search-form";
import ShortletSearchForm from "./components/shortlet-search-form";

export default function PayProperty() {
    const { colors } = useTheme();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Buy");

    const tabs = [
        { name: "Buy", component: <BuySearchForm /> },
        { name: "Land", component: <LandSearchForm /> },
        { name: "Rent", component: <RentSearchForm /> },
        { name: "Shortlet", component: <ShortletSearchForm /> },
    ];

    return (
        <>
            <StatusBar style="dark" />
            <TopNavbar />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View>
                        <Text className="text-xl font-semibold mb-2 text-center">
                            Search for your preferred property
                        </Text>
                    </View>

                    <View className="border border-dark-50/25 px-3 py-3 rounded-md flex flex-col mt-10">
                        <View>
                            {/* Form Tabs */}
                            <View className="border border-dark-50/25 rounded-md flex flex-row mb-6 items-center justify-between overflow-hidden">
                                {tabs.map((tab) => (
                                    <TouchableOpacity
                                        key={tab.name}
                                        onPress={() => setActiveTab(tab.name)}
                                        style={{
                                            paddingVertical: 10,
                                            paddingHorizontal: 20,
                                            borderBottomWidth: 2,
                                            borderBottomColor:
                                                activeTab === tab.name
                                                    ? colors["primary-100"]
                                                    : "transparent",
                                        }}
                                        className={`${
                                            activeTab === tab.name &&
                                            "bg-primary-100/25 font-bold"
                                        }`}
                                    >
                                        <Text
                                            style={{
                                                color:
                                                    activeTab === tab.name
                                                        ? "blue"
                                                        : "gray",
                                            }}
                                        >
                                            {tab.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Render Selected Form */}
                            <View>
                                {
                                    tabs.find((tab) => tab.name === activeTab)
                                        ?.component
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

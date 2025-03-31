import TopNavbar from "@/layouts/top-navbar";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text } from "react-native";
import React from "react";
import WishListCard from "./components/wishlist-card";

const Wishlist = () => {
    return (
        <>
            <StatusBar style="dark" />
            <TopNavbar />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}

                    <View className="py-6 flex flex-col gap-6">
                        <WishListCard />
                        <WishListCard />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Wishlist;

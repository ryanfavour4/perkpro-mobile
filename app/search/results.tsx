import TopNavbar from "@/layouts/top-navbar";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import HouseSearchResultCard from "./components/house-search-result-card";
import { images } from "@/constants/images";

export default function SearchResults() {
    return (
        <>
            <StatusBar style="dark" />
            <TopNavbar />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View>
                        <Text className="text-xl font-semibold mb-6">
                            Search Results:
                        </Text>

                        <View className="py-6 border-t border-dark-50/25 flex flex-col gap-6">
                            <HouseSearchResultCard />
                            <HouseSearchResultCard />
                            <View className="flex flex-1 items-center justify-center">
                                <Image
                                    source={images.nothingFoundGif}
                                    resizeMode="cover"
                                    className="size-56 rounded-lg"
                                />

                                <Text className="text-center">
                                    Sorry, no property fits into your search
                                    request at this time...
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

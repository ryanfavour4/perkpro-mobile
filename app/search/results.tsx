import TopNavbar from "@/layouts/top-navbar";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image } from "react-native";
import HouseSearchResultCard from "./components/house-search-result-card";
import { images } from "@/constants/images";
import React from "react";

export default function SearchResults() {
    const [results, setResults] = React.useState([{id:1}]);
    const [loading, setLoading] = React.useState(false);
    return (
        <>
            <StatusBar style="dark" />
            <TopNavbar />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View>
                        {!loading && <Text className="text-lg font-[600] mb-3">
                            Search Results:
                        </Text>}

                        <View className="py-3 flex flex-col gap-6">
                            {
                                results.length > 0 ? (
                                    results.map((item, index) => (
                                        <>
                                            <HouseSearchResultCard
                                                key={index}
                                            // item={item}
                                            />
                                            <HouseSearchResultCard
                                                key={index}
                                            // item={item}
                                            />
                                        </>
                                    ))
                                ) : loading ? (
                                    <View className="flex flex-1 items-center justify-center">
                                        <Image
                                            source={images.loaderGif}
                                            resizeMode="cover"
                                            className="size-56 rounded-lg"
                                        />
                                    </View>
                                ) : null
                            }
                            {
                                results.length === 0 && !loading && (
                                    <View className="flex flex-1 items-center justify-center">
                                        <Image
                                            source={images.nothingFoundGif}
                                            resizeMode="cover"
                                            className="size-56 rounded-lg"
                                        />

                                        <Text className="text-center">
                                            Sorry, no property fits {`\n`} into your search  {`\n`}
                                            request at this time...
                                        </Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

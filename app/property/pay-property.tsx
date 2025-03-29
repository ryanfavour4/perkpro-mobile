import { images } from "@/constants/images";
import { useTheme } from "@/contexts/theme";
import HeaderTopNavbar from "@/layouts/header-top-navbar";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, Pressable } from "react-native";

export default function PayProperty() {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <>
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Pay for property" />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View>
                        <Text className="text-xl font-semibold mb-2">
                            Summary:
                        </Text>
                        <View className="border border-dashed border-primary-100 py-5 px-4 rounded-lg bg-primary-100/25 flex flex-col gap-3">
                            <View className="flex flex-col gap-2">
                                <Text className="text-sm">
                                    you're about to pay a sum of:
                                </Text>
                                <Text className="text-2xl font-semibold">
                                    $120,254,000.00
                                </Text>
                                <Text className="text-sm">
                                    to: Cornerstone Properties
                                </Text>
                            </View>
                            <View className="border-t border-primary-100 mt-3 w-[100%] flex-1" />
                            <View className="flex flex-col gap-1">
                                <Text className="text-sm">for: </Text>
                                <Text className="text-2xl font-semibold">
                                    3 Bedroom Bungalow
                                </Text>
                                <Text className="text-sm">
                                    in Lekki Phase 1
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="mt-10 flex-col flex gap-4">
                        <View className="flex overflow-hidden rounded-lg flex-row gap-5 items-center border-primary-100/25 border-2">
                            <View className="bg-primary-100 py-2 self-start px-3 rounded-md">
                                <Image
                                    resizeMode="contain"
                                    className="w-12 h-12"
                                    source={images.logoIconWhite}
                                    alt="Image"
                                />
                            </View>
                            <Text className="text-lg font-semibold">
                                Pay with Perkpro
                            </Text>
                        </View>

                        <View className="flex overflow-hidden rounded-lg flex-row gap-5 items-center border-primary-100/25 border-2">
                            <View className="bg-dark-50 py-2 self-start px-3 rounded-md">
                                <Image
                                    resizeMode="contain"
                                    className="w-12 h-12"
                                    source={images.logoIconWhite}
                                    alt="Image"
                                />
                            </View>
                            <Text className="text-lg font-semibold">
                                Pay with Rent{" "}
                                <Text className="text-primary-100">
                                    Finance
                                </Text>
                            </Text>
                        </View>

                        <View className="flex overflow-hidden rounded-lg flex-row gap-5 items-center border-primary-100/25 border-2">
                            <View className="bg-primary-100 py-2 self-start px-3 rounded-md">
                                <Image
                                    resizeMode="contain"
                                    className="w-12 h-12"
                                    source={images.atmCardIcon}
                                    alt="Image"
                                />
                            </View>
                            <Text className="text-lg font-semibold">
                                Pay with Card
                            </Text>
                        </View>

                        <View className="flex overflow-hidden rounded-lg flex-row gap-5 items-center border-primary-100/25 border-2">
                            <View className="bg-primary-100 py-2 self-start px-3 rounded-md">
                                <Image
                                    resizeMode="contain"
                                    className="w-12 h-12"
                                    source={images.bankPillarsIcon}
                                    alt="Image"
                                />
                            </View>
                            <Text className="text-lg font-semibold">
                                Pay with Bank Transfer
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

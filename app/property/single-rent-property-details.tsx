import Button from "@/components/buttons/button";
import { images } from "@/constants/images";
import { useTheme } from "@/contexts/theme";
import TopNavbar from "@/layouts/top-navbar";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

export default function SingleRentPropertyDetailsScreen() {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <>
            <StatusBar style="dark" />
            <TopNavbar />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Hero */}
                    <View className="">
                        <View className="mb-4 bg-primary-100/25 rounded-full self-start m-auto px-4 py-1.5">
                            <Text className="text-sm text-center w-fit">
                                For Rent
                            </Text>
                        </View>

                        <Image
                            className="w-[100%] h-64 shadow border border-dark-50/25 rounded-xl"
                            source={images.listingHouse2}
                        />
                        <View className="mt-8 flex flex-row justify-between">
                            <View>
                                <Text className="text-3xl font-semibold mb-2">
                                    4 Bedroom Duplex
                                </Text>
                                <Text className="">Lekki Ajah, Lagos</Text>
                            </View>
                            <View className="text-right">
                                <Text className="text-right text-xl">
                                    Price
                                </Text>
                                <Text className="my-1.5 text-right text-2xl font-semibold">
                                    ₦150k
                                </Text>
                                <Text className="text-right">Per Night</Text>
                            </View>
                        </View>
                        <View className="border-2 w-[60%] border-dark-50/25 rounded-full mb-4" />

                        {/* Section 1 */}
                        <View>
                            <Text className="text-xl text-primary-100 font-semibold mb-2">
                                Property Description:
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor
                            </Text>
                        </View>

                        {/* Section 2 */}
                        <View className="mt-6 flex flex-row gap-4">
                            <View className="w-1/2">
                                <Text className="text-xl text-primary-100 font-semibold mb-2">
                                    Features:
                                </Text>
                                <View>
                                    <Text className="list-disc">
                                        • Parking Space
                                    </Text>
                                    <Text>• Maximum Security</Text>
                                    <Text>• 24hrs Electricity Electric</Text>
                                    <Text>• Fence Access to</Text>
                                    <Text>• Major Roads etc...</Text>
                                </View>
                            </View>
                            <View className="w-1/2">
                                <Text className="text-xl text-primary-100 font-semibold mb-2">
                                    Map:
                                </Text>
                                <View className="mr-3.5 border-2 border-primary-100 rounded-md overflow-hidden h-36">
                                    <MapComponent />
                                </View>
                            </View>
                        </View>

                        {/* Section 3 */}
                        <View className="mt-6 flex flex-row gap-4">
                            <View className="w-1/2">
                                <Text className="text-xl text-primary-100 font-semibold mb-2">
                                    Rent Package::
                                </Text>
                                <View>
                                    <Text className="list-disc">
                                        • Furnished Apartment
                                    </Text>
                                    <Text>• Personal Balcony</Text>
                                    <Text>• Cross ventilation</Text>
                                    <Text>• AC fitted</Text>
                                    <Text>• POP</Text>
                                    <Text>• Tiled floor finish</Text>
                                </View>
                            </View>
                            <View className="w-1/2">
                                <Text className="text-xl text-primary-100 font-semibold mb-2">
                                    Agent/Landord:
                                </Text>
                                <View>
                                    <Text className="list-disc">
                                        • 20+ happy tenants
                                    </Text>
                                    <Text>• Neutral stance</Text>
                                    <Text>• 21+ properties sold</Text>
                                    <View className="flex flex-row items-center gap-2 mt-2">
                                        <AntDesign
                                            name="star"
                                            size={24}
                                            color="#FFC107"
                                        />
                                        <AntDesign
                                            name="star"
                                            size={24}
                                            color="#FFC107"
                                        />
                                        <AntDesign
                                            name="star"
                                            size={24}
                                            color="#FFC107"
                                        />
                                        <AntDesign
                                            name="star"
                                            size={24}
                                            color="#FFC107"
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Section 4 */}
                        <View className="mt-6">
                            <Text className="text-xl text-primary-100 font-semibold mb-2">
                                Miscellaneous:
                            </Text>
                            <View className="flex items-center flex-row gap-4">
                                <Button
                                    title="Report Property"
                                    className="bg-red-500"
                                />
                                <Button
                                    title="Apply for Rent Finance"
                                    className="bg-primary-100"
                                />
                            </View>
                        </View>

                        {/* Section 5 */}
                        <View className="mt-6 border-t border-dark-50/25 pt-6 pb-10 flex items-center flex-row flex-wrap gap-4">
                            <Button
                                onPress={() =>
                                    router.push("/property/pay-property")
                                }
                                title="Pay for property"
                                className="bg-primary-100"
                            />

                            <Pressable className="px-2.5 rounded-md border border-primary-100 h-12 flex items-center flex-col justify-center">
                                <AntDesign
                                    name="hearto"
                                    size={24}
                                    color={colors["primary-100"]}
                                />
                            </Pressable>
                            <Button
                                title="Chat with seller"
                                className="bg-primary-100"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

export function MapComponent() {
    return (
        <View
            style={{ flex: 1, width: "100%", height: "100%", minHeight: 400 }}
        >
            <MapView
                provider={PROVIDER_DEFAULT}
                style={{ width: "100%", height: "100%" }}
                region={{
                    latitude: 6.5244, // Example: Lagos
                    longitude: 3.3792,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            />
        </View>
    );
}

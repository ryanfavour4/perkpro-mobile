import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HouseSearchResultCard = () => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() =>
                router.push("/property/single-sale-property-details")
            }
            className="bg-light-100 p-4 rounded-lg flex flex-row justify-between"
            style={{elevation:1}}
        >
            <View className="flex flex-col gap-2 flex-wrap text-wrap w-[60%]">
                <Text className="text-lg font-semibold flex-wrap text-wrap w-fit self-start">
                    2 Bedroom Bungalow
                </Text>
                <Text className="">Obalende, Lagos</Text>
                <Text className="font-semibold">₦50,000,000</Text>
            </View>
            <View className="">
                <Image
                    source={images.listingHouse1}
                    resizeMode="cover"
                    className="w-32 h-24 rounded-lg"
                />
            </View>
        </TouchableOpacity>
    );
};

export default HouseSearchResultCard;

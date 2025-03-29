import { images } from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HouseSearchResultCard = () => {
    return (
        <TouchableOpacity className="border border-primary-100/25 p-4 rounded-lg flex flex-row justify-between">
            <View className="flex flex-col gap-2">
                <Text className="text-2xl font-semibold">
                    2 Bedroom Bungalow
                </Text>
                <Text className="">Obalende, Lagos</Text>
                <Text className="font-semibold">₦50,000,000</Text>
            </View>
            <View className="">
                <Image
                    source={images.listingHouse1}
                    resizeMode="cover"
                    className="size-32 rounded-lg"
                />
            </View>
        </TouchableOpacity>
    );
};

export default HouseSearchResultCard;

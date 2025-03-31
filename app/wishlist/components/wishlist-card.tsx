import { images } from "@/constants/images";
import { abbreviateNumber } from "@/utils/format-number";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WishListCard = () => {
    const router = useRouter();

    return (
        <View className="border border-primary-100/25 p-4 rounded-lg flex flex-row gap-6 justify-between">
            <View className="">
                <Image
                    source={images.listingHouse1}
                    resizeMode="cover"
                    className="w-40 h-44 rounded-lg"
                />
            </View>
            <View className="flex flex-col gap-2 flex-wrap text-wrap w-[55%]">
                <Text
                    onPress={() =>
                        router.push("/property/single-sale-property-details")
                    }
                    className="text-2xl font-semibold text-primary-100 flex-wrap text-wrap w-fit self-start"
                >
                    2 Bedroom Bungalow Building
                </Text>
                <Text className="">Obalende, Lagos</Text>
                <View className="bg-primary-100 rounded-full self-start px-3.5 py-1">
                    <Text className="text-sm text-center text-light-100 w-fit">
                        For Rent
                    </Text>
                </View>
                <View className="flex justify-between flex-row">
                    <View>
                        <Text className="font-medium capitalize text-2xl">
                            ₦{abbreviateNumber(50000000)}
                        </Text>
                        <Text className="">Per Annum</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push("/property/pay-property")}
                        className="bg-primary-100 py-2 self-start px-3 rounded-md"
                    >
                        <Image
                            resizeMode="contain"
                            className="w-8 h-8"
                            source={images.atmCardIcon}
                            alt="Image"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default WishListCard;

import { images } from "@/constants/images";
import { removeFromWishlist } from "@/redux/slices/wishlistSlice";
import { abbreviateNumber } from "@/utils/format-number";
import { useRouter } from "expo-router";
import { Platform } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";


type props = {
  id:string
}


const WishListCard = ({id}:props) => {
    const router = useRouter();
    const dispatch = useDispatch()

    const handleDeleteWishlist = async()=>{
       dispatch(removeFromWishlist(id))
    }

    return (
        <View className="p-4 rounded-lg bg-light-100 flex flex-row gap-3 justify-between" style={{
            ...Platform.select({
                ios: {
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                },
                android: {
                    elevation: 1,
                }
            })
        }}>
            <View>
                <Image
                    source={images.listingHouse1}
                    resizeMode="cover"
                    className="w-40 h-36 rounded-lg"
                />
            </View>
            <View className="flex flex-col gap-1 flex-wrap text-wrap w-[55%]">
                <Text
                    onPress={() =>
                        router.push("/property/single-sale-property-details")
                    }
                    className="text-lg font-semibold text-primary-100 flex-wrap text-wrap w-fit self-start"
                >
                    2 Bedroom Bungalow Building
                </Text>
                <Text className="">Obalende, Lagos</Text>
                <View className="bg-primary-100 rounded-full self-start px-3.5">
                    <Text className="text-sm text-center text-light-100 w-fit">
                        For Rent
                    </Text>
                </View>
                <View className="flex flex-row justify-between">
                    <View>
                        <Text className="font-medium capitalize text-lg">
                            ₦{abbreviateNumber(50000000)}
                        </Text>
                        <Text className="text-[12px]">Per Annum</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push("/property/pay-property")}
                        className="bg-primary-100 py-2 self-start px-3 rounded-md mr-3"
                    >
                        <Image
                            resizeMode="contain"
                            className="w-5 h-5"
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

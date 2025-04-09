import { images } from "@/constants/images";
import { deleteProperty } from "@/redux/slices/propertySlice";
import { removeFromWishlist } from "@/redux/slices/wishlistSlice";
import { abbreviateNumber } from "@/utils/format-number";
import { useRouter } from "expo-router";
import { Platform } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";


type props = {
    data: any
}


const PropertyCard = ({ data }: props) => {
    const router = useRouter();
    const dispatch = useDispatch()

    const handleDeleteProperty = async () => {
        dispatch(deleteProperty(data?._id))
    }

    return (
        <View className="p-4 rounded-lg bg-light-100 flex flex-row gap-3 justify-between mb-5" style={{
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
                    source={{uri: data?.images[0]}}
                    resizeMode="cover"
                    className="w-40 h-28 rounded-lg"
                />
            </View>
            <View className="flex flex-col gap-1 flex-wrap text-wrap w-[55%]">
                <Text
                    onPress={() =>
                        router.push("/property/single-sale-property-details")
                    }
                    className="text-lg font-semibold text-primary-100 flex-wrap text-wrap w-fit self-start"
                >
                    {data?.title}
                </Text>
                <Text className="">{data?.address}</Text>
                <View className="bg-primary-100 rounded-full self-start px-3.5 mb-1">
                    <Text className="text-sm text-center text-light-100 w-fit">
                        For {data?.property_type}
                    </Text>
                </View>
                <View className="flex flex-row gap-2">
                    <TouchableOpacity onPress={()=>router.push({
                        pathname:'/agent/agentProperty/editProperty',
                        params:{
                            property:data
                        }
                    })}>
                        <Image source={images.editIcon} className="w-8 h-8 rounded-lg" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.copyIcon} className="w-8 h-8 rounded-lg" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.shareIcon} className="w-8 h-8 rounded-lg" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDeleteProperty}>
                        <Image source={images.trashIcon} className="w-8 h-8 rounded-lg" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PropertyCard;

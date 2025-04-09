import TopNavbar from "@/layouts/top-navbar";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import WishListCard from "./components/wishlist-card";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist } from "@/redux/slices/wishlistSlice";
import Loader from "@/components/loader";

const Wishlist = () => {
    const { wishlist } = useSelector((state: { wishlist: { wishlist: any } }) => state.wishlist)
    const dispatch = useDispatch()

    console.log('w', wishlist);


    useEffect(() => {
        if (wishlist === null) {
            dispatch(fetchWishlist())
        }
    }, [dispatch])

    const renderItem = ({ item }) => {
        return <WishListCard />
    }
    return (
        <>
            {wishlist === null && <Loader />}
            <StatusBar style="dark" />
            <TopNavbar />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-5">
                    {/* Section 1 */}

                    <View className="py-2 flex flex-col gap-3">
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                        <WishListCard />
                    </View>

                    <FlatList
                        data={wishlist}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id.toString()}
                    />
                </View>
            </ScrollView>
        </>
    );
};

export default Wishlist;

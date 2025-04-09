import HomeHouseCards from "@/components/home-house-cards";
import Loader from "@/components/loader";
import { images } from "@/constants/images";
import TopNavbar from "@/layouts/top-navbar";
import { fetchProfile } from "@/redux/slices/authSlice";
import { fetchNewProperty, fetchPropertyForRent, fetchPropertyForSale } from "@/redux/slices/propertySlice";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
    const router = useRouter();
    const { userData } = useSelector((state: { auth: { userData: any } }) => state.auth)
    const { newProperties, propertiesForRent, propertiesForSale } = useSelector((state: { property: { newProperty: any, propertyForRent: any, propertyForSale: any } }) => state.property)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userData === null || userData === undefined) {
            dispatch(fetchProfile())
        }
    }, [dispatch, userData])


    useEffect(() => {
        dispatch(fetchNewProperty())
        dispatch(fetchPropertyForRent())
        dispatch(fetchPropertyForSale())
    }, [dispatch])


    return (
        <>
            {userData === null && <Loader />}

            <SafeAreaView className="flex-1">
                <StatusBar style="dark" />
                <TopNavbar />
                {/* Search Icon */}
                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity style={{ zIndex: 1 }} >
                        <Image source={images.searchPropertyIcon} style={{ width: 75, height: 80 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView className="px-4 bg-light-100">
                    <View className="pb-10">
                        {/* Hero */}
                        <View className="">
                            <Text className="text-lg mb-4 text-center">
                                Welcome,{" "}
                                <Text className="text-[#0415FEA3] font-[700]">
                                    {userData?.first_name} {userData?.last_name}
                                </Text>
                            </Text>
                            <View className="bg-primary-100 flex flex-row justify-between items-center px-4 rounded-xl overflow-hidden py-4">
                                <View className="w-1/2 py-8">
                                    <Text className="text-white text-lg text-balance font-bold">
                                        Get affordable Properties on PerkPro
                                    </Text>
                                </View>
                                <View className="w-1/2 flex flex-row justify-between relative h-full">
                                    <Image
                                        className="w-32 h-20 absolute rounded-lg left-0 top-0 rotate-6"
                                        source={images.demoHouse1}
                                    />
                                    <Image
                                        className="w-32 h-20 absolute rounded-lg right-0 bottom-0 rotate-6"
                                        source={images.demoHouse2}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Slide 1 */}
                        <View className="mt-8">
                            <View className="border-b-2 border-primary-100 mb-5">
                                <View className="px-6 bg-primary-100 w-2/3 py-2 rounded-t-xl">
                                    <Text className="text-light-100">
                                        New Properties around you
                                    </Text>
                                </View>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                className="flex flex-row gap-4"
                            >
                                {
                                    newProperties?.length > 0 ? (
                                        newProperties?.map((property: any) => (
                                            <HomeHouseCards key={property._id} data={property} link="property/single-sale-property-details" />
                                        ))
                                    ) : (
                                        <View className="flex-1 justify-center items-center">
                                            <Image source={images.emptyBoxGif} style={{ width: 200, height: 200 }} />
                                            <Text className="text-lg font-[500]" style={{ marginTop: -35 }}>No Properties Found</Text>
                                        </View>
                                    )
                                }
                                {/* <HomeHouseCards />
                                <HomeHouseCards />
                                <HomeHouseCards />
                                <HomeHouseCards />
                                <HomeHouseCards /> */}
                            </ScrollView>
                        </View>

                        {/* Slide 2 */}
                        <View className="mt-10">
                            <View className="border-b-2 border-dark-50 mb-5">
                                <View className="px-6 bg-dark-50 w-2/3 py-2 rounded-t-xl">
                                    <Text className="text-light-100">
                                        Properties For Sale
                                    </Text>
                                </View>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                className="flex flex-row gap-4"
                            >
                                {
                                    propertiesForSale?.length > 0 ? (
                                        propertiesForSale?.map((property: any) => (
                                            <HomeHouseCards key={property._id} data={property} link="property/single-sale-property-details" />
                                        ))
                                    ) : (
                                        <View className="flex-1 justify-center items-center">
                                            <Image source={images.emptyBoxGif} style={{ width: 200, height: 200 }} />
                                            <Text className="text-lg font-[500]" style={{ marginTop: -35 }}>No Properties Found</Text>
                                        </View>
                                    )
                                }
                                {/* <HomeHouseCards link="property/single-sale-property-details" />
                                <HomeHouseCards link="property/single-sale-property-details" />
                                <HomeHouseCards link="property/single-sale-property-details" />
                                <HomeHouseCards link="property/single-sale-property-details" />
                                <HomeHouseCards link="property/single-sale-property-details" /> */}
                            </ScrollView>
                        </View>

                        {/* Slide 3 */}
                        <View className="mt-10">
                            <View className="border-b-2 border-dark-50 mb-5">
                                <View className="px-6 bg-dark-50 w-2/3 py-2 rounded-t-xl">
                                    <Text className="text-light-100">
                                        Properties For Rent
                                    </Text>
                                </View>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                className="flex flex-row gap-4"
                            >
                                {
                                    propertiesForRent?.length > 0 ? (
                                        propertiesForRent?.map((property: any) => (
                                            <HomeHouseCards key={property._id} data={property} link="property/single-rent-property-details" />
                                        ))
                                    ) : (
                                        <View className="flex-1 justify-center items-center">
                                            <Image source={images.emptyBoxGif} style={{ width: 200, height: 200 }} />
                                            <Text className="text-lg font-[500]" style={{ marginTop: -35 }}>No Properties Found</Text>
                                        </View>
                                    )
                                }
                                {/* <HomeHouseCards />
                                <HomeHouseCards />
                                <HomeHouseCards />
                                <HomeHouseCards />
                                <HomeHouseCards /> */}
                            </ScrollView>
                        </View>

                        {/* Slide 4 */}
                        <View className="mt-10">
                            <View className="border-b-2 border-dark-50 mb-5">
                                <View className="px-6 bg-dark-50 w-2/3 py-2 rounded-t-xl">
                                    <Text className="text-light-100">
                                        Properties For Rent
                                    </Text>
                                </View>
                            </View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                className="flex flex-row gap-4"
                            >
                                <View className="h-40 w-40 mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image
                                        className="h-28 w-[7rem] aspect-square"
                                        resizeMode="contain"
                                        source={images.pwanLogo}
                                    />
                                </View>
                                <View className="h-40 w-40 mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image
                                        className="h-28 w-[7rem] aspect-square"
                                        resizeMode="contain"
                                        source={images.landweyLogo}
                                    />
                                </View>
                                <View className="h-40 w-40 mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image
                                        className="h-28 w-[7rem] aspect-square"
                                        resizeMode="contain"
                                        source={images.sweetcoysLogo}
                                    />
                                </View>

                                <View className="h-40 w-40 mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image
                                        className="h-28 w-[7rem] aspect-square"
                                        resizeMode="contain"
                                        source={images.pwanLogo}
                                    />
                                </View>
                                <View className="h-40 w-40 mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image
                                        className="h-28 w-[7rem] aspect-square"
                                        resizeMode="contain"
                                        source={images.landweyLogo}
                                    />
                                </View>
                                <View className="h-40 w-40 mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                    <Image
                                        className="h-28 w-[7rem] aspect-square"
                                        resizeMode="contain"
                                        source={images.sweetcoysLogo}
                                    />
                                </View>
                            </ScrollView>

                            <Pressable
                                onPress={() => router.push("/search/companies")}
                                className="bg-dark-50 p-3 rounded-lg mt-5 mx-4 mb-6"
                            >
                                <Text className="text-light-100 font-[600] text-center">
                                    Search For more Companies/Agents
                                </Text>
                            </Pressable>

                            <View className="mx-3 flex-row gap-2 justify-center">
                                <Text className="text-[#000000]">Nothing to see here again.</Text>
                                <Link href='/property/single-rent-property-details' className="text-[#0415FE] font-[600]">View available properties</Link>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

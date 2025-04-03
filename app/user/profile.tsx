import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useTheme } from "@/contexts/theme";
import { StatusBar } from "expo-status-bar";
import TopNavbar from "@/layouts/top-navbar";
import Button from "@/components/buttons/button";
import FileDropzone from "@/components/inputs/file-uploader";
import * as DocumentPicker from "expo-document-picker";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import HeaderTopNavbar from "@/layouts/header-top-navbar";
import { Link } from "expo-router";
import { images } from "@/constants/images";

const Profile = () => {
    const { colors } = useTheme();
    const [nin, setNin] = useState("");
    const [bvn, setBvn] = useState("");
    const [address, setAddress] = useState("");

    const handleFileUpload = (
        file:
            | DocumentPicker.DocumentPickerResult
            | ImagePicker.ImagePickerResult
    ) => {
        console.log(file.assets);
    };

    return (
        <>
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Personal details" />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View className="bg-red-100 py-1.5">
                        <Link
                            href={"/user/kyc"}
                            className="text-center text-red-500"
                        >
                            Your Kyc is not complete.{" "}
                            <Text className="font-semibold">CLICK HERE.</Text>
                        </Link>
                    </View>

                    <View className="px-3 py-3 flex flex-col gap-4 mt-10">
                        {/*  */}
                        <View className="w-fit relative self-start m-auto flex items-center justify-center mb-6">
                            <Image
                                resizeMode="contain"
                                className="rounded-full w-24 h-24"
                                source={images.noUser}
                                alt="Image"
                            />
                            <Pressable className="p-2 rounded-full bg-primary-100 absolute flex items-center justify-center -bottom-3 right-0 text-center">
                                <Feather
                                    name="edit"
                                    size={16}
                                    color={colors["light-100"]}
                                />
                            </Pressable>
                        </View>

                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">First Name:</Text>

                            <View className="border-t border-gray-300 w-full">
                                <Text className="py-3 text-lg">Francis</Text>
                            </View>
                        </View>
                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">Last Name:</Text>

                            <View className="border-t border-gray-300 w-full">
                                <Text className="py-3 text-lg">Peace</Text>
                            </View>
                        </View>
                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">Location:</Text>

                            <View className="border-t border-gray-300 w-full">
                                <Text className="py-3 text-lg">
                                    Lekki Phase 1, Lagos
                                </Text>
                            </View>
                        </View>
                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">
                                Date of Birth:
                            </Text>

                            <View className="border-t border-gray-300 w-full">
                                <Text className="py-3 text-lg">
                                    Apr 05 2025
                                </Text>
                            </View>
                        </View>
                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">Gender:</Text>

                            <View className="border-t border-gray-300 w-full">
                                <Text className="py-3 text-lg">Male</Text>
                            </View>
                        </View>

                        <Button title="Save" className="mt-3" />
                        <Button
                            title="Change Password"
                            className="mt-3 !bg-dark-100"
                        />
                        <Button
                            title="Delete Account"
                            className="mt-3 bg-red-500"
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Profile;

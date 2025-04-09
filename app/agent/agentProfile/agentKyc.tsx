import { View, Text, ScrollView, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useTheme } from "@/contexts/theme";
import { StatusBar } from "expo-status-bar";
import TopNavbar from "@/layouts/top-navbar";
import Button from "@/components/buttons/button";
import FileDropzone from "@/components/inputs/file-uploader";
import * as DocumentPicker from "expo-document-picker";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import AgentNavbar from "@/layouts/agent-navbar";
import AgentFileDropzone from "@/components/inputs/agent-file-uploader";
import { LinearGradient } from "expo-linear-gradient";

const AgentKyc = () => {
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
            <AgentNavbar />
                <LinearGradient
                            colors={['#010B98', '#000432']}
                            className="flex-1"
                        >
            <ScrollView className="px-4">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View className="mt-3">
                        <Text className="text-lg font-semibold mb-2 text-center">
                            Help complete your <Text className="text-[#0414FE]">KYC</Text>
                        </Text>
                    </View>

                    <View className="px-3 py-3 rounded-md flex flex-col gap-4 mt-2">
                        {/*  */}
                        <View className="w-full">

                            <View className="border bg-[#0415FE] border-[#0415FE] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                <TextInput
                                    placeholder={"NIN Number"}
                                    className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none placeholder:text-white text-white"
                                    value={nin}
                                    onChangeText={setNin}
                                />
                            </View>
                        </View>

                        {/*  */}
                        <View className="w-full">


                            <AgentFileDropzone
                                onFileSelected={handleFileUpload}
                                placeholder="Upload NIN/ID"
                                icon={
                                    <SimpleLineIcons
                                        name="cloud-upload"
                                        size={24}
                                        color={colors["primary-200"]}
                                    />
                                }
                            />
                        </View>

                        {/*  */}
                        <View className="w-full">

                            <View className="border bg-[#0415FE] border-[#0415FE] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                <TextInput
                                    placeholder={"BVN Number"}
                                    className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none placeholder:text-white text-white"
                                    value={bvn}
                                    onChangeText={setBvn}
                                />
                            </View>
                        </View>

                        {/*  */}
                        <View className="w-full">


                            <View className="border bg-[#0415FE] border-[#0415FE] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                <TextInput
                                    placeholder={"Contact Address"}
                                    className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none placeholder:text-white text-white"
                                    value={address}
                                    onChangeText={setAddress}
                                />
                            </View>
                        </View>

                        {/*  */}
                        <View className="w-full">

                            <AgentFileDropzone
                                onFileSelected={handleFileUpload}
                                placeholder="Upload Utility Bill"
                                icon={
                                    <SimpleLineIcons
                                        name="cloud-upload"
                                        size={24}
                                        color={colors["primary-200"]}
                                    />
                                }
                            />
                        </View>

                        {/*  */}
                        <View className="w-full">

                            <AgentFileDropzone
                                onFileSelected={handleFileUpload}
                                placeholder="Take a selfie"
                                camera
                                icon={
                                    <Feather
                                        name="camera"
                                        size={24}
                                        color={colors["primary-200"]}
                                    />
                                }
                            />
                        </View>

                        <Button title="Submit" className="mt-3" />
                    </View>
                </View>
            </ScrollView>
            </LinearGradient>
        </>
    );
};

export default AgentKyc;

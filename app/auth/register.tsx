import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";

export default function Register() {
    const { colors } = useTheme();
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <SafeAreaView>
            <ScrollView className="px-4">
                <View className="flex flex-col gap-5 items-center h-full pt-4">
                    <Image
                        onProgress={() => router.push("/")}
                        resizeMode="contain"
                        className="w-32 h-32"
                        source={images.logo}
                    />

                    <Text className="text-xl font-bold">Register</Text>

                    <View className="w-full mt-16 flex flex-col gap-5">
                        <View className="">
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    First Name{" "}
                                </Text>

                                <View className="border border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"First Name"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={firstName}
                                        onChangeText={setFirstName}
                                    />
                                    <Ionicons
                                        name="person-outline"
                                        size={24}
                                        color={colors.text}
                                    />
                                </View>
                            </View>
                            {/*  */}
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Last Name{" "}
                                </Text>

                                <View className="border border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Last Name"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={lastName}
                                        onChangeText={setLastName}
                                    />
                                    <Ionicons
                                        name="person-outline"
                                        size={24}
                                        color={colors.text}
                                    />
                                </View>
                            </View>
                            {/*  */}
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Email{" "}
                                </Text>

                                <View className="border border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Email address"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        keyboardType="email-address"
                                        value={email}
                                        onChangeText={setEmail}
                                        secureTextEntry={false}
                                    />
                                    <Ionicons
                                        name="mail-outline"
                                        size={24}
                                        color={colors.text}
                                    />
                                </View>
                            </View>
                            {/*  */}
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Phone/Whatsapp{" "}
                                </Text>

                                <View className="border border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Phone/Whatsapp"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        keyboardType="phone-pad"
                                        value={phone}
                                        onChangeText={setPhone}
                                    />
                                    <Ionicons
                                        name="call-outline"
                                        size={24}
                                        color={colors.text}
                                    />
                                </View>
                            </View>
                            {/*  */}
                            <View className="w-full mb-4">
                                <Text className="text-base mb-1 text-dark-100">
                                    Password
                                </Text>

                                <PasswordInput
                                    placeholder={"Password"}
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={false}
                                />
                            </View>
                            {/*  */}
                            <View className="w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Confirm Password
                                </Text>

                                <PasswordInput
                                    placeholder={"Confirm Password"}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={false}
                                />
                            </View>
                            <Button title="Register" className="mt-8" />
                        </View>
                        {/* -- */}

                        {/* -- */}
                        <View className="mt-4 pb-16 flex items-center flex-row gap-2 justify-center">
                            <Text className="mb-6">
                                Already have an account with us?{" "}
                                <Link
                                    className="text-primary-100 ml-2"
                                    href={"/auth/user-type"}
                                >
                                    Login
                                </Link>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

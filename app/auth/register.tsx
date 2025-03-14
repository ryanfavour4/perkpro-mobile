import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";

export default function Register() {
    const { colors } = useTheme();
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
                        resizeMode="contain"
                        className="w-32 h-32"
                        source={images.logo}
                    />

                    <Text className="text-xl font-bold">Register</Text>

                    <View className="w-full mt-16 flex flex-col gap-5">
                        <View className="">
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-gray-700">
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
                                <Text className="text-base mb-1 text-gray-700">
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
                                <Text className="text-base mb-1 text-gray-700">
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
                                <Text className="text-base mb-1 text-gray-700">
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
                            <View className="w-full">
                                <Text className="text-base mb-1 text-gray-700">
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
                                <Text className="text-base mb-1 text-gray-700">
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
                        <View className="mt-4 pb-16">
                            <Text className="text-xl mb-1">
                                Already have an account with us?
                            </Text>
                            <Link
                                className="text-xl text-primary-100"
                                href={"/auth/user-type"}
                            >
                                Login
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";

export default function Login() {
    const { colors } = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <ScrollView className="px-4">
                <View className="flex flex-col gap-5 items-center h-full pt-4">
                    <Image
                        resizeMode="contain"
                        className="w-32 h-32"
                        source={images.logo}
                    />

                    <Text className="text-xl font-bold">Login</Text>

                    <View className="w-full mt-16 flex flex-col gap-5">
                        <View className="">
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Email{" "}
                                </Text>

                                <View className="border border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Email address"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={email}
                                        keyboardType="email-address"
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
                            <View className="w-full">
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
                            <Button title="Login" className="mt-8" />
                        </View>
                        {/* -- */}
                        <Text className="mb-6">
                            Forgot Password?{" "}
                            <Link
                                className="text-primary-100"
                                href={"/auth/forgot-password"}
                            >
                                Click Here
                            </Link>
                        </Text>

                        {/* -- */}
                        <View className="mt-4">
                            <Text className="mb-1">
                                Don’t have an account with us yet?
                            </Text>
                            <Link
                                className="text-primary-100"
                                href={"/auth/register"}
                            >
                                Register Here
                            </Link>
                        </View>
                        {/* -- */}
                        <View className="w-full items-center justify-center mt-10">
                            <Link href="/">
                                <View className="flex items-center justify-center flex-col gap-4 w-full">
                                    <View className="mr-2">
                                        <AntDesign
                                            name="customerservice"
                                            className="bg-light-100 w-[60px] h-[60px] rounded-full flex items-center justify-center text-center flex-col pt-5 border border-primary-100"
                                            size={24}
                                            color={colors["primary-100"]}
                                        />
                                    </View>
                                    <Text className="text-lg text-center">
                                        Customer Support
                                    </Text>
                                </View>
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

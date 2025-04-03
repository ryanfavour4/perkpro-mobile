import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "@/redux/slices/authSlice";

export default function Login() {
    const router = useRouter();
    const { colors } = useTheme();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')

    const { loading, errorMessage, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    useEffect(()=>{
       if(error && errorMessage !== ''){
        
       }
    },[error, errorMessage])


    useEffect(() => {
        if (email.length === 0) {
            setEmailError('Email field is required')
        }
        else {
            if (!emailRegex.test(email) && email.length > 0) {
                setEmailError('Please enter the correct email address')
            }
            else {
                setEmailError('')

            }

        }
    }, [email])

    useEffect(() => {
        if (password.length === 0) {
            setPasswordError('Password field is required')
        }
        else {
            setPasswordError('')
        }
    }, [password])


    const handleSubmit = async () => {
        if (emailError === '' && passwordError === '') {
           dispatch(loginAsync({email, password}))
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-5">
                <View className="flex flex-col gap-5 items-center h-full pt-4">
                    <TouchableOpacity onPress={() => router.push("/home")}>
                        <Image
                            resizeMode="contain"
                            className="w-32 h-20"
                            source={images.logo}
                        />
                    </TouchableOpacity>

                    <Text className="text-2xl font-bold">Login</Text>

                    <View className="w-full mt-5 flex flex-col gap-5">
                        <View className="">
                            <View className="mb-4 w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Email{" "}
                                </Text>

                                <View className="border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Email address"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={email}
                                        keyboardType="email-address"
                                        onChangeText={(text) => {
                                            setEmail(text)
                                        }}
                                        secureTextEntry={false}
                                    />
                                    <Ionicons
                                        name="mail-outline"
                                        size={24}
                                        color={colors.text}
                                    />
                                </View>
                                {emailError !== '' && <Text className="text-red-400 mt-2 font-medium">{emailError}</Text>}
                            </View>
                            <View className="w-full">
                                <Text className="text-base mb-1 text-dark-100">
                                    Password
                                </Text>

                                <PasswordInput
                                    placeholder={"Password"}
                                    value={password}
                                    onChangeText={(text) => {
                                        setPassword(text)

                                    }}
                                    secureTextEntry={false}

                                />
                                {passwordError !== '' && <Text className="text-red-400 mt-2 font-medium">{passwordError}</Text>}
                            </View>
                            <Button title="Login" className="mt-8" onPress={handleSubmit} isLoading={loading} />
                        </View>
                        {/* -- */}
                        <Text className="mb-2">
                            Forgot Password?{" "}
                            <Link
                                className="text-primary-100 font-[600]"
                                href={"/auth/forgot-password"}
                            >
                                Click Here
                            </Link>
                        </Text>

                        {/* -- */}
                        <View className="mt-1">
                            <Text className="mb-1">
                                Don't have an account with us yet?
                            </Text>
                            <Link
                                className="text-primary-100"
                                href={"/auth/register"}
                            >
                                Register Here
                            </Link>
                        </View>
                        {/* -- */}
                        <View className="w-full items-center justify-center mt-5">
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

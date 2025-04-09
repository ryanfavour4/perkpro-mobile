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
import { Link, Redirect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthLog, loginAsync } from "@/redux/slices/authSlice";
import Toast from "@/components/Toast";
import { useFormik } from 'formik'
import loginValidationSchema from "@/schema/loginValidationSchema";

export default function Login() {
    const router = useRouter();
    const { colors } = useTheme();
    const [showToast, setShowToast] = useState(false)

    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            dispatch(loginAsync({ email: values.email, password: values.password }))


        }
    })

    const { loading, errorMessage, error, isAuthenticated, message } = useSelector((state: { auth: { loading: boolean, errorMessage: string, error: boolean, isAuthenticated: boolean, message: string } }) => state.auth)
    const dispatch = useDispatch()
    console.log('isAuth', isAuthenticated);


    // useEffect(() => {
    //     const checkAuth = () => {
    //         if (isAuthenticated) {
    //             if (message === '') {
    //                 router.replace('/home')
    //             }
    //             else {
    //                 setShowToast(true);
    //                 const timer = setTimeout(() => {
    //                     dispatch(clearAuthLog());
    //                     router.replace('/home')
    //                 }, 2000)
    //                 return () => clearTimeout(timer)
    //             }

    //         }
    //     }
    //     checkAuth()
    // }, [isAuthenticated])


    useEffect(() => {
        if (error) {
            setShowToast(true);
            setTimeout(() => {
                dispatch(clearAuthLog());
            }, 2000)
        }
    }, [error]);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    return (
        <SafeAreaView className="flex-1 bg-white">
            {showToast && error && <Toast
                message={errorMessage}
                status="Error"
                onClose={() => {
                    setShowToast(false);
                }} />}

            {showToast && message !== '' && isAuthenticated && <Toast
                message={message}
                status="Success"
                onClose={() => {
                    setShowToast(false);
                }} />}
            <ScrollView className="px-10">
                <View className="flex flex-col gap-1 items-center h-full mt-10">
                    <TouchableOpacity onPress={() => router.push("/home")}>
                        <Image
                            resizeMode="contain"
                            className="w-32 h-20"
                            source={images.logo}
                        />
                    </TouchableOpacity>

                    <Text className="text-2xl font-[600]">Login</Text>

                    <View className="w-full mt-4 flex flex-col gap-5">
                        <View className="">
                            <View className="mb-4 w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Email{" "}
                                </Text> */}

                                <View className="border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Email address"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={values.email}
                                        keyboardType="email-address"
                                        onChangeText={handleChange('email')}
                                    />
                                    <Ionicons
                                        name="mail-outline"
                                        size={20}
                                        color={colors.text}
                                    />
                                </View>
                                {touched.email && errors.email && <Text className="text-red-400 mt-2 font-medium">{errors.email}</Text>}
                            </View>
                            <View className="w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Password
                                </Text> */}

                                <PasswordInput
                                    placeholder={"Password"}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    secureTextEntry={false}

                                />
                                {touched.password && errors.password && <Text className="text-red-400 mt-2 font-medium">{errors.password}</Text>}
                            </View>
                            <Button title="Login" className="mt-4" onPress={handleSubmit} isLoading={loading} />
                        </View>
                        {/* -- */}
                        <Text>
                            Forgot Password?{" "}
                            <Link
                                className="text-primary-100 font-[600]"
                                href={"/auth/forgot-password"}
                            >
                                Click Here
                            </Link>
                        </Text>

                        {/* -- */}
                        <View>
                            <Text className="mb-1">
                                Don't have an account with us yet?
                            </Text>
                            <Link
                                className="text-primary-100 font-[500]"
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
                                            className="bg-light-100 w-[60px] h-[60px] rounded-full flex items-center justify-center text-center flex-col pt-5"
                                            size={24}
                                            color={colors["primary-100"]}
                                            style={{ elevation: 1 }}
                                        />
                                    </View>
                                    <Text className="text-[15px] text-center font-[400]">
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

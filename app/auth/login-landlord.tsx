import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from "react-redux";
import { clearAuthLog, loginAsync } from "@/redux/slices/authSlice";
import Toast from "@/components/Toast";
import { useFormik } from 'formik'
import loginValidationSchema from "@/schema/loginValidationSchema";


export default function LoginLandlord() {


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

    const { loading, errorMessage, error, isAuthenticated, message, success } = useSelector((state: { auth: { loading: boolean, errorMessage: string, error: boolean, isAuthenticated: boolean, message: string, success: boolean } }) => state.auth)
    const dispatch = useDispatch()
    console.log('isAuth', isAuthenticated);


    useEffect(() => {
        const checkAuth = () => {
            if (isAuthenticated && success) {
                if (message === '') {
                    router.replace('/agent/dashboard/agentDashboard')
                }
                else {
                    setShowToast(true);
                    const timer = setTimeout(() => {
                        dispatch(clearAuthLog());
                        router.replace('/agent/dashboard/agentDashboard')
                    }, 2000)

                    return () => clearTimeout(timer)
                }

            }
        }
        checkAuth()
    }, [isAuthenticated, success])


    useEffect(() => {
        if (error) {
            setShowToast(true);
            setTimeout(() => {
                dispatch(clearAuthLog());
            }, 2000)
        }
    }, [error]);

    return (
        <>
            <StatusBar style="dark" />
            <LinearGradient
                colors={['#010B98', '#000432']}
            >
                <SafeAreaView className="text-light-100 h-full">
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
                        <View className="flex flex-col gap-2 items-center h-full mt-10">
                            <TouchableOpacity onPress={() => router.push('/agent/dashboard/agentDashboard')}>
                                <Image
                                    resizeMode="contain"
                                    className="w-32 h-20"
                                    source={images.logoWhite}
                                />
                            </TouchableOpacity>

                            <Text className="text-xl font-bold  text-light-100">
                                Login as Landlord/Agent
                            </Text>

                            <View className="w-full mt-4 flex flex-col gap-5">
                                <View className="">
                                    <View className="mb-4 w-full">
                                        {/* <Text className="text-base mb-1 text-light-100">
                                        Email{" "}
                                    </Text> */}

                                        <View className="border bg-white border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                            <TextInput
                                                placeholder={"Email address"}
                                                className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                                value={values.email}
                                                keyboardType="email-address"
                                                onChangeText={handleChange('email')}
                                                secureTextEntry={false}
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
                                        {/* <Text className="text-base mb-1 text-light-100">
                                        Password
                                    </Text> */}

                                        <PasswordInput
                                            className="bg-light-100"
                                            placeholder={"Password"}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            secureTextEntry={false}
                                        />
                                        {touched.password && errors.password && <Text className="text-red-400 mt-2 font-medium">{errors.password}</Text>}

                                    </View>
                                    <Button title="Login" className="mt-4" isLoading={loading} onPress={handleSubmit} />
                                </View>
                                {/* -- */}
                                <Text className="text-light-100">
                                    Forgot Password?{" "}
                                    <Link
                                        className="text-secondary-100"
                                        href={"/auth/forgot-password"}
                                    >
                                        Click Here
                                    </Link>
                                </Text>

                                {/* -- */}
                                <View className="mt-1">
                                    <Text className="mb-1 text-light-100">
                                        Don't have an account with us yet?
                                    </Text>
                                    <Link
                                        className="text-secondary-100"
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
                                                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-center flex-col pt-5 border border-[#0415FE]"
                                                    size={24}
                                                    color='white'
                                                    style={{ backgroundColor: '#0415FE' }}
                                                />
                                            </View>
                                            <Text className="text-sm text-center text-light-100">
                                                Contact Support
                                            </Text>
                                        </View>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>

        </>
    );
}

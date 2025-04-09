import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import PasswordInput from "@/components/inputs/password";
import Button from "@/components/buttons/button";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormik } from "formik";
import registerValidationSchema from "@/schema/registerValidationSchema";
import api from "@/utils/api";
import Toast from "@/components/Toast";

export default function Register() {
    const { colors } = useTheme();
    const router = useRouter();
    const [showToast, setShowToast] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const clearLog = () => {
        setError(false)
        setErrorMessage('')
    }

    const { values, touched, handleChange, errors, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            accountType: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ""
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (values, action) => {
            try {
                setLoading(true)
                setError(false)
                //Form-data
                const formData = new FormData()
                formData.append('email', values.email)
                formData.append('first_name', values.firstName)
                formData.append('last_name', values.lastName)
                formData.append('account_type', values.accountType)
                formData.append('password', values.password)
                formData.append('phone', values.phone)

                const { data } = await api.post('/users/register', formData)

                console.log('data', data);
                setLoading(false)
                setShowToast(true)
                setMessage(data.message)
                setIsRegistered(true)
                action.resetForm()
                setTimeout(() => {
                    router.replace('/auth/login')
                }, 2000)
            }
            catch (error: any) {
                console.log('error', error);
                setLoading(false)
                setShowToast(true)
                setErrorMessage(error.response.data.message || 'An error occurred')
                setError(true)
            }
        }
    })

    const [open, setOpen] = useState(false);
    const [typeList, setTypeList] = useState([
        { label: "Landlord/Agent", value: "Agent" },
        { label: "Tenant/User", value: "User" },
    ]);


    return (
        <SafeAreaView className="flex-1 bg-white">
            {showToast && <Toast
                message={errorMessage}
                status="Error"
                onClose={() => {
                    setShowToast(false);
                    clearLog();
                }} />}
            {
                showToast && isRegistered && <Toast
                    message={message}
                    status="Success"
                    onClose={() => {
                        setShowToast(false);
                        setMessage('')
                        setIsRegistered(false)
                    }}
                />
            }
            <ScrollView className="px-10">
                <View className="flex items-center h-full pt-4">
                    <TouchableOpacity onPress={() => router.push("/")}>
                        <Image
                            resizeMode="contain"
                            className="w-32 h-20 mb-2"
                            source={images.logo}
                        />
                    </TouchableOpacity>


                    <View className="w-full flex flex-col gap-2">
                        <View className="">
                            <View className="mb-4 w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    First Name{" "}
                                </Text> */}

                                <View className="border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"First Name"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                    />
                                    <Ionicons
                                        name="person-outline"
                                        size={20}
                                        color={colors.text}
                                    />
                                </View>
                                {touched.firstName && errors.firstName && <Text className="text-red-400 mt-2 font-medium">{errors.firstName}</Text>}

                            </View>
                            {/*  */}
                            <View className="mb-4 w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Last Name{" "}
                                </Text> */}

                                <View className="border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Last Name"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                    />
                                    <Ionicons
                                        name="person-outline"
                                        size={20}
                                        color={colors.text}
                                    />
                                </View>
                                {touched.lastName && errors.lastName && <Text className="text-red-400 mt-2 font-medium">{errors.lastName}</Text>}

                            </View>
                            {/*  */}
                            <View className="mb-4 w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Email{" "}
                                </Text> */}

                                <View className="border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Email address"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        keyboardType="email-address"
                                        value={values.email}
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
                            {/*  */}
                            <View className="mb-4 w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Phone/Whatsapp{" "}
                                </Text> */}

                                <View className="border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                                    <TextInput
                                        placeholder={"Phone/Whatsapp"}
                                        className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                        keyboardType="phone-pad"
                                        value={values.phone}
                                        onChangeText={handleChange('phone')}
                                    />
                                    <Ionicons
                                        name="call-outline"
                                        size={20}
                                        color={colors.text}
                                    />
                                </View>
                                {touched.phone && errors.phone && <Text className="text-red-400 mt-2 font-medium">{errors.phone}</Text>}

                            </View>
                            {/*  */}
                            <View className="mb-4 w-full z-50">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Account Type
                                </Text> */}

                                <DropDownPicker
                                    open={open}
                                    setOpen={setOpen}
                                    value={values.accountType}
                                    setValue={(callback) => {
                                        const value = typeof callback === 'function' ? callback(values.accountType) : callback;
                                        handleChange('accountType')(value);
                                    }}
                                    items={typeList}
                                    setItems={setTypeList}
                                    multiple={false}
                                    placeholder="Select Account type"
                                    onOpen={() => setOpen(true)}
                                    style={{
                                        paddingHorizontal: 16,
                                        borderRadius: 8,
                                        borderWidth: 1,
                                        borderColor: "#0415FEA3",
                                    }}
                                    dropDownContainerStyle={{
                                        borderColor: "#0415FEA3",
                                        backgroundColor: "white",
                                    }}
                                    placeholderStyle={{
                                        color: 'grey'
                                    }}
                                />
                                {touched.accountType && errors.accountType && <Text className="text-red-400 mt-2 font-medium">{errors.accountType}</Text>}

                            </View>
                            {/*  */}
                            <View className="w-full mb-4">
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
                            {/*  */}
                            <View className="w-full">
                                {/* <Text className="text-base mb-1 text-dark-100">
                                    Confirm Password
                                </Text> */}

                                <PasswordInput
                                    placeholder={"Confirm Password"}
                                    value={values.confirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    secureTextEntry={false}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <Text className="text-red-400 mt-2 font-medium">{errors.confirmPassword}</Text>}

                            </View>
                            <Button title="Register" className="mt-8" onPress={handleSubmit} isLoading={loading} />
                        </View>
                        {/* -- */}

                        {/* -- */}
                        <View className="mt-4 pb-4 flex items-center flex-row gap-2 justify-center">
                            <Text className="mb-6">
                                Already have an account with us?{" "}
                                <Link
                                    className="text-primary-100 ml-2"
                                    href={"/"}
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

import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    Pressable,
    TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useCallback } from "react";
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
import { useFormik } from "formik";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from 'react-native-date-picker';
import { useSelector } from "react-redux";

const Profile = () => {
    const { colors } = useTheme();
    const { userData } = useSelector((state: { auth: { userData: any } }) => state.auth)

    const [openDate, setOpenDate] = useState(false);

    // Set zIndex for the dropdown to ensure it appears on top
    const [open, setOpen] = useState(false);
    const [typeList, setTypeList] = useState([
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
    ]);

    const { values, handleChange, handleBlur, setFieldValue } = useFormik({
        initialValues: {
            firstName: userData?.first_name ?? " ",
            lastName: userData?.last_name ?? "",
            address: userData?.address ?? "",
            dateOfBirth: "",
            gender: userData?.gender ?? " ",
            date: new Date(),
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log('open-date', openDate);
    console.log('open', open);


    // Format the date for display
    const formatDate = useCallback((date) => {
        if (!date) return "";
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }, []);

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
                <View>
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

                    <View className="px-3 py-3 flex flex-col gap-1 mt-5">
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

                            <TextInput
                                className="border border-[#0415FE1F] bg-[#0415FE1F] w-full py-5 px-4 text-lg rounded-md"
                                placeholder="Enter your first name"
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                            />
                        </View>
                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">Last Name:</Text>

                            <TextInput
                                className="border border-[#0415FE1F] bg-[#0415FE1F] w-full py-5 px-4 text-lg rounded-md"
                                placeholder="Enter your last name"
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                            />
                        </View>
                        {/*  */}
                        <View className="w-full">
                            <Text className="text-base mb-1">Location:</Text>
                            <TextInput
                                className="border border-[#0415FE1F] bg-[#0415FE1F] w-full py-5 px-4 text-lg rounded-md"
                                placeholder="Enter your location"
                                value={values.address}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                            />
                        </View>

                        {/* Date of Birth - Fixed TouchableOpacity to ensure it correctly opens the picker */}
                        <View className="w-full">
                            <Text className="text-base mb-1">Date of Birth:</Text>
                            <TouchableOpacity
                                className="border border-[#0415FE1F] bg-[#0415FE1F] w-full py-5 px-4 text-lg rounded-md"
                                activeOpacity={0.7}
                                onPress={() => {
                                    console.log("Opening DatePicker...");
                                    setOpenDate(true);
                                }}
                            >
                                <Text className="text-lg">
                                    {formatDate(values.date)}
                                </Text>
                            </TouchableOpacity>

                            {openDate && (
                                <DatePicker
                                    modal={true}
                                    open={openDate}
                                    date={values.date ?? new Date()}
                                    mode="date"
                                    onConfirm={(date) => {
                                        console.log("Selected Date:", date);
                                        setOpenDate(false);
                                        setFieldValue('date', date);
                                    }}
                                    onCancel={() => {
                                        setOpenDate(false);
                                    }}
                                />
                            )}
                        </View>


                        {/* Gender Dropdown - With proper zIndex settings */}
                        <View style={{ zIndex: 1000 }}>
                            <Text className="text-base mb-1">Gender:</Text>
                            <DropDownPicker
                                open={open}
                                setOpen={setOpen}
                                value={values.gender}
                                setValue={(callback) => {
                                    const value = typeof callback === 'function' ? callback(values.gender) : callback;
                                    handleChange('gender')(value);
                                }}
                                items={typeList}
                                setItems={setTypeList}
                                multiple={false}
                                placeholder="Select Gender"
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
                        </View>


                        <View style={{ marginTop: 20, zIndex: 1 }}>
                            <Button title="Save" className="mt-3" />
                            <Button
                                title="Change Password"
                                className="mt-1 !bg-dark-100"
                            />
                            <Button
                                title="Delete Account"
                                className="mt-1 bg-red-500"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Profile;
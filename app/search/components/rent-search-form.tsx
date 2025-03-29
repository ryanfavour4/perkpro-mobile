import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/components/buttons/button";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/theme";
import DropDownPicker from "react-native-dropdown-picker";

const RentSearchForm = () => {
    const { colors } = useTheme();
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const [open, setOpen] = useState(false);
    const [typeList, setTypeList] = useState([
        { label: "Bungalow", value: "bungalow" },
        { label: "Mansion", value: "mansion" },
        { label: "Terrace", value: "terrace" },
        { label: "Duplex", value: "duplex" },
        { label: "Penthouse", value: "penthouse" },
        { label: "Villa", value: "villa" },
        { label: "Apartment", value: "apartment" },
        { label: "Townhouse", value: "townhouse" },
    ]);

    return (
        <View className="w-full">
            <View className="container flex flex-col gap-4">
                {/*  */}
                <View className="w-full">
                    <Text className="text-base mb-1">Location</Text>

                    <View className="border bg-white border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                        <TextInput
                            placeholder={"Enter a state or locality or area"}
                            className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                            value={location}
                            onChangeText={setLocation}
                        />
                        <Ionicons
                            name="location-outline"
                            size={24}
                            color={colors.text}
                        />
                    </View>
                </View>

                {/* Type */}
                <View className="w-full z-50">
                    <Text className="text-base mb-1">Type</Text>
                    <DropDownPicker
                        open={open}
                        setOpen={setOpen}
                        value={type}
                        setValue={setType}
                        items={typeList}
                        setItems={setTypeList}
                        multiple={false}
                        placeholder="Select type"
                        onOpen={() => setOpen(true)}
                        style={{
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: "#ccc",
                        }}
                        dropDownContainerStyle={{
                            borderColor: "#ccc",
                            backgroundColor: "white",
                        }}
                    />
                </View>

                {/*  */}
                <View className="w-full">
                    <Text className="text-base mb-1">Bedrooms</Text>

                    <View className="border bg-white border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                        <TextInput
                            placeholder={"Number of bedrooms"}
                            className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                            value={bedrooms}
                            keyboardType="number-pad"
                            onChangeText={setBedrooms}
                        />
                        <Ionicons
                            name="bed-outline"
                            size={24}
                            color={colors.text}
                        />
                    </View>
                </View>

                {/*  */}
                <View className="w-full">
                    <Text className="text-base mb-1">Minimum Price</Text>

                    <View className="border bg-white border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                        <TextInput
                            placeholder={"Minimum Price"}
                            className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                            value={minPrice}
                            keyboardType="number-pad"
                            onChangeText={setMinPrice}
                        />
                        <MaterialIcons
                            name="attach-money"
                            size={24}
                            color={colors.text}
                        />
                    </View>
                </View>

                {/*  */}
                <View className="w-full">
                    <Text className="text-base mb-1">Maximum Price</Text>

                    <View className="border bg-white border-gray-300 rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3">
                        <TextInput
                            placeholder={"Maximum Price"}
                            className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                            value={maxPrice}
                            keyboardType="number-pad"
                            onChangeText={setMaxPrice}
                        />
                        <MaterialIcons
                            name="attach-money"
                            size={24}
                            color={colors.text}
                        />
                    </View>
                </View>

                <Button title="Search" className="mt-8" />
            </View>
        </View>
    );
};

export default RentSearchForm;

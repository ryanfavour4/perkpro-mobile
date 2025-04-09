import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import AgentNavbar from '@/layouts/agent-navbar'
import { TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { images } from '@/constants/images'
import { StatusBar } from 'expo-status-bar'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import RadioGroup from 'react-native-radio-buttons-group';


export default function editProperty() {
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'For Rent',
            value: 'Rent'
        },
        {
            id: '2',
            label: 'For Sale',
            value: 'Sale'
        }, {
            id: '3',
            label: "For Shortlet",
            value: 'Shortlet'
        }
    ]), []);
    const {property} = useLocalSearchParams()
    // const propertyData = typeof property === 'string' ? JSON.parse(property) : property;
    // console.log('property', propertyData);
    

    const [selectedId, setSelectedId] = useState();
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <StatusBar style="dark" />
            <AgentNavbar />
            <View className='bg-white flex-row justify-between px-5 py-3 mb-3' style={{ marginTop: -10 }}>
                <View className='flex-row gap-2 mt-1'>
                    <TouchableOpacity onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text className='text-xl font-[600] mt-1'>Edit Property</Text>
                <View></View>
            </View>
            <View className="flex-row items-center gap-2 space-x-1 px-5 mb-5">
                <Text>Property Type:</Text>
                {radioButtons.map((radio, index) => (
                    <TouchableOpacity
                        key={radio.id}
                        onPress={() => setSelectedId(radio.id)}
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}
                    >
                        <View
                            style={{
                                height: 16,
                                width: 16,
                                borderRadius: 8,
                                borderWidth: 1,
                                borderColor: '#0415FE',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {selectedId === radio.id && (
                                <View
                                    style={{
                                        height: 8,
                                        width: 8,
                                        borderRadius: 4,
                                        backgroundColor: '#0415FE',
                                    }}
                                />
                            )}
                        </View>
                        <Text style={{ marginLeft: 4 }}>{radio.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView className='px-5'>
                <View className='mb-4'>
                    <Text className='mb-3'>Add Images</Text>
                    <View className='flex-row gap-3 flex-wrap'>
                        <TouchableOpacity className='border border-[#0415FEA6] flex-row justify-center items-center rounded-lg bg-[#0415FE1F] border-dashed' style={{ width: 100, height: 100 }} >
                            <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity className='border border-[#0415FEA6] flex-row justify-center items-center rounded-lg bg-[#0415FE1F] border-dashed' style={{ width: 100, height: 100 }} >
                            <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity className='border border-[#0415FEA6] flex-row justify-center items-center rounded-lg bg-[#0415FE1F] border-dashed' style={{ width: 100, height: 100 }} >
                            <AntDesign name="plus" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='mb-4'>
                    <TextInput placeholder='Property Title' className='p-4 text-xl font-[700]' style={{ borderBottomWidth: 1, borderBottomColor: '#0415FE' }} />
                </View>
                <View className='mb-4'>
                    <Text className='mb-1'>Short Description (Summary)</Text>
                    <TextInput multiline className='px-4 pt-2 pb-10 text-sm rounded-lg ' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                </View>
                <View className='mb-4'>
                    <Text className='mb-1'>Long Description</Text>
                    <TextInput multiline className='px-4 pt-2 pb-10 text-sm rounded-lg ' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                </View>
                <View className='mb-4'>
                    <Text className='mb-1'>Property Features</Text>
                    <View className='flex-row gap-3 mb-2'>
                        <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                        <TouchableOpacity className='p-4 flex-row justify-center items-center bg-[#0415FE] rounded-lg'>
                            <AntDesign name="plus" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View className='flex-row gap-3 mb-2'>
                        <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                        <TouchableOpacity className='p-4 flex-row justify-center items-center bg-[#0415FE] rounded-lg'>
                            <AntDesign name="plus" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='mb-4'>
                    <Text className='mb-1'>Location - Address</Text>
                    <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                    <View className='mt-3 flex-row gap-4'>
                        <View className='flex-1 flex-row' style={{ gap: 5 }}>
                            <Text className='mt-3'>LGA</Text>
                            <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                        </View>
                        <View className='flex-1 flex-row' style={{ gap: 5 }}>
                            <Text className='mt-3'>State</Text>
                            <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                        </View>
                    </View>

                </View>
                <View className='mb-4'>
                    <Text className='mb-1'>Property Price ₦</Text>
                    <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                </View>
                <View className='mb-5'>
                    <Text className='mb-1'>Total Package ₦</Text>
                    <TextInput className='p-4 text-sm flex-1 rounded-lg' style={{ borderWidth: 1, borderColor: '#0415FE' }} />
                </View>
                <View className='flex-row gap-4 mb-10 flex-nowrap'>
                    <TouchableOpacity className='p-4 flex-1 flex-row gap-3 rounded-lg bg-[#0415FE] justify-center'>
                        <Text className='text-white'>Save Property</Text>
                        <MaterialCommunityIcons name="folder" size={17} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className='p-4 flex-1 flex-row gap-3 rounded-lg justify-center' style={{ backgroundColor: '#F80E0E' }}>
                        <Text className='text-white'>Delete Property</Text>
                        <Ionicons name="trash" size={17} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
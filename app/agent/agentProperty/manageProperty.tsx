import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '@/constants/images'
import AntDesign from '@expo/vector-icons/AntDesign';
import AgentNavbar from '@/layouts/agent-navbar';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import PropertyCard from '@/components/property-card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAgentProperties } from '@/redux/slices/propertySlice';
import Loader from '@/components/loader';

export default function manageProperty() {
    const dispatch = useDispatch()
    const { agentProperties, loading, error, errorMessage } = useSelector(state => state.property)
    const [isRefreshing, setIsRefreshing] = React.useState(false)

    useEffect(() => {
        if (agentProperties === undefined || agentProperties === null) {
            dispatch(fetchAgentProperties())
        }
    }, [dispatch])

    const renderItem = ({ item }) => <PropertyCard data={item} />
    const onRefresh = () => {
        dispatch(fetchAgentProperties())
        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000)
    }

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
                <Text className='text-xl font-[600] mt-1'>Manage Propeties</Text>
                <TouchableOpacity onPress={() => router.push('/agent/agentProperty/addProperty')}>
                    <Image source={images.plusIcon} className='w-8 h-8' />
                </TouchableOpacity>
            </View>
            <ScrollView className='px-5' refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}>
                {agentProperties?.length > 0 && (<FlatList
                    data={agentProperties}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />)}

                {
                    agentProperties?.length === 0 && (
                        <View className='flex-1 justify-center items-center'>
                            <Image source={images.emptyBoxGif} style={{ width: 200, height: 200 }} />
                            <Text className='text-lg font-[500]' style={{ marginTop: -35 }}>No Properties Found</Text>
                            <Text className='text-sm text-center'>You have not added any properties yet</Text>
                        </View>
                    )

                }

            </ScrollView>
        </SafeAreaView>
    )
}
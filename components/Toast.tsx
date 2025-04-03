import { View, Text } from 'react-native'
import React from 'react'


type props = {
    status: 'Error' | 'Success' | 'Warning'
}

export default function Toast({ status }: props) {
    return (
        <View className='absolute' style={{ top: 0, right: 0, left: 0, width: '100%' }}>
           <View className='w-1/2 mx-auto'>
           <Text>Toast</Text>
           </View>
        </View>
    )
}
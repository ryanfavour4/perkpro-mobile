import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images'
import { Video, ResizeMode } from 'expo-av'
import loaderVideo from '../assets/images/loader.mp4'

export default function Loader() {
    const [currentIndex, setCurrentIndex] = useState(1)
    return (
        <SafeAreaView className='flex-1 h-full w-full flex flex-row justify-center items-center bg-white' style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
            zIndex: 100
        }}>
            <View>
                <Image source={images.logo} resizeMode="contain" style={{ alignSelf: 'center', width: 200, height: 60 }} />
                <View className='flex-row justify-center'>
                    <Video
                        source={loaderVideo}
                        resizeMode={ResizeMode.CONTAIN}
                        shouldPlay
                        isLooping
                        isMuted
                        className="rounded-lg"
                        style={{ width: 50, height: 50 }} // Add dimensions
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

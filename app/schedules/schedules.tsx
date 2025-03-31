import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Image } from "react-native";
import { images } from "@/constants/images";
import HeaderTopNavbar from "@/layouts/header-top-navbar";

export default function Schedules() {
    return (
        <>
            <StatusBar style="dark" />
            <HeaderTopNavbar title="Manage your Schedules" />
            <ScrollView className="px-4 bg-light-100">
                <View className="pb-10">
                    {/* Section 1 */}
                    <View className="flex flex-1 items-center justify-center">
                        <Image
                            source={images.emptyBoxGif}
                            resizeMode="cover"
                            className="size-56 rounded-lg"
                        />

                        <Text className="text-center">
                            You currently have no scheduled events
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

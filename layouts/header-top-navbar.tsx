import { Image, Platform, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import {
    AntDesign,
    Feather,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTheme } from "@/contexts/theme";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { menuLinks } from "@/constants/menu";
import { TouchableOpacity } from "react-native";

type NavLink = {
    name: string;
    link: any;
    iconName: any;
    iconLibrary:
    | "Feather"
    | "Ionicons"
    | "AntDesign"
    | "Fontisto"
    | "MaterialCommunityIcons";
    isActive: boolean;
};

const iconMap = {
    Feather,
    Ionicons,
    AntDesign,
    Fontisto,
    MaterialCommunityIcons,
};

type props = {
    title: string;
};

export default function HeaderTopNavbar({ title }: props) {
    const router = useRouter();
    const { colors } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navLink, setNavLink] = useState<NavLink[]>(menuLinks);

    const navLinkHandler = (link: string) => {
        console.log(link);
        // set active navlink
        setNavLink((prev) => {
            return prev.map((navLink) => {
                if (navLink.name === link) {
                    return { ...navLink, isActive: true };
                } else {
                    return { ...navLink, isActive: false };
                }
            });
        });
    };

    return (
        <>
            <SafeAreaView
                // className={`${Platform.OS === "ios" ? "h-36" : "h-28"
                //     } bg-light-100`}
                className="bg-light-100 py-3"
            >
                <View className="relative mt-4 bg-light-100 ">
                    <View className="px-4 pt-2 flex items-center justify-between flex-row container">

                        <View>
                            <Feather
                                onPress={() => router.back()}
                                name="chevron-left"
                                size={24}
                                color={colors["dark-100"]}
                            />


                        </View>

                        <Text className="text-lg font-semibold" style={{ marginTop: -4 }}>
                            {title}
                        </Text>

                        <Feather
                            onPress={() => setIsMenuOpen(!isMenuOpen)}
                            className="rounded-lg p-2"
                            name="menu"
                            size={24}
                            color={colors.text}
                        />
                    </View>
                </View>
            </SafeAreaView>
                      <ScrollView
                           className={`bg-primary-100 transition-all duration-300 absolute top-0 bottom-0 right-0 left-0 w-full z-10
                           ${Platform.OS === "ios" ? "py-16" : "py-5 mt-8"}
                           ${isMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
                       >
                           <View className="px-6 flex items-center justify-between flex-row">
                               <Image
                                   resizeMode="contain"
                                   className="rounded-full w-8 h-8"
                                   source={images.noUser}
                                   alt="Image"
                               />
           
                               <Feather
                                   onPress={() => setIsMenuOpen(!isMenuOpen)}
                                   className="rounded-lg p-2"
                                   name="menu"
                                   size={24}
                                   color={colors["light-100"]}
                               />
                           </View>
           
                           <View className="mt-7 container px-4 flex gap-5 flex-col">
                               {navLink.map((link, index) => {
                                   const IconComponent = iconMap[link.iconLibrary]; // Dynamically select the library
           
                                   return (
                                       <TouchableOpacity
                                           key={index}
                                           onPress={() => navLinkHandler(link.link)}
                                           className={`border-light-100 border rounded-lg hover:opacity-50 ${link.isActive
                                                   ? "bg-light-100"
                                                   : "bg-primary-100"
                                               }`}
                                       >
                                           <View>
                                               <View className="py-3.5 px-3 w-full flex flex-row items-center gap-4">
                                                   <IconComponent
                                                       name={link.iconName}
                                                       color={
                                                           link.isActive
                                                               ? colors["primary-100"]
                                                               : colors["light-100"]
                                                       }
                                                       size={22}
                                                   />
           
                                                   <Text
                                                       className={`text-lg ${link.isActive
                                                               ? "text-primary-100"
                                                               : "text-light-100"
                                                           }`}
                                                   >
                                                       {link.name}
                                                   </Text>
                                               </View>
                                           </View>
                                       </TouchableOpacity>
                                   );
                               })}
           
                               <View className="flex flex-col gap-3">
                                   <View
                                       className={`border-green-500 border rounded-lg hover:opacity-50 bg-green-500`}
                                   >
                                       <Link href={"/"}>
                                           <View className="py-3.5 px-3 w-full flex flex-row items-center gap-4">
                                               <AntDesign
                                                   name="customerservice"
                                                   size={24}
                                                   color={colors["light-100"]}
                                               />
           
                                               <Text className={`text-lg text-light-100`}>
                                                   Contact Support
                                               </Text>
                                           </View>
                                       </Link>
                                   </View>
                                   <View
                                       className={`border-red-500 border rounded-lg hover:opacity-50 bg-red-500`}
                                   >
                                       <Link href={"/"}>
                                           <View className="py-3.5 px-3 w-full flex flex-row items-center gap-4">
                                               <AntDesign
                                                   name="logout"
                                                   size={24}
                                                   color={colors["light-100"]}
                                               />
           
                                               <Text className={`text-lg text-light-100`}>
                                                   Log Out
                                               </Text>
                                           </View>
                                       </Link>
                                   </View>
                               </View>
                           </View>
                       </ScrollView>
        </>
    );
}

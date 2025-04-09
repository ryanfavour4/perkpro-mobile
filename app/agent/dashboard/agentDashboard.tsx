import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { router } from 'expo-router';
import { images } from '@/constants/images';
import Chart from '@/_helpers/chart';
import AgentNavbar from '@/layouts/agent-navbar';
import { useNavigation } from '@react-navigation/native';


interface AuthState {
  auth: {
    userData: {
      first_name?: string;
      last_name?: string;
    };
  };
}

export default function AgentDashboard() {
  const { userData } = useSelector((state: AuthState) => state.auth);

  const dashboardCards = [
    {
      label: 'Total No. of tenants',
      value: '54',
      onPress: undefined,
      icon: undefined,
      isNew: false
    },
    {
      label: 'No. of properties sold',
      value: '20',
      onPress: undefined,
      icon: undefined,
      isNew: false
    },
    {
      label: 'Pending deals',
      value: '5',
      onPress: undefined,
      icon: undefined,
      isNew: false
    },
    {
      label: 'Manage properties',
      value: '+ -',
      onPress: () => router.navigate('/agent/agentProperty/manageProperty'),
      icon: undefined,
      isNew: false
    },
    {
      label: 'Chats & Messages',
      value: undefined,
      onPress: undefined,
      icon: images.chatIcon,
      isNew: false
    },
    {
      label: 'Estate Management',
      value: undefined,
      onPress: undefined,
      icon: images.houseIcon,
      isNew: true
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <StatusBar style="light" />
      {/* <AgentNavbar /> */}
      <ScrollView>
        <LinearGradient
          colors={['#010B98', '#000432']}
          className="flex-1"
        >


          <View className="mb-6">
            <View className="flex-row justify-center gap-2 pb-3 bg-white pt-3 px-5">
              <Text className="text-2xl">Hello,</Text>
              <Text className="text-2xl font-semibold">
                {userData?.first_name} {userData?.last_name}
              </Text>
            </View>
            <Chart />
          </View>

          <View className="flex-col gap-3 px-5 mb-[20px]">
            {dashboardCards.map((card, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row justify-between p-6 rounded-lg relative ${card.isNew ? 'border border-[#0415FEA6]' : ''}`}
                style={{ backgroundColor: card.isNew ? '#000000' : '#0415FE' }}
                onPress={card.onPress}
                activeOpacity={0.8}
              >
                {card.isNew && (
                  <View className="absolute top-[-10px] left-0">
                    <Image source={images.newIcon} className="w-[30px] h-[30px]" />
                  </View>
                )}
                <Text className="text-white text-base">{card.label}</Text>
                {card.value ? (
                  <Text className="text-white text-base">{card.value}</Text>
                ) : (
                  <Image source={card.icon} className="w-5 h-5" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
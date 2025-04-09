import { NavLink } from "@/layouts/top-navbar";

export const agentMenuLinks: NavLink[] = [
    {
        name: "Profile",
        link: "/agent/agentProfile/userProfile",
        iconLibrary: "Feather",
        iconName: "user",
        isActive: false,
    },
    {
        name: "KYC document",
        link: "/agent/agentProfile/agentKyc",
        iconLibrary: "Feather",
        iconName: "heart",
        isActive: false,
    },
    {
        name: "General Settings",
        link: "/schedules/schedules",
        iconLibrary: "AntDesign",
        iconName: "calendar",
        isActive: false,
    },
    {
        name: "Make a complaint",
        link: "/auth/login",
        iconLibrary: "Feather",
        iconName: "trending-up",
        isActive: false,
    },
    {
        name: "Chat with customer care",
        link: "/chat/chat-list",
        iconLibrary: "Ionicons",
        iconName: "chatbubbles-outline",
        isActive: false,
    },
];

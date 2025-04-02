import { NavLink } from "@/layouts/top-navbar";

export const menuLinks: NavLink[] = [
    {
        name: "Profile",
        link: "/user/profile",
        iconLibrary: "Feather",
        iconName: "user",
        isActive: false,
    },
    {
        name: "Wishlist",
        link: "/wishlist/wishlist",
        iconLibrary: "Feather",
        iconName: "heart",
        isActive: false,
    },
    {
        name: "Schedules",
        link: "/schedules/schedules",
        iconLibrary: "AntDesign",
        iconName: "calendar",
        isActive: false,
    },
    {
        name: "Rent Financing",
        link: "/auth/login",
        iconLibrary: "Feather",
        iconName: "trending-up",
        isActive: false,
    },
    {
        name: "Search Companies",
        link: "/search/companies",
        iconLibrary: "MaterialCommunityIcons",
        iconName: "home-search-outline",
        isActive: false,
    },
    {
        name: "Notification",
        link: "/notifications/notifications",
        iconLibrary: "Feather",
        iconName: "bell",
        isActive: false,
    },
    {
        name: "Chats",
        link: "/chat/chat-list",
        iconLibrary: "Ionicons",
        iconName: "chatbubbles-outline",
        isActive: false,
    },
];

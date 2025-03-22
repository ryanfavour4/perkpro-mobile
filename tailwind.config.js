/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./app/auth/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#0415FE",
                    200: "#010B98",
                    default: "#0415FE",
                },
                secondary: {
                    100: "#FFC107",
                    default: "#FFC107",
                },
                dark: {
                    default: "#1A1A1A",
                    50: "#707070",
                    100: "#1A1A1A",
                    200: "#000000",
                },
                light: {
                    default: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#F5F5F5",
                },
            },
        },
    },
    plugins: [],
};


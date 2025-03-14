/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./app/auth/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
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
                dark: {
                    default: "#1A1A1A",
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


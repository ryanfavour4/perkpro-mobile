import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/theme";

interface PasswordInputProps extends TextInputProps {
    value: string;
    className?: string;
    onChangeText: (password: string) => void;
    placeholder?: string;
}

export default function PasswordInput({
    value,
    onChangeText,
    className,
    placeholder = "Password",
    ...rest
}: PasswordInputProps) {
    const { colors } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View
            className={`border border-[#0415FEA3] rounded-lg w-full px-4 flex flex-row items-center justify-between gap-3 ${className}`}
        >
            <TextInput
                placeholder={placeholder}
                className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={!showPassword} // Toggle visibility
                {...rest}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={colors.text}
                />
            </TouchableOpacity>
        </View>
    );
}

import {
    Text,
    Pressable,
    ActivityIndicator,
    View,
    PressableProps,
} from "react-native";
import { ReactNode } from "react";
import { useTheme } from "@/contexts/theme";

interface ButtonProps extends PressableProps {
    title: string;
    onPress?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: "solid" | "outline";
    icon?: ReactNode;
    className?: string;
    [key: string]: any; // Support extra props
}

export default function Button({
    title,
    onPress,
    isLoading = false,
    disabled = false,
    variant = "solid",
    icon,
    className = "",
    ...rest
}: ButtonProps) {
    const { colors } = useTheme();

    return (
        <Pressable
            onPress={!disabled && !isLoading ? onPress : undefined}
            className={`
                ${
                    variant === "solid"
                        ? "bg-primary-100"
                        : "border border-primary-100 bg-light-100"
                } 
                ${disabled ? "opacity-50" : "active:opacity-75"} 
                py-5 px-6 rounded-lg items-center justify-center flex-row ${className}

            `}
            disabled={disabled}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator
                    color='white'
                />
            ) : (
                <View className="flex flex-row items-center gap-2">
                    {icon && <View>{icon}</View>}
                    <Text
                        className={`font-semibold ${
                            variant === "solid"
                                ? "text-light-100"
                                : "text-primary-100"
                        }`}
                    >
                        {title}
                    </Text>
                </View>
            )}
        </Pressable>
    );
}

import React from "react";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/theme";

const Checkbox = ({
    className,
    checked,
    setChecked,
}: {
    className?: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
}) => {
    const { colors } = useTheme();

    return (
        <Pressable
            onPress={() => setChecked(!checked)}
            className={`${className}`}
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: checked ? colors["primary-200"] : "#ccc",
            }}
        >
            <View
                style={{
                    width: 24,
                    height: 24,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {checked && (
                    <Ionicons
                        name="checkmark"
                        size={20}
                        color={colors["primary-100"]}
                    />
                )}
            </View>
        </Pressable>
    );
};

export default Checkbox;

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
                borderRadius: 4,
                borderWidth: 2,
                borderColor: checked ? colors["primary-200"] : "#0415FEA3",
            }}
        >
            <View
                style={{
                    width: 15,
                    height: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection:'row'
                }}
            >
                {checked && (
                    <Ionicons
                        name="checkmark"
                        size={14}
                        color={colors["primary-100"]}
                    />
                )}
            </View>
        </Pressable>
    );
};

export default Checkbox;

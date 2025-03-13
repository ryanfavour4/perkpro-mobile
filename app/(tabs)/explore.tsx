import { StyleSheet, Image, Platform, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
    return (
        <SafeAreaView>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis quia dolor, minus a deserunt asperiores ut culpa!
                Obcaecati, veniam sed, eum explicabo similique cumque quod ipsa
                reiciendis vero nulla ipsam.
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
});

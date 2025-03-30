import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { useState } from "react";

export function MapComponent() {
    const [isMapReady, setIsMapReady] = useState(false);

    return (
        <View
            style={{ flex: 1, width: "100%", height: "100%", minHeight: 400 }}
        >
            {!isMapReady && (
                <View
                    style={{
                        position: "absolute",
                        top: 200,
                        left: 0,
                        right: 0,
                        alignItems: "center",
                    }}
                >
                    <Text>Loading Map...</Text>
                </View>
            )}

            <MapView
                style={{ width: "100%", height: "100%" }}
                initialRegion={{
                    latitude: 6.5244, // Lagos
                    longitude: 3.3792,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                onMapReady={() => {
                    alert("Map loaded successfully");
                    console.log("Map loaded successfully");
                    setIsMapReady(true);
                }}
            ></MapView>
        </View>
    );
}

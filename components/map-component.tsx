import { View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

export function MapComponent() {
    return (
        <View
            style={{ flex: 1, width: "100%", height: "100%", minHeight: 400 }}
        >
            <MapView
                provider={PROVIDER_DEFAULT}
                style={{ width: "100%", height: "100%" }}
                region={{
                    latitude: 6.5244, // Example: Lagos
                    longitude: 3.3792,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            />
        </View>
    );
}

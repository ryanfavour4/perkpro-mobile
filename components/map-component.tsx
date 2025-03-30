import { View } from "react-native";
import { WebView } from "react-native-webview";

export function MapComponent() {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
      <style>
      * {
            margin: 0;
            padding: 0;
            transition: all 0.1s ease;
            scroll-behavior: smooth;
            box-sizing: border-box;
        }
      </style>
    </head>
    <body>
      <div id="map" style="width:100%; height:100%; min-height:120px; flex:1;"></div>
          <script>
          var map = L.map('map').setView([6.5244, 3.3792], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
          var marker = L.marker([6.5244, 3.3792]).addTo(map);
          marker.bindPopup("<b>Hello Lagos!</b><br>This is a marker.").openPopup();
        </script>
    </body>
    </html>
  `;

    return (
        <View style={{ flex: 1 }}>
            <WebView originWhitelist={["*"]} source={{ html }} />
        </View>
    );
}

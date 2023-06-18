import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Image, StyleSheet, View } from "react-native";

export default function Map() {
  const [coord, setCoord] = useState({
    latitude: 41.708889,
    longitude: 44.751389,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.716667,
          longitude: 44.78333,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}
      >
        <Marker
          coordinate={{
            latitude: 41.720287,
            longitude: 44.740614,
          }}
          title="SHAURMA"
          description="Shereuli"
        >
          <Image
            source={require("../../../assets/icons/restaurant.png")}
            style={{ width: 35, height: 35 }}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 41.708889,
            longitude: 44.751389,
          }}
          title="Vakis Parki"
          description="Bavshvoba"
        >
          <Image
            source={require("../../../assets/icons/restaurant.png")}
            style={{ width: 35, height: 35 }}
          />
        </Marker>
        <Marker
          draggable
          key="marker"
          coordinate={{
            latitude: 41.708889,
            longitude: 44.751389,
          }}
          style={{ width: 100, height: 100 }}
        />
        <Polyline
          coordinates={[
            { latitude: 41.708889, longitude: 44.751389 },
            { latitude: 41.708889, longitude: 44.751389 },
            { latitude: 41.708889, longitude: 44.751389 },
            { latitude: 41.708889, longitude: 44.751389 },
            { latitude: 41.708889, longitude: 44.751389 },
            { latitude: 41.708889, longitude: 44.751389 },
          ]}
          lineDashPattern={[0]}
          strokeColor="#43BE79"
          strokeWidth={15}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "50%",
    height: "100%",
  },
});

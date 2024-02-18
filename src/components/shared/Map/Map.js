import React from "react";
import OpenMap from "react-native-open-maps";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./Map.styles";

export function Map(props) {
  const { location, address } = props;

  const openAppMaps = () => {
    const coordinatesQuery = `${location.latitude},${location.longitude}`;

    OpenMap({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
      query: coordinatesQuery,
    });
  };

  return (
    <MapView
      style={styles.content}
      initialRegion={location}
      showsUserLocation={true}
      maxZoomLevel={20}
      minZoomLevel={5}
      onPress={openAppMaps}
      scrollEnabled={false}
    >
      <Marker draggable coordinate={location} />
    </MapView>
  );
}

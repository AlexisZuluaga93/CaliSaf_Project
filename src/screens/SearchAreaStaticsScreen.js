import React from "react";
import MapView, { MapHeatmap, Heatmap } from "react-native-maps";

export const SearchScreen = () => {
  const reportCoordinates = [
    { latitude: 3.43722, longitude: -76.5225, weight: 0.01 },
    { latitude: 3.43733, longitude: -765225, weight: 0.01 },
    // Agrega más coordenadas según tus datos
  ];
  const caliLocation = {
    latitude: 3.43722,
    longitude: -76.5225,
    latitudeDelta: 0.125,
    longitudeDelta: 0.125,
  };
  return (
    <MapView style={{ flex: 1 }} initialRegion={caliLocation} provider="google">
      <Heatmap points={reportCoordinates} opacity={0.9} />
    </MapView>
  );
};

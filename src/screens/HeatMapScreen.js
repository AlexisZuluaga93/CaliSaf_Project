import { HeatMapInfo } from "../components/HeatMap";

import { View, Text } from "react-native";
import React from "react";

export function HeatMapScreen() {
  return <HeatMapInfo />;
}
/*import React, { useEffect, useState } from "react";
import MapView, { Heatmap } from "react-native-maps";
import { onSnapshot, query, collection } from "firebase/firestore";
export const HeatMapScreen = () => {
  const [reportsLocations, setReportsLocations] = useState([]);
  const caliLocation = {
    latitude: 3.43722,
    longitude: -76.5225,
    latitudeDelta: 0.125,
    longitudeDelta: 0.125,
  };

  useEffect(() => {
    const q = query(collection(db, "reports"));
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data().location);
      setReportsLocations(data);
    });
  }, []);
  return (
    <MapView style={{ flex: 1 }} initialRegion={caliLocation} provider="google">
      <Heatmap points={reportCoordinates} opacity={0.9} />
    </MapView>
  );
};
*/
/*
  const reportCoordinates = [
    { latitude: 3.43722, longitude: -76.5225, weight: 0.01 },
    { latitude: 3.43733, longitude: -765225, weight: 0.01 },
    // Agrega más coordenadas según tus datos
  ];
*/

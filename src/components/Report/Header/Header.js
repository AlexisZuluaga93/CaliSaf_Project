import { View } from "react-native";
import { Text } from "react-native-elements";
import React from "react";
import { styles } from "./Header.styles";
import MapView, { Marker } from "react-native-maps";

export function Header(props) {
  const { report } = props;

  return (
    <View style={styles.content}>
      <View style={styles.containerInformation}>
        <Text style={styles.text}>{report.typeRep}</Text>
        <Text style={styles.text}>{report.description}</Text>
      </View>
      <MapView
        initialRegion={report.location}
        showsUserLocation={true}
        style={styles.mapStyle}
      >
        <Marker draggable coordinate={report.location}></Marker>
      </MapView>
    </View>
  );
}

import { View } from "react-native";
import { Text } from "react-native-elements";
import React from "react";
import { styles } from "./Header.styles";
import MapView, { Marker } from "react-native-maps";
import { Map } from "../../shared";

export function Header(props) {
  const { report } = props;

  return (
    <View style={styles.content}>
      <View style={styles.containerInformation}>
        <Text style={styles.textType}>{report.typeRep}</Text>
        <Text style={styles.text}>{report.description}</Text>
      </View>
      <Map location={report.location} address={report.address} />
    </View>
  );
}

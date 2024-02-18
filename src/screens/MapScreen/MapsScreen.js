import React, { useEffect, useState } from "react";
import { Text, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./MapScreen.styles";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { screen, auth, db } from "../../utils";
import { map } from "lodash";
import { CustomMarker } from "../../components/shared";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export function MapsScreen(props) {
  const { navigation, route } = props;
  const caliLocation = {
    latitude: 3.43722,
    longitude: -76.5225,
    latitudeDelta: 0.125,
    longitudeDelta: 0.125,
  };

  const [locations, setLocations] = useState([]);
  const [typeRep, setTypeRep] = useState([]);
  const [ids, setIds] = useState([]);
  const [filter, setFilter] = useState(null);
  const [filteredReports, setFilteredReports] = useState([]);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "reports"));
    onSnapshot(q, (snapshot) => {
      const allData = snapshot.docs.map((doc) => doc.data());
      const data = snapshot.docs.map((doc) => doc.data().location);
      const typeRep = snapshot.docs.map((doc) => doc.data().typeRep);
      const ids = snapshot.docs.map((doc) => doc.data().id);

      setAllData(allData);
      setLocations(data);
      setTypeRep(typeRep);
      setIds(ids);
    });
  }, []);

  const presFilter = () => {
    console.log("LARGO DE FILTRO ANTES DE :", filteredReports.length);
    const filterReport = allData.filter(
      (item) => item.typeRep.trim() === "Accidente"
    );
    const filteredLocations = filterReport.map((report) => report.location);
    setLocations(filteredLocations);
    setFilteredReports(filterReport);
    console.log("LARGO DE FILTRO despues DE :", locations);
  };
  const goToReport = (reportIndex) => {
    const selectedReportId = ids[reportIndex];

    if (selectedReportId) {
      navigation.navigate(screen.reports.tab, {
        screen: screen.reports.report,
        params: { id: selectedReportId },
      });
    } else {
      console.error("No se encontró el informe seleccionado.");
    }
  };

  return (
    <MapView
      style={styles.content}
      initialRegion={caliLocation}
      mapType="standard"
      provider="google"
      minZoomLevel={12.5}
    >
      {filteredReports.length < 1
        ? map(locations, (location, index) => (
            <Marker
              key={index}
              coordinate={location}
              onPress={() => goToReport(index)}
            >
              <CustomMarker type={typeRep[index]} />
            </Marker>
          ))
        : map(locations, (location, index) => (
            <Marker
              key={index}
              coordinate={location}
              onPress={() => goToReport(index)}
            >
              <CustomMarker type={typeRep[index]} />
            </Marker>
          ))}

      <Icon
        type="material-community"
        name="filter-variant"
        iconStyle={styles.icon}
        size={50}
        onPress={presFilter}
      />
    </MapView>
  );
}

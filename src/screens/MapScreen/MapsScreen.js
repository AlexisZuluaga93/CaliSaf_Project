import React, { useEffect, useState } from "react";
import { Text, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./MapScreen.styles";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { screen, auth, db } from "../../utils";
import { map } from "lodash";
import { CustomMarker } from "../../components/shared";

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

  useEffect(() => {
    const q = query(collection(db, "reports"));
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data().location);
      const typeRep = snapshot.docs.map((doc) => doc.data().typeRep);
      const ids = snapshot.docs.map((doc) => doc.data().id);
      setLocations(data);
      setTypeRep(typeRep);
      setIds(ids);
    });
  }, []);

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
    >
      {map(locations, (location, index) => (
        <Marker
          key={index}
          coordinate={location}
          onPress={() => goToReport(index)}
        >
          <CustomMarker type={typeRep[index]} />
        </Marker>
      ))}
    </MapView>
  );
}

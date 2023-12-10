import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { screen, auth, db } from "../../../utils";
import { styles } from "./ReportsScreen.styles";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { LoadingModal } from "../../../components/shared";
import { ListReports } from "../../../components/Reports";
export function ReportsScreen(props) {
  const [reports, setReports] = useState(null);
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(collection(db, "reports"), orderBy("createAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("reports", JSON.stringify(data));
      setReports(data);
    });
  }, []);

  const goToCreateNewReport = () => {
    navigation.navigate(screen.reports.tab, {
      screen: screen.reports.addReportScreen,
    });
  };
  return (
    <View style={styles.content}>
      {!reports ? (
        <LoadingModal show text="Cargando" />
      ) : (
        <ListReports reports={reports} />
      )}

      {currentUser && (
        <Icon
          containerStyle={styles.btnContainer}
          reverse
          type="material-community"
          name="plus"
          iconStyle={styles.icon}
          onPress={goToCreateNewReport}
        />
      )}
    </View>
  );
}

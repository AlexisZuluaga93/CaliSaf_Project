import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./ReportScreen.styles";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../utils";
import { Carousel, Loading } from "../../../components/shared";
export function ReportScreen(props) {
  const { width } = Dimensions.get("window");
  const [report, setReport] = useState(null);
  const { route } = props;
  useEffect(() => {
    setReport(null);
    onSnapshot(doc(db, "reports", route.params.id), (doc) => {
      setReport(doc.data());
      console.log(doc.data());
    });
  }, [route.params.id]);

  if (!report) {
    return <Loading show text="Cargando restaurantes" />;
  }
  console.log(route.params);
  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={report.images} height={250} width={width} />
    </ScrollView>
  );
}

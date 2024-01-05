import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { styles } from "./ListReports.styles";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
export function ListReports(props) {
  const navigation = useNavigation();
  const { reports } = props;
  const reportLocation = reports.location;
  const images = reports.images;
  const goToReport = (report) => {
    navigation.navigate(screen.reports.report, { id: report.id });
  };

  return (
    <FlatList
      data={reports}
      renderItem={(doc) => {
        const report = doc.item;
        return (
          <TouchableOpacity onPress={() => goToReport(report)}>
            <View style={styles.content}>
              <Image source={{ uri: report.images[0] }} style={styles.images} />
              <View>
                <Text style={styles.typeReport}>{report.typeRep}</Text>
                <Text style={styles.info}>{report.address}</Text>
                <Text style={styles.info}>{report.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

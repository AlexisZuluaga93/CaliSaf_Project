import { View, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { styles } from "./ListReports.styles";
import { Text, Image } from "react-native";
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
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <FlatList
      width={width}
      height={420}
      data={reports}
      renderItem={(doc) => {
        const report = doc.item;

        return (
          <TouchableOpacity
            onPress={() => goToReport(report)}
            style={{ ...styles.container, width: width - 100, height: 420 }}
          >
            <View style={styles.imageContent}>
              <Image source={{ uri: report.images[0] }} style={styles.images} />
            </View>
            <View style={styles.typeContent}>
              <Text style={styles.typeReport}>{report.typeRep}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

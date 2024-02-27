import { View, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { styles } from "./ListReports.styles";
import { Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function ListReports(props) {
  const [mode, setMode] = useState("horizontal-stack");
  const [snapDirection, setSnapDirection] = useState("left");
  const navigation = useNavigation();
  const { reports } = props;
  const goToReport = (report) => {
    navigation.navigate(screen.reports.report, { id: report.id });
  };
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Carousel
          loop={false}
          width={width}
          height={height / 2}
          autoPlay={false}
          data={reports}
          modeConfig={{
            snapDirection,
            stackInterval: 30,
          }}
          mode={mode}
          scrollAnimationDuration={2000}
          renderItem={(doc) => {
            const report = doc.item;

            return (
              <TouchableOpacity
                onPress={() => goToReport(report)}
                style={{
                  ...styles.container,
                  width: width - 100,
                  height: height / 2,
                }}
              >
                <View style={styles.imageContent}>
                  <Image
                    source={{ uri: report.images[0] }}
                    style={styles.images}
                  />
                </View>
                <View style={styles.typeContent}>
                  <Text style={styles.typeReport}>{report.typeRep}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

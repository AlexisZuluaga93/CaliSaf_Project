import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import { styles } from "./TypeReport.styles";
import RNPickerSelect from "react-native-picker-select";
export function TypeReport(props) {
  const { onValueChange, placeholder, options } = props;

  return (
    <View style={styles.content}>
      <Text>Selecciona una opción:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={onValueChange}
        style={Platform.OS === "ios" ? styles.inputIOS : styles.inputAndroid}
      />
    </View>
  );
}

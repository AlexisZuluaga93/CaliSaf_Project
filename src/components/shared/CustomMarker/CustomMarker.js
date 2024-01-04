import { View, Text } from "react-native";
import React from "react";
import { styles } from "./CustomMarker.styles";
import { Image } from "react-native-elements";

export function CustomMarker({ type }) {
  let imageMarker = "";
  switch (type) {
    case "Accidente":
      imageMarker = require("../../../../assets/img/Accidente.png");
      break;

    case "Asesinato":
      imageMarker = require("../../../../assets/img/Asesinato.png");
      break;

    case "Fleteo":
      imageMarker = require("../../../../assets/img/Fleteo.png");
      break;

    case "Robo":
      imageMarker = require("../../../../assets/img/Robo.png");
      break;

    case "Manoseo":
      imageMarker = require("../../../../assets/img/Manoseo.png");
      break;
  }
  return <Image source={imageMarker} type={type} style={styles.icon} />;
}

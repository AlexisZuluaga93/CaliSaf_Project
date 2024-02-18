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

    case "Robo":
      imageMarker = require("../../../../assets/img/Robo.png");
      break;
  }
  return (
    <Image
      source={imageMarker}
      type={type}
      style={styles.icon}
      containerStyle={styles.containerIcon}
    />
  );
}

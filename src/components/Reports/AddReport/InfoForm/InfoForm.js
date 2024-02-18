import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";
import { MapForm } from "../MapForm";
import { TypeReport } from "../../../shared";
export function InfoForm(props) {
  const { formik } = props;
  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState);
  };
  const [showMap, setShowMap] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (formik.values.location) {
      setLatitude(formik.values.location.latitude);
      setLongitude(formik.values.location.longitude);
    }
  }, [formik.values.location]);

  const placeholder = {
    label: "Selecciona una opción",
    value: null,
    color: "#9EA0A4",
  };

  const options = [
    { label: "Asesinato", value: "Asesinato" },
    { label: "Accidente", value: "Accidente" },
    { label: "Robo", value: "Robo" },
  ];
  const onValueChange = (value) => {
    setSelectedValue(value);
    formik.setFieldValue("typeRep", value);
  };
  return (
    <>
      <View style={styles.content}>
        <TypeReport
          selectedValue={selectedValue}
          placeholder={placeholder}
          options={options}
          onValueChange={onValueChange}
        />
        <Input
          placeholder="Selecciona una ubicacion en el mapa "
          onChangeText={(text) => formik.setFieldValue("address", text)}
          editable={false}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
          value={`${latitude},${longitude}`}
          style={styles.inputTxt}
        />
        <Input
          placeholder="Descripcion del hecho"
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
          multiline={true}
          inputContainerStyle={styles.textArea}
        />
      </View>
      <MapForm formik={formik} show={showMap} close={onOpenCloseMap} />
    </>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) {
    return "#ff0000";
  }
  if (formik.values.location) {
    return "#00a680";
  }
  return "#c2c2c2";
};

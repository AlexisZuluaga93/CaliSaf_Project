import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./InfoForm.styles";
import { Icon, Input } from "react-native-elements";
import { MapForm } from "../MapForm";
export function InfoForm(props) {
  const { formik } = props;
  const onOpenCloseMap = () => {
    setShowMap((prevState) => !prevState);
  };
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Tipo de reporte"
          onChangeText={(text) => formik.setFieldValue("typeRep", text)}
          errorMessage={formik.errors.typeRep}
        />

        <Input
          placeholder="Direccion"
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
        />
        <Input
          placeholder="Descripcion"
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

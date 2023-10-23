import { View } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeDisplayNameForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeDisplayNameForm.data";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../utils";
import Toast from "react-native-toast-message";

export function ChangeDisplayNameForm(props) {
  const { onClose, onReload } = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { displayName } = formValue;
        const currentUser = auth.currentUser;
        await updateProfile(currentUser, { displayName });
        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al cambiar nombre y apellido",
        });
      }
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y Apellidos"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title="Cambiar nombre y apellidos"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyles}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}

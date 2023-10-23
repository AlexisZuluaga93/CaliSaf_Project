import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Toast from "react-native-toast-message";
import { styles } from "./ChangeEmailForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeEmailForm.data";
import {
  verifyBeforeUpdateEmail,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../../utils";

export function ChangeEmailForm(props) {
  async function firebaseEmailReset(user, email) {
    try {
      await verifyBeforeUpdateEmail(user, email);
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const currentUser = auth.currentUser;
        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValue.password
        );
        await firebaseEmailReset(currentUser, formValue.email);
        await reauthenticateWithCredential(currentUser, credentials);
        Toast.show({
          type: "info",
          position: "top",
          text1: "Verificar correo electronico",
        });
        onReload();
        onClose();
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al cambiar el email",
        });
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const { onClose, onReload } = props;
  const onShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nuevo Email"
        containerStyle={styles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Ingresa La contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Cambiar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}

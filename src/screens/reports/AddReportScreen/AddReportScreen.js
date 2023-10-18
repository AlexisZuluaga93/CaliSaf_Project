import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./AddReportScreen.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddReportScreen.data";
import {
  UploadImageForm,
  IconReport,
  InfoForm,
} from "../../../components/Reports/AddReport";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

export function AddReportScreen() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createAt = new Date();

        const myDb = doc(db, "reports", newData.id);
        await setDoc(myDb, newData);
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <ScrollView style={styles.content}>
      <IconReport formik={formik} />
      <InfoForm formik={formik} />
      <UploadImageForm formik={formik} />
      <Button
        title="Crear Reporte"
        buttonStyle={styles.addReport}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}

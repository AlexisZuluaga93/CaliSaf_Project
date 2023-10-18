import { Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import { Icon, Avatar, Text } from "react-native-elements";
import { styles } from "./UploadImageForm.styles";
import * as ImagePicker from "expo-image-picker";
import { v4 as uuid } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { LoadingModal } from "../../../shared";
import { map, filter } from "lodash";
export function UploadImageForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { formik } = props;
  const OpenGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setIsLoading(true);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `reports/${uuid()}`);
    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotosReport(snapshot.metadata.fullPath);
    });
    response && response.body && response.body.close();
  };
  const updatePhotosReport = async (ImagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, ImagePath);

    const imageUrl = await getDownloadURL(imageRef);
    formik.setFieldValue("images", [...formik.values.images, imageUrl]);
    setIsLoading(false);
  };

  const removeImage = (img) => {
    Alert.alert(
      "Eliminar Imagen",
      "¿Estas seguro de eliminar",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = filter(
              formik.values.images,
              (image) => image !== img
            );
            formik.setFieldValue("images", result);
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };
  return (
    <>
      <ScrollView
        style={styles.viewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type="material-community"
          name="camera"
          color="#a7a7a7"
          containerStyle={styles.containerIcon}
          onPress={OpenGallery}
        />
        {map(formik.values.images, (image) => (
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={styles.imageStyle}
            onPress={() => removeImage(image)}
          />
        ))}
      </ScrollView>
      <Text styles={styles.error}>{formik.errors.images}</Text>
      <LoadingModal show={isLoading} text="Subiendo Imagen" />
    </>
  );
}

import { View } from "react-native";
import React, { useState } from "react";
import { Avatar, Text } from "react-native-elements";
import { auth } from "../../../utils";
import { styles } from "./InfoUser.styles";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

export function InfoUser(props) {
  const { uid, photoURL, displayName, email } = auth.currentUser;
  const { setLoading, setLoadingText } = props;
  const [avatar, setAvatar] = useState(photoURL);
  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.canceled) uploadImage(result.uri);
  };

  const uploadImage = async (uri) => {
    setLoadingText("Actualizando avatar");
    setLoading(true);
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath);
    });
  };

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    updateProfile(auth.currentUser, { photoURL: imageUrl });
    setAvatar(imageUrl);
    setLoading(false);
  };
  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{
          type: "material",
          name: "person",
        }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}

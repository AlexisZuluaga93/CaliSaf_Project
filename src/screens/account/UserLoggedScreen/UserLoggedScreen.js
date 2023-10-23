import { View } from "react-native";
import React, { useState } from "react";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { Button } from "react-native-elements";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils";
import { LoadingModal } from "../../../components";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const logOut = async () => {
    await signOut(auth);
  };
  const [reload, setReload] = useState(false);
  const onReload = () => {
    setReload((prevState) => !prevState);
  };
  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions onReload={onReload} />
      <View style={styles.ButtonContainer}>
        <Button
          title="Cerrar Sesion"
          buttonStyle={styles.btnStyles}
          titleStyle={styles.btnTextStyle}
          onPress={logOut}
        />
      </View>

      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}

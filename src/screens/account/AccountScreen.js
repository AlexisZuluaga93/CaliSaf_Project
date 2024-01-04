import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { auth } from "../../utils/firebase";
import { LoadingModal } from "../../components";
export function AccountScreen() {
  const [haslogged, setHasLogged] = useState(null);

  useEffect(() => {
    const authen = auth;
    onAuthStateChanged(authen, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);
  if (haslogged === null) {
    return <LoadingModal show text="Cargando" />;
  }
  return haslogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}

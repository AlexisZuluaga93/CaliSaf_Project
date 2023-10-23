import { View, Text } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { useState } from "react";
import { Modal } from "../../components/shared";
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm";
export function AccountOptions(props) {
  const { onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);
  const selectedComponents = (key) => {
    if (key === "displayName") {
      setRenderComponent(
        <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />
      );
    }
    if (key === "email") {
      setRenderComponent(<Text>Cambiar Email</Text>);
    }
    if (key === "password") {
      setRenderComponent(<Text>Cambiar Contraseña</Text>);
    }
    onCloseOpenModal();
  };
  const menuOptions = getMenuOptions(selectedComponents);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponents) {
  return [
    {
      title: "Cambiar Nombre y apellido",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponents("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "email",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponents("email"),
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponents("password"),
    },
  ];
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: 550,
  },
  mapActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btnMapContainerSave: {
    width: "30%",
    borderRadius: 25,
    marginRight: 5,
  },
  btnMapSave: {
    backgroundColor: "#00a680",
  },
  btnMapContainerCancel: {
    marginLeft: 5,
    width: "30%",
    borderRadius: 25,
  },
  btnMapCancel: {
    backgroundColor: "red",
  },
});

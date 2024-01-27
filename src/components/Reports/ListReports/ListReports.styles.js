import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    borderWidth: 1.5,
    borderColor: "#00a680",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },

    shadowOpacity: 0.8,
    shadowRadius: 8,
  },

  images: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  typeReport: {
    fontWeight: "bold",
  },
  info: {
    color: "#828282",
    paddingRight: 100,
    marginTop: 3,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    // paddingHorizontal: 7,
    //paddingBottom: 20,
  },
  imageContent: {
    flex: 1,
    backgroundColor: "#FAFAF8",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  images: {
    flex: 1,
    resizeMode: "contain",
  },
  typeReport: {
    fontWeight: "bold",
    color: "white",
  },

  typeContent: {
    height: 50,
    alignItems: "center",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: "#00a680",
    justifyContent: "center",
  },
});

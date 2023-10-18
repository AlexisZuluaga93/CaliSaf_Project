import { StyleSheet, Dimensions } from "react-native";
const widthDimensions = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
  },
  styleImage: {
    height: 200,
    width: widthDimensions,
  },
});

import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012E40",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#F28705",
    margin: 10,
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: "white",
  },

  input: {
    color: "white",
    height: 50,
    width: 500,
    margin: 12,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#F28705",
  },

  widthFull: {
    width: width,
  },

  containerFullWidth: {
    flex: 1,
    width: width,
  },
  box: {
    maxWidth: 300,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eeeee4",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  imgRedonda: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px",
  },
});

export default styles;

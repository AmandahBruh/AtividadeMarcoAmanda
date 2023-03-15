import { StyleSheet } from "react-native";

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

});

export default styles;

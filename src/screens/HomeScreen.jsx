import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";
import CadastrarScreen from "./CadastrarScreen";
import LoginScreen from "./LoginScreen";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        <h1>Bem Vindo a Home</h1>
      </Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate(LoginScreen);
        }}
      >
        Login
      </Button>

      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate(CadastrarScreen);
        }}
      >
        Cadastrar
      </Button>
    </View>
  );
}

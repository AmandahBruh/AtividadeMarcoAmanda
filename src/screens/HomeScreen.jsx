import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";
import CadastrarScreen from "./CadastrarScreen";
import FetchNews from "./FetchNews";
import LoginScreen from "./LoginScreen";
import RickMorty from "./RickAndMorty";

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
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate(FetchNews);
        }}
      >
        Fetch
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate(RickMorty);
        }}
      >
        Rick and Morty
      </Button>
    </View>
  );
}

import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function CadastrarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h1>Sou a tela de cadastro</h1>
      </Text>
    </View>
  );
}

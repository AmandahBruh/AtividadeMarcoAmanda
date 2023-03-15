import { View, TextInput } from "react-native";
import { Text,  } from "react-native-paper";
import styles from "../utils/styles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        <h1>Sou a tela de login</h1>
      </Text>

      <TextInput
        style={styles.input}
        label="Email"
        placeholder="Digite seu email..."
        multiline={false}
      />

      <TextInput
        style={styles.input}
        label="Senha"
        placeholder="Digite sua Senha..."
        secureTextEntry={true}
        multiline={false}
      />
    </View>
  );
}

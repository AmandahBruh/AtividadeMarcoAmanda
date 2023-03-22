import { View, TextInput } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function CadastrarScreen() {
  const [Nome, setNome] = useState();
  const [Email, setEmail] = useState();
  const [Senha, setSenha] = useState();



  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        <h1>Sou a tela de cadastro</h1>
      </Text>

      <TextInput
        style={styles.input}
        label="Nome"
        placeholder="Digite seu email..."
        multiline={false}
      />

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

      <TextInput
        style={styles.input}
        label="Confirmar Senha"
        placeholder="Digite sua Senha..."
        secureTextEntry={true}
        multiline={false}
      />
    </View>
  );
}

import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Image } from "react-native-web";
import styles from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(0);

  useEffect(() => {
    retornaTotalDePesonagens();
  }, []);

  function buscaPersonagemAleatorio() {
    fetch(
      "https://rickandmortyapi.com/api/character/" + retornaIndiceAleatorio()
    )
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }

  function retornaTotalDePesonagens() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }

  function retornaIndiceAleatorio() {
    return Math.floor(Math.random() * totalPersonagens);
  }

  function checkIfPersonagemEstaVivo() {
    if (personagem.status === "Alive") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este personagem está vivo?</Text>
      <Image
        source={{ uri: personagem?.image }}
        style={{ width: 200, height: 200 }}
      ></Image>
      <Text style={styles.text}>Personagem: {personagem?.name}</Text>
      <View>
        <Button style={styles.button}>Sim</Button>
        <Button style={styles.button}>Não</Button>
      </View>

      <Button onPress={buscaPersonagemAleatorio} style={styles.button}>
        {" "}
        Buscar Personagem{" "}
      </Button>
    </View>
  );
}

import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function RickAndMorty() {
  return (
    <View>
      <Card>
        <Card.Title>Nome do episodio</Card.Title>
        <Card.Content>
            <Title>Título</Title>
            <Paragraph>WAAAAAAA</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/300" }}></Card.Cover>
      </Card>
    </View>
  );
}

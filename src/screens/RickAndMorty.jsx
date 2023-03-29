import { useEffect, useState } from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import { ScrollView } from "react-native-web";

export default function RickAndMorty() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((dataJson) => setData(dataJson.results))
        .catch((error) => console.error(error));
    }, [])

  return (
    <ScrollView>
        {data.map((item) => (
        <Card key={item.name}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Content>
            <Title>{item.air_date}</Title>
            <Paragraph>{item.episode}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }}></Card.Cover>
      </Card>
        ))}
      
    </ScrollView>
  );
}

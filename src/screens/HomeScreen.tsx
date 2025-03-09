import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Добро пожаловать в Suvi! 🌍</Text>
          <Text variant="bodyMedium" style={styles.text}>
            Исследуйте мир, выполняйте задания и получайте награды.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("Начать путешествие")}>
            Начать
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  card: {
    width: "90%",
    padding: 10,
  },
  text: {
    marginVertical: 10,
  },
});


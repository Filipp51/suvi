import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">🗺 Карта</Text>
          <Text variant="bodyMedium" style={styles.text}>
            Исследуйте карту и находите интересные места для путешествий!
          </Text>
        </Card.Content>
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


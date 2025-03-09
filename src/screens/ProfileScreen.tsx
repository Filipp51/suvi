import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">👤 Профиль</Text>
          <Text variant="bodyMedium" style={styles.text}>
            Здесь будут отображаться ваши достижения и собранные сувениры.
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


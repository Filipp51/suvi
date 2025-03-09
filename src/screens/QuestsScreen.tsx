import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type QuestsStackParamList = {
  QuestsMain: undefined;
  QuestDetails: { questId: string };
};

type Props = StackScreenProps<QuestsStackParamList, "QuestsMain">;

const quests = [
  { id: "1", title: "Исследование центра города" },
  { id: "2", title: "Прогулка по набережной" },
  { id: "3", title: "Загадки старого замка" },
];

export default function QuestsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список экскурсий</Text>
      <FlatList
        data={quests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.questItem}>
            <Text style={styles.questTitle}>{item.title}</Text>
            <Button title="Подробнее" onPress={() => navigation.navigate("QuestDetails", { questId: item.id })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  questItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginVertical: 5,
    borderRadius: 5,
  },
  questTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
});

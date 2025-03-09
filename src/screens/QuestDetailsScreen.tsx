import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type QuestsStackParamList = {
  QuestsMain: undefined;
  QuestDetails: { questId: string };
};

type Props = StackScreenProps<QuestsStackParamList, "QuestDetails">;

export default function QuestDetailsScreen({ route, navigation }: Props) {
  const { questId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Детали квеста {questId}</Text>
      <Button title="Назад к списку" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuestsScreen from "../screens/QuestsScreen";
import QuestDetailsScreen from "../screens/QuestDetailsScreen";

type QuestsStackParamList = {
  QuestsMain: undefined;
  QuestDetails: { questId: string };
};

const Stack = createStackNavigator<QuestsStackParamList>();

export default function QuestsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QuestsMain" component={QuestsScreen} options={{ title: "Экскурсии" }} />
      <Stack.Screen name="QuestDetails" component={QuestDetailsScreen} options={{ title: "Детали квеста" }} />
    </Stack.Navigator>
  );
}

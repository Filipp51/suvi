import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type ShopStackParamList = {
  ShopMain: undefined;
  ShopItem: { itemId: string };
};

type Props = StackScreenProps<ShopStackParamList, "ShopItem">;

export default function ShopItemScreen({ route, navigation }: Props) {
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Детали товара {itemId}</Text>
      <Button title="Назад в магазин" onPress={() => navigation.goBack()} />
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

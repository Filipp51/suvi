import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type ShopStackParamList = {
  ShopMain: undefined;
  ShopItem: { itemId: string };
};

type Props = StackScreenProps<ShopStackParamList, "ShopMain">;

const shopItems = [
  { id: "1", name: "NFT открытка" },
  { id: "2", name: "Цифровой сувенир" },
  { id: "3", name: "Памятная монета" },
];

export default function ShopScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Магазин сувениров</Text>
      <FlatList
        data={shopItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Button title="Подробнее" onPress={() => navigation.navigate("ShopItem", { itemId: item.id })} />
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
  item: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginVertical: 5,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
});


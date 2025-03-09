import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShopScreen from "../screens/ShopScreen";
import ShopItemScreen from "../screens/ShopItemScreen";

type ShopStackParamList = {
  ShopMain: undefined;
  ShopItem: { itemId: string };
};

const Stack = createStackNavigator<ShopStackParamList>();

export default function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShopMain" component={ShopScreen} options={{ title: "Магазин" }} />
      <Stack.Screen name="ShopItem" component={ShopItemScreen} options={{ title: "Детали товара" }} />
    </Stack.Navigator>
  );
}

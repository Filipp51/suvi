import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Tabs from "./src/navigation/Tabs";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs />
    </GestureHandlerRootView>
  );
}


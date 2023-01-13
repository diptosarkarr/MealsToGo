import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentScreen } from "./src/features/restaurants/screens/restaurents.screen";

export default function App() {
  return (
    <>
      <RestaurentScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

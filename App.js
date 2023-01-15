import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentScreen } from "./src/features/restaurants/screens/restaurents.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

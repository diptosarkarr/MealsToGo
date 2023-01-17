import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentScreen } from "./src/features/restaurants/screens/restaurents.screen";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded)
    return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

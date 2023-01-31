import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentScreen } from "./src/features/restaurants/screens/restaurents.screen";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from "./src/services/restaurants/mock/restaurants.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded)
    return null;

  const Tab = createBottomTabNavigator();
  const Map = () => (
    <Text>Map Screen</Text>
  )
  const Setting = () => (
    <Text>Setting Screen</Text>
  )

  const screenOptions = ({ route }) => {
    return ({

      "tabBarActiveTintColor": "tomato",
      "tabBarInactiveTintColor": "gray",
      "tabBarStyle":
      {
        "display": "flex"
      },

      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Restaurant') {
          iconName = focused ? 'restaurant' : 'restaurant-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Setting') {
          iconName = focused ? 'settings-sharp' : 'settings-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={screenOptions}

            >
              <Tab.Screen name="Restaurant" component={RestaurentScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Setting" component={Setting} />

            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>

      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

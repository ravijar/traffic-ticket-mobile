import React from "react";
import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";

function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;

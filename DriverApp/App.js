import React from "react";
import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { Provider } from "react-redux";
import store from "./src/redux/store"; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config.theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;

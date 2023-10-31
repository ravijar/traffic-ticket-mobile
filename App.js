import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";
import React from "react";
import Navigation from "./Navigation";

LogBox.ignoreAllLogs(true);

function App() {
  return <Navigation />;
}

export default App;

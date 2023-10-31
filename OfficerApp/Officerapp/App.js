import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './Navigation';
import  { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  // return <Navigation />;
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

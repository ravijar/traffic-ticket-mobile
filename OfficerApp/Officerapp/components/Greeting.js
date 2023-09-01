import React from 'react';
import { View, Text } from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
}

export default Greeting;

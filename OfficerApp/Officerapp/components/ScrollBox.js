import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ScrollBox = (props) => {
  const messages = props.messages;

  return (
    <View style={styles.container}>
      <ScrollView>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[styles.message, { backgroundColor: message.backgroundColor }]}
          >
            <Text style={styles.texts}>{message.sender}</Text>
            <Text style={styles.textm}>{message.text}</Text>

          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 300,
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10.0,
    elevation: 24,
  },
  message: {
    backgroundColor: "gray",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  texts: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  textm: {
    fontSize: 20,
    color: "#000",
  },
});

export default ScrollBox;

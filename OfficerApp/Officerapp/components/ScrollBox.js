import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ScrollBox = (props) => {
  // Extract the 'messages' array from props
  const messages = props.messages.slice().reverse();

  return (
    <View style={styles.container}>

      {/* Create a ScrollView to enable scrolling */}
      <ScrollView>

        {/* Map through the 'messages' array and render each message */}
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              { backgroundColor: message.backgroundColor },
            ]}
          >

            {/* Render the sender's name */}
            <Text style={styles.texts}>{message.sender}</Text>
            {/* Render the message text */}
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

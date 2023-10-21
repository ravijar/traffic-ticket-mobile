import React , {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextArea = (props) => {
  const [text, setText] = useState(""); // State to store user input


  const handleTextChange = (inputText) => {
    setText(inputText); // Update the 'text' state with the user's input

    // If a callback function 'onChangeText' is provided in props, call it and pass the inputText
    if (props.onChangeText) {
      props.onChangeText(inputText); // Call the parent component's callback function if it exists
    }
  };
  return (
    <View style={styles.textAreaContainer}>

      {/* Render a TextInput component for the text area */}
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Write your message here..."
        placeholderTextColor="grey"
        multiline={true} // Allow multiple lines of text
        onChangeText={handleTextChange} // Handle text input changes with the defined function
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  textAreaContainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    maxHeight: 100,
    marginTop: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  textArea: {
    backgroundColor: "white",
    height: "95%",
    width: "95%",
    textAlignVertical: "top",
    textShadowColor: "blue",
  },
});

export default TextArea;

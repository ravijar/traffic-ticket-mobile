import React, { useState } from "react";
import { TextInput } from "react-native";
import COLORS from "../constants/colors";

const InputTextCurve = (props) => {
  const [text, setText] = useState(""); // State to store user input

  // Extract values from props
  const styles = props.style;
  const placeholder = props.placeholder;
  const secureTextEntry = props.secureTextEntry;

  // Function to handle text input changes
  const handleTextChange = (inputText) => {
    setText(inputText); // Update the 'text' state with the user's input

    // If a callback function 'onChangeText' is provided in props, call it and pass the inputText
    if (props.onChangeText) {
      props.onChangeText(inputText); // Call the parent component's callback function if it exists
    }
  };

  return (
    <TextInput
      style={styles}
      placeholder={placeholder}
      placeholderTextColor="black"
      secureTextEntry={secureTextEntry} // Determine if it's a password input
      underlineColor="transparent"
      underlineColorAndroid="transparent"
      selectionColor={COLORS.PRIMARY} // Change the cursor color
      onChangeText={handleTextChange} // Handle text input changes with the defined function
      value={text}
    />
  );
};

export default InputTextCurve;

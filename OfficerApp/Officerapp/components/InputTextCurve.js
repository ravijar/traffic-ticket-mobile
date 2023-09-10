import React, {useState} from "react";
import { TextInput } from "react-native";
import COLORS from "../constants/colors";

const InputTextCurve = (props) => {

    const [text, setText] = useState(""); // State to store user input

    const styles = props.style;
    const placeholder = props.placeholder;
    const secureTextEntry = props.secureTextEntry;

    const handleTextChange = (inputText) => {
        setText(inputText);
        props.onChangeText(inputText); // Call the parent component's callback function
      };
    
    return (
        <TextInput
            style = {styles}
            placeholder = {placeholder}
            placeholderTextColor = 'black'
            secureTextEntry = {secureTextEntry}
            underlineColor="transparent"
            underlineColorAndroid="transparent"
            selectionColor= {COLORS.PRIMARY}// Change the cursor color
            onChangeText={handleTextChange}
            value={text}
            
            />
    )

}

export default InputTextCurve;
import React from "react";
import { TextInput } from "react-native";
import COLORS from "../constants/colors";

const InputTextCurve = (props) => {
    const styles = props.style;
    const placeholder = props.placeholder;
    const secureTextEntry = props.secureTextEntry;
    
    return (
        <TextInput
            style = {styles}
            placeholder = {placeholder}
            placeholderTextColor = 'black'
            secureTextEntry = {secureTextEntry}
            underlineColor="transparent"
            underlineColorAndroid="transparent"
            //caretHidden={true} // Hide the cursor
            selectionColor= {COLORS.PRIMARY}// Change the cursor color
            onFocus={() => {}}
            onBlur={() => {}}
            
            />
    )

}

export default InputTextCurve;
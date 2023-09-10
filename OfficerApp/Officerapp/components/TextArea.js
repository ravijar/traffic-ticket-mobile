import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextArea = (props) => {
    return (
        <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Write your message here..."
          placeholderTextColor="grey"
          numberOfLines={4}
          multiline={true}
        />
      </View>
    );

};

const styles = StyleSheet.create({
    textAreaContainer: {
        width: '70%',
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
        height: '95%',
        width: '95%',
        textAlignVertical: "top",
        textShadowColor : 'blue'
      }
});


export default TextArea;
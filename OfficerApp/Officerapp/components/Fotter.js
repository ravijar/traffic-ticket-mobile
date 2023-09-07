import React from "react";
import { Image, View, StyleSheet, Text, Dimensions } from "react-native";
const {WIdth, height} = Dimensions.get('screen');

const Footer = () => {
    return (
        <View style={styles.container}>
            
             <Image
                source={require('../assets/Footer.png')}
                style = {styles.image}
            />  
           

        </View>
    );

};
const styles = StyleSheet.create({
    image: {
        width: '80%',
        height: '95%',
        maxHeight: 80,
        maxWidth: 420,
    
    },
    container: {
        backgroundColor: "transparent",
        position: 'absolute',
        width:height*0.3,
        height: height*0.053,
        marginBottom: 15,
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        bottom: 0,
        padding:5,

        
    },
});

export default Footer;
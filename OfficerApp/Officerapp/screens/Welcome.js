import {View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login'); // Navigates to login screen after 3 seconds 
          }, 3000);
      
    return () => {
            clearTimeout(timer); // Clear the timeout if the component unmounts
          };
        }, [navigation]);


    return (
        // <LinearGradient
        //     style = {{
        //         flex: 1,
        //     }}
        //     colors = {[COLORS.A, COLORS.B]}
        // >
        //     <Text>hello</Text>
        // </LinearGradient>
        <View style={styles.container}>

            <Image
                source={require('../assets/logo2.png')}
                style = {styles.image}
            />

            {/* Your content goes here */}
            <Text style={styles.text}>Officer Portal</Text>

            <Image
                source={require('../assets/Footer.png')}
                style = {styles.image2}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY,
      //justifyContent: 'center', // Vertically center content
      alignItems: 'center',     // Horizontally center content
    },
    text: {
      color: 'white',
      fontSize: 50,
      marginTop: 140,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 200,
    },
    image2: {
        width: 300,
        height: 55,
        marginTop: 200,
    },

  });

export default Welcome;
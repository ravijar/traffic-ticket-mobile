import {View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Navigation from '../Navigation';
const ForgotPassword = ({navigation}) => {
    return (
        
        <View style={styles.container}>

            <Text style={styles.text1}>Password Reset</Text>
            <Text style={styles.text2}>Request</Text>

            <Image
                source={require('../assets/logo2.png')}
                style = {styles.image}
            />

            

           
            

            <TextInput
                style={styles.input}
                placeholder="User ID"
                placeholderTextColor="black"
            />

            <Text style={styles.text3}>This Process May Take Some Time...</Text>

            <Button
                title="Request"
                filled 
                color="red"
                backgroundColor= "#155E75"
                boarderColor= "#155E75"
                fontSize={12}
                style={{marginTop: 60,marginBottom: 10,width: 90 ,fontSize: 40}}

            />

            <Pressable 
            onPress={() => navigation.navigate("Login")}
            >
            <Text style={{fontSize: 12, color: 'white', textDecorationLine: 'underline', marginTop:45,  marginBottom: 10}}
            >
                Sign In
            </Text>
            </Pressable>
            


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
   
    text1: {
      color: 'white',
      fontSize: 40,
      marginTop: 100,
    },
    text2: {
        color: 'white',
        fontSize: 40,
        marginTop: 10,
    },
    text3: {
        color: 'white',
        fontSize: 12,
        marginTop: 20,
    },

    image: {
        width: 200,
        height: 200,
        marginTop: 60,
        marginBottom: 50,
    },
    image2: {
        width: 150,
        height: 25,
        marginTop: 70,
    },
    input: {
        width: '70%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 40,
        
      },

  });

export default ForgotPassword;
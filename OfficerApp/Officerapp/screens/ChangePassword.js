import {View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Navigation from '../Navigation';

const ChangePassword = ({navigation}) => {
    return (
        
        <View style={styles.container}>

            <Text style={styles.text1}>Password Change</Text>

            <Image
                source={require('../assets/logo2.png')}
                style = {styles.image}
            />

            
           
            <View style={styles.container2}>

            <TextInput
                style={styles.input}
                placeholder="User ID"
                placeholderTextColor="black"
            />

            <TextInput
                style={styles.input}
                placeholder="Current Password"
                placeholderTextColor="black"
                //keyboardType='numeric'
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="black"
                //keyboardType='numeric'
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="black"
                //keyboardType='numeric'
                secureTextEntry
            />

           
            <View style={{flexDirection: 'row', marginTop:10}}>
            
            <Button
                title="Back"
                filled 
                color="red"
                backgroundColor= "#155E75"
                boarderColor= "#155E75"
                onPress={() => navigation.navigate("Login")}  
                marginRight={110}
                fontSize={12}
                style={{marginTop: 30,marginBottom: 10,width: 80 , fontSize: 30}}

            />

            <Button
                title="Change"
                filled 
                color="red"
                backgroundColor= "#155E75"
                boarderColor= "#155E75"
                fontSize={12}
                style={{marginTop: 30,marginBottom: 10,width: 80 ,fontSize: 30}}

            />

            </View>


            </View>


            
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
    container2: {
        flex: 1,
        width: '75%',
        maxHeight: 350,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: COLORS.GRAY,
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
        fontSize: 14,
        marginTop: 20,
        marginBottom: 25,
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
        //marginBottom: 10,
        marginTop: 20,
        
      },

  });

export default ChangePassword;
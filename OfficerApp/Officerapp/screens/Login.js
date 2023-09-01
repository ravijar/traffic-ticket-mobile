import {View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Navigation from '../Navigation';
const Login = ({navigation}) => {
    return (
        
        <View style={styles.container}>

            <Text style={styles.text1}>Sign In</Text>

            <Image
                source={require('../assets/logo2.png')}
                style = {styles.image}
            />

            <Text style={styles.text2}>Please sign in to your existing account</Text>

           
            <View style={styles.container2}>

            <TextInput
                style={styles.input}
                placeholder="User ID"
                placeholderTextColor="black"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                //keyboardType='numeric'
                secureTextEntry
            />

            <Button
                title="Sign In"
                filled 
                color="red"
                backgroundColor= "#155E75"
                boarderColor= "#155E75"
                onPress={() => navigation.navigate("DashBoard")}
                fontSize={12}
                style={{marginTop: 30,marginBottom: 10,width: 60 ,fontSize: 40}}

            />
            <View style={{flexDirection: 'row', marginTop:30}}>
            <Pressable 
            onPress={() => navigation.navigate("ChangePassword")}
            >
            <Text style={{fontSize: 12, color: 'blue', textDecorationLine: 'underline', marginRight:70,  marginBottom: 10}}
            >
                Change Password
            </Text>
            </Pressable>
            
            <Pressable 
            onPress={() => navigation.navigate("ForgotPassword")}
            >
            <Text style={{fontSize: 12, color: 'blue', textDecorationLine: 'underline',  marginBottom: 10}}
            >
                Forgot Password
            </Text>
            </Pressable>
            

            </View>


            </View>


            {/* <Image
                source={require('../assets/Footer.png')}
                style = {styles.image2}
            /> */}
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
        maxHeight: 320,
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
        marginBottom: 10,
        marginTop: 40,
        
      },

  });

export default Login;
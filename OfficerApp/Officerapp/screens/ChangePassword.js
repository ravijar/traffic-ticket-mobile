import {View, Text, KeyboardAvoidingView, Dimensions, Keyboard  } from 'react-native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, ScrollView, Platform } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import InputTextCurve from '../components/InputTextCurve';

const {width, height} = Dimensions.get('screen');

const ChangePassword = ({navigation}) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
      });
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
      });
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
  


    return (
        <View style={{backgroundColor: COLORS.PRIMARY, flex:1, flexDirection:'column'}}  //parent view
        >
            <View style={styles.container1}>
                <Text style={styles.text1}>Password Change</Text>
            </View>
            {/* <View style={{backgroundColor:'red',flex:1}}>
            </View> */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 6 }} 
            >

            <ScrollView
                style={styles.container}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent:'center' }} bounces={false}
            >
        
            <View style={[styles.container4]}>
            

                <InputTextCurve
                    style={styles.input}
                    placeholder="User ID"
                />

                <InputTextCurve
                    style={styles.input}
                    placeholder="Current Password"
                    secureTextEntry
                />

                <InputTextCurve
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry
                />
            
                <InputTextCurve
                    style={styles.input}
                    placeholder="Confirm New Password"
                    secureTextEntry
                />

           
                <View style={{flexDirection: 'row'}}>
            
                    <Button
                    title="Back"
                    filled 
                    onPress={() => navigation.navigate("Login")}  
                    marginRight={height*0.1}
                    fontSize={12}
                    style={{marginTop: 20,marginBottom: 10,width: 80 , fontSize: 30}}
                    />

                    <Button
                    title="Change"
                    filled 
                    fontSize={12}
                    style={{marginTop: 20,marginBottom: 10,width: 80 ,fontSize: 30}}
                    />

                </View>


            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    


            
      
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'transparent',
      },

    container1: {
        flex: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
    },
    container4: {  
        position: 'absolute',
        width: '75%', 
        maxHeight : 500,
        maxWidth : 450,
        borderRadius: 30,
        backgroundColor: 'gray',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        marginLeft : '12.5%',
        height: height * 0.45,
        top: '30%',
        
    },
    container5: {  
        height: height * 0.45,
    },
    container6: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: height * 0.3,
    },

    text1: {
      color: 'white',
      fontSize: 40,
      marginTop: '10%',  
    },

    input: {
        width: '70%',
        maxWidth : 270,
        height: '9%',
        maxHeight : 44,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: '08%',
        
    },

  });

export default ChangePassword;
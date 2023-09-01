import {View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Navigation from '../Navigation';
import { Center } from 'native-base';

const DashBoard = ({navigation}) => {
    return (
        
        <View style={styles.container}>
             
             <View style={styles.container2}>

                <Text style={styles.text1}>DASHBOARD</Text>
            </View>

            <View style={styles.container4}>
                <Pressable 
                onPress={() => navigation.navigate("Login")}
                >
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:10,  }}>
                    ADD NEW
                </Text>
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:8,  marginBottom: 10}}>
                    FINE
                </Text>
                </Pressable>
                
            </View>

            <View style={styles.container3}>
                <Pressable 
                onPress={() => navigation.navigate("Login")}
                >
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:10,  }}>
                    VEHICLE
                </Text>
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:8,  marginBottom: 10}}>
                    DETAILS
                </Text>
                </Pressable>
                
            </View>

            <View style={styles.container3}>
                <Pressable 
                onPress={() => navigation.navigate("Login")}
                >
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:10,  }}>
                    DRIVER FINE
                </Text>
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:8,  marginBottom: 10}}>
                    HISTORY
                </Text>
                </Pressable>
                
            </View>

            <View style={styles.container3}>
                <Pressable 
                onPress={() => navigation.navigate("Login")}
                >
                <Text style={{fontSize: 30, color: 'white',textAlign: 'center', textAlignVertical: 'center',  }}>
                    MESSAGE
                </Text>
                
                </Pressable>
                
            </View>
            
            

           
           

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
      backgroundColor: COLORS.WHITE,
      //justifyContent: 'center', // Vertically center content
      alignItems: 'center',     // Horizontally center content
    },
    container2: {
        flex: 1,
        width: '100%',
        maxHeight: 85,
        backgroundColor: COLORS.PRIMARY,
        //justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
      },

    container3: {
        flex: 1,
        width: '80%',
        maxHeight: 120,
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        marginTop: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    container4: {
        flex: 1,
        width: '80%',
        maxHeight: 120,
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        marginTop: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    text1: {
      color: 'white',
      fontSize: 30,
      marginTop: 40,
      fontWeight: 'bold',
    },
    text2: {
        color: 'white',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 25,
      },

    image2: {
        width: 180,
        height: 35,
        marginTop: 80,
    },

        
    

  });

export default DashBoard;
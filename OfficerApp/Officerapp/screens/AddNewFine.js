import {View, Text, } from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Navigation from '../Navigation';
import BackIcon from '../components/BackIcon';
import Logout from '../components/Logout';
import InputTextCurve from '../components/InputTextCurve';
import Dropdown from '../components/Dropdown';
import Datetimepicker from '../components/Datepicker';
import Timepicker from '../components/Timepicker';
import Header from '../components/Header';
import Footer from '../components/Fotter';
const AddNewFine = ({navigation}) => {

    return (
        
        <View style={styles.container}>
             
            <Header navigation={navigation} Headername="ADD NEW FINE" back= "DashBoard" />             


            
            <View style={styles.container5}>


                <InputTextCurve
                style={styles.input}
                placeholder="Vehicle Number"
                />

                <InputTextCurve
                style={styles.input}
                placeholder="Driver's NIC Number"
                />

                

                <InputTextCurve
                style={styles.input}
                placeholder="Place of Offence"
                />
                {/* <Datetimepicker/>
                <Timepicker/> */}
                
                

                {/* <InputTextCurve
                style={styles.input1}
                placeholder="Description of Offence"
                /> */}

                <Dropdown/>

                
                




                

                <Button
                    title="SUBMIT"
                    filled 
                    color="red"
                    backgroundColor= "#155E75"
                    boarderColor= "#155E75"
                    onPress={() => navigation.navigate("Login")}  
                    
                    fontSize={12}
                    style={{marginTop: 30,marginBottom: 10,width: 80 , fontSize: 30}}

                />
                






                </View>
            
            

           
           

 


            <Footer/>
            


            


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
        flexDirection: 'row'
       
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

    container5: {
        flex: 2,
        width: '75%',
        maxHeight: 450,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: COLORS.GRAY,
        //justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        marginTop: 80,
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

    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        //marginBottom: 10,
        marginTop: 20,
        
    },

    input1: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        //marginBottom: 10,
        marginTop: 40,
        
    },

    

    text1: {
      color: 'white',
      fontSize: 30,
      marginTop: 40,
      fontWeight: 'bold',
        marginLeft: 70,
    },
    text2: {
        color: 'white',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 25,
      },


    image3: {
        width: 25,
        height: 25,
        marginTop: 40,
        marginLeft: 15,
    },
    image4: {
        width: 30,
        height: 30,
        marginTop: 40,
        marginLeft: 50,
    },

    container6: {
        width: 320,
        backgroundColor: 'white',
        color: 'black',
        marginTop: 20,

    },

        
    

  });

export default AddNewFine;
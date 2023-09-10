import {View, StyleSheet, Platform,ScrollView } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import InputTextCurve from '../components/InputTextCurve';
import Dropdown from '../components/Dropdown';
import DatepickerIOS from '../components/DatepickerIOS';
import TimepickerIOS from '../components/TimepickerIOS';
import Header from '../components/Header';
import Footer from '../components/Fotter';
import DatepickerAn from '../components/DatepickerAn';
import TimepickerAn from '../components/TimepickerAn';
import ImagePick from '../components/Imagepick';
import TextArea from '../components/TextArea';

const AddNewFine = ({navigation}) => {

    return (
        
        <View style={styles.container}>
             
            <Header navigation={navigation} Headername="ADD NEW FINE" back= "DashBoard" />             

            <Button
                    title="SUBMIT"
                    filled 
                    color="red"
                    backgroundColor= "#155E75"
                    boarderColor= "#155E75"
                    onPress={() => navigation.navigate("AddNewFine")}  
                    
                    fontSize={12}
                    style={{marginTop: 30,width: 80 , fontSize: 30}}

                />
            
            <View style={styles.container2}>


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
    
                <Dropdown/>
                <>
                </>
                
                
                {Platform.OS === "ios" ? (
                <>
                    <DatepickerIOS />
                    <TimepickerIOS />
                </>
                ) : 
                (
                <>
                    <DatepickerAn />
                    <TimepickerAn />
                </>
                )}

                <TextArea/>

                <ImagePick/>
            
            
               

                </View>
            
            <Footer/>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
      alignItems: 'center',    
      
    },

    container2: {
        // flex: 1,
        width: '75%',
        // maxHeight: 680,
        borderRadius: 20,
        backgroundColor: COLORS.GRAY,
        alignItems: 'center',     
        marginTop: 40,
    },

    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: 20,
    },
   
  });

export default AddNewFine;
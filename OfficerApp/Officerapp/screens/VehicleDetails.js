import {View, Text,KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Fotter';
import VehicleTable from '../components/VehicleTable';
import InputTextCurve from '../components/InputTextCurve';


const VehicleDetails = ({navigation}) => {

    return (
        
        <View style={styles.container}>

            <Header navigation={navigation} Headername="VEHICLE DETAILS" back= "DashBoard" />             
            
            <View style={styles.container5}>
              
              <Text style={styles.text1}>VEHICLE NO</Text>
              
              <InputTextCurve style={styles.input}/>
            
            </View>

            <Button
                title="SUBMIT"
                filled
                fontSize= {10}
                style={{width: '20%' ,maxWidth:120,  marginTop: '6%' }}
                
            />

              <VehicleTable
                vehicleNumber={"WP-ND-1234"}
                ownerName={"Nimal"}
                chassisNumber={"123456789"}
                engineNumber={"123456789"}
                vehicleType={"Car"}
                vehicleColor={"Red"}
                licenseExpireDate={"2021-12-31"}
              />
                
      
          
            

            
            
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
    container5: {
        flex: 1,
        flexDirection: 'row',
        width: '85%',
        height : '8%',
        maxWidth: 500,
        maxHeight: 90,
        backgroundColor: 'red',
        justifyContent: 'center', // Vertically center conten
        alignItems: 'center',     // Horizontally center content
        marginTop: "8%",
        borderRadius: 50,
  
    },
    input: {
      width: '60%',
      height: '40%',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,      
  },
  text1: {
    fontSize: 15,
    color: 'black',
    marginRight: 10,
  },


    
  });

export default VehicleDetails;
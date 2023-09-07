import React from "react";
import {View, Text,StyleSheet, } from 'react-native';
import Logout from "./Logout";
import BackIcon from "./BackIcon";
import COLORS from "../constants/colors";


const Header = (props) => {
    const back = props.back;
    const Headername = props.Headername;
    const navigation = props.navigation;
    return (
    <View style={styles.container2}>    
        
        <BackIcon style={styles.image3} screenName ={back} navigation={navigation} />

        <Text style={styles.text1}>{Headername}</Text>
        
        <Logout style={styles.image4}  navigation={navigation} />


    </View>


    );


};




const styles = StyleSheet.create({
    container2: {
        flex: 1,
        width: '100%',
        maxHeight: 85,
        backgroundColor: COLORS.PRIMARY,
        alignItems:'flex-end', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    image3: {
    
        width: 30,
        height: 30, 
        marginLeft: 10,
        marginBottom: 10,   
    },
    text1: {
        
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
  
    },
    image4: {
        
        width: 35,
        height: 35,
        marginRight: 10,
        marginBottom: 10,
         

    },



});


export default Header;

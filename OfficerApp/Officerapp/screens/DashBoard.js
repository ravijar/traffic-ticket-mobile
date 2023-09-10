import {View} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import Header from '../components/Header';
import Footer from '../components/Fotter';
import Dashboardbox from '../components/Dashboardbox';
import AddNewFine from "./AddNewFine"; // Import only the needed components
import VehicleDetails from "./VehicleDetails";
import DriverFineHistory from "./DriverFIneHistory";
import Message from "./Message";
const DashBoard = ({navigation}) => {
 

    return (
        
        <View style={styles.container}>

            <Header navigation={navigation} Headername="DASHBOARD" back= "DashBoard" />             

            <Dashboardbox name="ADD FINE" navigation={navigation} screenName={AddNewFine} />
            
            <Dashboardbox name="VEHICLE DETAILS" navigation={navigation} screenName={VehicleDetails} />
            
            <Dashboardbox name="DRIVER FINE HISTORY" navigation={navigation} screenName={DriverFineHistory} />
            
            <Dashboardbox name="MESSAGE" navigation={navigation} screenName={Message} />

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
    
  });

export default DashBoard;
import React from 'react'
import {View, Text,ScrollView, SafeAreaView, Image} from 'react-native';
import RegisterBox from '../components/RegisterBox';
import styles from '../components/styles';
import {GluestackUIProvider,config} from "@gluestack-ui/themed";

const Register = ({navigation}) => {
    return (
        <GluestackUIProvider config={config.theme}>
          
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.text1}>Register</Text>
          
        <Image
          source={require('../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png')}
          style = {styles.image}
        />
    
        <Text style={styles.text2}>Register your new account</Text>
          <RegisterBox navigation={navigation}/>
          
        </SafeAreaView>
        
        </GluestackUIProvider>
        
          
      )
    
}

export default Register

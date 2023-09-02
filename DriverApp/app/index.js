import React from 'react'
import {View, Text,ScrollView, SafeAreaView, Image} from 'react-native';

import {GluestackUIProvider,config} from "@gluestack-ui/themed";
import Loginbox from '../components/home/loginbox';
import styles from '../components/styles';


const Home = () => {
  return (
    <GluestackUIProvider config={config.theme}>
      
    <SafeAreaView style={styles.container}>
    
    <Text style={styles.text1}>Sign In</Text>
      
    <Image
      source={require('../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png')}
      style = {styles.image}
    />

    <Text style={styles.text2}>Please sign in to your existing account</Text>
      <Loginbox/>
      
    </SafeAreaView>
    
    </GluestackUIProvider>
    
      
  )
}

export default Home

import React from 'react'
import {View, Text,ScrollView, SafeAreaView, Image} from 'react-native';
import PasswordChangeBox from '../components/passwordChange';
import styles from '../components/styles';
import {GluestackUIProvider,config} from "@gluestack-ui/themed";

const ChangePassword = ({navigation}) => {
    return (
        <GluestackUIProvider config={config.theme}>
          
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.text1}>Password Change</Text>
          
        <Image
          source={require('../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png')}
          style = {styles.image}
        />
    <ScrollView  style={{width:'100%'}} contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text2}>Change your existing password</Text>
        
          <PasswordChangeBox navigation={navigation}/>
          </ScrollView>
        </SafeAreaView>
        
        </GluestackUIProvider>
        
          
      )
    
}

export default ChangePassword

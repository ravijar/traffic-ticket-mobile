import {View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';

import styles from '../components/styles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login'); // Navigates to login screen after 3 seconds 
          }, 3000);
      
    return () => {
            clearTimeout(timer); // Clear the timeout if the component unmounts
          };
        }, [navigation]);



    return (
      <SafeAreaView style={styles.container}>
          <View style={{marginTop:'20%'}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png')}
            style={styles.image}
          />
        </View>
        </View>
        {/* Your content goes here */}
        <Text style={styles.text}>Driver Portal</Text>
  
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/footer.png')}
          style={styles.image2}
          />
        </View>
      </SafeAreaView>
    );
  }

export default Welcome;



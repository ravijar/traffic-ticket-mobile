import React from 'react'
import {View, Text,ScrollView, SafeAreaView, Image} from 'react-native';

import { Input, InputField, Button, ButtonText,Link,LinkText} from "@gluestack-ui/themed";

import styles from '../components/styles';
import {GluestackUIProvider,config} from "@gluestack-ui/themed";


const ForgotPassword = ({navigation}) => {
  return (
    
    <GluestackUIProvider config={config.theme}>
    <SafeAreaView style={styles.container}>
    
    <Text style={styles.text1}>Forgot Password</Text>
      
    <Image
      source={require('../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png')}
      style = {styles.image}
    />

    <View style={{marginTop:'20%'}}>
    <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="NIC Number" />
      </Input>

      </View>
      <View style={{marginBottom:'20%', marginTop:'20%'}}>
      <Button
        style={styles.button}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        
      >
        <ButtonText style={styles.button}>Send Message </ButtonText>
      </Button>

      <Link style={{marginTop:'5%', alignItems:'center'}}>
        <LinkText size="sm">Sign In</LinkText>
      </Link>

      </View>
    </SafeAreaView>
    
    </GluestackUIProvider>
    
      
  )
}

export default ForgotPassword

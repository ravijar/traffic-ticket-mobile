import React from 'react'
import Head from '../components/Head'
import { SafeAreaView ,View, Text, TextInput} from 'react-native'
import styles from '../components/styles';
import Footer from '../components/Footer';
import Topic from '../components/Topic';
import { useState } from 'react';
import { Input,InputField,Button,ButtonText } from '@gluestack-ui/themed';
import {GluestackUIProvider,config} from "@gluestack-ui/themed";



  const AccidentReporting = ({ navigation, topic }) => {
    const [place, setPlace] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = () => {
      // Handle form submission here, you can send the data to your backend or perform any necessary actions
    };

  return (
    <GluestackUIProvider config={config.theme}>
    <SafeAreaView style={styles.containerWhite}>
    <Head navigation={navigation} topic={"REPORTING"}/>
    <Topic navigation={navigation} topic={"ACCIDENT REPORTING"}/>

  {/* hora code */}

  <View style={styles.container2}>
    
        <Text style={styles.formText}>Place:</Text>
        <Input
            style={styles.input2}
            variant="outline"
            size="sm"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Enter place" />
          </Input>

        

        <Text style={styles.formText}>Time:</Text>
        <Input
            style={styles.input2}
            variant="outline"
            size="sm"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Enter time" />
          </Input>
        

        <Text style={styles.formText}>Date:</Text>
        <Input
            style={styles.input2}
            variant="outline"
            size="sm"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Enter date" />
          </Input>

        <Text style={styles.formText}>Type:</Text>
        <Input
            style={styles.input2}
            variant="outline"
            size="sm"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Enter type" />
          </Input>

        <Text style={styles.formText}>Description:</Text>
        <Input
            style={styles.input2}
            variant="outline"
            size="sm"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Enter description" />
          </Input>

        {/* <Button title="Submit" onPress={handleSubmit} /> */}
        <View
        style={{
          marginTop: "5%",
        }}
      >
        <Button 
          onPress={handleSubmit}
          style={styles.button}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          
        >
          <ButtonText style={styles.button}>Sign Up</ButtonText>
        </Button>
      </View>
      </View>
      

      {/* //hora code */}

    <Footer navigation={navigation}/>
    </SafeAreaView>
    </GluestackUIProvider>
  )
}

export default AccidentReporting;

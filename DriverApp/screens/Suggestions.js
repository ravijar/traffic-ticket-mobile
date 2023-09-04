import React from 'react'
import Head from '../components/Head'
import { SafeAreaView,View } from 'react-native';
import styles from '../components/styles';
import Footer from '../components/Footer';
import Topic from '../components/Topic';
import { Textarea,TextareaInput, GluestackUIProvider,config,Button,ButtonText } from '@gluestack-ui/themed';


const PendingFines = ({navigation,topic}) => {
  return (
    <GluestackUIProvider config={config.theme}>
    <SafeAreaView style={styles.containerWhite}>
    <Head navigation={navigation} topic={"SUGGESTIONS"}/>
    <Topic navigation={navigation} topic={"SUGGESTIONS/COMPLAINTS"}/>
    
    <View style={{marginTop:'10%', flex:1, alignItems:'center'}}>
    <Textarea size="md" isReadOnly={false} isInvalid={false} isDisabled={false}  w='$64'>
          <TextareaInput
            placeholder="Your text goes here..."
          />
        </Textarea>
        </View>
      
        <Button
        style={styles.button}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <ButtonText style={styles.button}>Sign In </ButtonText>
      </Button> 
    <Footer navigation={navigation}/>

    </SafeAreaView>
    </GluestackUIProvider>
  )
}

export default PendingFines

import {View, Text, TextInput,Pressable} from 'react-native';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Fotter';
import ScrollBox from '../components/ScrollBox';
import TextArea from '../components/TextArea';
const Message = ({navigation}) => {

    return (
        
        <View style={styles.container}>

            <Header navigation={navigation} Headername="MESSAGE" back= "DashBoard" />             


            {/* <View style={{backgroundColor:'red'}}>
              <Text>asith</Text>
            </View> */}
            <ScrollBox name={"asith"}/>
            {/* <TextArea label="Message" numberOfLines={5} /> */}
      
            <TextArea/>
            

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

export default Message;
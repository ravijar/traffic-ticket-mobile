import {View, Text, Pressable,KeyboardAvoidingView,ScrollView,Dimensions, Platform, Keyboard } from 'react-native';
import React ,{useState, useEffect}from 'react';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import InputTextCurve from '../components/InputTextCurve';

const {width, height} = Dimensions.get('screen');
const IsAsith = false;
const Login = ({navigation}) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

    
    return (
    <View style={{backgroundColor: COLORS.PRIMARY, flex:1, flexDirection:'column'}}  //parent view
    >  
        <View style={styles.container1}>
            <Text style={styles.text1}>Sign In</Text>
        </View>

        <View style={styles.container2}>
                <Image
                source={require('../assets/logo.png')}
                style = {styles.image}
                />
        </View>
            
        <View style={styles.container3}>
            <Text style={styles.text2}>Please sign in to your existing account</Text>
        </View>

        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 6 }} 
    >
        <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent:'center' }} bounces={false}
      >
        {/* <View style={styles.container}> */}
        <View style={[isKeyboardVisible ? styles.container4 : styles.container4]}>
            
            <InputTextCurve
                style={styles.input}
                placeholder="User ID"
            />

            <InputTextCurve
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            
            <Button
                title="Sign In"
                filled 
                onPress={() => navigation.navigate("DashBoard")}
                fontSize={12}
                style={{ width: '24%' ,maxWidth:100,marginTop:'10%' ,maxHeight:50,}}

            />
            
            <View style={{flexDirection: 'row', marginTop:'10%'}}>
                <Pressable 
                    onPress={() => navigation.navigate("ChangePassword")}>
                
                <Text style={{fontSize: 12, color: 'blue', textDecorationLine: 'underline', marginRight:'20%'  }}>
                    Change Password
                </Text>
                
                </Pressable>
            
                <Pressable 
                    onPress={() => navigation.navigate("ForgotPassword")}>
                
                <Text style={{fontSize: 12, color: 'blue', textDecorationLine: 'underline'}}>
                Forgot Password
                </Text>
                
                </Pressable>
            
            </View>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>

    </View>
        
    

        
    )
}

const styles = StyleSheet.create({
    body: {
        fontSize: 40,
    },

    container: {
        
        backgroundColor: 'transparent',
      },

    container1: {
        flex: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
    },

    container2: {
        flex: 3,
        borderRadius: 30,
        backgroundColor: 'transparent',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
       },

       container3: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: 'transparent',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        
      },

    container4: {
       // flex: 1, 
       // flexWrap: 'wrap',
       // flexDirection: 'row',
        width: '70%',
        maxWidth : 450,
        borderRadius: 30,
        backgroundColor: 'gray',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
       
        marginTop : height * 0.01,
       // marginBottom : height * 0.06,
      },
      container5: {
        //flex: 1, 
       // flexWrap: 'wrap',
       // flexDirection: 'row',
        width: '70%',
        height: '60%',
        maxHeight : 350,
        maxWidth : 450,
        borderRadius: 30,
        backgroundColor: 'green',
        justifyContent: 'center', // Vertically center content
        alignItems: 'center',     // Horizontally center content
        marginTop : height * 0.03,
        marginBottom : height * 0.06,
      },


    text1: {
      color: 'white',
      fontSize: 40,
      marginTop: '10%',
    },
    text2: {
        height: '80%',
        width: '80%',
        color: 'white',
        fontSize: height * 0.02,
        textAlign: 'center',
        marginTop: '10%',
        
      },
    image: {
        width: '75%',
        height: '75%',
        marginTop: '15%',
        marginBottom: '12%',
        resizeMode: 'contain',
    },

    input: {
        width: '70%',
        maxWidth : 450,
        height: '12%',
        maxHeight : 50,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: '10%',
        
        
        
    },

  });

export default Login;
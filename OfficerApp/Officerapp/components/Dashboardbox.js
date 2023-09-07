import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import COLORS from "../constants/colors";

const Dashboardbox = (props) => {
    const nameofbox = props.name;
    const screenname = props.screenName;
    const navigation = props.navigation;

    return (

        <View style={styles.container}>
            
            <View style={styles.container2}>
                
                <Pressable 
                    onPress={() => navigation.navigate(screenname)}> 
                        <Text style={{fontSize: 30, color: 'white',textAlign: 'center', marginTop:10,marginBottom:10  }}>
                        {nameofbox}
                        </Text>
                
                </Pressable> 
                
            </View>
        
        </View>





        

    );



};

const styles = StyleSheet.create({

    container: {
        
        width: '80%',
        height : '15%',
        maxWidth: 500,
        maxHeight: 160,
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center', // Vertically center conten
        alignItems: 'center',     // Horizontally center content
        marginTop: "8%",
        marginBottom: '0%',
        borderRadius: 20,
        
    },
    container2: {

        width: '60%',
        maxWidth: 500,
        maxHeight: 120,
        backgroundColor: 'transparent',
        justifyContent: 'center', // Vertically center conten
        alignItems: 'center',
    },
 });


export default Dashboardbox;

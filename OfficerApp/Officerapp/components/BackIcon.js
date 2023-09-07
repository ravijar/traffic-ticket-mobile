import React from "react";
import { Image, Pressable } from "react-native";

const BackIcon = (props) => {  
   const styles = props.style;
   const navigation = props.navigation;
   const screenName = props.screenName;
    return (
        <Pressable
                onPress={() => navigation.navigate(screenName)} >
                    <Image
                    source={require('../assets/BackIcon.png')}
                    style = {styles}
                />
                </Pressable>
    );
    
 };

 export default BackIcon;
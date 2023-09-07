import React from "react";
import { Image, Pressable } from "react-native";

const Logout = (props) => {
    const styles = props.style;
    const navigation = props.navigation;
    return (
        <Pressable
                onPress={() => navigation.navigate("Login")} >
                    <Image
                    source={require('../assets/Logout.png')}
                    style = {styles}/>
        </Pressable>
    );

}


export default Logout;
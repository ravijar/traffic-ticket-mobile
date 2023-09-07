import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ScrollBox = (props) => {
const name = props.name;

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>dffdbf</Text>
                <Text style={styles.text}>dfhg</Text>
                <Text style={styles.text}>mjyfujht</Text>
                <Text style={styles.text}>zdfhdg</Text>
                <Text style={styles.text}>2345t</Text>
                <Text style={styles.text}>dfr5</Text>
                <Text style={styles.text}>dfgdrt6</Text>
                <Text style={styles.text}>dffdbf</Text>
                <Text style={styles.text}>dfhg</Text>
                <Text style={styles.text}>mjyfujht</Text>
                <Text style={styles.text}>zdfhdg</Text>
                <Text style={styles.text}>2345t</Text>
                <Text style={styles.text}>dfr5</Text>
                <Text style={styles.text}>dfgdrt6</Text>
            </ScrollView>
        
        </View>

    );
};





const styles = StyleSheet.create({
    container: {    
        backgroundColor: "red",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: 300,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10.0,
        elevation: 24,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },

});

export default ScrollBox;
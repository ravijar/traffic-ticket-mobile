import React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView,Button, Text, StyleSheet, View } from "react-native";
import { useState } from "react";

const Datepicker = () => {
    
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(true);
        setDate(currentDate);
    };

    return (

        <View style={{flexDirection: 'row', marginTop:15}}>
            
            <Text style={{fontSize: 15, color: 'black',textAlign: 'center', marginTop:10,marginRight:10  }}>
                Date of Offence:
            </Text>

            <SafeAreaView>
                {show && (
                     <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}
            </SafeAreaView>

        </View>
    
        //<Text>selected: {date.toLocaleTimeString()}</Text> for function use
    
    );

};

const styles = StyleSheet.create({

    TextContainer: {
        alignItems: 'flex-start', // Align the button to the left
        //margin: 10, // Add margin as needed
        marginTop: 20,
        //backgroundColor: 'lightblue',
        width: 120,
        borderRadius: 15,
    },
    TextContainer1: {
        alignItems: 'flex-start', // Align the button to the left
        //margin: 10, // Add margin as needed
        marginTop: 10,
        backgroundColor: 'transparent',
        width: 250,
        borderRadius: 15,
    },
});

export default Datepicker;
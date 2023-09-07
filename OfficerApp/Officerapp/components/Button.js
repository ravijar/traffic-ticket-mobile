import {View, Text } from 'react-native';
import React from 'react';
import { StyleSheet , TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.PRIMARY;
    const outlinedColor = COLORS.WHITE;
    const bgcolor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.WHITE : COLORS.PRIMARY;
    const fontsize = props.fontSize || 20;
    const marginRight = props.marginRight || 0;
    return (
        <TouchableOpacity style={{
            ...styles.button,
            ...props.style,
            marginRight: marginRight,
            }}
            onPress={props.onPress}
            >
                <Text style={{fontSize: fontsize ,fontWeight: '900',  ...{color: textColor}}}>
                    {props.title}
                </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 10,
        backgroundColor: "#155E75",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Button;
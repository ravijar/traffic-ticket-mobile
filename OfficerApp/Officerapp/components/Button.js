import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const Button = (props) => {
  // Determine the colors, fontzise based on props or use the default values
  const filledBgColor = props.color || COLORS.PRIMARY;
  const outlinedColor = COLORS.WHITE;
  const bgcolor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.WHITE : COLORS.PRIMARY;
  const fontsize = props.fontSize || 20;
  const marginRight = props.marginRight || 0;

  return (
    // Create a TouchableOpacity component that responds to touches

    <TouchableOpacity
      style={{
        ...styles.button,
        ...props.style, // Merge any additional styles passed via props
        marginRight: marginRight,
      }}
      onPress={props.onPress} // Call the onPress function provided via props when pressed
    >
      <Text
        style={{
          fontSize: fontsize,
          fontWeight: "900",
          ...{ color: textColor },
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    backgroundColor: "#155E75",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;

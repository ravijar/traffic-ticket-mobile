import React from "react";
import { Image, Pressable } from "react-native";

const BackIcon = (props) => {
  // Extract the styles, navigation, and screenName properties from the props
  const styles = props.style;
  const navigation = props.navigation;
  const screenName = props.screenName;

  // Return a Pressable component that, when pressed, navigates to the specified screen
  return (
    <Pressable onPress={() => navigation.navigate(screenName)}>
      <Image source={require("../assets/BackIcon.png")} style={styles} />
    </Pressable>
  );
};

export default BackIcon;

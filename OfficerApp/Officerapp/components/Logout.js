import React from "react";
import { Image, Pressable } from "react-native";

const Logout = (props) => {
  // Extract values from props
  const styles = props.style;
  const navigation = props.navigation;
  
  return (
    // Create a Pressable component with an onPress event handler
    <Pressable onPress={() => navigation.navigate("Login")}>
      {/* Render an Image component with specified source and styles */}
      <Image source={require("../assets/Logout.png")} style={styles} />
    </Pressable>
  );
};

export default Logout;

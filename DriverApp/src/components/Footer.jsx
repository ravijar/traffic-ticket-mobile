import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

//component to add footer image
const Footer = ({ navigation }) => {
  return (
    <View>
      <Image source={require("../assets/footer.png")} style={styles.footer} />
    </View>
  );
};

export default Footer;

import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  // Use useEffect to navigate to the Login screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts
    };
  }, [navigation]);

  

  
  
  return (
    <View style={styles.container}>
      {/* Application Logo */}
      <Image source={require("../assets/logo2.png")} style={styles.image} />

      {/*Application's title */}
      <Text style={styles.text}>Officer Portal</Text>

      <Image source={require("../assets/Footer.png")} style={styles.image2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    marginTop: 140,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 200,
  },
  image2: {
    width: 300,
    height: 55,
    marginTop: 200,
  },
});

export default Welcome;

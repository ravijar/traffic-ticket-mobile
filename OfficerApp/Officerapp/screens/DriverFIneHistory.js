import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Fotter";

const DriverFineHistory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        Headername="FINE HISTORY"
        back="DashBoard"
      />

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
  },
});

export default DriverFineHistory;

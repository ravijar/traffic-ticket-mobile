import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const { width, height } = Dimensions.get("screen");

const ForgotPassword = ({ navigation }) => {
  return (
    // A KeyboardAvoidingView ensures the view adjusts when the keyboard appears.
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.PRIMARY }}
        bounces={false}
      >
        {/* Header */}
        <View style={styles.container1}>
          <Text style={styles.text1}>Password Reset</Text>
          <Text style={styles.text1}>Request</Text>
        </View>

        {/* Logo */}
        <View style={styles.container2}>
          <Image source={require("../assets/logo.png")} style={styles.image} />
        </View>

        {/* User ID Input */}
        <View style={styles.container4}>
          <TextInput
            style={styles.input}
            placeholder="User ID"
            placeholderTextColor="black"
          />
        </View>

        

        {/* Request Button */}
        <View style={styles.container5}>
          <Button
            title="Request"
            filled
            fontSize={height * 0.015}
            style={{ width: height * 0.1 }}
          />
        </View>

        {/* Sign In Text */}
        <View style={styles.container6}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: height * 0.02,
                color: "white",
                textDecorationLine: "underline",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },

  container1: {
    height: height * 0.1,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    marginTop: 100,
    marginBottom: "10%",
  },

  container2: {
    height: height * 0.25,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    bottom: "0%",
  },
  container4: {
    width: "70%",
    height: height * 0.1,
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    marginLeft: "15%",
    marginTop: height * 0.02,
  },
  container3: {
    height: height * 0.05,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
  },
  container5: {
    height: height * 0.1,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    marginTop: height * 0.03,
  },
  container6: {
    height: height * 0.1,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    marginTop: height * 0.03,
  },

  text1: {
    color: "white",
    fontSize: 40,
  },
  // text2: {
  //     color: 'white',
  //     fontSize: 40,
  // },
  text3: {
    color: "white",
    fontSize: height * 0.015,
  },

  image: {
    width: "75%",
    height: "75%",
    marginTop: "15%",
    marginBottom: "12%",
    resizeMode: "contain",
  },

  input: {
    width: "70%",
    maxWidth: 280,
    height: "40%",
    maxHeight: 38,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default ForgotPassword;

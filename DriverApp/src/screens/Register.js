import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import RegisterBox from "../components/RegisterBox";
import styles from "../components/styles";
import {
  GluestackUIProvider,
  config,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import { KeyboardAvoidingView } from "react-native";

const Register = ({ navigation }) => {
  return (
    <GluestackUIProvider config={config.theme}>
      {/* <SafeAreaView style={styles.container}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.text1}>Register</Text>

        <Image
          source={require("../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png")} // trafficticket logo
          style={styles.image}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text2}>Already have an account? </Text>
          <Link onPress={() => navigation.navigate("Login")}>
            <LinkText size="sm" marginTop={8}>
              Sign In
            </LinkText>
          </Link>
        </View>
        <Text style={styles.text2}>Register your new account</Text>

        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <RegisterBox navigation={navigation} />
        </ScrollView>
        {/* </SafeAreaView> */}
      </KeyboardAvoidingView>
    </GluestackUIProvider>
  );
};

export default Register;

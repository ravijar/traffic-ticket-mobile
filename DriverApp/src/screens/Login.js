import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import Loginbox from "../components/home/loginbox";
import styles from "../components/styles";

const Login = ({ navigation }) => {
  return (
    <GluestackUIProvider config={config.theme}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* <SafeAreaView style={styles.container}> */}
        <Text style={styles.text1}>Sign In</Text>

        <Image
          source={require("../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png")} //trafficticket logo
          style={styles.image}
        />
        <Text style={styles.text2}>
          Please sign in to your existing account
        </Text>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Loginbox navigation={navigation} />
          {/* box for login */}
        </ScrollView>
        {/* </SafeAreaView> */}
      </KeyboardAvoidingView>
    </GluestackUIProvider>
  );
};

export default Login;

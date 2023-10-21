import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import ForgotUpdateBox from "../components/ForgotUpdateBox";
import styles from "../components/styles";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";

const ForgotUpdate = ({ route, navigation }) => {
  const { nic } = route.params;
  return (
    <GluestackUIProvider config={config.theme}>
      {/* <SafeAreaView style={styles.container}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.text1}>Update Password</Text>

        <Image
          source={require("../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png")} //trafficticketlogo
          style={styles.image}
        />
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.text2}>Update your password</Text>

          <ForgotUpdateBox navigation={navigation} nic={nic} />
          {/* box to fill up the details needed for changing the password*/}
        </ScrollView>
        {/* </SafeAreaView> */}
      </KeyboardAvoidingView>
    </GluestackUIProvider>
  );
};

export default ForgotUpdate;

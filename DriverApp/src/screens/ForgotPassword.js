import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import {
  Input,
  InputField,
  Button,
  ButtonText,
  Link,
  LinkText,
} from "@gluestack-ui/themed";

import styles from "../components/styles";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";

const ForgotPassword = ({ navigation }) => {
  return (
    <GluestackUIProvider config={config.theme}>
      {/* <SafeAreaView style={styles.container}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.text1}>Forgot Password</Text>

        <Image
          source={require("../assets/traffic-ticket-high-resolution-logo-white-on-transparent-background.png")} //traqfficticket logo
          style={styles.image}
        />

        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <KeyboardAvoidingView>
            <View style={{ marginTop: "20%", width: "100%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                  alignSelf: "center",
                }}
              >
                Enter NIC:
              </Text>
              <Input //input field for NIC number
                style={styles.input}
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="Enter NIC" />
              </Input>
            </View>

            <View
              style={{
                marginBottom: "20%",
                marginTop: "20%",
                alignItems: "center",
              }}
            >
              <Button //button to send the message
                style={styles.button}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={() => navigation.navigate("Login")}
              >
                <ButtonText>Send Email </ButtonText>
              </Button>

              <Link //link to sign in page
                onPress={() => navigation.navigate("Login")}
                style={{ marginTop: "5%", alignItems: "center" }}
              >
                <LinkText size="sm">Sign In</LinkText>
              </Link>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        {/* </SafeAreaView> */}
      </KeyboardAvoidingView>
    </GluestackUIProvider>
  );
};

export default ForgotPassword;

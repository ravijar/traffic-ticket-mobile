import React, { useState } from "react";
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
import axios from "axios";
import { API_URL } from "../utils/constants";

const ForgotPassword = ({ navigation }) => {
  const [nic, setNIC] = useState("");

  const onSubmit = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/api/users/send_otp/`, {
          nic,
        })

        .then(() => {
          alert("OTP sent to your email");
          navigation.navigate("OTP", { nic });
        })
        .catch((error) => {
          alert("Invalid NIC");
        });
    });
  };

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
                <InputField
                  placeholder="Enter NIC"
                  value={nic}
                  onChangeText={(text) => setNIC(text)}
                />
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
                // onPress={() => navigation.navigate("Login")}
                onPress={onSubmit}
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

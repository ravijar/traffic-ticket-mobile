import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import InputTextCurve from "../components/InputTextCurve";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  // state variables
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [userId, setUserId] = useState(""); // State to store user ID
  const [password, setPassword] = useState(""); // State to store password
  const [CredentialError, setCredentialError] = useState("");
  const [showErrors, setShowErrors] = useState(false);


  useEffect(() => {
    // Add event listeners to detect keyboard visibility
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    // Clean up event listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSignIn = async () => {
    try {
      // Make a network request to authenticate the user
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userId,
          password: password,
        })
      });

      if (response.ok) {
        // Authentication successful, navigate to the dashboard
        navigation.navigate("DashBoard");
      } else {
        // Authentication failed, set an error message
        setShowErrors(true);
        setCredentialError("Incorrect Credentials");
        setTimeout(() => {
          setShowErrors(false);
        }, 2000);
        // Hide the error message after 2 seconds
      }
    } catch (error) {
      // An error occurred during authentication
      setShowErrors(true);
      setCredentialError("Incorrect Credentials");
      setTimeout(() => {
        setShowErrors(false);
      }, 2000);
    }
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.PRIMARY,
        flex: 1,
        flexDirection: "column",
      }} //parent view
    >
      {/* Header */}
      <View style={styles.container1}>
        <Text style={styles.text1}>Sign In</Text>
      </View>

      {/* Logo */}
      <View style={styles.container2}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>

      {/* Instructions */}
      <View style={styles.container3}>
        <Text style={styles.text2}>
          Please sign in to your existing account
        </Text>
      </View>

      {/* Main Content */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 6 }}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          bounces={false}
        >
          <View
            style={[isKeyboardVisible ? styles.container4 : styles.container4]}
          >
            {showErrors && (
              <Text style={{ color: "red", fontSize: height * 0.03 }}>
                {CredentialError}
              </Text>
            )}

            {/* User ID input */}
            <InputTextCurve
              style={styles.input}
              placeholder="User ID"
              onChangeText={(text) => setUserId(text)}
            />

            {/* Password input */}
            <InputTextCurve
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />

            {/* Sign In button */}
            <Button
              title="Sign In"
              filled
              // onPress={handleSignIn}
              onPress={() => navigation.navigate("DashBoard")}
              fontSize={12}
              style={{
                width: "40%",
                maxWidth: 200,
                marginTop: "20%",
                maxHeight: 100,
              }}
            />

            {/* Forgot Password and Change Password links */}
            <View style={{ flexDirection: "row", marginTop: "10%" }}>
              <Pressable onPress={() => navigation.navigate("ChangePassword")}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "blue",
                    textDecorationLine: "underline",
                    marginRight: "20%",
                  }}
                >
                  Change Password
                </Text>
              </Pressable>

              <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                <Text
                  style={{
                    fontSize: 12,
                    color: "blue",
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot Password
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 40,
  },

  container: {
    backgroundColor: "transparent",
  },

  container1: {
    flex: 2,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
  },

  container2: {
    flex: 3,
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
  },

  container3: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "transparent",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
  },

  container4: {
    width: "70%",
    maxWidth: 450,
    borderRadius: 30,
    backgroundColor: "gray",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    marginTop: height * 0.01,
  },
  container5: {
    width: "70%",
    height: "60%",
    maxHeight: 350,
    maxWidth: 450,
    borderRadius: 30,
    backgroundColor: "green",
    justifyContent: "center", // Vertically center content
    alignItems: "center", // Horizontally center content
    marginTop: height * 0.03,
    marginBottom: height * 0.06,
  },

  text1: {
    color: "white",
    fontSize: 40,
    marginTop: "10%",
  },
  text2: {
    height: "80%",
    width: "80%",
    color: "white",
    fontSize: height * 0.02,
    textAlign: "center",
    marginTop: "10%",
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
    maxWidth: 450,
    height: "12%",
    maxHeight: 50,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: "10%",
  },
});

export default Login;

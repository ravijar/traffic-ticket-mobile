import React, { useEffect, useState } from "react"; //now
import { Pressable, Button, ButtonText } from "@gluestack-ui/themed";
import {
  Alert, // now
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import styles from "../components/styles";
import Head from "../components/Head";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage //now
import axios from "axios"; //now
import { API_URL } from "../utils/constants"; //now

const Dashboard = ({ navigation }) => {
  //now
  // const [isAuthorized, setIsAuthorized] = useState(false);

  // useEffect(() => {
  //   const checkAuthorization = async () => {
  //     try {
  //       const accessToken = await AsyncStorage.getItem("accessToken");

  //       if (accessToken) {
  //         // Make a request to your server to validate the token
  //         const response = await axios.get(`${API_URL}/api/token/`, {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         });

  //         if (response.status === 200) {
  //           setIsAuthorized(true); // Token is authorized
  //         } else {
  //           setIsAuthorized(false); // Unauthorized access
  //           Alert.alert(
  //             "Unauthorized",
  //             "You are not authorized to access this page."
  //           );
  //         }
  //       } else {
  //         setIsAuthorized(false); // Access token doesn't exist
  //         Alert.alert("Not Logged In", "You are not logged in.");
  //       }
  //     } catch (error) {
  //       console.error("Error checking authorization:", error);
  //       setIsAuthorized(false);
  //     }
  //   };

  //   checkAuthorization();
  // }, []);
  //now

  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={styles.containerWhite}>
        {/* <Head navigation={navigation} topic={"DASHBOARD"}/> */}
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PendingFines")}
            style={styles.button2}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                  marginTop: "13%",
                }}
              >
                PENDING FINES
              </Text>
              <Text
                style={{ fontSize: 20, color: "white", textAlign: "center" }}
              >
                COUNT = 1
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AccidentReporting")}
            style={styles.button2}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                marginTop: "13%",
              }}
            >
              ACCIDENT
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              REPORTING
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Suggestions")}
            style={styles.button2}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                marginTop: "13%",
              }}
            >
              SUGGESTIONS/
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              COMPLAINTS
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <Footer navigation={navigation} />
      </SafeAreaView>
    </GluestackUIProvider>
  );
};

export default Dashboard;

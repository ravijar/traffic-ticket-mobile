import {
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import InputTextCurve from "../components/InputTextCurve";
import Table2 from "../components/Table2";
import { API_URL } from "../constants/url";
const DriverFineHistory = ({ navigation }) => {
  const [input, setInput] = useState(""); // State to store the vehicle number entered by the user
  const [tabledata, setTabledata] = useState([]); // State to store the vehicle number entered by the user

  const handleSubmit = async () => {
    const trimmedInput = input.trim();

    try {
      const response = await fetch(`${API_URL}api/finebyid/${trimmedInput}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json(); // Parse the JSON response
        const transformedData = data.results.map((fine) => [
          fine.fine_id,
          fine.date,
          fine.violation_type,
          fine.location,
          fine.payment_status ? "Paid" : "Unpaid",
        ]);
        setTabledata(transformedData);
      } else {
        alert("Vehicle number is not Valid");
        setTabledata([]); // State to store the vehicle number entered by the user
      }
    } catch (error) {
      alert("Network Error");
      setTabledata([]); // State to store the vehicle number entered by the user
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          Headername="FINE HISTORY"
          back="DashBoard"
        />
        <View style={styles.container3}>
          <Text style={styles.text1}>DRIVER NIC</Text>

          <InputTextCurve
            style={styles.input}
            onChangeText={(input) => setInput(input)}
          />
        </View>

        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Button
            title="SUBMIT"
            filled
            fontSize={10}
            style={{ width: "20%", maxWidth: 120, marginTop: "6%" }}
            onPress={handleSubmit}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <ScrollView
            style={styles.container2}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            bounces={false}
          >
            <Table2 data={tabledata} />
          </ScrollView>
        </KeyboardAvoidingView>

        {Platform.OS === "ios" && (
          <View style={{ alignItems: "center" }}>
            <Footer />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container2: {
    width: "100%",
    backgroundColor: "transparent",
    height: "60%",
  },

  container3: {
    flex: 1,
    flexDirection: "row",
    width: "85%",
    height: "8%",
    maxWidth: 500,
    maxHeight: 90,
    backgroundColor: "gray",
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: "8%",
    borderRadius: 50,
    marginBottom: "5%",
    marginLeft: "8%",
  },

  input: {
    width: "60%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 15,
    color: "black",
    marginRight: 10,
  },

});

export default DriverFineHistory;

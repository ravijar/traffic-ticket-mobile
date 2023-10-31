import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import InputTextCurve from "../components/InputTextCurve";
import Dropdown from "../components/Dropdown";
import DatepickerIOS from "../components/DatepickerIOS";
import TimepickerIOS from "../components/TimepickerIOS";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import DatepickerAn from "../components/DatepickerAn";
import TimepickerAn from "../components/TimepickerAn";
import TextArea from "../components/TextArea";
import { API_URL } from "../constants/url";

const AddNewFine = ({ navigation }) => {
  // State variables to capture user
  const [vehicleNo, setVehicleNo] = useState("");
  const [nicNo, setNicNo] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date
  const [selectedTime, setSelectedTime] = useState(""); // State to store the selected time
  const [description, setDescription] = useState(""); // State to store the description of the violation

  const sendData = [
    vehicleNo,
    nicNo,
    place,
    type,
    selectedDate,
    selectedTime,
    description,
  ];

  // Array to store collected data in a tabular format
  const tableData = [
    { column1: "Vehicle No", column2: vehicleNo },
    { column1: "NIC No", column2: nicNo },
    { column1: "Place", column2: place },
    { column1: "Type", column2: type },
    { column1: "Date", column2: selectedDate },
    { column1: "Time", column2: selectedTime },
  ];


  const handleConfirm = async () => {
    navigation.navigate("OTPscreen", {
      tableData, // Pass the tableData to OTPscreen
      sendData,
    });
    try {
      const response = await fetch(`${API_URL}api/send_otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nic: nicNo,
        }),
      });

      if (response.status === 200) {
        navigation.navigate("OTPscreen", {
          tableData, // Pass the tableData to OTPscreen
          sendData,
        });
      } else {
        console.log(response.status);
        // handlefail1();
        alert("Error");
      }
    } catch (error) {
      // handlefail2();
      console.log(error);
      alert("Network Error");
    }
  };

  // Function to handle the selection of a violation type from the dropdown
  const handleViolationSelection = (selectedItem, index) => {
    setType(selectedItem); // Update the 'type' state with the selected value
  };

  const handlePlaceSelection = (selectedItem, index) => {
    setPlace(selectedItem); // Update the 'type' state with the selected value
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        Headername="ADD NEW FINE"
        back="DashBoard"
      />
      <View style={{ alignItems: "center" }}>
        <Button
          title="Request OTP"
          filled
          color="red"
          backgroundColor="#155E75"
          boarderColor="#155E75"
          onPress={() => handleConfirm()}
          fontSize={12}
          style={{ marginTop: 30, width: 100, fontSize: 30 }}
        />
      </View>
      {/* ScrollView for handling keyboard interactions */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.container1}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          bounces={false}
        >
          <View style={styles.container2}>
            <InputTextCurve
              style={styles.input}
              placeholder="Vehicle Number"
              onChangeText={(text) => setVehicleNo(text)}
            />

            <InputTextCurve
              style={styles.input2}
              placeholder="Driver's NIC Number"
              onChangeText={(text) => setNicNo(text)}
            />

            <Dropdown
              onSelect={handlePlaceSelection}
              dropdownlist={[
                "Katubedda",
                "Rawathawaththa",
                "Moratuwa",
                "Molpe",
                "Other",
              ]}
              defaultButtonText={"Select Place"}
            />

            {/* Dropdown for selecting violation type */}
            <Dropdown
              onSelect={handleViolationSelection}
              dropdownlist={[
                "Red Light",
                "High Speed",
                "Stop Sign",
                "Lane Cross",
                "Other",
              ]}
              defaultButtonText={"Select Violation"}
            />

            <></>

            {/* Conditional rendering based on platform */}
            {Platform.OS === "ios" ? (
              <>
                <DatepickerIOS
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
                <TimepickerIOS
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              </>
            ) : (
              <>
                <DatepickerAn />
                <TimepickerAn />
              </>
            )}

            <TextArea onChangeText={(text) => setDescription(text)} />

            {/* <ImagePick /> */}
            {/* Image picker disable in this version */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {Platform.OS === "ios" && (
        <View style={{ alignItems: "center" }}>
          <Footer />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container1: {
    width: "100%",
    backgroundColor: "transparent",
    height: "60%",
  },

  container2: {
    width: "75%",
    borderRadius: 20,
    backgroundColor: COLORS.GRAY,
    alignItems: "center",
    marginTop: 40,
    paddingBottom: 10,
  },

  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input2: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default AddNewFine;

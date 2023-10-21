import {
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import InputTextCurve from "../components/InputTextCurve";
import Table2 from "../components/Table2";
import ModalTester from "../components/ModalTester";
import { API_URL } from "../constants/url";
const DriverFineHistory = ({ navigation }) => {
  const [input, setInput] = useState(""); // State to store the vehicle number entered by the user
  const [Fail1, setFail1] = useState(false);
  const [Fail2, setFail2] = useState(false);
  const [tabledata, setTabledata] = useState([]); // State to store the vehicle number entered by the user

  const handlefail1 = () => {
    setTabledata([]); // State to store the vehicle number entered by the user
    setFail1(true);
    setTimeout(() => {
      setFail1(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };
  const handlefail2 = () => {
    setTabledata([]); // State to store the vehicle number entered by the user
    setFail2(true);
    setTimeout(() => {
      setFail2(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };

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
        handlefail1();
      }
    } catch (error) {
      handlefail2();
      console.error("Failed to fetch vehicle details.", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        Headername="FINE HISTORY"
        back="DashBoard"
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.text1}>DRIVER NIC</Text>

            <InputTextCurve
              style={styles.input}
              onChangeText={(input) => setInput(input)}
            />
          </View>

          <Button
            title="SUBMIT"
            filled
            fontSize={10}
            style={{ width: "20%", maxWidth: 120, marginTop: "6%" }}
            onPress={handleSubmit}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
      <View style={styles.container4}>
        <Table2 data={tabledata} />
      </View>
      {/* </ScrollView> */}

      <ModalTester
        set={Fail1}
        messagetodisplay="Vehicle number is not Valid"
        backgroundColor="red"
      />
      <ModalTester
        set={Fail2}
        messagetodisplay="Network Error"
        backgroundColor="red"
      />

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
  },
  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
  },

  container3: {
    flex: 1,
    flexDirection: "row",
    width: "85%",
    height: "8%",
    maxWidth: 500,
    maxHeight: 90,
    backgroundColor: "gray",
    justifyContent: "center", // Vertically center conten
    alignItems: "center", // Horizontally center content
    marginTop: "8%",
    borderRadius: 50,
    marginBottom: "5%",
  },

  container4: {
    flex: 2,
    width: "90%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12%",
    marginTop: "8%",
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default DriverFineHistory;

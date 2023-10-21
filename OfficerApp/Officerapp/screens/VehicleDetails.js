import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import InputTextCurve from "../components/InputTextCurve";
import Table from "../components/Table";
import ModalTester from "../components/ModalTester";
import { API_URL } from "../constants/url";

const VehicleDetails = ({ navigation }) => {

  const [Fail1, setFail1] = useState(false);
  const [Fail2, setFail2] = useState(false);
  const [input, setInput] = useState(""); // State to store the vehicle number entered by the user
  const [vehicleNo, setVehicleNo] = useState("None");
  const [ownerName, setOwnerName] = useState("None");
  const [chassisNo, setChassisNo] = useState("None");
  const [engineNo, setEngineNo] = useState("None");
  const [vehicleType, setVehicleType] = useState("None");
  const [color, setColor] = useState("None");
  const [licenseExpireDate, setLicenseExpireDate] = useState("None");

  // Table data containing vehicle details
  const tableData = [
    { column1: "VEHICLE NUMBER", column2: vehicleNo },
    { column1: "OWNER   NAME", column2: ownerName },
    { column1: "CHASSIS NUMBER", column2: chassisNo },
    { column1: "ENGINE NUMBER", column2: engineNo },
    { column1: "VEHICLE TYPE", column2: vehicleType },
    { column1: "COLOR", column2: color },
    { column1: "LICENSE EXPIRE DATE", column2: licenseExpireDate },
  ];

  const settabletoempty = () => {
    setVehicleNo("None");
    setOwnerName("None");
    setChassisNo("None");
    setEngineNo("None");
    setVehicleType("None");
    setColor("None");
    setLicenseExpireDate("None");
  };

  const handlefail1 = () => {
    settabletoempty();
    setFail1(true);
    setTimeout(() => {
      setFail1(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };
  const handlefail2 = () => {
    settabletoempty();
    setFail2(true);
    setTimeout(() => {
      setFail2(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const trimmedInput = input.trim();

    try {
      const response = await fetch(`${API_URL}api/vehicles/${trimmedInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json(); // Parse the JSON response
        setVehicleNo(data.vehicle_number);
        setOwnerName(data.owner_name);
        setChassisNo(data.chassis_number);
        setEngineNo(data.engine_number);
        setVehicleType(data.vehicle_type);
        setColor(data.color);
        setLicenseExpireDate(data.license_expiry_date);
      } else {
        handlefail1();
      }
    } catch (error) {
      handlefail2();
    }
  };



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          Headername="VEHICLE DETAILS"
          back="DashBoard"
        />

        {/* Vehicle Number Input */}
        <View style={styles.container3}>
          <Text style={styles.text1}>VEHICLE NO</Text>

          <InputTextCurve
            style={styles.input}
            onChangeText={(input) => setInput(input)}
          />
        </View>

        {/* Submit Button */}
        <Button
          title="SUBMIT"
          filled
          fontSize={10}
          style={{ width: "20%", maxWidth: 120, marginTop: "6%" }}
          onPress={handleSubmit}
        />

        {/* Table to display vehicle details */}
        <View style={styles.container2}>
          <Table data={tableData} />
        </View>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
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
  container2: {
    flex: 1,
    width: "85%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "8%",
    marginBottom: "12%",
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

export default VehicleDetails;

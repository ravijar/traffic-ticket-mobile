import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import InputTextCurve from "../components/InputTextCurve";
import Table from "../components/Table";
import Button from "../components/Button";

const OTPscreen = ({ route, navigation }) => {
  const { tableData } = route.params; // Get the tableData from the OTPscreen

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          Headername="ADD NEW FINE"
          back="AddNewFine"
        />

        <View style={styles.container1}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Enter OTP
          </Text>

          {/* OTP Input */}
          <InputTextCurve style={styles.input} />

          {/* Edit and Confirm Buttons */}
          <View style={{ flexDirection: "row" }}>
            <Button
              title="Edit"
              filled
              onPress={() => navigation.navigate("AddNewFine")}
              fontSize={12}
              style={{ marginTop: 30, width: 100 }}
            />
            <Button
              title="Confirm"
              filled
              onPress={() => navigation.navigate("DashBoard")}
              fontSize={12}
              style={{ marginTop: 30, width: 100, marginLeft: 100 }}
            />
          </View>
        </View>

        <View style={styles.container2}>
          <Table data={tableData} />
        </View>

        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  container1: {
    width: "100%",
    height: 200,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 200,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
});

export default OTPscreen;

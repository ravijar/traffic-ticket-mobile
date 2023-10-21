import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../components/styles";
import Topic from "../components/Topic";
import { Table, Row, Rows } from "react-native-table-component";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { API_URL } from "../utils/constants";
import { connect } from "react-redux";

const PendingFines = ({ navigation, nic }) => {
  const [loading, setLoading] = useState(true);
  const [fines, setFines] = useState([]);
  const [header, setHeader] = useState([]);

  const modifiedHeader = header.map((fieldName) => {
    if (fieldName === "fine_id") {
      return "ID";
    } else if (fieldName === "violation_amount") {
      return "Amount";
    } else if (fieldName === "vehicle") {
      return "Vehicle";
    } else if (fieldName === "date") {
      return "Date";
    } else if (fieldName === "time") {
      return "Time";
    } else {
      return fieldName;
    }
  });

  const data = fines.map((fine) => {
    const rowData = Object.values(fine);
    // Add the value for the new column "Pay"
    rowData.push(
      <TouchableOpacity
        onPress={() => {
          // Handle the link click here
          // You can use navigation or any other action
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "blue",
            textDecorationLine: "underline",
          }}
        >
          Pay
        </Text>
      </TouchableOpacity>
    );
    return rowData;
  });

  useEffect(() => {
    fetch(API_URL + "/api/driverfine/?driver_id=" + nic, {
      method: "GET",
      headers: { accept: "application/json" },
    })
      .then((res) => {
        // console.log({ res });
        return res.json();
      })
      .then((data) => {
        if (data.results.length > 0) {
          setHeader(Object.keys(data.results[0]));
          setHeader((prevHeader) => {
            prevHeader.push("Pay"); // Add "Pay" to the header
            return prevHeader;
          });
        }

        // console.log({ data });
        setFines(data.results);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const tableStyles = {
    tableWrapper: { width: "95%", marginTop: "10%" },
    header: { backgroundColor: "#E4F6F5", height: 40 },
    row: { height: 40 },
    text: { textAlign: "center", fontSize: 8 }, // Adjust font size as needed
    headerText: { textAlign: "center", fontSize: 12, fontWeight: "bold" },
    rows: { height: 40 },
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.containerWhite}>
      {/* <Head navigation={navigation} topic={"PENDING FINES"}/> */}
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Topic navigation={navigation} topic={"PENDING FINES"} />
        <View style={tableStyles.tableWrapper}>
          {data.length > 0 ? ( // Check if data is available
            <>
              <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
                <Row
                  data={modifiedHeader}
                  style={tableStyles.header}
                  textStyle={tableStyles.headerText}
                />
                <Rows
                  data={data}
                  textStyle={tableStyles.text}
                  style={tableStyles.rows}
                />
              </Table>
            </>
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              --- No Pending Fines ---
            </Text>
          )}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

// export default PendingFines;
const mapStateToProps = (state) => ({
  nic: state.auth.nic, // Assuming that 'nic' is stored in your Redux state
});
// export default AccidentReporting;
export default connect(mapStateToProps)(PendingFines);

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import styles from "../components/styles";
import Topic from "../components/Topic";
import { Table, Row, Rows } from "react-native-table-component";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { API_URL } from "../utils/constants";

const PendingFines = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [fines, setFines] = useState([]);

  const header = fines[0] && Object.keys(fines[0]);
  const data = fines.map((fine) => Object.values(fine));

  useEffect(() => {
    fetch(API_URL + "/api/fines/", {
      method: "GET",
      headers: { accept: "application/json" },
    })
      .then((res) => {
        // console.log({ res });
        return res.json();
      })
      .then((data) => {
        console.log({ data });
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
          <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
            <Row
              data={header}
              style={tableStyles.header}
              textStyle={tableStyles.headerText}
            />
            <Rows
              data={data}
              textStyle={tableStyles.text}
              style={tableStyles.rows}
            />
          </Table>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default PendingFines;

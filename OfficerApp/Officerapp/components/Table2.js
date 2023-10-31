import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Table2 = ({data}) => {

  const headers = ["FineID", "Date", "Violation Type", "Place", "Status"];
  

  return (
    <View style={styles.table}>
      {/* Header row */}
      <View style={styles.row}>
        {headers.map((header, index) => (
          <Text key={index} style={styles.headerCell}>
            {header}
          </Text>
        ))}
      </View>

      {/* Data rows */}
      {data.map((rowData, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {rowData.map((cellData, cellIndex) => (
            <Text key={cellIndex} style={styles.cell}>
              {cellData}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
  row: {
    flexDirection: "row",
  },
  headerCell: {
    flex: 1,
    backgroundColor: "lightgray",
    padding: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  cell: {
    flex: 1,
    padding: 4,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Table2;

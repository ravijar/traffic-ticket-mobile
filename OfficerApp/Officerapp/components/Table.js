import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Table = ({ data }) => {
  return (
    <View style={styles.table}>
      {/* You can add a header row here if needed */}

      {/* Render rows based on the 'data' prop */}
      {data.map((rowData, rowIndex) => (

        <View style={styles.row} key={rowIndex}>

          {/* Render each cell in the row */}
          <Text style={styles.cell}>{rowData.column1}</Text>
          <Text style={styles.cell}>{rowData.column2}</Text>
          
        </View>

      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: "80%",
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
    padding: 8,
    borderWidth: 1,
    borderColor: "lightgray",
    // textAlign: 'center',
    width: "50%",
    fontSize: 18,
  },
});

export default Table;

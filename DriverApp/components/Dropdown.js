import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const Dropdown = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          //console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        dropdownStyle={styles.dropdownStyle}
        buttonStyle={styles.dropdownButton}
        defaultButtonText="Violation Type"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
    marginBottom: 50,
  },
  dropdownStyle: {
    backgroundColor: "#fafafa",
    width: 240,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    borderRadius: 10,
  },
  dropdownButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#001F3F",
    borderRadius: 20, // Border radius for curved edges
    fontSize: 16,
    color: "white",
    width: 250,
    height: 42,
  },
});

export default Dropdown;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const Dropdown = ({ onSelect }) => {
  // Define the Violation type for the dropdown component
  const Violation = [
    "Speeding",
    "Red Light",
    "Stop Sign",
    "Lane Cross",
    "Other",
  ];

  return (

    <View style={styles.container}>
      {/* Render the SelectDropdown component */}

      <SelectDropdown
        data={Violation} // Provide the data (options) for the dropdown
        onSelect={onSelect} // Specify the function to handle item selection
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem; // Customize the button text after selection
        }}
        rowTextForSelection={(item, index) => {
          return item; // Customize the text for each dropdown row
        }}
        dropdownStyle={styles.dropdownStyle} // Apply styles to the dropdown container
        buttonStyle={styles.dropdownButton} // Apply styles to the dropdown button
        defaultButtonText="Violation Type" // Set the default button text
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
    borderRadius: 20, 
    fontSize: 16,
    color: "white",
    width: 250,
    height: 42,
  },
});

export default Dropdown;

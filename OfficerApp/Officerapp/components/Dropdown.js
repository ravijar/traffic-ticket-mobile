import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const Dropdown = ({ onSelect, dropdownlist, defaultButtonText }) => {
  
  const dropdownL = dropdownlist;
  const ButtonText = defaultButtonText;
  return (

    <View style={styles.container}>
      {/* Render the SelectDropdown component */}

      <SelectDropdown
        data={dropdownL} // Provide the data (options) for the dropdown
        onSelect={onSelect} // Specify the function to handle item selection
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem; // Customize the button text after selection
        }}
        rowTextForSelection={(item, index) => {
          return item; // Customize the text for each dropdown row
        }}
        dropdownStyle={styles.dropdownStyle} // Apply styles to the dropdown container
        buttonStyle={styles.dropdownButton} // Apply styles to the dropdown button
        defaultButtonText = {ButtonText} // Set the default button text
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

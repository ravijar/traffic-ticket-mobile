import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { useState } from "react";

const DatepickerIOS = ({ setSelectedDate }) => {
  // Initialize date, mode, show states for datepicker component to use it later
  const [date, setDate] = useState(new Date(1693506600000));
  const show = true;
  const mode = "date";

  // Function to handle changes in the date/time picker
  const onChange = (event, selectedDate) => {
    setDate(selectedDate); // Update the date state with the selected date
    const currentDate = selectedDate.toLocaleDateString(); // Format the selected date
    setSelectedDate(currentDate); // Call the setSelectedDate prop to pass the selected date to the parent component
  };

  return (
    <View style={{ flexDirection: "row", marginTop: 15 }}>
      <Text style={styles.text}>Date of Offence:</Text>

      <SafeAreaView>
        {show && ( // Render the DateTimePicker component when 'show' is true
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode} // Specify the mode for the picker
            is24Hour={true} // Use a 24-hour format
            onChange={onChange} // Handle date/time changes using the onChange function
          />
        )}
      </SafeAreaView>
    </View>

    //<Text>selected: {date.toLocaleTimeString()}</Text> for function use
  );
};

const styles = StyleSheet.create({
  TextContainer: {
    alignItems: "flex-start", // Align the button to the left
    marginTop: 20,
    width: 120,
    borderRadius: 15,
  },
  TextContainer1: {
    alignItems: "flex-start", // Align the button to the left
    marginTop: 10,
    backgroundColor: "transparent",
    width: 250,
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    marginRight: 10,
  },
});

export default DatepickerIOS;

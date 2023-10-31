import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Text, StyleSheet, View, Pressable } from "react-native";
import COLORS from "../constants/colors";
const DatepickerAn = () => {
  // Initialize date, mode, show states for datepicker component to use it later
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  // Function to handle changes in the date/time picker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; // Determine the selected date or use the current date as a fallback
    setShow(false); // Hide the picker
    setDate(currentDate); // Update the date state with the selected date
  };

  // Function to handle pressing outside the picker to dismiss it
  const handlePress = () => {
    setShow(false); // Dismiss the time picker
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.Text}>Date of Offence:</Text>
        <Pressable onPress={() => setShow(true)}>
          <Text style={{ color: COLORS.PRIMARY }}>
            {" "}
            {date.toLocaleDateString()}
          </Text>
        </Pressable>
      </View>
      {show && ( // Render the DateTimePicker component when 'show' is true
        <SafeAreaView>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode} // Specify the mode (date, time, etc.) for the picker
            is24Hour={true}
            onChange={onChange} // Handle date/time changes using the onChange function
          />
        </SafeAreaView>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginTop: 10,
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
  },

  Text: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
    marginRight: 45,
  },
});

export default DatepickerAn;

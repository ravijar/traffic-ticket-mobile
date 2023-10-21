import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { useState } from "react";

const TimepickerIOS = ({ setSelectedTime }) => {

  // Same as DatepickerIOS, but for 
  const [date, setDate] = useState(new Date(1693506600000));
  const mode = "time";
  const show = true;

  const onChange = (event, selectedTime) => {
    setDate(selectedTime);
    const currentDate = selectedTime.toLocaleTimeString();
    setSelectedTime(currentDate);
  };

  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Text
        style={{
          fontSize: 15,
          color: "black",
          textAlign: "center",
          marginTop: 10,
          marginRight: 54,
        }}
      >
        Time of Offence:
      </Text>

      <SafeAreaView>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </SafeAreaView>
    </View>

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
});

export default TimepickerIOS;

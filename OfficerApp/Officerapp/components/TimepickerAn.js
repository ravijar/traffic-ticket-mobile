import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Text, StyleSheet, View, Pressable } from "react-native";
import COLORS from "../constants/colors";
const TimepickerAn = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const handlePress = () => {
    setShow(false); // Dismiss the time picker
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.row}>
      <Text style={styles.Text}>Time of Offence:</Text>
        <Pressable onPress={() => setShow(true)}>
        <Text style={{color:COLORS.PRIMARY}}> {date.toLocaleTimeString()}</Text>

        </Pressable>

      </View>
      {show && (
        <SafeAreaView>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        </SafeAreaView>
      )}
    </Pressable>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
  },
  Text: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
    marginRight: 25,
  },
});

export default TimepickerAn;

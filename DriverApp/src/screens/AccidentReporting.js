// import React from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   Platform,
// } from "react-native";
// import styles from "../components/styles";
// import Footer from "../components/Footer";
// import Topic from "../components/Topic";
// import { useState } from "react";
// import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";
// import { GluestackUIProvider, config } from "@gluestack-ui/themed";
// import { Calendar } from "react-native-calendars";
// import axios from "axios";
// import { API_URL } from "../utils/constants";
// import DateTimePicker from "@react-native-community/datetimepicker";

// const AccidentReporting = ({ navigation, topic }) => {
//   const [place, setPlace] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState("");
//   const [description, setDescription] = useState("");
//   const [reporter, setReporter] = useState("");

//   const onSubmit = () => {
//     return new Promise((resolve, reject) => {
//       axios
//         .post(
//           `${API_URL}/api/accidents/`,
//           {
//             time,
//             date,
//             location: place,
//             description,
//             reporter,
//           },
//           config
//         )

//         .then(() => {
//           alert("Accident reported successfully");
//           setPlace(""); // Clear the form fields
//           setTime("");
//           setDate("");
//           setDescription("");
//           setReporter("");
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };

//   // const Calendar = () => {
//   //   <Calendar
//   //     onDayPress={(day) => {
//   //       console.log("selected day", day);
//   //     }}
//   //   />;
//   // };

//   return (
//     <GluestackUIProvider config={config.theme}>
//       <SafeAreaView style={styles.containerWhite}>
//         {/* <Head navigation={navigation} topic={"REPORTING"}/> */}
//         <ScrollView
//           style={{ width: "100%" }}
//           contentContainerStyle={styles.scrollViewContent}
//         >
//           <Topic navigation={navigation} topic={"ACCIDENT REPORTING"} />

//           <View style={styles.container2}>
//             <Text style={styles.formText}>Place:</Text>

//             <Input
//               style={styles.input2}
//               variant="outline"
//               size="sm"
//               isDisabled={false}
//               isInvalid={false}
//               isReadOnly={false}
//             >
//               <InputField
//                 placeholder="Enter place"
//                 value={place}
//                 onChangeText={(text) => setPlace(text)}
//               />
//             </Input>

//             <Text style={styles.formText}>Date:</Text>
//             {/* <Input
//               onPress={Calendar}
//               style={styles.input2}
//               variant="outline"
//               size="sm"
//               isDisabled={false}
//               isInvalid={false}
//               isReadOnly={false}
//             >
//               <InputField
//                 placeholder="Enter Date"
//                 value={date}
//                 onChangeText={(text) => setDate(text)}
//               />
//             </Input> */}
//             {/* <DatepickerIOS /> */}

//             <DateTimePicker
//               value={new Date(date)} // Provide a JavaScript Date object
//               mode="date"
//               display="default"
//               onChange={(event, selectedDate) => {
//                 if (event.type === "set") {
//                   // The user selected a date
//                   setDate(selectedDate);
//                 }
//               }}
//             />

//             <Text style={styles.formText}>Time:</Text>
//             <Input
//               style={styles.input2}
//               variant="outline"
//               size="sm"
//               isDisabled={false}
//               isInvalid={false}
//               isReadOnly={false}
//             >
//               <InputField
//                 placeholder="Enter time"
//                 value={time}
//                 onChangeText={(text) => setTime(text)}
//               />
//             </Input>

//             <Text style={styles.formText}>Description:</Text>
//             <Input
//               style={styles.input2}
//               variant="outline"
//               size="sm"
//               isDisabled={false}
//               isInvalid={false}
//               isReadOnly={false}
//             >
//               <InputField
//                 placeholder="Enter description"
//                 value={description}
//                 onChangeText={(text) => setDescription(text)}
//               />
//             </Input>
//             <Text style={styles.formText}>Reporter NIC:</Text>
//             <Input
//               onPress={Calendar}
//               style={styles.input2}
//               variant="outline"
//               size="sm"
//               isDisabled={false}
//               isInvalid={false}
//               isReadOnly={false}
//             >
//               <InputField
//                 placeholder="Enter Your NIC"
//                 value={reporter}
//                 onChangeText={(text) => setReporter(text)}
//               />
//             </Input>
//             <View
//               style={{
//                 marginTop: "5%",
//               }}
//             >
//               <Button
//                 onPress={onSubmit}
//                 style={styles.button}
//                 size="md"
//                 variant="solid"
//                 action="primary"
//                 isDisabled={false}
//                 isFocusVisible={false}
//               >
//                 <ButtonText style={styles.button}>Report</ButtonText>
//               </Button>
//             </View>
//           </View>
//         </ScrollView>

//         <Footer navigation={navigation} />
//       </SafeAreaView>
//     </GluestackUIProvider>
//   );
// };

// export default AccidentReporting;

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import styles from "../components/styles";
import Footer from "../components/Footer";
import Topic from "../components/Topic";
import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { API_URL } from "../utils/constants";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width, height } = Dimensions.get("screen");
import { connect } from "react-redux";

const AccidentReporting = ({ navigation, topic, nic }) => {
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date()); // Initialize with a Date object
  const [description, setDescription] = useState("");
  // const [reporter, setReporter] = useState("");
  // const [showTimePicker, setShowTimePicker] = useState(false);

  const onSubmit = () => {
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    return new Promise((resolve, reject) => {
      axios
        .post(
          `${API_URL}/api/accidents/`,
          {
            time,
            date: formattedDate,
            location: place,
            description,
            reporter: nic,
          },
          config
        )
        .then(() => {
          alert("Accident reported successfully");
          setPlace("");
          setTime("");
          setDate(new Date()); // Reset to a new Date object
          setDescription("");
          // setReporter("");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    <GluestackUIProvider config={config.theme}>
      {/* <SafeAreaView style={styles.containerWhite}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerWhite}
      >
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Topic navigation={navigation} topic={"ACCIDENT REPORTING"} />

          <View style={styles.container2}>
            <Text style={styles.formText}>Place:</Text>
            <Input style={styles.input2}>
              <InputField
                placeholder="Enter place"
                value={place}
                onChangeText={(text) => setPlace(text)}
              />
            </Input>

            <Text style={styles.formText}>Date:</Text>
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                if (event.type === "set") {
                  setDate(selectedDate);
                }
              }}
            />

            {/* <Text style={styles.formText}>Time:</Text>
            <Input style={styles.input2}>
              <InputField
                placeholder="Enter time"
                value={time}
                onChangeText={(text) => setTime(text)}
              />
            </Input> */}
            <Text style={styles.formText}>Time:</Text>

            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                if (event.type === "set") {
                  // setShowTimePicker(false); // Hide the time picker
                  // Update the time state with the selected time
                  const hours = selectedTime
                    .getHours()
                    .toString()
                    .padStart(2, "0");
                  const minutes = selectedTime
                    .getMinutes()
                    .toString()
                    .padStart(2, "0");
                  setTime(`${hours}:${minutes}`);
                }
              }}
            />
            {/* )} */}

            <Text style={styles.formText}>Description:</Text>
            <Input style={styles.input2}>
              <InputField
                placeholder="Enter description"
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </Input>

            <Text style={styles.formText}>Reporter NIC:{nic}</Text>
            {/* <Input style={styles.input2}>
              <InputField
                placeholder="Enter Your NIC"
                value={nic}
                isReadOnly={true}
                // onChangeText={(text) => setReporter(text)}
              />
            </Input> */}

            <View style={{ marginTop: "5%" }}>
              <Button
                onPress={onSubmit}
                style={styles.button}
                size="md"
                variant="solid"
                action="primary"
              >
                <ButtonText style={styles.button}>Report</ButtonText>
              </Button>
            </View>
          </View>
        </ScrollView>
        <Footer navigation={navigation} />
      </KeyboardAvoidingView>

      {/* </SafeAreaView> */}
    </GluestackUIProvider>
  );
};
const mapStateToProps = (state) => ({
  nic: state.auth.nic, // Assuming that 'nic' is stored in your Redux state
});
// export default AccidentReporting;
export default connect(mapStateToProps)(AccidentReporting);

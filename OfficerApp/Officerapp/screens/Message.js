import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import ScrollBox from "../components/ScrollBox";
import TextArea from "../components/TextArea";
import ModalTester from "../components/ModalTester";

const Message = ({ navigation }) => {
  const messages = [
    // Array of message objects
    {
      sender: "A.B.C.Silva",
      text: "This is a dummy message for testing purpose",
      backgroundColor: "gray",
    },
    {
      sender: "K.N.A.Perera",
      text: "This is a dummy message for testing purpose 2",
      backgroundColor: "gray",
    },
    {
      sender: "A.B.C.Silva",
      text: "This is a dummy message for testing purpose 3",
      backgroundColor: "gray",
    },
    {
      sender: "K.N.A.Perera",
      text: "This is a dummy message for testing purpose 4",
      backgroundColor: "gray",
    },
    {
      sender: "K.R.Kumara",
      text: "This is sender message ",
      backgroundColor: "red",
    },
    {
      sender: "P.M.Alwis",
      text: "This is a dummy message for testing purpose 6",
      backgroundColor: "gray",
    },
    {
      sender: "K.R.Kumara",
      text: "This is a dummy message for testing purpose 7",
      backgroundColor: "gray",
    },
    {
      sender: "P.M.Alwis",
      text: "This is a dummy message for testing purpose 8",
      backgroundColor: "gray",
    },
    {
      sender: "K.R.Kumara",
      text: "This is a dummy message for testing purpose 9",
      backgroundColor: "gray",
    },
    {
      sender: "P.M.Alwis",
      text: "This is a dummy message for testing purpose 10",
      backgroundColor: "gray",
    },
  ];

  // State variables for success and fail modals
  const [Success, setSuccess] = useState(false);
  const [Fail, setFail] = useState(false);

  // Simulated API response
  const response = true;

  // Function to handle the SEND button press
  const handlebutton = () => {
    if (response) {
      // If the API call was successful, trigger the success modal
      handlesuccess();
    } else {
      // If the API call failed, trigger the fail modal
      handlefail();
    }
  };

  // Function to show the success modal
  const handlesuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };

  const handlefail = () => {
    setFail(true);
    setTimeout(() => {
      setFail(false); // Set the button press state to false after 10 milisecond
    }, 10);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} Headername="MESSAGE" back="DashBoard" />

      {/* Dismiss the keyboard when tapping outside the input */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container2}>
          {/* Text input area for composing a message */}
          <TextArea label="Message" numberOfLines={5} />

          {/* SEND button */}
          <Button
            title="SEND"
            // onPress={() => navigation.navigate('DashBoard')}
            onPress={handlebutton}
            filled
            fontSize={12}
            style={{
              width: "30%",
              height: 40,
              maxWidth: 120,
              marginTop: "6%",
              marginBottom: "6%",
            }}
          />

          {/* Success and Fail modals */}
          <ModalTester
            set={Success}
            messagetodisplay="Send Successfully"
            backgroundColor="green"
          />
          <ModalTester
            set={Fail}
            messagetodisplay="Send Failed"
            backgroundColor="red"
          />
        </View>
      </TouchableWithoutFeedback>

      {/* Scrollable message box */}
      <ScrollBox messages={messages} />

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
  },
  container2: {
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
  },
});

export default Message;

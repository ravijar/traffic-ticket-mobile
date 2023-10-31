import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import Header from "../components/Header";
import Footer from "../components/Fotter";
import ScrollBox from "../components/ScrollBox";
import TextArea from "../components/TextArea";
import ModalTester from "../components/ModalTester";
import { API_URL } from "../constants/url";
import { useSelector } from "react-redux"; // Import useSelector

const Message = ({ navigation }) => {
  const userId = useSelector((state) => state.auth.userId); // Access userId from Redux state
  const [sendMsg, setSendMsg] = useState(""); // State to store the message entered by the user
  const [Success, setSuccess] = useState(false);
  const [Fail, setFail] = useState(false);
  const [messages, setMessages] = useState([]); // State to store messages
  const [isLoading, setIsLoading] = useState(true);
  const [sender, setSender] = useState(false);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}api/messages/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        console.error("Failed to fetch messages.");
      }
    } catch (error) {
      console.error("Failed to fetch messages.", error);
    }
  };

  // Fetch messages when the component mounts
  useEffect(() => {
    fetchMessages().then((data) => {
      const messageData = data.map((message) => ({
        sender: `${message.sender_id || "N/A"}  :  ${
          message.police_station || "N/A"
        }`,
        text: message.message_body,
        backgroundColor: "gray",
      }));

      setMessages(messageData);
      setIsLoading(false); // Data is loaded, update isLoading
    });
  }, [sender]);

  // State variables for success and fail modals

  // Simulated API response
  const NIC = userId|| " ";

  const handlebutton = async () => {
    try {
      const response = await fetch(`${API_URL}api/messages/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_nic: NIC,
          body: sendMsg,
        }),
      });
      if (response.status === 201) {
        setSender(!sender);
        alert("Message sent successfully");
      } else {
        alert("Message sending failed");
        
      }
    } catch (error) {
      alert("Network error");
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} Headername="MESSAGE" back="DashBoard" />

      {/* Dismiss the keyboard when tapping outside the input */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container2}>
          {/* Text input area for composing a message */}
          <TextArea
            label="Message"
            numberOfLines={5}
            onChangeText={(text) => setSendMsg(text)}
          />

          {/* SEND button */}
          <Button
            title="SEND"
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
      {!isLoading && <ScrollBox messages={messages} />}

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

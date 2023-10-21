import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester(props) {
  // Extract values from props
  const { set, messagetodisplay, backgroundColor } = props;

  // Initialize state to control the visibility of the modal
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Use the useEffect hook to toggle the modal when the 'set' prop changes
  useEffect(() => {
    if (set === true) {
      toggleModal(); // Open or close the modal based on the 'set' prop
      setTimeout(() => {
        toggleModal();
      }, 500);
    }
  }, [set]);

  return (
    <View style={{}}>
      <Modal
        isVisible={isModalVisible} // Control the visibility of the modal
        animationInTiming={800} // Set the timing for modal entrance animation
        animationOutTiming={700} // Set the timing for modal exit animation
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              //style for modal
              backgroundColor,
              height: "200",
              width: "75%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Display the message inside the modal */}
            <Text style={{ fontSize: 20 }}>{messagetodisplay}</Text>
          </View>

          {/* Render a button to close the modal */}
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

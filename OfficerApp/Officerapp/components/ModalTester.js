import React, { useState , useEffect } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester(props) {
  const { set, messagetodisplay, backgroundColor } = props;


  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  

  useEffect(() => {
    if (set === true) {
      toggleModal();
    }
  }, [set]);

  

  return (
    <View style={{ }}>

      <Modal isVisible={isModalVisible} animationInTiming={800} animationOutTiming={700}>
        <View style={{ alignItems:'center', justifyContent:'center'}}>
          <View style={{backgroundColor, height:'200', width:'75%', alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:'20'}}>{messagetodisplay}</Text>
          </View>

          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
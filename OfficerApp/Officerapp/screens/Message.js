import { View } from 'react-native';
import React, {useState}from 'react';
import Button from '../components/Button';
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import Header from '../components/Header';
import Footer from '../components/Fotter';
import ScrollBox from '../components/ScrollBox';
import TextArea from '../components/TextArea';
import ModalTester from '../components/ModalTester';

const Message = ({ navigation }) => {
  const messages = [
    {sender:"A.B.C.Silva",text: "This is a dummy message for testing purpose", backgroundColor: "gray" },
    {sender:"K.N.A.Perera",text: "This is a dummy message for testing purpose 2", backgroundColor: "gray" },
    {sender:"A.B.C.Silva",text: "This is a dummy message for testing purpose 3", backgroundColor: "gray" },
    {sender:"K.N.A.Perera",text: "This is a dummy message for testing purpose 4", backgroundColor: "gray" },
    {sender:"K.R.Kumara",text: "This is sender message ", backgroundColor: "red" },
    {sender:"P.M.Alwis",text: "This is a dummy message for testing purpose 6", backgroundColor: "gray" },
    {sender:"K.R.Kumara",text: "This is a dummy message for testing purpose 7", backgroundColor: "gray" },
    {sender:"P.M.Alwis",text: "This is a dummy message for testing purpose 8", backgroundColor: "gray" },
    {sender:"K.R.Kumara",text: "This is a dummy message for testing purpose 9", backgroundColor: "gray" },
    {sender:"P.M.Alwis",text: "This is a dummy message for testing purpose 10", backgroundColor: "gray" },

    
  ];
  const [Success, setSuccess] = useState(false);
  const [Fail, setFail] = useState(false);
  const response = true;
  const handlebutton = () => {
    if (response){
      handlesuccess();
    }
    else{
      handlefail();
    }
  }


  const handlesuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false); // Set the button press state to false after 10 milisecond
    }, 10)
  };
  
  const handlefail = () => {
    setFail(true);
    setTimeout(() => {
      setFail(false); // Set the button press state to false after 10 milisecond
    }, 10)
  };

  

  return (
    <View style={styles.container}>
      <Header navigation={navigation} Headername="MESSAGE" back="DashBoard" />

      <TextArea label="Message" numberOfLines={5} />
      <Button
        title="SEND"
       // onPress={() => navigation.navigate('DashBoard')}
       onPress={ handlebutton }
        filled
        fontSize={10}
        style={{ width: '30%',height:40, maxWidth: 120, marginTop: '6%' }}
      />
      <ModalTester set ={Success} messagetodisplay="Send Successfully" backgroundColor = "green"  />
      <ModalTester set ={Fail} messagetodisplay="Send Failed" backgroundColor = "red"  />


      <ScrollBox messages={messages} />


      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
});

export default Message;

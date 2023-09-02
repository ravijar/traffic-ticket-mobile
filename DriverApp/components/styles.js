import { Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import COLORS from '../constants/colors';

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    //justifyContent: 'center', // Vertically center content
    alignItems: 'center',     // Horizontally center content
  },
  container2: {
      flex: 1,
      width: '75%',
      maxHeight: 320,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      backgroundColor: COLORS.GRAY,
      //justifyContent: 'center', // Vertically center content
      alignItems: 'center',     // Horizontally center content
    },
  text1: {
    color: 'white',
    fontSize: 40,
    marginTop: '10%',
  },
  text2: {
      color: 'white',
      fontSize: 14,
      marginTop: 20,
      marginBottom: 25,
    },
  image: {
      width: 200,
      height: 200,
      marginTop: '10%',
      marginBottom: '2%',
  },
  image2: {
      width: 150,
      height: 25,
      marginTop: 70,
  },
  input: {
      width: '70%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 40,
      
    },
    button: {
      
      backgroundColor: '#155E75',
      fontSize: 12
    },

});

export default styles;
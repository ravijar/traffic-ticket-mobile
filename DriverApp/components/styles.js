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
  containerWhite: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    //justifyContent: 'center', // Vertically center content
    alignItems: 'center',     // Horizontally center content
  },
  header: {
    flex: 1,
    width: '100%',
    maxHeight: 100,
    backgroundColor: COLORS.PRIMARY,
    //justifyContent: 'center', // Vertically center content
    alignItems: 'center',     // Horizontally center content
  },
  container2: {
      flex: 1,
      width: '75%',
      // maxHeight: '85%',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      backgroundColor: COLORS.GRAY,
      //justifyContent: 'center', // Vertically center content
      alignItems: 'center',     // Horizontally center content
      // marginBottom: '10%',
      marginTop: '10%'
    },
    text1: {
      color: 'white',
      fontSize: 40,
      marginTop: 100,
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
      width: 240,
      height: 40,
      marginTop: '40%',
  },
  image3: {
    width: 20,
    height: 20,
    marginTop: '2%',
      marginBottom: '2%',
    
},
  input: {
      width: '70%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: '5%',
      marginTop: '5%',
      
    },
    input2: {
      
      width: '65%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: '1%',
      marginTop: '1%',
      marginLeft:'3%'
      
      
      
    },
    text: {
      color: 'white',
      fontSize: 50,
      marginTop: '20%',
    },
    button: {
      
      backgroundColor: '#155E75',
      fontSize: 12
    },
    inputRow: {
      flexDirection: 'row', // Align input fields in a row
      alignItems: 'center', // Optional: Align items vertically within the row
      marginBottom: 10, // Optional: Adjust spacing between rows
    },
    container3: {
      flex: 1,
      width: '80%',
      maxHeight: 120,
      backgroundColor: COLORS.PRIMARY,
      justifyContent: 'center', // Vertically center content
      alignItems: 'center',     // Horizontally center content
      marginTop: 40,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  },
  button2: {    //big button
      
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
      width: '80%',
      maxHeight: '30%',
      alignItems:'center',
       // Vertically center content
      alignItems: 'center',     // Horizontally center content
      marginTop: '15%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: 35,
    fontWeight: 'bold',
    marginLeft:'10%',
    marginRight:'10%'
    
  },

  footer: {
    width: 180,
    height: 30,
    marginTop: '5%', 
    marginBottom:'5%'
    
  },
  
  
  
  back: {
    width: 17,
    height: 30.6,
    marginTop: '40%', 
    marginLeft:'10%'
    
  },
  logout: {
    width: 40,
    height: 40,
    marginTop: '30%', 
    marginRight:'10%'
    

    
  },
  Topic:{
    flex: 1,
      width: '70%',
      height:'5%',
      maxHeight: 60,
      backgroundColor: COLORS.PRIMARY,
      justifyContent: 'center', // Vertically center content
      alignItems: 'center',     // Horizontally center content
      marginTop: 40,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
   

  },
  TopicText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  
  formText: {     //text used for forms
    color: COLORS.BLACK,
    fontSize: 20,
    marginTop: '2%',
    fontWeight: 'bold',
    
  },
  registerContainer: {
    flex: 1,
    width: '75%',
    // maxHeight: 320,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: COLORS.GRAY,
    //justifyContent: 'center', // Vertically center content
    alignItems: 'center',     // Horizontally center content
    marginBottom: '5%',
   
  },
  
  scrollViewContent: {   //for scrollview
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    
  },

  

});

export default styles;
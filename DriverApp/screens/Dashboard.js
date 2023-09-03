import React from 'react'
import { Pressable,Button,ButtonText } from '@gluestack-ui/themed'
import { View,SafeAreaView,Text, TouchableOpacity,Image } from 'react-native'
import {GluestackUIProvider,config} from "@gluestack-ui/themed";
import styles from '../components/styles';
import Head from '../components/Head';
import Footer from '../components/Footer';


const Dashboard = ({navigation}) => {
  return (
<GluestackUIProvider config={config.theme}>



      
      <SafeAreaView style={styles.containerWhite}>

      <Head navigation={navigation} topic={"DASHBOARD"}/>
  <TouchableOpacity onPress={()=>navigation.navigate("PendingFines")} style={styles.button2}>
    <View >
    

  <Text style={{fontSize: 20, color: 'white',textAlign: 'center', marginTop:'13%',  }}>
                    PENDING FINES
                </Text>
                <Text style={{fontSize: 20, color: 'white',textAlign: 'center'  }}>
                    COUNT = 1
                </Text>
                </View>
  </TouchableOpacity>
  

  <TouchableOpacity onPress={()=>navigation.navigate("AccidentReporting")} style={styles.button2}>
  <Text style={{fontSize: 20, color: 'white',textAlign: 'center', marginTop:'13%',  }}>
                    ACCIDENT
                </Text>
                <Text style={{fontSize: 20, color: 'white',textAlign: 'center'  }}>
                    REPORTING
                </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>navigation.navigate("Suggestions")} style={styles.button2}>
  <Text style={{fontSize: 20, color: 'white',textAlign: 'center', marginTop:'13%',  }}>
                    SUGGESTIONS/
                </Text>
                <Text style={{fontSize: 20, color: 'white',textAlign: 'center'  }}>
                    COMPLAINTS
                </Text>
  </TouchableOpacity>
    

    <Footer navigation={navigation}/>
  


</SafeAreaView>

   

</GluestackUIProvider>
  )
}

export default Dashboard

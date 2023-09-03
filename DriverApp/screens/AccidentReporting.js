import React from 'react'
import Head from '../components/Head'
import { SafeAreaView } from 'react-native'
import styles from '../components/styles';
import Footer from '../components/Footer';
import Topic from '../components/Topic';

const AccidentReporting = ({navigation,topic}) => {
  return (
    <SafeAreaView style={styles.containerWhite}>
    <Head navigation={navigation} topic={"REPORTING"}/>
    <Topic navigation={navigation} topic={"ACCIDENT REPORTING"}/>
    <Footer navigation={navigation}/>
    </SafeAreaView>
  )
}

export default AccidentReporting

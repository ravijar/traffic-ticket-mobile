import React from 'react'
import Head from '../components/Head'
import { SafeAreaView } from 'react-native';
import styles from '../components/styles';
import Footer from '../components/Footer';
import Topic from '../components/Topic';


const PendingFines = ({navigation,topic}) => {
  return (
    <SafeAreaView style={styles.containerWhite}>
    <Head navigation={navigation} topic={"SUGGESTIONS"}/>
    <Topic navigation={navigation} topic={"SUGGESTIONS/COMPLAINTS"}/>
    <Footer navigation={navigation}/>
    </SafeAreaView>
  )
}

export default PendingFines

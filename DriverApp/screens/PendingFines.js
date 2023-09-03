import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Footer';
import { SafeAreaView } from 'react-native';
import styles from '../components/styles';
import Topic from '../components/Topic';

const PendingFines = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containerWhite}>
    <Head navigation={navigation} topic={"PENDING FINES"}/>
    <Topic navigation={navigation} topic={"PENDING FINES"}/>
    <Footer navigation={navigation}/>
    </SafeAreaView>
  )
}

export default PendingFines

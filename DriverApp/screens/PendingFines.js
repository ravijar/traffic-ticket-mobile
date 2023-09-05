import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Footer';
import { SafeAreaView,View, Text,ScrollView } from 'react-native';
import styles from '../components/styles';
import Topic from '../components/Topic';
import { Table, Row, Rows } from 'react-native-table-component';
import { GluestackUIProvider,config } from '@gluestack-ui/themed';

const PendingFines = ({navigation}) => {
  const header = ['Fine ID', 'Vehicle No', 'Date', 'Time','Type','Amount','Pay']
    const data = [
        ['A100000', 'CAA 5555', '15/06/2023','16:00','Double Line','Rs.5000','Pay'],
        ['A100000', 'CAA 5555', '15/06/2023','16:00','Double Line','Rs.5000','Pay'],
    ]

    
  const tableStyles = {
    tableWrapper: { width: '95%', marginTop: '10%' },
    header: { backgroundColor: '#E4F6F5', height: 40 },
    row: { height: 40 },
    text: { textAlign: 'center', fontSize: 8 }, // Adjust font size as needed
    headerText:{ textAlign: 'center', fontSize: 12,fontWeight: 'bold' },
    rows: { height: 40 },
  };
  return (
    <GluestackUIProvider config={config.theme}>
    <SafeAreaView style={styles.containerWhite}>
    <Head navigation={navigation} topic={"PENDING FINES"}/>
    <ScrollView  style={{width:'100%'}} contentContainerStyle={styles.scrollViewContent} >
    <Topic navigation={navigation} topic={"PENDING FINES"}/>
    <View style={tableStyles.tableWrapper}>
            
            <Table borderStyle={{ borderWidth: 1, 
                borderColor: '#c8e1ff' }}>
                <Row  data={header} style={tableStyles.header} textStyle={tableStyles.headerText} />
                <Rows data={data} textStyle={tableStyles.text} style={tableStyles.rows}/>
            </Table>
        </View>
    
        </ScrollView>
    <Footer navigation={navigation}/>
    
    </SafeAreaView>
    </GluestackUIProvider>
  )
}

export default PendingFines

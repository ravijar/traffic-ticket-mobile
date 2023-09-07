import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';


const VehicleTable = (props) => {
	const vehicleNumber = props.vehicleNumber;
	const ownerName = props.ownerName;
	const chassisNumber = props.chassisNumber;
	const engineNumber = props.engineNumber;
	const vehicleType = props.vehicleType;
	const vehicleColor = props.vehicleColor;
	const licenseExpireDate = props.licenseExpireDate;
	const data = [
		['VEHICLE NUMBER', vehicleNumber],
		['OWNER NAME', ownerName],
		['CHASSIS NUMBER', chassisNumber ],
		['ENGINE NUMBER', engineNumber ],
		['VEHICLE TYPE', vehicleType],
		['COLOR', vehicleColor],
		['LICENSE EXPIRE DATE',licenseExpireDate ],


	]

	return (
		<View style={{ marginTop: 200 }}>
			<Text style={{ fontSize: 18 }}>
				GeeksforGeeks React Native Table</Text>
			<Table borderStyle={style.table}>
				<Rows data={data} style={style.text}/>
			</Table>
		</View>
	);
};

const style = StyleSheet.create({
	table: {
		width: '90%',
		marginTop: 30,
		marginLeft: 20,
		borderWidth: 2,
		borderColor: '#c8e1ff',

	},
	text: {
		//marginLeft: 5,
		fontSize: 15,
		backgroundColor: '#c8e1ff',
	},
});

export default VehicleTable;

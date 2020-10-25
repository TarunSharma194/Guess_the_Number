import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary,
		marginBottom: 20
	},
	headerTitle: {
		color: 'black',
		fontSize: 20,
		fontFamily: 'open-sans-bold'
	}
});

export default Header;

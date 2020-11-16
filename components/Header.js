import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

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
		backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
		marginBottom: 20,
		borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
		borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
	},
	headerTitle: {
		color: Platform.OS === 'android' ? 'white' : Colors.primary,
		fontSize: 20,
		fontFamily: 'open-sans-bold'
	}
});

export default Header;

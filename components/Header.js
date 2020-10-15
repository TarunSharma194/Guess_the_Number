import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
		height: 70,
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: '#f7287b',
        marginVertical: 20
	},
	headerTitle: {
		color: 'black',
        fontSize: 18,
	}
});

export default Header;

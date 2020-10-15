import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGame = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<Input
					style={styles.input}
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="number-pad"
					blurOnSubmit={true}
					maxLength={2}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="RESET" color={Colors.b1} />
					</View>
					<View tyle={styles.button}>
						<Button title="CONFIRM" color={Colors.b2} />
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 10
	},
	button: {
		width: 100
	},
	input: {
		width: 50,
		textAlign: 'center'
	}
});

export default StartGame;

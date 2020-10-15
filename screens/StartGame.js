import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGame = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game!!</Text>
			<View style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<Button title="RESET" />
					<Button title="CONFIRM" />
				</View>
			</View>
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
        marginVertical: 10,
	},
	inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 10,
        padding: 20,
        borderRadius: 10
        // Elevation works for Android whereas shadow properties work for IOS
    },
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
        paddingHorizontal: 10,
	}
});

export default StartGame;
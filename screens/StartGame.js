import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGame = (props) => {
	const [ enteredValue, setEnteredValue ] = useState('');
	const [ confirmed, setConfirmed ] = useState(false);
	const [ selectedNumber, setSelectedNumber ] = useState();

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('INVALID NUMBER', 'It must be between 0 to 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>	
                <Button title='START GAME'/>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button title="RESET" color={Colors.b1} onPress={resetInputHandler} />
						</View>
						<View tyle={styles.button}>
							<Button title="CONFIRM" color={Colors.b2} onPress={confirmInputHandler} />
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGame;

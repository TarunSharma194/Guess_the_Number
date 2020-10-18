import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = (props) => {
	const [ currentGuess, setCurrentGuess ] = useState(generateRandomBetween(1, 100, props.userChoice));

	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	// useRef are not generated again when the component is re-rendered. Thus the value remains locked

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess <= props.userChoice) ||
			(direction === 'greater' && currentGuess >= props.userChoice)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong', [ { text: 'Sorry!', style: 'cancel' } ]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
			console.log('max', currentGuess);
		}
		else {
			currentLow.current = currentGuess;
			console.log('min', currentGuess);
		}
		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		console.log('nextGuess', nextNumber);
		setCurrentGuess(nextNumber);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title="Lower" onPress={() => nextGuessHandler('lower')} />
				<Button title="Greater" onPress={() => nextGuessHandler('greater')} />
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
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 300,
		maxWidth: '80%',
		marginTop: 20
	}
});

export default GameScreen;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList, Dimensions } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';

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

const renderListItem = (listLength, itemData) => (
	<View style={styles.listItem}>
		<Text style={DefultStyles.bodyText}>#{listLength - itemData.index}</Text>
		<Text style={DefultStyles.bodyText}>{itemData.item}</Text>
	</View>
);

const GameScreen = (props) => {
	const initialGuess = generateRandomBetween(1, 100, props.userChoice);
	const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
	//const [rounds, setRounds] = useState(0);
	const [ pastGuesses, setPastGuesses ] = useState([ initialGuess.toString() ]);
	const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	// useRef are not generated again when the component is re-rendered. Thus the value remains locked

	const { userChoice, onGameOver } = props;

	useEffect (() => {
		const updateLayout = () => {
			setAvailableDeviceHeight(Dimensions.get('window').height)
		};
		Dimensions.addEventListener('change', updateLayout);

		return () => {
			Dimensions.removeEventListener('change', updateLayout);
		}
	});

	useEffect(
		() => {
			if (currentGuess === userChoice) {
				onGameOver(pastGuesses.length);
			}
		},
		[ currentGuess, userChoice, onGameOver ]
	);

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
		} else {
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextNumber);
		//setRounds(curRounds => curRounds + 1);
		setPastGuesses((curPastGuesses) => [ nextNumber.toString(), ...curPastGuesses ]);
	};

	if (availableDeviceHeight < 400) {
		return (
			<View style={styles.screen}>
				<Text style={DefultStyles.title}>Opponent's Guess</Text>
				<View style={styles.control}>
					<MainButton onPress={() => nextGuessHandler('lower')}>
						<Ionicons name="md-remove" size={24} color="white" />
					</MainButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<MainButton onPress={() => nextGuessHandler('greater')}>
						<Ionicons name="md-add" size={24} color="white" />
					</MainButton>
				</View>
				<View style={styles.listContainer}>
					<FlatList
						keyExtractor={(item) => item}
						data={pastGuesses}
						renderItem={renderListItem.bind(this, pastGuesses.length)}
						contentContainerStyle={styles.list}
					/>
				</View>
			</View>
		);
	} else {
		return (
			<View style={styles.screen}>
				<Text style={DefultStyles.title}>Opponent's Guess</Text>
				<NumberContainer>{currentGuess}</NumberContainer>
				<Card style={styles.buttonContainer}>
					<MainButton onPress={() => nextGuessHandler('lower')}>
						<Ionicons name="md-remove" size={24} color="white" />
					</MainButton>
					<MainButton onPress={() => nextGuessHandler('greater')}>
						<Ionicons name="md-add" size={24} color="white" />
					</MainButton>
					{/*<Button title="Lower" onPress={() => nextGuessHandler('lower')} />
					<Button title="Greater" onPress={() => nextGuessHandler('greater')} /> */}
				</Card>
				<View style={styles.listContainer}>
					{/* <ScrollView contentContainerStyle={styles.list}>
						{pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
					</ScrollView> */}
					<FlatList
						keyExtractor={(item) => item}
						data={pastGuesses}
						renderItem={renderListItem.bind(this, pastGuesses.length)}
						contentContainerStyle={styles.list}
					/>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 400,
		maxWidth: '90%',
		marginTop: Dimensions.get('window') > 600 ? 20 : 5
	},
	listContainer: {
		width: Dimensions.get('window').width > 350 ? '60%' : '80%',
		flex: 1
	},
	list: {
		flexGrow: 1,
		//alignItems: 'center',
		justifyContent: 'flex-end'
	},
	listItem: {
		flexDirection: 'row',
		padding: 10,
		borderColor: '#ccc',
		borderWidth: 1,
		backgroundColor: 'white',
		marginVertical: 10,
		justifyContent: 'space-around',
		width: '100%'
	},
	control: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '80%'
	}
});

export default GameScreen;

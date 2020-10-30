import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/Colors';
import MainButton from  '../components/MainButton';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={DefaultStyles.title}>The Game is Over!!</Text>
			<View style={styles.imageConatiner}>
				<Image
					source={require('../assets/success.png')}
					//source={{uri: 'https://www.macmillandictionary.com/external/slideshow/thumb/142242_thumb.jpg'}}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>
			<View style={styles.resultContainer}>
				<Text style={{...styles.resultText, ...DefaultStyles.bodyText}}>
					Your Phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the
					number <Text style={styles.highlight}>{props.userNumber}</Text>
				</Text>
			</View>
			<MainButton onPress={props.onRestart}>
				NEW GAME	
			</MainButton>
			{/*<Button title="NEW GAME" onPress={props.onRestart} />*/}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageConatiner: {
		width: 300,
		height: 300,
		borderColor: 'black',
		borderRadius: 150,
		borderWidth: 3,
		overflow: 'hidden',
		marginVertical: 30
	},
	image: {
		width: '100%',
		height: '100%'
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold'
	},
	resultContainer: {
		marginHorizontal: 40,
		marginVertical: 20
	},
	resultText: {
		textAlign: 'center',
		fontSize: 18
	}
});

export default GameOverScreen;

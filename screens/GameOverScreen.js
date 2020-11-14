import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';

import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
	return (
		<ScrollView>
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
					<Text style={{ ...styles.resultText, ...DefaultStyles.bodyText }}>
						Your Phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the
						number <Text style={styles.highlight}>{props.userNumber}</Text>
					</Text>
				</View>
				<MainButton onPress={props.onRestart}>NEW GAME</MainButton>
				{/*<Button title="NEW GAME" onPress={props.onRestart} />*/}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageConatiner: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		borderColor: 'black',
		borderRadius: Dimensions.get('window').width * 0.7 / 2,
		borderWidth: 3,
		overflow: 'hidden',
		marginVertical: Dimensions.get('window').height > 600 ? 30 : 10
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
		marginHorizontal: Dimensions.get('window').width > 350 ? 40 : 20,
		marginVertical: Dimensions.get('window').height > 600 ? 20 : 10
	},
	resultText: {
		textAlign: 'center',
		fontSize: Dimensions.get('window').height > 600 ? 18 : 14
	}
});

export default GameOverScreen;

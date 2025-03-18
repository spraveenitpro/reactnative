import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Card from '../components/Card';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import questions from '../questions';
const question = questions[10];

export default function QuizScreen() {
	//console.log(question);
	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.container}>
				{/* Header */}
				<View>
					<Text style={styles.title}>Question 1/5</Text>
				</View>
				{/*Body */}
				{question ? (
					<View>
						<QuestionCard question={question} />
						<Text style={styles.time}>20 sec</Text>
					</View>
				) : (
					<Card title='Well Done'>
						<Text>Correct Answers: 3/5</Text>
					</Card>
				)}

				{/*Footer */}
				<Pressable
					onPress={() => console.warn('pressed 🌶️')}
					onLongPress={() => console.warn('Long pressed 🤢')}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Next</Text>
					<FontAwesome6
						name='arrow-right-long'
						size={16}
						color='white    '
						style={styles.buttonIcon}
					/>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 20,
	},
	page: {
		flex: 1,
		backgroundColor: '#FDFEF4',
	},
	title: {
		textAlign: 'center',
		color: '#005055',
	},
	time: {
		textAlign: 'center',
		marginTop: 15,
		color: '#005055',
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: '#005055',
		padding: 20,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16,
		letterSpacing: 1.5,
	},
	buttonIcon: {
		position: 'absolute',
		right: 19,
	},
});

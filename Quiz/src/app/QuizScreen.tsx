import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useQuizContext } from '../providers/QuizProvider';
import { useEffect } from 'react';

export default function QuizScreen() {
	const {
		question,
		questionIndex,
		onNext,
		score,
		totalQuestions,
		bestScore,
	} = useQuizContext();

	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.container}>
				{/* Header */}
				<View>
					<Text style={styles.title}>
						Question {questionIndex + 1}/{totalQuestions}
					</Text>
				</View>

				{/* Body */}
				{question ? (
					<View>
						<QuestionCard question={question} />
					</View>
				) : (
					<>
						<Card title='Well done'>
							<Text>
								Correct answers: {score}/{totalQuestions}
							</Text>
							<Text>Best score: {bestScore}</Text>
						</Card>
					</>
				)}

				{/* Footer */}
				<CustomButton
					title='Next'
					onPress={onNext}
					rightIcon={
						<FontAwesome6
							name='arrow-right-long'
							size={16}
							color='white'
						/>
					}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: '#FDFEF4',
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 20,
	},
	title: {
		textAlign: 'center',
		color: '#005055',
	},
});

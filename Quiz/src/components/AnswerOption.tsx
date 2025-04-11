import { Text, StyleSheet, Pressable } from 'react-native';
import { useQuizContext } from '../providers/QuizProvider';

type AnswerOption = {
	option: string;
};

export default function AnswerOption({ option }: AnswerOption) {
	const { selectedOption, setSelectedOption } = useQuizContext();

	const isSelected = option === selectedOption;
	return (
		<Pressable
			onPress={() => setSelectedOption(option)}
			style={[
				styles.container,
				isSelected && {
					backgroundColor: '#E1F313',
					borderColor: '#E1F313',
				},
			]}
		>
			<Text>{option}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		//backgroundColor: '#E1F313',
		borderWidth: 1,
		borderColor: 'lightgray',
		padding: 20,
		borderRadius: 100,
	},
});

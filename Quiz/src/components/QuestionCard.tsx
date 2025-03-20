import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCard = {
	question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
	//console.log(props.question)
	const selectedOption = question.options[1];

	const onOptionSelected = (option: string) => {
		console.warn('🔥 Selected: ', option);
	};
	return (
		<Card title={question.title}>
			<View style={{ gap: 20 }}>
				{question.options.map((option, index) => (
					<AnswerOption
						key={option}
						option={option}
						isSelected={option === selectedOption}
						onPress={() => onOptionSelected(option)}
					/>
				))}
			</View>
		</Card>
	);
}
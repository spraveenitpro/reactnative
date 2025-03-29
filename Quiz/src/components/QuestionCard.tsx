import { useState } from 'react';
import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCard = {
	question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
	const [selectedOption, setSelectedOption] = useState(question.options[0]);

	const onOptionSelected = (option: string) => {
		console.warn('🔥', option);
		setSelectedOption(option);
	};
	return (
		<Card title={question.title}>
			<View style={{ gap: 20 }}>
				{question.options.map((option) => (
					<AnswerOption
						key={option}
						option={option}
						isSelected={option === selectedOption}
						onPress={() => onOptionSelected(option)}
						//onPress={() => console.warn('Clicked 🔥')}
					/>
				))}
			</View>
		</Card>
	);
}

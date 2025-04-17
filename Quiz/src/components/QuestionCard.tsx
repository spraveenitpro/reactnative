import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';
import { useEffect, useState } from 'react';

type QuestionCard = {
	question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
	useEffect(() => {
		console.log('Question Card mounted!! 🤯');
	});

	useEffect(() => {
		console.log('Question Card rendered!! 🤣');
	});

	useEffect(() => {
		console.log('Question card rendered no dependency 😅');
	});
	return (
		<Card title={question.title}>
			<View style={{ gap: 10 }}>
				{question.options.map((option) => (
					<AnswerOption key={option} option={option} />
				))}
			</View>
		</Card>
	);
}

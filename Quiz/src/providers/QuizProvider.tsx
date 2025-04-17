import { PropsWithChildren, useContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import questions from '../questions';
import { Question } from '../types';

type QuizContext = {
	question?: Question;
	questionIndex: number;
	onNext: () => void;
	selectedOption?: string;
	setSelectedOption: (newOption: string) => void;
	score: number;
	totalQuestions: number;
	bestScore: number;
};

const QuizContext = createContext<QuizContext>({
	questionIndex: 0,
	onNext: () => {},
	setSelectedOption: () => {},
	score: 0,
	totalQuestions: 0,
	bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
	const [questionIndex, setQuestionIndex] = useState(1);
	const question = questions[questionIndex];

	const [selectedOption, setSelectedOption] = useState<string | undefined>();
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const isFinished = questionIndex >= questions.length;

	useEffect(() => {
		console.log('UseEffect is called 🔥', isFinished);
		if (isFinished === true && score > bestScore) {
			setBestScore(score);
		}
	}, [isFinished]);

	const restart = () => {
		setQuestionIndex(0);
		setSelectedOption('');
		setScore(0);
	};

	const onNext = () => {
		if (isFinished) {
			restart();
			return;
		}
		// check if answer is correct
		if (selectedOption === question?.correctAnswer) {
			setScore((curScore) => curScore + 1);
		}

		setQuestionIndex((currValue) => currValue + 1);
	};

	return (
		<QuizContext.Provider
			value={{
				question,
				questionIndex,
				onNext,
				selectedOption,
				setSelectedOption,
				score,
				totalQuestions: questions.length,
				bestScore,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

export const useQuizContext = () => useContext(QuizContext);

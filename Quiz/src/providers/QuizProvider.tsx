import { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';
import questions from '../questions';
import { Question } from '../types';

type QuizContext = {
	question?: Question;
	questionIndex: number;
	onNext: () => void;
	selectedOption: string;
	setSelectedOption: (newOption: string) => void;
};

const QuizContext = createContext<QuizContext>({
	questionIndex: 0,
	onNext: () => {},
	setSelectedOption: () => {},
});

export default function QuizProvider({ children }: PropsWithChildren) {
	console.warn('Quiz provider 🌶️🌶️🌶️🌶️');
	const [questionIndex, setQuestionIndex] = useState(0);
	const question = questions[questionIndex];

	const [selectedOption, setSelectedOption] = useState<string | undefined>();

	const onNext = () => {
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
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}
export const useQuizContext = () => useContext(QuizContext);

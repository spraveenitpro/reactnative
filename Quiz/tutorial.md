# Tutorial: Using useContext in a React Native Quiz App

This tutorial demonstrates how to use the `useContext` hook in a React Native app. We'll explore how `useContext` simplifies state management by sharing data across components without prop drilling.

---

## Step 1: Create a Context Provider

The `QuizProvider` is responsible for managing the quiz state and providing it to the components in the app.

```tsx
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
```

---

## Step 2: Use the Context in Components

### QuizScreen Component
The `QuizScreen` component consumes the `QuizContext` to display the current question and handle navigation to the next question.

```tsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CustomButton from '../components/CustomButton';
import { useQuizContext } from '../providers/QuizProvider';

export default function QuizScreen() {
    const { question, questionIndex, onNext } = useQuizContext();

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>
                        Question {questionIndex + 1} / 5
                    </Text>
                </View>

                {/* Body */}
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

                {/* Footer */}
                <CustomButton
                    title='Next'
                    onPress={onNext}
                    onLongPress={onNext}
                    hitSlop={12}
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
});
```

### QuestionCard Component
The `QuestionCard` component receives the current question from the `QuizContext` and displays it.

```tsx
import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCard = {
    question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
    return (
        <Card title={question.title}>
            <View style={{ gap: 20 }}>
                {question.options.map((option) => (
                    <AnswerOption key={option} option={option} />
                ))}
            </View>
        </Card>
    );
}
```

---

## Summary
1. **Create a Context Provider**: Use `createContext` and `useState` to manage and share state.
2. **Consume Context**: Use `useContext` in components to access shared state and actions.
3. **Simplify State Management**: Avoid prop drilling by wrapping components with the provider.

This approach makes your app more modular and easier to maintain.
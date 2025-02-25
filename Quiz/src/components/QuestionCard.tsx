import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';

type QuestionCard = {
    question: {
        title: string,
        options: string[],

    }
}

export default function QuestionCard({ question }: QuestionCard) {
    //console.log(props.question)
    return (
        <View style={styles.questionCard}>
            <Text style={styles.question}>{question.title}</Text>
            <View style={{ gap: 20 }}>
                <AnswerOption option={question.options[0]} />
                <AnswerOption option={question.options[1]} />
                <AnswerOption option={question.options[2]} />
                <AnswerOption option={question.options[3]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    questionCard: {
        backgroundColor: 'white',
        padding: 20,
        paddingVertical: 40,
        borderRadius: 20,
        gap: 20,

        // Shadows
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    question: {
        fontSize: 24,
        fontWeight: '500',
    }
})
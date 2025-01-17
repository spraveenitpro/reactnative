import { View, Text } from 'react-native';
import QuestionCard from '../components/QuestionCard';

export default function QuizScreen() {
    return (
        <View style={{
            backgroundColor: '#FDFEF4',
            flex: 1,
            justifyContent: 'center',
            padding: 20,

        }}>
            <QuestionCard />
        </View>
    )
}
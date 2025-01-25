import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';

export default function QuizScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View>
                <Text>Question 1/5</Text>
            </View>

            {/*Body */}
            <QuestionCard />

            {/*Footer */}
            <View>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDFEF4',
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    }
})
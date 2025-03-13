import { View, Text, StyleSheet } from 'react-native';

type AnswerOption = {
    option: string;
    isSelected?: boolean;
};

export default function AnswerOption({ option, isSelected }: AnswerOption) {
    return (
        <View style={styles.container}>
            <Text>{isSelected ? 'Selected' : '-'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 20,
        borderRadius: 100,
    },
});

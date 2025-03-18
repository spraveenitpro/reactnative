import { Text, StyleSheet, Pressable } from 'react-native';

type AnswerOption = {
	option: string;
	isSelected?: boolean;
	onPress: (option: string) => void;
};

export default function AnswerOption({
	option,
	isSelected,
	onPress,
}: AnswerOption) {
	return (
		<Pressable
			onPress={() => onPress}
			style={[
				styles.container,
				isSelected && {
					backgroundColor: '#E1F313',
					borderColor: '#E1F313',
				},
			]}
		>
			<Text>{option}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		//backgroundColor: '#E1F313',
		borderWidth: 1,
		borderColor: 'lightgray',
		padding: 20,
		borderRadius: 100,
	},
});

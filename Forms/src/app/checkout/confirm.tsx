import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';

export default function ConfirmForm() {
	const onNext = () => {
		// Validate form data

		// Submit the data

		// Redirect to next

		router.dismissAll();
		router.back();
	};

	return (
		<View style={styles.container}>
			<Text>Confirm Details</Text>
			<CustomButton
				title="Submit"
				style={styles.button}
				onPress={onNext}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 20,
	},
	button: {
		marginTop: 'auto',
		marginBottom: 25,
	},
});

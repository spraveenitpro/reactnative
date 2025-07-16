import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';

export default function ConfirmForm() {
	const onNext = () => {
		// Validate form data

		// Submit the data

		// Redirect to next

		router.dismissAll();
		router.back();
	};

	return (
		<KeyboardAwareScrollView>
			<Text>Confirm Details</Text>
			<CustomButton
				title="Submit"
				style={styles.button}
				onPress={onNext}
			/>
		</KeyboardAwareScrollView>
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

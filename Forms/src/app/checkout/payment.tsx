import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';

export default function PaymentDetailsForm() {
	const onNext = () => {
		router.push('/checkout/confirm');
	};

	return (
		<View style={styles.container}>
			<Text>Payment Details</Text>
			<CustomButton title="Next" style={styles.button} onPress={onNext} />
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

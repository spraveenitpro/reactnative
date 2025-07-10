import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { useState } from 'react';

export default function PersonalDetailsForm() {
	const [fullname, setFullname] = useState('');
	const onNext = () => {
		console.log(fullname);
		router.push('/checkout/payment');
	};

	return (
		<View style={styles.container}>
			<CustomTextInput label="Full name" placeholder="Joe dash" />
			<CustomTextInput label="Address" placeholder="Address!" />
			<View
				style={{
					flexDirection: 'row',
					gap: 5,
				}}
			>
				<CustomTextInput
					label="City"
					placeholder="Bangalore"
					containerStyle={{ flex: 1 }}
				/>
				<CustomTextInput
					label="Post Code"
					placeholder="560043"
					containerStyle={{ flex: 1 }}
				/>
			</View>
			<CustomTextInput
				label="Phone number"
				placeholder="2361231212"
				inputMode="tel"
			/>
			<CustomButton title="Next" style={styles.button} onPress={onNext} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 10,
		gap: 5,
	},
	button: {
		marginTop: 'auto',
		marginBottom: 25,
	},
});

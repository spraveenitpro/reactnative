import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';

export default function PersonalDetailsForm() {
	const [fullname, setFullname] = useState('');
	const onNext = () => {
		console.log(fullname);
		router.push('/checkout/payment');
	};

	return (
		<View style={styles.container}>
			<Text>Personal Details</Text>
			<TextInput
				placeholder="Full Name"
				style={{
					borderWidth: 1,
					borderColor: 'gainsboro',
					padding: 10,
					borderRadius: 5,
				}}
				value={fullname}
				//onChangeText={(text) => setFullname(text)}
				onChangeText={setFullname}
			/>

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

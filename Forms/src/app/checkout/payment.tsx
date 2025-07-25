import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
	useForm,
	SubmitHandler,
	Controller,
	FormProvider,
} from 'react-hook-form';

const PaymentDetailsSchema = z.object({
	cardNumber: z.string().min(1, { message: 'Card number is required!' }),
	expiryDate: z.string().min(1, { message: 'Expiry date is required!' }),
	cvv: z.string().min(1, { message: 'CVV is required!' }),
});

type PaymentDetails = z.infer<typeof PaymentDetailsSchema>;

export default function PaymentDetailsForm() {
	const form = useForm<PaymentDetails>({
		resolver: zodResolver(PaymentDetailsSchema),
	});

	const onNext = () => {
		router.push('/checkout/confirm');
	};

	return (
		<KeyboardAwareScrollView>
			<FormProvider {...form}>
				<CustomTextInput
					name="cardNumber"
					label="Card Number"
					placeholder="1234123412341234"
				/>
				<View style={{ flexDirection: 'row', gap: 5 }}>
					<CustomTextInput
						name="expiryDate"
						label="Expiry Date"
						containerStyle={{ flex: 1 }}
					/>
					<CustomTextInput
						name="cvv"
						label="CVV"
						containerStyle={{ flex: 1 }}
					/>
				</View>

				<CustomButton
					title="Next"
					style={styles.button}
					onPress={form.handleSubmit(onNext)}
				/>
			</FormProvider>
		</KeyboardAwareScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 10,
		gap: 5,
	},
	button: {
		marginTop: 'auto',
		marginBottom: 25,
	},
});

import {
	TextInput,
	StyleSheet,
	View,
	Text,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { ComponentProps } from 'react';

type CustomTextInput = {
	label?: string;
	containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
	label,
	containerStyle,
	...textInputProps
}: CustomTextInput) {
	//const error = { message: 'Error' };
	const error = undefined;

	return (
		<View style={containerStyle}>
			{label && <Text style={styles.label}>{label}</Text>}
			<TextInput
				{...textInputProps}
				style={[
					styles.input,
					textInputProps.style,
					error ? styles.errorInput : {},
				]}
			/>
			<Text style={styles.error} numberOfLines={1}>
				{error?.message}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: 'gainsboro',
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		marginBottom: 2,
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		color: 'dimgrey',
	},
	error: {
		color: 'crimson',
		fontSize: 12,
		marginTop: 5,
		height: 17,
	},

	errorInput: {
		borderColor: 'crimson',
	},
});

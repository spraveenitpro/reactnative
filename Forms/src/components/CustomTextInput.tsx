import {
	TextInput,
	StyleSheet,
	View,
	Text,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { ComponentProps } from 'react';
import { useController } from 'react-hook-form';

type CustomTextInput = {
	label?: string;
	containerStyle?: StyleProp<ViewStyle>;
	name: string;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
	label,
	containerStyle,
	name,
	...textInputProps
}: CustomTextInput) {
	//const error = { message: 'Error' };
	const {
		field: { value, onBlur, onChange },
		fieldState: { error },
	} = useController({ name, rules: { required: `${name} is required` } });

	return (
		<View style={containerStyle}>
			{label && <Text style={styles.label}>{label}</Text>}
			<TextInput
				{...textInputProps}
				value={value}
				onBlur={onBlur}
				onChangeText={onChange}
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

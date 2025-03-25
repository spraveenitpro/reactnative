import { Pressable, Text, StyleSheet, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type CustomButton = {
	title: string;
	rightIcon?: React.ReactNode;
};

export default function CustomButton({ title, rightIcon }: CustomButton) {
	return (
		<Pressable
			onPress={() => console.warn('pressed 🌶️')}
			onLongPress={() => console.warn('Long pressed 🤢')}
			style={styles.button}
		>
			<Text style={styles.buttonText}>{title}</Text>
			<View style={styles.rightIcon}>{rightIcon}</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#005055',
		padding: 20,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16,
		letterSpacing: 1.5,
	},
	rightIcon: {
		position: 'absolute',
		right: 19,
	},
});

import { PropsWithChildren } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KeyboardAwareScrollView({
	children,
}: PropsWithChildren) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1, backgroundColor: 'white' }}
			keyboardVerticalOffset={110}
		>
			<ScrollView
				style={{ backgroundColor: 'white' }}
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="handled"
			>
				<SafeAreaView edges={['bottom', 'top']} style={{ flex: 1 }}>
					{children}
				</SafeAreaView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: 'white',
		padding: 10,
		gap: 5,
	},
});

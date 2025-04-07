import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const CustomButton = ({ title, onPress }) => {
	const [showConfetti, setShowConfetti] = useState(false);

	const handlePress = () => {
		setShowConfetti(true);
		onPress && onPress();
		setTimeout(() => setShowConfetti(false), 3000); // Reset confetti after 3 seconds
	};

	return (
		<View style={styles.container}>
			<Button title={title} onPress={handlePress} />
			{showConfetti && (
				<ConfettiCannon count={200} origin={{ x: 0, y: 0 }} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default CustomButton;

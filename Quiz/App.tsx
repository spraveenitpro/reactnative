import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './src/app/QuizScreen';
import React, { Fragment } from 'react';
import QuizProvider from './src/providers/QuizProvider';

export default function App() {
	return (
		<Fragment>
			<QuizProvider>
				<QuizScreen />
				<StatusBar style='auto' />
			</QuizProvider>
		</Fragment>
	);
}

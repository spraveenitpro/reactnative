import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuizScreen from './src/app/QuizScreen';
import React from 'react';

export default function App() {
    return (
        <>
            <QuizScreen />
            <StatusBar style="auto" />
        </>
    );
}


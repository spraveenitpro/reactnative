import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome5';

export default function App() {
    return (
        <View style={styles.container}>

            <Image
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
                }}
                style={{ width: '100%', aspectRatio: 16 / 9 }}
            />
            <Image source={require('./assets/profile.jpg')}
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 140,
                    borderWidth: 5,
                    borderColor: 'white',
                    marginTop: -75
                }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>React Native!</Text>
            <Text>Making React Native apps</Text>
            <View style={{flexDirection: 'row', marginVertical: 10, gap:10}}>
                <FontAwesome6 name="github" size={24} color="black" />            <StatusBar style="auto" />
                <FontAwesome6 name="twitter" size={24} color="black" />            <StatusBar style="auto" />
                <FontAwesome6 name="at" size={24} color="black" />
            </View>
            <StatusBar style="auto" />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

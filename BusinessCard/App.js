import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
    Linking,
} from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome5'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Bolt12 from './Bolt12'

export default function App() {
    const onContactMe = () => {
        console.warn('Contact Me!')
        Linking.openURL('mailto:teste@gmail.com')
    }
    console.log()
    const name = 'Linda Burge'
    const getOccupation = () => {
        return 'React Native developer'
    }
    const links = {
        github: 'spraveenitpro',
        email: 'praveen@test.com',
        x: 'spraveenitpro',
    }
    console.log(links)
    console.warn('Hello!')
    const renderIcons = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 10,
                    gap: 10,
                }}
            >
                {links.github && (
                    <FontAwesome6 name="github" size={24} color="black" />
                )}
                {links.x && (
                    <FontAwesome6 name="twitter" size={24} color="black" />
                )}
                {links.email && (
                    <FontAwesome6 name="at" size={24} color="black" />
                )}
            </View>
        )
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['top']}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            source={{
                                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
                            }}
                            style={{ width: '100%', aspectRatio: 16 / 9 }}
                        />
                        <Image
                            source={{ uri: 'https://cldup.com/k5OKwRQJ5M.jpg' }}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 140,
                                borderWidth: 5,
                                borderColor: 'white',
                                marginTop: -75,
                            }}
                        />
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                            {name}
                        </Text>
                        <Text>{getOccupation()}</Text>

                        {renderIcons()}

                        <Button title="Contact me" onPress={onContactMe} />
                        <Bolt12 />
                        <StatusBar style="light" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

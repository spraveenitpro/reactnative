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
import ProjectCard from './ProjectCard'
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
    console.log()
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

                        <Text
                            style={{
                                padding: 10,
                                fontSize: 16,
                                lineHeight: 20,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                marginTop: 20,
                            }}
                        >
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ gap: 10, padding: 10 }}
                            >
                                <ProjectCard
                                    name="Apple Cards"
                                    // @ts-ignore
                                    coverImage={require('./assets/projects/project1.jpeg')}
                                />
                                <ProjectCard
                                    name="Trello"
                                    coverImage={require('./assets/projects/project2.jpeg')}
                                />
                                <ProjectCard
                                    name="Flappy Bird"
                                    coverImage={require('./assets/projects/project3.jpeg')}
                                />
                                <ProjectCard
                                    name="Todo App"
                                    coverImage={require('./assets/projects/project4.jpeg')}
                                />
                            </ScrollView>
                        </Text>
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

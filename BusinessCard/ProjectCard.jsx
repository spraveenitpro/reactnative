import { Text, View, Image, StyleSheet } from 'react-native'

function ProjectCard({ name, coverImage }) {
    return (
        <View>
            <Image source={coverImage} style={styles.image} />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        aspectRatio: 16 / 9,
        borderRadius: 10,
        marginTop: 10,
    },
    text: { fontWeight: 'bold', fontSize: 20, color: 'dimgray', marginTop: 5 },
})

export default ProjectCard

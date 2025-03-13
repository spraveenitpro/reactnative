import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, Text, View } from 'react-native';

export default function TabTwoScreen() {
const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [mempoolFees, setMempoolFees] = useState(null);
    const [blockHeight, setBlockHeight] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const priceResponse = await fetch('https://mempool.space/api/v1/prices');
                const priceData = await priceResponse.json();
                setBitcoinPrice(priceData.USD);

                const blockResponse = await fetch('https://mempool.space/api/blocks/tip/height');
                const blockData = await blockResponse.json();
                setBlockHeight(blockData);

                const mempoolFeesResponse = await fetch('https://mempool.space/api/v1/fees/recommended');
                const feesData = await mempoolFeesResponse.json();
                setMempoolFees(feesData.fastestFee);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.headerText}>Explore</Text>
<View style={styles.card}>
                <Text style={styles.cardTitle}>Bitcoin Info</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Bitcoin Price: ${bitcoinPrice ?? 'Loading...'}</Text>
                    <Text style={styles.infoText}>Mempool Fees: {mempoolFees ?? 'Loading...'} sats/vB</Text>
                    <Text style={styles.infoText}>Block Height: {blockHeight ?? 'Loading...'}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
safeArea: {
        flex: 1,
        backgroundColor: '#A1CEDC',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoContainer: {
        marginTop: 10,
    },
    infoText: {
        fontSize: 18,
        marginVertical: 5,
    },
});

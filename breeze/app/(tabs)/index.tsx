import { useEffect, useState } from 'react';
import { Text, StyleSheet, Platform, StatusBar, SafeAreaView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function HomeScreen() {
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
            <Text style={styles.headerText}>Hello World</Text>
            {/* Remove Bitcoin Info widget */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#A1CEDC',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
});

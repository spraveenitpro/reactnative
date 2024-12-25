import { Text, View, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import QRCode from 'react-native-qrcode-svg'

function Bolt12() {
    const [qrValue, setQrvalue] = useState(
        'lno1pgjrgvp3vvmnzctx94nrqdpe956xxde495ukvvtx95ckxdenx3nrwvnpx9jnj93pqgfffll4jmjf0tffqtx47xt886gzp9fajp3966xz96gm2xj9cqedx'
    )

    return (
        <View>
            <Text
                style={{
                    padding: 10,
                    fontSize: 16,
                    lineHeight: 20,
                    alignSelf: 'center',
                }}
            >
                Buy me a Coffee!
            </Text>
            <QRCode
                value={qrValue}
                size={200}
                color="black"
                backgroundColor="white"
            />
        </View>
    )
}

export default Bolt12

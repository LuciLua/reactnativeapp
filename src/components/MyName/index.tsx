import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button, Alert, Touchable, TouchableOpacity } from 'react-native'
import { styles } from './style'
import useName from '../../hooks/useName'


function MyName({ name, setName }) {


    function sendAlert() {
        Alert.alert('⚠ Malware alert', `${name}, your smartphone have a powerful virus now, all your files has been encrypted`)
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Your name here'
                onChangeText={name => setName(name)}
                style={styles.textInput} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => sendAlert()}>
                <Text>🦠</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyName
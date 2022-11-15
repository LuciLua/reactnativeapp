
import { View, Text, Button } from 'react-native'
import MyName from '../components/MyName'
import { useState } from 'react'
import useName from '../hooks/useName'
import styles from '../styles/globals'

function Initial({ navigation }) {

    const { name, setName } = useName()


    function openScreen() {
        navigation.navigate('Home')
    }

    return (
        <View>
            <Text>INITIAL:  {name}</Text>
            <MyName name={name} setName={setName} />
            <View style={styles.button}>
                <Button title='Go home' onPress={openScreen} color={'#1299ee'} />
            </View>
        </View>
    )
}

export default Initial
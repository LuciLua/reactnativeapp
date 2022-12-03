import React from 'react'
import { View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StackParamList } from '../types/types'
import { styles } from '../styles/StylesCardPage'

import { Image } from 'react-native'

type StackProps = NativeStackScreenProps<StackParamList, 'CardPage'>

type Props = {
    routes: StackProps
}

function CardPage({ navigation, route }) {

    const { params } = route

    function back() {
        navigation.navigate({
            name: 'Home',
            params: { name: '', description: '', picture: '' },
            merge: true,
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Text style={styles.name}>{params.name}</Text>
                <Text style={styles.description}>{params.description}</Text>

                <Image
                    source={require(`../../assets/pp.jpg`)}
                    style={{ width: 'auto', height: 300, backgroundColor: '#121212' }} />

                <Text style={styles.description}>{params.picture}</Text>
                <View style={styles.button}>
                    <Button onPress={back} color={'#007acc'} title='Back To Home'></Button>
                </View>
            </ScrollView>
        </View >
    )
}

export default CardPage
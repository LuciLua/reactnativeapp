import React from 'react'
import { View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StackParamList } from '../types/types'
import { styles } from '../styles/StylesCardPage'

type StackProps = NativeStackScreenProps<StackParamList, 'CardPage'>

type Props = {
    routes: StackProps
}


function CardPage({ navigation, route }) {

    const { params } = route

    function back() {
        navigation.navigate({
            name: 'Home',
            params: { name: '', description: '', picture: '../../../assets/1.jpg' },
            merge: true,
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Text style={styles.name}>{params.name}</Text>
                <Text style={styles.description}>{params.description}</Text>
                {/* <Image source={require(params.picture)} /> */}
                <Button onPress={back} title='Back To Home' color={'#ffd119'}></Button>
            </ScrollView>
        </View >
    )
}

export default CardPage
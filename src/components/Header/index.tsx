import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image } from 'react-native'
import useName from '../../hooks/useName'
import { styles } from './style'


function MainHeader() {

    const { name, setName } = useName()
    
    function back() {
        // const navigation = useNavigation()
        console.log('test')
        // console.log(navigation)
        // navigation.navigate('Initial')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Apptares
            </Text>
            <View style={styles.profilePhotoContainer} onTouchEndCapture={back}>
                <Image style={styles.img} source={require('../../../assets/3.png')} />
            </View>
        </View>
    )
}


export default MainHeader
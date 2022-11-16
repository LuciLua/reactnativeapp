import React from 'react'
import { View, Text, Image } from 'react-native'
import useName from '../../hooks/useName'
import { styles } from './style'


function MainHeader({ onPress }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Apptares
            </Text>
            <View style={styles.profilePhotoContainer} onTouchEndCapture={() => onPress()}>
                <Image style={styles.img} source={require('../../../assets/3.png')} />
            </View>
        </View>
    )
}


export default MainHeader
import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'


function MainHeader({ onPress }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Cinemapp
            </Text>
            <View style={styles.profilePhotoContainer} onTouchEndCapture={() => onPress()}>
                <Image style={styles.img} source={require('../../../assets/frontal.jpg')} />
            </View>
        </View>
    )
}


export default MainHeader
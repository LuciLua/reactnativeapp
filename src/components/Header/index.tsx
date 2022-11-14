import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'


function MainHeader({ name }) {
    return (

        <View style={styles.container}>
            <Text style={styles.text}>
                {name}
            </Text>
            <View style={styles.profilePhotoContainer}>
                <Image style={styles.img} source={require('../../../assets/luci.jpg')} />
            </View>
        </View>
    )
}


export default MainHeader
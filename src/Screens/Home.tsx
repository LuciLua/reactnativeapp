import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'
import MyName from '../components/MyName'
import { useState } from 'react'
import { FlatList } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler'

function Home() {
    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <Cards/>
            <Cards/>
            <Cards/>
            </ScrollView>
        </View >
    )
}

export default Home
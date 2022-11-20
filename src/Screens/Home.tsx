import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react'

import data from '../../data.json'

function Home({ navigation }) {
    function goCardPage() {
        navigation.navigate('CardPage', 'aa')
    }
    const [items, setItems] = useState(data)


    function goPageCard(){
        navigation.navigate('CardPage', {name: 'sad'})
    }

    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Cards onTouchEnd={goPageCard} items={items.one} />
            </ScrollView>
        </View >
    )
}

export default Home
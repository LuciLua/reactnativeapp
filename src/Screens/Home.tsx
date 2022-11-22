import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react'

import data from '../../data.json'

function Home({ navigation }) {
    
    const [items, setItems] = useState(data)
    
    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Cards items={items.one} />
            </ScrollView>
        </View >
    )
}

export default Home
import { View } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'

import data from '../../data.json'

function Home({ navigation }) {
    
    const [items, setItems] = useState(data)
    
    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Cards items={items.enquadramentos} title={'Enquadramentos'} subtitle={'Enquandramento relacionado a Plano'}/>
                <Cards items={items.angulos} title={'Enquadramentos/Angulos'} subtitle={'Enquandramento relacionado à Angulação'}/>
            </ScrollView>
        </View >
    )
}

export default Home
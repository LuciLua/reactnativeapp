import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'

function Home() {
    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Cards />
                <Cards />
                <Cards />
            </ScrollView>
        </View >
    )
}

export default Home
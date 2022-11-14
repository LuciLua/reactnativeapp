import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'

function Home() {
    return (
        <View>
            <StatusBar style="auto" />
            <Cards />
        </View>
    )
}

export default Home
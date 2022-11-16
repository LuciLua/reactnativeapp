import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'

function Home({ navigation }) {
    function goCardPage() {
        navigation.navigate('CardPage')
    }

    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Cards onPress={goCardPage} />
                <Cards onPress={goCardPage} />
                <Cards onPress={goCardPage} />
            </ScrollView>
        </View >
    )
}

export default Home
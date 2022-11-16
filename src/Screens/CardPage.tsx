import { View, Text, Button } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function CardPage({ navigation }) {

    function back(){
        navigation.navigate('Home')
    }

    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Text>Hello</Text>
                <Button onPress={back} title='back'></Button>
            </ScrollView>
        </View >
    )
}

export default CardPage
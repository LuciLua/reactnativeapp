import { View, Text, Button } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function CardPage({ navigation, name }) {

    function back(){
        navigation.navigate('Home')
    }

    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Text>Hello</Text>
                <Text>{name}</Text>
                <Button onPress={back} title='Back To Home' color={'#ffd119'}></Button>
            </ScrollView>
        </View >
    )
}

export default CardPage
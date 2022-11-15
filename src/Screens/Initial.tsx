
import { View, Button } from 'react-native'
import MyName from '../components/MyName'
import useName from '../hooks/useName'
import styles from '../styles/globals'

function Initial({ navigation }) {

    const { name, setName } = useName()


    function openScreen() {
        navigation.navigate('Home')
    }

    return (
        <View>
            <MyName name={name} setName={setName} />
            <View style={styles.button}>
                <Button title='Go home' onPress={openScreen} color={'#1299ee'} />
            </View>
        </View>
    )
}

export default Initial
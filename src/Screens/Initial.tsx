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
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#1e1e1e'}}>
            {/* <MyName name={name} setName={setName} /> */}
            <View>
                <Button color={'#007acc'} title='Go home' onPress={openScreen} />
            </View>
        </View>
    )
}

export default Initial
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Button } from 'react-native'
import { styles } from './CardStyle'


function RenderImg({ item }) {

    function getName() {

        // return require(`../../../../assets/${item.picture}.jpg`)
        // return { uri: 'https://i.ytimg.com/vi/YKBRfDSw8h0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtjErrqDO855_nkExpmaoy4QE6WQ' }
        return { uri: './assets/1.jpg' }
        // return require(`../../../../assets/closeup.jpg`)
    }
    return <Image style={styles.img} source={getName()}/>
    // return <Image style={styles.img} source={require(`../../../../assets/1.jpg`)} />
    // return <Image style={styles.img} source={{ uri: `./../../../../assets/1.jpg` }} />
}

function Card({ item }) {

    const navigation = useNavigation<any>()

    function onTouchEnd() {
        navigation.navigate('CardPage', { name: item.name, description: item.description, picture: item.picture })

    }

    return (
        <View style={styles.card}>
            <View style={styles.infoCard}>
                <Text style={styles.h1}>
                    {item.name}
                </Text>
                <Text style={styles.id}>
                    {item.id}
                </Text>
                <Text style={styles.h2}>
                    {item.othername}
                </Text>
            </View>

            <View style={styles.imgContainer}>
                <RenderImg item={item} />
            </View>
            <View style={styles.button}>
                <Button title='Click' color={'#121212'} onPress={onTouchEnd} />
            </View>

        </View>
    )
}

export default Card
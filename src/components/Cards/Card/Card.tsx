import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Button } from 'react-native'
import { styles } from './CardStyle'


function RenderImg({ image }) {
    const path1 = `../../../../assets/${image}`.toString()
    console.log(path1)

    const path2 = `../../../../assets/mediumshot.jpg`

    // return <Image style={styles.img} source={require(path1)} />
    return <Image style={styles.img} source={require(path2)} />
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
                <RenderImg image={item.picture} />
            </View>
            <View style={styles.button}>
                <Button title='Click' color={'#1e1e1e'} onPress={onTouchEnd} />
            </View>

        </View>
    )
}

export default Card
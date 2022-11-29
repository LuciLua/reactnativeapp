import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Button } from 'react-native'
import { styles } from './CardStyle'


function RenderImg({item}) {

    function getName(){
        var path1 =  `../../../../assets/pp.jpg`
        var path2 =  `../../../../assets/${item.picture}`
        // var path =  require(`../../../../assets/1.jpg`)
        
        var name = path1
        // var name = ''

        item.picture ? name = require(path1) : name = require(path1)

        // const name =  require(`../../../../assets/1.jpg`)
        console.log(name)


        return name
        // return require(`../../../../assets/1.jpg`)
    }
    // return <Image style={styles.img} source={require(`../../../../assets/1.jpg`)} />
    return <Image style={styles.img} source={getName()} />
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
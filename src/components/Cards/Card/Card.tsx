import { View, Text, Image, Button } from 'react-native'
import { styles } from './CardStyle'

function Card({ item, onTouchEnd }) {


    // const getImages = (itempic) => {
    //     var result = `../../../../assets/${itempic.picture}`
    //     console.log(result)

    //     var img = `../../../../assets/pg.jpg`
    //     // var img = `../../../assets/${itempic.picture}`

    //     // return require(`../../../assets/amelie.webp`)
    //     // return require(img)
    //     return require(result)
    // }

    const test = `../../../../assets/${item.picture}`
    const test2 = '../../../../assets/pg.jpg'
    // const test = `../../../../assets/${item.picture}`

    console.log(item.picture)

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
                    {item.email}
                </Text>
            </View>

            <View style={styles.imgContainer}>
                {/* <Image style={styles.img} source={require(`./../../../../assets/normal.jpg`)} /> */}
               <Image style={styles.img} source={require(test2)} /> 
            </View>
            {/* <Text>
                {test}
            </Text> */}

            <View style={styles.button}>
                <Button title='Click' color={'#121212'} onPress={onTouchEnd} />
            </View>

        </View>
    )
}

export default Card
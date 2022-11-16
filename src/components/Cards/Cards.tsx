import { useEffect, useState } from "react";
import { FlatList, Image, Text, View, Button } from "react-native";
import { styles } from "./style";

function Cards({ onPress }) {

    const [itens, setItems] = useState([
        {
            id: 0,
            name: 'Avatar 1',
            email: 'avatar1@gmail.com',
            picture: require('../../../assets/1.jpg')
        },
        {
            id: 1,
            name: 'Avatar 2',
            email: 'avatar2@gmail.com',
            picture: require('../../../assets/3.png')
        },
        {
            id: 2,
            name: 'Avatar 3',
            email: 'avatar3@gmail.com',
            picture: require('../../../assets/4.jpeg')
        },
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Avatars available
            </Text>
            <FlatList
                horizontal={true}
                data={itens}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
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
                            <Image style={styles.img} source={item.picture} />
                        </View>
                        <View style={styles.button} onTouchEndCapture={() => onPress()}>
                        <Text style={styles.h2}>Click</Text>
                        </View>

                    </View>

                )
                }
            />
        </View >
    )
}

export default Cards
import { View, Text } from 'react-native'
import Cards from '../components/Cards/Cards'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'

function Home({ navigation }) {
    function goCardPage() {
        navigation.navigate('CardPage')
    }

    const [items, setItems] = useState(

        {
            one: [
                {
                    id: 0,
                    name: 'Avatar 1',
                    email: 'avatar1@gmail.com',
                    picture: require('../../assets/1.jpg')
                },
                {
                    id: 1,
                    name: 'Avatar 2',
                    email: 'avatar2@gmail.com',
                    picture: require('../../assets/3.png')
                },
                {
                    id: 2,
                    name: 'Avatar 3',
                    email: 'avatar3@gmail.com',
                    picture: require('../../assets/4.jpeg')
                },
            ],
            two: [
                {
                    id: 0,
                    name: 'Avatar 1',
                    email: 'avatar1@gmail.com',
                    picture: require('../../assets/1.jpg')
                },
                {
                    id: 1,
                    name: 'Avatar 2',
                    email: 'avatar2@gmail.com',
                    picture: require('../../assets/3.png')
                },
                {
                    id: 2,
                    name: 'Avatar 3',
                    email: 'avatar3@gmail.com',
                    picture: require('../../assets/4.jpeg')
                },
            ],
            three: [
                {
                    id: 0,
                    name: 'Avatar 1',
                    email: 'avatar1@gmail.com',
                    picture: require('../../assets/2.png')
                },
                {
                    id: 1,
                    name: 'Avatar 2',
                    email: 'avatar2@gmail.com',
                    picture: require('../../assets/3.png')
                },
                {
                    id: 2,
                    name: 'Avatar 3',
                    email: 'avatar3@gmail.com',
                    picture: require('../../assets/4.jpeg')
                },
                {
                    id: 3,
                    name: 'Avatar 3',
                    email: 'avatar3@gmail.com',
                    picture: require('../../assets/4.jpeg')
                },
                {
                    id: 4,
                    name: 'Avatar 3',
                    email: 'avatar3@gmail.com',
                    picture: require('../../assets/4.jpeg')
                },
            ]
        }

    )

    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Cards items={items.one} onPress={goCardPage} />
                <Cards items={items.two} onPress={goCardPage} />
                <Cards items={items.three} onPress={goCardPage} />
            </ScrollView>
        </View >
    )
}

export default Home
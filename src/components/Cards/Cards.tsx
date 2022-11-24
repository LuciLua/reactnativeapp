import { FlatList, Text, View } from "react-native";
import Card from "./Card/Card";
import { styles } from "./CardsStyle";

function Cards({ items, title, subtitle }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
            <FlatList
                horizontal={true}
                data={items}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
            />
        </View >
    )
}

export default Cards
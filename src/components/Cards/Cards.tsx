import { FlatList, Text, View } from "react-native";
import Card from "./Card/Card";
import { styles } from "./CardsStyle";

function Cards({ items, onTouchEnd }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Enquadramentos
            </Text>
            <Text style={styles.subtitle}>
                Planos e ângulos
            </Text>
            <FlatList
                horizontal={true}
                data={items}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card onTouchEnd={onTouchEnd} item={item} />}
            />
        </View >
    )
}

export default Cards
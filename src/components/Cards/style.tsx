import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    card: {
        backgroundColor: '#1299ee', 
        padding: 10,
        marginRight: 10,
        marginTop: 10,
        color: '#fff',
        height: 250,
        position: "relative",
        display: "flex",
        borderRadius: 10,

        shadowColor: '#555',
        shadowOffset: { width: -5, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 0.01,
        elevation: 10,
    },
    imgContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 300,
        position: 'relative',
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: '#fff',
        marginTop: 'auto'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    infoCard: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: 70,
    },
    h1: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'monospace'
    },
    h2: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'monospace'
    },
    id: {
        position: "absolute",
        fontSize: 70,
        color: "#fff5",
        right: 10
    }
})
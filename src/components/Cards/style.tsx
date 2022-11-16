import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#1299ee',
        padding: 10,
        marginRight: 10,
        marginTop: 10,
        color: '#fff',
        height: 290,
        position: "relative",
        display: "flex",
        borderRadius: 10,

        elevation: 5,
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
        marginTop: 'auto',
        marginBottom: 10
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
    },
    h2: {
        color: '#fff',
        fontSize: 15,
    },
    id: {
        position: "absolute",
        fontSize: 70,
        color: "#fff5",
        right: 10
    },
    button: {
        backgroundColor: '#3faaee',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
        color: '#fff'
    }
})
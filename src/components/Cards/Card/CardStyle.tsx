import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffd119',
        padding: 10,
        marginRight: 25,
        marginTop: 10,
        color: '#000',
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
        height: 130,
        width: 300,
        position: 'relative',
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: '#fff',
        marginTop: 'auto',
        marginBottom: 10,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    infoCard: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: 70,
    },
    h1: {
        color: '#404040',
        fontWeight: '900',
        fontSize: 20,
    },
    h2: {
        color: '#666',
        fontSize: 13,
    },
    id: {
        position: "absolute",
        fontSize: 70,
        color: "#40404025",
        right: 10
    },
    button: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
    }
})
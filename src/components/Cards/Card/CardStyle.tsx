import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#007acc',
        padding: 10,
        margin: 15,
        height: 290,
        position: "relative",
        display: "flex",
        borderRadius: 10,

        elevation: 10,
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
        backgroundColor: '#007acc',
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
        color: '#add4ef',
        fontWeight: '900',
        fontSize: 20,
    },
    h2: {
        color: '#add4ef',
        fontSize: 13,
    },
    id: {
        position: "absolute",
        fontSize: 70,
        color: "#9cdcfe33",
        right: 10
    },
    button: {
        display: "flex",
        justifyContent: "center",
        padding: 5,
        borderRadius: 5,
        position: "relative",
        width: 'auto',
    }
})
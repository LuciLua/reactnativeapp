import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#252526",
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    name: {
        marginBottom: 10,
        fontSize: 30,
        fontWeight: '900',
        color: "#fff"
    },
    description: {
        fontSize: 15,
        color: "#f4f9fd88",
        marginBottom: 10,

    },
    button: {
        position: 'relative',
        backgroundColor: '#007acc',
        width: 'auto',
        height: 'auto',
        borderRadius: 3,
        overflow: 'hidden',
        color: '#ff0',
        marginTop: 20
    }
})
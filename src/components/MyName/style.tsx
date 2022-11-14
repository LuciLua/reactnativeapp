import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        position: 'relative',
        margin: 10
    },
    button: {
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: '#ccc',
        width: 40,
        height: 40,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        marginRight: 'auto',
        backgroundColor: '#fff',
        color: '#121212',
        padding: 12,
        paddingEnd: 50,
        borderRadius: 10,
        width: '100%'
    }
});

export { styles }

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        width: '90%',
        borderRadius: 10,
        position: 'relative',
    },
    button: {
        marginLeft: 10,
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
        borderRadius: 10
    }
});

export { styles }

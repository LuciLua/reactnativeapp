import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: '100%',
    },
    button: {
        width: 200,
        height: 70,
        shadowColor: '#000',
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 10,
        shadowOpacity: 100,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default styles
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10

    },
    
    subtitle: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 20

    },
    infoCard: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: 70,
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
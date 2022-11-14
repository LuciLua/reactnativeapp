import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1299ee',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        padding: 20, 
        width: '100%',
        position: 'relative',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        color: '#ddd',
        fontWeight: 'bold'
    },
    profilePhotoContainer: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'relative',
        overflow: 'hidden',
        marginLeft: 'auto'
    },
    img: {
        width: 50,
        height:  50
    }
});

export { styles }

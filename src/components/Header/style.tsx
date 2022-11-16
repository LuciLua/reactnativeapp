import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1299ee',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        padding: 20, 
        width: '100%',
        position: 'relative',
        top: 0,
        display: 'flex',
        flexDirection: 'row',

        shadowOffset: { width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
    text: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 25
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

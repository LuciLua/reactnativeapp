import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1299ee',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        padding: 20, 
        width: '100%',
        position: 'relative',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
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

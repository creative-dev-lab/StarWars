import { StyleSheet, Dimensions } from 'react-native';
import { normalize } from '../appUtils';
const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    mainContainer: {
        flex: 1,
        padding: normalize(10),
        paddingTop: normalize(10),
    },
    companyContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        elevation: normalize(8),
    },
    mainTextContainer: {
        width: window.width - normalize(40),
        borderBottomLeftRadius: normalize(10),
        borderBottomRightRadius: normalize(10),
        padding: normalize(10),
        paddingBottom: normalize(20),
        backgroundColor: 'white'
    },
    description: {
        fontSize: normalize(12),
        color: '#555',
    },
    moreDetail: {
        marginTop: normalize(5),
        fontSize: normalize(12),
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: normalize(14),
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    episode: {
        fontSize: normalize(12),
        marginTop: normalize(10),
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: window.width - normalize(40),
        padding: normalize(10),
        borderTopLeftRadius: normalize(10),
        borderTopRightRadius: normalize(10),
    }
});


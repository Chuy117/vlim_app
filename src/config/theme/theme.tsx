import { StyleSheet } from 'react-native';

export const colours = {
    text: 'black',
    background: '#F3F2F7',
    primary: '#90b0f1',
    lettersButton: '#fafafa',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colours.text,
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        height: 45,
        width: 80,
        backgroundColor: colours.primary,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 25,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionSub: {
        margin: 10,
        alignItems: 'center'
    },
    textSub: {
        fontSize: 15,
        color: '#7A7A7A',
        textAlign: 'justify'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        borderColor: '#6742f9',
        borderBottomWidth: 1.5,
        borderTopWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
    },
    viewPicker: {
        alignItems: 'center',
        paddingTop: 10,
    },
});
import { Image, View } from 'react-native'
import { colours, styles } from '../config/theme/theme'
import { Header } from '../components/Header'
import { ButtonCustom } from '../components/ButtonCustom'
import { useNavigation } from '@react-navigation/native'

export const WelcomeScreen = () => {

    const navigation = useNavigation<any>();

    return (
        <View style={[
            styles.container,
            {
                flexDirection: 'column',
            },
        ]}>
            <View style={styles.imageWel}>
                <Image source={require('../assets/images/control-auto.jpg')} style={{ height: '50%' }} />
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Header title='Bienvenido al registro de acceso vehicular' />
                <ButtonCustom colour={colours.primary} label='Registrar' onPress={() => navigation.navigate('Registro')} />
            </View>
        </View>
    )

}
import { Text, View } from 'react-native';
import { HeaderInterface } from '../interfaces/HeaderInterface';
import { styles } from '../config/theme/theme';

export const Header = ({ title }: HeaderInterface) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
